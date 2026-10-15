// Pure maths for the normal-curve lab. No library: the standard normal cdf is a power series and the inverse is found
// by bisection. The vertical scale is fixed by the smallest sigma on the slider, so a larger sigma gives a lower, wider
// curve instead of a curve that always reaches the top of the plot.

export const SIGMA_MIN = 2;
export const SIGMA_MAX = 10;

// Height of the plot in SVG units. The peak of the curve for SIGMA_MIN reaches this height.
export const PLOT_HEIGHT = 140;

// phi(z) = e^(-z² / 2) / sqrt(2π)
export function phi(z: number): number {
  return Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
}

// Density of N(mu, sigma²) at x.
export function normalDensity(x: number, mu: number, sigma: number): number {
  return phi((x - mu) / sigma) / sigma;
}

// Density at the peak of the curve for SIGMA_MIN: the top of the plot.
const MAX_DENSITY = normalDensity(0, 0, SIGMA_MIN);

// Height in SVG units of a density value on the fixed scale.
export function densityHeight(density: number): number {
  return (density / MAX_DENSITY) * PLOT_HEIGHT;
}

// P(Z <= z) from Phi(z) = 1/2 + phi(z) (z + z^3/3 + z^5/(3 * 5) + ...).
export function cdf(z: number): number {
  if (z <= -8) return 0;
  if (z >= 8) return 1;
  let term = z;
  let sum = z;
  for (let n = 1; n < 400 && Math.abs(term) > 1e-15; n++) {
    term *= (z * z) / (2 * n + 1);
    sum += term;
  }
  return 0.5 + phi(z) * sum;
}

// The z with P(Z <= z) = p, by bisection on cdf.
export function inverseCdf(p: number): number {
  let low = -8;
  let high = 8;
  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    if (cdf(mid) < p) low = mid;
    else high = mid;
  }
  return (low + high) / 2;
}

// Covers all slider states (mu 25–75, sigma 2–10), including at least 4.5 sigma on both sides.
export const NORMAL_DOMAIN = { min: -20, max: 120 };
