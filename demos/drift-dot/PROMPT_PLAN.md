# PROMPT PLAN — Drift Dot (mobile-first MVP)

## Goal
Ship a one-thumb hold/release survival game with narrow gaps and 60s session loop.

## Core loop
- Dot drifts right by default.
- Hold screen/button = thrust upward.
- Release = gravity pulls down.
- Wall segments with random vertical gaps move left.
- Survive 60s by passing through gaps.

## Scoring
- +1 per passed wall.
- Combo-like momentum via consecutive passes.
- Best score stored locally.

## Mobile-first constraints
- 360–430px first.
- Single input (hold/release) only.
- Start <=10s.
- Plain HTML/CSS/JS.

## Done criteria
- Playable on phone.
- 60s survival + restart.
- Visible score / time / best.
- Gap difficulty ramps gradually.
