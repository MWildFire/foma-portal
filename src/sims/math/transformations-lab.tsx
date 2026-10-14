import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Base curve f(x) = sin x (dashed) and the transformed curve y = p f(q(x - a)) + b (solid). The orange point is the
// image of the base maximum (pi/2, 1), which is (a + (pi/2) / q, p + b) by the image rule.

const WIDTH = 320;
const HEIGHT = 240;
const X_MIN = -8;
const X_MAX = 8;
const Y_MIN = -7;
const Y_MAX = 7;
const SAMPLES = 240;

const toSvgX = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * WIDTH;
const toSvgY = (y: number) => ((Y_MAX - y) / (Y_MAX - Y_MIN)) * HEIGHT;

// The curve y = fn(x) across the window, as the points attribute of an SVG polyline.
function curvePoints(fn: (x: number) => number): string {
  const points: string[] = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const x = X_MIN + (i / SAMPLES) * (X_MAX - X_MIN);
    points.push(`${toSvgX(x).toFixed(1)},${toSvgY(fn(x)).toFixed(1)}`);
  }
  return points.join(' ');
}

const TEXT = {
  en: {
    label: 'The sine curve and its transformed image',
    base: 'base f(x) = sin x',
    transformed: 'transformed curve',
    image: 'image of the maximum',
    a: 'a: horizontal translation (textbook: c)',
    b: 'b: vertical translation (textbook: d)',
    p: 'p: vertical stretch (textbook: a; negative: reflection in the x-axis)',
    q: 'q: horizontal stretch, scale factor 1/q (textbook: b)',
    flip: 'q negative (reflection in the y-axis)',
  },
  ru: {
    label: 'Синусоида и её преобразованный образ',
    base: 'исходная f(x) = sin x',
    transformed: 'преобразованная кривая',
    image: 'образ максимума',
    a: 'a: сдвиг по горизонтали (в учебнике: c)',
    b: 'b: сдвиг по вертикали (в учебнике: d)',
    p: 'p: растяжение по вертикали (в учебнике: a; отрицательное: отражение в оси x)',
    q: 'q: растяжение по горизонтали, коэффициент 1/q (в учебнике: b)',
    flip: 'q отрицательно (отражение в оси y)',
  },
} as const;

export default function TransformationsLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [p, setP] = useState(1);
  const [stretch, setStretch] = useState(1);
  const [flip, setFlip] = useState(false);

  const q = flip ? -stretch : stretch;
  const imageX = a + Math.PI / 2 / q;
  const imageY = p + b;
  const formula = `y = ${p.toFixed(1)} sin(${q.toFixed(1)}(x − ${a.toFixed(1)})) + ${b.toFixed(1)}`;

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={0} y1={toSvgY(0)} x2={WIDTH} y2={toSvgY(0)} stroke="currentColor" strokeOpacity={0.35} />
        <line x1={toSvgX(0)} y1={0} x2={toSvgX(0)} y2={HEIGHT} stroke="currentColor" strokeOpacity={0.35} />
        <polyline points={curvePoints(Math.sin)} fill="none" stroke="#8a8a8a" strokeWidth={1.5} strokeDasharray="4 3" />
        <polyline points={curvePoints(x => p * Math.sin(q * (x - a)) + b)} fill="none" stroke="#4f6fd8" strokeWidth={2.5} />
        <circle cx={toSvgX(Math.PI / 2)} cy={toSvgY(1)} r={3} fill="#8a8a8a" />
        <circle cx={toSvgX(imageX)} cy={toSvgY(imageY)} r={4} fill="#e0883a" />
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        <span style={{ color: '#8a8a8a' }}>- - {t.base}</span>{' · '}
        <span style={{ color: '#4f6fd8' }}>━ {t.transformed}</span>{' · '}
        <span style={{ color: '#e0883a' }}>● {t.image}</span>
        <br />
        {formula}
        <br />
        ({imageX.toFixed(2)}, {imageY.toFixed(2)})
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.a}: {a.toFixed(1)}
        <input type="range" min={-4} max={4} step={0.1} value={a} onChange={event => setA(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.b}: {b.toFixed(1)}
        <input type="range" min={-4} max={4} step={0.1} value={b} onChange={event => setB(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.p}: {p.toFixed(1)}
        <input type="range" min={-3} max={3} step={0.1} value={p} onChange={event => setP(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.q}: {q.toFixed(1)}
        <input type="range" min={0.2} max={3} step={0.1} value={stretch} onChange={event => setStretch(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        <input type="checkbox" checked={flip} onChange={event => setFlip(event.target.checked)} /> {t.flip}
      </label>
    </figure>
  );
}
