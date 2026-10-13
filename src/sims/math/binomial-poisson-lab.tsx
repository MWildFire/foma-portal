import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Binomial bars next to Poisson bars with the same mean np. Raising n and lowering p shows why the Poisson model
// is a good approximation for rare events.

const MAX_X = 20;
const WIDTH = 320;
const HEIGHT = 170;
const BASE = HEIGHT - 20;

// C(n, x) p^x (1 - p)^(n - x), computed with logarithms to avoid overflow.
function binomialPmf(n: number, p: number, x: number): number {
  if (x < 0 || x > n) return 0;
  let logChoose = 0;
  for (let i = 1; i <= x; i++) logChoose += Math.log(n - x + i) - Math.log(i);
  return Math.exp(logChoose + x * Math.log(p) + (n - x) * Math.log(1 - p));
}

// e^(-m) m^x / x!
function poissonPmf(m: number, x: number): number {
  let logFactorial = 0;
  for (let i = 2; i <= x; i++) logFactorial += Math.log(i);
  return Math.exp(-m + x * Math.log(m) - logFactorial);
}

const TEXT = {
  en: {
    label: 'Binomial and Poisson distributions with the same mean',
    binomial: 'Binomial B(n, p)',
    poisson: 'Poisson Po(np)',
    n: 'n (number of trials)',
    p: 'p (probability of success)',
    mean: 'Mean np',
    varBinomial: 'Variance np(1 − p)',
    varPoisson: 'Variance np',
    note: 'For large n and small p the two sets of bars almost coincide.',
  },
  ru: {
    label: 'Биномиальное и пуассоновское распределения с одинаковым средним',
    binomial: 'Биномиальное B(n, p)',
    poisson: 'Пуассон Po(np)',
    n: 'n (число испытаний)',
    p: 'p (вероятность успеха)',
    mean: 'Среднее np',
    varBinomial: 'Дисперсия np(1 − p)',
    varPoisson: 'Дисперсия np',
    note: 'При большом n и малом p два набора столбиков почти совпадают.',
  },
} as const;

export default function BinomialPoissonLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [n, setN] = useState(30);
  const [p, setP] = useState(0.1);

  const mean = n * p;
  const binomial = Array.from({ length: MAX_X + 1 }, (_, x) => binomialPmf(n, p, x));
  const poisson = Array.from({ length: MAX_X + 1 }, (_, x) => poissonPmf(mean, x));
  const top = Math.max(0.05, ...binomial, ...poisson);
  const slot = WIDTH / (MAX_X + 1);
  const heightOf = (value: number) => (value / top) * (BASE - 10);

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        {binomial.map((value, x) => (
          <rect
            key={`b${x}`}
            x={x * slot + 1}
            y={BASE - heightOf(value)}
            width={slot / 2 - 1}
            height={heightOf(value)}
            fill="#4f6fd8"
          />
        ))}
        {poisson.map((value, x) => (
          <rect
            key={`p${x}`}
            x={x * slot + slot / 2}
            y={BASE - heightOf(value)}
            width={slot / 2 - 1}
            height={heightOf(value)}
            fill="#e0883a"
          />
        ))}
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        <span style={{ color: '#4f6fd8' }}>■ {t.binomial}</span>{' · '}
        <span style={{ color: '#e0883a' }}>■ {t.poisson}</span>
        <br />
        {t.mean}: {mean.toFixed(2)} · {t.varBinomial}: {(mean * (1 - p)).toFixed(2)} · {t.varPoisson}: {mean.toFixed(2)}
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.n}: {n}
        <input type="range" min={5} max={100} step={1} value={n} onChange={event => setN(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.p}: {p.toFixed(2)}
        <input type="range" min={0.01} max={0.5} step={0.01} value={p} onChange={event => setP(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
