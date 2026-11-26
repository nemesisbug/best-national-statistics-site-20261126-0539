// NusaData — the data explorer: search, filter, sort and CSV download for the
// full indicator table. All of it runs on the data already in the page.

import { INDICATORS } from './data.js';

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

function row(r) {
  return `<tr><td>${esc(r.name)}</td><td>${esc(r.category)}</td><td>${esc(r.value)}</td><td>${r.year}</td><td>${esc(r.source)}</td></tr>`;
}

function toCsv(rows) {
  const cell = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const lines = [['Indicator', 'Topic', 'Value', 'Year', 'Source'].map(cell).join(',')];
  for (const r of rows) lines.push([r.name, r.category, r.value, r.year, r.source].map(cell).join(','));
  return lines.join('\n');
}

export function downloadCsv(rows, filename) {
  const blob = new Blob([toCsv(rows)], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function initExplorer() {
  const body = document.getElementById('indicator-body');
  const count = document.getElementById('count');
  const q = document.getElementById('q');
  const cat = document.getElementById('cat');
  const sort = document.getElementById('sort');
  const csvBtn = document.getElementById('csv-btn');
  if (!body) return;

  let current = INDICATORS;

  function render() {
    const needle = q.value.trim().toLowerCase();
    const topic = cat.value;
    let rows = INDICATORS.filter(
      (r) =>
        (!topic || r.category === topic) &&
        (!needle || `${r.name} ${r.value} ${r.source}`.toLowerCase().includes(needle)),
    );
    if (sort.value === 'name') rows = [...rows].sort((a, b) => a.name.localeCompare(b.name));
    if (sort.value === 'year') rows = [...rows].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
    if (sort.value === 'category') rows = [...rows].sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    current = rows;
    body.innerHTML = rows.length
      ? rows.map(row).join('')
      : '<tr><td colspan="5">No indicator matches that search. Try a different word, or clear the topic filter.</td></tr>';
    count.textContent = `Showing ${rows.length} of ${INDICATORS.length} indicators.`;
  }

  q.addEventListener('input', render);
  cat.addEventListener('change', render);
  sort.addEventListener('change', render);
  csvBtn.addEventListener('click', () => downloadCsv(current, 'nusadata-indicators.csv'));
  render();
}
