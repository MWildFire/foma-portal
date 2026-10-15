import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Model values for the demographic transition model, per 1000 people per year. Illustrative, not data for one country.
// Each value is the rate at the END of its stage. The rate moves between the stage boundaries, so a fall starts at the
// boundary where the topic says it starts (death rate from stage 2, birth rate from stage 3), not in the middle of a stage.
const STAGES: { en: string; ru: string; cbr: number; cdr: number; note: { en: string; ru: string } }[] = [
  {
    en: '1 High stationary',
    ru: '1. Высокий стационар',
    cbr: 40,
    cdr: 35,
    note: {
      en: 'Both rates are high. Growth is slow because deaths almost balance births.',
      ru: 'Обе ставки высокие. Рост медленный, потому что смерти почти уравновешивают рождения.',
    },
  },
  {
    en: '2 Early expanding',
    ru: '2. Ранний рост',
    cbr: 40,
    cdr: 15,
    note: {
      en: 'The death rate falls fast while the birth rate stays high. Natural increase reaches its peak.',
      ru: 'Смертность быстро падает, а рождаемость остаётся высокой. Естественный прирост достигает пика.',
    },
  },
  {
    en: '3 Late expanding',
    ru: '3. Поздний рост',
    cbr: 25,
    cdr: 10,
    note: {
      en: 'The birth rate falls as families choose fewer children. Growth slows down.',
      ru: 'Рождаемость падает: семьи выбирают меньше детей. Рост замедляется.',
    },
  },
  {
    en: '4 Low stationary',
    ru: '4. Низкий стационар',
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
const STAGE_WIDTH = (RIGHT - LEFT) / STAGES.length;

// Stage i spans from boundary i to boundary i + 1. The first knot is the start of stage 1.
const xBoundary = (index: number): number => LEFT + index * STAGE_WIDTH;
const xCentre = (stage: number): number => xBoundary(stage) + STAGE_WIDTH / 2;
const yOf = (value: number): number => ZERO_Y - (value / MAX_VALUE) * (ZERO_Y - TOP_VALUE_Y);
// The rate at each boundary: the start of stage 1, then the end of each stage.
const knotsOf = (key: 'cbr' | 'cdr'): number[] => [STAGES[0][key], ...STAGES.map(item => item[key])];

export default function DemographicTransition({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [stage, setStage] = useState(0);
  const current = STAGES[stage];
  const natural = current.cbr - current.cdr;
  const cbrKnots = knotsOf('cbr');
  const cdrKnots = knotsOf('cdr');
  const cbrPoints = cbrKnots.map((value, index) => `${xBoundary(index)},${yOf(value)}`).join(' ');
  const cdrPoints = cdrKnots.map((value, index) => `${xBoundary(index)},${yOf(value)}`).join(' ');
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
      <ReadableDiagram lang={lang}><svg role="img" aria-label={title} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width="100%" style={{ maxWidth: 440, display: 'block' }}>
        <rect x={xBoundary(stage)} y={TOP_VALUE_Y - 6} width={STAGE_WIDTH} height={ZERO_Y - TOP_VALUE_Y + 12} fill="currentColor" fillOpacity={0.12} />
        {[10, 20, 30, 40, 50].map(value => (
          <g key={value} stroke="currentColor" strokeOpacity={0.15}>
            <line x1={LEFT} x2={RIGHT} y1={yOf(value)} y2={yOf(value)} />
            <text x={LEFT - 6} y={yOf(value) + 4} textAnchor="end" fontSize="10" fill="currentColor" stroke="none">{value}</text>
          </g>
        ))}
        <text x={LEFT - 6} y={ZERO_Y + 4} textAnchor="end" fontSize="10" fill="currentColor" stroke="none">0</text>
        {/* stage boundaries */}
        {STAGES.map((_, index) => (
          <line key={index} x1={xBoundary(index)} x2={xBoundary(index)} y1={TOP_VALUE_Y - 6} y2={ZERO_Y} stroke="currentColor" strokeOpacity={0.3} strokeDasharray="2 3" />
        ))}
        <line x1={LEFT} x2={LEFT} y1={TOP_VALUE_Y} y2={ZERO_Y} stroke="currentColor" strokeWidth={1.5} />
        <line x1={LEFT} x2={RIGHT} y1={ZERO_Y} y2={ZERO_Y} stroke="currentColor" strokeWidth={1.5} />
        <polyline points={cbrPoints} fill="none" stroke="currentColor" strokeWidth={2.5} />
        <polyline points={cdrPoints} fill="none" stroke="currentColor" strokeWidth={2.5} strokeDasharray="6 4" />
        {cbrKnots.map((value, index) => (
          <circle key={`cbr-${index}`} cx={xBoundary(index)} cy={yOf(value)} r={3} fill="currentColor" />
        ))}
        {cdrKnots.map((value, index) => (
          <circle key={`cdr-${index}`} cx={xBoundary(index)} cy={yOf(value)} r={3} fill="none" stroke="currentColor" strokeWidth={2} />
        ))}
        {STAGES.map((_, index) => (
          <text key={index} x={xCentre(index)} y={ZERO_Y + 16} textAnchor="middle" fontSize="11" fill="currentColor">{index + 1}</text>
        ))}
        <text x={(LEFT + RIGHT) / 2} y={HEIGHT - 4} textAnchor="middle" fontSize="11" fill="currentColor">
          {ru ? 'Стадия модели' : 'DTM stage'}
        </text>
        <text x={12} y={(TOP_VALUE_Y + ZERO_Y) / 2} textAnchor="middle" fontSize="10" fill="currentColor" transform={`rotate(-90 12 ${(TOP_VALUE_Y + ZERO_Y) / 2})`}>
          {ru ? 'Ставка, на 1000 в год' : 'Rate per 1000 a year'}
        </text>
        <text x={LEFT - 6} y={TOP_VALUE_Y - 8} textAnchor="end" fontSize="10" fill="currentColor">‰</text>
      </svg></ReadableDiagram>
      <p style={{ fontSize: 13, margin: '6px 0' }}>
        {ru
          ? 'Сплошная линия — рождаемость (CBR). Пунктир — смертность (CDR). Значения на 1000 человек в год; для каждой стадии это значение в её конце.'
          : 'Solid line: birth rate (CBR). Dashed line: death rate (CDR). Values per 1000 people per year; for each stage, the value at its end.'}
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
