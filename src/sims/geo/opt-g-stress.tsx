import { useState } from 'react';
import type { Lang } from '../../contract/types';

// Illustrative urban stress index, not data. The user sets every value (0 to 100) and every weight (0 to 5).
// Higher stress scores mean more stress; for access indicators the stress score is 100 minus the access value.
// The index is the weighted average of the stress scores, so it always stays between 0 and 100.
interface Indicator { en: string; ru: string; inverse: boolean }

const INDICATORS: Indicator[] = [
  { en: 'Air pollution', ru: 'Загрязнение воздуха', inverse: false },
  { en: 'Flood risk', ru: 'Риск наводнений', inverse: false },
  { en: 'Housing unaffordability', ru: 'Недоступность жилья', inverse: false },
  { en: 'Access to transport (inverse)', ru: 'Доступ к транспорту (обратный)', inverse: true },
  { en: 'Access to green space (inverse)', ru: 'Доступ к зелёным зонам (обратный)', inverse: true },
];

const DEFAULT_VALUES = [70, 40, 80, 60, 20];
const DEFAULT_WEIGHTS = [2, 1, 2, 1, 2];

export default function OptGStressSim({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [values, setValues] = useState<number[]>(DEFAULT_VALUES);
  const [weights, setWeights] = useState<number[]>(DEFAULT_WEIGHTS);

  const setValue = (index: number, value: number): void =>
    setValues(previous => previous.map((old, j) => (j === index ? value : old)));
  const setWeight = (index: number, weight: number): void =>
    setWeights(previous => previous.map((old, j) => (j === index ? weight : old)));

  const stress = INDICATORS.map((indicator, i) => (indicator.inverse ? 100 - values[i] : values[i]));
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  const contributions = stress.map((score, i) => (totalWeight > 0 ? (weights[i] * score) / totalWeight : 0));
  const index = totalWeight > 0 ? contributions.reduce((sum, part) => sum + part, 0) : null;

  const fmt = (value: number, digits = 1): string => {
    const text = value.toFixed(digits);
    return ru ? text.replace('.', ',') : text;
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 8px', fontWeight: 600 }}>
        {ru ? 'Иллюстративная модель — не реальные данные.' : 'Illustrative — not real data.'}
      </p>
      <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.5 }}>
        {ru
          ? 'Значения задаёте вы (0–100): это не данные о городе. Высокий балл означает большую нагрузку; для доступа высокий балл означает меньше нагрузки, поэтому нагрузка = 100 минус балл. Веса нормируются: доля каждого показателя = его вес ÷ сумма весов. Веса — это субъективная оценка, а не измеренные значения.'
          : 'You set the values (0–100); they are not data about a city. A high score means more stress; for access a high score means less stress, so stress = 100 minus the score. Weights are normalised: each share = its weight ÷ the sum of weights. The weights are a judgement, not measured values.'}
      </p>

      <div>
        {INDICATORS.map((indicator, i) => (
          <div key={indicator.en} style={{ marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid rgba(127,127,127,0.25)' }}>
            <label style={{ display: 'block' }}>
              <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 14 }}>
                <span>{ru ? indicator.ru : indicator.en}</span>
                <strong>{values[i]}</strong>
              </span>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={values[i]}
                onChange={event => setValue(i, Number(event.target.value))}
                style={{ width: '100%' }}
              />
            </label>
            <label style={{ display: 'block', marginTop: 4 }}>
              <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 13 }}>
                <span>{ru ? 'Вес' : 'Weight'}</span>
                <span>
                  {weights[i]} · {ru ? 'доля' : 'share'} {totalWeight > 0 ? fmt((weights[i] / totalWeight) * 100, 0) : '0'}%
                </span>
              </span>
              <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={weights[i]}
                onChange={event => setWeight(i, Number(event.target.value))}
                style={{ width: '100%' }}
              />
            </label>
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
              <div aria-hidden="true" style={{ flex: 1, height: 10, borderRadius: 5, background: 'rgba(127,127,127,0.2)', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, contributions[i])}%`, height: '100%', background: 'currentColor', opacity: 0.7 }} />
              </div>
              <span style={{ minWidth: 92, textAlign: 'right' }}>
                {ru ? 'вклад ' : 'adds '}
                {fmt(contributions[i])}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p style={{ margin: '4px 0 0', fontSize: 16 }}>
        {ru ? 'Индекс городского стресса: ' : 'Urban stress index: '}
        <strong>{index === null ? '—' : fmt(index)}</strong>
        {' / 100'}
      </p>
      {index === null ? (
        <p style={{ margin: '4px 0 0', fontSize: 13 }}>
          {ru ? 'Задайте хотя бы один вес больше нуля.' : 'Set at least one weight above zero.'}
        </p>
      ) : null}
    </div>
  );
}
