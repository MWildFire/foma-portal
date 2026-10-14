import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { areaBetween, discSum, f, volumeBetween } from './revolution-logic';

// The region under y = 9 - x^2 between the bounds a and b, rotated about the x-axis. The area is the integral of y, and
// the volume is pi times the integral of y^2 (disc method). The discs are drawn edge-on at their midpoints, and the
// disc sum approaches the exact volume as the number of discs grows.

const X_MIN = -3.2;
const X_MAX = 3.2;
const Y_MAX = 10;
const WIDTH = 320;
const HEIGHT = 190;
const PAD = 14;

// The x-axis sits in the middle of the box, so an edge-on disc of radius r is a rectangle from -r to r.
const sx = (x: number): number => PAD + ((x - X_MIN) / (X_MAX - X_MIN)) * (WIDTH - 2 * PAD);
const sy = (y: number): number => HEIGHT / 2 - (y / Y_MAX) * (HEIGHT / 2 - PAD);

const TEXT = {
  en: {
    label: 'Region under y = 9 − x² between a and b, with discs drawn edge-on',
    lower: 'Lower bound a',
    upper: 'Upper bound b',
    discs: 'Number of discs n',
    invalid: 'Choose a smaller than b.',
    area: 'Area (exact)',
    volume: 'Volume about the x-axis (exact)',
    sum: 'Disc sum with n discs',
    discNote: 'Each disc of radius f(midpoint) is drawn edge-on: a rectangle of height 2f(midpoint) centred on the x-axis.',
  },
  ru: {
    label: 'Область под y = 9 − x² между a и b, диски показаны с ребра',
    lower: 'Нижняя граница a',
    upper: 'Верхняя граница b',
    discs: 'Число дисков n',
    invalid: 'Выберите a меньше b.',
    area: 'Площадь (точно)',
    volume: 'Объём вокруг оси x (точно)',
    sum: 'Сумма дисков при n дисках',
    discNote: 'Каждый диск радиуса f(середина) показан с ребра: прямоугольник высотой 2f(середина) по обе стороны от оси x.',
  },
} as const;

export default function RevolutionLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [a, setA] = useState(0);
  const [b, setB] = useState(3);
  const [n, setN] = useState(8);

  const valid = a < b;
  const width = valid ? (b - a) / n : 0;
  const mids = valid ? Array.from({ length: n }, (_, i) => a + (i + 0.5) * width) : [];
  const curve = Array.from({ length: 61 }, (_, i) => {
    const x = -3 + (i / 60) * 6;
    return `${sx(x)},${sy(f(x))}`;
  }).join(' ');
  const shaded = [
    `${sx(a)},${sy(0)}`,
    ...Array.from({ length: 41 }, (_, i) => {
      const x = a + (i / 40) * (b - a);
      return `${sx(x)},${sy(f(x))}`;
    }),
    `${sx(b)},${sy(0)}`,
  ].join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={PAD} y1={sy(0)} x2={WIDTH - PAD} y2={sy(0)} stroke="currentColor" strokeWidth={1} />
        {valid && <polygon points={shaded} fill="#4f6fd8" fillOpacity={0.25} />}
        {mids.map((mid, i) => (
          <rect
            key={i}
            x={sx(mid - width / 2)}
            y={sy(f(mid))}
            width={sx(mid + width / 2) - sx(mid - width / 2)}
            height={sy(-f(mid)) - sy(f(mid))}
            fill="#e0883a"
            fillOpacity={0.35}
            stroke="#e0883a"
            strokeWidth={0.5}
          />
        ))}
        <polyline points={curve} fill="none" stroke="#4f6fd8" strokeWidth={2} />
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {valid ? (
          <>
            {t.area}: {areaBetween(a, b).toFixed(2)}
            <br />
            {t.volume}: {volumeBetween(a, b).toFixed(2)}
            <br />
            {t.sum}: {discSum(a, b, n).toFixed(2)}
            <br />
            {t.discNote}
          </>
        ) : (
          t.invalid
        )}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.lower}: {a.toFixed(1)}
        <input type="range" min={-3} max={3} step={0.1} value={a} onChange={event => setA(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.upper}: {b.toFixed(1)}
        <input type="range" min={-3} max={3} step={0.1} value={b} onChange={event => setB(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.discs}: {n}
        <input type="range" min={2} max={40} step={1} value={n} onChange={event => setN(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
