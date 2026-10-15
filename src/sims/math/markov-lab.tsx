import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Two-state Markov chain with states A and B. p = P(A to B) and q = P(B to A). The transition matrix has columns that
// sum to 1 (a column is the current state), and the state matrix is the column (P(A), P(B)).

const MAX_STEPS = 20;
const WIDTH = 320;
const HEIGHT = 170;
const BASE = HEIGHT - 20;

const TEXT = {
  en: {
    label: 'Probability of state A over the steps, with the steady state as a dashed line',
    p: 'p = P(A → B)',
    q: 'q = P(B → A)',
    start: 'Initial P(A), the state matrix S0',
    n: 'Number of steps n',
    matrix: 'Transition matrix T (rows: next state, columns: current state)',
    fromA: 'from A',
    fromB: 'from B',
    toA: 'to A',
    toB: 'to B',
    after: 'State after n steps',
    steady: 'Steady state (q / (p + q), p / (p + q))',
    regular: 'All entries of T are positive, so the chain is regular and the steady state is reached from any start.',
    legend: 'Orange line: P(A) after each step. Dashed line: steady state. Dot: state after n steps.',
  },
  ru: {
    label: 'Вероятность состояния A по шагам; установившееся значение показано пунктиром',
    p: 'p = P(A → B)',
    q: 'q = P(B → A)',
    start: 'Начальная P(A), матрица S0',
    n: 'Число шагов n',
    matrix: 'Матрица переходов T (строки: следующее состояние, столбцы: текущее)',
    fromA: 'из A',
    fromB: 'из B',
    toA: 'в A',
    toB: 'в B',
    after: 'Состояние после n шагов',
    steady: 'Установившееся распределение (q / (p + q), p / (p + q))',
    regular: 'Все элементы T положительны, поэтому цепь регулярна и к установившемуся распределению приходят из любого начального состояния.',
    legend: 'Оранжевая линия: P(A) после каждого шага. Пунктир: установившееся значение. Точка: состояние после n шагов.',
  },
} as const;

export default function MarkovLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [p, setP] = useState(0.2);
  const [q, setQ] = useState(0.3);
  const [start, setStart] = useState(1);
  const [n, setN] = useState(10);

  // P(A) after k + 1 steps: a(k+1) = (1 - p) a(k) + q (1 - a(k)).
  const path = [start];
  for (let k = 0; k < MAX_STEPS; k++) path.push((1 - p) * path[k] + q * (1 - path[k]));
  const aN = path[n];
  const steadyA = q / (p + q);
  const X = (k: number) => 10 + (k / MAX_STEPS) * (WIDTH - 20);
  const Y = (v: number) => BASE - v * (BASE - 15);
  const line = path.map((v, k) => `${X(k).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={0} y1={BASE} x2={WIDTH} y2={BASE} stroke="currentColor" strokeWidth={1} />
        <line x1={10} y1={Y(steadyA)} x2={WIDTH - 10} y2={Y(steadyA)} stroke="#4f6fd8" strokeWidth={1.5} strokeDasharray="5 4" />
        <polyline points={line} fill="none" stroke="#e0883a" strokeWidth={2} />
        <circle cx={X(n)} cy={Y(aN)} r={4} fill="#e0883a" />
        <text x={2} y={Y(1) + 3} fontSize={9}>1</text>
        <text x={2} y={Y(0) - 3} fontSize={9}>0</text>
        <text x={WIDTH - 2} y={BASE - 4} fontSize={9} textAnchor="end">n</text>
      </svg></ReadableDiagram>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        {t.after}: P(A) = {aN.toFixed(3)}, P(B) = {(1 - aN).toFixed(3)}
        <br />
        {t.steady}: {steadyA.toFixed(3)} · {(1 - steadyA).toFixed(3)}
        <br />
        {t.regular}
        <br />
        {t.legend}
      </figcaption>
      <table style={{ margin: '8px 0', fontSize: 13, borderCollapse: 'collapse' }}>
        <caption style={{ textAlign: 'left' }}>{t.matrix}</caption>
        <thead>
          <tr>
            <th />
            <th style={{ padding: '2px 10px', fontWeight: 400 }}>{t.fromA}</th>
            <th style={{ padding: '2px 10px', fontWeight: 400 }}>{t.fromB}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ padding: '2px 10px', fontWeight: 400 }}>{t.toA}</th>
            <td style={{ padding: '2px 10px' }}>{(1 - p).toFixed(2)}</td>
            <td style={{ padding: '2px 10px' }}>{q.toFixed(2)}</td>
          </tr>
          <tr>
            <th style={{ padding: '2px 10px', fontWeight: 400 }}>{t.toB}</th>
            <td style={{ padding: '2px 10px' }}>{p.toFixed(2)}</td>
            <td style={{ padding: '2px 10px' }}>{(1 - q).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.p}: {p.toFixed(2)}
        <input type="range" min={0.05} max={0.95} step={0.05} value={p} onChange={event => setP(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.q}: {q.toFixed(2)}
        <input type="range" min={0.05} max={0.95} step={0.05} value={q} onChange={event => setQ(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.start}: {start.toFixed(2)}
        <input type="range" min={0} max={1} step={0.05} value={start} onChange={event => setStart(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.n}: {n}
        <input type="range" min={0} max={MAX_STEPS} step={1} value={n} onChange={event => setN(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
