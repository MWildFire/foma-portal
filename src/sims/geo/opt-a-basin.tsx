import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative annual water balance of a drainage basin, not data.
// Balance in mm per year: P = Q + E + ΔS, so discharge Q = P − E − ΔS. ΔS is positive when the stores gain water.
// Mean flow: 1 mm over 1 km² is 1,000 m³ and a year has 31,536,000 s, so Q (m³/s) = Q (mm) × A (km²) / 31,536.
// The groundwater share only splits Q into base flow and quick flow; it does not change the balance.
const M3S_DIVISOR = 31536;
const ARROW_ID = 'opt-a-basin-arrow';

export default function OptABasinSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [area, setArea] = useState(800);        // A, km²
  const [precip, setPrecip] = useState(1000);   // P, mm per year
  const [etShare, setEtShare] = useState(60);   // E as a share of P, %
  const [dS, setDS] = useState(50);             // ΔS, mm per year (+ gain, − loss)
  const [gwShare, setGwShare] = useState(40);   // groundwater share of Q, %

  const et = (etShare / 100) * precip;          // E, mm per year
  const q = precip - et - dS;                   // Q from the balance, mm per year
  const balanced = q >= 0;                      // a negative Q means the inputs cannot be true together
  const qPos = Math.max(q, 0);
  const baseMm = (gwShare / 100) * qPos;        // groundwater (base) flow, mm per year
  const quickMm = qPos - baseMm;                // overland and throughflow, mm per year
  const baseFlow = (baseMm * area) / M3S_DIVISOR;
  const quickFlow = (quickMm * area) / M3S_DIVISOR;

  const fmt = (value: number, digits = 1): string => {
    const text = value.toFixed(digits);
    return ru ? text.replace('.', ',') : text;
  };
  const shown = (value: number, digits = 0): string => (balanced ? fmt(value, digits) : '—');
  const signed = (value: number): string => (value > 0 ? `+${fmt(value, 0)}` : fmt(value, 0));
  const unitMm = ru ? 'мм/год' : 'mm/yr';
  const unitMmShort = ru ? 'мм' : 'mm';
  const unitFlow = ru ? 'м³/с' : 'm³/s';
  // Arrow width shows how big each outlet flow is, relative to the rain.
  const arrowWidth = (mmValue: number): number => 2 + 14 * (Math.max(mmValue, 0) / precip);

  const controls: { key: string; min: number; max: number; step: number; value: number; set: (v: number) => void; digits: number; en: string; ru: string }[] = [
    { key: 'area', min: 10, max: 5000, step: 10, value: area, set: setArea, digits: 0, en: 'Basin area A (km²)', ru: 'Площадь бассейна A (км²)' },
    { key: 'precip', min: 100, max: 3000, step: 10, value: precip, set: setPrecip, digits: 0, en: 'Mean annual precipitation P (mm/yr)', ru: 'Среднегодовые осадки P (мм/год)' },
    { key: 'et', min: 0, max: 100, step: 1, value: etShare, set: setEtShare, digits: 0, en: 'Evapotranspiration E, share of P (%)', ru: 'Испарение E, доля от P (%)' },
    { key: 'dS', min: -200, max: 200, step: 5, value: dS, set: setDS, digits: 0, en: 'Change in storage ΔS (mm/yr; + gain, − loss)', ru: 'Изменение запасов ΔS (мм/год; + прирост, − убыль)' },
    { key: 'gw', min: 0, max: 100, step: 5, value: gwShare, set: setGwShare, digits: 0, en: 'Groundwater share of Q, base flow (%)', ru: 'Доля подземных вод в Q, базисный сток (%)' },
  ];

  const rows = [
    { en: 'Evapotranspiration E = share × P', ru: 'Испарение E = доля × P', value: `${fmt(et, 0)} ${unitMm}` },
    { en: 'Discharge Q = P − E − ΔS', ru: 'Сток Q = P − E − ΔS', value: `${shown(q)} ${unitMm}` },
    { en: 'Mean discharge = Q × A ÷ 31 536', ru: 'Средний расход = Q × A ÷ 31 536', value: `${shown((q * area) / M3S_DIVISOR, 1)} ${unitFlow}` },
    { en: 'Runoff coefficient Q ÷ P', ru: 'Коэффициент стока Q ÷ P', value: shown(q / precip, 2) },
    { en: 'Base flow (groundwater)', ru: 'Базисный сток (подземные воды)', value: `${shown(baseMm)} ${unitMm} · ${shown(baseFlow, 1)} ${unitFlow}` },
    { en: 'Quick flow (overland and throughflow)', ru: 'Быстрый сток (поверхностный и почвенный)', value: `${shown(quickMm)} ${unitMm} · ${shown(quickFlow, 1)} ${unitFlow}` },
    {
      en: 'Balance check P = Q + E + ΔS',
      ru: 'Проверка P = Q + E + ΔS',
      value: balanced
        ? `${fmt(precip, 0)} = ${fmt(q, 0)} + ${fmt(et, 0)} ${dS >= 0 ? '+' : '−'} ${fmt(Math.abs(dS), 0)}`
        : (ru ? 'Q < 0: данные не сходятся' : 'Q < 0: inputs do not fit'),
    },
  ];

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {ru ? 'Иллюстративная модель, не реальные данные. Годовые суммы для одного бассейна.' : 'Illustrative model, not real data. Annual totals for one basin.'}
      </p>

      <div>
        {controls.map(control => (
          <label key={control.key} style={{ display: 'block', marginBottom: 10 }}>
            <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 14 }}>
              <span>{ru ? control.ru : control.en}</span>
              <strong>{control.key === 'dS' ? signed(control.value) : fmt(control.value, control.digits)}</strong>
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

      <svg
        viewBox="0 0 400 200"
        width="100%"
        role="img"
        aria-label={ru ? 'Схема водного баланса бассейна' : 'Diagram of the basin water balance'}
        style={{ display: 'block', maxWidth: 420, margin: '12px 0 0' }}
      >
        <defs>
          <marker id={ARROW_ID} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
        {/* the basin (watershed) and its stores */}
        <rect x={24} y={52} width={200} height={112} rx={10} fill="none" stroke="currentColor" strokeDasharray="5 4" opacity={0.6} />
        <text x={32} y={68} fontSize="10" fill="currentColor" opacity={0.7}>{ru ? 'Водораздел' : 'Watershed'}</text>
        <rect x={100} y={100} width={88} height={44} rx={6} fill="currentColor" fillOpacity={0.08} stroke="currentColor" />
        <text x={144} y={117} fontSize="11" textAnchor="middle" fill="currentColor">{ru ? 'Запасы' : 'Stores'}</text>
        <text x={144} y={133} fontSize="11" textAnchor="middle" fill="currentColor">{`ΔS ${signed(dS)} ${unitMmShort}`}</text>
        {/* precipitation in, evapotranspiration out */}
        <line x1={124} y1={10} x2={124} y2={48} stroke="currentColor" strokeWidth={2} markerEnd={`url(#${ARROW_ID})`} />
        <text x={132} y={26} fontSize="11" fill="currentColor">{`P ${fmt(precip, 0)} ${unitMmShort}`}</text>
        <line x1={56} y1={50} x2={56} y2={12} stroke="currentColor" strokeWidth={2} markerEnd={`url(#${ARROW_ID})`} />
        <text x={62} y={24} fontSize="11" fill="currentColor">{`E ${fmt(et, 0)} ${unitMmShort}`}</text>
        {/* discharge at the outlet, split into quick flow and base flow */}
        <line x1={224} y1={96} x2={262} y2={96} stroke="currentColor" strokeWidth={arrowWidth(quickMm)} markerEnd={`url(#${ARROW_ID})`} />
        <line x1={224} y1={132} x2={262} y2={132} stroke="currentColor" strokeWidth={arrowWidth(baseMm)} markerEnd={`url(#${ARROW_ID})`} />
        <text x={268} y={92} fontSize="10" fill="currentColor">{ru ? 'быстрый сток' : 'quick flow'}</text>
        <text x={268} y={105} fontSize="10" fill="currentColor">{`${shown(quickMm)} ${unitMmShort}`}</text>
        <text x={268} y={128} fontSize="10" fill="currentColor">{ru ? 'базисный сток' : 'base flow'}</text>
        <text x={268} y={141} fontSize="10" fill="currentColor">{`${shown(baseMm)} ${unitMmShort}`}</text>
      </svg>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginTop: 12 }}>
        <tbody>
          {rows.map(row => (
            <tr key={row.en} style={{ borderBottom: '1px solid rgba(127,127,127,0.25)' }}>
              <td style={{ padding: '5px 8px 5px 0' }}>{ru ? row.ru : row.en}</td>
              <td style={{ padding: '5px 0', textAlign: 'right', whiteSpace: 'nowrap' }}>
                <strong>{row.value}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {balanced ? null : (
        <p style={{ margin: '8px 0 0', fontSize: 13, fontWeight: 600 }}>
          {ru
            ? 'Сток получился бы отрицательным: прирост запасов больше осадков за вычетом испарения. Уменьшите ΔS или E.'
            : 'Discharge would be negative: the storage gain is larger than the rain left after evapotranspiration. Lower ΔS or E.'}
        </p>
      )}

      <p style={{ margin: '12px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        <strong>{ru ? 'На что обратить внимание. ' : 'What to notice. '}</strong>
        {ru
          ? 'Значения по умолчанию повторяют пример из темы A.1 (P 1 000 мм, E 600 мм, ΔS +50 мм): Q = 350 мм, коэффициент стока 0,35. P и E фиксированы, поэтому каждый миллиметр прироста запасов уменьшает сток на миллиметр. Отрицательное ΔS означает, что запасы отдали воду, и сток больше осадков за вычетом испарения. Так решаются расчётные части заданий на водный баланс: изменение запасов и доля осадков, ушедшая со стоком.'
          : 'The defaults repeat the worked example in the A.1 topic (P 1,000 mm, E 600 mm, ΔS +50 mm): Q = 350 mm, so the runoff coefficient is 0.35. P and E are fixed, so every extra millimetre of storage gain takes one millimetre off discharge. A negative ΔS means the stores gave up water, and discharge is larger than rain minus evapotranspiration. This is the working for the calculation parts of water-balance questions: the change in storage, and the percentage of precipitation that left as discharge.'}
      </p>

      <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Формулы. E = доля × P. Водный баланс (water balance): P = Q + E + ΔS, значит Q = P − E − ΔS (ΔS положительно, когда запасы растут, и отрицательно, когда убывают). Коэффициент стока = Q ÷ P. Средний расход (м³/с) = Q (мм/год) × A (км²) ÷ 31 536, потому что 1 мм на 1 км² — это 1 000 м³, а год содержит 31 536 000 с. Базисный сток (base flow) = доля подземных вод × Q; быстрый сток = остаток (поверхностный и почвенный сток). Глубинный отток подземных вод за пределы водораздела отдельно не показан; в этой простой модели он учитывался бы в ΔS.'
          : 'Formulas. E = share × P. Water balance: P = Q + E + ΔS, so Q = P − E − ΔS (ΔS is positive when the stores gain water and negative when they lose it). Runoff coefficient = Q ÷ P. Mean flow (m³/s) = Q (mm/yr) × A (km²) ÷ 31,536, because 1 mm over 1 km² is 1,000 m³ and a year has 31,536,000 s. Base flow = groundwater share × Q; quick flow = the rest (overland flow and throughflow). Deep groundwater that leaves beneath the watershed is not shown separately; in this simple balance it would be counted in ΔS.'}
      </p>
    </div>
  );
}
