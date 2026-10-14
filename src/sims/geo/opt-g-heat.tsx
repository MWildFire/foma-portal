import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative model, not data. A transect runs from the rural edge (x = 0) to the city centre (x = 1).
// The rural values below are fixed assumptions; the centre values come from the sliders, and points between are linear.
const RURAL = { density: 0.05, green: 0.8, albedo: 0.22 };
const STRENGTH = 10;   // assumption: scale of the heat term in degrees Celsius
const STEPS = 10;      // transect points
// The vertical scale is fixed, so the curve moves when the sliders move. The largest value the model can reach is about 9.4 °C.
const Y_MIN = -1;
const Y_MAX = 10;
const TICKS = [0, 2, 4, 6, 8, 10];

// Heat term: dense, dark, sealed surfaces with little vegetation hold more heat (assumption).
const heatTerm = (density: number, green: number, albedo: number): number => density * (1 - green) * (1 - albedo);

// Wind mixes the air and weakens the heat island (assumption).
const windFactor = (wind: number): number => 1 / (1 + wind / 4);

const LEFT = 40;
const RIGHT = 312;
const TOP = 12;
const BOTTOM = 150;

export default function OptGHeatSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [green, setGreen] = useState(15);
  const [albedo, setAlbedo] = useState(12);
  const [density, setDensity] = useState(80);
  const [wind, setWind] = useState(2);

  const ruralHeat = heatTerm(RURAL.density, RURAL.green, RURAL.albedo);
  const factor = windFactor(wind);
  const profile = Array.from({ length: STEPS + 1 }, (_, i) => {
    const x = i / STEPS;
    const d = RURAL.density + (density / 100 - RURAL.density) * x;
    const g = RURAL.green + (green / 100 - RURAL.green) * x;
    const a = RURAL.albedo + (albedo / 100 - RURAL.albedo) * x;
    return { x, dT: STRENGTH * factor * (heatTerm(d, g, a) - ruralHeat) };
  });
  // The intensity of the heat island is the temperature at the centre (last point) relative to the rural edge.
  const centre = profile[STEPS].dT;

  const xOf = (x: number): number => LEFT + x * (RIGHT - LEFT);
  const yOf = (value: number): number => BOTTOM - ((value - Y_MIN) / (Y_MAX - Y_MIN)) * (BOTTOM - TOP);
  const line = profile.map(point => `${xOf(point.x).toFixed(1)},${yOf(point.dT).toFixed(1)}`).join(' ');
  const zeroY = yOf(0);

  const fmt = (value: number, digits = 1): string => {
    const text = value.toFixed(digits);
    return ru ? text.replace('.', ',') : text;
  };

  const controls: { key: string; min: number; max: number; step: number; value: number; set: (v: number) => void; en: string; ru: string }[] = [
    { key: 'green', min: 0, max: 100, step: 1, value: green, set: setGreen, en: 'Vegetation cover in the centre (%)', ru: 'Растительность в центре (%)' },
    { key: 'albedo', min: 5, max: 50, step: 1, value: albedo, set: setAlbedo, en: 'Albedo of the centre surfaces (%)', ru: 'Альбедо поверхностей в центре (%)' },
    { key: 'density', min: 0, max: 100, step: 1, value: density, set: setDensity, en: 'Built-up density in the centre (%)', ru: 'Плотность застройки в центре (%)' },
    { key: 'wind', min: 0, max: 10, step: 0.5, value: wind, set: setWind, en: 'Wind speed (m/s)', ru: 'Скорость ветра (м/с)' },
  ];

  const label = ru
    ? 'Профиль теплового острова от сельской окраины к центру'
    : 'Heat-island profile from the rural edge to the centre';

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {ru ? 'Условная модель, не реальные данные.' : 'Illustrative model, not real data.'}
      </p>

      <div>
        {controls.map(control => (
          <label key={control.key} style={{ display: 'block', marginBottom: 10 }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 14 }}>
              <span>{ru ? control.ru : control.en}</span>
              <strong>{fmt(control.value, control.step < 1 ? 1 : 0)}</strong>
            </span>
            <input
              type="range"
              min={control.min}
              max={control.max}
              step={control.step}
              value={control.value}
              onChange={event => control.set(Number(event.target.value))}
              style={{ width: '100%' }}
            />
          </label>
        ))}
      </div>

      <p style={{ margin: '12px 0 4px', fontSize: 16 }}>
        {ru
          ? 'Интенсивность теплового острова (центр минус сельская окраина): '
          : 'Heat-island intensity (centre minus rural edge): '}
        <strong>{fmt(centre)} °C</strong>
      </p>

      <svg viewBox="0 0 320 180" width="100%" role="img" aria-label={label} style={{ display: 'block', maxWidth: 360 }}>
        {TICKS.map(tick => (
          <g key={tick}>
            <line x1={LEFT} y1={yOf(tick)} x2={RIGHT} y2={yOf(tick)} stroke="currentColor" strokeWidth={1} opacity={0.12} />
            <text x={LEFT - 6} y={yOf(tick) + 4} fontSize="10" textAnchor="end" fill="currentColor">{fmt(tick, 0)}</text>
          </g>
        ))}
        <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        <line x1={LEFT} y1={zeroY} x2={RIGHT} y2={zeroY} stroke="currentColor" strokeWidth={1} strokeDasharray="4 3" />
        <text x={11} y={(TOP + BOTTOM) / 2} fontSize="10" textAnchor="middle" transform={`rotate(-90 11 ${(TOP + BOTTOM) / 2})`} fill="currentColor">
          {ru ? 'Разница температур, °C' : 'Temperature difference, °C'}
        </text>
        <polyline points={line} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round" />
        <text x={LEFT} y={170} fontSize="11" fill="currentColor">{ru ? 'Сельская окраина' : 'Rural edge'}</text>
        <text x={RIGHT} y={170} fontSize="11" textAnchor="end" fill="currentColor">{ru ? 'Центр' : 'Centre'}</text>
      </svg>

      <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Допущения: сельская окраина фиксирована (застройка 5%, растительность 80%, альбедо 22%). Тепловой член = застройка × (1 − растительность) × (1 − альбедо). Разность температур = 10 °C × (тепловой член − тепловой член окраины) × 1 / (1 + ветер / 4). Интенсивность острова — значение в центре относительно сельской окраины. Шкала по вертикали фиксирована: от −1 до 10 °C. Масштаб 10 °C и ветровой множитель 1 / (1 + ветер / 4) — неоткалиброванные учебные константы, не подобранные по измерениям.'
          : 'Assumptions: the rural edge is fixed (density 5%, vegetation 80%, albedo 22%). Heat term = density × (1 − vegetation) × (1 − albedo). Temperature difference = 10 °C × (heat term − rural heat term) × 1 / (1 + wind / 4). The intensity of the island is the value at the centre relative to the rural edge. The vertical scale is fixed at −1 to 10 °C. The 10 °C scale and the wind factor 1 / (1 + wind / 4) are uncalibrated teaching constants, not fitted to measurements.'}
      </p>
    </div>
  );
}
