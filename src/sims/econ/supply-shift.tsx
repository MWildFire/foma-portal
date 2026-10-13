import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Supply. S1: P = 2 + 0.5Q, so Q = 2P - 4. A change in price moves along S1.
// A cost rise gives S2: P = 4 + 0.5Q. At every price supply falls by 4 units.
// A technology gain gives S3: P = 0.5Q. At every price supply rises by 4 units.
const S1 = fn(q => 2 + 0.5 * q, 0, 24, 1);
const S2 = fn(q => 4 + 0.5 * q, 0, 20, 1);
const S3 = fn(q => 0.5 * q, 0, 28, 1);

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
      curves: [s1Old, { id: 's2', points: S2, tone: 'loss', label: { en: 'S2', ru: 'S2' } }],
      guides: [{ id: 'shift2', from: [4, 6], to: [8, 6], tone: 'loss' }],
      marks: [
        { id: 'A', at: [8, 6], tone: 'muted', label: { en: 'A (Q 8)', ru: 'A (Q 8)' }, dx: 8, dy: 16 },
        { id: 'C', at: [4, 6], tone: 'loss', label: { en: 'C (Q 4)', ru: 'C (Q 4)' }, dx: 8, dy: 32 },
      ],
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
      curves: [s1Old, { id: 's3', points: S3, tone: 'gain', label: { en: 'S3', ru: 'S3' } }],
      guides: [{ id: 'shift3', from: [8, 6], to: [12, 6], tone: 'gain' }],
      marks: [
        { id: 'A', at: [8, 6], tone: 'muted', label: { en: 'A (Q 8)', ru: 'A (Q 8)' }, dx: -56, dy: -8 },
        { id: 'D', at: [12, 6], tone: 'gain', label: { en: 'D (Q 12)', ru: 'D (Q 12)' }, dx: 8, dy: 32 },
      ],
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
        { id: 's2', points: S2, tone: 'loss', label: { en: 'S2', ru: 'S2' } },
        { id: 's3', points: S3, tone: 'gain', label: { en: 'S3', ru: 'S3' } },
      ],
      guides: [{ id: 'p6', from: [0, 6], to: [12, 6], tone: 'muted' }],
      marks: [
        { id: 'C', at: [4, 6], tone: 'loss', label: { en: 'C', ru: 'C' }, dx: 8, dy: 16 },
        { id: 'A', at: [8, 6], tone: 'supply', label: { en: 'A', ru: 'A' }, dx: 8, dy: 16 },
        { id: 'D', at: [12, 6], tone: 'gain', label: { en: 'D', ru: 'D' }, dx: 8, dy: 16 },
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
