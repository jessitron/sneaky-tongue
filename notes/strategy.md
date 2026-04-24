# Bugpoint — strategy notes

Game: https://terpimost.github.io/game-tongue/ (real name "Bugpoint" by Vlad Korobov).
Source: `dist/bugpoint.js` (beautified → `dist/bugpoint.pretty.js`).

## Scoring (final points, not the on-screen "bugs caught")

Final `bugpoints` = `bugs + multibugStrokeBugs × 3 + emojiBugs × 4`
— ref `dist/bugpoint.pretty.js:1747` and the breakdown at `:1756-1758`.

- `bugs` = total caught (`a`/`p0`).
- `multibugStrokeBugs` (`D4`): incremented by `J` iff `J >= 3` on a single stroke (`:2602`). So 1- or 2-bug strokes get **no** multibug bonus; 3+ bugs all count.
- `emojiBugs` (`C4`): every non-`"normal"` bug you eat (`:2475`).

Point values per bug:
- Plain bug in ≤2 stroke: **1**
- Plain bug in 3+ stroke: **4**
- Emoji bug in ≤2 stroke: **5**
- Emoji bug in 3+ stroke: **8**

## Tongue length grows only during the first 50 catches

`x3` (max path length) starts at 240 and grows by `J * 40` per catch
**only while total caught ≤ 50** (`:2628-2629`). After 50, your tongue
is locked in. ⇒ the first 50 catches are priceless: every one of them
extends the tongue you play with for the rest of the run.

And: catching a plain bug while the tongue is still growing displays
"👅 Longer tongue" (`:2633`). You want this to happen early and often.

## The timer (and why you cannot "wait it out")

- Per-level time = `max(40_000, 120_000 × 0.8^(level-1))` ms (`:980-982`):
  L1=120s, L2=96s, L3=76.8s, L4=61.4s, L5=49.2s, L6+ = 40s (floor).
- Timer **pauses while ≤1 bug is alive on the field** (`:2874` — `m0++` advances the "start" stamp each tick when `z<=1`). So you cannot stall by leaving one bug alive; the level just doesn't end.
- Timer only starts counting on your first catch of the level (`c0`).
- ⏱️ "Rewind time" emoji: `k0 -= elapsed/2` (`:2525-2528`) — rewinds **half of elapsed level-time**. Rewind caught early in a level does nothing; caught late, it effectively buys you a huge chunk of time. **Save time rewinds for late-level catches.**

## Level progression / how the field grows

- A level starts with **3 bugs** (`R3=3`, `:1587`; `D3(3, …)` at `:2639`) and the growth flag `L4=true` (`:1049`, `:2639`).
- During growth, every catch of `J` bugs respawns `min(J*3, 99 - alive)` more (`:2635-2636`). Reused dead slots first, then new `"normal"` bugs (`D3`, `:2102-2112`). **Catch size is the growth throttle** — 2-bug catches grow the field by 6, 5-bug catches by 15, etc.
- When the field hits **99 alive**, growth ends (`L4=false`) and the game auto-fires 🪞 mirror (double tongue) for the rest of the level (`:2636-2637`).
- Level ends when every bug is dead. Then `D3(3, …)` spawns 3 fresh bugs and the next level's growth phase begins (`:2639`).
- Each level rerolls which emoji events will spawn and when (`r3`, `:1100-1142`).

## Emoji types

### Formation emojis (7 kinds) — ❤️⭕♣️❇️♾️✉️💲
Pull all bugs into the shape for a few seconds (assemble → hold → scatter).
**While in a formation, ALL negative emoji effects are nullified** (`I4=true`,
`:2470`) — you can safely scoop up everything including skulls. A formation is
a hand-delivered big multibug combo; prioritise aiming through the shape.

Formations only unlock once you've caught ≥20 bugs total (`C7=20`, `:1059`).

### Bonus / mild emojis
- 🐇 speedup: `L0++`. The field-speed multiplier is `1 + L0(L0+1)/2 × 0.5`: 1→1.5×→2.5×→4×→6×. Stacking 3+ speedups is death.
- 🐢 slowdown: `L0 = max(0, L0-1)`. Canceling a prior speedup is fine, but speedup-when-already-slow doesn't hurt — catching slowdowns when `L0==0` wastes them.
- 🍄 big: hitbox ×1.5 for 5s. **Excellent** — go hunting while it's up.
- 💍 small: hitbox ×0.6 for 5s. Miserable — wait it out if possible.
- ⏱️ time: rewinds the level timer (see above).
- 🧲 magnet: pulls bugs toward centre for 3s — line them up for a sweeping stroke.
- 🪞 mirror: double tongue for the rest of the level. Triggers automatically when you grow to 99 bugs on screen.
- 😤 restless: bugs pause less & go fast more often (`:1601-1602`).
- 😵‍💫 twitchy: bugs change direction/speed faster (`:1604-1619`).
- 🐌 tongueslow / 😛 tonguefast: stroke reveal speed 1000 vs 4000 px/s (`:2553`).

### Bad emojis (💀 skull, ☠️ crossbones) — `:2558-2567`

- Pool = all alive, not-attached, non-skull/non-crossbones bugs.
- 💀 skull: randomly kills **30%** of that pool. ☠️ crossbones: **50%**.
- Victims just vanish — no score, no respawn until next level.
- Already-attached bugs on your in-flight tongue are safe.
- **Protection flag `I4`**: true while a formation is active, OR if your same stroke also caught a ❤️/⭕/♣️/❇️/♾️/✉️/💲. When `I4` is true the effect is suppressed — label fires, nothing dies.
- Hidden cost: lost bugs would have fed the `99-alive` mirror trigger, so a skull also **delays or cancels that level's Double Tongue** and burns first-50 tongue-growth slots. Treat eating an unprotected skull as losing not just those bugs but the mirror-powered finale of the level.
- Play: **stroke around unprotected skulls**; eat them only when you can bundle a formation emoji into the same flick, or during an active formation.

### Level-wide modifier emojis (random roll per level)
- 🔄 spiral, 🌊 wave, 💥 scatter, 😵 dizzy, 🏃 zigzag, 🤪 wacky, 👻 ghost: alter bug motion for 7–10 s. Ghost makes bugs ghostly-visible; wacky splits them; scatter explodes them out. Best play: during these, **let formations come to you** rather than chasing — or just wait the 7 s.

## Strategy cheat sheet

1. **Start calm**: in the first seconds, the field is tiny and tongue is short. Don't flail — make each stroke hit ≥3 bugs to farm tongue growth AND multibug score. This is the most important habit.
2. **Aim for 3+ per stroke, always**. Two bugs is a failure — no multibug bonus. One bug is a tragedy.
3. **Ride the growth to 99**. You want to hit 99 alive fast so 🪞 mirror drops. Big stroke count is what drives growth (`J*3` spawns per catch).
4. **Formations = gold**. Line up your flick through the whole arrangement. Heart/infinity/dollar shapes give great straight passes. Never fire a short stroke during a formation.
5. **Eat 💀☠️ only with a ❤️/⭕/♣️/❇️/♾️/✉️/💲 in the same stroke**, or during an active formation. Otherwise *stroke around them* and let them sit — they won't hurt you until caught.
6. **Save ⏱️ for late in the level**. A time-rewind eaten at level start is worthless; eaten near level end it can double your remaining time.
7. **Watch the speedup stack**. After two 🐇s, stop collecting speedups — they compound quadratically. If `L0>=2`, go hunting slowdowns.
8. **Big 🍄 is the blitz moment** — highest-density stroke you can manage during its 5 s.
9. **Don't stall**. The timer pauses under 1 bug but it also doesn't reset; the efficient play is big strokes, not small safe ones.

## Open questions / things to verify at the keyboard

- How aggressive is the RNG about clustering bad emojis in early levels? (Spawn table logic in `h7`, `:1149-1197`.)
- Does the 99-bug mirror fire exactly once per level? (Looks like yes — `e4` guard.)
- Confirm whether formations also protect from speedup stacking (code suggests yes — `I4` gates all negative effects).
