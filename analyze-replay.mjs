#!/usr/bin/env node
// Analyze Bugpoint replay JSON files. Usage: node analyze-replay.mjs file1 [file2 ...]
// The replay format is {v, s (seed), e: [{k:"d"|"u"|"m", x, y, t, tick}, ...]}.

import { readFileSync } from "node:fs";
import { basename } from "node:path";

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: analyze-replay.mjs <replay.json> [...]");
  process.exit(2);
}

function fmtMs(ms) {
  const s = ms / 1000;
  if (s < 60) return `${s.toFixed(1)}s`;
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s - m * 60)).padStart(2, "0")}`;
}

function analyze(path) {
  const r = JSON.parse(readFileSync(path, "utf8"));
  const events = r.e;
  const strokes = [];
  let cur = null;

  for (const ev of events) {
    if (ev.k === "d") {
      cur = { startT: ev.t, startTick: ev.tick, pts: [{ x: ev.x, y: ev.y, t: ev.t }] };
    } else if (ev.k === "m" && cur) {
      cur.pts.push({ x: ev.x, y: ev.y, t: ev.t });
    } else if (ev.k === "u" && cur) {
      cur.pts.push({ x: ev.x, y: ev.y, t: ev.t });
      cur.endT = ev.t;
      cur.endTick = ev.tick;
      cur.durMs = cur.endT - cur.startT;
      let len = 0;
      for (let i = 1; i < cur.pts.length; i++) {
        len += Math.hypot(
          cur.pts[i].x - cur.pts[i - 1].x,
          cur.pts[i].y - cur.pts[i - 1].y,
        );
      }
      cur.lengthPx = len;
      // straight-line distance from first to last pt
      const a = cur.pts[0], b = cur.pts[cur.pts.length - 1];
      cur.chordPx = Math.hypot(b.x - a.x, b.y - a.y);
      cur.straightness = cur.lengthPx > 0 ? cur.chordPx / cur.lengthPx : 0;
      strokes.push(cur);
      cur = null;
    }
  }

  const firstT = events[0]?.t ?? 0;
  const lastT = events[events.length - 1]?.t ?? 0;
  const gameMs = lastT - firstT;

  const gaps = [];
  for (let i = 1; i < strokes.length; i++) {
    gaps.push(strokes[i].startT - strokes[i - 1].endT);
  }

  const stats = (arr) => {
    if (!arr.length) return { n: 0 };
    const sorted = [...arr].sort((a, b) => a - b);
    const sum = sorted.reduce((x, y) => x + y, 0);
    return {
      n: sorted.length,
      min: sorted[0],
      p50: sorted[Math.floor(sorted.length / 2)],
      mean: sum / sorted.length,
      p90: sorted[Math.floor(sorted.length * 0.9)],
      max: sorted[sorted.length - 1],
    };
  };

  const lenStats = stats(strokes.map((s) => s.lengthPx));
  const durStats = stats(strokes.map((s) => s.durMs));
  const straightStats = stats(strokes.map((s) => s.straightness));
  const gapStats = stats(gaps);

  console.log(`\n=== ${basename(path)} ===`);
  console.log(`seed=${r.s}  version=${r.v}`);
  console.log(`total event duration : ${fmtMs(gameMs)} (${events.length} events)`);
  console.log(`strokes              : ${strokes.length}`);
  console.log(`strokes per minute   : ${(strokes.length / (gameMs / 60000)).toFixed(1)}`);
  console.log(`stroke length (px)   : min ${lenStats.min.toFixed(0)}  p50 ${lenStats.p50.toFixed(0)}  mean ${lenStats.mean.toFixed(0)}  p90 ${lenStats.p90.toFixed(0)}  max ${lenStats.max.toFixed(0)}`);
  console.log(`stroke duration (ms) : min ${durStats.min.toFixed(0)}  p50 ${durStats.p50.toFixed(0)}  mean ${durStats.mean.toFixed(0)}  p90 ${durStats.p90.toFixed(0)}  max ${durStats.max.toFixed(0)}`);
  console.log(`straightness         : p50 ${straightStats.p50.toFixed(2)}  mean ${straightStats.mean.toFixed(2)}  (1=line, <1=curved)`);
  console.log(`between-stroke gap   : p50 ${gapStats.p50?.toFixed(0) ?? "-"}ms  mean ${gapStats.mean?.toFixed(0) ?? "-"}ms  max ${gapStats.max?.toFixed(0) ?? "-"}ms`);

  // Tongue cap is 240 + J*40 during first 50 catches. So "long" strokes (>400 px)
  // are only possible later in a run. Count how the stroke-length distribution
  // evolves across quarters of the session.
  const quarters = [[], [], [], []];
  for (const s of strokes) {
    const q = Math.min(3, Math.floor((s.startT - firstT) / gameMs * 4));
    quarters[q].push(s.lengthPx);
  }
  console.log("stroke-length per quarter:");
  quarters.forEach((arr, i) => {
    const s = stats(arr);
    if (s.n) console.log(`  Q${i + 1}: n=${s.n}  mean=${s.mean.toFixed(0)}  p50=${s.p50.toFixed(0)}  max=${s.max.toFixed(0)}`);
  });

  // Categorize strokes by length bucket.
  // Initial tongue cap is 240px; a stroke >= 300 is clearly a committed sweep.
  // Under ~50px the stroke can barely cross more than one bug hitbox.
  const buckets = { tap: 0, short: 0, medium: 0, sweep: 0, huge: 0 };
  for (const s of strokes) {
    if (s.lengthPx < 50) buckets.tap++;
    else if (s.lengthPx < 150) buckets.short++;
    else if (s.lengthPx < 300) buckets.medium++;
    else if (s.lengthPx < 600) buckets.sweep++;
    else buckets.huge++;
  }
  const pct = (n) => ((n / strokes.length) * 100).toFixed(0) + "%";
  console.log(`stroke buckets       : tap<50 ${buckets.tap} (${pct(buckets.tap)})  short<150 ${buckets.short} (${pct(buckets.short)})  med<300 ${buckets.medium} (${pct(buckets.medium)})  sweep<600 ${buckets.sweep} (${pct(buckets.sweep)})  huge≥600 ${buckets.huge} (${pct(buckets.huge)})`);

  return { file: basename(path), strokes: strokes.length, gameMs, lenMean: lenStats.mean };
}

const summaries = files.map(analyze);

console.log("\n=== summary ===");
console.log("file                       strokes  duration   mean stroke px");
for (const s of summaries) {
  console.log(
    `${s.file.padEnd(26)}  ${String(s.strokes).padStart(6)}  ${fmtMs(s.gameMs).padStart(8)}  ${s.lenMean.toFixed(0).padStart(13)}`,
  );
}
