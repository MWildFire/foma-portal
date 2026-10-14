// Pure maths for the regression lab: least-squares coefficients for three models on two small data sets.

export type Model = 'linear' | 'log' | 'quad';
export type DataSet = 'plants' | 'revision';

export const DATA: Record<DataSet, { x: number[]; y: number[]; xMax: number; yMax: number }> = {
  plants: { x: [2, 4, 6, 8, 10], y: [5, 9, 10, 14, 18], xMax: 12, yMax: 20 },
  revision: { x: [1, 2, 3, 4, 6, 8, 9, 10], y: [38, 52, 58, 63, 70, 72, 76, 77], xMax: 11, yMax: 90 },
};

// Basis functions. Coefficients come out in the same order and are named as in the textbook and the GDC:
// linear y = ax + b, logarithmic y = a + b ln x, quadratic y = ax² + bx + c.
export const BASIS: Record<Model, (x: number) => number[]> = {
  linear: x => [x, 1],
  log: x => [1, Math.log(x)],
  quad: x => [x * x, x, 1],
};

export const NAMES: Record<Model, string[]> = { linear: ['a', 'b'], log: ['a', 'b'], quad: ['a', 'b', 'c'] };

export function predict(model: Model, c: number[], x: number): number {
  return BASIS[model](x).reduce((sum, b, i) => sum + b * c[i], 0);
}

// Normal equations (B'B) c = B'y, solved by Gaussian elimination.
export function leastSquares(model: Model, xs: number[], ys: number[]): number[] {
  const rows = xs.map(x => BASIS[model](x));
  const k = rows[0].length;
  const m = Array.from({ length: k }, (_, i) => [
    ...Array.from({ length: k }, (_, j) => rows.reduce((sum, row) => sum + row[i] * row[j], 0)),
    rows.reduce((sum, row, n) => sum + row[i] * ys[n], 0),
  ]);
  for (let i = 0; i < k; i++) {
    for (let r = i + 1; r < k; r++) {
      const f = m[r][i] / m[i][i];
      for (let col = i; col <= k; col++) m[r][col] -= f * m[i][col];
    }
  }
  const c = new Array<number>(k).fill(0);
  for (let i = k - 1; i >= 0; i--) {
    let s = m[i][k];
    for (let j = i + 1; j < k; j++) s -= m[i][j] * c[j];
    c[i] = s / m[i][i];
  }
  return c;
}
