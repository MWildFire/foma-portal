import ReadableDiagram from '../readable-diagram';
import { classifyPhasePortrait } from './phase-portrait-logic';
import { useId, useState } from 'react';
import type { Lang } from '../../contract/types';

// Phase portrait of dx/dt = a x + b y, dy/dt = c x + d y. The sliders hold tenths as integers, so the trace, the
// determinant and the discriminant are exact and the type follows from integer tests. The curves are drawn with a
// fixed-step Euler loop, so a centre drifts slightly outwards (a numerical effect, not part of the system).

const SIZE = 240;
const SCALE = 34;           // pixels per unit
const STEP = 0.002;         // Euler step length
const STEPS = 3000;         // 6 time units
const RECORD = 25;          // keep every 25th point (0.05 time units)
const LIMIT = 3.4;          // a curve that leaves the view stops
const TICKS = [-3, -2, -1, 1, 2, 3]; // unit marks on both axes
const STARTS: [number, number][] = [
  [2.5, 0], [0, 2.5], [-2.5, 0], [0, -2.5], [1.8, 1.8], [-1.8, -1.8], [1.8, -1.8], [-1.8, 1.8],
];


function curve(a: number, b: number, c: number, d: number, x0: number, y0: number): string {
  let x = x0;
  let y = y0;
  const points: string[] = [];
  for (let k = 0; k <= STEPS; k++) {
    if (k % RECORD === 0) points.push(`${(SIZE / 2 + x * SCALE).toFixed(1)},${(SIZE / 2 - y * SCALE).toFixed(1)}`);
    if (Math.abs(x) > LIMIT || Math.abs(y) > LIMIT) break;
    const dx = a * x + b * y;
    const dy = c * x + d * y;
    x += STEP * dx;
    y += STEP * dy;
  }
  return points.join(' ');
}

// Right-hand side of one equation with the current entries, for example "−1.0x + 2.0y".
const combination = (p: number, q: number) => `${p < 0 ? '−' : ''}${Math.abs(p).toFixed(1)}x ${q < 0 ? '−' : '+'} ${Math.abs(q).toFixed(1)}y`;

const TEXT = {
  en: {
    label: 'Phase portrait with sample trajectories',
    type: 'Type of the origin',
    trace: 'Trace T',
    det: 'Determinant D',
    disc: 'T² − 4D',
    eig: 'Eigenvalues',
    repeated: 'repeated eigenvalue',
    note: 'Dots mark the start of each curve; time runs forward along it.',
    kinds: {
      'zero-system': 'Zero system: every point in the plane is an equilibrium',
      saddle: 'Saddle point (unstable)',
      degenerate: 'Degenerate: D = 0, a line of equilibria',
      'stable-node': 'Stable node',
      'unstable-node': 'Unstable node',
      centre: 'Centre (closed orbits)',
      'stable-spiral': 'Stable spiral',
      'unstable-spiral': 'Unstable spiral',
    },
  },
  ru: {
    label: 'Фазовый портрет с примерными траекториями',
    type: 'Тип начала координат',
    trace: 'След T',
    det: 'Определитель D',
    disc: 'T² − 4D',
    eig: 'Собственные значения',
    repeated: 'кратное собственное значение',
    note: 'Точки отмечают начало каждой кривой; время идёт вдоль кривой вперёд.',
    kinds: {
      'zero-system': 'Нулевая система: каждая точка плоскости — равновесие',
      saddle: 'Седло (неустойчивое)',
      degenerate: 'Вырожденный случай: D = 0, прямая точек равновесия',
      'stable-node': 'Устойчивый узел',
      'unstable-node': 'Неустойчивый узел',
      centre: 'Центр (замкнутые траектории)',
      'stable-spiral': 'Устойчивый фокус (спираль)',
      'unstable-spiral': 'Неустойчивый фокус (спираль)',
    },
  },
} as const;

export default function PhasePortraitLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const arrow = useId();
  const [a10, setA] = useState(-10);   // a = -1.0: a stable spiral by default
  const [b10, setB] = useState(20);
  const [c10, setC] = useState(-20);
  const [d10, setD] = useState(-10);
  const ti = a10 + d10;
  const di = a10 * d10 - b10 * c10;
  const kind = classifyPhasePortrait(a10, b10, c10, d10);
  const trace = ti / 10;
  const det = di / 100;
  const disc = (ti * ti - 4 * di) / 100;
  const root = Math.sqrt(Math.abs(disc));
  const eig = disc >= 0
    ? `${((trace + root) / 2).toFixed(2)}; ${((trace - root) / 2).toFixed(2)}`
    : `${(trace / 2).toFixed(2)} ± ${(root / 2).toFixed(2)}i`;
  const a = a10 / 10;
  const b = b10 / 10;
  const c = c10 / 10;
  const d = d10 / 10;
  const sliders: { name: string; value: number; set: (value: number) => void }[] = [
    { name: 'a', value: a10, set: setA },
    { name: 'b', value: b10, set: setB },
    { name: 'c', value: c10, set: setC },
    { name: 'd', value: d10, set: setD },
  ];
  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" style={{ maxWidth: SIZE }} role="img" aria-label={t.label}>
        <defs><marker id={arrow} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#4f6fd8" /></marker></defs>
        <line x1={0} y1={SIZE / 2} x2={SIZE} y2={SIZE / 2} stroke="currentColor" strokeWidth={0.5} />
        <line x1={SIZE / 2} y1={0} x2={SIZE / 2} y2={SIZE} stroke="currentColor" strokeWidth={0.5} />
        {TICKS.map(v => (
          <g key={v} fill="currentColor" fontSize={9}>
            <text x={SIZE / 2 + v * SCALE} y={SIZE / 2 + 11} textAnchor="middle">{v}</text>
            <text x={SIZE / 2 - 5} y={SIZE / 2 - v * SCALE + 3} textAnchor="end">{v}</text>
          </g>
        ))}
        <text x={SIZE - 4} y={SIZE / 2 - 5} textAnchor="end" fontSize={11} fill="currentColor">x</text>
        <text x={SIZE / 2 + 5} y={10} fontSize={11} fill="currentColor">y</text>
        {STARTS.map(([x0, y0]) => {
          const points = curve(a, b, c, d, x0, y0).split(' ');
          const end = Math.min(5, points.length - 1);
          return <g key={`${x0},${y0}`}>
            <polyline points={points.join(' ')} fill="none" stroke="#4f6fd8" strokeWidth={1.2} />
            {end > 0 && points[end - 1] !== points[end] && <path d={`M${points[end - 1]} L${points[end]}`} fill="none" stroke="#4f6fd8" markerEnd={`url(#${arrow})`} />}
            <circle cx={SIZE / 2 + x0 * SCALE} cy={SIZE / 2 - y0 * SCALE} r={2.5} fill="#e0883a" />
          </g>;
        })}
        <circle cx={SIZE / 2} cy={SIZE / 2} r={3} fill="currentColor" />
      </svg></ReadableDiagram>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        dx/dt = {combination(a, b)}
        <br />
        dy/dt = {combination(c, d)}
        <br />
        <strong>{t.type}: {t.kinds[kind]}{disc === 0 && kind.includes('node') ? ` (${t.repeated})` : ''}</strong>
        <br />
        {t.trace}: {trace.toFixed(1)} · {t.det}: {det.toFixed(2)} · {t.disc}: {disc.toFixed(2)}
        <br />
        {t.eig}: {eig}
        <br />
        {t.note}
      </figcaption>
      {sliders.map(slider => (
        <label key={slider.name} style={{ display: 'block', marginTop: 4 }}>
          {slider.name} = {(slider.value / 10).toFixed(1)}
          <input
            type="range"
            min={-30}
            max={30}
            step={1}
            value={slider.value}
            onChange={event => slider.set(Number(event.target.value))}
            style={{ width: '100%' }}
          />
        </label>
      ))}
    </figure>
  );
}
