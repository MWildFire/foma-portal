// node --test tests/math-diagram-binomial-poisson.test.mjs
// Checks the shared x-window, the masses and the ticks of the binomial and Poisson lab (src/sims/math/binomial-poisson-logic.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MIN_WINDOW, binomialPmf, poissonPmf, windowMass, windowMax, xTicks } from '../src/sims/math/binomial-poisson-logic.ts';

test('pmf values are correct and sum to 1', () => {
  assert.ok(Math.abs(binomialPmf(4, 0.5, 2) - 6 / 16) < 1e-12);
  assert.ok(Math.abs(poissonPmf(2, 0) - Math.exp(-2)) < 1e-12);
  assert.ok(Math.abs(windowMass(x => binomialPmf(10, 0.3, x), 10) - 1) < 1e-12);
  assert.equal(poissonPmf(0, 0), 1);
});

test('one window keeps at least 99.9% of both distributions for n = 5…100, p = 0.01…0.5', () => {
  for (let n = 5; n <= 100; n++) {
    for (let k = 1; k <= 50; k++) {
      const p = k / 100;
      const xMax = windowMax(n, p);
      const binomialMass = windowMass(x => binomialPmf(n, p, x), xMax);
      const poissonMass = windowMass(x => poissonPmf(n * p, x), xMax);
      assert.ok(binomialMass >= 0.999, `B(${n}, ${p}) has mass ${binomialMass} on 0..${xMax}`);
      assert.ok(poissonMass >= 0.999, `Po(${n * p}) has mass ${poissonMass} on 0..${xMax}`);
    }
  }
});

test('the window is never narrower than MIN_WINDOW and grows with the mean', () => {
  assert.equal(windowMax(5, 0.01), MIN_WINDOW);
  assert.ok(windowMax(100, 0.5) >= 50 + 5 * 5);
});

test('n = 50, p = 0.5: the window contains the mode of both distributions', () => {
  const xMax = windowMax(50, 0.5);
  let binomialMode = 0;
  for (let x = 1; x <= 50; x++) if (binomialPmf(50, 0.5, x) > binomialPmf(50, 0.5, binomialMode)) binomialMode = x;
  assert.equal(binomialMode, 25);
  assert.ok(xMax >= binomialMode);

  // Po(25) has two equal modes, 24 and 25; the window must hold both.
  let poissonMode = 0;
  for (let x = 1; x <= 200; x++) if (poissonPmf(25, x) > poissonPmf(25, poissonMode)) poissonMode = x;
  assert.ok(poissonMode === 24 || poissonMode === 25, `Po(25) mode ${poissonMode}`);
  assert.ok(xMax >= 25);
  assert.ok(windowMass(x => poissonPmf(25, x), xMax) >= 0.999);
});

test('x-axis ticks run from 0 to the window end, with intermediate values', () => {
  assert.deepEqual(xTicks(20), [0, 5, 10, 15, 20]);
  for (let xMax = MIN_WINDOW; xMax <= 100; xMax++) {
    const ticks = xTicks(xMax);
    assert.equal(ticks[0], 0, `xMax=${xMax}`);
    assert.equal(ticks[ticks.length - 1], xMax, `xMax=${xMax}`);
    assert.ok(ticks.length >= 3, `xMax=${xMax}`);
    for (let i = 1; i < ticks.length; i++) assert.ok(ticks[i] > ticks[i - 1], `xMax=${xMax}`);
  }
});
