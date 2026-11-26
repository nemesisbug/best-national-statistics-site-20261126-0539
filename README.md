[![NusaData](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![Rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/nemesisbug/best-national-statistics-site-20261126-0539/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![Reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/nemesisbug/best-national-statistics-site-20261126-0539/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

# NusaData — Indonesia in Numbers

A national statistics portal for Indonesia: population, economy, people and all
38 provinces, with every figure carrying its source and year. It runs entirely
offline from static files — no network requests, no libraries, hand-drawn SVG
charts.

## What it shows

- **Overview** — six key figures (population, GDP, growth, inflation,
  unemployment, poverty) with source and year, a population bar chart
  2020–2024, and the latest BPS releases.
- **Economy** — GDP growth and inflation charts, a sector donut, and 2024
  trade figures (exports US$264.70bn, imports US$233.66bn).
- **People** — a population pyramid for 2024, unemployment and poverty trend
  lines, and wellbeing figures (HDI 75.02, life expectancy 74.15 years).
- **Regions** — a tile map of all 38 provinces coloured by population, plus a
  sortable table of the ten largest provinces with CSV download.
- **Data explorer** — every indicator in one searchable, filterable, sortable
  table with CSV download.
- **About** — how each figure is sourced and the full source list.

## Figures

All figures are real published figures from Statistics Indonesia (BPS),
2020–2024, rounded for display. Each figure on the site names its BPS
publication and year next to it.

## Run it

```sh
node serve.ts   # serves app/ at http://localhost:8080
```

Or open `app/index.html` in a browser. To build the hand-in:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Layout

- `app/index.html` — the page shell
- `app/style.css` — the look (teal / amber / flag red on sand)
- `app/main.js` — hash router
- `app/data.js` — every figure, with source and year
- `app/charts.js` — hand-drawn SVG charts (bar, line, donut, pyramid, tiles)
- `app/views.js` — the pages
- `app/explorer.js` — search, filter, sort and CSV for the indicator table
- `app/regions.js` — sort and CSV for the province table
- `main.ts` — hands the site, screenshots and dossier to `/output`
- `vendor/makefun-frontend.ts` — the kit's dossier library, unchanged

## License

MIT — see [LICENSE](LICENSE).
