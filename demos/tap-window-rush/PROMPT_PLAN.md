# PROMPT PLAN — tap-window-rush

## Goal
Собрать mobile-first playable MVP за один проход: one-tap тайминговая игра на 45 секунд с мгновенным рестартом и локальным рекордом.

## Core Loop
1. Идёт «курсор времени» (петля 0..1).
2. На шкале есть зелёное safe-window.
3. Игрок тапает в safe-window → +очки, растёт streak.
4. Тап вне окна → strike, streak сбрасывается.
5. С каждым успехом окно слегка сужается/петля ускоряется.
6. По таймеру 45с показываем итог и best.

## Mobile-first constraints
- Один input: tap по большой кнопке внизу.
- Крупный HUD, без мелкого текста.
- Без скролла, без внешних зависимостей.

## MVP Scope (IN)
- 45s run
- Score + streak + strikes
- Speed ramp
- Local best (`localStorage`)
- Restart button

## MVP Scope (OUT)
- Серверные лидерборды
- Скины/магазин
- Аудио-микшер

## Tech
- Single file `index.html` (HTML/CSS/vanilla JS)
- 60fps via `requestAnimationFrame`

## Acceptance
- Играбельно на телефоне одной рукой
- Минимум 3 подряд попытки подряд “по фану”
- Рекорд сохраняется между перезагрузками
