# Korea Motors

Лендинг для заказа автомобилей из Южной Кореи — [exportautorus.ru](https://exportautorus.ru)

## Стек

- Astro 5 / React 19 / TypeScript
- Tailwind CSS 4
- Motion (анимации), Typograf (типографика), Lucide React (иконки)

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production сборка → dist/
```

## Структура

```
src/
  pages/        # страницы (.astro)
  components/   # компоненты (Astro + React)
    └── ui/     # UI-компоненты
  layouts/      # BaseLayout
  lib/          # утилиты и константы
  styles/       # глобальные стили
public/         # статика (иконки, изображения)
```

## Константы

Ссылка на Telegram-канал задаётся в одном месте:
- `src/lib/constants.ts` — `TELEGRAM_LINK`

## Деплой

GitHub Pages + GitHub Actions (workflow в `.github/workflows/deploy.yml`).

Push в `main` → автосборка → деплой на [exportautorus.ru](https://exportautorus.ru).
