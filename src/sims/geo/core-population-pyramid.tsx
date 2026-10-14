import { useState } from 'react';
import type { Lang } from '../../contract/types';
import { BANDS, CENTRE, GAP, MAX_BAR, barLength, bandForRow, femaleBarX, maleBarX, sharesOf } from './core-population-pyramid-logic';

const STAGES: { en: string; ru: string; note: { en: string; ru: string } }[] = [
  {
    en: '1 High stationary',
    ru: '1. Высокий стационар',
    note: {
      en: 'Birth and death rates are both high, so the population grows slowly. Few people live to old age: the pyramid is a triangle with a narrow top.',
      ru: 'Рождаемость и смертность высокие, поэтому население растёт медленно. До старости доживают немногие: пирамида — треугольник с узкой вершиной.',
    },
  },
  {
    en: '2 Early expanding',
    ru: '2. Ранний рост',
    note: {
      en: 'The death rate falls quickly (better food, water and health care) while the birth rate stays high. The base is very wide: the number of children keeps growing.',
      ru: 'Смертность быстро падает (лучше питание, вода и медицина), а рождаемость остаётся высокой. Основание очень широкое: детей становится всё больше.',
    },
  },
  {
    en: '3 Late expanding',
    ru: '3. Поздний рост',
    note: {
      en: 'The birth rate falls, so the base narrows, but the groups of young adults are large. Growth continues, though more slowly.',
      ru: 'Рождаемость падает, основание сужается, но группы молодых взрослых многочисленны. Рост продолжается, но медленнее.',
    },
  },
  {
    en: '4 Low stationary',
    ru: '4. Низкий стационар',
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

const WIDTH = 400;
const ROW = 30;
const TOP = 36;
const BOTTOM = TOP + BANDS.length * ROW;
const HEIGHT = BOTTOM + 40;
const GRID = [2, 4, 6, 8, 10];

export default function PopulationPyramid({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [stage, setStage] = useState(0);
  const shares = sharesOf(stage);
  const length = barLength;
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
        {BANDS.map((_, row) => {
          const index = bandForRow(row); // the top row is the oldest band
          const band = BANDS[index];
          const y = TOP + row * ROW;
          const width = length(shares[index]);
          return (
            <g key={band}>
              <rect x={maleBarX(width)} y={y + 3} width={width} height={ROW - 6} fill="#3f6b8c" />
              <rect x={femaleBarX()} y={y + 3} width={width} height={ROW - 6} fill="#b4604a" />
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
          ? 'Формы условные: это не данные конкретной страны. Группы по 10 лет (в реальных таблицах обычно по 5), мужчины и женщины в каждой группе равны — это упрощение. Для реальных стран смотрите UN World Population Prospects 2024.'
          : 'The shapes are illustrative, not data for one country. Bands are 10 years wide (real tables usually use 5), and men and women are equal in each band: a simplification. For real countries, see UN World Population Prospects 2024.'}
      </p>
    </div>
  );
}
