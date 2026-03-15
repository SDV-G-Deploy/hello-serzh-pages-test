# PROMPT_PLAN — thumb-zipline

## Goal
Ship a new **mobile-first playable MVP** in 2–4h with one-thumb hold/release control and high replayability.

## Core loop
- Player controls a dot moving left→right automatically.
- **Hold touch/mouse** => gain altitude.
- **Release** => fall by gravity.
- Pass through vertical corridor gaps in incoming walls.
- Survive as long as possible, score increases over time + successful gap passes.

## Must-have MVP features
1. Touch-first controls (also mouse fallback).
2. Clear HUD: score, best, speed.
3. Difficulty ramp (wall speed + narrower gaps over time).
4. Near-miss bonus (+feedback) when passing close to wall edges.
5. Instant restart loop after crash.
6. Local best in `localStorage`.

## UX constraints
- Portrait-friendly layout.
- Big readable typography.
- Minimal visual noise; high contrast.
- One-screen game over with restart CTA.

## Technical shape
- Single file `index.html` (HTML+CSS+JS).
- Canvas 2D render.
- `requestAnimationFrame` game loop.
- Deterministic enough spawn rhythm via timer.

## Acceptance
- Opens in mobile browser and plays with one thumb.
- No console errors in normal flow.
- Playable status ready for `games.html` catalog link.
