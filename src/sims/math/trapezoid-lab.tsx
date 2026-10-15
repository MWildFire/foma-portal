import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Trapezia under y = 2 + sin x between a and b. The exact integral is 2(b - a) + cos a - cos b, so the error T - I can
// be read directly. Where the curve is concave down (sin x on [0, pi]) the chords lie below it and the estimate is too
// small; where it is concave up (between pi and 2 pi) the estimate is too large.

const WIDTH = 320;
const HEIGHT = 190;
const PAD = 24;
const X_MAX = 2 * Math.PI;
const Y_MAX = 3.5;

const f = (x: number) => 2 + Math.sin(x);
const px = (x: number) => PAD + (x / X_MAX) * (WIDTH - 2 * PAD);
const py = (y: number) => HEIGHT - PAD - (y / Y_MAX) * (HEIGHT - 2 * PAD);

const TEXT = {
  en: {
    label: 'Trapezia under the curve y = 2 + sin x between a and b',
    a: 'Lower endpoint a (rad)',
    b: 'Upper endpoint b (rad)',
    n: 'Number of trapezia n',
    h: 'Strip width h',
    est: 'Trapezoidal estimate T',
    exact: 'Exact integral I = 2(b − a) + cos a − cos b',
    error: 'Error E = T − I',
    over: 'E > 0: the estimate is an overestimate',
    under: 'E < 0: the estimate is an underestimate',
    note: 'If the curve bends one way on [a, b], the chords lie on one side of it, so E keeps one sign.',
  },
  ru: {
    label: 'Трапеции под графиком y = 2 + sin x между a и b',
    a: 'Левая граница a (рад)',
    b: 'Правая граница b (рад)',
    n: 'Число трапеций n',
    h: 'Ширина полоски h',
    est: 'Оценка по формуле трапеций T',
    exact: 'Точный интеграл I = 2(b − a) + cos a − cos b',
    error: 'Погрешность E = T − I',
    over: 'E > 0: оценка завышена',
    under: 'E < 0: оценка занижена',
    note: 'Если график на [a, b] выгнут в одну сторону, хорды лежат по одну сторону от него, и знак E не меняется.',
  },
} as const;

export default function TrapezoidLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [n, setN] = useState(4);
  const [a, setA] = useState(0);
  const [b, setB] = useState(Math.PI);

  const h = (b - a) / n;
  const xs = Array.from({ length: n + 1 }, (_, i) => a + i * h);
  const ys = xs.map(f);
  const inner = ys.slice(1, n).reduce((sum, y) => sum + y, 0);
  const estimate = (h / 2) * (ys[0] + 2 * inner + ys[n]);
  const exact = 2 * (b - a) + Math.cos(a) - Math.cos(b);
  const error = estimate - exact;
  const verdict = Math.abs(error) < 1e-9 ? '' : error > 0 ? t.over : t.under;
  const curve = Array.from({ length: 121 }, (_, i) => {
    const x = (i / 120) * X_MAX;
    return `${px(x)},${py(f(x))}`;
  }).join(' ');
  const signed = (v: number) => `${v < 0 ? '−' : '+'}${Math.abs(v).toFixed(3)}`;

  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: WIDTH }} role="img" aria-label={t.label}>
        <line x1={PAD} y1={py(0)} x2={WIDTH - PAD} y2={py(0)} stroke="currentColor" strokeWidth={1} />
        <line x1={px(0)} y1={PAD} x2={px(0)} y2={HEIGHT - PAD} stroke="currentColor" strokeWidth={1} />
        {xs.slice(0, n).map((x0, i) => {
          const x1 = xs[i + 1];
          const corners = `${px(x0)},${py(0)} ${px(x0)},${py(ys[i])} ${px(x1)},${py(ys[i + 1])} ${px(x1)},${py(0)}`;
          return <polygon key={i} points={corners} fill="#4f6fd8" fillOpacity={0.35} stroke="#4f6fd8" />;
        })}
        <polyline points={curve} fill="none" stroke="#e0883a" strokeWidth={2} />
      </svg>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6 }}>
        {t.h}: {h.toFixed(3)} · {t.est}: {estimate.toFixed(3)}
        <br />
        {t.exact}: {exact.toFixed(3)} · {t.error}: {signed(error)}
        <br />
        <strong>{verdict}</strong>
        <br />
        {t.note}
      </figcaption>
      <label style={{ display: 'block', marginTop: 8 }}>
        {t.n}: {n}
        <input type="range" min={1} max={12} step={1} value={n} onChange={event => setN(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.a}: {a.toFixed(2)}
        <input type="range" min={0} max={2.5} step={0.05} value={a} onChange={event => setA(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
      <label style={{ display: 'block', marginTop: 4 }}>
        {t.b}: {b.toFixed(2)}
        <input type="range" min={3} max={X_MAX} step={0.01} value={b} onChange={event => setB(Number(event.target.value))} style={{ width: '100%' }} />
      </label>
    </figure>
  );
}
