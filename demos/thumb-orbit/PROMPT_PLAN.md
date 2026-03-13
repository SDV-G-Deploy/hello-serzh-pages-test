# MVP Prompt Plan — Thumb Orbit

Goal: ship a mobile-first browser MVP where a player survives 30s on an orbit using one-thumb controls.

## Build brief (for Codex)

Create a standalone demo at `demos/thumb-orbit/index.html` with plain HTML/CSS/JS.

Requirements:
1. 30-second survival loop.
2. One-thumb input on mobile: hold left half = rotate CCW, hold right half = rotate CW.
3. Obstacles spawn from outer area and travel inward; collision ends run.
4. Score grows over time (and can include small movement bonus).
5. Start/restart via tap-anywhere + button; desktop keys optional.
6. Keep bundle lightweight (no external libs).
7. Save best score in `localStorage`.
8. Add subtle vibration on game over when supported.

Definition of Done:
- Loads instantly on phone.
- Playable in <10s from open.
- Runs smoothly and restarts without page reload.
- Deployed and reachable via GitHub Pages URL.
