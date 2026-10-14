// node --test tests/math-diagram-regression.test.mjs
// Checks the least-squares coefficients and their names in the regression lab (src/sims/math/regression-logic.ts).
// Expected values come from an exact fraction solve of the normal equations (python3 -I, fractions module).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BASIS, DATA, NAMES, leastSquares, predict } from '../src/sims/math/regression-logic.ts';

const close = (actual, expected, tol = 1e-9) => assert.ok(Math.abs(actual - expected) < tol, `${actual} vs ${expected}`);
const ssrOf = (set, model, c) => DATA[set].y.reduce((s, y, i) => s + (y - predict(model, c, DATA[set].x[i])) ** 2, 0);

test('plants, quadratic: x² coefficient a = 3/56 (0.054), x coefficient b = 127/140 (0.907), constant c = 17/5 (3.40)', () => {
  const [a, b, c] = leastSquares('quad', DATA.plants.x, DATA.plants.y);
  close(a, 3 / 56);
  close(b, 127 / 140);
  close(c, 17 / 5);
  assert.equal(a.toFixed(3), '0.054');
  assert.equal(b.toFixed(3), '0.907');
  assert.equal(c.toFixed(2), '3.40');
  close(ssrOf('plants', 'quad', [a, b, c]), 72 / 35);
});

test('names follow the textbook and the GDC: a goes with x², b with x, c is the constant', () => {
  assert.deepEqual(NAMES.quad, ['a', 'b', 'c']);
  assert.deepEqual(BASIS.quad(3), [9, 3, 1]);
  assert.deepEqual(NAMES.linear, ['a', 'b']);
  assert.deepEqual(BASIS.linear(5), [5, 1]);
  assert.deepEqual(NAMES.log, ['a', 'b']);
  assert.deepEqual(BASIS.log(1), [1, 0]);
});

test('plants, linear: slope a = 31/20, intercept b = 19/10, SSR = 2.7', () => {
  const [a, b] = leastSquares('linear', DATA.plants.x, DATA.plants.y);
  close(a, 31 / 20);
  close(b, 19 / 10);
  close(ssrOf('plants', 'linear', [a, b]), 2.7);
});

test('plants, logarithmic: a = -1.04331, b = 7.41729 (y = a + b ln x)', () => {
  const [a, b] = leastSquares('log', DATA.plants.x, DATA.plants.y);
  close(a, -1.04331, 1e-5);
  close(b, 7.417286, 1e-5);
});

test('revision, quadratic: a = -0.537822, b = 9.695446, c = 32.044789', () => {
  const [a, b, c] = leastSquares('quad', DATA.revision.x, DATA.revision.y);
  close(a, -0.537822, 1e-5);
  close(b, 9.695446, 1e-5);
  close(c, 32.044789, 1e-5);
});

test('for every model and data set the residuals are orthogonal to each basis function', () => {
  for (const set of Object.keys(DATA)) {
    for (const model of Object.keys(BASIS)) {
      const { x, y } = DATA[set];
      const c = leastSquares(model, x, y);
      const residuals = x.map((xi, i) => y[i] - predict(model, c, xi));
      for (let j = 0; j < c.length; j++) {
        const dot = x.reduce((s, xi, i) => s + residuals[i] * BASIS[model](xi)[j], 0);
        assert.ok(Math.abs(dot) < 1e-7, `${set} ${model} basis ${j}: ${dot}`);
      }
    }
  }
});
