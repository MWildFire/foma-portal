import { useState } from 'react';
import type { Lang } from '../../contract/types';

// A teaching model, not a forecast. Starting population and food are both 1 (units).
// Population: P(t) = (1 + g)^t, growing geometrically (Malthus).
// Food, Malthus: F(t) = 1 + a·t, growing arithmetically.
// Food, Boserup: F(t) = P(t)^s, where s is the response to population pressure (intensification, technical change).
// At s = 1, food grows exactly as fast as population; above 1, food per person rises; below 1, it falls.
const YEARS = 100;
const FOOD_STEP = 0.08; // a: arithmetic increase in food per year

const W = 420;
const H = 260;
const LEFT = 40;
const RIGHT = 410;
const TOP = 14;
const BOTTOM = 232;

function population(t: number, growth: number): number {
  return Math.pow(1 + growth, t);
}

function malthusFood(t: number): number {
  return 1 + FOOD_STEP * t;
}

function boserupFood(t: number, growth: number, response: number): number {
  return Math.pow(population(t, growth), response);
}

// First year in which population is above Malthus's food supply (searched up to 300 years), or null.
function crossingYear(growth: number): number | null {
  for (let t = 0; t <= 300; t++) {
    if (population(t, growth) > malthusFood(t)) return t;
  }
  return null;
}

export default function MalthusBoserup({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [growthPercent, setGrowthPercent] = useState(2.5);
  const [response, setResponse] = useState(1.2);
  const growth = growthPercent / 100;

  const xOf = (t: number): number => LEFT + (t / YEARS) * (RIGHT - LEFT);
  const maxValue = Math.max(population(YEARS, growth), malthusFood(YEARS), boserupFood(YEARS, growth, response));
  const yMax = Math.max(2, Math.ceil(maxValue));
  const yOf = (value: number): number => BOTTOM - (value / yMax) * (BOTTOM - TOP);
  const samples = Array.from({ length: YEARS / 2 + 1 }, (_, index) => index * 2);
  const line = (fn: (t: number) => number): string => samples.map(t => `${xOf(t)},${yOf(fn(t))}`).join(' ');

  const crossing = crossingYear(growth);
  const malthusPerHead = malthusFood(YEARS) / population(YEARS, growth);
  const boserupPerHead = boserupFood(YEARS, growth, response) / population(YEARS, growth);
  const title = ru ? 'Население и продовольствие: Мальтус и Бозеруп' : 'Population and food: Malthus and Boserup';

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
          <strong>{response.toFixed(2)}</strong>
          <input type="range" min={0.8} max={1.4} step={0.05} value={response} onChange={event => setResponse(Number(event.target.value))} style={{ width: '100%' }} />
        </label>
      </div>
      <svg role="img" aria-label={title} viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 460, display: 'block' }}>
        <line x1={LEFT} x2={LEFT} y1={TOP} y2={BOTTOM} stroke="currentColor" strokeWidth={1.5} />
        <line x1={LEFT} x2={RIGHT} y1={BOTTOM} y2={BOTTOM} stroke="currentColor" strokeWidth={1.5} />
        {[0, 25, 50, 75, 100].map(t => (
          <text key={t} x={xOf(t)} y={BOTTOM + 14} textAnchor="middle" fontSize="10" fill="currentColor">{t}</text>
        ))}
        <text x={(LEFT + RIGHT) / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="currentColor">{ru ? 'Годы' : 'Years'}</text>
        <text x={LEFT - 6} y={TOP + 4} textAnchor="end" fontSize="10" fill="currentColor">{yMax}</text>
        <text x={LEFT - 6} y={BOTTOM + 4} textAnchor="end" fontSize="10" fill="currentColor">0</text>
        <polyline points={line(t => population(t, growth))} fill="none" stroke="#3f6b8c" strokeWidth={2.5} />
        <polyline points={line(t => malthusFood(t))} fill="none" stroke="currentColor" strokeWidth={2} strokeDasharray="6 4" />
        <polyline points={line(t => boserupFood(t, growth, response))} fill="none" stroke="#3e8e5a" strokeWidth={2.5} />
        <text x={xOf(70)} y={yOf(population(70, growth)) - 6} fontSize="11" fill="#3f6b8c">{ru ? 'Население' : 'Population'}</text>
        <text x={xOf(70)} y={yOf(malthusFood(70)) + 14} fontSize="11" fill="currentColor">{ru ? 'Еда по Мальтусу' : 'Food, Malthus'}</text>
        <text x={xOf(70)} y={yOf(boserupFood(70, growth, response)) - 6} fontSize="11" fill="#3e8e5a">{ru ? 'Еда по Бозеруп' : 'Food, Boserup'}</text>
      </svg>
      <ul style={{ marginTop: 12, paddingLeft: 18 }}>
        <li>
          {crossing === null
            ? ru
              ? 'Мальтус: население не догоняет линейный рост еды даже за 300 лет при этих настройках.'
              : 'Malthus: population does not catch up with arithmetic food supply within 300 years at these settings.'
            : ru
              ? `Мальтус: население превышает линейную продукцию еды примерно с ${crossing}-го года. Дальше разрыв растёт.`
              : `Malthus: population exceeds the arithmetic food supply from about year ${crossing}. The gap then widens.`}
        </li>
        <li>
          {ru
            ? `Через ${YEARS} лет еды на человека по Мальтусу: ${malthusPerHead.toFixed(2)} от стартового уровня.`
            : `After ${YEARS} years, Malthusian food per person: ${malthusPerHead.toFixed(2)} of the starting level.`}
        </li>
        <li>
          {ru
            ? `По Бозеруп (s = ${response.toFixed(2)}): еды на человека через ${YEARS} лет — ${boserupPerHead.toFixed(2)} от стартового уровня. Значение 1 означает, что еда растёт вровень с населением.`
            : `Boserup (s = ${response.toFixed(2)}): food per person after ${YEARS} years is ${boserupPerHead.toFixed(2)} of the starting level. A value of 1 means food grows in line with population.`}
        </li>
      </ul>
      <p style={{ fontSize: 13, opacity: 0.8 }}>
        {ru
          ? 'Модель условная. Мальтус (1798) считал, что население растёт быстрее еды; Бозеруп (1965) показал, что рост давления на землю стимулирует интенсификацию и новые технологии.'
          : 'The model is illustrative. Malthus (1798) argued that population grows faster than food; Boserup (1965) showed that population pressure can drive intensification and new technology.'}
      </p>
    </div>
  );
}
