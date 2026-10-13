import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative age–sex shapes for the five stages of the demographic transition model. They are not data for any country.
// Relative weights for nine 10-year bands, from 0–9 (bottom) to 80+ (top). Each sex carries half of the population.
const BANDS = ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'];
const WEIGHTS: number[][] = [
  [13, 12, 11, 10, 9, 8, 6, 4, 2],
  [17, 16, 13, 10, 7, 5, 3, 2, 1],
  [10, 11, 12, 12, 11, 9, 7, 5, 3],
  [7, 8, 10, 11, 11, 10, 9, 7, 5],
  [5, 6, 7, 8, 9, 10, 11, 12, 10],
];

const STAGES: { en: string; ru: string; note: { en: string; ru: string } }[] = [
  {
    en: '1 High stationary',
    ru: '1. Высокая стационарность',
    note: {
      en: 'Birth and death rates are both high, so the population grows slowly. Few people live to old age: the pyramid is a triangle with a narrow top.',
      ru: 'Рождаемость и смертность высокие, поэтому население растёт медленно. До старости доживают немногие: пирамида — треугольник с узкой вершиной.',
    },
  },
  {
    en: '2 Early expanding',
    ru: '2. Раннее расширение',
    note: {
      en: 'The death rate falls quickly (better food, water and health care) while the birth rate stays high. The base is very wide: the number of children keeps growing.',
      ru: 'Смертность быстро падает (лучше питание, вода и медицина), а рождаемость остаётся высокой. Основание очень широкое: детей становится всё больше.',
    },
  },
  {
    en: '3 Late expanding',
    ru: '3. Позднее расширение',
    note: {
      en: 'The birth rate falls, so the base narrows, but the groups of young adults are large. Growth continues, though more slowly.',
      ru: 'Рождаемость падает, основание сужается, но группы молодых взрослых многочисленны. Рост продолжается, но медленнее.',
    },
  },
  {
    en: '4 Low stationary',
    ru: '4. Низкая стационарность',
    note: {
      en: 'Birth and death rates are both low and the population is almost stable. The middle and older bands are wider than the base.',
      ru: 'Рождаемость и смертность низкие, население почти стабильно. Средние и старшие группы шире основания.',
    },
  },
  {
    en: '5 Declining',
    ru: '5. Сокращение',
    note: {
      en: 'The birth rate is at or below the death rate, so the population falls or ages quickly. The top of the pyramid is wider than the base.',
      ru: 'Рождаемость на уровне смертности или ниже её, поэтому население сокращается или быстро стареет. Вершина шире основания.',
    },
  },
];

// Each sex has half of the population, so a band's share of the total is weight / sum × 50 (per cent).
function sharesOf(stage: number): number[] {
  const weights = WEIGHTS[stage];
  const sum = weights.reduce((total, weight) => total + weight, 0);
  return weights.map(weight => (weight / sum) * 50);
}

// One scale for all five stages, so that the shapes can be compared directly.
const MAX_SHARE = Math.max(...WEIGHTS.map((_, stage) => Math.max(...sharesOf(stage))));

const WIDTH = 400;
const ROW = 30;
const TOP = 36;
const CENTRE = 200;
const GAP = 40;        // free space on both sides of the centre, for the age labels
const MAX_BAR = 140;   // length in pixels of the largest band
const BOTTOM = TOP + BANDS.length * ROW;
const HEIGHT = BOTTOM + 40;
const GRID = [2, 4, 6, 8, 10];

export default function PopulationPyramid({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [stage, setStage] = useState(0);
  const shares = sharesOf(stage);
  const length = (share: number): number => (share / MAX_SHARE) * MAX_BAR;
  const title = ru ? `Возрастно-половая пирамида, стадия ${stage + 1}` : `Age–sex pyramid, DTM stage ${stage + 1}`;

  return (
    <div>
      <div role="group" aria-label={ru ? 'Стадии модели' : 'DTM stages'} style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {STAGES.map((item, index) => (
          <button
            key={item.en}
            type="button"
            aria-pressed={index === stage}
            onClick={() => setStage(index)}
            style={{
              padding: '4px 10px',
              borderRadius: 6,
              border: '1px solid currentColor',
              background: index === stage ? 'rgba(127,127,127,0.25)' : 'transparent',
              color: 'inherit',
              fontWeight: index === stage ? 700 : 400,
              cursor: 'pointer',
            }}
          >
            {ru ? item.ru : item.en}
          </button>
        ))}
      </div>
      <svg role="img" aria-label={title} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: 420, display: 'block' }}>
        <text x={CENTRE - GAP - MAX_BAR / 2} y={20} textAnchor="middle" fontSize="13" fill="currentColor">
          {ru ? 'Мужчины' : 'Male'}
        </text>
        <text x={CENTRE + GAP + MAX_BAR / 2} y={20} textAnchor="middle" fontSize="13" fill="currentColor">
          {ru ? 'Женщины' : 'Female'}
        </text>
        {GRID.map(percent => (
          <g key={percent} stroke="currentColor" strokeOpacity={0.18}>
            <line x1={CENTRE - GAP - length(percent)} x2={CENTRE - GAP - length(percent)} y1={TOP - 4} y2={BOTTOM} />
            <line x1={CENTRE + GAP + length(percent)} x2={CENTRE + GAP + length(percent)} y1={TOP - 4} y2={BOTTOM} />
            <text x={CENTRE - GAP - length(percent)} y={BOTTOM + 14} textAnchor="middle" fontSize="10" fill="currentColor">{percent}%</text>
            <text x={CENTRE + GAP + length(percent)} y={BOTTOM + 14} textAnchor="middle" fontSize="10" fill="currentColor">{percent}%</text>
          </g>
        ))}
        {BANDS.map((band, row) => {
          const index = BANDS.length - 1 - row; // the top row is the oldest band
          const y = TOP + row * ROW;
          const width = length(shares[index]);
          return (
            <g key={band}>
              <rect x={CENTRE - GAP - width} y={y + 3} width={width} height={ROW - 6} fill="#3f6b8c" />
              <rect x={CENTRE + GAP} y={y + 3} width={width} height={ROW - 6} fill="#b4604a" />
              <text x={CENTRE} y={y + ROW / 2 + 4} textAnchor="middle" fontSize="11" fill="currentColor">{band}</text>
            </g>
          );
        })}
        <text x={CENTRE} y={HEIGHT - 6} textAnchor="middle" fontSize="11" fill="currentColor">
          {ru ? 'Доля в общем населении, %' : 'Share of the total population, %'}
        </text>
      </svg>
      <p style={{ marginTop: 12 }}>{STAGES[stage].note[lang]}</p>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Формы условные: это не данные конкретной страны. Для реальных стран смотрите UN World Population Prospects 2024.'
          : 'The shapes are illustrative, not data for one country. For real countries, see UN World Population Prospects 2024.'}
      </p>
    </div>
  );
}
