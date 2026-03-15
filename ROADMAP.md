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
- Idea: **Lane Pulse Flip**
- Why: следующий шаг после hold/release MVP — проверить lane-switch + цветовые гейты
- Complexity: low-medium
- Priority: high
- Next test (2–4h): tap lane swap + readable color cue + combo pressure

### BACKLOG
1. Lane Pulse Flip (tap lane swap + color gates)
2. Fair Shot Arena v2 (readability + telemetry hooks)
3. Daily Tower Seed v2 (daily modifiers)
4. Tap Window Rush v2 (near-miss + telemetry hooks)

## Done log

- 2026-03-15: Thumb Zipline MVP shipped in `demos/thumb-zipline/` (hold/release flight, corridor survival, near-miss bonus, speed ramp, local best)
- 2026-03-14: Tap Window Rush MVP shipped in `demos/tap-window-rush/` (one-tap timing windows, streak multiplier, speed ramp, local best)
- 2026-03-13: Merge Sprint 45 MVP shipped in `demos/merge-sprint-45/` (3x3 merge sprint, chain reactions, 45s pressure loop, local best)
- 2026-03-13: Drift Dot MVP shipped in `demos/drift-dot/` (60s hold/release survival, moving gap walls, gradual ramp, local best)
- 2026-03-13: Pulse Catcher MVP shipped in `demos/pulse-catcher/` (45s tap-timing loop, accuracy tiers, streak multiplier, local best)
- 2026-03-13: Lane Surfer MVP shipped in `demos/lane-surfer/` (30s one-thumb runner, 3 obstacle patterns, combo bonus, local best)
- 2026-03-13: Fair Shot Arena MVP shipped in `demos/fair-shot-arena/` (A/B RNG fairness test, 45s loop, local best per mode, miss-streak metric)
- 2026-03-13: Signal Dash demo shipped (mobile controls + tap start + vibro + local top-5)
- 2026-03-13: Thumb Orbit MVP shipped in `demos/thumb-orbit/` (one-thumb hold controls, 30s loop, local best, vibro)
- 2026-03-13: Daily Tower Seed MVP shipped in `demos/daily-tower-seed/` (same daily seed, 3 attempts/day, local best)
