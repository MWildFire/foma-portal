// Growth functions, chart geometry and curve clipping for the big-O simulation (pure, no JSX).
// Checked by tests/cs-diagram-big-o.test.mjs.
import type { L } from '../../contract/types';

export interface Cls { id: string; label: string; name: L; dash?: string; f: (n: number) => number }

// Operation-count functions. Log classes use base 2; the table rounds them to whole numbers.
export const CLASSES: Cls[] = [
  { id: 'o1', label: 'O(1)', name: { en: 'constant', ru: 'постоянный' }, f: () => 1 },
  { id: 'olog', label: 'O(log n)', name: { en: 'logarithmic', ru: 'логарифмический' }, dash: '7 4', f: n => Math.log2(n) },
  { id: 'on', label: 'O(n)', name: { en: 'linear', ru: 'линейный' }, f: n => n },
  { id: 'onlogn', label: 'O(n log n)', name: { en: 'linearithmic', ru: 'линейно-логарифмический' }, dash: '10 4 2 4', f: n => n * Math.log2(n) },
  { id: 'on2', label: 'O(n²)', name: { en: 'quadratic', ru: 'квадратичный' }, f: n => n * n },
  { id: 'o2n', label: 'O(2ⁿ)', name: { en: 'exponential', ru: 'экспоненциальный' }, dash: '2 3', f: n => 2 ** n },
];
export const ops = (c: Cls, n: number): number => Math.round(c.f(n));
// Exact up to 10^9; larger values are shown to three significant figures.
export const fmtCount = (v: number, locale: string): string => {
  if (v <= 1e9) return v.toLocaleString(locale);
  const [mantissa, exponent] = v.toExponential(2).split('e');
  return `${mantissa} × 10^${Number(exponent)}`;
};

// Chart geometry in SVG units. The y-axis stops at YMAX; a curve that leaves the top stops on the top edge.
export const W = 360;
export const H = 250;
export const X0 = 52;
export const X1 = 346;
export const Y0 = 14;
export const Y1 = 214;
export const NMAX = 50;
// Top of the y-axis. It was 2500, which left O(1), O(log n) and O(n) flat against the axis at n = 50.
export const YMAX = 300;
export const Y_TICKS = [0, 50, 100, 150, 200, 250, 300];
export const xAt = (n: number) => X0 + ((n - 1) / (NMAX - 1)) * (X1 - X0);
export const yAt = (v: number) => Y1 - (v / YMAX) * (Y1 - Y0);

// Path of one curve for n = 1..NMAX. Where the curve passes YMAX, the path stops on the top edge at the crossing
// (linear between the two neighbouring whole n). clipX is the x of that crossing, or null if the curve stays inside.
export function curve(f: (n: number) => number): { d: string; clipX: number | null } {
  const pts = [`${xAt(1)},${yAt(f(1))}`];
  let prev = { n: 1, v: f(1) };
  for (let n = 2; n <= NMAX; n++) {
    const v = f(n);
    if (v <= YMAX) {
      pts.push(`${xAt(n)},${yAt(v)}`);
      prev = { n, v };
      continue;
    }
    const at = prev.n + ((YMAX - prev.v) / (v - prev.v)) * (n - prev.n);
    pts.push(`${xAt(at)},${yAt(YMAX)}`);
    return { d: `M${pts.join(' L')}`, clipX: xAt(at) };
  }
  return { d: `M${pts.join(' L')}`, clipX: null };
}
export const CURVES = CLASSES.map((c) => curve(c.f));
