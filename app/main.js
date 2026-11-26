// NusaData — the router. Hash routes, one page each, rendered from views.js;
// the explorer and regions pages get their interactive controls wired up
// after each render. window.__shotReady tells a screenshot script the page
// is on screen.
//
//   #/            overview
//   #/economy     economy
//   #/people      people
//   #/regions     regions
//   #/explorer    data explorer
//   #/about       about

import { overview, economy, people, regions, explorerShell, about, missing } from './views.js';
import { initExplorer } from './explorer.js';
import { initRegions } from './regions.js';

const app = document.getElementById('app');

const PAGES = {
  '/': { view: overview, title: 'NusaData — Indonesia in Numbers' },
  '/economy': { view: economy, title: 'Economy | NusaData' },
  '/people': { view: people, title: 'People | NusaData' },
  '/regions': { view: regions, title: 'Regions | NusaData' },
  '/explorer': { view: explorerShell, title: 'Data Explorer | NusaData' },
  '/about': { view: about, title: 'About | NusaData' },
};

function render() {
  window.__shotReady = false;
  const path = location.hash.replace(/^#/, '') || '/';
  const page = PAGES[path] || null;
  document.title = page ? page.title : 'Not found | NusaData';
  app.innerHTML = page ? page.view() : missing();
  if (path === '/explorer') initExplorer();
  if (path === '/regions') initRegions();
  window.scrollTo(0, 0);
  // A render is synchronous DOM work, so the page is on screen here.
  window.__shotReady = true;
}

window.addEventListener('hashchange', render);
render();
