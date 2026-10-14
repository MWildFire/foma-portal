// Pure maths for the binomial and Poisson lab. Both distributions share one x-window, so the bars stay comparable
// and nearly all of each distribution fits on the axis.

// Smallest right end of the x-axis.
export const MIN_WINDOW = 20;

const logFactorials: number[] = [0];

// ln(k!), cached as a running sum.
function logFactorial(k: number): number {
  while (logFactorials.length <= k) {
    logFactorials.push(logFactorials[logFactorials.length - 1] + Math.log(logFactorials.length));
  }
  return logFactorials[k];
}

// x ln y, with 0 ln 0 taken as 0 (needed for x = 0 when y = 0).
function xLogY(x: number, y: number): number {
  return x === 0 ? 0 : x * Math.log(y);
}

// C(n, x) p^x (1 - p)^(n - x), computed with logarithms to avoid overflow.
export function binomialPmf(n: number, p: number, x: number): number {
  if (x < 0 || x > n) return 0;
  const logChoose = logFactorial(n) - logFactorial(x) - logFactorial(n - x);
  return Math.exp(logChoose + xLogY(x, p) + xLogY(n - x, 1 - p));
}

// e^(-m) m^x / x!
export function poissonPmf(m: number, x: number): number {
  if (x < 0) return 0;
  return Math.exp(-m + xLogY(x, m) - logFactorial(x));
}

// Right end of the x-axis for B(n, p) and Po(np): mean + 5 standard deviations of the binomial + 3, but at least
// MIN_WINDOW. The same end serves both distributions; the Poisson variance np is larger, so it still fits.
export function windowMax(n: number, p: number): number {
  const mean = n * p;
  const sd = Math.sqrt(n * p * (1 - p));
  return Math.max(MIN_WINDOW, Math.ceil(mean + 5 * sd + 3));
}

// Probability mass on x = 0 … xMax.
export function windowMass(pmf: (x: number) => number, xMax: number): number {
  let sum = 0;
  for (let x = 0; x <= xMax; x++) sum += pmf(x);
  return sum;
}

// Tick values for the x-axis: 0, multiples of a round step, and xMax itself. The last multiple is dropped when it
// would sit closer than half a step to xMax.
export function xTicks(xMax: number): number[] {
  const step = xMax > 30 ? 10 : 5;
  const ticks: number[] = [];
  for (let v = 0; v < xMax - step / 2; v += step) ticks.push(v);
  ticks.push(xMax);
  return ticks;
}
