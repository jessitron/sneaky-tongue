# terpimost / Bugpoint game analysis

This directory holds a downloaded copy of the game at
https://terpimost.github.io/game-tongue/ (real name: **Bugpoint** by Vlad Korobov).
The GitHub source repo is private, so we grabbed the deployed build instead.

## Layout
- `index.html` — fetched from the site.
- `src/styles.css`, `src/*.svg` — assets.
- `src/vendor/beepbox_stripped_min.js` — music engine (BeepBox), not game logic.
- `dist/bugpoint.js` — the game (minified-ish; long lines but readable names kept).
- `dist/bugpoint.pretty.js` — beautified copy for reading (3482 lines).
- `download.sh` — script that fetched everything. Re-run to refresh.
- `notes/strategy.md` — annotated strategy guide derived from reading the code.
- `notes/modding-map.md` — developer's hook-point map for adding new feedback/UI to the game. Read this first if you're modifying the build.
- `analyze-replay.mjs` — Node CLI that parses saved `replay-*.json` files and reports stroke stats. Run: `node analyze-replay.mjs <file> [...]`.
- `.tool-versions` — pins nodejs for `npx js-beautify` (asdf).

## Starting points in `dist/bugpoint.pretty.js`
- Scoring formula: line 1747.
- Tongue-length growth: line 2628-2629.
- Timer / per-level duration: lines 976-982.
- Level-up state reset: `r3()` at line 1100.
- Emoji spawn scheduling: `h7()` at line 1149.
- Bug movement / speed stacking: `class e3` at line 1590; `L0` multiplier at 1631.
- Catch resolution (scores, effects, protection `I4`): around line 2440-2610.
- Formation types list: `U0` at line 1034; activation in `r()` at line 2336.
