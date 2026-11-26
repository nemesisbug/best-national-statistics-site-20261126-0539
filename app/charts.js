// NusaData — hand-drawn SVG charts. No chart library is used: every chart is
// built from the data as inline SVG, so the site stays small and fully offline.

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

const PALETTE = ['#0f766e', '#b45309', '#be123c', '#1d4ed8', '#4d7c0f', '#7c3aed'];

// A vertical bar chart. `values` is [{year, value}]; `format` formats a value.
export function barChart(values, { format = (v) => String(v), color = '#0f766e', height = 220, label = '' } = {}) {
  const w = 560;
  const h = height;
  const padL = 44;
  const padB = 30;
  const padT = 14;
  const max = Math.max(...values.map((v) => v.value), 0.001);
  const min = Math.min(0, ...values.map((v) => v.value));
  const span = max - min || 1;
  const slot = (w - padL - 12) / values.length;
  const barW = Math.min(46, slot * 0.62);
  const y = (v) => padT + (1 - (v - min) / span) * (h - padT - padB);
  const bars = values
    .map((v, i) => {
      const x = padL + i * slot + (slot - barW) / 2;
      const top = y(Math.max(v.value, 0));
      const bottom = y(Math.min(v.value, 0));
      const val = v.value < 0 ? v.value : v.value;
      return `<g>
  <rect x="${x.toFixed(1)}" y="${top.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(1, bottom - top).toFixed(1)}" rx="3" fill="${v.value < 0 ? '#be123c' : color}" />
  <text x="${(x + barW / 2).toFixed(1)}" y="${(top - 5).toFixed(1)}" text-anchor="middle" class="chart-value">${esc(format(val))}</text>
  <text x="${(x + barW / 2).toFixed(1)}" y="${h - 10}" text-anchor="middle" class="chart-label">${esc(v.year)}</text>
</g>`;
    })
    .join('');
  const zero = y(0);
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" class="chart">
  <line x1="${padL}" y1="${zero.toFixed(1)}" x2="${w - 8}" y2="${zero.toFixed(1)}" class="chart-axis" />
  ${bars}
</svg>`;
}

// A line chart with dots and value labels.
export function lineChart(values, { format = (v) => String(v), color = '#0f766e', height = 220, label = '' } = {}) {
  const w = 560;
  const h = height;
  const padL = 44;
  const padR = 16;
  const padB = 30;
  const padT = 20;
  const max = Math.max(...values.map((v) => v.value));
  const min = Math.min(...values.map((v) => v.value));
  const span = max - min || 1;
  const x = (i) => padL + (i * (w - padL - padR)) / (values.length - 1);
  const y = (v) => padT + (1 - (v - min) / span) * (h - padT - padB);
  const points = values.map((v, i) => `${x(i).toFixed(1)},${y(v.value).toFixed(1)}`).join(' ');
  const dots = values
    .map(
      (v, i) => `<g>
  <circle cx="${x(i).toFixed(1)}" cy="${y(v.value).toFixed(1)}" r="4.5" fill="${color}" stroke="#fff" stroke-width="1.5" />
  <text x="${x(i).toFixed(1)}" y="${(y(v.value) - 10).toFixed(1)}" text-anchor="middle" class="chart-value">${esc(format(v.value))}</text>
  <text x="${x(i).toFixed(1)}" y="${h - 10}" text-anchor="middle" class="chart-label">${esc(v.year)}</text>
</g>`,
    )
    .join('');
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" class="chart">
  <line x1="${padL}" y1="${y(min).toFixed(1)}" x2="${w - padR}" y2="${y(min).toFixed(1)}" class="chart-axis" />
  <polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
  ${dots}
</svg>`;
}

// A donut chart with a centre label and a legend list beside it.
export function donutChart(items, { center = '', height = 240 } = {}) {
  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const r = 82;
  const hole = 56;
  const total = items.reduce((s, it) => s + it.share, 0);
  let angle = -90;
  const slices = items
    .map((it, i) => {
      const a0 = angle;
      const a1 = angle + (it.share / total) * 360;
      angle = a1;
      const large = a1 - a0 > 180 ? 1 : 0;
      const rad = (d) => (d * Math.PI) / 180;
      const x0 = cx + r * Math.cos(rad(a0));
      const y0 = cy + r * Math.sin(rad(a0));
      const x1 = cx + r * Math.cos(rad(a1));
      const y1 = cy + r * Math.sin(rad(a1));
      const ix0 = cx + hole * Math.cos(rad(a1));
      const iy0 = cy + hole * Math.sin(rad(a1));
      const ix1 = cx + hole * Math.cos(rad(a0));
      const iy1 = cy + hole * Math.sin(rad(a0));
      return `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} L ${ix0.toFixed(1)} ${iy0.toFixed(1)} A ${hole} ${hole} 0 ${large} 0 ${ix1.toFixed(1)} ${iy1.toFixed(1)} Z" fill="${PALETTE[i % PALETTE.length]}" />`;
    })
    .join('');
  const legend = items
    .map(
      (it, i) => `<li><span class="swatch" style="background:${PALETTE[i % PALETTE.length]}"></span>${esc(it.name)} <strong>${it.share.toFixed(2)}%</strong></li>`,
    )
    .join('');
  return `<div class="donut-wrap">
  <svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Share of GDP by sector" class="donut">
    ${slices}
    <text x="${cx}" y="${cy - 4}" text-anchor="middle" class="donut-center">${esc(center)}</text>
    <text x="${cx}" y="${cy + 16}" text-anchor="middle" class="donut-sub">of GDP, 2024</text>
  </svg>
  <ul class="legend">${legend}</ul>
</div>`;
}

// A two-sided population pyramid.
export function pyramid(rows) {
  const w = 560;
  const rowH = 24;
  const h = rows.length * rowH + 34;
  const mid = w / 2;
  const scale = (w / 2 - 46) / 5;
  const body = rows
    .map((r, i) => {
      const yPos = 18 + i * rowH;
      const ml = r.male * scale;
      const fl = r.female * scale;
      return `<g>
  <text x="${mid}" y="${yPos + 15}" text-anchor="middle" class="chart-label">${esc(r.group)}</text>
  <rect x="${(mid - ml - 34).toFixed(1)}" y="${yPos}" width="${ml.toFixed(1)}" height="18" fill="#0f766e" rx="2" />
  <rect x="${(mid + 34).toFixed(1)}" y="${yPos}" width="${fl.toFixed(1)}" height="18" fill="#b45309" rx="2" />
  <text x="${(mid - ml - 38).toFixed(1)}" y="${yPos + 14}" text-anchor="end" class="chart-value">${r.male.toFixed(1)}%</text>
  <text x="${(mid + fl + 38).toFixed(1)}" y="${yPos + 14}" class="chart-value">${r.female.toFixed(1)}%</text>
</g>`;
    })
    .join('');
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Population pyramid, 2024" class="chart">
  <text x="${mid - 60}" y="12" text-anchor="middle" class="chart-label">Male</text>
  <text x="${mid + 60}" y="12" text-anchor="middle" class="chart-label">Female</text>
  ${body}
</svg>`;
}

// A tile grid of the provinces, each tile coloured by population band.
export function tileGrid(provinces) {
  const band = (pop) =>
    pop >= 30 ? 't5' : pop >= 10 ? 't4' : pop >= 5 ? 't3' : pop >= 2 ? 't2' : 't1';
  const tiles = provinces
    .map(
      (p) => `<span class="tile ${band(p.pop)}" title="${esc(p.name)} — ${p.pop.toFixed(1)} million people, 2024"><span class="tile-code">${esc(p.code)}</span><span class="tile-pop">${p.pop.toFixed(1)}m</span></span>`,
    )
    .join('');
  return `<div class="tiles" role="img" aria-label="Tile map of Indonesia's 38 provinces, coloured by population">${tiles}</div>
<p class="tiles-key"><span class="key t5"></span> 30m+ <span class="key t4"></span> 10–30m <span class="key t3"></span> 5–10m <span class="key t2"></span> 2–5m <span class="key t1"></span> under 2m</p>`;
}
