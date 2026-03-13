# PROMPT PLAN — Fair Shot Arena (mobile-first MVP)

## Goal
Build a one-thumb, 45-second micro-game to A/B test *perceived fairness* of hit RNG.

## Core loop
- A target appears in one of 3 lanes.
- Player taps the target lane button to shoot.
- 45 seconds session, score = successful hits.
- Show misses, hit rate, and longest miss streak.

## A/B modes
- **Mode A (Pure RNG):** hit chance fixed at 65%.
- **Mode B (Fair RNG):** base 65%, but if miss streak >=2, increase chance (+12% cap 90%) until a hit resets streak.

## Mobile-first constraints
- 360–430px viewport first.
- Tap input only (big lane buttons).
- Start in <=10s (single tap).
- No heavy assets, plain HTML/CSS/JS.

## Done criteria
- Playable on phone.
- Visible mode switch A/B.
- End-screen metrics: score, hit rate, max miss streak.
- Local best score per mode.
