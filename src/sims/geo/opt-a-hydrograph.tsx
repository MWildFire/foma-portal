import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative teaching model of one storm on a small basin, not data and not a flood forecast.
// (1) NRCS curve-number method: runoff depth Q (mm) from the storm rainfall P (mm).
// (2) NEH 630 ch. 15 lag equation (eq. 15-4a): lag time (h) from the flow-path length, the retention S and the slope.
// (3) Triangular unit hydrograph (NEH 630 ch. 16, eqs 16A-5 to 16A-8): time to peak and an indicative peak discharge (m³/s).
// The rural comparison is the same basin, storm and soil with 0% urban (impermeable) surface.
type Moisture = 'low' | 'medium' | 'high';

interface Outcome { cn: number; runoff: number; lag: number; tp: number; peak: number; tb: number }

const CN_URBAN = 98;   // impervious surfaces: roofs, roads and paved yards (TR-55 1986, Table 2-2a, note 2)
const CN_RURAL = 70;   // pervious land at average moisture: a typical mixed rural value (teaching assumption, not a measurement)
// Base flow before the storm and after it, m³/s: a constant teaching assumption, not a measurement. The storm flow is drawn on top of it.
const BASE_FLOW = 5;

// Curve number of the pervious (rural) land for dry (AMC I), average (AMC II) and wet (AMC III) soil before the storm.
// The dry and wet equations are not printed in TR-55 (1986), which gives the average condition only; they approximate NEH 630 ch. 10, Table 10-1.
// For CN 70 the table gives 51 (dry) and 85 (wet); the equations give 49.5 and 84.3.
const ruralCn = (moisture: Moisture): number => {
  if (moisture === 'low') return (4.2 * CN_RURAL) / (10 - 0.058 * CN_RURAL);
  if (moisture === 'high') return (23 * CN_RURAL) / (10 + 0.13 * CN_RURAL);
  return CN_RURAL;
};

function respond(rain: number, hours: number, urban: number, area: number, slopeDeg: number, moisture: Moisture): Outcome {
  const cn = (1 - urban) * ruralCn(moisture) + urban * CN_URBAN;   // area-weighted curve number
  const s = 25400 / cn - 254;                                       // maximum retention S, mm
  const ia = 0.2 * s;                                               // initial abstraction, mm
  const runoff = rain > ia ? ((rain - ia) ** 2) / (rain + 0.8 * s) : 0;   // runoff depth Q, mm
  const sInches = 1000 / cn - 10;                                   // the same S in inches
  // Flow path L = 1.4 × √A km is an ASSUMPTION of this model (no source); real flow paths are measured on maps.
  const lengthFt = 1.4 * Math.sqrt(area) * 3280.84;                 // flow path L = 1.4 × √A (km), in feet
  const slopePct = 100 * Math.tan((slopeDeg * Math.PI) / 180);      // slope Y, percent
  // NEH 630 ch. 15, eq. 15-4a: lag = l^0.8 (S+1)^0.7 / (1900 Y^0.5), with l in feet, S in inches and Y in percent.
  const lag = (lengthFt ** 0.8 * (sInches + 1) ** 0.7) / (1900 * Math.sqrt(slopePct));  // lag time, h
  // NEH 630 ch. 16, eq. 16A-7: Tp = ΔD/2 + L, here with the whole storm as ΔD (a simplification, see the notes below).
  const tp = hours / 2 + lag;                                       // time from the start of the storm to the peak, h
  // NEH 630 ch. 16, eqs 16A-5 to 16A-8: qp = 484 × A × Q ÷ Tp in US units. Metric: 0.2083 = 484 × 0.0283168 ÷ (2.58999 × 25.4),
  // with A in km², Q in mm and Tp in hours.
  const peak = (0.2083 * area * runoff) / tp;                        // indicative peak discharge, m³/s
  // Triangle base Tb = 2.67 × Tp, from Tr = 1.67 Tp (NEH 630 ch. 16, App. 16A, p. 16A–1).
  return { cn, runoff, lag, tp, peak, tb: 2.67 * tp };
}

// Plot area inside a 320 × 200 viewBox.
const LEFT = 40;
const RIGHT = 300;
const TOP = 18;
const BOTTOM = 150;

export default function OptAHydrographSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [rain, setRain] = useState(50);          // storm rainfall, mm
  const [hours, setHours] = useState(6);         // storm duration, h
  const [urbanPct, setUrbanPct] = useState(30);  // urban (impermeable) surface, %
  const [area, setArea] = useState(25);          // basin area, km²
  const [slope, setSlope] = useState(4);         // mean slope, degrees
  const [moisture, setMoisture] = useState<Moisture>('medium');

  const basin = respond(rain, hours, urbanPct / 100, area, slope, moisture);
  const rural = respond(rain, hours, 0, area, slope, moisture);

  const fmt = (value: number, digits = 1): string => {
    const text = value.toFixed(digits);
    return ru ? text.replace('.', ',') : text;
  };
  const lagChange = Math.round(((basin.lag - rural.lag) / rural.lag) * 100);
  const peakRatio = rural.peak > 0 ? basin.peak / rural.peak : null;
  const unitFlow = ru ? 'м³/с' : 'm³/s';
  const unitH = ru ? 'ч' : 'h';

  const controls: { key: string; min: number; max: number; step: number; value: number; set: (v: number) => void; digits: number; en: string; ru: string }[] = [
    { key: 'rain', min: 10, max: 150, step: 5, value: rain, set: setRain, digits: 0, en: 'Storm rainfall (mm)', ru: 'Осадки за ливень (мм)' },
    { key: 'hours', min: 1, max: 12, step: 1, value: hours, set: setHours, digits: 0, en: 'Storm duration (h)', ru: 'Продолжительность ливня (ч)' },
    { key: 'urban', min: 0, max: 100, step: 5, value: urbanPct, set: setUrbanPct, digits: 0, en: 'Urban (impermeable) surface (%)', ru: 'Городская, водонепроницаемая поверхность (%)' },
    { key: 'area', min: 5, max: 60, step: 1, value: area, set: setArea, digits: 0, en: 'Basin area (km²)', ru: 'Площадь бассейна (км²)' },
    { key: 'slope', min: 0.5, max: 15, step: 0.5, value: slope, set: setSlope, digits: 1, en: 'Mean slope (°)', ru: 'Средний уклон (°)' },
  ];

  // Chart scales: time on the x axis, discharge on the y axis.
  const xMax = Math.max(4, Math.ceil(Math.max(basin.tb, rural.tb) / 2) * 2);
  const yMax = Math.max(1, 1.4 * (BASE_FLOW + Math.max(basin.peak, rural.peak)));
  const xOf = (t: number): number => LEFT + (t / xMax) * (RIGHT - LEFT);
  const yOf = (q: number): number => BOTTOM - (q / yMax) * (BOTTOM - TOP);
  const triangle = (r: Outcome): string => `${xOf(0)},${yOf(BASE_FLOW)} ${xOf(r.tp)},${yOf(BASE_FLOW + r.peak)} ${xOf(r.tb)},${yOf(BASE_FLOW)}`;
  const ticks = Array.from({ length: xMax / 2 + 1 }, (_, i) => i * 2);
  const centre = hours / 2;      // the middle of the rain: the lag starts here
  const yBasinLag = TOP + 14;    // lag markers sit above both curves
  const yRuralLag = TOP + 26;

  const lagMarker = (y: number, r: Outcome, dashed: boolean) => (
    <g>
      <line x1={xOf(centre)} y1={y} x2={xOf(r.tp)} y2={y} stroke="currentColor" strokeWidth={1.2} strokeDasharray={dashed ? '3 2' : undefined} />
      <line x1={xOf(centre)} y1={y - 3} x2={xOf(centre)} y2={y + 3} stroke="currentColor" strokeWidth={1.2} />
      <line x1={xOf(r.tp)} y1={y - 3} x2={xOf(r.tp)} y2={y + 3} stroke="currentColor" strokeWidth={1.2} />
      <text x={xOf(r.tp) + 4} y={y + 3} fontSize="9" fill="currentColor">{`${ru ? 'запаздывание' : 'lag'} ${fmt(r.lag, 2)} ${unitH}`}</text>
    </g>
  );

  const peakMarker = (r: Outcome) => (
    <g>
      <circle cx={xOf(r.tp)} cy={yOf(BASE_FLOW + r.peak)} r={3} fill="currentColor" />
      <text x={xOf(r.tp) + 6} y={yOf(BASE_FLOW + r.peak) + 3} fontSize="10" fill="currentColor">{`+${fmt(r.peak, 1)} ${unitFlow}`}</text>
    </g>
  );

  const outputRows = [
    { en: 'Curve number CN', ru: 'Номер кривой стока CN', a: fmt(basin.cn, 0), b: fmt(rural.cn, 0) },
    { en: 'Runoff depth from the storm (mm)', ru: 'Глубина стока от ливня (мм)', a: fmt(basin.runoff, 1), b: fmt(rural.runoff, 1) },
    { en: 'Lag time, from storm centre (middle of the storm) to peak discharge (h)', ru: 'Запаздывание от центра ливня (середина ливня) до пика расхода (ч)', a: fmt(basin.lag, 2), b: fmt(rural.lag, 2) },
    { en: 'Time to peak from the start (h)', ru: 'Время до пика от начала ливня (ч)', a: fmt(basin.tp, 1), b: fmt(rural.tp, 1) },
    { en: 'Storm peak above base flow, indicative (m³/s)', ru: 'Пик ливневого стока над базисным, ориентировочно (м³/с)', a: fmt(basin.peak, 1), b: fmt(rural.peak, 1) },
    { en: 'Peak discharge with base flow (m³/s)', ru: 'Пиковый расход с базисным стоком (м³/с)', a: fmt(BASE_FLOW + basin.peak, 1), b: fmt(BASE_FLOW + rural.peak, 1) },
  ];

  // Applicability limits of the lag equation (NEH 630 ch. 15, p. 15–6): CN from 50 to 95 (the CN used for the lag);
  // basins up to 19 square miles, about 49 km² (the upper limit the chapter cites; its data went to 9.2 square miles).
  const outOfLimits: string[] = [];
  if ([basin.cn, rural.cn].some(cn => cn < 50 || cn > 95)) outOfLimits.push(ru ? 'CN ниже 50 или выше 95' : 'CN below 50 or above 95');
  if (area > 19 * 2.59) outOfLimits.push(ru ? 'площадь больше 49 км² (19 кв. миль)' : 'area above 49 km² (19 square miles)');

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {ru ? 'Учебная модель, не реальные данные и не прогноз паводков.' : 'Teaching model, not real data and not a flood forecast.'}
      </p>

      <div>
        {controls.map(control => (
          <label key={control.key} style={{ display: 'block', marginBottom: 10 }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 14 }}>
              <span>{ru ? control.ru : control.en}</span>
              <strong>{fmt(control.value, control.digits)}</strong>
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
        <label style={{ display: 'block', marginBottom: 10 }}>
          <span style={{ display: 'block', fontSize: 14, marginBottom: 4 }}>
            {ru ? 'Насыщенность почвы до ливня' : 'Antecedent soil saturation'}
          </span>
          <select value={moisture} onChange={event => setMoisture(event.target.value as Moisture)} style={{ width: '100%' }}>
            <option value="low">{ru ? 'Низкая (сухая почва)' : 'Low (dry soil)'}</option>
            <option value="medium">{ru ? 'Средняя' : 'Medium (average)'}</option>
            <option value="high">{ru ? 'Высокая (влажная почва)' : 'High (wet soil)'}</option>
          </select>
        </label>
      </div>

      {outOfLimits.length > 0 ? (
        <p role="status" style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600 }}>
          {ru
            ? `Вне границ уравнения лага (NEH 630, гл. 15): ${outOfLimits.join('; ')}. Запаздывание и пик здесь только ориентировочные.`
            : `Outside the limits of the lag equation (NEH 630 ch. 15): ${outOfLimits.join('; ')}. The lag and the peak here are indicative only.`}
        </p>
      ) : null}

      <ReadableDiagram lang={lang}><svg
        viewBox="0 0 320 200"
        width="100%"
        role="img"
        aria-label={ru ? 'Гидрографы ливня для бассейна и сельского сравнения' : 'Storm hydrographs for the basin and the rural comparison'}
        style={{ display: 'block', maxWidth: 420, marginTop: 10 }}
      >
        {/* the storm: rain falls evenly from 0 to the duration */}
        <rect x={xOf(0)} y={TOP} width={xOf(hours) - xOf(0)} height={6} fill="currentColor" opacity={0.3} />
        <text x={xOf(hours) + 4} y={TOP + 6} fontSize="10" fill="currentColor">
          {ru ? `${fmt(rain, 0)} мм за ${fmt(hours, 0)} ч` : `${fmt(rain, 0)} mm in ${fmt(hours, 0)} h`}
        </text>
        <line x1={xOf(centre)} y1={TOP} x2={xOf(centre)} y2={BOTTOM} stroke="currentColor" strokeWidth={1} strokeDasharray="1 3" opacity={0.7} />
        {/* base flow before and after the storm: a constant assumption, the storm flow is drawn above it */}
        <line x1={xOf(0)} y1={yOf(BASE_FLOW)} x2={RIGHT} y2={yOf(BASE_FLOW)} stroke="currentColor" strokeWidth={1} strokeDasharray="2 2" opacity={0.6} />
        <text x={LEFT + 4} y={yOf(BASE_FLOW) + 10} fontSize="9" fill="currentColor">
          {ru ? `базисный сток ${fmt(BASE_FLOW, 0)} м³/с (допущение)` : `base flow ${fmt(BASE_FLOW, 0)} m³/s (assumed)`}
        </text>
        {/* the two hydrographs: the rural comparison (dashed) and the basin (solid) */}
        <polyline points={triangle(rural)} fill="none" stroke="currentColor" strokeWidth={1.5} strokeDasharray="6 4" opacity={0.7} strokeLinejoin="round" />
        <polyline points={triangle(basin)} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round" />
        {lagMarker(yBasinLag, basin, false)}
        {lagMarker(yRuralLag, rural, true)}
        {peakMarker(basin)}
        {peakMarker(rural)}
        {/* axes */}
        <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="currentColor" strokeWidth={1} opacity={0.5} />
        {ticks.map(t => (
          <g key={t}>
            <line x1={xOf(t)} y1={BOTTOM} x2={xOf(t)} y2={BOTTOM + 3} stroke="currentColor" opacity={0.5} />
            <text x={xOf(t)} y={BOTTOM + 13} fontSize="10" textAnchor="middle" fill="currentColor">{fmt(t, 0)}</text>
          </g>
        ))}
        <text x={RIGHT} y={BOTTOM + 26} fontSize="10" textAnchor="end" fill="currentColor">
          {ru ? 'часы от начала ливня' : 'hours from the start of the storm'}
        </text>
        <text x={LEFT - 6} y={BOTTOM + 4} fontSize="10" textAnchor="end" fill="currentColor">0</text>
        <text x={LEFT - 6} y={TOP + 8} fontSize="10" textAnchor="end" fill="currentColor">{fmt(yMax, 0)}</text>
        <text x={11} y={(TOP + BOTTOM) / 2} fontSize="10" textAnchor="middle" transform={`rotate(-90 11 ${(TOP + BOTTOM) / 2})`} fill="currentColor">
          {ru ? 'Расход (м³/с)' : 'Discharge (m³/s)'}
        </text>
      </svg></ReadableDiagram>

      <p style={{ margin: '6px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Сплошная линия — ваш бассейн. Пунктир — тот же бассейн без городской поверхности (0 %) при том же ливне: сельское сравнение. Точечная линия — середина ливня, от неё отсчитывается запаздывание.'
          : 'Solid line: your basin. Dashed line: the same basin with 0% urban surface under the same storm (the rural comparison). Dotted line: the middle of the storm, where the lag starts.'}
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginTop: 10 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(127,127,127,0.4)' }}>
            <th style={{ textAlign: 'left', padding: '4px 6px 4px 0', fontWeight: 600 }}>{ru ? 'Показатель' : 'Output'}</th>
            <th style={{ textAlign: 'right', padding: '4px 6px', fontWeight: 600 }}>
              {ru ? `Ваш бассейн (${urbanPct} %)` : `Your basin (${urbanPct}% urban)`}
            </th>
            <th style={{ textAlign: 'right', padding: '4px 0', fontWeight: 600 }}>{ru ? 'Сельское (0 %)' : 'Rural (0%)'}</th>
          </tr>
        </thead>
        <tbody>
          {outputRows.map(row => (
            <tr key={row.en} style={{ borderBottom: '1px solid rgba(127,127,127,0.25)' }}>
              <td style={{ padding: '4px 6px 4px 0' }}>{ru ? row.ru : row.en}</td>
              <td style={{ padding: '4px 6px', textAlign: 'right' }}><strong>{row.a}</strong></td>
              <td style={{ padding: '4px 0', textAlign: 'right' }}>{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ margin: '8px 0 0', fontSize: 15 }}>
        {ru ? 'Относительно сельского сравнения: запаздывание ' : 'Compared with the rural case: lag '}
        <strong>{`${lagChange > 0 ? '+' : ''}${lagChange}%`}</strong>
        {ru ? ', пиковый ливневый сток ' : ', peak storm flow '}
        <strong>{peakRatio === null ? '—' : `×${fmt(peakRatio, 1)}`}</strong>
        .
      </p>

      {basin.runoff === 0 ? (
        <p style={{ margin: '6px 0 0', fontSize: 13, fontWeight: 600 }}>
          {ru
            ? 'Сток с вашего бассейна нулевой: почва впитывает весь ливень, поэтому гидрограф плоский.'
            : 'No runoff from your basin: the soil takes in the whole storm, so the hydrograph is flat.'}
        </p>
      ) : null}

      <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'На что обратить внимание. ' : 'What to notice. '}</strong>
        {ru
          ? 'Городская доля — главный рычаг. При 0 % это сельское сравнение. При 100 % номер кривой стока растёт примерно с 70 до 98: большая часть ливня стекает, пик становится во много раз выше, время запаздывания сокращается, восходящая ветвь становится круче, а пик наступает раньше. В теме A.2 это изменение нужно описать и объяснить. Таблица даёт цифры для расчётных частей: процентный рост пикового расхода и долю осадков, ушедшую в сток.'
          : 'The urban share is the main lever. At 0% this is the rural comparison. At 100% the curve number rises from about 70 to 98: most of the storm runs off, the peak becomes many times higher, the lag time shortens, and the rising limb steepens so the peak comes sooner. This is the change that A.2 asks you to describe and explain. The table gives the figures for the calculation parts: the percentage increase in peak discharge and the share of the rain that became runoff.'}
      </p>

      <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Формулы. Номер кривой стока бассейна: CN = (1 − доля городской поверхности) × CN_сел + доля × 98 (TR-55, табл. 2-2a), где CN_сел = 70 при средней влажности; при сухой и влажной почве CN_сел становится CN_I = 4,2·CN ÷ (10 − 0,058·CN) и CN_III = 23·CN ÷ (10 + 0,13·CN). Запас S = 25 400 ÷ CN − 254 мм; сток Q = (P − 0,2·S)² ÷ (P + 0,8·S), если P > 0,2·S. Запаздывание (NEH 630, гл. 15, ур. 15-4a): lag = L^0,8 × (S_дюйм + 1)^0,7 ÷ (1 900 × √Y) часов, где L — длина пути в футах (L = 1,4 √A км, допущение), S_дюйм = 1 000 ÷ CN − 10, Y = 100 × tg(уклон) в процентах. Время до пика Tp = D/2 + lag, где D — продолжительность ливня (NEH 630, гл. 16, ур. 16A-7; упрощение, см. ниже). Пиковый расход = 0,2083 × A × Q ÷ Tp м³/с (A в км², Q в мм, Tp в часах; NEH 630, гл. 16, ур. 16A-5–8, в метрических единицах); гидрограф — треугольник с основанием 2,67 × Tp. Запаздывание отсчитывается от середины ливня (D/2). Ограничения: один ливень с равномерными осадками, один бассейн без деления на части; CN_сел = 70 — типичное значение, а не измерение. Модель годится для сравнения случаев, но не для прогноза паводка.'
          : 'Formulas. Curve number of the basin: CN = (1 − urban share) × CN_rural + urban share × 98 (TR-55, Table 2-2a), where CN_rural = 70 at average moisture; for dry and wet soil CN_rural becomes CN_I = 4.2·CN ÷ (10 − 0.058·CN) and CN_III = 23·CN ÷ (10 + 0.13·CN). Retention S = 25,400 ÷ CN − 254 mm; runoff Q = (P − 0.2·S)² ÷ (P + 0.8·S) when P > 0.2·S. Lag (NEH 630 ch. 15, eq. 15-4a): lag = L^0.8 × (S_in + 1)^0.7 ÷ (1,900 × √Y) hours, where L is the flow path in feet (L = 1.4 √A km, an assumption), S_in = 1,000 ÷ CN − 10 in inches, and Y = 100 × tan(slope) in percent. Time to peak Tp = D/2 + lag, where D is the storm duration (NEH 630 ch. 16, eq. 16A-7; a simplification, see below). Peak = 0.2083 × A × Q ÷ Tp m³/s (A in km², Q in mm, Tp in hours; NEH 630 ch. 16, eqs 16A-5 to 16A-8, metric form); the hydrograph is a triangle with base 2.67 × Tp. The lag is counted from the middle of the storm (D/2). Limits: one storm with even rain, one lumped basin, and CN_rural = 70 is a typical value, not a measurement. Use the model to compare cases, not to forecast a flood.'}
      </p>

      <div style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'Границы, упрощения и допущения.' : 'Limits, simplifications and assumptions.'}</strong>
        <ul style={{ margin: '4px 0 0', paddingLeft: 18 }}>
          <li>
            {ru
              ? 'Границы: уравнение лага (NEH 630, гл. 15, с. 15–6) не следует применять при CN ниже 50 или выше 95. Данные для него — бассейны размером до 9,2 кв. мили (около 24 км²); глава называет разумным верхним пределом до 19 кв. миль (около 49 км²). Предупреждение под ползунками появляется, когда вход выходит за эти границы.'
              : 'Limits: the lag equation (NEH 630 ch. 15, p. 15–6) should not be used for CN below 50 or above 95. Its data came from basins up to 9.2 square miles (about 24 km²); the chapter cites a reasonable upper limit of up to 19 square miles (about 49 km²). The warning under the sliders appears when an input is outside these limits.'}
          </li>
          <li>
            {ru
              ? 'Упрощение: треугольник использует всю длительность ливня D как длительность единичного стока. NEH 630, гл. 16 (ур. 16A-13, с. 16A–3) даёт короткую ΔD ≈ 0,133 × Tc, где Tc = запаздывание ÷ 0,6 (гл. 15, ур. 15-3). Пик оставлен, потому что он близок к установившемуся пику рационального метода, C·i·A ÷ 3,6 = A × Q ÷ (3,6 × D) = 14,2 м³/с, против 14,0 м³/с в модели для исходных значений (50 мм за 6 ч, 30 % городских, 25 км²). Это проверка именно этого случая, а не доказательство для других.'
              : 'Simplification: the triangle uses the whole storm duration D as the unit duration. NEH 630 ch. 16 (eq. 16A-13, p. 16A–3) gives a short duration ΔD ≈ 0.133 × Tc, where Tc = lag ÷ 0.6 (ch. 15, eq. 15-3). The peak is kept because it agrees closely with the rational-method steady-state peak, C·i·A ÷ 3.6 = A × Q ÷ (3.6 × D) = 14.2 m³/s, against 14.0 m³/s from the model for the default inputs (50 mm in 6 h, 30% urban, 25 km²). This checks that case only, not other inputs.'}
          </li>
          <li>
            {ru
              ? 'Начало: треугольник начинается с t = 0, поэтому начальные потери не задерживают подъём расхода.'
              : 'Start: the triangle starts at t = 0, so the initial losses do not delay the rise of discharge.'}
          </li>
          <li>
            {ru
              ? 'Коэффициент пика (peak rate factor) 484 — стандартное значение треугольника; в метрической записи он равен 0,2083. NEH 630, гл. 16 (с. 16–14) даёт диапазон от меньше 100 до больше 600, поэтому пик здесь — оценка.'
              : 'Peak rate factor: 484 is the standard value of the triangle (0.2083 in metric units). NEH 630 ch. 16 (p. 16–14) gives a range from below 100 to more than 600, so the peak here is an estimate.'}
          </li>
          <li>
            {ru
              ? 'Допущения и приближения: длина пути L = 1,4 × √A км — допущение этой модели (на практике путь меряют по карте). Сухая и влажная кривые стока — формулы, которые приближают таблицу 10-1 NEH 630, гл. 10; TR-55 (1986) даёт только среднее состояние. Для CN 70 таблица даёт 51 и 85, формулы — 49,5 и 84,3. Базисный сток 5 м³/с до ливня и после него — постоянное учебное допущение; ливневый сток рисуется над ним.'
              : 'Assumptions and approximations: the flow length L = 1.4 × √A km is an assumption of this model (in practice the path is measured on a map). The dry and wet curve numbers are equations that approximate Table 10-1 of NEH 630 ch. 10; TR-55 (1986) gives the average condition only. For CN 70 the table gives 51 and 85, the equations 49.5 and 84.3. The base flow of 5 m³/s before and after the storm is a constant teaching assumption; the storm flow is drawn above it.'}
          </li>
        </ul>
      </div>
    </div>
  );
}
