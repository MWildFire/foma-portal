import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// A 2 x 2 matrix [[a, b], [c, d]] set with four sliders. The plot shows the unit circle (dashed), the ellipse the matrix
// turns it into, and the real eigenvector directions, along which the matrix only stretches.

const RANGE = 2;     // every entry runs from -2 to 2
const PLANE = 4;     // the plot shows -4 to 4 on both axes
const SIZE = 240;    // side of the square plot, in pixels
const SCALE = SIZE / (2 * PLANE);
const TICKS = [-3, -2, -1, 1, 2, 3]; // unit marks on both axes
const toX = (x: number) => SIZE / 2 + x * SCALE;
const toY = (y: number) => SIZE / 2 - y * SCALE;

const TEXT = {
  en: {
    label: 'Unit circle and its image under a 2 by 2 matrix, with the eigenvector directions',
    entries: ['a (top left)', 'b (top right)', 'c (bottom left)', 'd (bottom right)'],
    trace: 'Trace a + d',
    det: 'Determinant ad − bc (area factor)',
    area: 'Ellipse area π |det|',
    disc: 'Discriminant (trace)² − 4 det',
    values: 'Eigenvalues',
    none: 'no real eigenvalues, so no real eigenvectors',
    direction: 'Eigenvector direction for λ',
    legend: 'Dashed grey: unit circle. Teal: its image under A. Orange and blue: eigenvector directions.',
  },
  ru: {
    label: 'Единичная окружность и её образ под действием матрицы 2 × 2 с направлениями собственных векторов',
    entries: ['a (верхний левый)', 'b (верхний правый)', 'c (нижний левый)', 'd (нижний правый)'],
    trace: 'След a + d',
    det: 'Определитель ad − bc (коэффициент площади)',
    area: 'Площадь эллипса π |det|',
    disc: 'Дискриминант (след)² − 4 определитель',
    values: 'Собственные значения',
    none: 'вещественных собственных значений нет, значит вещественных собственных векторов тоже нет',
    direction: 'Направление собственного вектора для λ',
    legend: 'Пунктир серый: единичная окружность. Бирюзовый: её образ под действием A. Оранжевый и синий: направления собственных векторов.',
  },
} as const;

type Vec = [number, number];

// A non-zero solution of (A - lambda I) v = 0. Each row of A - lambda I gives one; the longer one is used.
function eigenvector(a: number, b: number, c: number, d: number, lambda: number): Vec {
  const fromRow1: Vec = [b, lambda - a];
  const fromRow2: Vec = [lambda - d, c];
  const length = (v: Vec) => Math.hypot(v[0], v[1]);
  const v = length(fromRow1) >= length(fromRow2) ? fromRow1 : fromRow2;
  const n = length(v);
  return n < 1e-9 ? [1, 0] : [v[0] / n, v[1] / n];
}

function Slider({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label style={{ display: 'block', marginTop: 4, fontSize: 14 }}>
      {label}: {value.toFixed(1)}
      <input
        type="range"
        min={-RANGE}
        max={RANGE}
        step={0.1}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
        style={{ width: '100%' }}
      />
    </label>
  );
}

export default function EigenLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [c, setC] = useState(1);
  const [d, setD] = useState(2);

  const trace = a + d;
  const det = a * d - b * c;
  const disc = trace * trace - 4 * det;
  const real = disc >= 0;
  const root = Math.sqrt(Math.max(disc, 0));
  const colours = ['#e0883a', '#4f6fd8'];
  const eigen = real
    ? [(trace + root) / 2, (trace - root) / 2].map((lambda, i) => ({ lambda, v: eigenvector(a, b, c, d, lambda), colour: colours[i] }))
    : [];

  // The image of the unit circle: (cos t, sin t) goes to (a cos t + b sin t, c cos t + d sin t).
  const image = Array.from({ length: 73 }, (_, i) => {
    const angle = (i / 72) * 2 * Math.PI;
    const x = a * Math.cos(angle) + b * Math.sin(angle);
    const y = c * Math.cos(angle) + d * Math.sin(angle);
    return `${toX(x).toFixed(1)},${toY(y).toFixed(1)}`;
  }).join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <ReadableDiagram lang={lang}><svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width="100%"
        style={{ maxWidth: SIZE, display: 'block', overflow: 'hidden' }}
        role="img"
        aria-label={t.label}
      >
        <line x1={0} y1={SIZE / 2} x2={SIZE} y2={SIZE / 2} stroke="#bbb" />
        <line x1={SIZE / 2} y1={0} x2={SIZE / 2} y2={SIZE} stroke="#bbb" />
        {TICKS.map(v => (
          <g key={v} fill="#777" fontSize={9}>
            <text x={toX(v)} y={SIZE / 2 + 11} textAnchor="middle">{v}</text>
            <text x={SIZE / 2 - 5} y={toY(v) + 3} textAnchor="end">{v}</text>
          </g>
        ))}
        <text x={SIZE - 4} y={SIZE / 2 + 12} textAnchor="end" fontSize={11} fill="#777">x</text>
        <text x={SIZE / 2 + 5} y={10} fontSize={11} fill="#777">y</text>
        <circle cx={toX(0)} cy={toY(0)} r={SCALE} fill="none" stroke="#888" strokeDasharray="4 3" />
        <polygon points={image} fill="none" stroke="#2a9d8f" strokeWidth={2} />
        {eigen.map(({ lambda, v, colour }) => (
          <g key={colour} stroke={colour} fill={colour}>
            <line x1={toX(-PLANE * v[0])} y1={toY(-PLANE * v[1])} x2={toX(PLANE * v[0])} y2={toY(PLANE * v[1])} strokeWidth={1.5} />
            <text x={toX(PLANE * v[0]) - 4} y={toY(PLANE * v[1]) - 4} fontSize={11} textAnchor="end" stroke="var(--color-bg)" strokeWidth={4} paintOrder="stroke">
              λ = {lambda.toFixed(2)}
            </text>
          </g>
        ))}
      </svg></ReadableDiagram>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        A = [[{a.toFixed(1)}, {b.toFixed(1)}], [{c.toFixed(1)}, {d.toFixed(1)}]]
        <br />
        {t.legend}
      </figcaption>
      <Slider label={t.entries[0]} value={a} onChange={setA} />
      <Slider label={t.entries[1]} value={b} onChange={setB} />
      <Slider label={t.entries[2]} value={c} onChange={setC} />
      <Slider label={t.entries[3]} value={d} onChange={setD} />
      <ul style={{ fontSize: 14, lineHeight: 1.6, paddingLeft: 18 }}>
        <li>
          {t.trace}: {trace.toFixed(2)}
        </li>
        <li>
          {t.det}: {det.toFixed(2)}
        </li>
        <li>
          {t.area}: {(Math.PI * Math.abs(det)).toFixed(2)}
        </li>
        <li>
          {t.disc}: {disc.toFixed(2)}
        </li>
        <li>
          {t.values}: {real ? eigen.map(item => item.lambda.toFixed(2)).join(', ') : t.none}
        </li>
      </ul>
      {eigen.map(({ lambda, v, colour }) => (
        <p key={colour} style={{ margin: '2px 0', fontSize: 14, color: colour }}>
          {t.direction} {lambda.toFixed(2)}: ({v[0].toFixed(2)}, {v[1].toFixed(2)})
        </p>
      ))}
    </figure>
  );
}
