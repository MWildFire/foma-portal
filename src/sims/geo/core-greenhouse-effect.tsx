import { useState } from 'react';
import type { Lang } from '../../contract/types';

// A simplified energy balance, not a forecast. Pre-industrial CO₂ is taken as 280 ppm (1750).
// Forcing: ΔF = 5.35 × ln(C ÷ C₀) W/m², the standard simplified expression.
// Warming: ΔT = S × log₂(C ÷ C₀), with a climate sensitivity S = 3 °C per doubling of CO₂ (IPCC AR6 best estimate;
// likely range 2.5–4 °C). It is the equilibrium value for CO₂ alone, before ocean lag and other forcings.
const C0 = 280;
const SENSITIVITY = 3;
const SOLAR = 340; // W/m², global average incoming solar radiation (the solar constant divided by 4)
const BAR = 360;

export default function GreenhouseEffect({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [co2, setCo2] = useState(420);
  const [albedo, setAlbedo] = useState(0.3);

  const forcing = 5.35 * Math.log(co2 / C0);
  const warming = SENSITIVITY * Math.log2(co2 / C0);
  const absorbed = (1 - albedo) * SOLAR;
  const reflected = albedo * SOLAR;
  const title = ru ? 'Парниковый эффект и радиационное воздействие' : 'Greenhouse effect and radiative forcing';

  return (
    <div>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <label style={{ display: 'block' }}>
          {ru ? 'Концентрация CO₂: ' : 'CO₂ concentration: '}<strong>{co2} ppm</strong>
          <input type="range" min={280} max={560} step={5} value={co2} onChange={event => setCo2(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'block' }}>
          {ru ? 'Альбедо поверхности: ' : 'Surface albedo: '}<strong>{albedo.toFixed(2)}</strong>
          <input type="range" min={0.2} max={0.4} step={0.01} value={albedo} onChange={event => setAlbedo(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
      </div>
      <svg role="img" aria-label={title} viewBox="0 0 400 74" width="100%" style={{ maxWidth: 520, display: 'block', marginTop: 16 }}>
        <rect x={0} y={20} width={albedo * BAR} height={30} fill="#9aa5ad" />
        <rect x={albedo * BAR} y={20} width={(1 - albedo) * BAR} height={30} fill="#d9822b" />
        <text x={(albedo * BAR) / 2} y={40} textAnchor="middle" fontSize="12" fill="#1d1d1d">{ru ? 'отражено' : 'reflected'} {reflected.toFixed(0)}</text>
        <text x={albedo * BAR + ((1 - albedo) * BAR) / 2} y={40} textAnchor="middle" fontSize="12" fill="#1d1d1d">{ru ? 'поглощено' : 'absorbed'} {absorbed.toFixed(0)}</text>
        <text x={0} y={70} fontSize="11" fill="currentColor">{ru ? 'Входящая солнечная радиация в среднем около 340 Вт/м²' : 'Average incoming solar radiation is about 340 W/m²'}</text>
      </svg>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>
          {ru ? 'Радиационное воздействие CO₂: ΔF = 5,35 × ln(' : 'Radiative forcing of CO₂: ΔF = 5.35 × ln('}
          {co2} ÷ {C0}) = <strong>{forcing.toFixed(2)} W/m²</strong>
        </li>
        <li>
          {ru ? 'Равновесное потепление от CO₂ (без учёта других факторов): ΔT = 3 × log₂(' : 'Equilibrium warming from CO₂ alone: ΔT = 3 × log₂('}
          {co2} ÷ {C0}) = <strong>{warming.toFixed(1)} °C</strong>
        </li>
        <li>
          {ru ? 'Поглощённая солнечная энергия: (1 − ' : 'Absorbed sunlight: (1 − '}
          {albedo.toFixed(2)}) × 340 = <strong>{absorbed.toFixed(0)} W/m²</strong>
          {ru ? '. Изменение альбедо на 0,01 меняет поглощение примерно на 3,4 Вт/м².' : '. A change of 0.01 in albedo changes absorbed energy by about 3.4 W/m².'}
        </li>
      </ul>
      <p style={{ marginTop: 10 }}>
        {ru
          ? 'Без парникового эффекта средняя температура поверхности Земли была бы около −18 °C, а фактически около 15 °C. Парниковые газы задерживают часть длинноволнового излучения.'
          : 'Without the greenhouse effect the average surface temperature would be about −18 °C; the actual average is about 15 °C. Greenhouse gases trap part of the outgoing longwave radiation.'}
      </p>
      <p style={{ fontSize: 14 }}>
        <strong>{ru ? 'Обратные связи' : 'Feedbacks'}:</strong>{' '}
        {ru
          ? 'водяной пар усиливает потепление (+); таяние льда открывает тёмную поверхность и усиливает поглощение (+); облака неоднозначны и дают самую большую неопределённость; таяние мерзлоты выделяет метан и CO₂ (+); ослабление поглотителей углерода оставляет больше CO₂ в воздухе (+).'
          : 'water vapour amplifies warming (+); melting ice exposes darker surfaces that absorb more sunlight (+); clouds are ambiguous and carry the largest uncertainty; thawing permafrost releases methane and CO₂ (+); weaker carbon sinks leave more CO₂ in the air (+).'}
      </p>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Модель упрощённая. Источник: IPCC AR6 WG1 (2021): климатическая чувствительность, наилучшая оценка 3 °C, вероятный диапазон 2,5–4 °C.'
          : 'The model is simplified. Source: IPCC AR6 WG1 (2021): climate sensitivity best estimate 3 °C, likely range 2.5–4 °C.'}
      </p>
    </div>
  );
}
