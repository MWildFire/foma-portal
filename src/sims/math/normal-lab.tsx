import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { PLOT_HEIGHT, SIGMA_MAX, SIGMA_MIN, cdf, densityHeight, inverseCdf, normalDensity } from './normal-logic';

// Normal curve on the axis from 0 to 100. The shaded area is P(a <= X <= b); the dashed line is the value x with
// P(X <= x) = p. The height scale is fixed by the smallest sigma (see normal-logic.ts), so a wider curve is lower.

const X_MIN = 0;
const X_MAX = 100;
const TICKS = [0, 25, 50, 75, 100];
const WIDTH = 320;
const HEIGHT = 180;
const BASE = HEIGHT - 24;
const TOP = BASE - PLOT_HEIGHT;
const SAMPLES = 100;

const TEXT = {
  en: {
    label: 'Normal curve with the shaded area P(a ≤ X ≤ b) and the value x with P(X ≤ x) = p',
    mu: 'Mean μ',
    sigma: 'Standard deviation σ',
    a: 'Lower bound a',
    b: 'Upper bound b',
    p: 'Probability p',
    area: 'Shaded area P(a ≤ X ≤ b)',
    z: 'Standardised scores z',
    x: 'Value x with P(X ≤ x) = p',
    note: 'The total area under the curve is 1. Standardise with z = (x − μ) / σ.',
  },
  ru: {
    label: 'Нормальная кривая с заштрихованной площадью P(a ≤ X ≤ b) и значением x при P(X ≤ x) = p',
    mu: 'Среднее μ',
    sigma: 'Стандартное отклонение σ',
    a: 'Нижняя граница a',
    b: 'Верхняя граница b',
    p: 'Вероятность p',
    area: 'Площадь P(a ≤ X ≤ b)',
    z: 'Стандартизованные значения z',
    x: 'Значение x при P(X ≤ x) = p',
    note: 'Вся площадь под кривой равна 1. Стандартизация: z = (x − μ) / σ.',
  },
} as const;

export default function NormalLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [mu, setMu] = useState(50);
  const [sigma, setSigma] = useState(8);
  const [a, setA] = useState(40);
  const [b, setB] = useState(60);
  const [p, setP] = useState(0.9);

  const density = (x: number) => normalDensity(x, mu, sigma);
  const px = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * WIDTH;
  const py = (x: number) => BASE - densityHeight(density(x));
  const point = (x: number) => `${px(x).toFixed(1)},${py(x).toFixed(1)}`;

  const curve = Array.from({ length: SAMPLES + 1 }, (_, i) => point(X_MIN + ((X_MAX - X_MIN) * i) / SAMPLES)).join(' ');
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  const shade = [
    `${px(lo).toFixed(1)},${BASE}`,
    ...Array.from({ length: 41 }, (_, i) => point(lo + ((hi - lo) * i) / 40)),
    `${px(hi).toFixed(1)},${BASE}`,
  ].join(' ');

  const zLo = (lo - mu) / sigma;
  const zHi = (hi - mu) / sigma;
  const area = cdf(zHi) - cdf(zLo);
  const xp = mu + sigma * inverseCdf(p);

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <polygon points={shade} fill="#4f6fd8" fillOpacity={0.35} />
        <polyline points={curve} fill="none" stroke="currentColor" strokeWidth={2} />
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        {TICKS.map(v => (
          <g key={`t${v}`}>
            <line x1={px(v)} y1={BASE} x2={px(v)} y2={BASE + 3} stroke="currentColor" strokeWidth={1} />
            <text x={px(v)} y={BASE + 13} textAnchor={v === X_MIN ? 'start' : v === X_MAX ? 'end' : 'middle'} fontSize={10} fill="currentColor">
              {v}
            </text>
          </g>
        ))}
        <text x={WIDTH - 2} y={BASE - 5} textAnchor="end" fontSize={11} fill="currentColor">
          x
        </text>
        <text x={2} y={TOP - 6} fontSize={11} fill="currentColor">
          f(x)
        </text>
        <line x1={px(mu)} y1={TOP} x2={px(mu)} y2={BASE} stroke="currentColor" strokeWidth={0.5} />
        <text x={px(mu)} y={TOP - 4} textAnchor="middle" fontSize={11} fill="currentColor">μ</text>
        {xp >= X_MIN && xp <= X_MAX && (
          <line x1={px(xp)} y1={TOP} x2={px(xp)} y2={BASE} stroke="#e0883a" strokeWidth={1.5} strokeDasharray="4 3" />
        )}
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.area}: {area.toFixed(3)} · {t.z}: {zLo.toFixed(2)}, {zHi.toFixed(2)}
        <br />
        {t.x}: {xp.toFixed(2)}
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.mu}: {mu}
        <input type="range" min={25} max={75} step={1} value={mu} onChange={event => setMu(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.sigma}: {sigma}
        <input type="range" min={SIGMA_MIN} max={SIGMA_MAX} step={0.5} value={sigma} onChange={event => setSigma(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.a}: {a}
        <input type="range" min={0} max={100} step={1} value={a} onChange={event => setA(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.b}: {b}
        <input type="range" min={0} max={100} step={1} value={b} onChange={event => setB(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.p}: {p.toFixed(2)}
        <input type="range" min={0.01} max={0.99} step={0.01} value={p} onChange={event => setP(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
