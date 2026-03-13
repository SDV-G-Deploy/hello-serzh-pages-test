# SITE_ARCHITECTURE.md — single source of truth

Purpose: фиксирует архитектуру сайта, чтобы новые сессии/агенты не теряли контекст.

## 1) Product scope

- Repo: `SDV-G-Deploy/hello-serzh-pages-test`
- Тип: personal site + витрина browser mini-games
- Главный вектор: **mobile-first playable demos**

## 2) Information architecture

Top-level pages:
- `index.html` — Home
- `about.html` — About
- `projects.html` — Projects
- `games.html` — GaMeS (каталог игр + ссылки)
- `notes.html` — Notes

Demo pages:
- `mini-game.html` — Signal Dash demo
- `demos/<slug>/index.html` — новые MVP-демки (по одной игре на папку)

## 3) Demo structure standard

Для каждой новой демо-игры:

- `demos/<slug>/index.html` — playable MVP
- `demos/<slug>/PROMPT_PLAN.md` — prompt-план MVP (обязательно)

Naming:
- slug: lowercase-kebab-case (пример: `thumb-orbit`, `lane-surfer`)

## 4) UI/UX standards (mobile-first)

1. Сначала телефонный viewport (360–430px).
2. Touch input обязателен с первого релиза.
3. Time-to-play <= 10 секунд.
4. Короткий loop 15–60 сек.
5. Ясный restart (без перезагрузки страницы).
6. Минимум тяжёлых ассетов/библиотек.

## 5) Games catalog contract (`games.html`)

Каждая карточка должна содержать:
- Название
- Статус badge (`playable` / `prototype` / `polish`)
- 1 короткое описание
- Ссылку на playable (Pages или локальная demo-страница)

Фильтр по статусам должен продолжать работать после правок.

## 6) Runtime/game conventions

- Предпочтительно: plain HTML/CSS/JS
- Хранение локальных рекордов: `localStorage`
- Допустимо добавлять vibration feedback (`navigator.vibrate`) на game-over
- Для быстрых баланс-итераций: A/B presets в константах

## 7) Deploy model

- Ветка деплоя: `main`
- Публикация: GitHub Pages
- После каждого значимого апдейта: commit + push + smoke-check URL

## 8) Operational docs map

- `AGENTS.md` — постоянные правила и workflow
- `ROADMAP.md` — backlog + текущий `TODAY_MVP`
- `LEARNINGS.md` — уроки/решения по сессиям
- `SESSION_CHECKLIST.md` — чеклист исполнения
- `SITE_ARCHITECTURE.md` — архитектурный контракт сайта (этот файл)

## 9) Mandatory maintenance rule

Если изменились архитектурные решения (структура разделов, формат demo-папок, правила деплоя, стандарты game-card), обновлять `SITE_ARCHITECTURE.md` в том же изменении.
