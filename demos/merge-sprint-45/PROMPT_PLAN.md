# PROMPT PLAN — Merge Sprint 45 (mobile-first MVP)

## Goal
Build a 45-second merge puzzle sprint (3x3 board) with quick decision pressure.

## Core loop
- 3x3 grid.
- Tap a tile to increase its level by 1.
- Any orthogonally adjacent same-level pair auto-merges into one higher-level tile.
- Chain merges are allowed in one action.

## Scoring
- Score scales by merge level (2^level style reward).
- 45-second timer.
- Local best score.

## Mobile-first constraints
- 360–430px first.
- Single tap input only.
- Start <=10s.
- Plain HTML/CSS/JS.

## Done criteria
- Playable 45s session + restart.
- Clear board readability on mobile.
- Visible timer / score / best.
- Chain-merge feedback message.
