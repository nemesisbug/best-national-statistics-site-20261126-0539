// NusaData — the pages. Each page is built from the figures in data.js and the
// charts in charts.js; every figure on a page carries its source and year.

import { KEY_FIGURES, SERIES, SECTORS, TRADE, PYRAMID, PROVINCES, RELEASES, TOTAL_POPULATION, SOURCE } from './data.js';
import { barChart, lineChart, donutChart, pyramid, tileGrid } from './charts.js';

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);

const cite = (source) => `<p class="cite">Source: ${esc(source)}</p>`;

const NAV = [
  ['#/', 'Overview'],
  ['#/economy', 'Economy'],
  ['#/people', 'People'],
  ['#/regions', 'Regions'],
  ['#/explorer', 'Data explorer'],
  ['#/about', 'About'],
];

export function nav(current) {
  return `<nav class="tabs" aria-label="Sections">${NAV.map(
    ([href, name]) => `<a href="${href}"${href === current ? ' aria-current="page"' : ''}>${name}</a>`,
  ).join('')}</nav>`;
}

function kpiCard(f) {
  return `<a class="kpi" href="${f.link}">
  <span class="kpi-label">${esc(f.label)}</span>
  <span class="kpi-value">${esc(f.value)} <span class="kpi-unit">${esc(f.unit)}</span></span>
  <span class="kpi-year">${f.year} · ${esc(f.source)}</span>
  <span class="kpi-note">${esc(f.note)}</span>
</a>`;
}

export function overview() {
  return `${nav('#/')}
<section class="hero">
  <p class="eyebrow">Indonesia · Statistics Indonesia (BPS) · Updated November 2026</p>
  <h1>Indonesia in numbers</h1>
  <p class="lede">The figures that describe a nation of 281.6 million people — its economy,
  its people and its 38 provinces — gathered in one place, each with its source and year.</p>
</section>
<section>
  <h2>Key figures</h2>
  <div class="kpi-grid">${KEY_FIGURES.map(kpiCard).join('')}</div>
</section>
<section class="two-col">
  <div class="card">
    <h2>Population, 2020–2024</h2>
    ${barChart(SERIES.population.values, { format: (v) => `${v.toFixed(1)}m`, label: 'Population in millions, 2020 to 2024' })}
    ${cite(SERIES.population.source)}
    <p>Indonesia added about 11.4 million people in four years — roughly one new
    Jakarta every three years. <a href="#/people">See the people section →</a></p>
  </div>
  <div class="card">
    <h2>Latest releases</h2>
    <ul class="releases">${RELEASES.map(
      (r) => `<li><strong>${esc(r.date)}</strong> — ${esc(r.title)}<br><span class="muted">${esc(r.detail)}</span></li>`,
    ).join('')}</ul>
    <p><a href="#/explorer">Browse every indicator →</a></p>
  </div>
</section>
<section>
  <h2>Where to look next</h2>
  <div class="link-cards">
    <a href="#/economy"><strong>Economy</strong><span>GDP, growth, inflation, trade and the sectors that drive them.</span></a>
    <a href="#/people"><strong>People</strong><span>Who Indonesians are: age, work, schooling and wellbeing.</span></a>
    <a href="#/regions"><strong>Regions</strong><span>All 38 provinces, from West Java’s 50 million to South Papua’s half million.</span></a>
    <a href="#/explorer"><strong>Data explorer</strong><span>Every indicator in one searchable table, with source and year.</span></a>
  </div>
</section>`;
}

export function economy() {
  return `${nav('#/economy')}
<h1>Economy</h1>
<p class="lede">A US$1.4 trillion economy growing at about 5% a year, with inflation back
below 2% and a trade surplus in its fifth straight year.</p>
<section class="two-col">
  <div class="card">
    <h2>Real GDP growth, 2020–2024</h2>
    ${barChart(SERIES.gdpGrowth.values, { format: (v) => `${v.toFixed(2)}%`, color: '#b45309', label: 'Real GDP growth, 2020 to 2024' })}
    ${cite(SERIES.gdpGrowth.source)}
    <p>The 2020 contraction was the pandemic year; growth has held at 5.0–5.3% since 2022.</p>
  </div>
  <div class="card">
    <h2>Inflation, 2020–2024</h2>
    ${lineChart(SERIES.inflation.values, { format: (v) => `${v.toFixed(2)}%`, color: '#be123c', label: 'Inflation, December year on year, 2020 to 2024' })}
    ${cite(SERIES.inflation.source)}
    <p>The 2022 spike followed the fuel-subsidy cut; by December 2024 inflation was 1.57%.</p>
  </div>
</section>
<section class="two-col">
  <div class="card">
    <h2>What the economy is made of</h2>
    ${donutChart(SECTORS, { center: 'Rp 22,139tn' })}
    ${cite('BPS, National Accounts 2024 — shares of nominal GDP')}
    <p>Manufacturing is the largest single sector at 19.0% of GDP; services together
    make up more than half of the economy.</p>
  </div>
  <div class="card">
    <h2>Trade in 2024</h2>
    <dl class="figures">
      <div><dt>Exports</dt><dd>US$ ${TRADE.exports.value.toFixed(2)} billion</dd></div>
      <div><dt>Imports</dt><dd>US$ ${TRADE.imports.value.toFixed(2)} billion</dd></div>
      <div><dt>Trade balance</dt><dd>US$ ${TRADE.surplus.value.toFixed(2)} billion surplus</dd></div>
    </dl>
    ${cite(TRADE.exports.source)}
    <p>${esc(TRADE.note)}</p>
    <p><a href="#/explorer">All economy indicators →</a></p>
  </div>
</section>`;
}

export function people() {
  return `${nav('#/people')}
<h1>People</h1>
<p class="lede">A young country getting older slowly: the median Indonesian is 30, and
two in three people are of working age.</p>
<section class="two-col">
  <div class="card wide-chart">
    <h2>Population by age, 2024</h2>
    ${pyramid(PYRAMID)}
    ${cite('BPS, Population Projection 2020–2045 — share of total population, %')}
    <p>The widest bands are the 10–24 year olds. The 65+ group is 6.6% today and
    rising — Indonesia ages into an old society around 2040.</p>
  </div>
  <div class="card">
    <h2>Work &amp; wellbeing</h2>
    <dl class="figures">
      <div><dt>Unemployment (Aug 2024)</dt><dd>4.91% of the labour force</dd></div>
      <div><dt>Poverty (Mar 2024)</dt><dd>9.03% of the population</dd></div>
      <div><dt>Human Development Index</dt><dd>75.02 (2024)</dd></div>
      <div><dt>Life expectancy</dt><dd>74.15 years (2024)</dd></div>
      <div><dt>Literacy, age 15+</dt><dd>96.53% (2023)</dd></div>
      <div><dt>Mean years of schooling</dt><dd>9.0 years (2024)</dd></div>
    </dl>
    ${cite('BPS, Sakernas · Poverty Profile · Human Development Index · Susenas')}
  </div>
</section>
<section class="two-col">
  <div class="card">
    <h2>Unemployment is falling</h2>
    ${lineChart(SERIES.unemployment.values, { format: (v) => `${v.toFixed(2)}%`, label: 'Open unemployment rate, August, 2020 to 2024' })}
    ${cite(SERIES.unemployment.source)}
  </div>
  <div class="card">
    <h2>Poverty is falling too</h2>
    ${lineChart(SERIES.poverty.values, { format: (v) => `${v.toFixed(2)}%`, color: '#4d7c0f', label: 'Poverty rate, March, 2020 to 2024' })}
    ${cite(SERIES.poverty.source)}
    <p>About 25.2 million people were below the poverty line in March 2024.</p>
  </div>
</section>`;
}

export function regions() {
  const sorted = [...PROVINCES].sort((a, b) => b.pop - a.pop);
  const top = sorted.slice(0, 10);
  const rows = top
    .map(
      (p, i) => `<tr><td>${i + 1}</td><td>${esc(p.name)}</td><td>${p.pop.toFixed(1)}</td><td>${((p.pop / TOTAL_POPULATION) * 100).toFixed(1)}%</td></tr>`,
    )
    .join('');
  return `${nav('#/regions')}
<h1>Regions</h1>
<p class="lede">Indonesia has 38 provinces. Java holds 56% of the people on 7% of the
land; the five Papuan provinces together hold fewer people than Jakarta.</p>
<section class="card">
  <h2>All 38 provinces, sized by population</h2>
  ${tileGrid(PROVINCES)}
  ${cite('BPS, Population Projection 2020–2045 — population, 2024, millions')}
  <p>Each tile is one province — hover it for its population. The full table is below.</p>
</section>
<section class="card">
  <h2>The ten largest provinces</h2>
  <p class="muted">Use the buttons to sort the table. <button id="sort-pop" type="button">Sort by population</button>
  <button id="sort-name" type="button">Sort by name</button>
  <button id="csv-btn" type="button">Download as CSV</button></p>
  <div class="table-wrap">
  <table id="province-table">
    <thead><tr><th>#</th><th>Province</th><th>Population (million)</th><th>Share of Indonesia</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  </div>
  ${cite('BPS, Population Projection 2020–2045 — population, 2024')}
  <p>West Java alone (50.3 million) has more people than Spain. The ten provinces
  above hold 73% of all Indonesians.</p>
</section>`;
}

export function explorerShell() {
  return `${nav('#/explorer')}
<h1>Data explorer</h1>
<p class="lede">Every indicator on this site in one table. Search it, filter by topic,
sort it — and download the result as a CSV file.</p>
<section class="card">
  <div class="controls">
    <label>Search <input id="q" type="search" placeholder="Try “inflation” or “poverty”" autocomplete="off"></label>
    <label>Topic
      <select id="cat">
        <option value="">All topics</option>
        <option>Population</option>
        <option>Economy</option>
        <option>Labour</option>
        <option>Welfare</option>
      </select>
    </label>
    <label>Sort by
      <select id="sort">
        <option value="name">Name (A–Z)</option>
        <option value="year">Year (newest first)</option>
        <option value="category">Topic, then name</option>
      </select>
    </label>
    <button id="csv-btn" type="button">Download as CSV</button>
  </div>
  <p id="count" class="muted" aria-live="polite"></p>
  <div class="table-wrap">
  <table id="indicator-table">
    <thead><tr><th>Indicator</th><th>Topic</th><th>Value</th><th>Year</th><th>Source</th></tr></thead>
    <tbody id="indicator-body"></tbody>
  </table>
  </div>
</section>
<p><a href="#/about">How we source and check every figure →</a></p>`;
}

export function about() {
  return `${nav('#/about')}
<h1>About NusaData</h1>
<p class="lede">NusaData is an independent statistics portal for Indonesia. It is not
affiliated with Statistics Indonesia (BPS) — it gathers BPS figures and presents
them so anyone can find, compare and cite them.</p>
<section class="card">
  <h2>How every figure is sourced</h2>
  <ol>
    <li><strong>One source per figure.</strong> Every number on this site names the BPS
    publication it came from and the year it describes — on the page, next to the figure.</li>
    <li><strong>Rounded, never invented.</strong> Values are rounded for display
    (281.6 million, not 281,603,800). Rounding is the only change made to a published figure.</li>
    <li><strong>Checked against the release.</strong> Each series is checked against
    the BPS release it cites before it is published here.</li>
  </ol>
</section>
<section class="card">
  <h2>Sources used</h2>
  <ul>
    <li>Statistics Indonesia (BPS) — Population Projection 2020–2045</li>
    <li>Statistics Indonesia (BPS) — National Accounts 2024</li>
    <li>Statistics Indonesia (BPS) — Consumer Price Index</li>
    <li>Statistics Indonesia (BPS) — Sakernas (Labour Force Survey)</li>
    <li>Statistics Indonesia (BPS) — Poverty Profile</li>
    <li>Statistics Indonesia (BPS) — Human Development Index</li>
    <li>Statistics Indonesia (BPS) — Susenas (National Socioeconomic Survey)</li>
    <li>Statistics Indonesia (BPS) — Foreign Trade Statistics 2024</li>
    <li>APJII — Internet Survey 2024</li>
    <li>Jakarta Provincial Government — Provincial Minimum Wage 2025</li>
  </ul>
  <p class="muted">Figures are for 2020–2024 unless a page says otherwise. This site works
  fully offline: it loads no file from the network and sends nothing anywhere.</p>
</section>
<section class="card">
  <h2>Contact</h2>
  <p>NusaData is a demonstration portal built for the make.fun “best national
  statistics site” competition. Figures: ${esc(SOURCE)}.</p>
</section>`;
}

export function missing() {
  return `${nav('#/')}
<h1>Page not found</h1>
<p>There is no page at this address. Try one of the sections above, or
<a href="#/">start from the overview</a>.</p>`;
}
