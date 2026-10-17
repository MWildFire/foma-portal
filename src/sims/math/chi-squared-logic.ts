// Pearson independence statistic: zero observations are valid; zero expected counts are not.
export function independenceTable(observed: readonly (readonly number[])[]) {
  const columns = observed[0]?.length ?? 0;
  if (observed.length < 2 || columns < 2 || observed.some(row => row.length !== columns || row.some(n => !Number.isInteger(n) || n < 0))) {
    throw new RangeError('Use a rectangular count table with at least two rows and columns and nonnegative integer counts.');
  }
  const rowTotals = observed.map(row => row.reduce((sum, n) => sum + n, 0));
  const colTotals = Array.from({ length: columns }, (_, j) => observed.reduce((sum, row) => sum + row[j], 0));
  const total = rowTotals.reduce((sum, n) => sum + n, 0);
  const expected = observed.map((_, i) => colTotals.map(col => total > 0 ? rowTotals[i] * col / total : null));
  const valid = rowTotals.every(n => n > 0) && colTotals.every(n => n > 0);
  const statistic = valid ? observed.reduce((sum, row, i) => sum + row.reduce((part, n, j) => {
    const e = expected[i][j]!;
    return part + (n - e) ** 2 / e;
  }, 0), 0) : null;
  return { total, expected, statistic, valid, adequate: valid && expected.every(row => row.every(e => e !== null && e >= 5)), degreesOfFreedom: valid ? (observed.length - 1) * (columns - 1) : null };
}
