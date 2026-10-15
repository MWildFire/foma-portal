import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// A simplified energy balance, not a forecast. Pre-industrial CO₂ is rounded to 280 ppm; the 1750 value is about 278 ppm
// (NOAA composite 277.6 ppm).
// Forcing: ΔF = 5.35 × ln(C ÷ C₀) W/m², the standard simplified expression.
// Warming: ΔT = S × log₂(C ÷ C₀), with a climate sensitivity S = 3 °C per doubling of CO₂ (IPCC AR6 best estimate;
// likely range 2.5–4 °C). It is the equilibrium value for CO₂ alone, before ocean lag and other forcings.
// The albedo here is the planetary albedo of the whole Earth (clouds, atmosphere and surface together), about 0.30 (IPCC AR6 WG1, ch. 7, fig. 7.2).
const C0 = 280;
const SENSITIVITY = 3;
const SOLAR = 340; // W/m², global average incoming solar radiation (the solar constant divided by 4)
const ARROW_SCALE = 1.5; // SVG units of arrow width per W/m² of forcing (display only)

export default function GreenhouseEffect({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [co2, setCo2] = useState(420);
  const [albedo, setAlbedo] = useState(0.3);

  const forcing = 5.35 * Math.log(co2 / C0);
  const warming = SENSITIVITY * Math.log2(co2 / C0);
  const absorbed = (1 - albedo) * SOLAR;
  const reflected = albedo * SOLAR;
  const title = ru ? 'Парниковый эффект и радиационное воздействие' : 'Greenhouse effect and radiative forcing';
  const unitFlux = ru ? 'Вт/м²' : 'W/m²';
  // Decimal comma in Russian.
  const num = (value: number, digits: number): string => {
    const text = value.toFixed(digits);
    return ru ? text.replace('.', ',') : text;
  };
  // The back-radiation arrow gets thicker as the greenhouse forcing grows.
  const backWidth = 2 + ARROW_SCALE * Math.max(forcing, 0);

  return (
    <div>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <label style={{ display: 'block' }}>
          {ru ? 'Концентрация CO₂: ' : 'CO₂ concentration: '}<strong>{co2} ppm</strong>
          <input type="range" min={280} max={560} step={5} value={co2} onChange={event => setCo2(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'block' }}>
          {ru ? 'Альбедо Земли (планетарное): ' : 'Planetary albedo (whole Earth): '}<strong>{num(albedo, 2)}</strong>
          <input type="range" min={0.2} max={0.4} step={0.01} value={albedo} onChange={event => setAlbedo(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
      </div>
      <ReadableDiagram lang={lang}><svg role="img" aria-label={title} viewBox="0 0 400 190" width="100%" style={{ maxWidth: 520, display: 'block', marginTop: 16 }}>
        <defs>
          <marker id="greenhouse-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
        {/* sunlight in; part reflected back to space, part absorbed by the surface */}
        <line x1={200} y1={4} x2={200} y2={52} stroke="currentColor" strokeWidth={2} markerEnd="url(#greenhouse-arrow)" />
        <text x={208} y={14} fontSize="11" fill="currentColor">{ru ? 'входящая солнечная' : 'incoming sunlight'}</text>
        <text x={208} y={27} fontSize="11" fill="currentColor">{`${num(SOLAR, 0)} ${unitFlux}`}</text>
        <line x1={110} y1={52} x2={110} y2={4} stroke="currentColor" strokeWidth={2} markerEnd="url(#greenhouse-arrow)" />
        <text x={104} y={28} fontSize="11" textAnchor="end" fill="currentColor">{`${ru ? 'отражено' : 'reflected'} ${num(reflected, 0)}`}</text>
        <line x1={300} y1={52} x2={300} y2={150} stroke="currentColor" strokeWidth={2} markerEnd="url(#greenhouse-arrow)" />
        <text x={308} y={112} fontSize="11" fill="currentColor">{`${ru ? 'поглощено' : 'absorbed'} ${num(absorbed, 0)}`}</text>
        {/* the greenhouse layer: it takes up longwave radiation from the surface and sends part of it back down */}
        <rect x={20} y={64} width={360} height={22} fill="currentColor" opacity={0.12} />
        <text x={28} y={79} fontSize="11" fill="currentColor">{ru ? 'парниковый слой (CO₂, водяной пар, метан)' : 'greenhouse layer (CO₂, water vapour, methane)'}</text>
        {/* longwave out to space balances the absorbed sunlight at equilibrium */}
        <line x1={340} y1={62} x2={340} y2={4} stroke="currentColor" strokeWidth={2} markerEnd="url(#greenhouse-arrow)" />
        <text x={332} y={44} fontSize="11" textAnchor="end" fill="currentColor">{ru ? 'уходящее длинноволновое' : 'outgoing longwave'}</text>
        {/* the surface emits longwave radiation upwards */}
        <line x1={60} y1={150} x2={60} y2={86} stroke="currentColor" strokeWidth={2} markerEnd="url(#greenhouse-arrow)" />
        <text x={66} y={122} fontSize="10" fill="currentColor">{ru ? 'излучение поверхности' : 'surface longwave'}</text>
        {/* back radiation: its width grows with the CO₂ forcing */}
        <line x1={170} y1={86} x2={170} y2={150} stroke="currentColor" strokeWidth={backWidth} markerEnd="url(#greenhouse-arrow)" />
        <text x={178} y={112} fontSize="10" fill="currentColor">{ru ? 'возврат излучения' : 'back radiation'}</text>
        <text x={178} y={126} fontSize="10" fill="currentColor">{`ΔF ${num(forcing, 2)} ${unitFlux}`}</text>
        {/* the surface */}
        <rect x={20} y={150} width={360} height={18} fill="currentColor" opacity={0.25} />
        <text x={28} y={163} fontSize="11" fill="currentColor">{ru ? 'поверхность Земли' : 'Earth’s surface'}</text>
      </svg></ReadableDiagram>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>
          {ru ? 'Радиационное воздействие CO₂: ΔF = 5,35 × ln(' : 'Radiative forcing of CO₂: ΔF = 5.35 × ln('}
          {co2} ÷ {C0}) = <strong>{num(forcing, 2)} {unitFlux}</strong>
        </li>
        <li>
          {ru ? 'Равновесное потепление от CO₂ (без учёта других факторов): ΔT = 3 × log₂(' : 'Equilibrium warming from CO₂ alone: ΔT = 3 × log₂('}
          {co2} ÷ {C0}) = <strong>{num(warming, 1)} °C</strong>
        </li>
        <li>
          {ru ? 'Поглощённая солнечная энергия: (1 − ' : 'Absorbed sunlight: (1 − '}
          {num(albedo, 2)}) × 340 = <strong>{num(absorbed, 0)} {unitFlux}</strong>
          {ru ? '. Изменение альбедо на 0,01 меняет поглощение примерно на 3,4 Вт/м².' : '. A change of 0.01 in albedo changes absorbed energy by about 3.4 W/m².'}
        </li>
      </ul>
      <p style={{ marginTop: 10 }}>
        {ru
          ? 'Без парникового эффекта средняя температура поверхности Земли была бы около −18 °C, а фактически около 15 °C. Парниковые газы задерживают часть длинноволнового излучения, которое поверхность отдаёт вверх, и возвращают часть его вниз.'
          : 'Without the greenhouse effect the average surface temperature would be about −18 °C; the actual average is about 15 °C. Greenhouse gases trap part of the outgoing longwave radiation that the surface emits, and send part of it back down.'}
      </p>
      <p style={{ fontSize: 14 }}>
        <strong>{ru ? 'Обратные связи' : 'Feedbacks'}:</strong>{' '}
        {ru
          ? 'водяной пар усиливает потепление (+); таяние льда открывает тёмную поверхность и усиливает поглощение (+); облака в целом усиливают потепление (AR6, высокая уверенность), но дают самую большую неопределённость; таяние мерзлоты выделяет метан и CO₂ (+); ослабление поглотителей углерода оставляет больше CO₂ в воздухе (+).'
          : 'water vapour amplifies warming (+); melting ice exposes darker surfaces that absorb more sunlight (+); clouds amplify warming on balance (AR6, high confidence) but carry the largest uncertainty; thawing permafrost releases methane and CO₂ (+); weaker carbon sinks leave more CO₂ in the air (+).'}
      </p>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Модель упрощённая. Доиндустриальная концентрация CO₂ округлена до 280 ppm (около 278 ppm в 1750 г. по данным NOAA). Источник: IPCC AR6 WG1 (2021): климатическая чувствительность, наилучшая оценка 3 °C, вероятный диапазон 2,5–4 °C.'
          : 'The model is simplified. Pre-industrial CO₂ is rounded to 280 ppm (about 278 ppm in 1750 by NOAA). Source: IPCC AR6 WG1 (2021): climate sensitivity best estimate 3 °C, likely range 2.5–4 °C.'}
      </p>
    </div>
  );
}
