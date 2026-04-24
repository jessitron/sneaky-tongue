#!/usr/bin/env node
// Capture a screenshot of the running local site at http://localhost:8000/
// Usage: node screenshot.mjs [outfile] [--wait ms] [--click selector]
//
// Defaults to screenshot-latest.png, waits 800ms after load, no click.
// Requires chromium cached by playwright (already present in ~/Library/Caches/ms-playwright).

import { chromium } from "playwright";
import { resolve } from "node:path";

const args = process.argv.slice(2);
let outfile = "screenshot-latest.png";
let waitMs = 800;
let click = null;
let viewportW = 900;
let viewportH = 900;
let url = "http://localhost:8000/";

for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--wait") waitMs = Number(args[++i]);
    else if (a === "--click") click = args[++i];
    else if (a === "--url") url = args[++i];
    else if (a === "--size") { const [w, h] = args[++i].split("x").map(Number); viewportW = w; viewportH = h; }
    else if (!a.startsWith("--")) outfile = a;
}

import { existsSync } from "node:fs";
import { homedir } from "node:os";
// Use the newest already-cached chromium headless shell so we don't need
// to download hundreds of MB for each playwright version bump.
const shellCacheRoot = `${homedir()}/Library/Caches/ms-playwright`;
const shellCandidates = [
    `${shellCacheRoot}/chromium_headless_shell-1217/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
    `${shellCacheRoot}/chromium_headless_shell-1208/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
    `${shellCacheRoot}/chromium_headless_shell-1200/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
    `${shellCacheRoot}/chromium_headless_shell-1194/chrome-headless-shell-mac-arm64/chrome-headless-shell`
];
const executablePath = shellCandidates.find(existsSync);
if (!executablePath) {
    console.error("No cached chromium-headless-shell found. Run: npx playwright install chromium");
    process.exit(1);
}
const browser = await chromium.launch({ executablePath });
const ctx = await browser.newContext({ viewport: { width: viewportW, height: viewportH }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

const consoleMessages = [];
page.on("console", (msg) => consoleMessages.push(`[${msg.type()}] ${msg.text()}`));
page.on("pageerror", (err) => consoleMessages.push(`[pageerror] ${err.message}`));

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(waitMs);

if (click) {
    await page.click(click);
    await page.waitForTimeout(800);
}

const abs = resolve(outfile);
await page.screenshot({ path: abs, fullPage: false });
await browser.close();

console.log(`saved: ${abs}`);
if (consoleMessages.length) {
    console.log("--- console ---");
    for (const m of consoleMessages) console.log(m);
}
