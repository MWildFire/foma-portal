import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { Lang } from '../../contract/types';

// A teaching model, not a forecast. Starting population and food are both 1 (units).
// Population: P(t) = (1 + g)^t, growing geometrically (Malthus).
// Food, Malthus: F(t) = 1 + a·t, growing arithmetically. Food per person is F(t) ÷ P(t); it falls once population outgrows food.
// Food, Boserup: food per person = P(t)^(s − 1), where s is the response of food supply to population pressure (intensification,
// technical change). At s = 1 food per person stays at its starting level; above 1 it rises; below 1 it falls.
// The chart shows food per person for both views, so the two can be compared directly. s starts at 1, because Boserup's view is optimistic.
const YEARS = 100;
const FOOD_STEP = 0.08; // a: arithmetic increase in food per year

const W = 420;
const H = 260;
const LEFT = 40;
const RIGHT = 410;
const TOP = 46; // room for the legend above the plot, so that no label can cover a curve
const BOTTOM = 232;

function population(t: number, growth: number): number {
  return Math.pow(1 + growth, t);
}

// Food per person under Malthus: arithmetic food divided by the geometric population.
function malthusPerHead(t: number, growth: number): number {
  return (1 + FOOD_STEP * t) / population(t, growth);
}

// Food per person under Boserup: population pressure raises food supply in proportion s, so food per person grows as P^(s − 1).
function boserupPerHead(t: number, growth: number, response: number): number {
  return Math.pow(population(t, growth), response - 1);
}

// First year in which food per person under Malthus falls below its starting level (searched up to 300 years), or null.
function crossingYear(growth: number): number | null {
  for (let t = 0; t <= 300; t++) {
    if (malthusPerHead(t, growth) < 1) return t;
  }
  return null;
}

export default function MalthusBoserup({ lang }: { lang: Lang }) {
  const fmt = (value: number) => value.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const ru = lang === 'ru';
  const [growthPercent, setGrowthPercent] = useState(2.5);
  const [response, setResponse] = useState(1.2);
  const growth = growthPercent / 100;

  const xOf = (t: number): number => LEFT + (t / YEARS) * (RIGHT - LEFT);
  const maxValue = Math.max(1, malthusPerHead(0, growth), boserupPerHead(YEARS, growth, response));
  const yMax = Math.max(2, Math.ceil(maxValue));
  const yOf = (value: number): number => BOTTOM - (value / yMax) * (BOTTOM - TOP);
  const samples = Array.from({ length: YEARS / 2 + 1 }, (_, index) => index * 2);
  const line = (fn: (t: number) => number): string => samples.map(t => `${xOf(t)},${yOf(fn(t))}`).join(' ');

  const crossing = crossingYear(growth);
  const malthusResult = malthusPerHead(YEARS, growth);
  const boserupResult = boserupPerHead(YEARS, growth, response);
  const title = ru ? 'Еда на человека: Мальтус и Бозеруп' : 'Food per person: Malthus and Boserup';

  return (
    <div>
      <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: 12 }}>
        <label style={{ display: 'block' }}>
          {ru ? 'Рост населения: ' : 'Population growth: '}
          <strong>{growthPercent.toFixed(1)}%</strong> {ru ? 'в год' : 'per year'}
          <input type="range" min={1} max={3.5} step={0.5} value={growthPercent} onChange={event => setGrowthPercent(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
        <label style={{ display: 'block' }}>
          {ru ? 'Ответ технологий и интенсификации (s): ' : 'Boserup response of food supply (s): '}
          <strong>{fmt(response)}</strong>
          <input type="range" min={1} max={1.4} step={0.05} value={response} onChange={event => setResponse(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
      </div>
      <ReadableDiagram lang={lang}><svg role="img" aria-label={title} viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 460, display: 'block' }}>
        {/* legend above the plot */}
        <line x1={40} x2={60} y1={12} y2={12} stroke="#3f6b8c" strokeWidth={1.5} strokeDasharray="2 3" />
        <text x={66} y={16} fontSize="11" fill="currentColor">{ru ? 'Население = 1' : 'Population = 1'}</text>
        <line x1={190} x2={210} y1={12} y2={12} stroke="currentColor" strokeWidth={2} strokeDasharray="6 4" />
        <text x={216} y={16} fontSize="11" fill="currentColor">{ru ? 'Еда на человека по Мальтусу' : 'Food per person, Malthus'}</text>
        <line x1={40} x2={60} y1={30} y2={30} stroke="#3e8e5a" strokeWidth={2.5} />
        <text x={66} y={34} fontSize="11" fill="currentColor">{ru ? 'Еда на человека по Бозеруп' : 'Food per person, Boserup'}</text>

        <line x1={LEFT} x2={LEFT} y1={TOP} y2={BOTTOM} stroke="currentColor" strokeWidth={1.5} />
        <line x1={LEFT} x2={RIGHT} y1={BOTTOM} y2={BOTTOM} stroke="currentColor" strokeWidth={1.5} />
        <text x={12} y={(TOP + BOTTOM) / 2} textAnchor="middle" fontSize="10" fill="currentColor" transform={`rotate(-90 12 ${(TOP + BOTTOM) / 2})`}>
          {ru ? 'На человека, год 0 = 1' : 'Per person, year 0 = 1'}
        </text>
        {[0, 25, 50, 75, 100].map(t => (
          <text key={t} x={xOf(t)} y={BOTTOM + 14} textAnchor="middle" fontSize="10" fill="currentColor">{t}</text>
        ))}
        <text x={(LEFT + RIGHT) / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="currentColor">{ru ? 'Годы' : 'Years'}</text>
        <text x={LEFT - 6} y={TOP + 4} textAnchor="end" fontSize="10" fill="currentColor">{yMax}</text>
        <text x={LEFT - 6} y={yOf(1) + 4} textAnchor="end" fontSize="10" fill="currentColor">1</text>
        <text x={LEFT - 6} y={BOTTOM + 4} textAnchor="end" fontSize="10" fill="currentColor">0</text>
        <polyline points={line(() => 1)} fill="none" stroke="#3f6b8c" strokeWidth={1.5} strokeDasharray="2 3" />
        <polyline points={line(t => malthusPerHead(t, growth))} fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="6 4" />
        <polyline points={line(t => boserupPerHead(t, growth, response))} fill="none" stroke="#3e8e5a" strokeWidth={2.5} />
      </svg></ReadableDiagram>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>
          {crossing === null
            ? ru
              ? 'Мальтус: еда на человека не падает ниже стартового уровня в течение 300 лет при этих настройках.'
              : 'Malthus: food per person does not fall below the starting level within 300 years at these settings.'
            : ru
              ? `Мальтус: еда на человека падает ниже стартового уровня примерно с ${crossing}-го года. Дальше разрыв растёт.`
              : `Malthus: food per person falls below the starting level from about year ${crossing}. The gap then widens.`}
        </li>
        <li>
          {ru
            ? `Через ${YEARS} лет еды на человека по Мальтусу: ${fmt(malthusResult)} от стартового уровня.`
            : `After ${YEARS} years, Malthusian food per person: ${fmt(malthusResult)} of the starting level.`}
        </li>
        <li>
          {ru
            ? `По Бозеруп (s = ${fmt(response)}): еды на человека через ${YEARS} лет — ${fmt(boserupResult)} от стартового уровня. Значение 1 означает, что еда растёт вровень с населением.`
            : `Boserup (s = ${fmt(response)}): food per person after ${YEARS} years is ${fmt(boserupResult)} of the starting level. A value of 1 means food grows in line with population.`}
        </li>
      </ul>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Модель условная. Мальтус (1798) считал, что население растёт быстрее продовольствия, и еда на человека падает. Бозеруп (1965) показала, что рост давления на землю стимулирует интенсификацию и новые технологии: еда на человека растёт при s больше 1. Диапазон s начинается с 1: при s меньше 1 отклик не успевает за населением, и такой сценарий противоречит её взгляду.'
          : 'The model is illustrative. Malthus (1798) argued that population grows faster than food, so food per person falls. Boserup (1965) showed that population pressure can drive intensification and new technology: food per person rises when s is above 1. The range of s starts at 1, because below 1 the response does not keep up with population, which contradicts her view.'}
      </p>
    </div>
  );
}
