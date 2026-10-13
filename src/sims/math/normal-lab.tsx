import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Normal curve on the axis from 0 to 100. The shaded area is P(a <= X <= b); the dashed line is the value x with
// P(X <= x) = p. No library: the standard normal cdf is a power series and the inverse is found by bisection.

const X_MIN = 0;
const X_MAX = 100;
const WIDTH = 320;
const HEIGHT = 180;
const TOP = 16;
const BASE = HEIGHT - 24;
const SAMPLES = 100;

function phi(z: number): number {
  return Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
}

// P(Z <= z) from Phi(z) = 1/2 + phi(z) (z + z^3/3 + z^5/(3 * 5) + ...).
function cdf(z: number): number {
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
function inverseCdf(p: number): number {
  let low = -8;
  let high = 8;
  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    if (cdf(mid) < p) low = mid;
    else high = mid;
  }
  return (low + high) / 2;
}

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

  const density = (x: number) => phi((x - mu) / sigma) / sigma;
  const peak = density(mu);
  const px = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * WIDTH;
  const py = (x: number) => BASE - (density(x) / peak) * (BASE - TOP);
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
        <input type="range" min={2} max={10} step={0.5} value={sigma} onChange={event => setSigma(Number(event.target.value))} style={{ width: '100%' }} />
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
