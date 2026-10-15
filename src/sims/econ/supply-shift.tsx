import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Supply. S1: P = 2 + 0.5Q, so Q = 2P - 4. A change in price moves along S1.
// A cost rise gives S2: P = 4 + 0.5Q. At every price supply falls by 4 units.
// A technology gain gives S3: P = 0.5Q. At every price supply rises by 4 units.
// New equilibrium (Tragakes ch.2 p.60, Fig 2.13): demand D: P = 12 - 0.5Q crosses S1 at E (P1 7, Q1 10),
// S2 at E1 (P2 8, Q2 8) after the cost rise, and S3 at E1 (P2 6, Q2 12) after the technology gain.
const S1 = fn(q => 2 + 0.5 * q, 0, 24, 1);
const S2 = fn(q => 4 + 0.5 * q, 0, 20, 1);
// S3 stops at Q 27 so that its label stands right of the end, clear of the label of S1.
const S3 = fn(q => 0.5 * q, 0, 27, 1);
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 30,
  yMax: 16,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([4, 8, 12, 16, 20, 24, 28]),
  yTicks: ticks([2, 4, 6, 8, 10, 12, 14]),
};

const s1: CurveSpec = { id: 's1', points: S1, tone: 'supply', label: { en: 'S1', ru: 'S1' } };
const s1Old: CurveSpec = { id: 's1', points: S1, tone: 'muted', dashed: true, label: { en: 'S1', ru: 'S1' } };
const s2: CurveSpec = { id: 's2', points: S2, tone: 'loss', label: { en: 'S2', ru: 'S2' } };
const s3: CurveSpec = { id: 's3', points: S3, tone: 'gain', label: { en: 'S3', ru: 'S3' } };
const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };

const symbol = (value: number, text: string): TickSpec => ({ value, label: { en: text, ru: text } });
// The labels of the two equilibria stand above the points, in the space between the rising and the falling curve.
const markE: MarkSpec = { id: 'E', at: [10, 7], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: -4, dy: -9 };
const markE1 = (at: [number, number]): MarkSpec => ({ id: 'E1', at, tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: -7, dy: -9 });

const steps: Step[] = [
  {
    title: { en: 'Upward-sloping supply', ru: 'Восходящая кривая предложения' },
    text: {
      en: 'Supply slopes upwards: at a higher price firms are willing to supply more, all other things equal. S1: P = 2 + 0.5Q.',
      ru: 'Предложение (supply) растёт вверх: при более высокой цене фирмы готовы продать больше, при прочих равных. S1: P = 2 + 0.5Q.',
    },
    graph: { ...axes, curves: [s1] },
  },
  {
    title: { en: 'Movement along S1', ru: 'Движение вдоль S1' },
    text: {
      en: 'A rise in price from 6 to 10 moves producers from A to B on the same curve. Only the quantity supplied changes: from 8 to 16.',
      ru: 'Рост цены с 6 до 10 переводит производителей из точки A в точку B на той же кривой. Меняется только величина предложения: с 8 до 16.',
    },
    graph: {
      ...axes,
      curves: [s1],
      guides: [
        { id: 'a-h', from: [0, 6], to: [8, 6], tone: 'muted' },
        { id: 'a-v', from: [8, 0], to: [8, 6], tone: 'muted' },
        { id: 'b-h', from: [0, 10], to: [16, 10], tone: 'muted' },
        { id: 'b-v', from: [16, 0], to: [16, 10], tone: 'muted' },
      ],
      marks: [
        { id: 'A', at: [8, 6], tone: 'supply', label: { en: 'A (P 6, Q 8)', ru: 'A (P 6, Q 8)' }, dx: 8, dy: 16 },
        { id: 'B', at: [16, 10], tone: 'supply', label: { en: 'B (P 10, Q 16)', ru: 'B (P 10, Q 16)' }, dx: 8, dy: 16 },
      ],
    },
  },
  {
    title: { en: 'Cost rise: supply shifts left', ru: 'Рост издержек: предложение сдвигается влево' },
    text: {
      en: 'A rise in costs, such as wages or fuel, lowers supply: at P = 6 firms now supply 4 instead of 8. The whole curve shifts left to S2: P = 4 + 0.5Q.',
      ru: 'Рост издержек, например зарплат или топлива, снижает предложение: при P = 6 фирмы теперь продают 4 вместо 8. Вся кривая сдвигается влево, в S2: P = 4 + 0.5Q.',
    },
    graph: {
      ...axes,
      curves: [s1Old, s2],
      guides: [{ id: 'shift2', from: [4, 6], to: [8, 6], tone: 'loss' }],
      marks: [
        { id: 'A', at: [8, 6], tone: 'muted', label: { en: 'A (Q 8)', ru: 'A (Q 8)' }, dx: 8, dy: 16 },
        { id: 'C', at: [4, 6], tone: 'loss', label: { en: 'C (Q 4)', ru: 'C (Q 4)' }, dx: 8, dy: 32 },
      ],
    },
  },
  {
    title: { en: 'New equilibrium after a cost rise', ru: 'Новое равновесие после роста издержек' },
    text: {
      en: 'Demand D crosses S1 at E: price P1 = 7 and quantity Q1 = 10. After supply shifts left to S2, sellers offer less than buyers want at P1, so the price rises along D to the new equilibrium E1: P2 = 8 and Q2 = 8. The price is higher and the quantity is lower.',
      ru: 'Спрос D пересекает S1 в точке E: цена P1 = 7 и количество Q1 = 10. После сдвига предложения влево, в S2, при цене P1 продавцы предлагают меньше, чем хотят купить покупатели, поэтому цена растёт вдоль D до нового равновесия E1: P2 = 8 и Q2 = 8. Цена выше, количество меньше.',
    },
    graph: {
      ...axes,
      xTicks: [symbol(8, 'Q2'), symbol(10, 'Q1')],
      yTicks: [symbol(7, 'P1'), symbol(8, 'P2')],
      curves: [s1Old, s2, demand],
      guides: [
        { id: 'e-h', from: [0, 7], to: [10, 7], tone: 'muted' },
        { id: 'e-v', from: [10, 0], to: [10, 7], tone: 'muted' },
        { id: 'e1-h', from: [0, 8], to: [8, 8], tone: 'policy' },
        { id: 'e1-v', from: [8, 0], to: [8, 8], tone: 'policy' },
      ],
      marks: [markE, markE1([8, 8])],
    },
  },
  {
    title: { en: 'Technology gain: supply shifts right', ru: 'Улучшение технологии: предложение сдвигается вправо' },
    text: {
      en: 'Better technology lowers costs, so at each price firms supply more. At P = 6 the quantity rises from 8 to 12: the curve shifts right to S3: P = 0.5Q.',
      ru: 'Лучшая технология снижает издержки, поэтому при каждой цене фирмы предлагают больше. При P = 6 величина предложения растёт с 8 до 12: кривая сдвигается вправо, в S3: P = 0.5Q.',
    },
    graph: {
      ...axes,
      curves: [s1Old, s3],
      guides: [{ id: 'shift3', from: [8, 6], to: [12, 6], tone: 'gain' }],
      marks: [
        { id: 'A', at: [8, 6], tone: 'muted', label: { en: 'A (Q 8)', ru: 'A (Q 8)' }, dx: -56, dy: -8 },
        { id: 'F', at: [12, 6], tone: 'gain', label: { en: 'F (Q 12)', ru: 'F (Q 12)' }, dx: 8, dy: 32 },
      ],
    },
  },
  {
    title: { en: 'New equilibrium after a technology gain', ru: 'Новое равновесие после улучшения технологии' },
    text: {
      en: 'Demand D crosses S1 at E: price P1 = 7 and quantity Q1 = 10. After supply shifts right to S3, sellers offer more than buyers want at P1, so the price falls along D to the new equilibrium E1: P2 = 6 and Q2 = 12. The price is lower and the quantity is higher.',
      ru: 'Спрос D пересекает S1 в точке E: цена P1 = 7 и количество Q1 = 10. После сдвига предложения вправо, в S3, при цене P1 продавцы предлагают больше, чем хотят купить покупатели, поэтому цена падает вдоль D до нового равновесия E1: P2 = 6 и Q2 = 12. Цена ниже, количество больше.',
    },
    graph: {
      ...axes,
      xTicks: [symbol(10, 'Q1'), symbol(12, 'Q2')],
      yTicks: [symbol(6, 'P2'), symbol(7, 'P1')],
      curves: [s1Old, s3, demand],
      guides: [
        { id: 'e-h', from: [0, 7], to: [10, 7], tone: 'muted' },
        { id: 'e-v', from: [10, 0], to: [10, 7], tone: 'muted' },
        { id: 'e1-h', from: [0, 6], to: [12, 6], tone: 'policy' },
        { id: 'e1-v', from: [12, 0], to: [12, 6], tone: 'policy' },
      ],
      marks: [markE, markE1([12, 6])],
    },
  },
  {
    title: { en: 'Summary', ru: 'Итог' },
    text: {
      en: 'A change in price moves the firm along S1. A change in costs or technology shifts the whole curve: to S2 after a cost rise, to S3 after a technology gain.',
      ru: 'Изменение цены вызывает движение вдоль S1. Изменение издержек или технологии сдвигает всю кривую: в S2 после роста издержек, в S3 после улучшения технологии.',
    },
    graph: {
      ...axes,
      curves: [
        s1,
        s2,
        s3,
      ],
      guides: [{ id: 'p6', from: [0, 6], to: [12, 6], tone: 'muted' }],
      marks: [
        { id: 'C', at: [4, 6], tone: 'loss', label: { en: 'C', ru: 'C' }, dx: 8, dy: 16 },
        { id: 'A', at: [8, 6], tone: 'supply', label: { en: 'A', ru: 'A' }, dx: 8, dy: 16 },
        { id: 'F', at: [12, 6], tone: 'gain', label: { en: 'F', ru: 'F' }, dx: 8, dy: 16 },
      ],
    },
  },
];

export default function SupplyShift({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Supply: movement along the curve and shifts of the curve', ru: 'Предложение: движение вдоль кривой и сдвиги кривой' }}
      steps={steps}
    />
  );
}
