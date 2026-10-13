import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative models of urban structure: Burgess (1925), Hoyt (1939), Harris and Ullman (1945), Griffin and Ford (1980).
// Schematic diagrams only: no data and no network requests. Angles are in degrees, clockwise from north.

type ModelId = 'burgess' | 'hoyt' | 'harris' | 'latin';
type Bilingual = { en: string; ru: string };

type Shape =
  | { kind: 'circle'; r: number; color: string }
  | { kind: 'wedge'; r: number; from: number; to: number; color: string }
  | { kind: 'band'; outer: number; inner: number; from: number; to: number; color: string }
  | { kind: 'spoke'; r: number; angle: number; color: string; width: number; dashed?: boolean }
  | { kind: 'node'; dist: number; angle: number; r: number; color: string };

interface LegendItem { color: string; label: Bilingual; dashed?: boolean }

interface Scene {
  id: ModelId;
  name: Bilingual;
  title: Bilingual;
  note: Bilingual;
  shapes: Shape[];
  legend: LegendItem[];
}

const CX = 110;
const CY = 130;

const COLOR = {
  cbd: '#d62828',
  transition: '#f77f00',
  working: '#fcbf49',
  better: '#90be6d',
  commuter: '#9ecae1',
  high: '#2a9d8f',
  medium: '#8ab17d',
  low: '#e9c46a',
  middle: '#f4a261',
  industry: '#6d6875',
  university: '#457b9d',
  airport: '#adb5bd',
  retail: '#e76f51',
  axis: '#e76f51',
  informal: '#bc4b51',
  base: '#dee2e6',
};

function polar(radius: number, degrees: number): { x: number; y: number } {
  const rad = ((degrees - 90) * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

const fmt = (value: number): string => value.toFixed(1);

function wedgePath(r: number, from: number, to: number): string {
  const a = polar(r, from);
  const b = polar(r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M ${CX} ${CY} L ${fmt(a.x)} ${fmt(a.y)} A ${r} ${r} 0 ${large} 1 ${fmt(b.x)} ${fmt(b.y)} Z`;
}

function bandPath(outer: number, inner: number, from: number, to: number): string {
  const a = polar(outer, from);
  const b = polar(outer, to);
  const c = polar(inner, to);
  const d = polar(inner, from);
  const large = to - from > 180 ? 1 : 0;
  return [
    `M ${fmt(a.x)} ${fmt(a.y)}`,
    `A ${outer} ${outer} 0 ${large} 1 ${fmt(b.x)} ${fmt(b.y)}`,
    `L ${fmt(c.x)} ${fmt(c.y)}`,
    `A ${inner} ${inner} 0 ${large} 0 ${fmt(d.x)} ${fmt(d.y)}`,
    'Z',
  ].join(' ');
}

function drawShape(shape: Shape, key: number) {
  if (shape.kind === 'circle') {
    return <circle key={key} cx={CX} cy={CY} r={shape.r} fill={shape.color} fillOpacity={0.85} stroke="currentColor" strokeOpacity={0.35} />;
  }
  if (shape.kind === 'wedge') {
    return <path key={key} d={wedgePath(shape.r, shape.from, shape.to)} fill={shape.color} fillOpacity={0.85} stroke="currentColor" strokeOpacity={0.35} />;
  }
  if (shape.kind === 'band') {
    return <path key={key} d={bandPath(shape.outer, shape.inner, shape.from, shape.to)} fill={shape.color} fillOpacity={0.85} stroke="currentColor" strokeOpacity={0.35} />;
  }
  if (shape.kind === 'spoke') {
    const end = polar(shape.r, shape.angle);
    return (
      <line
        key={key}
        x1={CX}
        y1={CY}
        x2={fmt(end.x)}
        y2={fmt(end.y)}
        stroke={shape.color}
        strokeWidth={shape.width}
        strokeLinecap="round"
        strokeDasharray={shape.dashed ? '5 4' : undefined}
      />
    );
  }
  const at = polar(shape.dist, shape.angle);
  return <circle key={key} cx={fmt(at.x)} cy={fmt(at.y)} r={shape.r} fill={shape.color} fillOpacity={0.9} stroke="currentColor" strokeOpacity={0.35} />;
}

const SCENES: Scene[] = [
  {
    id: 'burgess',
    name: { en: 'Burgess (1925)', ru: 'Берджесс (1925)' },
    title: { en: 'Concentric zones', ru: 'Концентрические зоны' },
    note: {
      en: 'Land values and rents fall with distance from the CBD, because the most accessible land is the most expensive. Older housing and the highest turnover of residents sit in the zone in transition, and commuters live in the outer ring.',
      ru: 'Цены на землю и арендная плата падают по мере удаления от ЦДР, потому что самая доступная земля самая дорогая. Старое жильё и самая высокая смена жильцов находятся в зоне перехода, а пригородные жители живут во внешнем кольце.',
    },
    shapes: [
      { kind: 'circle', r: 110, color: COLOR.commuter },
      { kind: 'circle', r: 92, color: COLOR.better },
      { kind: 'circle', r: 70, color: COLOR.working },
      { kind: 'circle', r: 44, color: COLOR.transition },
      { kind: 'circle', r: 18, color: COLOR.cbd },
    ],
    legend: [
      { color: COLOR.cbd, label: { en: 'CBD', ru: 'ЦДР (CBD)' } },
      { color: COLOR.transition, label: { en: 'Zone in transition', ru: 'Зона перехода' } },
      { color: COLOR.working, label: { en: 'Working-class homes', ru: 'Жильё рабочих' } },
      { color: COLOR.better, label: { en: 'Better residential', ru: 'Лучшие жилые районы' } },
      { color: COLOR.commuter, label: { en: 'Commuter zone', ru: 'Зона пригородов' } },
    ],
  },
  {
    id: 'hoyt',
    name: { en: 'Hoyt (1939)', ru: 'Хойт (1939)' },
    title: { en: 'Sectors along transport routes', ru: 'Секторы вдоль транспортных путей' },
    note: {
      en: 'Rent is highest in the high-rent sector, which keeps its direction as the city grows along the transport routes. Industry follows rail and road corridors, and low-rent housing fills the sectors with older homes.',
      ru: 'Арендная плата выше всего в секторе дорогого жилья, который сохраняет направление по мере роста города вдоль транспортных путей. Промышленность тянется вдоль железнодорожных и автомобильных коридоров, а дешёвое жильё занимает сектора со старыми домами.',
    },
    shapes: [
      { kind: 'wedge', r: 110, from: 300, to: 360, color: COLOR.high },
      { kind: 'wedge', r: 110, from: 0, to: 120, color: COLOR.medium },
      { kind: 'wedge', r: 110, from: 120, to: 180, color: COLOR.industry },
      { kind: 'wedge', r: 110, from: 180, to: 300, color: COLOR.low },
      { kind: 'spoke', r: 110, angle: 30, color: 'currentColor', width: 2, dashed: true },
      { kind: 'spoke', r: 110, angle: 150, color: 'currentColor', width: 2, dashed: true },
      { kind: 'spoke', r: 110, angle: 240, color: 'currentColor', width: 2, dashed: true },
      { kind: 'circle', r: 18, color: COLOR.cbd },
    ],
    legend: [
      { color: COLOR.cbd, label: { en: 'CBD', ru: 'ЦДР (CBD)' } },
      { color: COLOR.high, label: { en: 'High-rent housing', ru: 'Дорогое жильё' } },
      { color: COLOR.medium, label: { en: 'Middle-rent housing', ru: 'Среднее жильё' } },
      { color: COLOR.low, label: { en: 'Low-rent housing', ru: 'Дешёвое жильё' } },
      { color: COLOR.industry, label: { en: 'Industry', ru: 'Промзона' } },
      { color: 'currentColor', label: { en: 'Transport route', ru: 'Транспортная ось' }, dashed: true },
    ],
  },
  {
    id: 'harris',
    name: { en: 'Harris and Ullman (1945)', ru: 'Харрис и Ульман (1945)' },
    title: { en: 'Multiple nuclei', ru: 'Несколько ядер' },
    note: {
      en: 'Land values peak at each nucleus, not only at the CBD. Industry, residence and services cluster around separate centres, so the city has no single gradient of land values.',
      ru: 'Пики цен на землю находятся у каждого ядра, а не только в ЦДР. Промышленность, жильё и услуги группируются вокруг отдельных центров, поэтому у города нет единого градиента цен.',
    },
    shapes: [
      { kind: 'circle', r: 110, color: COLOR.base },
      { kind: 'node', dist: 70, angle: 70, r: 18, color: COLOR.industry },
      { kind: 'node', dist: 75, angle: 200, r: 22, color: COLOR.high },
      { kind: 'node', dist: 58, angle: 320, r: 12, color: COLOR.university },
      { kind: 'node', dist: 92, angle: 130, r: 14, color: COLOR.airport },
      { kind: 'node', dist: 88, angle: 265, r: 12, color: COLOR.retail },
      { kind: 'circle', r: 18, color: COLOR.cbd },
    ],
    legend: [
      { color: COLOR.cbd, label: { en: 'CBD', ru: 'ЦДР (CBD)' } },
      { color: COLOR.industry, label: { en: 'Industry', ru: 'Промзона' } },
      { color: COLOR.high, label: { en: 'Residential', ru: 'Жилой район' } },
      { color: COLOR.university, label: { en: 'University', ru: 'Университет' } },
      { color: COLOR.airport, label: { en: 'Airport', ru: 'Аэропорт' } },
      { color: COLOR.retail, label: { en: 'Retail park', ru: 'Торговый парк' } },
    ],
  },
  {
    id: 'latin',
    name: { en: 'Latin American city (Griffin and Ford, 1980)', ru: 'Латиноамериканский город (Гриффин и Форд, 1980)' },
    title: { en: 'Latin American city model', ru: 'Модель латиноамериканского города' },
    note: {
      en: 'The elite sector sits on the commercial axis, so high land values run out from the CBD along it. Housing quality falls with distance from the centre, and informal settlements take the cheapest land at the edge.',
      ru: 'Элитный сектор примыкает к коммерческой оси, поэтому высокие цены на землю тянутся от ЦДР вдоль неё. Качество жилья падает по мере удаления от центра, а неформальные поселения занимают самую дешёвую землю на окраине.',
    },
    shapes: [
      { kind: 'circle', r: 110, color: COLOR.low },
      { kind: 'circle', r: 80, color: COLOR.middle },
      { kind: 'circle', r: 50, color: COLOR.better },
      { kind: 'wedge', r: 110, from: 60, to: 120, color: COLOR.high },
      { kind: 'band', outer: 110, inner: 80, from: 200, to: 290, color: COLOR.informal },
      { kind: 'spoke', r: 110, angle: 90, color: COLOR.axis, width: 6 },
      { kind: 'circle', r: 18, color: COLOR.cbd },
    ],
    legend: [
      { color: COLOR.cbd, label: { en: 'CBD', ru: 'ЦДР (CBD)' } },
      { color: COLOR.high, label: { en: 'Elite sector', ru: 'Элитный сектор' } },
      { color: COLOR.axis, label: { en: 'Commercial axis', ru: 'Коммерческая ось' } },
      { color: COLOR.better, label: { en: 'Better housing', ru: 'Лучшее жильё' } },
      { color: COLOR.low, label: { en: 'Poorer housing', ru: 'Более бедное жильё' } },
      { color: COLOR.informal, label: { en: 'Informal settlements', ru: 'Неформальные районы' } },
    ],
  },
];

export default function OptGModels(p: { lang: Lang }) {
  const ru = p.lang === 'ru';
  const [modelId, setModelId] = useState<ModelId>('burgess');
  const scene = SCENES.find(item => item.id === modelId) ?? SCENES[0];
  const t = (value: Bilingual): string => (ru ? value.ru : value.en);

  return (
    <figure style={{ margin: 0, maxWidth: '100%', boxSizing: 'border-box' }}>
      <div
        role="group"
        aria-label={ru ? 'Выбор модели' : 'Choose a model'}
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}
      >
        {SCENES.map(item => {
          const active = item.id === scene.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setModelId(item.id)}
              style={{
                minHeight: 44,
                maxWidth: '100%',
                padding: '8px 12px',
                borderRadius: 8,
                border: '1px solid currentColor',
                background: active ? 'rgba(127, 127, 127, 0.25)' : 'transparent',
                color: 'inherit',
                font: 'inherit',
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              {t(item.name)}
            </button>
          );
        })}
      </div>
      <svg
        viewBox="0 0 400 260"
        role="img"
        aria-label={t(scene.title)}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      >
        {scene.shapes.map((shape, index) => drawShape(shape, index))}
        {scene.legend.map((item, index) => {
          const y = 30 + index * 36;
          return (
            <g key={`legend-${index}`}>
              {item.dashed ? (
                <line x1={236} y1={y} x2={254} y2={y} stroke={item.color} strokeWidth={2} strokeDasharray="5 4" />
              ) : (
                <rect x={236} y={y - 8} width={18} height={16} rx={3} fill={item.color} fillOpacity={0.85} />
              )}
              <text x={260} y={y + 4} fontSize={12} fill="currentColor">
                {t(item.label)}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption style={{ marginTop: 12 }}>
        <strong>{t(scene.title)}</strong>
        <p style={{ margin: '6px 0' }}>{t(scene.note)}</p>
        <p style={{ margin: '6px 0', fontStyle: 'italic' }}>
          {ru
            ? 'Иллюстративная модель: упрощённая схема, а не карта реального города.'
            : 'Illustrative model: a simplified diagram, not a map of any real city.'}
        </p>
      </figcaption>
    </figure>
  );
}
