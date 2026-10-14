import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Smoke test of the geography diagrams: every simulation is loaded through Vite (the same transforms as the real build)
// and drawn once in English and once in Russian. It catches a crash on the first draw, such as a missing value or a bad
// label index, which the logic tests cannot see.
const root = join(import.meta.dirname, '..');
const SIMS = [
  'core-carbon-cycle',
  'core-demographic-transition',
  'core-dependency-ratio',
  'core-ecological-footprint',
  'core-greenhouse-effect',
  'core-malthus-boserup',
  'core-population-pyramid',
  'core-push-pull',
  'core-water-food-energy',
  'opt-a-basin',
  'opt-a-dams',
  'opt-a-hydrograph',
  'opt-a-scarcity',
  'opt-g-bidrent',
  'opt-g-heat',
  'opt-g-models',
  'opt-g-stress',
  'opt-g-transport',
];

let server;
const components = {};

before(async () => {
  server = await createServer({
    root,
    appType: 'custom',
    // No port, no web socket, no file watcher: the server only compiles modules for this test.
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    logLevel: 'silent',
  });
  for (const id of SIMS) {
    components[id] = (await server.ssrLoadModule(`/src/sims/geo/${id}.tsx`)).default;
  }
});

after(async () => {
  await server?.close();
});

for (const id of SIMS) {
  for (const lang of ['en', 'ru']) {
    test(`${id} draws in ${lang} without an error and has a picture`, () => {
      const markup = renderToStaticMarkup(createElement(components[id], { lang }));
      assert.ok(markup.length > 200, 'something is drawn');
      assert.ok(!markup.includes('NaN'), 'no NaN in the drawn text or positions');
    });
  }
}
