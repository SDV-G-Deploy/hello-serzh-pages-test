# MVP Prompt Plan — Daily Tower Seed

Goal: ship a mobile-first daily challenge mini-game where all players get the same level seed each day.

## Build brief (for Codex)

Create a standalone demo at `demos/daily-tower-seed/index.html` using plain HTML/CSS/JS.

Requirements:
1. One-thumb controls (hold left/right on screen halves).
2. Daily deterministic pattern based on UTC date seed (same challenge for everyone that day).
3. 30-second run with obstacle spawns derived from seed.
4. Exactly 3 attempts per day (stored in localStorage, reset by date).
5. Track and show best score for current date-seed.
6. Start/restart should be instant and mobile-friendly.

Definition of Done:
- Loads fast on phone, touch-ready immediately.
- Daily seed and attempts are visible in UI.
- Playable via GitHub Pages URL.
