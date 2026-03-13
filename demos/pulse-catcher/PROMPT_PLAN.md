# PROMPT PLAN — Pulse Catcher (mobile-first MVP)

## Goal
Build a 45-second tap-timing mini-game for mobile with accuracy tiers and streak multiplier.

## Core loop
- A pulse ring shrinks to a target zone.
- Player taps at the right moment.
- Accuracy tiers: Perfect / Good / Miss.
- 45s session with continuous attempts.

## Scoring
- Perfect: +3
- Good: +1
- Miss: 0 and streak reset
- Streak multiplier: every 5 streak adds +1 bonus to Perfect hits.

## Mobile-first constraints
- 360–430px first.
- Single tap input only.
- Start <=10s.
- Plain HTML/CSS/JS.

## Done criteria
- Playable 45s session with restart.
- Accuracy feedback every tap.
- Score + streak + best score visible.
