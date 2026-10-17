import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { binomialPmf, poissonPmf, windowMax, xTicks } from './binomial-poisson-logic';

// Binomial bars next to Poisson bars with the same mean np. Raising n and lowering p shows why the Poisson model
// is a good approximation for rare events. The x-axis runs from 0 to a window that holds almost all of both distributions.

const WIDTH = 320;
const HEIGHT = 170;
const BASE = HEIGHT - 20;
const TOP = 16; // room above the tallest bar for the y-axis label
const LEFT = 10;
const RIGHT = WIDTH - 10;

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
    note: 'Binomial trials are independent, with the same success probability and a fixed n. Poisson(np) is an approximation, not an identity: the rare-event limit holds as n grows and p falls with np fixed. Bars outside the displayed window are omitted.',
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
    note: 'Биномиальная модель предполагает независимые испытания с одинаковой вероятностью успеха и фиксированным n. Po(np) — приближение, не тождество: предел редких событий получают при росте n и снижении p с фиксированным np. Столбики за пределами окна не показаны.',
  },
} as const;

export default function BinomialPoissonLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [n, setN] = useState(30);
  const [p, setP] = useState(0.1);

  const mean = n * p;
  const xMax = windowMax(n, p);
  const xs = Array.from({ length: xMax + 1 }, (_, x) => x);
  const binomial = xs.map(x => binomialPmf(n, p, x));
  const poisson = xs.map(x => poissonPmf(mean, x));
  const top = Math.max(0.05, ...binomial, ...poisson);
  const slot = (RIGHT - LEFT) / (xMax + 1);
  const groupX = (x: number) => LEFT + x * slot;
  const heightOf = (value: number) => (value / top) * (BASE - TOP);

  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        {binomial.map((value, x) => (
          <rect
            key={`b${x}`}
            x={groupX(x) + 1}
            y={BASE - heightOf(value)}
            width={slot / 2 - 1}
            height={heightOf(value)}
            fill="#4f6fd8"
          />
        ))}
        {poisson.map((value, x) => (
          <rect
            key={`p${x}`}
            x={groupX(x) + slot / 2}
            y={BASE - heightOf(value)}
            width={slot / 2 - 1}
            height={heightOf(value)}
            fill="#e0883a"
          />
        ))}
        {xTicks(xMax).map(v => (
          <g key={`t${v}`}>
            <line x1={groupX(v) + slot / 2} y1={BASE} x2={groupX(v) + slot / 2} y2={BASE + 3} stroke="currentColor" strokeWidth={1} />
            <text x={groupX(v) + slot / 2} y={BASE + 13} textAnchor="middle" fontSize={10} fill="currentColor">
              {v}
            </text>
          </g>
        ))}
        <text x={RIGHT} y={BASE - 5} textAnchor="end" fontSize={11} fill="currentColor">
          x
        </text>
        <text x={LEFT} y={TOP - 6} fontSize={11} fill="currentColor">
          P(X = x)
        </text>
      </svg></ReadableDiagram>
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
