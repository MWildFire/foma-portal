import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { PANEL, panelReach, pixelsPerUnit, tipPixel } from './vector-logic';

// Vectors a and b in the plane with their sum, dot product, angle and parallelogram area, plus the path of a particle.
// Constant velocity: r(t) = t a. Variable velocity: r(t) = t a + (t^2 / 2) b, so v(t) = a + t b (b is a constant acceleration).
// Everything is computed from the sliders, so the lab is deterministic.

const TMAX = 4; // the path runs from t = 0 to t = 4
const STEPS = 60; // points sampled along the path

const TEXT = {
  en: {
    label: 'Vectors a and b with their sum, dot product and angle, and the path of a particle',
    vectors: 'Vectors a (blue), b (orange) and their sum a + b (green, dashed)',
    legend: 'Blue: a. Orange: b. Green dashed: a + b.',
    path: 'Path r(t) of the particle for 0 to 4 seconds, with the particle at time t',
    pathNote: 'Path r(t), 0 to 4 s; scale automatic.',
    variable: 'variable velocity (b is then a constant acceleration)',
    ax: 'a: x-component',
    ay: 'a: y-component',
    bx: 'b: x-component',
    by: 'b: y-component',
    time: 'time t (s)',
    sum: 'a + b',
    dot: 'dot product a · b',
    angle: 'angle between a and b',
    area: 'parallelogram area |a × b| (2D)',
    none: 'undefined (zero vector)',
    position: 'position r(t)',
    speed: 'speed |v(t)|',
  },
  ru: {
    label: 'Векторы a и b с их суммой, скалярным произведением и углом, а также путь частицы',
    vectors: 'Векторы a (синий), b (оранжевый) и их сумма a + b (зелёный, пунктир)',
    legend: 'Синий: a. Оранжевый: b. Зелёный пунктир: a + b.',
    path: 'Путь r(t) частицы за 0–4 секунды, с частицей в момент t',
    pathNote: 'Путь r(t) за 0–4 с; шкала автоматическая.',
    variable: 'переменная скорость (тогда b — постоянное ускорение)',
    ax: 'a: x-компонента',
    ay: 'a: y-компонента',
    bx: 'b: x-компонента',
    by: 'b: y-компонента',
    time: 'момент t (с)',
    sum: 'a + b',
    dot: 'скалярное произведение a · b',
    angle: 'угол между a и b',
    area: 'площадь параллелограмма |a × b| (в 2D)',
    none: 'не определён (нулевой вектор)',
    position: 'положение r(t)',
    speed: 'скорость |v(t)|',
  },
} as const;

// An arrow from the centre of the panel to (x, y), in vector units; `scale` is the number of pixels per unit.
function Arrow({ x, y, color, scale, dash }: { x: number; y: number; color: string; scale: number; dash?: string }) {
  const dx = x * scale;
  const dy = -y * scale; // screen y grows downwards
  const len = Math.hypot(dx, dy);
  if (len < 0.5) return null;
  const ux = dx / len;
  const uy = dy / len;
  const tx = tipPixel(x, scale);
  const ty = tipPixel(-y, scale);
  const head = [
    `${tx},${ty}`,
    `${tx - 9 * ux - 4 * uy},${ty - 9 * uy + 4 * ux}`,
    `${tx - 9 * ux + 4 * uy},${ty - 9 * uy - 4 * ux}`,
  ].join(' ');
  return (
    <g>
      <line x1={PANEL / 2} y1={PANEL / 2} x2={tx} y2={ty} stroke={color} strokeWidth={2} strokeDasharray={dash} />
      <polygon points={head} fill={color} />
    </g>
  );
}

export default function VectorLab({ lang }: { lang: Lang }) {
  const t = TEXT[lang];
  const [ax, setAx] = useState(2);
  const [ay, setAy] = useState(1);
  const [bx, setBx] = useState(-1);
  const [by, setBy] = useState(2);
  const [time, setTime] = useState(1);
  const [variable, setVariable] = useState(false);

  const dot = ax * bx + ay * by;
  const na = Math.hypot(ax, ay);
  const nb = Math.hypot(bx, by);
  const cos = na * nb > 0 ? Math.max(-1, Math.min(1, dot / (na * nb))) : null;
  const angle = cos === null ? t.none : `${((Math.acos(cos) * 180) / Math.PI).toFixed(1)}°`;
  const area = Math.abs(ax * by - ay * bx);
  // The vector panel zooms out when a, b or a + b reaches beyond -6 to 6, so that no arrow leaves the frame.
  const vectorScale = pixelsPerUnit(panelReach([ax, ay, bx, by, ax + bx, ay + by]));

  // Position at time s: constant velocity r = s a; variable velocity r = s a + (s^2 / 2) b.
  const at = (s: number) => ({
    x: s * ax + (variable ? ((s * s) / 2) * bx : 0),
    y: s * ay + (variable ? ((s * s) / 2) * by : 0),
  });
  const path = Array.from({ length: STEPS + 1 }, (_, i) => at((i / STEPS) * TMAX));
  const xs = [0, ...path.map(p => p.x)];
  const ys = [0, ...path.map(p => p.y)];
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const span = Math.max(Math.max(...xs) - minX, Math.max(...ys) - minY, 1);
  const scale = (PANEL - 30) / span;
  const pxOf = (p: { x: number }) => 15 + (p.x - minX) * scale;
  const pyOf = (p: { y: number }) => PANEL - 15 - (p.y - minY) * scale;

  const here = at(time);
  const velocity = { x: ax + (variable ? time * bx : 0), y: ay + (variable ? time * by : 0) };
  const sliders = [
    { label: t.ax, value: ax, set: setAx, min: -4, max: 4, step: 0.5 },
    { label: t.ay, value: ay, set: setAy, min: -4, max: 4, step: 0.5 },
    { label: t.bx, value: bx, set: setBx, min: -4, max: 4, step: 0.5 },
    { label: t.by, value: by, set: setBy, min: -4, max: 4, step: 0.5 },
    { label: t.time, value: time, set: setTime, min: 0, max: TMAX, step: 0.1 },
  ];

  return (
    <figure style={{ margin: 0 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${PANEL} ${PANEL}`} width="100%" style={{ maxWidth: PANEL }} role="img" aria-label={t.vectors}>
          <line x1={0} y1={PANEL / 2} x2={PANEL} y2={PANEL / 2} stroke="currentColor" strokeOpacity={0.25} />
          <line x1={PANEL / 2} y1={0} x2={PANEL / 2} y2={PANEL} stroke="currentColor" strokeOpacity={0.25} />
          <text x={PANEL - 6} y={PANEL / 2 - 5} textAnchor="end" fontSize={11} fill="currentColor">x</text>
          <text x={PANEL / 2 + 5} y={12} fontSize={11} fill="currentColor">y</text>
          <Arrow x={ax} y={ay} color="#4f6fd8" scale={vectorScale} />
          <Arrow x={bx} y={by} color="#e0883a" scale={vectorScale} />
          <Arrow x={ax + bx} y={ay + by} color="#3a9e6f" scale={vectorScale} dash="4 3" />
        </svg></ReadableDiagram>
        <ReadableDiagram lang={lang}><svg viewBox={`0 0 ${PANEL} ${PANEL}`} width="100%" style={{ maxWidth: PANEL }} role="img" aria-label={t.path}>
          <line x1={0} y1={pyOf({ y: 0 })} x2={PANEL} y2={pyOf({ y: 0 })} stroke="currentColor" strokeOpacity={0.25} />
          <line x1={pxOf({ x: 0 })} y1={0} x2={pxOf({ x: 0 })} y2={PANEL} stroke="currentColor" strokeOpacity={0.25} />
          <text x={PANEL - 6} y={pyOf({ y: 0 }) - 5} textAnchor="end" fontSize={11} fill="currentColor">x</text>
          <text x={pxOf({ x: 0 }) + 5} y={12} fontSize={11} fill="currentColor">y</text>
          <polyline points={path.map(p => `${pxOf(p)},${pyOf(p)}`).join(' ')} fill="none" stroke="#4f6fd8" strokeWidth={2} />
          <circle cx={pxOf(here)} cy={pyOf(here)} r={5} fill="#e0883a" />
        </svg></ReadableDiagram>
      </div>
      <figcaption style={{ fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
        {t.legend}
        <br />
        {t.pathNote}
        <br />
        {t.sum}: ({ax + bx}, {ay + by}) · {t.dot}: {dot} · {t.angle}: {angle}
        <br />
        {t.area}: {area} · {t.position}: ({here.x.toFixed(2)}, {here.y.toFixed(2)}) · {t.speed}: {Math.hypot(velocity.x, velocity.y).toFixed(2)}
      </figcaption>
      {sliders.map(s => (
        <label key={s.label} style={{ display: 'block', marginTop: 6 }}>
          {s.label}: {s.value}
          <input type="range" min={s.min} max={s.max} step={s.step} value={s.value} onChange={e => s.set(Number(e.target.value))} style={{ width: '100%' }} />
        </label>
      ))}
      <label style={{ display: 'block', marginTop: 8 }}>
        <input type="checkbox" checked={variable} onChange={e => setVariable(e.target.checked)} /> {t.variable}
      </label>
    </figure>
  );
}
