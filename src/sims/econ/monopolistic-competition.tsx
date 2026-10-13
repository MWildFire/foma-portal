import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Monopolistic competition, long run. Firm demand (AR): P = 9 - 0.625Q, tangent to ATC at Q 4 (P = ATC = 6.5).
// ATC = 18/Q + 0.5Q (minimum at Q 6, ATC 6). TC = 18 + 0.5Q squared, so MC = Q. MR = 9 - 1.25Q.
// MR = MC at Q 4 (value 4). Excess capacity: the firm stops at Q 4, short of the minimum-ATC output Q 6.
const D = fn(q => 9 - 0.625 * q, 0, 10, 10);
const MR = fn(q => 9 - 1.25 * q, 0, 4.8, 10);
const MC = fn(q => q, 0, 8, 16);
const ATC = fn(q => 18 / q + 0.5 * q, 2.5, 10, 15);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const curves: CurveSpec[] = [
  { id: 'd', points: D, tone: 'demand', label: { en: 'D (AR)', ru: 'D (AR)' } },
  { id: 'mr', points: MR, tone: 'policy', label: { en: 'MR', ru: 'MR' } },
  { id: 'mc', points: MC, tone: 'supply', label: { en: 'MC', ru: 'MC' } },
  { id: 'atc', points: ATC, tone: 'alt', label: { en: 'ATC', ru: 'ATC' } },
];

const eMark: MarkSpec = { id: 'e', at: [4, 6.5], tone: 'ink', label: { en: 'E (P 6.5)', ru: 'E (P 6.5)' }, dx: 8, dy: -14 };
const qGuide: GuideSpec = { id: 'q4', from: [4, 0], to: [4, 6.5], tone: 'muted' };
const pGuide: GuideSpec = { id: 'p65', from: [0, 6.5], to: [4, 6.5], tone: 'muted' };
const minGuide: GuideSpec = { id: 'q6', from: [6, 0], to: [6, 6], tone: 'alt' };
const capacityGuide: GuideSpec = { id: 'cap', from: [4, 1], to: [6, 1], tone: 'alt', label: { en: 'excess capacity', ru: 'избыточные мощности' }, labelAt: 'end' };

const axes = {
  xMax: 12,
  yMax: 10,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price and cost (P)', ru: 'Цена и издержки (P)' },
};

const steps: Step[] = [
  {
    title: { en: 'Firm demand and costs', ru: 'Спрос и издержки фирмы' },
    text: {
      en: 'Each firm sells a differentiated product, so it faces a downward-sloping demand (AR). MR lies below AR. The U-shaped ATC falls to its minimum at Q 6.',
      ru: 'Каждая фирма продаёт дифференцированный продукт, поэтому её спрос (AR) наклонён вниз. MR лежит ниже AR. U-образная кривая ATC падает до минимума при Q 6.',
    },
    graph: { ...axes, curves },
  },
  {
    title: { en: 'Output where MR = MC', ru: 'Выпуск, где MR = MC' },
    text: {
      en: 'The firm produces where MR = MC: Q 4. It charges the price on D for that quantity: P 6.5, which is above MC (4).',
      ru: 'Фирма производит там, где MR = MC: Q 4. Цену она берёт по кривой D для этого объёма: P 6.5, что выше MC (4).',
    },
    graph: {
      ...axes,
      curves,
      guides: [qGuide, pGuide],
      marks: [eMark],
      xTicks: ticks([4]),
      yTicks: ticks([6.5]),
    },
  },
  {
    title: { en: 'Normal profit in the long run', ru: 'Нормальная прибыль (normal profit) в долгосрочном периоде' },
    text: {
      en: 'Rival brands enter and shift D left until it just touches ATC at E. Price equals average cost (6.5), so the firm earns only normal profit.',
      ru: 'Новые конкуренты выходят на рынок и сдвигают D влево, пока она лишь касается ATC в точке E. Цена равна средним издержкам (6.5), поэтому фирма получает только нормальную прибыль.',
    },
    graph: {
      ...axes,
      curves,
      guides: [qGuide, pGuide],
      marks: [eMark],
      xTicks: ticks([4]),
      yTicks: ticks([6.5]),
    },
  },
  {
    title: { en: 'Excess capacity', ru: 'Избыточные мощности (excess capacity)' },
    text: {
      en: 'The firm stops at Q 4, short of the minimum-cost output at Q 6. This excess capacity is the cost of product variety, and P stays above MC.',
      ru: 'Фирма останавливается на Q 4, не доходя до выпуска с минимальными издержками при Q 6. Эти избыточные мощности — цена разнообразия продукции, а P остаётся выше MC.',
    },
    graph: {
      ...axes,
      curves,
      guides: [qGuide, pGuide, minGuide, capacityGuide],
      marks: [eMark],
      xTicks: ticks([4, 6]),
      yTicks: ticks([6.5]),
    },
  },
];

export default function MonopolisticCompetition({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Monopolistic competition: long-run equilibrium', ru: 'Монополистическая конкуренция: долгосрочное равновесие' }}
      steps={steps}
    />
  );
}
