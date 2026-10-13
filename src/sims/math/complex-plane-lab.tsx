import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Argand diagram for z = a + bi. The fixed number w = 1 + i turns z through 45 degrees and stretches it by sqrt(2),
// so the orange point is the product zw = (a - b) + (a + b)i. Everything is computed from the two sliders.

const SIZE = 280;
const CENTRE = SIZE / 2;
const SCALE = 15; // pixels per unit; the picture shows about -9 to 9 on each axis
const RANGE = 9;
const GRID = Array.from({ length: 2 * RANGE + 1 }, (_, k) => k - RANGE);
const ARC = 0.8; // radius, in units, of the arc that marks the argument

const X = (x: number) => CENTRE + x * SCALE;
const Y = (y: number) => CENTRE - y * SCALE;

const TEXT = {
  en: {
    label: 'Argand diagram of z = a + bi and of the product zw',
    re: 'Real part a',
    im: 'Imaginary part b',
    z: 'z',
    value: 'z =',
    axisRe: 'Re',
    axisIm: 'Im',
    product: 'zw',
    modulus: 'Modulus |z|',
    argument: 'Argument arg z',
    polar: 'Polar form',
    fixed: 'Fixed number w = 1 + i, so zw =',
    note: 'Multiplying by w turns z through 45 degrees and stretches it by sqrt(2).',
  },
  ru: {
    label: 'Диаграмма Аргана для z = a + bi и произведения zw',
    re: 'Действительная часть a',
    im: 'Мнимая часть b',
    z: 'z',
    value: 'z =',
    axisRe: 'Re',
    axisIm: 'Im',
    product: 'zw',
    modulus: 'Модуль |z|',
    argument: 'Аргумент arg z',
    polar: 'Полярная форма',
    fixed: 'Фиксированное число w = 1 + i, поэтому zw =',
    note: 'Умножение на w поворачивает z на 45 градусов и растягивает его в sqrt(2) раз.',
  },
} as const;

// Cartesian text with an explicit sign, for example "-1.0 + 5.0i".
const cartesian = (re: number, im: number) => `${re.toFixed(1)} ${im < 0 ? '-' : '+'} ${Math.abs(im).toFixed(1)}i`;

export default function ComplexPlaneLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);

  const r = Math.hypot(a, b);
  const theta = Math.atan2(b, a);
  const degrees = (theta * 180) / Math.PI;
  const productRe = a - b; // (a + bi)(1 + i) = (a - b) + (a + b)i
  const productIm = a + b;
  // Arc from the positive real axis to z. Sweep flag 0 draws anticlockwise on screen, which is positive angle here.
  const arc = `M ${X(ARC)} ${CENTRE} A ${ARC * SCALE} ${ARC * SCALE} 0 0 ${theta < 0 ? 1 : 0} ${X(ARC * Math.cos(theta))} ${Y(ARC * Math.sin(theta))}`;

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" style={{ maxWidth: SIZE }} role="img" aria-label={t.label}>
        {GRID.map(k => (
          <g key={k} stroke="currentColor" strokeOpacity={0.12}>
            <line x1={X(k)} y1={0} x2={X(k)} y2={SIZE} />
            <line x1={0} y1={Y(k)} x2={SIZE} y2={Y(k)} />
          </g>
        ))}
        <line x1={0} y1={CENTRE} x2={SIZE} y2={CENTRE} stroke="currentColor" />
        <line x1={CENTRE} y1={0} x2={CENTRE} y2={SIZE} stroke="currentColor" />
        <text x={SIZE - 18} y={CENTRE - 6} fontSize={12} fill="currentColor">{t.axisRe}</text>
        <text x={CENTRE + 6} y={14} fontSize={12} fill="currentColor">{t.axisIm}</text>
        <circle cx={CENTRE} cy={CENTRE} r={r * SCALE} fill="none" stroke="#4f6fd8" strokeDasharray="4 4" />
        <path d={arc} fill="none" stroke="#4f6fd8" />
        <line x1={CENTRE} y1={CENTRE} x2={X(a)} y2={Y(b)} stroke="#4f6fd8" strokeWidth={2} />
        <line x1={CENTRE} y1={CENTRE} x2={X(productRe)} y2={Y(productIm)} stroke="#e0883a" strokeWidth={2} strokeDasharray="5 3" />
        <circle cx={X(a)} cy={Y(b)} r={5} fill="#4f6fd8" />
        <circle cx={X(productRe)} cy={Y(productIm)} r={5} fill="#e0883a" />
        <text x={X(a) + 7} y={Y(b) - 7} fontSize={13} fill="#4f6fd8">{t.z}</text>
        <text x={X(productRe) + 7} y={Y(productIm) - 7} fontSize={13} fill="#e0883a">{t.product}</text>
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.value} {cartesian(a, b)} · {t.modulus}: {r.toFixed(2)} · {t.argument}: {degrees.toFixed(1)}°
        <br />
        {t.polar}: {r.toFixed(2)}(cos {degrees.toFixed(1)}° + i sin {degrees.toFixed(1)}°)
        <br />
        <span style={{ color: '#e0883a' }}>
          {t.fixed} {cartesian(productRe, productIm)}
        </span>
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.re}: {a.toFixed(1)}
        <input type="range" min={-4} max={4} step={0.5} value={a} onChange={event => setA(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.im}: {b.toFixed(1)}
        <input type="range" min={-4} max={4} step={0.5} value={b} onChange={event => setB(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
