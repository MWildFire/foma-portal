import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Cross-price elasticity of demand (XED): demand for good A when the price of good B changes.
// D1 (baseline): P = 12 - 0.5Q, so Q = 24 - 2P. At P 6, Q = 12.
// Substitutes (price of B rises): D2 = D1 shifted right by 6 units at every price, P = 15 - 0.5Q. At P 6, Q = 18.
// Complements (price of B rises): D3 = D1 shifted left by 6 units at every price, P = 9 - 0.5Q. At P 6, Q = 6.
const D1 = fn(q => 12 - 0.5 * q, 0, 24, 1);
const D2 = fn(q => 15 - 0.5 * q, 0, 28, 1);
const D3 = fn(q => 9 - 0.5 * q, 0, 18, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 30,
  yMax: 16,
  xLabel: { en: 'Quantity of A (Q)', ru: 'Количество A (Q)' },
  yLabel: { en: 'Price of A (P)', ru: 'Цена A (P)' },
  xTicks: ticks([6, 12, 18, 24]),
  yTicks: ticks([2, 4, 6, 8, 10, 12, 14]),
};

const baseline: CurveSpec = { id: 'd1', points: D1, tone: 'demand', label: { en: 'D1', ru: 'D1' } };
const baselineOld: CurveSpec = { id: 'd1', points: D1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } };

const steps: Step[] = [
  {
    title: { en: 'Demand for good A', ru: 'Спрос на благо A' },
    text: {
      en: 'Demand for good A (for example tea or cars) is D1. At P 6 buyers want 12 units of A. The price of good B is held fixed in this picture.',
      ru: 'Спрос на благо A (например, чай или автомобили) описан кривой D1. При P = 6 покупатели хотят 12 единиц блага A. Цена блага B на этом рисунке не меняется.',
    },
    graph: {
      ...axes,
      curves: [baseline],
      marks: [{ id: 'X', at: [12, 6], tone: 'ink', label: { en: 'X (P 6, Q 12)', ru: 'X (P 6, Q 12)' }, dx: 8, dy: -10 }],
    },
  },
  {
    title: { en: 'Substitutes: demand shifts right', ru: 'Субституты: спрос сдвигается вправо' },
    text: {
      en: 'Good A is tea and good B is coffee: they are substitutes. When the price of B rises, demand for A rises at every price: D1 shifts right to D2. At P 6 quantity demanded rises from 12 to 18, so XED is positive.',
      ru: 'Благо A — чай, благо B — кофе: это субституты (заменители). Когда цена блага B растёт, спрос на A растёт при каждой цене: D1 сдвигается вправо, в D2. При P = 6 величина спроса растёт с 12 до 18, поэтому перекрёстная эластичность спроса (cross-price elasticity of demand, XED) положительна.',
    },
    graph: {
      ...axes,
      curves: [
        baselineOld,
        { id: 'd2', points: D2, tone: 'gain', label: { en: 'D2', ru: 'D2' } },
      ],
      guides: [{ id: 'shift2', from: [12, 6], to: [18, 6], tone: 'gain' }],
      marks: [
        { id: 'X', at: [12, 6], tone: 'muted' },
        { id: 'Y', at: [18, 6], tone: 'gain', label: { en: 'Y (Q 18)', ru: 'Y (Q 18)' }, dx: 8, dy: -10 },
      ],
    },
  },
  {
    title: { en: 'Complements: demand shifts left', ru: 'Комплементы: спрос сдвигается влево' },
    text: {
      en: 'Good A is cars and good B is petrol: they are complements. When the price of B rises, demand for A falls at every price: D1 shifts left to D3. At P 6 quantity demanded falls from 12 to 6, so XED is negative.',
      ru: 'Благо A — автомобили, благо B — бензин: это комплементы (дополняющие блага). Когда цена блага B растёт, спрос на A падает при каждой цене: D1 сдвигается влево, в D3. При P = 6 величина спроса падает с 12 до 6, поэтому XED отрицательна.',
    },
    graph: {
      ...axes,
      curves: [
        baselineOld,
        { id: 'd3', points: D3, tone: 'loss', label: { en: 'D3', ru: 'D3' } },
      ],
      guides: [{ id: 'shift3', from: [6, 6], to: [12, 6], tone: 'loss' }],
      marks: [
        { id: 'X', at: [12, 6], tone: 'muted' },
        { id: 'Z', at: [6, 6], tone: 'loss', label: { en: 'Z (Q 6)', ru: 'Z (Q 6)' }, dx: -30, dy: 16 },
      ],
    },
  },
  {
    title: { en: 'Summary: sign of XED and shift', ru: 'Итог: знак XED и сдвиг спроса' },
    text: {
      en: 'Substitutes: XED is positive and demand shifts right. Complements: XED is negative and demand shifts left. The larger the size of XED, the closer the goods are related.',
      ru: 'Субституты: XED положительна, спрос сдвигается вправо. Комплементы: XED отрицательна, спрос сдвигается влево. Чем больше XED по модулю, тем теснее связаны блага.',
    },
    graph: {
      ...axes,
      curves: [
        baseline,
        { id: 'd2', points: D2, tone: 'gain', label: { en: 'D2', ru: 'D2' } },
        { id: 'd3', points: D3, tone: 'loss', label: { en: 'D3', ru: 'D3' } },
      ],
      marks: [
        { id: 'X', at: [12, 6], tone: 'ink', label: { en: 'X', ru: 'X' }, dx: 8, dy: -10 },
        { id: 'Y', at: [18, 6], tone: 'gain', label: { en: 'Y', ru: 'Y' }, dx: 8, dy: -10 },
        { id: 'Z', at: [6, 6], tone: 'loss', label: { en: 'Z', ru: 'Z' }, dx: -30, dy: 16 },
      ],
    },
  },
];

export default function Xed({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Cross-price elasticity of demand: substitutes and complements', ru: 'Перекрёстная эластичность спроса: субституты и комплементы' }}
      steps={steps}
    />
  );
}
