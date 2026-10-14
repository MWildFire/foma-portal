// Exact integrals and the disc sum for the region under f(x) = 9 - x^2 rotated about the x-axis (topic 5-12).

export const f = (x: number): number => 9 - x * x;

// Area: the integral of f, with antiderivative 9x - x^3/3.
export const areaBetween = (a: number, b: number): number => (9 * b - b ** 3 / 3) - (9 * a - a ** 3 / 3);

// Disc method: volume = pi times the integral of f^2, with antiderivative 81x - 6x^3 + x^5/5.
export const volumeBetween = (a: number, b: number): number => {
  const antiderivative = (x: number): number => 81 * x - 6 * x ** 3 + x ** 5 / 5;
  return Math.PI * (antiderivative(b) - antiderivative(a));
};

// n discs of equal width, each of radius f(midpoint): the sum of pi f(mid)^2 times the width.
export const discSum = (a: number, b: number, n: number): number => {
  const width = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += Math.PI * f(a + (i + 0.5) * width) ** 2 * width;
  return sum;
};
