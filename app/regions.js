// NusaData — the regions table: sort the ten largest provinces by population
// or by name, and download the table as a CSV file.

import { PROVINCES, TOTAL_POPULATION } from './data.js';
import { downloadCsv } from './explorer.js';

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

export function initRegions() {
  const table = document.getElementById('province-table');
  const byPop = document.getElementById('sort-pop');
  const byName = document.getElementById('sort-name');
  const csvBtn = document.getElementById('csv-btn');
  if (!table) return;

  const body = table.querySelector('tbody');
  const top = [...PROVINCES].sort((a, b) => b.pop - a.pop).slice(0, 10);

  function render(rows) {
    body.innerHTML = rows
      .map(
        (p, i) => `<tr><td>${i + 1}</td><td>${esc(p.name)}</td><td>${p.pop.toFixed(1)}</td><td>${((p.pop / TOTAL_POPULATION) * 100).toFixed(1)}%</td></tr>`,
      )
      .join('');
  }

  byPop.addEventListener('click', () => render([...top].sort((a, b) => b.pop - a.pop)));
  byName.addEventListener('click', () => render([...top].sort((a, b) => a.name.localeCompare(b.name))));
  csvBtn.addEventListener('click', () =>
    downloadCsv(
      [...top].sort((a, b) => b.pop - a.pop).map((p) => ({
        name: p.name,
        category: 'Province',
        value: `${p.pop.toFixed(1)} million people`,
        year: 2024,
        source: 'BPS, Population Projection 2020–2045',
      })),
      'nusadata-provinces.csv',
    ),
  );
}
