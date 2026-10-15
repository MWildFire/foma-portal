import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Linear demand Q = 24 - 2P, so P = 12 - 0.5Q. The midpoint P = 6, Q = 12 has PED = -1.
// Above the midpoint demand is elastic, below it inelastic.
// Total revenue TR = P x Q: 40 at P 10, 64 at P 8, 72 at P 6 (maximum), 64 at P 4, 40 at P 2.
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
// Each part is drawn towards the end where its label sits: the label stands right of a curve's last point.
const ELASTIC = fn(q => 12 - 0.5 * q, 12, 0, 1);
const INELASTIC = fn(q => 12 - 0.5 * q, 24, 12, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 27,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([4, 8, 12, 16, 20, 24]),
  yTicks: ticks([2, 4, 6, 8, 10, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
// The labels are the legend of the colours: green = elastic part (PED > 1), purple = inelastic part (PED < 1).
const elastic: CurveSpec = { id: 'elastic', points: ELASTIC, tone: 'gain', width: 4, label: { en: 'PED > 1', ru: 'PED > 1' } };
const inelastic: CurveSpec = { id: 'inelastic', points: INELASTIC, tone: 'policy', width: 4, label: { en: 'PED < 1', ru: 'PED < 1' } };
// The label of M stands left of the point and below the demand curve, so it stays clear of 'PED < 1' on the last step.
const markM: MarkSpec = { id: 'M', at: [12, 6], tone: 'ink', label: { en: 'M: PED = -1', ru: 'M: PED = -1' }, dx: -92, dy: 18 };

const steps: Step[] = [
  {
    title: { en: 'Linear demand', ru: 'Линейный спрос' },
    text: {
      en: 'Demand is Q = 24 - 2P: at P 12 nobody buys, and at P 0 the quantity demanded is 24. The midpoint is P 6, Q 12.',
      ru: 'Спрос задан формулой Q = 24 - 2P: при P = 12 никто не покупает, а при P = 0 величина спроса равна 24. Середина кривой: P = 6, Q = 12.',
    },
    graph: { ...axes, curves: [demand] },
  },
  {
    title: { en: 'Elastic part (upper half)', ru: 'Эластичная часть (верхняя половина)' },
    text: {
      en: 'Above the midpoint demand is elastic (green part, PED > 1): PED is more than 1 in size. At P 10, Q 4, total revenue TR = P x Q = 10 x 4 = 40.',
      ru: 'Выше середины спрос эластичен (зелёная часть, PED > 1): ценовая эластичность спроса (price elasticity of demand, PED) больше 1 по модулю. При P = 10 и Q = 4 выручка (total revenue, TR) равна 10 × 4 = 40.',
    },
    graph: {
      ...axes,
      curves: [demand, elastic],
      areas: [{ id: 'tr10', points: [[0, 0], [4, 0], [4, 10], [0, 10]], tone: 'alt' }],
      marks: [
        { id: 'A', at: [4, 10], tone: 'ink', label: { en: 'A (P 10, Q 4)', ru: 'A (P 10, Q 4)' } },
        { id: 'TR', at: [2, 5], tone: 'alt', label: { en: 'TR 40', ru: 'TR 40' } },
      ],
    },
  },
  {
    title: { en: 'Price cut in the elastic part', ru: 'Снижение цены в эластичной части' },
    text: {
      en: 'Price falls from 10 to 8 and quantity rises from 4 to 8: PED = 100% / -20% = -5, so demand is elastic. TR rises from 40 to 64.',
      ru: 'Цена падает с 10 до 8, величина спроса растёт с 4 до 8: PED = 100% / -20% = -5, спрос эластичен. Выручка растёт с 40 до 64.',
    },
    graph: {
      ...axes,
      curves: [demand, elastic],
      areas: [{ id: 'tr8', points: [[0, 0], [8, 0], [8, 8], [0, 8]], tone: 'alt' }],
      marks: [
        { id: 'A', at: [4, 10], tone: 'muted', label: { en: 'A', ru: 'A' } },
        { id: 'B', at: [8, 8], tone: 'ink', label: { en: 'B (P 8, Q 8)', ru: 'B (P 8, Q 8)' } },
        { id: 'TR', at: [4, 4], tone: 'alt', label: { en: 'TR 64', ru: 'TR 64' } },
      ],
    },
  },
  {
    title: { en: 'Unit elastic midpoint', ru: 'Середина: единичная эластичность' },
    text: {
      en: 'At the midpoint P 6, Q 12 and PED = -1: unit elastic. Total revenue is at its maximum: 6 x 12 = 72.',
      ru: 'В середине P = 6, Q = 12, и PED = -1: единичная эластичность. Выручка максимальна: 6 × 12 = 72.',
    },
    graph: {
      ...axes,
      curves: [demand],
      areas: [{ id: 'tr6', points: [[0, 0], [12, 0], [12, 6], [0, 6]], tone: 'alt' }],
      marks: [
        markM,
        { id: 'TR', at: [6, 3], tone: 'alt', label: { en: 'TR 72', ru: 'TR 72' } },
      ],
    },
  },
  {
    title: { en: 'Inelastic part (lower half)', ru: 'Неэластичная часть (нижняя половина)' },
    text: {
      en: 'Below the midpoint demand is inelastic (purple part, PED < 1): PED is less than 1 in size. A price cut from 4 to 2 (point C to point D) raises quantity from 16 to 20, but TR falls from 64 to 40: PED = 25% / -50% = -0.5.',
      ru: 'Ниже середины спрос неэластичен (фиолетовая часть, PED < 1): PED меньше 1 по модулю. Снижение цены с 4 до 2 (от точки C к точке D) увеличивает величину спроса с 16 до 20, но выручка падает с 64 до 40: PED = 25% / -50% = -0,5.',
    },
    graph: {
      ...axes,
      curves: [demand, inelastic],
      areas: [{ id: 'tr2', points: [[0, 0], [20, 0], [20, 2], [0, 2]], tone: 'alt' }],
      marks: [
        { id: 'C', at: [16, 4], tone: 'muted', label: { en: 'C (P 4, Q 16)', ru: 'C (P 4, Q 16)' } },
        { id: 'D', at: [20, 2], tone: 'ink', label: { en: 'D (P 2, Q 20)', ru: 'D (P 2, Q 20)' } },
      ],
    },
  },
  {
    title: { en: 'Summary', ru: 'Итог' },
    text: {
      en: 'Green part: elastic demand, where a price cut raises TR. Purple part: inelastic demand, where a price cut lowers TR. TR peaks at the unit elastic midpoint.',
      ru: 'Зелёная часть: эластичный спрос, там снижение цены увеличивает выручку. Фиолетовая часть: неэластичный спрос, там снижение цены уменьшает выручку. Выручка максимальна в середине, где эластичность единичная.',
    },
    graph: {
      ...axes,
      curves: [demand, elastic, inelastic],
      areas: [{ id: 'tr6', points: [[0, 0], [12, 0], [12, 6], [0, 6]], tone: 'alt' }],
      marks: [markM],
    },
  },
];

export default function PedLinear({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Linear demand: elastic, unit elastic and inelastic parts, total revenue', ru: 'Линейный спрос: эластичная, единичная и неэластичная части, выручка' }}
      steps={steps}
    />
  );
}
