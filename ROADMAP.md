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
- Idea: **Lane Surfer**
- Why: ultra-readable touch control, very fast polishing path
- Complexity: low
- Priority: high
- Next test (2–4h): lane-switch core + obstacle pacing + retry loop

### BACKLOG
1. Lane Surfer (tap to switch lanes, avoid obstacles)
2. Pulse Catcher (timed tap accuracy with combo)
3. Drift Dot (hold/release movement with narrow gaps)

## Done log

- 2026-03-13: Signal Dash demo shipped (mobile controls + tap start + vibro + local top-5)
- 2026-03-13: Thumb Orbit MVP shipped in `demos/thumb-orbit/` (one-thumb hold controls, 30s loop, local best, vibro)
