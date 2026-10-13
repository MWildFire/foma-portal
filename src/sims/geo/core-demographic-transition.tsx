import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Model values for the demographic transition model, per 1000 people per year. Illustrative, not data for one country.
const STAGES: { en: string; ru: string; cbr: number; cdr: number; note: { en: string; ru: string } }[] = [
  {
    en: '1 High stationary',
    ru: '1. Высокая стационарность',
    cbr: 40,
    cdr: 35,
    note: {
      en: 'Both rates are high. Growth is slow because deaths almost balance births.',
      ru: 'Обе ставки высокие. Рост медленный, потому что смерти почти уравновешивают рождения.',
    },
  },
  {
    en: '2 Early expanding',
    ru: '2. Раннее расширение',
    cbr: 40,
    cdr: 15,
    note: {
      en: 'The death rate falls fast while the birth rate stays high. Natural increase reaches its peak.',
      ru: 'Смертность быстро падает, а рождаемость остаётся высокой. Естественный прирост достигает пика.',
    },
  },
  {
    en: '3 Late expanding',
    ru: '3. Позднее расширение',
    cbr: 25,
    cdr: 10,
    note: {
      en: 'The birth rate falls as families choose fewer children. Growth slows down.',
      ru: 'Рождаемость падает: семьи выбирают меньше детей. Рост замедляется.',
    },
  },
  {
    en: '4 Low stationary',
    ru: '4. Низкая стационарность',
    cbr: 14,
    cdr: 9,
    note: {
      en: 'Both rates are low. Natural increase is small and the population is nearly stable.',
      ru: 'Обе ставки низкие. Естественный прирост мал, население почти стабильно.',
    },
  },
  {
    en: '5 Declining',
    ru: '5. Сокращение',
    cbr: 10,
    cdr: 11,
    note: {
      en: 'The death rate is above the birth rate: natural decrease. Ageing becomes the main feature.',
      ru: 'Смертность выше рождаемости: естественная убыль. Главная черта — старение населения.',
    },
  },
];

const WIDTH = 400;
const HEIGHT = 250;
const LEFT = 44;
const RIGHT = 390;
const TOP_VALUE_Y = 20;
const ZERO_Y = 210;
const MAX_VALUE = 50;

const xOf = (stage: number): number => LEFT + 30 + stage * ((RIGHT - LEFT - 60) / 4);
const yOf = (value: number): number => ZERO_Y - (value / MAX_VALUE) * (ZERO_Y - TOP_VALUE_Y);

export default function DemographicTransition({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [stage, setStage] = useState(0);
  const current = STAGES[stage];
  const natural = current.cbr - current.cdr;
  const cbrPoints = STAGES.map((item, index) => `${xOf(index)},${yOf(item.cbr)}`).join(' ');
  const cdrPoints = STAGES.map((item, index) => `${xOf(index)},${yOf(item.cdr)}`).join(' ');
  const title = ru
    ? 'Модель демографического перехода: рождаемость и смертность по стадиям'
    : 'Demographic transition model: birth and death rates by stage';

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
      <svg role="img" aria-label={title} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: 440, display: 'block' }}>
        {[10, 20, 30, 40, 50].map(value => (
          <g key={value} stroke="currentColor" strokeOpacity={0.15}>
            <line x1={LEFT} x2={RIGHT} y1={yOf(value)} y2={yOf(value)} />
            <text x={LEFT - 6} y={yOf(value) + 4} textAnchor="end" fontSize="10" fill="currentColor" stroke="none">{value}</text>
          </g>
        ))}
        <line x1={LEFT} x2={LEFT} y1={TOP_VALUE_Y} y2={ZERO_Y} stroke="currentColor" strokeWidth={1.5} />
        <line x1={LEFT} x2={RIGHT} y1={ZERO_Y} y2={ZERO_Y} stroke="currentColor" strokeWidth={1.5} />
        <rect x={xOf(stage) - 34} y={TOP_VALUE_Y - 6} width={68} height={ZERO_Y - TOP_VALUE_Y + 12} fill="currentColor" fillOpacity={0.12} />
        <polyline points={cbrPoints} fill="none" stroke="currentColor" strokeWidth={2.5} />
        <polyline points={cdrPoints} fill="none" stroke="currentColor" strokeWidth={2.5} strokeDasharray="6 4" />
        {STAGES.map((item, index) => (
          <g key={item.en}>
            <circle cx={xOf(index)} cy={yOf(item.cbr)} r={3.5} fill="currentColor" />
            <circle cx={xOf(index)} cy={yOf(item.cdr)} r={3.5} fill="none" stroke="currentColor" strokeWidth={2} />
            <text x={xOf(index)} y={ZERO_Y + 16} textAnchor="middle" fontSize="11" fill="currentColor">{index + 1}</text>
          </g>
        ))}
        <text x={(LEFT + RIGHT) / 2} y={HEIGHT - 4} textAnchor="middle" fontSize="11" fill="currentColor">
          {ru ? 'Стадия модели' : 'DTM stage'}
        </text>
        <text x={LEFT - 6} y={TOP_VALUE_Y - 8} textAnchor="end" fontSize="10" fill="currentColor">‰</text>
      </svg>
      <p style={{ fontSize: 13, margin: '6px 0' }}>
        {ru ? 'Сплошная линия — рождаемость (CBR). Пунктир — смертность (CDR). Значения на 1000 человек в год.' : 'Solid line: birth rate (CBR). Dashed line: death rate (CDR). Values per 1000 people per year.'}
      </p>
      <p style={{ marginTop: 10 }}>
        <strong>{ru ? current.ru : current.en}:</strong> {current.note[lang]}
      </p>
      <p>
        {ru ? 'Естественный прирост = рождаемость − смертность = ' : 'Natural increase = birth rate − death rate = '}
        {current.cbr} − {current.cdr} = <strong>{natural > 0 ? `+${natural}` : natural}</strong> {ru ? 'на 1000 в год' : 'per 1000 per year'}.
      </p>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru ? 'Значения условные (модельные), это не данные конкретной страны.' : 'The values are model values, not data for one country.'}
      </p>
    </div>
  );
}
