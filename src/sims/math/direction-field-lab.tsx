import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Slope field of dy/dx = f(x, y) for 0 <= x <= 1, with Euler's polygon from (0, y0) drawn over it.
// The dashed curve is the exact solution, so the gap between the two is the error of Euler's method.
// Everything is computed from the inputs: no randomness and no external libraries.

const X_MAX = 1;
const Y_MIN = -1;
const Y_MAX = 5;
const WIDTH = 320;
const HEIGHT = 240;
const LEFT = 32; // room for the y tick labels
const RIGHT = 16; // room for the name of the x axis
const TOP = 18; // room for the top y tick label and the name of the y axis
const BOTTOM = 26; // room for the x tick labels
const PLOT_W = WIDTH - LEFT - RIGHT;
const PLOT_H = HEIGHT - TOP - BOTTOM;
const X = (x: number) => LEFT + (x / X_MAX) * PLOT_W;
const Y = (y: number) => HEIGHT - BOTTOM - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;
// Pixels of vertical travel per unit of slope, per pixel of horizontal travel. The axes are not to the same scale.
const SLOPE_PX = (PLOT_H / (Y_MAX - Y_MIN)) / (PLOT_W / X_MAX);
const Y_TICKS = Array.from({ length: Y_MAX - Y_MIN + 1 }, (_, k) => Y_MIN + k); // -1, 0, ..., 5

// f is the right-hand side; exact(y0, x) solves the equation with y(0) = y0 and is used only for the dashed curve.
const FUNCTIONS = [
  { f: (x: number, y: number) => x - y, exact: (y0: number, x: number) => x - 1 + (y0 + 1) * Math.exp(-x) },
  { f: (_x: number, y: number) => y * (1 - y / 4), exact: (y0: number, x: number) => (4 * y0 * Math.exp(x)) / (4 + y0 * (Math.exp(x) - 1)) },
  { f: (_x: number, y: number) => -2 * y, exact: (y0: number, x: number) => y0 * Math.exp(-2 * x) },
];

const TEXT = {
  en: {
    label: 'Slope field with the Euler polygon and the exact solution',
    equation: 'Equation',
    functions: ['dy/dx = x - y', 'dy/dx = y(1 - y/4)', 'dy/dx = -2y'],
    step: 'Step length h',
    start: 'Starting value y(0)',
    note: 'Blue: slope field. Orange: Euler polygon. Dashed: exact solution.',
    scale: 'The axes are not to the same scale: a slope is dy/dx, not the angle of an arrow.',
    at: 'At x =',
    euler: 'Euler',
    exact: 'exact',
    error: 'error',
  },
  ru: {
    label: 'Поле направлений, ломаная Эйлера и точное решение',
    equation: 'Уравнение',
    functions: ['dy/dx = x - y', 'dy/dx = y(1 - y/4)', 'dy/dx = -2y'],
    step: 'Шаг h',
    start: 'Начальное значение y(0)',
    note: 'Синее: поле направлений. Оранжевое: ломаная Эйлера. Пунктир: точное решение.',
    scale: 'Масштабы осей не равные: наклон — это dy/dx, а не угол стрелки.',
    at: 'При x =',
    euler: 'Эйлер',
    exact: 'точно',
    error: 'погрешность',
  },
} as const;

// Euler's method: y(n+1) = y(n) + h f(x(n), y(n)) with x(n) = n h, up to the last x not beyond X_MAX.
function euler(f: (x: number, y: number) => number, y0: number, h: number): [number, number][] {
  const points: [number, number][] = [[0, y0]];
  const steps = Math.floor(X_MAX / h + 1e-9);
  for (let n = 0; n < steps; n++) {
    const [x, y] = points[n];
    points.push([(n + 1) * h, y + h * f(x, y)]);
  }
  return points;
}

export default function DirectionFieldLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [fi, setFi] = useState(0);
  const [h, setH] = useState(0.2);
  const [y0, setY0] = useState(1);

  const { f, exact } = FUNCTIONS[fi];
  const path = euler(f, y0, h);
  const [xEnd, yEuler] = path[path.length - 1];
  const yExact = exact(y0, xEnd);

  // Each arrow has the gradient f(x, y) at its grid point and a fixed length in pixels.
  const arrows: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 12; j++) {
      const x = i / 8;
      const y = Y_MIN + j / 2;
      const s = -f(x, y) * SLOPE_PX;
      const n = Math.hypot(1, s);
      const dx = 8 / n;
      const dy = (8 * s) / n;
      arrows.push({ x1: X(x) - dx, y1: Y(y) - dy, x2: X(x) + dx, y2: Y(y) + dy });
    }
  }
  const exactPts = Array.from({ length: 81 }, (_, i) => `${X(i / 80)},${Y(exact(y0, i / 80))}`).join(' ');
  const eulerPts = path.map(([x, y]) => `${X(x)},${Y(y)}`).join(' ');

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={X(0)} y1={Y(Y_MAX)} x2={X(0)} y2={Y(Y_MIN)} stroke="#c9ccd3" strokeWidth={1} />
        <line x1={LEFT} y1={Y(0)} x2={WIDTH - RIGHT} y2={Y(0)} stroke="#c9ccd3" strokeWidth={1} />
        {Y_TICKS.map(v => (
          <text key={v} x={X(0) - 12} y={Y(v) + 4} textAnchor="end" fontSize={10} fill="currentColor">{v}</text>
        ))}
        {[0, X_MAX].map(v => (
          <text key={v} x={X(v)} y={HEIGHT - 6} textAnchor="middle" fontSize={10} fill="currentColor">{v}</text>
        ))}
        <text x={WIDTH - 6} y={Y(0) - 5} textAnchor="end" fontSize={11} fill="currentColor">x</text>
        <text x={X(0)} y={9} textAnchor="middle" fontSize={11} fill="currentColor">y</text>
        {arrows.map((a, k) => (
          <line key={k} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#4f6fd8" strokeWidth={1} />
        ))}
        <polyline points={exactPts} fill="none" stroke="#333" strokeWidth={1.2} strokeDasharray="4 3" />
        <polyline points={eulerPts} fill="none" stroke="#e0883a" strokeWidth={2} />
        {path.map(([x, y], k) => (
          <circle key={k} cx={X(x)} cy={Y(y)} r={2.5} fill="#e0883a" />
        ))}
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        {t.note}
        <br />
        {t.scale}
        <br />
        {t.at} {xEnd.toFixed(2)}: {t.euler} {yEuler.toFixed(3)} · {t.exact} {yExact.toFixed(3)} · {t.error} {(yExact - yEuler).toFixed(3)}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.equation}{' '}
        <select value={fi} onChange={event => setFi(Number(event.target.value))}>
          {t.functions.map((name, k) => (
            <option key={name} value={k}>{name}</option>
          ))}
        </select>
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.step}: {h.toFixed(2)}
        <input type="range" min={0.05} max={1} step={0.05} value={h} onChange={event => setH(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.start}: {y0.toFixed(1)}
        <input type="range" min={0} max={5} step={0.5} value={y0} onChange={event => setY0(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
