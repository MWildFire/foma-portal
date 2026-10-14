import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Unit square (dashed) and its image (shaded) under M = [[a, b], [c, d]]. The image is the parallelogram with
// vertices O, (a, c), (a + b, c + d) and (b, d). Its area is |det M| times the area of the unit square.

const SIZE = 260;
const RANGE = 4;                       // the axes run from -4 to 4; entries in [-2, 2] keep the image inside
const UNIT = (SIZE / 2 - 14) / RANGE;  // pixels per unit
const TICKS = [-4, -3, -2, -1, 1, 2, 3, 4]; // unit marks on both axes

const sx = (x: number) => SIZE / 2 + x * UNIT;
const sy = (y: number) => SIZE / 2 - y * UNIT;
const polygon = (points: [number, number][]) => points.map(([x, y]) => `${sx(x)},${sy(y)}`).join(' ');

const TEXT = {
  en: {
    label: 'Unit square and its image under a 2 by 2 matrix',
    matrix: 'Matrix M',
    names: ['a (top left)', 'b (top right)', 'c (bottom left)', 'd (bottom right)'],
    det: 'Determinant det M = ad − bc',
    area: 'Area scale factor |det M|',
    orientation: 'Orientation',
    kept: 'kept (det M > 0)',
    reversed: 'reversed, as in a mirror (det M < 0)',
    collapsed: 'collapsed onto a line or point (det M = 0): no inverse',
    legend: 'Dashed: unit square. Shaded: its image under the matrix.',
    note: 'The origin always stays fixed. Move the sliders to change the entries.',
  },
  ru: {
    label: 'Единичный квадрат и его образ при матрице 2 × 2',
    matrix: 'Матрица M',
    names: ['a (верхний левый)', 'b (верхний правый)', 'c (нижний левый)', 'd (нижний правый)'],
    det: 'Определитель det M = ad − bc',
    area: 'Коэффициент изменения площади |det M|',
    orientation: 'Ориентация',
    kept: 'сохраняется (det M > 0)',
    reversed: 'меняется, как в зеркале (det M < 0)',
    collapsed: 'сжата в прямую или точку (det M = 0): обратного преобразования нет',
    legend: 'Пунктир: единичный квадрат. Заливка: его образ под действием матрицы.',
    note: 'Начало координат всегда остаётся на месте. Двигайте ползунки, чтобы менять элементы матрицы.',
  },
} as const;

export default function MatrixTransformLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [entries, setEntries] = useState<[number, number, number, number]>([2, 1, 0, 1]);
  const [a, b, c, d] = entries;

  // Rounded to 3 decimals so that floating-point noise never shows as -0.00 or a false sign change.
  const det = Math.round((a * d - b * c) * 1000) / 1000;
  const orientation = Math.abs(det) < 1e-9 ? t.collapsed : det > 0 ? t.kept : t.reversed;
  const square: [number, number][] = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const image: [number, number][] = [[0, 0], [a, c], [a + b, c + d], [b, d]];

  const setEntry = (index: number, value: number) => {
    const next: [number, number, number, number] = [...entries];
    next[index] = value;
    setEntries(next);
  };

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" style={{ maxWidth: SIZE }} role="img" aria-label={t.label}>
        <line x1={0} y1={SIZE / 2} x2={SIZE} y2={SIZE / 2} stroke="currentColor" strokeOpacity={0.3} />
        <line x1={SIZE / 2} y1={0} x2={SIZE / 2} y2={SIZE} stroke="currentColor" strokeOpacity={0.3} />
        {TICKS.map(v => (
          <g key={v} fill="currentColor" fontSize={9}>
            <text x={sx(v)} y={SIZE / 2 + 11} textAnchor="middle">{v}</text>
            <text x={SIZE / 2 - 5} y={sy(v) + 3} textAnchor="end">{v}</text>
          </g>
        ))}
        <text x={SIZE - 4} y={SIZE / 2 - 5} textAnchor="end" fontSize={11} fill="currentColor">x</text>
        <text x={SIZE / 2 + 5} y={10} fontSize={11} fill="currentColor">y</text>
        <polygon points={polygon(square)} fill="none" stroke="currentColor" strokeDasharray="4 3" />
        <polygon points={polygon(image)} fill="#4f6fd8" fillOpacity={0.3} stroke="#4f6fd8" strokeWidth={2} />
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.matrix}: [{a.toFixed(1)}, {b.toFixed(1)}; {c.toFixed(1)}, {d.toFixed(1)}]
        <br />
        {t.det} = {det.toFixed(2)} · {t.area} = {Math.abs(det).toFixed(2)}
        <br />
        {t.orientation}: {orientation}
        <br />
        {t.legend}
        <br />
        {t.note}
      </figcaption>
      {entries.map((value, index) => (
        <label key={t.names[index]} style={{ display: 'block', marginTop: 6 }}>
          {t.names[index]}: {value.toFixed(1)}
          <input
            type="range"
            min={-2}
            max={2}
            step={0.1}
            value={value}
            onChange={event => setEntry(index, Number(event.target.value))}
            style={{ width: '100%' }}
          />
        </label>
      ))}
    </figure>
  );
}
