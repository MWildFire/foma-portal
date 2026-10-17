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
export const NMAX = 100;
// A deliberately close linear view preserves the small growth classes. Larger curves are clipped, not flattened.
export const YMAX = 20;
export const Y_TICKS = [0, 5, 10, 15, 20];
export type Scale = 'linear' | 'log';
export const LOG_MIN = 0.5;
export const LOG_MAX = 2 ** 20;
export const LOG_TICKS = [0.5, 4, 16, 256, 4096, 65536, LOG_MAX];
export const xAt = (n: number) => X0 + ((n - 1) / (NMAX - 1)) * (X1 - X0);
export const yAt = (v: number, scale: Scale = 'linear') => Y1 - (
  scale === 'log' ? (Math.log2(v) - Math.log2(LOG_MIN)) / (Math.log2(LOG_MAX) - Math.log2(LOG_MIN)) : v / YMAX
) * (Y1 - Y0);

// Sample each class at integer n. Interpolate the value where it crosses a chart boundary.
// Zero is outside the logarithmic domain, so the log curve starts at its lower-bound crossing.
export function curve(f: (n: number) => number, scale: Scale = 'linear'): { d: string; clipX: number | null } {
  const min = scale === 'log' ? LOG_MIN : 0;
  const max = scale === 'log' ? LOG_MAX : YMAX;
  const pts: string[] = [];
  let prev = { n: 1, v: f(1) };
  if (prev.v >= min) pts.push(`${xAt(1)},${yAt(prev.v, scale)}`);
  for (let n = 2; n <= NMAX; n++) {
    const v = f(n);
    if (v < min) { prev = { n, v }; continue; }
    if (prev.v < min) {
      const at = prev.n + (min - prev.v) / (v - prev.v);
      pts.push(`${xAt(at)},${Y1}`);
    }
    if (v <= max) {
      pts.push(`${xAt(n)},${yAt(v, scale)}`);
      prev = { n, v };
      continue;
    }
    const at = prev.n + ((max - prev.v) / (v - prev.v)) * (n - prev.n);
    pts.push(`${xAt(at)},${Y0}`);
    return { d: `M${pts.join(' L')}`, clipX: xAt(at) };
  }
  return { d: `M${pts.join(' L')}`, clipX: null };
}
export const CURVES = CLASSES.map((c) => curve(c.f));
