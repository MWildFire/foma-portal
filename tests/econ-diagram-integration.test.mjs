// node --test tests/econ-diagram-integration.test.mjs
// Checks the geometry of the customs-union diagram (src/sims/econ/integration-logic.ts): the trade-creation triangles lie between
// the curves and the partner price, the trade-diversion rectangle spans the imports of the RoW before the union (Q 12 to 24),
// and the areas add up to the welfare change worked out from the demand and supply equations.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  CREATION_CONSUMPTION,
  CREATION_PRODUCTION,
  DIVERSION,
  PRICE_PARTNER,
  PRICE_ROW,
  PRICE_WITH_TARIFF,
  QD_AFTER,
  QD_BEFORE,
  QS_AFTER,
  QS_BEFORE,
  TARIFF,
  TARIFF_REVENUE,
  demandPrice,
  quantityDemanded,
  quantitySupplied,
  supplyPrice,
} from '../src/sims/econ/integration-logic.ts';

const area = points =>
  Math.abs(points.reduce((sum, [x1, y1], i) => {
    const [x2, y2] = points[(i + 1) % points.length];
    return sum + x1 * y2 - x2 * y1;
  }, 0)) / 2;
const centroid = points => [points.reduce((s, p) => s + p[0], 0) / points.length, points.reduce((s, p) => s + p[1], 0) / points.length];
const near = (a, b) => Math.abs(a - b) < 1e-9;
const has = (points, x, y) => points.some(p => near(p[0], x) && near(p[1], y));

test('prices and quantities of the example', () => {
  assert.deepEqual([PRICE_ROW, PRICE_PARTNER, PRICE_WITH_TARIFF], [4, 6, 8]);
  assert.deepEqual([QS_BEFORE, QD_BEFORE, QS_AFTER, QD_AFTER], [12, 24, 8, 28]);
  assert.equal(QD_BEFORE - QS_BEFORE, 12, 'imports before the union');
  assert.equal(QD_AFTER - QS_AFTER, 20, 'imports after the union');
  assert.ok(PRICE_ROW < PRICE_PARTNER && PRICE_PARTNER < PRICE_WITH_TARIFF, 'the partner is dearer than the RoW but cheaper than the RoW with the tariff');
});

test('tariff revenue is the rectangle tariff x imports, between Q 12 and 24', () => {
  assert.equal(area(TARIFF_REVENUE), TARIFF * (QD_BEFORE - QS_BEFORE));
  assert.equal(area(TARIFF_REVENUE), 48);
  for (const [x, y] of [[12, 4], [24, 4], [24, 8], [12, 8]]) assert.ok(has(TARIFF_REVENUE, x, y), `corner (${x}, ${y})`);
});

test('trade creation, production effect: the triangle between S and the partner price, below S, right angle at (12, 6)', () => {
  assert.equal(CREATION_PRODUCTION.length, 3);
  assert.equal(area(CREATION_PRODUCTION), 4);
  assert.ok(has(CREATION_PRODUCTION, 8, 6) && has(CREATION_PRODUCTION, 12, 8), 'two vertices on S');
  assert.ok(has(CREATION_PRODUCTION, 12, 6), 'right angle on the partner price at Q = 12');
  for (const [x, y] of CREATION_PRODUCTION) assert.ok(y <= supplyPrice(x) + 1e-9, `vertex (${x}, ${y}) is not above S`);
  const [cx, cy] = centroid(CREATION_PRODUCTION);
  assert.ok(cy < supplyPrice(cx), 'the triangle lies below S');
});

test('trade creation, consumption effect: the triangle between D and the partner price, below D, right angle at (24, 6)', () => {
  assert.equal(CREATION_CONSUMPTION.length, 3);
  assert.equal(area(CREATION_CONSUMPTION), 4);
  assert.ok(has(CREATION_CONSUMPTION, 24, 8) && has(CREATION_CONSUMPTION, 28, 6), 'two vertices on D');
  assert.ok(has(CREATION_CONSUMPTION, 24, 6), 'right angle on the partner price at Q = 24');
  for (const [x, y] of CREATION_CONSUMPTION) assert.ok(y <= demandPrice(x) + 1e-9, `vertex (${x}, ${y}) is not above D`);
  const [cx, cy] = centroid(CREATION_CONSUMPTION);
  assert.ok(cy < demandPrice(cx), 'the triangle lies below D');
});

test('trade diversion is the rectangle over the RoW imports of the old market (Q 12 to 24), between the prices 4 and 6', () => {
  assert.equal(area(DIVERSION), (QD_BEFORE - QS_BEFORE) * (PRICE_PARTNER - PRICE_ROW));
  assert.equal(area(DIVERSION), 24);
  for (const [x, y] of [[12, 4], [24, 4], [24, 6], [12, 6]]) assert.ok(has(DIVERSION, x, y), `corner (${x}, ${y})`);
  assert.ok(has(DIVERSION, 12, 6) && has(CREATION_PRODUCTION, 12, 6), 'the rectangle touches the production triangle at (12, 6)');
  assert.ok(has(DIVERSION, 24, 6) && has(CREATION_CONSUMPTION, 24, 6), 'the rectangle touches the consumption triangle at (24, 6)');
  // The diverted rectangle is the lower part of the tariff revenue rectangle: the same Q range, the lower 2 of its height 4.
  assert.deepEqual([Math.min(...DIVERSION.map(p => p[0])), Math.max(...DIVERSION.map(p => p[0]))], [Math.min(...TARIFF_REVENUE.map(p => p[0])), Math.max(...TARIFF_REVENUE.map(p => p[0]))]);
});

test('the areas add up to the welfare change worked out from the equations', () => {
  const consumerSurplus = p => 0.5 * quantityDemanded(p) * (20 - p);
  const producerSurplus = p => 0.5 * quantitySupplied(p) * (p - 2);
  const dCs = consumerSurplus(PRICE_PARTNER) - consumerSurplus(PRICE_WITH_TARIFF);
  const dPs = producerSurplus(PRICE_PARTNER) - producerSurplus(PRICE_WITH_TARIFF);
  const lostRevenue = -TARIFF * (QD_BEFORE - QS_BEFORE);
  assert.deepEqual([dCs, dPs, lostRevenue], [52, -20, -48]);
  assert.equal(dCs + dPs + lostRevenue, area(CREATION_PRODUCTION) + area(CREATION_CONSUMPTION) - area(DIVERSION));
  assert.equal(dCs + dPs + lostRevenue, -16);
});

test('the component takes the areas from the logic file and names the three price lines in both languages', () => {
  const source = readFileSync(new URL('../src/sims/econ/integration.tsx', import.meta.url), 'utf8');
  for (const name of ['CREATION_PRODUCTION', 'CREATION_CONSUMPTION', 'DIVERSION', 'TARIFF_REVENUE']) assert.ok(source.includes(name), `${name} is used`);
  for (const label of ["'RoW 4'", "'partner 6'", "'партнёр 6'", "'RoW + tariff 8'", "'RoW + тариф 8'"]) assert.ok(source.includes(label), `${label} labels a price line`);
});
