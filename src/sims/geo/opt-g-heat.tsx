import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative model, not data. A transect runs from the suburbs (x = 0) to the city centre (x = 1).
// The suburb values below are fixed assumptions; the centre values come from the sliders, and points between are linear.
const SUBURB = { density: 0.1, green: 0.6, albedo: 0.25 };
const STRENGTH = 10;   // assumption: scale of the heat term in degrees Celsius
const STEPS = 10;      // transect points

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

  const suburbHeat = heatTerm(SUBURB.density, SUBURB.green, SUBURB.albedo);
  const factor = windFactor(wind);
  const profile = Array.from({ length: STEPS + 1 }, (_, i) => {
    const x = i / STEPS;
    const d = SUBURB.density + (density / 100 - SUBURB.density) * x;
    const g = SUBURB.green + (green / 100 - SUBURB.green) * x;
    const a = SUBURB.albedo + (albedo / 100 - SUBURB.albedo) * x;
    return { x, dT: STRENGTH * factor * (heatTerm(d, g, a) - suburbHeat) };
  });
  const peak = Math.max(...profile.map(point => point.dT));
  const low = Math.min(0, ...profile.map(point => point.dT));

  const yMin = Math.min(0, low);
  const yMax = Math.max(1, peak * 1.15);
  const xOf = (x: number): number => LEFT + x * (RIGHT - LEFT);
  const yOf = (value: number): number => BOTTOM - ((value - yMin) / (yMax - yMin)) * (BOTTOM - TOP);
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
    ? 'Профиль теплового острова от пригорода к центру'
    : 'Heat-island profile from the suburbs to the centre';

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
        {ru ? 'Тепловой остров относительно пригорода: ' : 'Heat-island intensity relative to the suburbs: '}
        <strong>{fmt(peak)} °C</strong>
      </p>

      <svg viewBox="0 0 320 180" width="100%" role="img" aria-label={label} style={{ display: 'block', maxWidth: 360 }}>
        <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        <line x1={LEFT} y1={zeroY} x2={RIGHT} y2={zeroY} stroke="currentColor" strokeWidth={1} strokeDasharray="4 3" />
        <text x={LEFT - 6} y={zeroY + 4} fontSize="10" textAnchor="end" fill="currentColor">0</text>
        <text x={LEFT - 6} y={TOP + 8} fontSize="10" textAnchor="end" fill="currentColor">{fmt(yMax, 0)}</text>
        <polyline points={line} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round" />
        <text x={LEFT} y={170} fontSize="11" fill="currentColor">{ru ? 'Пригород' : 'Suburbs'}</text>
        <text x={RIGHT} y={170} fontSize="11" textAnchor="end" fill="currentColor">{ru ? 'Центр' : 'Centre'}</text>
      </svg>

      <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Допущения: пригород фиксирован (застройка 10%, растительность 60%, альбедо 25%). Тепловой член = застройка × (1 − растительность) × (1 − альбедо). Разность температур = 10 °C × (тепловой член − тепловой член пригорода) × 1 / (1 + ветер / 4). График показывает разность относительно пригорода по профилю. Масштаб 10 °C и ветровой множитель 1 / (1 + ветер / 4) — условные значения, не откалиброванные по измерениям.'
          : 'Assumptions: the suburb is fixed (density 10%, vegetation 60%, albedo 25%). Heat term = density × (1 − vegetation) × (1 − albedo). Temperature difference = 10 °C × (heat term − suburb heat term) × 1 / (1 + wind / 4). The chart shows the difference from the suburbs along the transect. The 10 °C scale and the wind factor 1 / (1 + wind / 4) are illustrative values, not calibrated to measurements.'}
      </p>
    </div>
  );
}
