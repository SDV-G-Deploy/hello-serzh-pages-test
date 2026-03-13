# LEARNINGS.md — session discoveries and decisions

Use this file as a compact log of important findings.

## Format

For each meaningful session, append:

- Date (UTC)
- What was implemented
- What worked / what failed
- New rule (if any)
- Next step

---

## 2026-03-13

- Implemented `Signal Dash` mini-game for GitHub Pages.
- Added mobile controls (touch hold ◀/▶), tap-to-start, and vibration feedback.
- Added local Top-5 leaderboard via `localStorage`.
- Confirmed direction: **mobile-first browser mini-games**.

New rule:
- Every new mini-game must include touch-ready controls from day one.

Next:
- Add lightweight analytics-ready hooks (start/restart/game-over events) for future tuning.

## 2026-03-13 (test flow run)

- Ran digest→MVP test flow and selected `Thumb Orbit` for one-thumb mobile play.
- Created prompt-plan at `demos/thumb-orbit/PROMPT_PLAN.md`.
- Shipped playable MVP at `demos/thumb-orbit/index.html`.
- Added Thumb Orbit link to `games.html` and updated roadmap done log.

New rule:
- For autopipeline runs, always create `demos/<slug>/PROMPT_PLAN.md` before implementation.

Next:
- Add minimal event hooks and simple balancing constants block for faster daily iterations.

## 2026-03-13 (v2 balance)

- Upgraded Thumb Orbit to v2 with A/B balance presets:
  - A: комфортный ритм
  - B: более интенсивный спавн/скорость
- Added separate local best score per preset (`thumbOrbitBest_A`, `thumbOrbitBest_B`).

New rule:
- For quick game balancing, expose core constants as mode presets before deeper refactors.

## 2026-03-13 (daily digest → new MVP)

- Selected idea from digest: **Daily Tower Seed** (daily common seed + lightweight leaderboard behavior).
- Created `demos/daily-tower-seed/PROMPT_PLAN.md`.
- Implemented playable MVP `demos/daily-tower-seed/index.html`.
- Added card/link in `games.html`; updated `ROADMAP.md`.

What worked:
- Deterministic seed from UTC date enables same challenge for all with almost zero backend cost.
- 3 attempts/day creates healthy scarcity and “come back tomorrow” loop.

New rule:
- For daily-seed concepts, lock seed to UTC date and show attempts left directly in UI.

## 2026-03-13 (fairness MVP)

- Implemented new playable: `demos/fair-shot-arena/`.
- Added A/B RNG modes:
  - A: fixed 65% hit chance
  - B: anti-tilt boost after miss streak
- Added end-of-run metrics: score, hit rate, max miss streak, and local best per mode.
- Added game card to `games.html`; updated `ROADMAP.md` (done + next candidate).

What worked:
- Visible anti-tilt logic gives immediate test surface for “feels fair” perception.
- Miss-streak metric is a useful proxy for frustration without backend analytics.

New rule:
- For RNG-heavy concepts, always expose at least one fairness mode and one frustration metric in MVP.

Next:
- Add tiny event hooks (`run_start`, `shot_hit`, `shot_miss`, `run_end`) for future lightweight telemetry.

## 2026-03-13 (lane runner MVP)

- Implemented `demos/lane-surfer/index.html` as a mobile-first 30s runner.
- Added touch-only lane controls (left/right), 3 obstacle patterns, and slight difficulty ramp.
- Added combo mechanic and bonus scoring every 5 combo.
- Added local best score persistence and integrated new card into `games.html`.

What worked:
- 30s cap keeps session tight and replay-friendly.
- Simple pattern rotation gives variety without heavy complexity.

New rule:
- Runner MVPs should ship with at least 3 spawn patterns + one visible progression lever (speed or spawn rate).

Next:
- Add micro-hit feedback for near-miss moments and optional haptic pulse on combo milestones.

## 2026-03-13 (pulse timing MVP)

- Implemented `demos/pulse-catcher/index.html` as a 45-second reaction mini-game.
- Added timing accuracy tiers: Perfect / Good / Miss.
- Added streak-based bonus scaling for Perfect hits and persistent local best.
- Added new card/link to `games.html`; updated `ROADMAP.md` done/candidate sections.

What worked:
- Accuracy tiers provide clear skill feedback with minimal UI.
- Streak bonus creates a clean risk/reward retention loop.

New rule:
- Timing games should always include at least two positive hit tiers + explicit miss reset to keep tension readable.

Next:
- Add subtle metronome cue (visual pulse beat) and optional haptic on Perfect for stronger rhythm lock.
