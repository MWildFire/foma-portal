// node --test tests/math-diagram-normal.test.mjs
// Checks the fixed height scale and the probability helpers of the normal-curve lab (src/sims/math/normal-logic.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PLOT_HEIGHT, SIGMA_MAX, SIGMA_MIN, cdf, densityHeight, inverseCdf, normalDensity } from '../src/sims/math/normal-logic.ts';

// Height in SVG units of the peak of N(mu, sigma²) on the fixed scale.
const peakHeight = (mu, sigma) => densityHeight(normalDensity(mu, mu, sigma));

test('peak heights for sigma = 2 and sigma = 10 are in the ratio 5', () => {
  for (const mu of [25, 50, 75]) {
    const ratio = peakHeight(mu, SIGMA_MIN) / peakHeight(mu, 10);
    assert.ok(Math.abs(ratio - 5) < 1e-9, `mu=${mu}: ratio ${ratio}`);
  }
});

test('the peak for the smallest sigma fills the plot, and wider curves are proportionally lower', () => {
  for (const mu of [25, 50, 75]) {
    assert.ok(Math.abs(peakHeight(mu, SIGMA_MIN) - PLOT_HEIGHT) < 1e-9, `mu=${mu}`);
  }
  for (let sigma = SIGMA_MIN; sigma <= SIGMA_MAX; sigma += 0.5) {
    const h = peakHeight(50, sigma);
    assert.ok(h <= PLOT_HEIGHT + 1e-9, `sigma=${sigma}`);
    assert.ok(Math.abs(h - (PLOT_HEIGHT * SIGMA_MIN) / sigma) < 1e-9, `sigma=${sigma}`);
  }
});

test('density and probability helpers give the standard values', () => {
  assert.ok(Math.abs(normalDensity(0, 0, 1) - 0.3989422804) < 1e-9);
  assert.ok(Math.abs(cdf(0) - 0.5) < 1e-12);
  assert.ok(Math.abs(cdf(1.96) - 0.9750021) < 1e-6);
  assert.ok(Math.abs(inverseCdf(0.9) - 1.2815516) < 1e-6);
  assert.ok(Math.abs(cdf(inverseCdf(0.3)) - 0.3) < 1e-9);
});
