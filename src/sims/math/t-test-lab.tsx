import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// One-sample t-test of H0: mu = 500. The curve is the t-distribution with n - 1 degrees of freedom; the shaded area
// beyond the observed statistic is the p-value. The area is found by Simpson's rule, accurate enough for n >= 5.

type Tail = 'right' | 'left' | 'two';

const MU0 = 500;
const RANGE = 5;
const WIDTH = 320;
const HEIGHT = 170;
const BASE = HEIGHT - 20;

// log of the gamma function (Lanczos approximation).
function lnGamma(x: number): number {
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61503916999385,
    12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lnGamma(1 - x);
  const z = x - 1;
  let sum = c[0];
  for (let i = 1; i < c.length; i++) sum += c[i] / (z + i);
  const g = z + 7.5;
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(g) - g + Math.log(sum);
}

// Density of the t-distribution with nu degrees of freedom.
function tPdf(x: number, nu: number): number {
  const logNorm = lnGamma((nu + 1) / 2) - lnGamma(nu / 2) - 0.5 * Math.log(nu * Math.PI);
  return Math.exp(logNorm - ((nu + 1) / 2) * Math.log(1 + (x * x) / nu));
}

// Area under the density from a to a + 60 (Simpson's rule); the part beyond is negligible for nu >= 4.
function areaAbove(a: number, nu: number): number {
  const steps = 2000;
  const h = 60 / steps;
  let sum = tPdf(a, nu) + tPdf(a + 60, nu);
  for (let i = 1; i < steps; i++) sum += tPdf(a + i * h, nu) * (i % 2 === 1 ? 4 : 2);
  return Math.min(1, (sum * h) / 3);
}

const clamp = (u: number) => Math.max(-RANGE, Math.min(RANGE, u));

const TEXT = {
  en: {
    label: 't-distribution with the observed statistic and the p-value shaded',
    mean: 'Sample mean x̄',
    sd: 'Sample standard deviation s',
    n: 'Sample size n',
    alpha: 'Significance level α',
    tail: 'Alternative H1',
    right: 'μ > 500 (right-tailed)',
    left: 'μ < 500 (left-tailed)',
    two: 'μ ≠ 500 (two-tailed)',
    stat: 't',
    df: 'degrees of freedom',
    p: 'p-value',
    reject: 'p-value < α: reject H0',
    keep: 'p-value ≥ α: do not reject H0',
    note: 'H0: μ = 500. The shaded area is the p-value.',
  },
  ru: {
    label: 'Распределение Стьюдента с наблюдаемой статистикой и заштрихованным p-значением',
    mean: 'Выборочное среднее x̄',
    sd: 'Выборочное стандартное отклонение s',
    n: 'Размер выборки n',
    alpha: 'Уровень значимости α',
    tail: 'Альтернатива H1',
    right: 'μ > 500 (правосторонняя)',
    left: 'μ < 500 (левосторонняя)',
    two: 'μ ≠ 500 (двусторонняя)',
    stat: 't',
    df: 'степени свободы',
    p: 'p-значение',
    reject: 'p-значение < α: отвергаем H0',
    keep: 'p-значение ≥ α: не отвергаем H0',
    note: 'H0: μ = 500. Заштрихованная площадь — это p-значение.',
  },
} as const;

export default function TTestLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [mean, setMean] = useState(512);
  const [sd, setSd] = useState(18);
  const [n, setN] = useState(9);
  const [alpha, setAlpha] = useState(0.05);
  const [tail, setTail] = useState<Tail>('right');

  const nu = n - 1;
  const stat = (mean - MU0) / (sd / Math.sqrt(n));
  const pValue = Math.min(1, tail === 'two' ? 2 * areaAbove(Math.abs(stat), nu) : tail === 'right' ? areaAbove(stat, nu) : areaAbove(-stat, nu));
  const peak = tPdf(0, nu);
  const X = (u: number) => 10 + ((u + RANGE) / (2 * RANGE)) * (WIDTH - 20);
  const Y = (f: number) => BASE - (f / peak) * (BASE - 15);

  const curve = Array.from({ length: 101 }, (_, i) => {
    const u = -RANGE + (i / 100) * 2 * RANGE;
    return `${X(u).toFixed(1)},${Y(tPdf(u, nu)).toFixed(1)}`;
  }).join(' ');
  const shade = (from: number, to: number) => {
    const points = Array.from({ length: 61 }, (_, i) => {
      const u = from + ((to - from) * i) / 60;
      return `L${X(u).toFixed(1)},${Y(tPdf(u, nu)).toFixed(1)}`;
    });
    return `M${X(from).toFixed(1)},${BASE} ${points.join(' ')} L${X(to).toFixed(1)},${BASE} Z`;
  };
  const a = Math.abs(stat);
  const regions: [number, number][] = tail === 'right' ? [[clamp(stat), RANGE]] : tail === 'left' ? [[-RANGE, clamp(stat)]] : [[clamp(a), RANGE], [-RANGE, clamp(-a)]];

  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        {[-4, -2, 0, 2, 4].map(v => <text key={v} x={X(v)} y={BASE + 14} textAnchor="middle" fontSize={11} fill="currentColor">{String(v).replace('-', '−')}</text>)}
        <text x={WIDTH - 1} y={BASE - 5} textAnchor="end" fontSize={11} fill="currentColor">t</text>
        {regions.map(([from, to]) => (
          <path key={from} d={shade(from, to)} fill="#e0883a" fillOpacity={0.6} />
        ))}
        <polyline points={curve} fill="none" stroke="#4f6fd8" strokeWidth={2} />
        {Math.abs(stat) <= RANGE && <line x1={X(stat)} y1={BASE} x2={X(clamp(stat))} y2={12} stroke="#c0392b" strokeWidth={1.5} strokeDasharray="4 3" />}
      </svg></ReadableDiagram>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        {t.stat} = {stat.toFixed(2)} · {t.df} = {nu} · {t.p} = {pValue.toFixed(3)}
        <br />
        <strong>{pValue < alpha ? t.reject : t.keep}</strong>
        <br />
        {t.note} {Math.abs(stat) > RANGE && (lang === 'en' ? 'The observed t lies outside the displayed −5 to 5 window.' : 'Наблюдаемое t находится за пределами окна от −5 до 5.')}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.mean}: {mean.toFixed(1)}
        <input type="range" min={480} max={520} step={0.5} value={mean} onChange={event => setMean(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.sd}: {sd.toFixed(1)}
        <input type="range" min={5} max={30} step={0.5} value={sd} onChange={event => setSd(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.n}: {n}
        <input type="range" min={5} max={40} step={1} value={n} onChange={event => setN(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.alpha}{' '}
        <select value={alpha} onChange={event => setAlpha(Number(event.target.value))}>
          <option value={0.01}>0.01</option>
          <option value={0.05}>0.05</option>
          <option value={0.1}>0.10</option>
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.tail}{' '}
        <select value={tail} onChange={event => setTail(event.target.value as Tail)}>
          <option value="right">{t.right}</option>
          <option value="left">{t.left}</option>
          <option value="two">{t.two}</option>
        </select>
      </label>
    </figure>
  );
}
