import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Used-car market (adverse selection). Symmetric information: demand D1 (P = 18 - Q) meets supply S1 (P = 2 + Q) at E1: Q 8, P 10.
// Asymmetric information: buyers pay for an average car, so demand falls to D2 (P = 14 - Q). Owners of good cars leave,
// so supply falls to S2 (P = 4 + Q), which is S1 shifted left by 2 units. The new equilibrium E2 is Q 5, P 9.
const D1 = fn(q => 18 - q, 0, 16, 16);
const D2 = fn(q => 14 - q, 0, 12, 12);
const S1 = fn(q => 2 + q, 0, 16, 16);
const S2 = fn(q => 4 + q, 0, 14, 14);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const d1: CurveSpec = { id: 'd1', points: D1, tone: 'demand', label: { en: 'D1', ru: 'D1' } };
const d1Old: CurveSpec = { id: 'd1', points: D1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } };
const d2: CurveSpec = { id: 'd2', points: D2, tone: 'demand', label: { en: 'D2', ru: 'D2' } };
const s1: CurveSpec = { id: 's1', points: S1, tone: 'supply', label: { en: 'S1', ru: 'S1' } };
const s1Old: CurveSpec = { id: 's1', points: S1, tone: 'muted', dashed: true, label: { en: 'S1', ru: 'S1' } };
const s2: CurveSpec = { id: 's2', points: S2, tone: 'supply', label: { en: 'S2', ru: 'S2' } };

const axes = {
  xMax: 20,
  yMax: 20,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const steps: Step[] = [
  {
    title: { en: 'Symmetric information', ru: 'Симметричная информация' },
    text: {
      en: 'When buyers can judge quality, demand D1 meets supply S1 at E1: 8 cars trade at a price of 10. Good cars sell for their true value.',
      ru: 'Когда покупатели могут оценить качество, спрос D1 пересекает предложение S1 в точке E1: продаётся 8 автомобилей по цене 10. Хорошие автомобили продаются по своей реальной стоимости.',
    },
    graph: {
      ...axes,
      curves: [d1, s1],
      guides: [
        { id: 'q1', from: [0, 10], to: [8, 10], tone: 'muted' },
        { id: 'q1-v', from: [8, 0], to: [8, 10], tone: 'muted' },
      ],
      marks: [{ id: 'e1', at: [8, 10], tone: 'ink', label: { en: 'E1', ru: 'E1' }, dx: -6, dy: 18 }],
      xTicks: ticks([8]),
      yTicks: ticks([10]),
    },
  },
  {
    title: { en: 'Buyers cannot tell quality', ru: 'Покупатели не видят качество' },
    text: {
      en: 'Buyers cannot tell good cars from bad ones, so they pay only the average value. The most buyers will pay falls from 18 to 14: demand shifts to D2.',
      ru: 'Покупатели не могут отличить хорошие автомобили от плохих, поэтому платят только среднюю стоимость. Максимальная цена покупателей падает с 18 до 14: спрос сдвигается к D2.',
    },
    graph: { ...axes, curves: [d1Old, d2, s1] },
  },
  {
    title: { en: 'Owners of good cars leave', ru: 'Владельцы хороших автомобилей уходят' },
    text: {
      en: 'Owners of good cars who value them above the average price stop selling. Supply falls to S2, which is S1 shifted left by 2 units.',
      ru: 'Владельцы хороших автомобилей, которые ценят их выше средней цены, перестают продавать. Предложение падает до S2: это S1, сдвинутая влево на 2 единицы.',
    },
    graph: { ...axes, curves: [d2, s1Old, s2] },
  },
  {
    title: { en: 'Smaller market (adverse selection)', ru: 'Меньший рынок (неблагоприятный отбор)' },
    text: {
      en: 'The market shrinks to Q 5 at P 9, below the symmetric Q 8. Good cars are under-supplied, and efficient trades are lost.',
      ru: 'Рынок сжимается до Q 5 при P 9, что ниже симметричного Q 8. Хороших автомобилей предлагается слишком мало, и выгодные сделки теряются.',
    },
    graph: {
      ...axes,
      curves: [d1Old, d2, s1Old, s2],
      guides: [{ id: 'x2', from: [5, 0], to: [5, 9], tone: 'ink' }, { id: 'p2', from: [0, 9], to: [5, 9], tone: 'muted' }],
      marks: [
        { id: 'e1', at: [8, 10], tone: 'muted', label: { en: 'E1', ru: 'E1' }, dx: -6, dy: 18 },
        { id: 'e2', at: [5, 9], tone: 'ink', label: { en: 'E2 (Q 5)', ru: 'E2 (Q 5)' }, dx: -66, dy: 4 },
      ],
      xTicks: ticks([5, 8]),
      yTicks: ticks([9]),
    },
  },
];

export default function AsymmetricInfo({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Used-car market: adverse selection', ru: 'Рынок подержанных автомобилей: неблагоприятный отбор' }}
      steps={steps}
    />
  );
}
