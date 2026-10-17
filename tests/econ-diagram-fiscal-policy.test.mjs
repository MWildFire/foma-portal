// node --test tests/econ-diagram-fiscal-policy.test.mjs
// Checks the geometry of the fiscal-policy diagram (src/sims/econ/fiscal-policy-logic.ts): SRAS slopes up over its whole length
// (Tragakes ch.13 Fig 13.2a, ch.9 Fig 9.2), A, C and B are crossings of the right curves, and AD shifts right by the multiplied
// rise in government spending.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  GOVERNMENT_SPENDING_RISE,
  MPC,
  MULTIPLIER,
  POTENTIAL_OUTPUT,
  ad1Price,
  ad2Price,
  ad3Price,
  pointA,
  pointB,
  pointC,
  srasPrice,
} from '../src/sims/econ/fiscal-policy-logic.ts';

const near = (a, b) => Math.abs(a - b) < 1e-9;
// Real output on an AD curve P = a - Y at price level p (the curves have slope -1).
const outputOnAd = (price, p) => {
  const a = price(0);
  return a - p;
};

test('SRAS slopes up over its whole drawn length, with no flat section', () => {
  for (let y = 2; y < 12; y += 0.5) {
    assert.ok(srasPrice(y + 0.5) > srasPrice(y), `SRAS rises between output ${y} and ${y + 0.5}`);
  }
  assert.ok(srasPrice(POTENTIAL_OUTPUT - 1) < srasPrice(POTENTIAL_OUTPUT), 'SRAS also rises below potential output');
});

test('the AD curves slope down', () => {
  for (const price of [ad1Price, ad2Price, ad3Price]) {
    for (let y = 4; y < 12; y += 1) assert.ok(price(y + 1) < price(y));
  }
});

test('A, C and B lie on SRAS and on AD1, AD2 and AD3', () => {
  for (const [name, point, price] of [['A', pointA, ad1Price], ['C', pointC, ad2Price], ['B', pointB, ad3Price]]) {
    assert.ok(near(price(point[0]), point[1]), `${name} lies on its AD curve`);
    assert.ok(near(srasPrice(point[0]), point[1]), `${name} lies on SRAS`);
  }
});

test('A is below potential output and B is on LRAS', () => {
  assert.ok(pointA[0] < POTENTIAL_OUTPUT, 'A is below potential output, so there is spare capacity');
  assert.equal(pointB[0], POTENTIAL_OUTPUT);
  assert.ok(pointC[0] > pointA[0] && pointC[0] < pointB[0], 'C lies between A and B');
});

test('expansionary policy shifts AD to the right: by the rise in G, then by the multiplied rise', () => {
  assert.equal(MULTIPLIER, 1 / (1 - MPC));
  assert.equal(MULTIPLIER, 2);
  for (const p of [3, 5, 7, 9]) {
    assert.ok(near(outputOnAd(ad2Price, p) - outputOnAd(ad1Price, p), GOVERNMENT_SPENDING_RISE), 'AD2 is AD1 shifted right by the rise in G');
    assert.ok(near(outputOnAd(ad3Price, p) - outputOnAd(ad1Price, p), MULTIPLIER * GOVERNMENT_SPENDING_RISE), 'AD3 is AD1 shifted right by k x the rise in G');
  }
});

test('output rises by less than the shift of AD, because the price level rises along SRAS', () => {
  const shift = MULTIPLIER * GOVERNMENT_SPENDING_RISE;
  assert.ok(pointB[0] - pointA[0] < shift);
  assert.ok(pointC[1] > pointA[1] && pointB[1] > pointC[1], 'the price level rises from A to C to B');
});

test('the component does not draw SRAS flat, and its texts carry the equilibrium numbers in both languages', () => {
  const source = readFileSync(new URL('../src/sims/econ/fiscal-policy.tsx', import.meta.url), 'utf8');
  // A horizontal shift of AD is valid; banning that word rejected a correct explanation.
  // Bind the rendered SRAS to the independently checked rising function instead.
  assert.match(source, /const SRAS = fn\(srasPrice, 2, 12, 10\)/);
  assert.match(source, /id: 'sras', points: SRAS/);
  assert.ok(source.includes(`real output ${pointA[0]} and price level ${pointA[1]}`), 'EN step 1 names A');
  assert.ok(source.includes(`реальный выпуск ${pointA[0]}, уровень цен ${pointA[1]}`), 'RU step 1 names A');
  assert.ok(source.includes(`Output rises from ${pointA[0]} to ${pointB[0]} and the price level from ${pointA[1]} to ${pointB[1]}`), 'EN step 3 names B');
  assert.ok(source.includes(`Выпуск растёт с ${pointA[0]} до ${pointB[0]}, а уровень цен — с ${pointA[1]} до ${pointB[1]}`), 'RU step 3 names B');
});
