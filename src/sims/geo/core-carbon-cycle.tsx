import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Lang } from '../../contract/types';

// Global carbon cycle. Units: GtC = billion tonnes of carbon.
// Stores and natural gross fluxes around 1750: IPCC AR6 WG1 (2021), Chapter 5, Figure 5.12 (values as printed).
// Cumulative ocean and land uptake since 1750: AR6 Table 5.1.
// Present flows: Global Carbon Budget 2025 (ESSD 18, doi:10.5194/essd-18-3211-2026), decadal means 2015–2024, Table 7.
const STORE_1750 = { atmosphere: 591, surfaceOcean: 900, deepOcean: 37100, vegetation: 450, soils: 1700, permafrost: 1200 };
const FLUX_1750 = { photosynthesis: 113, respiration: 111.1, oceanUptake: 54.0, oceanRelease: 54.6 };

// Present state, GtC per year, 2015–2024 means.
const E_FOS = 9.8; // fossil fuels and cement, including the small cement carbonation sink
const E_LUC = 1.4; // net land-use change emissions
const S_OCEAN = 3.2; // ocean sink
const S_LAND = 2.4; // land sink
const G_ATM_GCB = 5.6; // growth rate of atmospheric CO₂ reported by GCB 2025, used as the check value

// Atmospheric increase = emissions minus the two sinks.
// Arithmetic: emissions 9.8 + 1.4 = 11.2 GtC per year; sinks 3.2 + 2.4 = 5.6; increase 11.2 − 5.6 = 5.6 GtC per year.
// This matches the reported growth rate of 5.6 GtC per year; the GCB budget imbalance is below 0.1 GtC per year.
const ATM_INCREASE = E_FOS + E_LUC - S_OCEAN - S_LAND;

// Atmosphere, 2025: annual mean 425.64 ppm (GCB 2025, section 3.5.4) × 2.124 GtC per ppm (GCB 2025, section 2.4.1).
const ATM_2025 = 425.64 * 2.124;
// Ratio of the intermediate and deep ocean store to today's atmospheric store: 37,100 ÷ 904 ≈ 41.
const DEEP_OVER_ATM = Math.round(STORE_1750.deepOcean / ATM_2025);

const buttonStyle = (on: boolean): CSSProperties => ({
  padding: '6px 12px',
  borderRadius: 6,
  border: '1px solid #6b7280',
  background: on ? '#1d1d1d' : 'transparent',
  color: on ? '#ffffff' : 'inherit',
  cursor: 'pointer',
  fontSize: 14,
});

export default function CarbonCycle({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [present, setPresent] = useState(false);
  const t = (en: string, rus: string) => (ru ? rus : en);
  const int = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ru ? ' ' : ',');
  const dec = (x: number) => x.toFixed(1).replace('.', ru ? ',' : '.');
  const title = t('Global carbon cycle: stores and fluxes (GtC)', 'Глобальный углеродный цикл: запасы и потоки (ГтС)');
  const unitYear = t('GtC per year', 'ГтС в год');
  const flowsHeader = t('Flows, GtC per year', 'Потоки, ГтС в год');

  return (
    <div>
      <p style={{ fontSize: 14, marginTop: 0 }}>
        {t('Stores are in GtC (billion tonnes of carbon). Flows are in GtC per year.', 'Запасы — в ГтС (миллиард тонн углерода), потоки — в ГтС в год.')}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        <button type="button" aria-pressed={!present} onClick={() => setPresent(false)} style={buttonStyle(!present)}>
          {t('Natural exchange only (pre-industrial, about 1750)', 'Только естественный обмен (доиндустриальный период, около 1750 г.)')}
        </button>
        <button type="button" aria-pressed={present} onClick={() => setPresent(true)} style={buttonStyle(present)}>
          {t('Present (flows 2015–2024; CO₂ 2025)', 'Настоящее время (потоки 2015–2024; CO₂ 2025)')}
        </button>
      </div>
      {/* on a phone the diagram scrolls sideways instead of shrinking its labels below readable size */}
      <div style={{ overflowX: 'auto' }}>
      <ReadableDiagram lang={lang}><svg role="img" aria-label={title} viewBox="0 0 640 490" width="100%" style={{ maxWidth: 640, minWidth: 560, display: 'block' }}>
        <defs>
          <marker id="cc-arrow-natural" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
          <marker id="cc-arrow-human" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#c2410c" />
          </marker>
        </defs>

        {present && (
          <g>
            <rect x={10} y={10} width={200} height={54} rx={8} fill="#fdf0e6" stroke="#c2410c" strokeWidth={1.2} />
            <text x={110} y={31} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#1d1d1d">{t('Land-use change', 'Изменение землепользования')}</text>
            <text x={110} y={51} textAnchor="middle" fontSize={12} fill="#b4480c">{`+${dec(E_LUC)} ${unitYear}`}</text>
            <line x1={130} y1={64} x2={232} y2={112} stroke="#c2410c" strokeWidth={2} markerEnd="url(#cc-arrow-human)" />
            <rect x={430} y={10} width={200} height={54} rx={8} fill="#fdf0e6" stroke="#c2410c" strokeWidth={1.2} />
            <text x={530} y={31} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#1d1d1d">{t('Fossil fuels and cement', 'Ископаемое топливо и цемент')}</text>
            <text x={530} y={51} textAnchor="middle" fontSize={12} fill="#b4480c">{`+${dec(E_FOS)} ${unitYear}`}</text>
            <line x1={500} y1={64} x2={420} y2={112} stroke="#c2410c" strokeWidth={2} markerEnd="url(#cc-arrow-human)" />
          </g>
        )}

        <rect x={200} y={112} width={240} height={86} rx={10} fill="#e9f1f8" stroke="#3b6e95" strokeWidth={1.5} />
        <text x={320} y={134} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#1d1d1d">{t('Atmosphere', 'Атмосфера')}</text>
        <text x={320} y={154} textAnchor="middle" fontSize={13} fill="#1d1d1d">
          {present
            ? `≈${int(Math.round(ATM_2025))} ${t('GtC (2025)', 'ГтС (2025 г.)')}`
            : `${int(STORE_1750.atmosphere)} ${t('GtC (about 1750)', 'ГтС (около 1750 г.)')}`}
        </text>
        {present && (
          <text x={320} y={174} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#b4480c">
            {`${t('Increase', 'Прирост')}: +${dec(ATM_INCREASE)} ${unitYear}`}
          </text>
        )}

        {/* Natural gross exchange, 1750 values: photosynthesis and respiration on land, gross exchange with the ocean */}
        <line x1={250} y1={198} x2={250} y2={262} stroke="currentColor" strokeWidth={2} markerEnd="url(#cc-arrow-natural)" />
        <line x1={286} y1={262} x2={286} y2={198} stroke="currentColor" strokeWidth={2} markerEnd="url(#cc-arrow-natural)" />
        <line x1={372} y1={198} x2={372} y2={262} stroke="currentColor" strokeWidth={2} markerEnd="url(#cc-arrow-natural)" />
        <line x1={402} y1={262} x2={402} y2={198} stroke="currentColor" strokeWidth={2} markerEnd="url(#cc-arrow-natural)" />
        <text x={244} y={214} textAnchor="end" fontSize={11} fill="currentColor">{`${t('photosynthesis', 'фотосинтез')} ${FLUX_1750.photosynthesis}`}</text>
        <text x={292} y={232} fontSize={10} fill="currentColor">{t('respiration', 'дыхание,')}</text>
        <text x={292} y={244} fontSize={10} fill="currentColor">{`${t('and fire', 'и пожары')} ${FLUX_1750.respiration}`}</text>
        <text x={366} y={214} textAnchor="end" fontSize={10} fill="currentColor">{`${t('to ocean', 'в океан')} ${dec(FLUX_1750.oceanUptake)}`}</text>
        <text x={408} y={236} fontSize={11} fill="currentColor">{`${t('from ocean', 'из океана')} ${dec(FLUX_1750.oceanRelease)}`}</text>
        {present && (
          <g>
            <line x1={212} y1={198} x2={212} y2={262} stroke="#c2410c" strokeWidth={2} markerEnd="url(#cc-arrow-human)" />
            <line x1={432} y1={198} x2={432} y2={262} stroke="#c2410c" strokeWidth={2} markerEnd="url(#cc-arrow-human)" />
            <text x={206} y={252} textAnchor="end" fontSize={10} fill="#b4480c">{`${t('land sink', 'сток суши')} ${dec(S_LAND)}`}</text>
            <text x={438} y={252} fontSize={10} fill="#b4480c">{`${t('ocean sink', 'сток океана')} ${dec(S_OCEAN)}`}</text>
          </g>
        )}

        <rect x={10} y={262} width={290} height={196} rx={10} fill="#eef6ea" stroke="#5b8c3a" strokeWidth={1.2} />
        <text x={24} y={284} fontSize={13} fontWeight="bold" fill="#1d1d1d">{t('Land, about 1750', 'Суша, около 1750 г.')}</text>
        <text x={24} y={304} fontSize={12} fill="#1d1d1d">{`${t('Vegetation', 'Растительность')}: ${int(STORE_1750.vegetation)}`}</text>
        <text x={24} y={322} fontSize={12} fill="#1d1d1d">{`${t('Soils (outside permafrost)', 'Почвы (вне вечной мерзлоты)')}: ${int(STORE_1750.soils)}`}</text>
        <text x={24} y={340} fontSize={12} fill="#1d1d1d">{`${t('Permafrost', 'Вечная мерзлота')}: ${int(STORE_1750.permafrost)}`}</text>
        <text x={24} y={366} fontSize={11} fontWeight="bold" fill="#4b5563">{flowsHeader}</text>
        <text x={24} y={386} fontSize={12} fill="#374151">{`${t('Photosynthesis (gross)', 'Фотосинтез (валовой)')}: ${FLUX_1750.photosynthesis}`}</text>
        <text x={24} y={404} fontSize={12} fill="#374151">{`${t('Respiration and fire', 'Дыхание и пожары')}: ${FLUX_1750.respiration}`}</text>
        {present && (
          <text x={24} y={426} fontSize={12} fontWeight="bold" fill="#b4480c">{`${t('Land sink', 'Поглощение сушей')}: ${dec(S_LAND)}`}</text>
        )}

        <rect x={370} y={262} width={260} height={196} rx={10} fill="#e6f0f8" stroke="#3d7ea6" strokeWidth={1.2} />
        <text x={384} y={284} fontSize={13} fontWeight="bold" fill="#1d1d1d">{t('Ocean, about 1750', 'Океан, около 1750 г.')}</text>
        <text x={384} y={304} fontSize={12} fill="#1d1d1d">{`${t('Surface ocean', 'Поверхностный океан')}: ${int(STORE_1750.surfaceOcean)}`}</text>
        <text x={384} y={322} fontSize={12} fill="#1d1d1d">{`${t('Intermediate and deep ocean', 'Промежуточные и глубокие слои')}: ${int(STORE_1750.deepOcean)}`}</text>
        <text x={384} y={366} fontSize={11} fontWeight="bold" fill="#4b5563">{flowsHeader}</text>
        <text x={384} y={386} fontSize={12} fill="#374151">{`${t('Uptake (gross)', 'Поглощение (валовое)')}: ${dec(FLUX_1750.oceanUptake)}`}</text>
        <text x={384} y={404} fontSize={12} fill="#374151">{`${t('Release (gross)', 'Выделение (валовое)')}: ${dec(FLUX_1750.oceanRelease)}`}</text>
        {present && (
          <text x={384} y={426} fontSize={12} fontWeight="bold" fill="#b4480c">{`${t('Ocean sink', 'Поглощение океаном')}: ${dec(S_OCEAN)}`}</text>
        )}

        <line x1={10} y1={480} x2={34} y2={480} stroke="currentColor" strokeWidth={2} />
        <text x={40} y={484} fontSize={11} fill="currentColor">{t('natural exchange (gross)', 'естественный обмен (валовой)')}</text>
        {present && (
          <g>
            <line x1={330} y1={480} x2={354} y2={480} stroke="#c2410c" strokeWidth={2} />
            <text x={360} y={484} fontSize={11} fill="currentColor">{t('human emissions and sinks, present', 'антропогенные потоки, настоящее время')}</text>
          </g>
        )}
      </svg></ReadableDiagram>
      </div>

      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>
          {t('Atmospheric increase = fossil emissions + land-use change − ocean sink − land sink = ', 'Прирост в атмосфере = ископаемое топливо + изменение землепользования − поглощение океаном − поглощение сушей = ')}
          <strong>{`${dec(E_FOS)} + ${dec(E_LUC)} − ${dec(S_OCEAN)} − ${dec(S_LAND)} = ${dec(ATM_INCREASE)} ${unitYear}`}</strong>
          {t(
            `. Global Carbon Budget 2025 gives the same growth rate, ${dec(G_ATM_GCB)} GtC per year, with an imbalance below 0.1 GtC per year.`,
            `. Global Carbon Budget 2025 даёт тот же прирост, ${dec(G_ATM_GCB)} ГтС в год, с небалансом меньше 0,1 ГтС в год.`,
          )}
        </li>
        <li>
          {t(
            `Before industrialisation the gross natural fluxes almost balanced: photosynthesis ${FLUX_1750.photosynthesis} and respiration and fire ${FLUX_1750.respiration} GtC per year on land, and about ${Math.round(FLUX_1750.oceanUptake)} GtC per year in each direction between air and ocean.`,
            `До промышленной эпохи природные валовые потоки почти уравновешивали друг друга: на суше фотосинтез ${FLUX_1750.photosynthesis} и дыхание с пожарами ${FLUX_1750.respiration} ГтС в год, а между воздухом и океаном около ${Math.round(FLUX_1750.oceanUptake)} ГтС в год в каждую сторону.`,
          )}
        </li>
      </ul>

      <p style={{ marginTop: 10, fontSize: 13, opacity: 0.8 }}>
        {t(
          'Sources: stores and 1750 fluxes, IPCC AR6 WG1 (2021), Chapter 5, Figure 5.12 (values as printed); cumulative ocean and land uptake since 1750, Table 5.1. Present flows: Global Carbon Budget 2025, decadal means 2015–2024, Table 7 (doi:10.5194/essd-18-3211-2026). Atmosphere 2025: global annual mean 425.64 ppm (GCB 2025, section 3.5.4, from NOAA GML data, not the Mauna Loa station value), with 1 ppm = 2.124 GtC (GCB 2025, section 2.4.1). Values are rounded.',
          'Источники: запасы и потоки на 1750 г. — IPCC AR6 WG1 (2021), глава 5, рисунок 5.12 (значения как на рисунке); накопленное поглощение океаном и сушей с 1750 г. — таблица 5.1. Потоки настоящего времени — Global Carbon Budget 2025, средние за 2015–2024, таблица 7 (doi:10.5194/essd-18-3211-2026). Атмосфера в 2025 г.: глобальная среднегодовая концентрация 425,64 ppm (GCB 2025, раздел 3.5.4, данные NOAA GML, а не значение станции Мауна-Лоа); 1 ppm = 2,124 ГтС (GCB 2025, раздел 2.4.1). Значения округлены.',
        )}
      </p>

      <p style={{ marginTop: 12 }}>
        <strong>{t('What the numbers do not show', 'Чего не показывают эти цифры')}</strong>
      </p>
      <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14 }}>
        <li>
          {t(
            `Stores are not equally active. The atmosphere, vegetation and surface ocean exchange carbon quickly. Soils, permafrost and the intermediate and deep ocean hold far more carbon but exchange it slowly: the intermediate and deep ocean holds about ${DEEP_OVER_ATM} times today's atmospheric carbon.`,
            `Запасы активны неодинаково. Атмосфера, растительность и поверхностный океан быстро обмениваются углеродом. Почвы, вечная мерзлота и промежуточные и глубокие слои океана содержат гораздо больше углерода, но обмениваются им медленно: в промежуточных и глубоких слоях океана углерода примерно в ${DEEP_OVER_ATM} раз больше, чем в атмосфере сейчас.`,
          )}
        </li>
        <li>
          {t(
            'Fossil fuel reserves are not drawn. Coal, oil and gas hold carbon that has been outside the active cycle for millions of years; burning them moves that carbon into the cycle.',
            'Запасы ископаемого топлива не показаны. Уголь, нефть и газ содержат углерод, который миллионы лет находится вне активного цикла; при сжигании он переходит в цикл.',
          )}
        </li>
        <li>
          {t(
            'The ocean and land stores are values for about 1750. Since then the ocean has taken up about 170 GtC and the land about 230 GtC (AR6 Table 5.1, 1750–2019). Gross land fluxes have also changed since 1750 (AR6 Figure 5.12); the arrows show the natural gross values only.',
            'Запасы океана и суши даны на 1750 г. С тех пор океан поглотил около 170 ГтС, суша около 230 ГтС (AR6, таблица 5.1, 1750–2019). Валовые потоки на суше тоже изменились с 1750 г. (AR6, рисунок 5.12); стрелки показывают только естественные валовые значения.',
          )}
        </li>
        <li>
          {t(
            'Decadal averages hide year-to-year swings. In 2024 the atmosphere gained 7.9 GtC, well above the 2015–2024 average of 5.6 GtC per year (GCB 2025).',
            'Средние за десятилетие скрывают колебания по годам. В 2024 г. прирост CO₂ в атмосфере составил 7,9 ГтС, выше среднего за 2015–2024 гг., равного 5,6 ГтС в год (GCB 2025).',
          )}
        </li>
        <li>
          {t(
            'Smaller fluxes, such as rivers, rock weathering and volcanoes, are not drawn.',
            'Мелкие потоки, например реки, выветривание горных пород и вулканы, не показаны.',
          )}
        </li>
      </ul>
    </div>
  );
}
