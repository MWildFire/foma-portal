import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GraphSpec, type Step, type TickSpec } from './_lib/graph';

// Per-unit subsidy of 3 on the same market: D: P = 12 - 0.5Q and S: P = 0.5Q. Before the subsidy E is (Q 12, P 6).
// The subsidy lowers the price sellers need for each unit by 3, so S shifts down by 3: S-s: P = 0.5Q - 3.
// New equilibrium: 12 - 0.5Q = 0.5Q - 3, so Q = 15. Consumers pay 4.5 (on D at Q 15, down from 6).
// Producers receive 7.5 (on S at Q 15, up from 6): 4.5 + 3 = 7.5. Cost of the subsidy = 3 x 15 = 45 (rectangle).
// Deadweight loss = 1/2 x 3 x 3 = 4.5 (triangle between Q 12 and Q 15: units cost more than they are worth).
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);
const Ss = fn(q => 0.5 * q - 3, 6, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([12, 15]),
  yTicks: ticks([4.5, 6, 7.5, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supplyOld: CurveSpec = { id: 's', points: S, tone: 'muted', dashed: true, label: { en: 'S', ru: 'S' } };
const supplySub: CurveSpec = { id: 'ss', points: Ss, tone: 'policy', label: { en: 'S-s', ru: 'S-s' } };

const E: GraphSpec['marks'] = [{ id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 2, dy: -27 }];
const newE = { id: 'E1', at: [15, 4.5] as [number, number], tone: 'policy' as const, label: { en: 'E1', ru: 'E1' }, dx: -51, dy: 16 };

const steps: Step[] = [
  {
    title: { en: 'Market before the subsidy', ru: 'Рынок до субсидии' },
    text: {
      en: 'Demand (D) and supply (S) cross at E: Q = 12 and P = 6. This is the free-market equilibrium.',
      ru: 'Спрос (D) и предложение (S) пересекаются в точке E: Q = 12 и P = 6. Это равновесие свободного рынка.',
    },
    graph: {
      ...axes,
      curves: [demand, { ...supplyOld, dashed: false, tone: 'supply' }],
      guides: [{ id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: E,
    },
  },
  {
    title: { en: 'Subsidy of 3 shifts supply down', ru: 'Субсидия 3 сдвигает предложение вниз' },
    text: {
      en: 'A subsidy of 3 per unit lowers the cost of each unit sold, so sellers accept 3 less for the same quantity. S shifts down by 3 to S-s.',
      ru: 'Субсидия 3 на единицу снижает издержки каждой проданной единицы, поэтому продавцы согласны на 3 меньше при том же количестве. S сдвигается вниз на 3 до S-s.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplySub],
      guides: [{ id: 'gap', from: [18, 6], to: [18, 9], tone: 'policy' }],
      marks: E,
    },
  },
  {
    title: { en: 'New equilibrium at Q 15', ru: 'Новое равновесие при Q 15' },
    text: {
      en: 'The new equilibrium is E1 at Q = 15. Consumers pay 4.5, down from 6 (the blue line to D). Producers receive 7.5, up from 6 (the orange line to S), because the subsidy adds 3.',
      ru: 'Новое равновесие E1 при Q = 15. Потребители платят 4.5, меньше, чем 6 (синяя линия к D). Производители получают 7.5, больше, чем 6 (оранжевая линия к S), потому что субсидия добавляет 3.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplySub],
      guides: [
        { id: 'q15', from: [15, 0], to: [15, 7.5], tone: 'ink' },
        { id: 'pc', from: [0, 4.5], to: [15, 4.5], tone: 'demand' },
        { id: 'pp', from: [0, 7.5], to: [15, 7.5], tone: 'supply' },
      ],
      marks: [newE, { id: 'Sp', at: [15, 7.5], tone: 'supply' }],
    },
  },
  {
    title: { en: 'Cost of the subsidy', ru: 'Стоимость субсидии' },
    text: {
      en: 'The government pays 3 per unit on 15 units: 3 x 15 = 45. This is the purple rectangle between the consumers price 4.5 and the producers price 7.5.',
      ru: 'Государство платит 3 за единицу на 15 единицах: 3 x 15 = 45. Это фиолетовый прямоугольник между ценой потребителя 4.5 и ценой производителя 7.5.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplySub],
      areas: [{ id: 'cost', points: [[0, 4.5], [15, 4.5], [15, 7.5], [0, 7.5]], tone: 'policy' }],
      guides: [
        { id: 'q15', from: [15, 0], to: [15, 7.5], tone: 'ink' },
        { id: 'pc', from: [0, 4.5], to: [15, 4.5], tone: 'demand' },
        { id: 'pp', from: [0, 7.5], to: [15, 7.5], tone: 'supply' },
      ],
      marks: [newE, { id: 'Sp', at: [15, 7.5], tone: 'supply' }],
    },
  },
  {
    title: { en: 'Deadweight loss (complete picture)', ru: 'Чистые потери (полная картина)' },
    text: {
      en: 'Output is above the efficient 12. Units from 12 to 15 cost more than they are worth, so the loss is 1/2 x 3 x 3 = 4.5: the red triangle (DWL).',
      ru: 'Выпуск выше эффективного уровня 12. Единицы с 12 до 15 стоят дороже, чем приносят пользы, поэтому потери равны 1/2 x 3 x 3 = 4.5: красный треугольник (DWL).',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplySub],
      areas: [
        { id: 'cost', points: [[0, 4.5], [15, 4.5], [15, 7.5], [0, 7.5]], tone: 'policy' },
        { id: 'dwl', points: [[12, 6], [15, 4.5], [15, 7.5]], tone: 'loss' },
      ],
      guides: [
        { id: 'pc', from: [0, 4.5], to: [15, 4.5], tone: 'demand' },
        { id: 'pp', from: [0, 7.5], to: [15, 7.5], tone: 'supply' },
        { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 4.5', ru: 'потери 4.5' }, labelAt: 'end' },
      ],
      marks: [...E, newE, { id: 'Sp', at: [15, 7.5], tone: 'supply' }],
    },
  },
];

export default function Subsidy({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Subsidy: lower consumer price, higher producer price, cost and deadweight loss', ru: 'Субсидия: цена для потребителя ниже, цена для производителя выше' }}
      steps={steps}
    />
  );
}
