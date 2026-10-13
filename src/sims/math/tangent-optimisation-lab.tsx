import { useState, type PointerEvent } from 'react';
import type { Lang } from '../../contract/types';

// f(x) = x^3 - 6x^2 + 9x + 1, so f'(x) = 3(x - 1)(x - 3). The tangent at x has gradient f'(x). The chord from x to
// x + h has gradient g(h) = (f(x + h) - f(x)) / h, which settles on f'(x) as h gets smaller.

const f = (x: number) => x ** 3 - 6 * x ** 2 + 9 * x + 1;
const df = (x: number) => 3 * x ** 2 - 12 * x + 9;
const ROOTS = [1, 3];   // zeros of f'(x): the sign of f'(x) changes here
const SECTIONS: [number, number][] = [[-1, 1], [1, 3], [3, 5]];

const X_MIN = -1;
const X_MAX = 5;
const Y_MIN = -16;
const Y_MAX = 24;
const WIDTH = 320;
const GRAPH_H = 180;
const LINE_Y = 200;
const HEIGHT = 215;
const BLUE = '#4f6fd8';
const ORANGE = '#e0883a';
const GREEN = '#2e9e6a';
const RED = '#c2453a';

const px = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * WIDTH;
const py = (y: number) => GRAPH_H - ((y - Y_MIN) / (Y_MAX - Y_MIN)) * GRAPH_H;

const TEXT = {
  en: {
    label: 'Graph of f(x) = x^3 - 6x^2 + 9x + 1 with the tangent and a chord at the chosen point, and the sign of f′(x)',
    x: 'Point x (drag on the graph or move the slider)',
    h: 'Step h (the chord runs from x to x + h)',
    curve: 'curve y = f(x)',
    tangent: 'tangent, gradient f′(x)',
    chord: 'chord, gradient g(h)',
    fx: 'f(x)',
    slope: 'Gradient of the tangent f′(x)',
    chordSlope: 'Gradient of the chord g(h)',
    sign: 'Sign of f′(x)',
    up: 'positive (green): f is increasing',
    down: 'negative (red): f is decreasing',
    flat: 'zero: stationary point',
  },
  ru: {
    label: 'График f(x) = x^3 - 6x^2 + 9x + 1 с касательной и хордой в выбранной точке и знак f′(x)',
    x: 'Точка x (перетаскивайте по графику или двигайте ползунок)',
    h: 'Шаг h (хорда идёт от x до x + h)',
    curve: 'кривая y = f(x)',
    tangent: 'касательная, градиент f′(x)',
    chord: 'хорда, градиент g(h)',
    fx: 'f(x)',
    slope: 'Градиент касательной f′(x)',
    chordSlope: 'Градиент хорды g(h)',
    sign: 'Знак f′(x)',
    up: 'положительный (зелёный): f возрастает',
    down: 'отрицательный (красный): f убывает',
    flat: 'ноль: стационарная точка',
  },
} as const;

export default function TangentOptimisationLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [x, setX] = useState(0.5);
  const [h, setH] = useState(1);
  const fx = f(x);
  const slope = df(x);
  const chord = (f(x + h) - fx) / h;
  const through = (m: number) => ({ x1: px(X_MIN), y1: py(fx + m * (X_MIN - x)), x2: px(X_MAX), y2: py(fx + m * (X_MAX - x)) });
  const curve = Array.from({ length: 61 }, (_, i) => {
    const v = X_MIN + (i * (X_MAX - X_MIN)) / 60;
    return `${px(v).toFixed(1)},${py(f(v)).toFixed(1)}`;
  }).join(' ');
  const sign = slope > 0 ? t.up : slope < 0 ? t.down : t.flat;

  const drag = (event: PointerEvent<SVGSVGElement>) => {
    if (event.buttons !== 1) return;
    const box = event.currentTarget.getBoundingClientRect();
    const value = X_MIN + ((event.clientX - box.left) / box.width) * (X_MAX - X_MIN);
    setX(Math.min(4, Math.max(X_MIN, Math.round(value * 20) / 20)));
  };

  return (
    <figure style={{ margin: 0 }}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width="100%"
        style={{ maxWidth: WIDTH, touchAction: 'none', cursor: 'ew-resize' }}
        role="img"
        aria-label={t.label}
        onPointerDown={drag}
        onPointerMove={drag}
      >
        <polyline points={curve} fill="none" stroke={BLUE} strokeWidth={2} />
        <line {...through(chord)} stroke={GREEN} strokeWidth={1.5} />
        <line {...through(slope)} stroke={ORANGE} strokeWidth={1.5} strokeDasharray="5 3" />
        {ROOTS.map(r => <circle key={r} cx={px(r)} cy={py(f(r))} r={3} fill="none" stroke="currentColor" />)}
        <circle cx={px(x + h)} cy={py(f(x + h))} r={4} fill="none" stroke={GREEN} strokeWidth={2} />
        <circle cx={px(x)} cy={py(fx)} r={4} fill={ORANGE} />
        {SECTIONS.map(([a, b]) => (
          <rect key={a} x={px(a)} y={LINE_Y - 5} width={px(b) - px(a)} height={10} fill={df((a + b) / 2) > 0 ? GREEN : RED} />
        ))}
        <circle cx={px(x)} cy={LINE_Y} r={6} fill="#333" />
        {[-1, 1, 3, 5].map(v => <text key={v} x={px(v)} y={LINE_Y + 20} fontSize={10} textAnchor="middle">{v}</text>)}
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.5 }}>
        <span style={{ color: BLUE }}>■ {t.curve}</span>{' · '}
        <span style={{ color: ORANGE }}>■ {t.tangent}</span>{' · '}
        <span style={{ color: GREEN }}>■ {t.chord}</span>
        <br />
        {t.fx} = {fx.toFixed(2)} · {t.slope} = {slope.toFixed(2)} · {t.chordSlope} = {chord.toFixed(2)}
        <br />
        {t.sign}: {sign}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.x}: {x.toFixed(2)}
        <input type="range" min={X_MIN} max={4} step={0.05} value={x} onChange={event => setX(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.h}: {h.toFixed(2)}
        <input type="range" min={0.01} max={2} step={0.01} value={h} onChange={event => setH(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
