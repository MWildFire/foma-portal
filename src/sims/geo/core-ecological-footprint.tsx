import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Lang } from '../../contract/types';

// National Footprint and Biocapacity Accounts, 2026 edition (the Global Footprint Network accounts, now maintained by
// York University and the Footprint Data Foundation). Data year 2023.
// Source: national and world public data workbook, sheets national_data and world_data (released 22 April 2026, version 1.0).
// The Footprint Data Foundation bulk workbook of the same edition gives identical values for the countries and the world shown.
// Population base: the NFA uses the population of the UN popstat database (China 1,454 million in 2023 in the workbook),
// which differs from other UN estimates for some countries. Per-person values are rounded to two decimals, so totals
// divided by per-person values can differ from the implied population by a few tenths of a percent.
// Footprint = footprint of production (efp) for every country and the world. The consumption footprint (efc) is not
// published for the UAE in this edition (quality flag "+"), so production is used throughout for comparability.
// Per-person values are stored as published (two decimals). Totals are whole global hectares (gha), as published;
// the chart shows them in million gha to one decimal place.
type Country = {
  en: string;
  ru: string;
  efPc: number; // footprint of production, gha per person
  bcPc: number; // biocapacity, gha per person
  efTot: number; // footprint of production, gha
  bcTot: number; // biocapacity, gha
};

const QATAR: Country = { en: 'Qatar', ru: 'Катар', efPc: 11.7, bcPc: 0.87, efTot: 34843398, bcTot: 2596827 };
const UAE: Country = { en: 'UAE', ru: 'ОАЭ', efPc: 6.09, bcPc: 0.47, efTot: 64832194, bcTot: 5004081 };
const USA: Country = { en: 'USA', ru: 'США', efPc: 7.09, bcPc: 3.73, efTot: 2433955930, bcTot: 1279533251 };
const CHINA: Country = { en: 'China', ru: 'Китай', efPc: 3.43, bcPc: 0.79, efTot: 4980449150, bcTot: 1149199188 };
const BRAZIL: Country = { en: 'Brazil', ru: 'Бразилия', efPc: 3.32, bcPc: 8.17, efTot: 700881588, bcTot: 1724923455 };
const INDIA: Country = { en: 'India', ru: 'Индия', efPc: 1.12, bcPc: 0.38, efTot: 1604721578, bcTot: 552231491 };
const NIGERIA: Country = { en: 'Nigeria', ru: 'Нигерия', efPc: 0.69, bcPc: 0.43, efTot: 157775448, bcTot: 97768095 };
const ETHIOPIA: Country = { en: 'Ethiopia', ru: 'Эфиопия', efPc: 0.86, bcPc: 0.5, efTot: 111239185, bcTot: 63755425 };
const WORLD: Country = { en: 'World', ru: 'Мир', efPc: 2.56, bcPc: 1.5, efTot: 20752205702, bcTot: 12142843961 };
const COUNTRIES: Country[] = [QATAR, UAE, USA, CHINA, BRAZIL, INDIA, NIGERIA, ETHIOPIA];

// Carbon component of the footprint of production, world 2023 (world_data, efp_carbon_gha), gha.
const WORLD_CARBON_GHA = 12514455979;
// Counted over the 183 countries with a published production footprint in 2023 (national_data, flags +, ++, +++):
// carbon is the largest of the six components in 97 of them.
const CARBON_LARGEST_COUNT = 97;
const COUNTRIES_WITH_FOOTPRINT = 183;
// Qatar consumption footprint 2023, gha per person (national_data, efc_total_percapita), for the comparison note.
const QATAR_CONSUMPTION_PC = 12.06;

// Footprint ÷ biocapacity, computed from the file's totals. Both are NFA totals, so this equals the ratio of the
// per-person values up to rounding. A ratio above 1 means the footprint is above the biocapacity: ecological overshoot.
const ratio = (c: Country) => c.efTot / c.bcTot;
const isOvershoot = (c: Country) => ratio(c) > 1;
const worldCarbonShare = WORLD_CARBON_GHA / WORLD.efTot;

type Mode = 'perPerson' | 'total';

const buttonStyle = (on: boolean): CSSProperties => ({
  padding: '6px 12px',
  borderRadius: 6,
  border: '1px solid #6b7280',
  background: on ? '#1d1d1d' : 'transparent',
  color: on ? '#ffffff' : 'inherit',
  cursor: 'pointer',
  fontSize: 14,
});

const headCell: CSSProperties = { padding: '5px 6px', borderBottom: '1px solid #9ca3af', textAlign: 'right', fontWeight: 700, verticalAlign: 'bottom' };
const bodyCell: CSSProperties = { padding: '5px 6px', borderBottom: '1px solid #d1d5db', textAlign: 'right' };
const boldRow: CSSProperties = { fontWeight: 700 };

const W = 640;
const H = 292;
const LEFT = 52;
const TOP = 24;
const BASE = 250;
const PLOT = BASE - TOP;
const BAR = 22;
const FOOTPRINT_COLOR = '#c2410c';
const BIOCAP_COLOR = '#5b8c3a';
const OVER_COLOR = '#b4480c';
const RESERVE_COLOR = '#2f6b3a';

export default function EcologicalFootprint({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [mode, setMode] = useState<Mode>('perPerson');
  const perPerson = mode === 'perPerson';
  const t = (en: string, rus: string) => (ru ? rus : en);
  const num = (x: number, digits: number) => {
    const [whole, frac] = x.toFixed(digits).split('.');
    const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ru ? ' ' : ',');
    return frac === undefined ? grouped : `${grouped}${ru ? ',' : '.'}${frac}`;
  };
  const name = (c: Country) => t(c.en, c.ru);
  const digits = perPerson ? 2 : 1;

  // Bars: gha per person, or million gha for the whole country.
  const value = (c: Country, kind: 'ef' | 'bc') => {
    if (perPerson) return kind === 'ef' ? c.efPc : c.bcPc;
    return (kind === 'ef' ? c.efTot : c.bcTot) / 1e6;
  };
  const drawn = perPerson ? [...COUNTRIES, WORLD] : COUNTRIES;
  const dataMax = Math.max(...drawn.map(c => Math.max(value(c, 'ef'), value(c, 'bc'))));
  const step = perPerson ? 2 : 1000;
  const topVal = Math.ceil(dataMax / step) * step;
  const scale = PLOT / topVal;
  const ticks: number[] = [];
  for (let v = 0; v <= topVal; v += step) ticks.push(v);
  const groupW = (W - LEFT - 8) / drawn.length;

  const title = t('Ecological footprint and biocapacity, 2023', 'Экологический след и биоёмкость, 2023 г.');
  const modeName = perPerson ? t('per person', 'на человека') : t('total for the country', 'всего по стране');
  const unitName = perPerson ? t('gha per person', 'gha на человека') : t('million gha', 'млн gha');
  const overLabel = t('overshoot', 'перерасход');
  const reserveLabel = t('reserve', 'резерв');
  const overList = COUNTRIES.filter(isOvershoot).map(name);
  const reserveList = COUNTRIES.filter(c => !isOvershoot(c)).map(name);
  const topPc = COUNTRIES.reduce((a, b) => (b.efPc > a.efPc ? b : a));
  const topTot = COUNTRIES.reduce((a, b) => (b.efTot > a.efTot ? b : a));
  const qatarRatio = ratio(QATAR);
  const worldRatio = ratio(WORLD);
  const carbonPct = Math.round((CARBON_LARGEST_COUNT / COUNTRIES_WITH_FOOTPRINT) * 100);
  const worldCarbonPct = Math.round(worldCarbonShare * 100);

  const intro = t(
    "The footprint of production is the land and sea area, in global hectares (gha), that a country's production needs: crops, grazing, timber, fish, built-up land and the forest needed to absorb CO₂ from fossil fuels and cement. The footprint of consumption counts the same land for what a country uses, including imports and exports; this chart uses production. Biocapacity is the productive land and sea the country has. Data year 2023, from the 2026 edition of the National Footprint and Biocapacity Accounts.",
    'След производства — площадь суши и моря в глобальных гектарах (gha), которую требует производство страны: посевы, пастбища, древесина, рыба, застроенные территории и лес для поглощения CO₂ от сжигания топлива и производства цемента. След потребления считает ту же площадь для того, что страна потребляет, с учётом импорта и экспорта; на этой диаграмме — след производства. Биоёмкость — продуктивные суша и море, которые есть в стране. Год данных — 2023, издание 2026 года.',
  );

  const worldTotalNote = t(
    `World, not drawn in the total view because it would make the countries unreadable: footprint ${num(WORLD.efTot / 1e6, 1)} million gha, biocapacity ${num(WORLD.bcTot / 1e6, 1)} million gha.`,
    `Мир не показан на диаграмме суммарных величин, иначе он сделает страны неразличимыми: след ${num(WORLD.efTot / 1e6, 1)} млн gha, биоёмкость ${num(WORLD.bcTot / 1e6, 1)} млн gha.`,
  );

  const exampleText = t(
    `Example, Qatar: footprint ${num(QATAR.efPc, 2)} ÷ biocapacity ${num(QATAR.bcPc, 2)} = ${num(qatarRatio, 1)}. The footprint is about ${Math.round(qatarRatio)} times the biocapacity.`,
    `Пример, Катар: след ${num(QATAR.efPc, 2)} ÷ биоёмкость ${num(QATAR.bcPc, 2)} = ${num(qatarRatio, 1)}. След примерно в ${Math.round(qatarRatio)} раз больше биоёмкости.`,
  );

  const overshootText = t(
    `Ecological overshoot (footprint above biocapacity): ${overList.join(', ')}. That is ${overList.length} of the ${COUNTRIES.length} countries, and the world too (ratio ${num(worldRatio, 1)}).`,
    `Экологический перерасход (след больше биоёмкости): ${overList.join(', ')}. Это ${overList.length} из ${COUNTRIES.length} стран, а также мир (отношение ${num(worldRatio, 1)}).`,
  );

  const reserveText = t(
    `Biocapacity above footprint (reserve): ${reserveList.join(', ')}.`,
    `Биоёмкость больше следа (резерв): ${reserveList.join(', ')}.`,
  );

  const highestText = t(
    `Among the countries shown, the highest footprint per person: ${name(topPc)}, ${num(topPc.efPc, 2)} gha. Among them, the highest total footprint: ${name(topTot)}, ${num(topTot.efTot / 1e6, 1)} million gha.`,
    `Среди показанных стран самый большой след на человека: ${name(topPc)}, ${num(topPc.efPc, 2)} gha. Среди них самый большой суммарный след: ${name(topTot)}, ${num(topTot.efTot / 1e6, 1)} млн gha.`,
  );

  const carbonText = t(
    `Carbon is the largest of the six components in ${CARBON_LARGEST_COUNT} of the ${COUNTRIES_WITH_FOOTPRINT} countries with a published production footprint (${carbonPct}%). For the world it is ${worldCarbonPct}% of the footprint: ${num(WORLD_CARBON_GHA / 1e6, 1)} of ${num(WORLD.efTot / 1e6, 1)} million gha.`,
    `Углерод — самый большой из шести компонентов в ${CARBON_LARGEST_COUNT} из ${COUNTRIES_WITH_FOOTPRINT} стран с опубликованным следом производства (${carbonPct}%). Для мира это ${worldCarbonPct}% следа: ${num(WORLD_CARBON_GHA / 1e6, 1)} из ${num(WORLD.efTot / 1e6, 1)} млн gha.`,
  );

  const consumptionText = t(
    `The chart uses the footprint of production for every country, because the UAE's consumption footprint is not published in this edition. The two can differ: Qatar's consumption footprint is ${num(QATAR_CONSUMPTION_PC, 2)} gha per person against ${num(QATAR.efPc, 2)} for production, because its imports carry more footprint than its exports.`,
    `На диаграмме для всех стран показан след производства, потому что след потребления ОАЭ в этом издании не опубликован. Они могут различаться: след потребления Катара составляет ${num(QATAR_CONSUMPTION_PC, 2)} gha на человека против ${num(QATAR.efPc, 2)} для производства, потому что в его импорте больше следа, чем в экспорте.`,
  );

  const countsItems = [
    t(
      'The footprint of production has six components, each in global hectares: cropland, grazing land, forest products, fishing grounds, built-up land, and the forest needed to absorb CO₂ from fossil fuels and cement (carbon).',
      'След производства складывается из шести компонентов в глобальных гектарах: пашня, пастбища, лесная продукция, рыбопромысловые акватории, застроенные территории и лес, нужный для поглощения CO₂ от топлива и цемента (углерод).',
    ),
    t(
      'Biocapacity counts the productive land and sea a country has, weighted by productivity against the world average, so one global hectare means the same in every country.',
      'Биоёмкость — продуктивные суша и море страны, пересчитанные с учётом продуктивности относительно среднемировой. Поэтому один глобальный гектар означает одно и то же в любой стране.',
    ),
  ];

  const notShownItems = [
    t(
      `Biocapacity is not sustainability. Brazil's reserve (${num(BRAZIL.bcPc, 2)} gha of biocapacity against a footprint of ${num(BRAZIL.efPc, 2)} gha per person) shows the area of land and sea, not how well they are managed. Soil loss, water use, pollution and biodiversity loss are not counted.`,
      `Биоёмкость — не то же, что устойчивость. Резерв Бразилии (${num(BRAZIL.bcPc, 2)} gha биоёмкости при следе ${num(BRAZIL.efPc, 2)} gha на человека) показывает площадь суши и моря, но не то, как ими управляют. Потеря почв, расход воды, загрязнение и потеря биоразнообразия не учтены.`,
    ),
    t(
      "The account is an estimate built from United Nations and other statistics, and data quality varies. In this edition the UAE's consumption footprint is not published, and 2024 and 2025 are marked as estimates, so the chart uses 2023.",
      'Этот подсчёт — оценка, построенная на статистике ООН и других источников, и качество данных неодинаково. В этом издании след потребления ОАЭ не опубликован, а 2024 и 2025 годы помечены как оценочные, поэтому на диаграмме 2023 год.',
    ),
    t(
      'A national average hides inequality within the country, and one year says nothing about trends.',
      'Среднее по стране скрывает неравенство внутри неё, а один год не показывает тенденций.',
    ),
  ];

  const sourcesText = t(
    'Source: National Footprint and Biocapacity Accounts, 2026 edition (Global Footprint Network accounts, now maintained by York University and the Footprint Data Foundation), national and world public data workbook, released 22 April 2026, version 1.0. Data year 2023. Per-person values are published to two decimals; totals are in global hectares and are shown here in million gha to one decimal place.',
    'Источник: National Footprint and Biocapacity Accounts, издание 2026 года (счета Global Footprint Network, теперь ведутся Йоркским университетом и Footprint Data Foundation), публичная таблица данных по странам и миру, выпуск от 22 апреля 2026 г., версия 1.0. Год данных — 2023. Значения на человека опубликованы с двумя знаками после запятой; общие величины даны в глобальных гектарах и показаны здесь в миллионах gha с одним знаком после запятой.',
  );

  return (
    <div>
      <p style={{ fontSize: 14, marginTop: 0 }}>{intro}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        <button type="button" aria-pressed={perPerson} onClick={() => setMode('perPerson')} style={buttonStyle(perPerson)}>
          {t('Per person (gha per person)', 'На человека (gha на человека)')}
        </button>
        <button type="button" aria-pressed={!perPerson} onClick={() => setMode('total')} style={buttonStyle(!perPerson)}>
          {t('Total for the country (million gha)', 'Всего по стране (млн gha)')}
        </button>
      </div>
      <p style={{ fontSize: 13, margin: '0 0 4px' }}>
        <strong>{t('Chart, ', 'График, ')}{unitName}</strong>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, marginBottom: 4 }}>
        <span>
          <span style={{ display: 'inline-block', width: 12, height: 12, background: FOOTPRINT_COLOR, marginRight: 6 }} />
          {t('Footprint of production', 'След производства')}
        </span>
        <span>
          <span style={{ display: 'inline-block', width: 12, height: 12, background: BIOCAP_COLOR, marginRight: 6 }} />
          {t('Biocapacity', 'Биоёмкость')}
        </span>
      </div>
      {/* on a phone the chart scrolls sideways instead of shrinking its labels below readable size */}
      <div style={{ overflowX: 'auto' }}>
      <ReadableDiagram lang={lang}><svg role="img" aria-label={`${title}: ${modeName}, ${unitName}`} viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: W, minWidth: 560, display: 'block' }}>
        {ticks.map(v => (
          <g key={`tick-${v}`}>
            <line x1={LEFT} x2={W - 4} y1={BASE - v * scale} y2={BASE - v * scale} stroke={v === 0 ? '#6b7280' : '#d1d5db'} strokeWidth={v === 0 ? 1.2 : 1} />
            <text x={LEFT - 6} y={BASE - v * scale + 4} textAnchor="end" fontSize={11} fill="currentColor">{num(v, 0)}</text>
          </g>
        ))}
        {drawn.map((c, i) => {
          const cx = LEFT + groupW * (i + 0.5);
          const efVal = value(c, 'ef');
          const bcVal = value(c, 'bc');
          const efH = efVal * scale;
          const bcH = bcVal * scale;
          const over = isOvershoot(c);
          return (
            <g key={c.en}>
              <rect x={cx - BAR - 2} y={BASE - efH} width={BAR} height={efH} fill={FOOTPRINT_COLOR} />
              <rect x={cx + 2} y={BASE - bcH} width={BAR} height={bcH} fill={BIOCAP_COLOR} />
              <text x={cx - BAR / 2 - 2} y={BASE - efH - 4} textAnchor="middle" fontSize={11} fill="currentColor">{num(efVal, digits)}</text>
              <text x={cx + BAR / 2 + 2} y={BASE - bcH - 4} textAnchor="middle" fontSize={11} fill="currentColor">{num(bcVal, digits)}</text>
              <text x={cx} y={BASE + 16} textAnchor="middle" fontSize={12} fontWeight="bold" fill="currentColor">{name(c)}</text>
              <text x={cx} y={BASE + 31} textAnchor="middle" fontSize={11} fill={over ? OVER_COLOR : RESERVE_COLOR}>{over ? overLabel : reserveLabel}</text>
            </g>
          );
        })}
      </svg></ReadableDiagram>
      </div>
      {!perPerson && <p style={{ fontSize: 13, marginTop: 6 }}>{worldTotalNote}</p>}

      <p style={{ marginTop: 12 }}>
        <strong>{t('Per person, 2023: footprint, biocapacity and their ratio', 'На человека, 2023 г.: след, биоёмкость и их отношение')}</strong>
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              <th style={{ ...headCell, textAlign: 'left' }}>{t('Country', 'Страна')}</th>
              <th style={headCell}>{t('Footprint, gha per person', 'След, gha на человека')}</th>
              <th style={headCell}>{t('Biocapacity, gha per person', 'Биоёмкость, gha на человека')}</th>
              <th style={headCell}>{t('Footprint ÷ biocapacity', 'След ÷ биоёмкость')}</th>
              <th style={{ ...headCell, textAlign: 'left' }}>{t('Status', 'Статус')}</th>
            </tr>
          </thead>
          <tbody>
            {[...COUNTRIES, WORLD].map(c => (
              <tr key={c.en} style={c === WORLD ? boldRow : undefined}>
                <td style={{ ...bodyCell, textAlign: 'left' }}>{name(c)}</td>
                <td style={bodyCell}>{num(c.efPc, 2)}</td>
                <td style={bodyCell}>{num(c.bcPc, 2)}</td>
                <td style={bodyCell}>{num(ratio(c), 1)}</td>
                <td style={{ ...bodyCell, textAlign: 'left', color: isOvershoot(c) ? OVER_COLOR : RESERVE_COLOR }}>
                  {isOvershoot(c) ? t('Overshoot', 'Перерасход') : t('Reserve', 'Резерв')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul style={{ marginTop: 12, paddingLeft: 18, fontSize: 14 }}>
        <li>{exampleText}</li>
        <li>{overshootText}</li>
        <li>{reserveText}</li>
        <li>{highestText}</li>
        <li>{carbonText}</li>
        <li>{consumptionText}</li>
      </ul>

      <p style={{ marginTop: 12 }}>
        <strong>{t('What the footprint counts', 'Что учитывает след')}</strong>
      </p>
      <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14 }}>
        {countsItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p style={{ marginTop: 12 }}>
        <strong>{t('What the numbers do not show', 'Чего не показывают эти цифры')}</strong>
      </p>
      <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14 }}>
        {notShownItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p style={{ marginTop: 10, fontSize: 13, opacity: 0.8 }}>{sourcesText}</p>
    </div>
  );
}
