import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
let server, Bars;
before(async () => {
  server = await createServer({root: process.cwd(), appType:'custom', server:{middlewareMode:true, hmr:false, ws:false, watch:null}, optimizeDeps:{noDiscovery:true,include:[]}, logLevel:'silent'});
  Bars = (await server.ssrLoadModule('/src/sims/fr/what-is-asked.tsx')).Bars;
});
after(async () => { await server?.close(); });
test('bar lengths represent the printed n / total, with distinct visible fill', () => {
  assert.equal(typeof Bars, 'function');
  const html = renderToStaticMarkup(createElement(Bars, {rows:[{label:'Rare',n:1},{label:'Common',n:8}], total:21}));
  const widths = [...html.matchAll(/width:([\d.]+)%/g)].map(m=>Number(m[1]));
  assert.equal(widths.length, 2);
  assert.ok(Math.abs(widths[0]-100/21)<1e-8);
  assert.ok(Math.abs(widths[1]-800/21)<1e-8);
  assert.ok(!/opacity:0\.18/.test(html), 'do not fade the fill with its track');
  assert.match(html, /white-space:nowrap/);
});
test('empty denominator never emits a nonfinite width', () => {
  const html = renderToStaticMarkup(createElement(Bars, {rows:[{label:'Empty',n:0}], total:0}));
  assert.ok(!/NaN|Infinity/.test(html));
});
