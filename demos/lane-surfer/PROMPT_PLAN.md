# PROMPT PLAN — Lane Surfer (mobile-first MVP)

## Goal
Ship a one-thumb endless lane-switch runner MVP with short replay loop.

## Core loop (30s)
- Player starts in center lane (3 lanes total).
- Obstacles spawn from top and move downward.
- Tap left/right controls to change lane.
- Avoid obstacles for 30s and build combo on safe dodges.

## Scoring
- +1 score for each obstacle safely passed.
- Combo increases by +1 per consecutive safe pass.
- Score bonus: every 5 combo gives +1 extra point.

## Mobile-first constraints
- 360–430px first.
- Touch controls only (big left/right buttons).
- Tap-to-start under 10s.
- Plain HTML/CSS/JS, no external assets.

## Done criteria
- Playable on phone.
- 30s session + restart.
- Visible score / combo / best score.
- 3 obstacle patterns with slight speed ramp.
