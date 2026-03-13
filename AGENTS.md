# AGENTS.md — SITE game-dev operating context

Purpose: keep context stable between sessions for Codex/agents working in this repo.

## Product direction (fixed)

- This repo is the permanent SITE for Snezhana.
- We build **browser mini-games with a mobile-first approach**.
- Target: fast playable loops for phone users first, desktop second.

## Mobile-first rules (must-follow)

1. Design and test for phone viewport first (360–430px width).
2. Primary input must work on touch (tap/hold/swipe or on-screen controls).
3. "First playable" should start in <= 10 seconds after page load.
4. Keep sessions short and replayable (15–60 sec loop by default).
5. UI text must be short and readable on small screens.
6. Avoid heavy assets and long startup delays.

## Codex-friendly workflow

- Keep tasks small and atomic (one gameplay improvement per commit when possible).
- Prefer plain HTML/CSS/JS unless complexity clearly requires tooling.
- After meaningful changes: commit with clear message and push to `main` for Pages validation.
- If a change affects rules/process, update docs in the same PR/commit.
- Maintain `ROADMAP.md` as a live source of truth from daily digests.

### Daily digest → MVP autopipeline

When a daily game digest arrives, follow this exact order:

1. Review digest internally.
2. Select the strongest mobile-first idea (fastest high-value MVP).
3. Write a concise prompt-plan for implementation.
4. Build MVP demo in a dedicated folder inside repo (e.g. `demos/<slug>/`).
5. Link/deploy through GitHub Pages (same repo).
6. Send resulting URL to Serg.

## Mandatory update rule

After **every work session**, if there were important findings/new rules:

- update `LEARNINGS.md` (what changed, why, what to do next), and/or
- update this `AGENTS.md` if the rule is long-term,
- then commit those doc updates together with code (or as a dedicated follow-up commit).

No "mental notes". Important context must be written to files.
