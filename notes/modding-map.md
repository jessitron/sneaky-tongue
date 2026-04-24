# Bugpoint — modding map for richer feedback

This is a pointer-map for adding new in-game feedback (score pops, combo
indicators, event notifications, debug overlays) to the shipped build.
Line numbers refer to `dist/bugpoint.pretty.js`.

## The build you're modifying

- There is no source repo (GitHub repo is private). You are editing the
  beautified ship build: `dist/bugpoint.pretty.js`.
- `index.html` loads `./dist/bugpoint.js`. For local dev, either:
  1. Edit `index.html` to load `./dist/bugpoint.pretty.js`, or
  2. Copy `bugpoint.pretty.js` over `bugpoint.js`.
- Serve the folder with any static server (`python3 -m http.server 8000`
  from `/Users/jessitron/code/terpimost`, then open `http://localhost:8000`).
- BeepBox audio (`src/vendor/beepbox_stripped_min.js`) is self-contained;
  you won't need to touch it for feedback features.

## Existing debug affordances (use these first!)

- `const __DEV__ = false;` at line **1**. **Flip to `true`** and a whole
  debug panel (line 3191 onward) activates with buttons to manually trigger
  speedup, slowdown, big, small, time, skull, all formations, etc. This
  alone is a huge visibility upgrade — try it before building new UI.
- `<button id="game-bg-debug-toggle">Debug</button>` + `<div id="game-bg-debug-panel"></div>` are always in the DOM (`index.html:103-104`). The panel is populated at line 3445 and shows live state.
- Runtime inspection hooks already on `window` (no `__DEV__` needed):
  - `_debugGetRecording()` — current replay (line 990)
  - `_debugGetCatchLog()` — all catch events this run (line 992)
  - `_debugGetCatchSnapshots()` — per-catch bug snapshots (line 997)
  - `_debugGetStrokeLog()` — stroke telemetry (line 1002)
  - `_debugGetBugTrace()` — per-bug movement trace (line 2814)
  - `_debugGetRngCallCount()` — deterministic RNG counter (line 840)
  - `setGameTickDelay(ms)` — slow-mo / fast-forward (line 985)

## Hook points — where to inject feedback

### Input / stroke lifecycle
- Pointer handlers at lines **3073–3180**: `q5` (down), `z5`/`Y5` (move), `W5`/`a7` (up → reveal stroke).
- **Stroke-submit** happens in `a7()` at line 3150. This is where a stroke becomes a committed tongue shape (`V5` trims to `x3`, `W5` resamples, `Y5` smooths, `z5` normalises, `s1` builds Bézier segments).
- To annotate a stroke the moment it launches, intercept here. You have
  access to the raw points, the trimmed path, and the tongue path length.

### Catch resolution — the big one
- **Function: catch logic + scoring effects, lines 2440–2641.**
- Key locals inside that block when a stroke resolves:
  - `J` = bug count caught this stroke
  - `N0` = non-normal (emoji) bugs attached
  - `G0` = normal-bug attach anchor
  - `X7` = map of every emoji type → was-it-caught bool
  - `I4` = protection flag (formation active or formation-emoji in stroke)
  - `a` = running total caught (score display)
  - `D4` += `J` when `J >= 3` (multibug points bucket)
  - `C4` += 1 per non-normal (emoji points bucket)
- **Best place to fire "+N combo!" feedback**: right after line **2602**
  (`if (J >= 3) D4 += J;`) — you already know `J` and have attached-bug
  coordinates on each `I`.
- Existing floating label helper: `C3(text, x, y)` at line 906 —
  already used to announce emoji effects (`W7[type]`, "Longer tongue",
  etc.). Reuse for your own labels.

### Score pop (DOM)
- `G1($)` at line 963 spawns the `+N` score pop next to the bug counter.
  It's the pattern to clone for other flash-counters.

### Level / period lifecycle
- `r3($=!0)` at line **1100** = begin new level. Increments `u0` (level),
  resets `n` (per-level count), reassigns event schedules (`o3`, `i3`,
  `B3`, `P4`, `f4`, `V3`, `$3`, `Z3`, `X3`, `z3`, `K3`).
- `f7($)` at line **871** = "Level N" popup text.
- Level-end detection is at line **2639** (`if (f0 === 0)`) — every bug
  dead → spawn 3, flip `L4=true`, call `r3(!1)` silently.
- **Growth-phase end** (99-bug cap, fires mirror) at line **2637**.

### Scheduled event trigger (emoji spawns)
- `h7()` at line **1149** is called after every catch. It's a big
  if-ladder of `if (!alreadyFired && n >= threshold) { Z0(eventName); flag = true }`.
- `Z0($)` at line 2052 converts a scheduled event into an actual spawn
  (finds a random normal bug, reassigns its `type`). That's the moment
  a new emoji appears on the field — a great place to visually foreshadow.

### Timer
- `V4` = per-level budget ms (line 976: 120000 at L1, decays by 0.8, floor 40000).
- `m0` = level-start tick stamp; `k0` = tick offset (used by ⏱️ rewind).
- `k` = current tick; `p` = wall-clock ms.
- Timer **pauses when ≤1 bug alive** (line 2874: `if (z <= 1 && !K) m0++`).
  If you want to visualize "timer paused" state, read `z` there.
- Timer ring update: `F4($)` at line 1283 sets SVG stroke-dashoffset on
  `#game-bg-time-sweep`. Called once per frame from line 2879.

### Formation phases
- Activation: `r($)` at line 2335. Writes `F.holdStartTick`,
  `F.returnStartTick`, `F.expiresAtTick`, `F.formationPhase` = "assemble" → "hold" → "scatter".
- Hold-window short-circuit: `Z5()` at line 2409 — fires when you stroke
  during hold, drops remaining hold time to 2s scatter.
- Per-bug phase is computed inline at lines 1663–1687. A phase-change
  hook would need to watch `F.formationPhase` string transitions.

### Deterministic RNG (important if you mod scoring)
- `A()` at line **826** is the seeded PRNG (state `R4`/`w4`). EVERY
  randomized decision goes through it. Adding a `Math.random()` call
  into game logic will not break playback, but adding or removing an
  `A()` call WILL desync replays. Keep feedback code `A()`-free.

### Rendering layers (all in `index.html`)
1. `#game-bg-bug-canvas` — animated bugs (cleared every frame).
2. `#game-bg-event-labels` — DOM overlay for emoji announcements (floating text via `C3()`). **Easiest layer for text-based feedback.**
3. `#game-bg-gl-canvas` — WebGL2 tongue stroke.
4. `#game-bg-ui-canvas` — canvas-2D head overlay (cleared every frame).
5. `#game-bg-head` — anteater head SVG.
6. `#game-bg-game-ui` — score/result HTML. **Easiest layer for HUD widgets.**

### CSS
- `src/styles.css` — all game styling. Looks for class-name patterns like
  `.game-bg-*`. Follow the existing convention for any new classes.

## Glossary of single-letter globals

Minifier kept letters & two-char names; here are the ones you'll touch most:

| Name | Meaning |
|---|---|
| `k` | current game tick |
| `p` | wall-clock ms (frame start) |
| `C` | ms per tick (~16.667) |
| `A()` | seeded RNG |
| `B` | array of bug instances (class `e3`) |
| `F` | current active move-mode / formation ({ type, startTime, expiresAt, expiresAtTick, formationPhase, ... }) |
| `U0` | Set of formation types (heart/circle/club/sparkle/infinity/envelope/dollar) |
| `x4` | list of movement types (spiral/wave/scatter/dizzy/zigzag/wacky/ghost) |
| `u0` | current level number |
| `n` | bugs caught this level |
| `a` | bugs caught total this game |
| `D4` | multibug-stroke bugs bucket (points ×3) |
| `C4` | emoji bugs bucket (points ×4) |
| `L4` | bool: growth phase active |
| `L0` | net speedup counter (speed mult = 1 + L0(L0+1)/2 × 0.5) |
| `W0` | big-powerup expiry ({expiresAt, expiresAtTick}), null if inactive |
| `K0` | small-powerup expiry |
| `O0` | magnet expiry |
| `S0` | tongue-speed powerup ({expiresAt, expiresAtTick, speedPxPerSec}) |
| `x3` | current tongue path length cap (starts 240, +40 per catch up to 50) |
| `V4` | level timer budget ms |
| `m0` | level-start tick stamp |
| `k0` | timer offset (⏱️ rewind adjusts this) |
| `C7` | formations unlock at total catches ≥ this (=20) |
| `A4` | within-level thresholds for each event kind |
| `I0` | bool: game over |
| `J0` | bool: replay playback mode |
| `w0` | last recording ({v, s, e}) |
| `w4` | RNG seed for current game |
| `o` / `q0` | canvas width / height (logical px) |

## Low-risk feature ideas and where to put them

- **"+N" combo pop next to score**: add a counter on the `#game-bg-best-stroke` div and update it from line 2602 whenever `J >= 3`. Animate via CSS like `.game-bg-score-pop`.
- **Stroke hit-rate HUD**: count total strokes (`F3`++ at line 2641) and total-with-catch (the `else F3 = 0, ...` branch at line 2642). Put ratio in a new DOM node under `#game-bg-bug-count`.
- **Miss indicator**: `F3=0; U3++; N3++` at line 2642 means the stroke caught zero. Flash the tongue red here.
- **Anticipate next event**: `h7()` conditions (line 1149) are pure reads from `o3/i3/B3/A4.*`. Read them from the render loop to display "big at catch 12" or "⏱️ at catch 8".
- **Formation countdown**: at render time, if `F && U0.has(F.type)`, compute `(F.expiresAtTick - k) * C` for ms remaining and render it as a ring or bar.
- **Tongue-length meter**: `x3` is the answer. Show `x3 / maxPossible` as a bar; `maxPossible` you can compute as `240 + 50*40 = 2240` (if every first-50 catch were a 1-bug stroke) or just use `x3` as an absolute.
- **Live points preview**: instead of the cumulative `a`, show running `p0 + D4*3 + C4*4` so the player sees projected final score in real time.

## Don't-break-this list

- Replay playback checks `$.v === O3` (recording version vs `O3 = "0.1.0"`, line 598). Bumping the version will invalidate saved replays.
- Do NOT change any `A()` call ordering, argument count, or the sequence of randomized decisions inside `r3`, `Z0`, `h7`, `r`, `_pickSpeed`, `_pickTurnRate`, or `D3`. Replays will desync.
- `localStorage` key `best_bugpoint_recording` (const `g4` at line 925) stores `{score, recording}`. If you change score formula, old saved bests stop being comparable — consider versioning the key.
- Canvas resize uses `devicePixelRatio` (line 1294); any overlays you add by DOM positioning need to account for it or stay in CSS px.
