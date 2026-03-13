# ROADMAP.md — mobile-first mini-games pipeline

Purpose: keep a live, execution-ready roadmap fed by daily game digests.

## Selection model (from daily digest)

Each day, evaluate candidate ideas with a compact score:

- Mobile fit (touch clarity, one-hand play) — 0..5
- MVP speed (can ship demo in 2–4h) — 0..5
- Replay loop potential (retry desire) — 0..5
- Implementation risk (lower is better) — 0..5

Total score = mobile fit + MVP speed + replay loop + (5 - risk)

Pick the top idea as **TODAY_MVP**.

## Delivery cadence

1. Receive daily digest
2. Self-review digest
3. Choose best idea for mobile-first MVP
4. Write prompt-plan (copy/paste-ready for Codex)
5. Build demo in separate folder (`demos/<new-slug>/`)
6. Deploy via GitHub Pages
7. Send URL to Serg

SLA: one daily digest run should produce one new playable MVP link.

## Current focus (seed)

### TODAY_MVP (candidate)
- Idea: **Merge Sprint 45**
- Why: 45s merge-loop хорошо тестирует decision speed и micro-meta retention
- Complexity: medium
- Priority: high
- Next test (2–4h): 3x3 поле + merge chain + 45s pressure mode

### BACKLOG
1. Lane Surfer (tap to switch lanes, avoid obstacles)
2. Pulse Catcher (timed tap accuracy with combo)
3. Drift Dot (hold/release movement with narrow gaps)
4. Merge Sprint 45 (45s loop + лёгкая мета)

## Done log

- 2026-03-13: Drift Dot MVP shipped in `demos/drift-dot/` (60s hold/release survival, moving gap walls, gradual ramp, local best)
- 2026-03-13: Pulse Catcher MVP shipped in `demos/pulse-catcher/` (45s tap-timing loop, accuracy tiers, streak multiplier, local best)
- 2026-03-13: Lane Surfer MVP shipped in `demos/lane-surfer/` (30s one-thumb runner, 3 obstacle patterns, combo bonus, local best)
- 2026-03-13: Fair Shot Arena MVP shipped in `demos/fair-shot-arena/` (A/B RNG fairness test, 45s loop, local best per mode, miss-streak metric)
- 2026-03-13: Signal Dash demo shipped (mobile controls + tap start + vibro + local top-5)
- 2026-03-13: Thumb Orbit MVP shipped in `demos/thumb-orbit/` (one-thumb hold controls, 30s loop, local best, vibro)
- 2026-03-13: Daily Tower Seed MVP shipped in `demos/daily-tower-seed/` (same daily seed, 3 attempts/day, local best)
