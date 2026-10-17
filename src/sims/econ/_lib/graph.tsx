import { useEffect, useRef, useId, useState, type ReactNode } from 'react';
import type { L, Lang } from '../../../contract/types';

// Shared building blocks for the Economics diagrams (src/sims/econ/*.tsx).
// A diagram is a GraphSpec in data units (x from 0 to xMax, y from 0 to yMax). Graph draws the axes, curves, shaded
// areas, guide lines and marked points. StepPlayer shows a list of steps, each with its own GraphSpec, so a student
// can build the diagram up one step at a time. Both work in EN and RU; labels are short, one line each.

export type Point = [number, number];

export type Tone = 'demand' | 'supply' | 'gain' | 'loss' | 'policy' | 'alt' | 'ink' | 'muted';

// Colours that read on both the light and the dark page background.
const COLOUR: Record<Tone, string> = {
  demand: '#3b82f6',
  supply: '#ea580c',
  gain: '#16a34a',
  loss: '#ef4444',
  policy: '#a855f7',
  alt: '#0d9488',
  ink: 'currentColor',
  muted: 'var(--color-muted)',
};

export interface CurveSpec { id: string; points: Point[]; tone?: Tone; label?: L; dashed?: boolean; width?: number }
export interface AreaSpec { id: string; points: Point[]; tone?: Tone }
export interface GuideSpec { id: string; from: Point; to: Point; tone?: Tone; dashed?: boolean; label?: L; labelAt?: 'start' | 'end' }
export interface MarkSpec { id: string; at: Point; tone?: Tone; label?: L; dx?: number; dy?: number; dot?: boolean }
export interface TickSpec { value: number; label: L }

export interface GraphSpec {
  square?: boolean;
  showOrigin?: boolean;
  xMax: number;
  yMax: number;
  xLabel: L;
  yLabel: L;
  xTicks?: TickSpec[];
  yTicks?: TickSpec[];
  curves?: CurveSpec[];
  areas?: AreaSpec[];
  guides?: GuideSpec[];
  marks?: MarkSpec[];
}

export interface Step { title: L; text: L; graph: GraphSpec }

// A curve from a function, sampled at n+1 points. Use it for any curve that is not a straight line.
export function fn(f: (v: number) => number, from: number, to: number, n = 40): Point[] {
  return Array.from({ length: n + 1 }, (_, i) => {
    const v = from + ((to - from) * i) / n;
    return [v, f(v)] as Point;
  });
}

const W = 360;
const H = 260;
const LEFT = 56;
const RIGHT = 16;
const TOP = 14;
const BOTTOM = 44;
const PLOT_W = W - LEFT - RIGHT;

const UI = {
  back: { en: 'Back', ru: 'Назад' },
  next: { en: 'Next', ru: 'Далее' },
  restart: { en: 'Start again', ru: 'Сначала' },
  step: { en: 'Step', ru: 'Шаг' },
  of: { en: 'of', ru: 'из' },
};

// A 360-unit picture with 11-unit text needs at least 360 CSS pixels, even inside a narrow phone card.
export function GraphViewport({ children, lang }: { children: ReactNode; lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScrolls(el.scrollWidth > el.clientWidth + 1);
    const observer = new ResizeObserver(update);
    observer.observe(el); update();
    return () => observer.disconnect();
  }, []);
  return <div style={{ minWidth: 0, maxWidth: '100%' }}>
    <div ref={ref} style={{ overflowX: 'auto', maxWidth: '100%' }} tabIndex={scrolls ? 0 : undefined}
      role={scrolls ? 'region' : undefined} aria-label={scrolls ? (lang === 'ru' ? 'Диаграмма с прокруткой' : 'Scrollable diagram') : undefined}>
      <div style={{ minWidth: 360 }}>{children}</div>
    </div>
    {scrolls && <p style={{ fontSize: 12, margin: '4px 0' }}>{lang === 'ru' ? 'Прокрутите диаграмму вбок →' : 'Scroll the diagram sideways →'}</p>}
  </div>;
}

export function Graph({ spec, lang, label }: { spec: GraphSpec; lang: Lang; label: string }) {
  const height = spec.square ? PLOT_W + TOP + BOTTOM : H;
  const plotHeight = height - TOP - BOTTOM;
  const x = (v: number): number => LEFT + (v / spec.xMax) * PLOT_W;
  const y = (v: number): number => TOP + plotHeight - (v / spec.yMax) * plotHeight;
  const path = (points: Point[]): string => points.map(([a, b]) => `${x(a).toFixed(1)},${y(b).toFixed(1)}`).join(' ');
  const originX = LEFT;
  const originY = TOP + plotHeight;
  const colour = (tone?: Tone): string => COLOUR[tone ?? 'ink'];

  return (
    <GraphViewport lang={lang}><svg role="img" aria-label={label} viewBox={`0 0 ${W} ${height}`} width="100%" style={{ maxWidth: 420, display: 'block', color: 'var(--color-fg)' }}>
      {(spec.areas ?? []).map(area => (
        <polygon key={area.id} points={path(area.points)} fill={colour(area.tone)} fillOpacity={0.2} stroke="none" />
      ))}

      <line x1={originX} y1={originY} x2={originX} y2={TOP} stroke="currentColor" strokeWidth={1.5} />
      <line x1={originX} y1={originY} x2={W - RIGHT} y2={originY} stroke="currentColor" strokeWidth={1.5} />
      <polygon points={`${originX},${TOP} ${originX - 4},${TOP + 8} ${originX + 4},${TOP + 8}`} fill="currentColor" />
      <polygon points={`${W - RIGHT},${originY} ${W - RIGHT - 8},${originY - 4} ${W - RIGHT - 8},${originY + 4}`} fill="currentColor" />
      {spec.showOrigin !== false && <text x={originX - 6} y={originY + 14} textAnchor="end" fontSize={12} fill="currentColor">0</text>}
      <text x={W - RIGHT} y={originY + 30} textAnchor="end" fontSize={12} fill="currentColor">{spec.xLabel[lang]}</text>
      <text transform={`translate(14 ${TOP + plotHeight / 2}) rotate(-90)`} textAnchor="middle" fontSize={12} fill="currentColor">{spec.yLabel[lang]}</text>

      {(spec.xTicks ?? []).map(tick => (
        <g key={`x${tick.value}`}>
          <line x1={x(tick.value)} y1={originY} x2={x(tick.value)} y2={originY + 4} stroke="currentColor" strokeWidth={1} />
          <text x={x(tick.value)} y={originY + 16} textAnchor="middle" fontSize={11} fill="currentColor">{tick.label[lang]}</text>
        </g>
      ))}
      {(spec.yTicks ?? []).map(tick => (
        <g key={`y${tick.value}`}>
          <line x1={originX - 4} y1={y(tick.value)} x2={originX} y2={y(tick.value)} stroke="currentColor" strokeWidth={1} />
          <text x={originX - 7} y={y(tick.value) + 4} textAnchor="end" fontSize={11} fill="currentColor">{tick.label[lang]}</text>
        </g>
      ))}

      {(spec.guides ?? []).map(guide => {
        const at = guide.labelAt === 'start' ? guide.from : guide.to;
        return (
          <g key={guide.id}>
            <line x1={x(guide.from[0])} y1={y(guide.from[1])} x2={x(guide.to[0])} y2={y(guide.to[1])} stroke={colour(guide.tone)} strokeWidth={1.2} strokeDasharray={guide.dashed === false ? undefined : '4 3'} />
            {guide.label && (
              <text x={x(at[0]) + 4} y={y(at[1]) - 5} fontSize={11} fill="currentColor" stroke="var(--color-card)" strokeWidth={3} paintOrder="stroke">{guide.label[lang]}</text>
            )}
          </g>
        );
      })}

      {(spec.curves ?? []).map(curve => {
        const last = curve.points[curve.points.length - 1];
        const before = curve.points[curve.points.length - 2];
        // The label sits right of the end point. Near the right edge it moves left of the point, so it stays in the picture:
        // below the point for a falling curve (the space under it is free), above it otherwise.
        const nearEdge = last !== undefined && x(last[0]) > W - RIGHT - 24;
        const falling = last !== undefined && before !== undefined && last[1] < before[1];
        const below = nearEdge && falling && y(last[1]) < TOP + plotHeight - 16;
        return (
          <g key={curve.id}>
            <polyline points={path(curve.points)} fill="none" stroke={colour(curve.tone)} strokeWidth={curve.width ?? 2.5} strokeDasharray={curve.dashed ? '6 4' : undefined} strokeLinejoin="round" />
            {curve.label && last && (
              <text x={nearEdge ? x(last[0]) - 6 : x(last[0]) + 6} y={below ? y(last[1]) + 14 : y(last[1]) - 6} textAnchor={nearEdge ? 'end' : undefined} fontSize={12} fontWeight={600} fill="currentColor" stroke="var(--color-card)" strokeWidth={3} paintOrder="stroke">{curve.label[lang]}</text>
            )}
          </g>
        );
      })}

      {(spec.marks ?? []).map(mark => (
        <g key={mark.id}>
          {mark.dot !== false && <circle cx={x(mark.at[0])} cy={y(mark.at[1])} r={4} fill={colour(mark.tone)} stroke="var(--color-card)" strokeWidth={1.5} />}
          {mark.label && (
            <text x={x(mark.at[0]) + (mark.dx ?? 6)} y={y(mark.at[1]) + (mark.dy ?? -7)} fontSize={12} fill="currentColor" stroke="var(--color-card)" strokeWidth={3} paintOrder="stroke">{mark.label[lang]}</text>
          )}
        </g>
      ))}
    </svg></GraphViewport>
  );
}

export interface StepText { title: L; text: L }

// Build-up frame: the figure, the step text (read out by screen readers) and Back / Next / Start again.
// children(index) draws the picture for the current step. Use it directly for diagrams that are not a Graph.
export function StepFrame({ lang, label, steps, children }: { lang: Lang; label: L; steps: StepText[]; children: (index: number) => ReactNode }) {
  const [index, setIndex] = useState(0);
  const current = Math.min(index, steps.length - 1);
  const last = steps.length - 1;
  const button = {
    borderRadius: 6,
    border: '1px solid var(--color-border)',
    padding: '4px 12px',
    fontSize: 14,
    background: 'var(--color-card)',
    color: 'var(--color-fg)',
    cursor: 'pointer',
  } as const;

  return (
    <figure style={{ margin: '24px 0', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)', background: 'var(--color-card)', color: 'var(--color-fg)' }}>
      <figcaption style={{ fontWeight: 600, marginBottom: 8 }}>{label[lang]}</figcaption>
      {children(current)}
      <p aria-live="polite" style={{ fontSize: 14, marginTop: 8 }}>
        <strong>{`${UI.step[lang]} ${current + 1} ${UI.of[lang]} ${steps.length}. ${steps[current].title[lang]}.`}</strong> {steps[current].text[lang]}
      </p>
      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
        <button type="button" style={{ ...button, opacity: current === 0 ? 0.4 : 1 }} disabled={current === 0} onClick={() => setIndex(current - 1)}>{UI.back[lang]}</button>
        <button type="button" style={{ ...button, opacity: current === last ? 0.4 : 1 }} disabled={current === last} onClick={() => setIndex(current + 1)}>{UI.next[lang]}</button>
        <button type="button" style={{ ...button, opacity: current === 0 ? 0.4 : 1 }} disabled={current === 0} onClick={() => setIndex(0)}>{UI.restart[lang]}</button>
      </div>
    </figure>
  );
}

// Build-up diagram of a Graph: one GraphSpec per step.
export function StepPlayer({ lang, label, steps }: { lang: Lang; label: L; steps: Step[] }) {
  return (
    <StepFrame lang={lang} label={label} steps={steps}>
      {index => <Graph spec={steps[index].graph} lang={lang} label={`${label[lang]}: ${steps[index].title[lang]}`} />}
    </StepFrame>
  );
}

// A labelled range input for diagrams that also take a parameter, such as a tax rate.
export function Slider({ lang, label, min, max, step, value, unit, onChange }: { lang: Lang; label: L; min: number; max: number; step: number; value: number; unit?: string; onChange: (value: number) => void }) {
  const id = useId();
  return (
    <div style={{ fontSize: 14, marginBottom: 8 }}>
      <label htmlFor={id}>{label[lang]}: <strong>{`${value}${unit ?? ''}`}</strong></label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={event => onChange(Number(event.target.value))} style={{ width: '100%', display: 'block' }} />
    </div>
  );
}
