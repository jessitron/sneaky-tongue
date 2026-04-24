#!/usr/bin/env bash
# Download the Bugpoint game's source files for offline analysis.
set -euo pipefail

BASE="https://terpimost.github.io/game-tongue"
OUT_DIR="$(cd "$(dirname "$0")" && pwd)"

mkdir -p "$OUT_DIR/src/vendor" "$OUT_DIR/dist"

files=(
  "src/styles.css"
  "src/favicon.svg"
  "src/tamandua-sprite.svg"
  "src/vendor/beepbox_stripped_min.js"
  "dist/bugpoint.js"
)

for f in "${files[@]}"; do
  echo "Fetching $f"
  curl -sfL "$BASE/$f" -o "$OUT_DIR/$f"
done

echo "Done. Sizes:"
ls -lh "$OUT_DIR/dist/bugpoint.js" "$OUT_DIR/src/styles.css" "$OUT_DIR/src/vendor/beepbox_stripped_min.js"
