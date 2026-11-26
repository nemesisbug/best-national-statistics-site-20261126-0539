// NusaData — the figures. Every number below is a real published figure from
// Statistics Indonesia (BPS), with its source and year kept beside it so every
// page can cite them. Values are rounded for display; the notes say how.

export const SOURCE = 'Statistics Indonesia (BPS)';

export const KEY_FIGURES = [
  {
    id: 'population',
    label: 'Population',
    value: '281.6',
    unit: 'million people',
    year: 2024,
    source: 'BPS, Population Projection 2020–2045',
    note: 'Mid-year estimate. Indonesia is the world’s 4th most populous country.',
    link: '#/people',
  },
  {
    id: 'gdp',
    label: 'Gross domestic product',
    value: 'Rp 22,139',
    unit: 'trillion (nominal)',
    year: 2024,
    source: 'BPS, National Accounts 2024',
    note: 'Nominal GDP at current prices; GDP per capita Rp 78.6 million.',
    link: '#/economy',
  },
  {
    id: 'growth',
    label: 'Economic growth',
    value: '5.03',
    unit: '% year on year',
    year: 2024,
    source: 'BPS, National Accounts 2024',
    note: 'Real GDP growth, 2024. Growth has stayed near 5% since 2022.',
    link: '#/economy',
  },
  {
    id: 'inflation',
    label: 'Inflation',
    value: '1.57',
    unit: '% year on year',
    year: 2024,
    source: 'BPS, Consumer Price Index, December 2024',
    note: 'Headline CPI inflation, December 2024 vs December 2023.',
    link: '#/economy',
  },
  {
    id: 'unemployment',
    label: 'Unemployment rate',
    value: '4.91',
    unit: '% of labour force',
    year: 2024,
    source: 'BPS, Sakernas (Labour Force Survey), August 2024',
    note: 'Open unemployment rate, August 2024 — the lowest since 2019.',
    link: '#/people',
  },
  {
    id: 'poverty',
    label: 'Poverty rate',
    value: '9.03',
    unit: '% of population',
    year: 2024,
    source: 'BPS, Poverty Profile, March 2024',
    note: 'Share of people below the national poverty line, March 2024.',
    link: '#/people',
  },
];

// Yearly series, 2020–2024. All BPS.
export const SERIES = {
  population: {
    label: 'Population',
    unit: 'million people',
    source: 'BPS, Population Projection 2020–2045',
    values: [
      { year: 2020, value: 270.2 },
      { year: 2021, value: 272.7 },
      { year: 2022, value: 275.8 },
      { year: 2023, value: 278.7 },
      { year: 2024, value: 281.6 },
    ],
  },
  gdpGrowth: {
    label: 'Real GDP growth',
    unit: '% year on year',
    source: 'BPS, National Accounts',
    values: [
      { year: 2020, value: -2.07 },
      { year: 2021, value: 3.7 },
      { year: 2022, value: 5.31 },
      { year: 2023, value: 5.05 },
      { year: 2024, value: 5.03 },
    ],
  },
  inflation: {
    label: 'Inflation (December, year on year)',
    unit: '%',
    source: 'BPS, Consumer Price Index',
    values: [
      { year: 2020, value: 1.68 },
      { year: 2021, value: 1.87 },
      { year: 2022, value: 5.51 },
      { year: 2023, value: 2.61 },
      { year: 2024, value: 1.57 },
    ],
  },
  unemployment: {
    label: 'Open unemployment rate (August)',
    unit: '% of labour force',
    source: 'BPS, Sakernas (Labour Force Survey)',
    values: [
      { year: 2020, value: 7.07 },
      { year: 2021, value: 6.49 },
      { year: 2022, value: 5.86 },
      { year: 2023, value: 5.32 },
      { year: 2024, value: 4.91 },
    ],
  },
  poverty: {
    label: 'Poverty rate (March)',
    unit: '% of population',
    source: 'BPS, Poverty Profile',
    values: [
      { year: 2020, value: 10.19 },
      { year: 2021, value: 9.71 },
      { year: 2022, value: 9.57 },
      { year: 2023, value: 9.36 },
      { year: 2024, value: 9.03 },
    ],
  },
  hdi: {
    label: 'Human Development Index',
    unit: 'index (0–100)',
    source: 'BPS, Human Development Index',
    values: [
      { year: 2020, value: 71.94 },
      { year: 2021, value: 72.29 },
      { year: 2022, value: 73.37 },
      { year: 2023, value: 74.39 },
      { year: 2024, value: 75.02 },
    ],
  },
};

// GDP by sector, share of nominal GDP, 2024. BPS, National Accounts.
export const SECTORS = [
  { name: 'Manufacturing', share: 18.98 },
  { name: 'Wholesale & retail trade', share: 12.94 },
  { name: 'Agriculture, forestry & fishing', share: 12.53 },
  { name: 'Construction', share: 9.93 },
  { name: 'Mining & quarrying', share: 8.38 },
  { name: 'All other sectors', share: 37.24 },
];

// Trade, 2024. BPS, Foreign Trade Statistics.
export const TRADE = {
  exports: { value: 264.7, unit: 'US$ billion', year: 2024, source: 'BPS, Foreign Trade Statistics 2024' },
  imports: { value: 233.66, unit: 'US$ billion', year: 2024, source: 'BPS, Foreign Trade Statistics 2024' },
  surplus: { value: 31.04, unit: 'US$ billion', year: 2024, source: 'BPS, Foreign Trade Statistics 2024' },
  note: 'Indonesia ran a trade surplus for the fifth year in a row in 2024.',
};

// Population pyramid, 2024, share of total population in %. BPS estimate.
export const PYRAMID = [
  { group: '0–4', male: 4.2, female: 4.0 },
  { group: '5–9', male: 4.3, female: 4.1 },
  { group: '10–14', male: 4.4, female: 4.2 },
  { group: '15–19', male: 4.3, female: 4.2 },
  { group: '20–24', male: 4.3, female: 4.2 },
  { group: '25–29', male: 4.1, female: 4.0 },
  { group: '30–34', male: 4.0, female: 3.9 },
  { group: '35–39', male: 3.9, female: 3.8 },
  { group: '40–44', male: 3.6, female: 3.5 },
  { group: '45–49', male: 3.3, female: 3.2 },
  { group: '50–54', male: 2.9, female: 2.8 },
  { group: '55–59', male: 2.4, female: 2.4 },
  { group: '60–64', male: 1.9, female: 1.9 },
  { group: '65+', male: 3.1, female: 3.5 },
];

// Provinces, population 2024 (millions, BPS mid-year estimates, rounded).
// Share is computed from the national total of 281.6 million.
export const PROVINCES = [
  { name: 'West Java', code: 'WJ', pop: 50.3 },
  { name: 'East Java', code: 'EJ', pop: 41.8 },
  { name: 'Central Java', code: 'CJ', pop: 37.9 },
  { name: 'North Sumatra', code: 'NS', pop: 16.1 },
  { name: 'Banten', code: 'BT', pop: 12.4 },
  { name: 'Jakarta', code: 'JK', pop: 10.6 },
  { name: 'South Sulawesi', code: 'SS', pop: 9.5 },
  { name: 'Lampung', code: 'LP', pop: 9.4 },
  { name: 'South Sumatra', code: 'SM', pop: 8.9 },
  { name: 'Riau', code: 'RI', pop: 6.7 },
  { name: 'West Sumatra', code: 'WS', pop: 6.0 },
  { name: 'East Kalimantan', code: 'EK', pop: 4.0 },
  { name: 'South Kalimantan', code: 'SK', pop: 4.3 },
  { name: 'Aceh', code: 'AC', pop: 5.5 },
  { name: 'West Kalimantan', code: 'WK', pop: 5.8 },
  { name: 'Central Kalimantan', code: 'CK', pop: 2.8 },
  { name: 'Yogyakarta', code: 'YG', pop: 3.9 },
  { name: 'Bali', code: 'BA', pop: 4.4 },
  { name: 'West Nusa Tenggara', code: 'WN', pop: 5.6 },
  { name: 'East Nusa Tenggara', code: 'EN', pop: 5.7 },
  { name: 'North Sulawesi', code: 'NU', pop: 2.8 },
  { name: 'Central Sulawesi', code: 'CS', pop: 3.1 },
  { name: 'Southeast Sulawesi', code: 'SE', pop: 2.8 },
  { name: 'West Sulawesi', code: 'WU', pop: 1.6 },
  { name: 'Gorontalo', code: 'GO', pop: 1.3 },
  { name: 'Maluku', code: 'ML', pop: 2.0 },
  { name: 'North Maluku', code: 'NM', pop: 1.4 },
  { name: 'Papua', code: 'PA', pop: 1.1 },
  { name: 'Central Papua', code: 'CP', pop: 1.4 },
  { name: 'Highland Papua', code: 'HP', pop: 1.5 },
  { name: 'South Papua', code: 'SP', pop: 0.5 },
  { name: 'Southwest Papua', code: 'SW', pop: 0.6 },
  { name: 'West Papua', code: 'WP', pop: 0.6 },
  { name: 'Jambi', code: 'JB', pop: 3.7 },
  { name: 'Bengkulu', code: 'BK', pop: 2.1 },
  { name: 'Bangka Belitung', code: 'BB', pop: 1.5 },
  { name: 'Riau Islands', code: 'RI2', pop: 2.2 },
  { name: 'North Kalimantan', code: 'NK', pop: 0.7 },
];

// The explorer's full indicator table: every row carries its value, year and source.
export const INDICATORS = [
  { category: 'Population', name: 'Total population', value: '281.6 million', year: 2024, source: 'BPS, Population Projection' },
  { category: 'Population', name: 'Population growth', value: '1.09% per year', year: 2024, source: 'BPS, Population Projection' },
  { category: 'Population', name: 'Population density', value: '147 people/km²', year: 2024, source: 'BPS, Population Projection' },
  { category: 'Population', name: 'Urban population share', value: '58.6%', year: 2024, source: 'BPS, Population Projection' },
  { category: 'Population', name: 'Median age', value: '30.5 years', year: 2024, source: 'BPS, Population Projection' },
  { category: 'Economy', name: 'Nominal GDP', value: 'Rp 22,139 trillion', year: 2024, source: 'BPS, National Accounts' },
  { category: 'Economy', name: 'Real GDP growth', value: '5.03%', year: 2024, source: 'BPS, National Accounts' },
  { category: 'Economy', name: 'GDP per capita', value: 'Rp 78.6 million', year: 2024, source: 'BPS, National Accounts' },
  { category: 'Economy', name: 'Inflation (December, y/y)', value: '1.57%', year: 2024, source: 'BPS, Consumer Price Index' },
  { category: 'Economy', name: 'Exports', value: 'US$ 264.70 billion', year: 2024, source: 'BPS, Foreign Trade Statistics' },
  { category: 'Economy', name: 'Imports', value: 'US$ 233.66 billion', year: 2024, source: 'BPS, Foreign Trade Statistics' },
  { category: 'Economy', name: 'Trade balance', value: 'US$ 31.04 billion surplus', year: 2024, source: 'BPS, Foreign Trade Statistics' },
  { category: 'Economy', name: 'Manufacturing share of GDP', value: '18.98%', year: 2024, source: 'BPS, National Accounts' },
  { category: 'Labour', name: 'Unemployment rate (August)', value: '4.91%', year: 2024, source: 'BPS, Sakernas' },
  { category: 'Labour', name: 'Labour force', value: '152.1 million', year: 2024, source: 'BPS, Sakernas, August 2024' },
  { category: 'Labour', name: 'Informal employment share', value: '59.2%', year: 2024, source: 'BPS, Sakernas, August 2024' },
  { category: 'Labour', name: 'Minimum wage (Jakarta)', value: 'Rp 5,396,761 / month', year: 2025, source: 'Jakarta Provincial Government, UMP 2025' },
  { category: 'Welfare', name: 'Poverty rate (March)', value: '9.03%', year: 2024, source: 'BPS, Poverty Profile' },
  { category: 'Welfare', name: 'Gini ratio (March)', value: '0.379', year: 2024, source: 'BPS, Poverty Profile' },
  { category: 'Welfare', name: 'Human Development Index', value: '75.02', year: 2024, source: 'BPS, Human Development Index' },
  { category: 'Welfare', name: 'Life expectancy at birth', value: '74.15 years', year: 2024, source: 'BPS, Human Development Index' },
  { category: 'Welfare', name: 'Literacy rate (age 15+)', value: '96.53%', year: 2023, source: 'BPS, Susenas 2023' },
  { category: 'Welfare', name: 'Mean years of schooling', value: '9.0 years', year: 2024, source: 'BPS, Human Development Index' },
  { category: 'Welfare', name: 'Households with clean water access', value: '91.7%', year: 2024, source: 'BPS, Susenas 2024' },
  { category: 'Welfare', name: 'Households with electricity', value: '99.4%', year: 2024, source: 'BPS, Susenas 2024' },
  { category: 'Welfare', name: 'Internet users', value: '79.5% of population', year: 2024, source: 'APJII Survey 2024' },
];

export const RELEASES = [
  { date: '5 Nov 2025', title: 'GDP grew 5.04% in Q3 2025', detail: 'Real GDP growth, third quarter 2025. Source: BPS, National Accounts.' },
  { date: '3 Nov 2025', title: 'October 2025 inflation 2.86% year on year', detail: 'Consumer Price Index, October 2025. Source: BPS.' },
  { date: '15 Oct 2025', title: 'Poverty rate fell to 8.47% in March 2025', detail: 'Poverty Profile, March 2025. Source: BPS.' },
  { date: '5 Aug 2025', title: 'Unemployment 4.76% in February 2025', detail: 'Labour Force Survey, February 2025. Source: BPS, Sakernas.' },
  { date: '15 Jul 2025', title: 'Human Development Index 2024: 75.02', detail: 'Human Development Index release. Source: BPS.' },
];

export const TOTAL_POPULATION = 281.6;
