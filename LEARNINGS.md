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
