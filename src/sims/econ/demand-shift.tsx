import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GraphSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Demand: a movement along D1 (price change) versus a shift of the whole curve (any other determinant).
// D1: P = 12 - 0.5Q, so Q = 2(12 - P). D2 = D1 shifted right by 6 units at every price: P = 15 - 0.5Q.
// New equilibrium (Tragakes ch.2 p.59, Fig 2.12a): supply S: P = 0.5Q crosses D1 at E (P1 6, Q1 12) and D2 at E1 (P2 7.5, Q2 15).
const D1 = fn(q => 12 - 0.5 * q, 0, 24, 24);
// D2 stops a little above the axis: its label stands right of the end, and the shared Graph moves labels that end beyond x 320.
const D2 = fn(q => 15 - 0.5 * q, 0, 27, 27);
const S = fn(q => 0.5 * q, 0, 26, 26);

const axes = {
  xMax: 30,
  yMax: 16,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const d1: CurveSpec = { id: 'd1', points: D1, tone: 'demand', label: { en: 'D1', ru: 'D1' } };
const d1Old: CurveSpec = { id: 'd1', points: D1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } };
const d2: CurveSpec = { id: 'd2', points: D2, tone: 'demand', label: { en: 'D2', ru: 'D2' } };
const supply: CurveSpec = { id: 's', points: S, tone: 'supply', label: { en: 'S', ru: 'S' } };

const base: GraphSpec = {
  ...axes,
  curves: [d1],
};

const symbol = (value: number, text: string): TickSpec => ({ value, label: { en: text, ru: text } });

// The two equilibria. E label stands in the free wedge right of E, E1 label in the wedge right of E1.
const markE: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 15, dy: 4 };
const markE1: MarkSpec = { id: 'E1', at: [15, 7.5], tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: 16, dy: 4 };

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
      en: 'An increase in income for a normal good, or a rise in the price of a substitute, can shift demand right, other things equal. A fall in income, or an income rise for an inferior good, need not have that direction. At P = 8 quantity demanded rises from 8 to 14, not because of the price.',
      ru: 'Рост дохода для нормального блага или цены субститута может сдвинуть спрос вправо при прочих равных. Снижение дохода или его рост для товара низшей категории не обязаны давать это направление. При P = 8 величина спроса растёт с 8 до 14 не из-за цены.',
    },
    graph: {
      ...axes,
      curves: [d1Old, d2],
      guides: [{ id: 'shift', from: [8, 8], to: [14, 8], tone: 'demand' }],
      marks: [
        { id: 'A', at: [8, 8], tone: 'muted', label: { en: 'A', ru: 'A' } },
        { id: 'C', at: [14, 8], tone: 'demand', label: { en: 'C (P 8)', ru: 'C (P 8)' } },
      ],
    },
  },
  {
    title: { en: 'New equilibrium after the shift', ru: 'Новое равновесие после сдвига' },
    text: {
      en: 'Supply S crosses D1 at E: price P1 = 6 and quantity Q1 = 12. After demand shifts right to D2, buyers want more than sellers offer at P1, so the price rises along S to the new equilibrium E1: P2 = 7.5 and Q2 = 15. Both the price and the quantity are higher.',
      ru: 'Предложение S пересекает D1 в точке E: цена P1 = 6 и количество Q1 = 12. После сдвига спроса вправо, в D2, при цене P1 покупатели хотят больше, чем предлагают продавцы, поэтому цена растёт вдоль S до нового равновесия E1: P2 = 7,5 и Q2 = 15. И цена, и количество выросли.',
    },
    graph: {
      ...axes,
      xTicks: [symbol(12, 'Q1'), symbol(15, 'Q2')],
      yTicks: [symbol(6, 'P1'), symbol(7.5, 'P2')],
      curves: [d1Old, d2, supply],
      guides: [
        { id: 'e-h', from: [0, 6], to: [12, 6], tone: 'muted' },
        { id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' },
        { id: 'e1-h', from: [0, 7.5], to: [15, 7.5], tone: 'policy' },
        { id: 'e1-v', from: [15, 0], to: [15, 7.5], tone: 'policy' },
      ],
      marks: [markE, markE1],
    },
  },
  {
    title: { en: 'Summary', ru: 'Итог' },
    text: {
      en: 'Price changes cause a movement along the curve. Other determinants shift the curve, so quantity demanded changes at every price and the market moves to a new equilibrium, from E to E1.',
      ru: 'Изменение цены вызывает движение вдоль кривой. Прочие детерминанты сдвигают кривую, поэтому величина спроса меняется при каждой цене, а рынок переходит в новое равновесие: из E в E1.',
    },
    graph: {
      ...axes,
      curves: [d1Old, d2, supply],
      marks: [markE, markE1],
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
