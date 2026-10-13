import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type GraphSpec, type Step } from './_lib/graph';

// Demand: a movement along D1 (price change) versus a shift of the whole curve (any other determinant).
// D1: P = 12 - 0.5Q, so Q = 2(12 - P). D2 = D1 shifted right by 6 units at every price: P = 15 - 0.5Q.
const D1 = fn(q => 12 - 0.5 * q, 0, 24, 24);
const D2 = fn(q => 15 - 0.5 * q, 0, 30, 30);

const axes = {
  xMax: 30,
  yMax: 16,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const base: GraphSpec = {
  ...axes,
  curves: [{ id: 'd1', points: D1, tone: 'demand', label: { en: 'D1', ru: 'D1' } }],
};

const steps: Step[] = [
  {
    title: { en: 'Demand curve D1', ru: 'Кривая спроса D1' },
    text: {
      en: 'Demand slopes downwards: at a lower price, buyers want a larger quantity, all other things equal.',
      ru: 'Спрос идёт вниз: при более низкой цене покупатели хотят купить больше, при прочих равных.',
    },
    graph: base,
  },
  {
    title: { en: 'Movement along D1', ru: 'Движение вдоль D1' },
    text: {
      en: 'A fall in price from 8 to 6 moves buyers from A to B on the same curve. Only the quantity demanded changes, from 8 to 12.',
      ru: 'Падение цены с 8 до 6 переводит покупателей из точки A в точку B на той же кривой. Меняется только величина спроса: с 8 до 12.',
    },
    graph: {
      ...base,
      guides: [
        { id: 'a-h', from: [0, 8], to: [8, 8], tone: 'muted' },
        { id: 'a-v', from: [8, 0], to: [8, 8], tone: 'muted' },
        { id: 'b-h', from: [0, 6], to: [12, 6], tone: 'muted' },
        { id: 'b-v', from: [12, 0], to: [12, 6], tone: 'muted' },
      ],
      marks: [
        { id: 'A', at: [8, 8], tone: 'ink', label: { en: 'A (P 8)', ru: 'A (P 8)' } },
        { id: 'B', at: [12, 6], tone: 'ink', label: { en: 'B (P 6)', ru: 'B (P 6)' } },
      ],
    },
  },
  {
    title: { en: 'Shift of the whole curve to D2', ru: 'Сдвиг всей кривой в D2' },
    text: {
      en: 'A change in another determinant, such as income or the price of a substitute, moves the whole curve right. At P = 8 quantity demanded rises from 8 to 14, not because of the price.',
      ru: 'Изменение другого фактора, например дохода или цены субститута, сдвигает всю кривую вправо. При P = 8 величина спроса растёт с 8 до 14 не из-за цены.',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'd1', points: D1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } },
        { id: 'd2', points: D2, tone: 'demand', label: { en: 'D2', ru: 'D2' } },
      ],
      guides: [{ id: 'shift', from: [8, 8], to: [14, 8], tone: 'demand' }],
      marks: [
        { id: 'A', at: [8, 8], tone: 'muted', label: { en: 'A', ru: 'A' } },
        { id: 'C', at: [14, 8], tone: 'demand', label: { en: 'C (P 8)', ru: 'C (P 8)' } },
      ],
    },
  },
  {
    title: { en: 'Summary', ru: 'Итог' },
    text: {
      en: 'Price changes cause a movement along the curve. Other determinants shift the curve, so quantity demanded changes at every price.',
      ru: 'Изменение цены вызывает движение вдоль кривой. Прочие детерминанты сдвигают кривую, поэтому величина спроса меняется при каждой цене.',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'd1', points: D1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } },
        { id: 'd2', points: D2, tone: 'demand', label: { en: 'D2', ru: 'D2' } },
      ],
    },
  },
];

export default function DemandShift({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Demand: movement along the curve and shift of the curve', ru: 'Спрос: движение вдоль кривой и сдвиг кривой' }}
      steps={steps}
    />
  );
}
