import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  BANDS,
  CENTRE,
  GAP,
  MAX_BAR,
  WEIGHTS,
  barLength,
  bandForRow,
  femaleBarX,
  maleBarX,
  sharesOf,
} from '../src/sims/geo/core-population-pyramid-logic.ts';

// Rows are drawn from the top of the chart, so the labels read from the oldest band at the top to the youngest at the bottom.
test('age labels run from 80+ at the top to 0–9 at the bottom', () => {
  const shown = BANDS.map((_, row) => BANDS[bandForRow(row)]);
  assert.deepEqual(shown, [...BANDS].reverse());
  assert.equal(shown[0], '80+');
  assert.equal(shown[shown.length - 1], '0–9');
});

test('the bottom bar is the youngest band in every stage', () => {
  for (let stage = 0; stage < WEIGHTS.length; stage++) {
    const shares = sharesOf(stage);
    const bottom = shares[bandForRow(BANDS.length - 1)];
    assert.equal(bottom, shares[0], `stage ${stage + 1}`);
  }
});

test('male bars grow to the left of the centre and female bars to the right, outward from the gap', () => {
  for (const width of [0, 25, MAX_BAR]) {
    assert.equal(maleBarX(width) + width, CENTRE - GAP, 'male bar ends at the gap');
    assert.ok(maleBarX(width) < CENTRE, 'male bar lies on the left');
    assert.equal(femaleBarX(), CENTRE + GAP, 'female bar starts at the gap');
    assert.ok(femaleBarX() + width > CENTRE, 'female bar lies on the right');
  }
});

test('the largest band has the full bar length on the common scale', () => {
  const longest = Math.max(...WEIGHTS.flatMap((_, stage) => sharesOf(stage)));
  assert.equal(barLength(longest), MAX_BAR);
});

// The shapes must match the notes in the component: the base is wide in stages 1 and 2, narrow in stage 3, and the
// middle and older bands are wider than the base in stage 4, while the top is wider than the base in stage 5.
test('stage shapes match the notes: base first (index 0 is the youngest band)', () => {
  const [stage1, stage2, stage3, stage4, stage5] = WEIGHTS;
  assert.equal(Math.max(...stage1), stage1[0], 'stage 1: the base is the widest band');
  assert.equal(Math.max(...stage2), stage2[0], 'stage 2: the base is the widest band');
  assert.ok(stage3[0] < stage3[2], 'stage 3: the base is narrower than the young adult bands');
  assert.ok(stage4[3] > stage4[0] && stage4[5] > stage4[0], 'stage 4: middle and older bands are wider than the base');
  assert.ok(stage5[8] > stage5[0], 'stage 5: the top is wider than the base');
});

// ---- the drawn component, not only its logic

// The logic tests cannot see a label put on the wrong row or on the wrong side. So the component is drawn to static
// markup, and the positions of its labels and bars are read back from that markup.
const root = join(import.meta.dirname, '..');
let server;
let PopulationPyramid;

before(async () => {
  server = await createServer({
    root,
    appType: 'custom',
    // No port, no web socket, no file watcher: the server only compiles modules for this test.
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    logLevel: 'silent',
  });
  PopulationPyramid = (await server.ssrLoadModule('/src/sims/geo/core-population-pyramid.tsx')).default;
});

after(async () => {
  await server?.close();
});

function attribute(attributes, name) {
  return new RegExp(`\\s${name}="([^"]*)"`).exec(attributes)?.[1];
}

function drawnTexts(markup) {
  return [...markup.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g)].map(([, attributes, content]) => ({
    x: Number(attribute(attributes, 'x')),
    y: Number(attribute(attributes, 'y')),
    content,
  }));
}

function drawnBars(markup) {
  return [...markup.matchAll(/<rect\b([^>]*)>/g)].map(([, attributes]) => ({
    x: Number(attribute(attributes, 'x')),
    y: Number(attribute(attributes, 'y')),
    width: Number(attribute(attributes, 'width')),
    height: Number(attribute(attributes, 'height')),
    fill: attribute(attributes, 'fill'),
  }));
}

const SIDE_TITLES = { en: ['Male', 'Female'], ru: ['Мужчины', 'Женщины'] };

for (const lang of ['en', 'ru']) {
  test(`drawn pyramid (${lang}): 80+ is drawn above 0–9, and each label sits on the row of its own bars`, () => {
    const markup = renderToStaticMarkup(createElement(PopulationPyramid, { lang }));
    const texts = drawnTexts(markup);
    const bars = drawnBars(markup);
    const males = bars.filter(bar => bar.fill === '#3f6b8c');
    const females = bars.filter(bar => bar.fill === '#b4604a');
    assert.equal(males.length, BANDS.length, 'one male bar per band');
    assert.equal(females.length, BANDS.length, 'one female bar per band');

    const labels = BANDS.map(band => {
      const found = texts.filter(text => text.content === band);
      assert.equal(found.length, 1, `one label for ${band}`);
      return { band, ...found[0] };
    });
    const topToBottom = [...labels].sort((a, b) => a.y - b.y).map(label => label.band);
    assert.deepEqual(topToBottom, [...BANDS].reverse());

    for (const label of labels) {
      const onRow = bar => bar.y <= label.y && label.y <= bar.y + bar.height;
      const [male] = males.filter(onRow);
      const [female] = females.filter(onRow);
      assert.equal(label.x, CENTRE, `${label.band}: label on the centre line`);
      assert.ok(male && female, `${label.band}: one male and one female bar on the label's row`);
      assert.ok(Math.abs(male.x + male.width - (CENTRE - GAP)) < 1e-9, `${label.band}: male bar ends at the gap`);
      assert.ok(Math.abs(female.x - (CENTRE + GAP)) < 1e-9, `${label.band}: female bar starts at the gap`);
      assert.ok(Math.abs(male.width - female.width) < 1e-9, `${label.band}: both sides have the same length`);
      const expected = barLength(sharesOf(0)[BANDS.indexOf(label.band)]);
      assert.ok(Math.abs(male.width - expected) < 1e-9, `${label.band}: length matches stage 1`);
    }

    const [maleTitle, femaleTitle] = SIDE_TITLES[lang].map(title => texts.find(text => text.content === title));
    assert.ok(maleTitle.x < CENTRE, 'the male title is left of the centre');
    assert.ok(femaleTitle.x > CENTRE, 'the female title is right of the centre');

    // Stage 1 is a triangle with a wide base: the widest bar is the youngest band, drawn at the bottom.
    const widest = males.reduce((longest, bar) => (bar.width > longest.width ? bar : longest));
    const youngest = labels.find(label => label.band === '0–9');
    assert.ok(widest.y <= youngest.y && youngest.y <= widest.y + widest.height, 'the widest bar is the 0–9 bar');
  });
}
