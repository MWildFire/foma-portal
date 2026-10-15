import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Monopolistic competition (Tragakes ch.7 p.227-228, Fig 7.20 short run and Fig 7.21 long run).
// Costs: TC = 18 + 0.5Q squared, so MC = Q and ATC = 18/Q + 0.5Q (minimum at Q 6, ATC 6).
// Short run (steps 1-2): firm demand D1 (AR1): P = 11 - 0.6Q, MR1 = 11 - 1.2Q. MR1 = MC at Q1 = 5 (value 5), P1 = D1(5) = 8,
//   ATC(5) = 6.1, so profit = (8 - 6.1) x 5 = 9.5: supernormal profit.
// Long run (steps 3-4): entry shifts demand left to D2 (AR2): P = 9 - 0.625Q, tangent to ATC at Q 4 (P = ATC = 6.5). MR2 = 9 - 1.25Q,
//   MR2 = MC at Q 4 (value 4). Excess capacity: the firm stops at Q 4, short of the minimum-ATC output Q 6.
// D1 is listed from the right end to the left end, so its label stands at the free top-left of the picture.
const D1 = fn(q => 11 - 0.6 * q, 0, 9, 9).reverse();
const MR1 = fn(q => 11 - 1.2 * q, 0, 6.2, 12);
const D2 = fn(q => 9 - 0.625 * q, 0, 9, 9);
const MR2 = fn(q => 9 - 1.25 * q, 0, 4.4, 11);
const MC = fn(q => q, 0, 8, 16);
const ATC = fn(q => 18 / q + 0.5 * q, 2.5, 10, 15);
const ATC_Q1 = 18 / 5 + 0.5 * 5; // 6.1

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const d1: CurveSpec = { id: 'd1', points: D1, tone: 'demand', label: { en: 'D1 (AR1)', ru: 'D1 (AR1)' } };
const mr1: CurveSpec = { id: 'mr1', points: MR1, tone: 'policy', label: { en: 'MR1', ru: 'MR1' } };
const d1Old: CurveSpec = { ...d1, tone: 'muted', dashed: true, label: { en: 'D1', ru: 'D1' } };
const d2: CurveSpec = { id: 'd2', points: D2, tone: 'demand', label: { en: 'D2 (AR2)', ru: 'D2 (AR2)' } };
const mr2: CurveSpec = { id: 'mr2', points: MR2, tone: 'policy', label: { en: 'MR2', ru: 'MR2' } };
const mc: CurveSpec = { id: 'mc', points: MC, tone: 'supply', label: { en: 'MC', ru: 'MC' } };
const atc: CurveSpec = { id: 'atc', points: ATC, tone: 'alt', label: { en: 'ATC', ru: 'ATC' } };

// Short run: the firm produces Q1 = 5 where MR1 = MC and earns the green rectangle (P1 - ATC) x Q1.
const profitArea: AreaSpec = { id: 'profit', points: [[0, ATC_Q1], [5, ATC_Q1], [5, 8], [0, 8]], tone: 'gain' };
const q1Guide: GuideSpec = { id: 'q5', from: [5, 0], to: [5, 8], tone: 'muted' };
const p1Guide: GuideSpec = { id: 'p8', from: [0, 8], to: [5, 8], tone: 'muted' };
const e1Mark: MarkSpec = { id: 'e1', at: [5, 8], tone: 'ink', label: { en: 'E1', ru: 'E1' }, dx: -7, dy: -9 };
const mrMc1Mark: MarkSpec = { id: 'mrmc1', at: [5, 5], tone: 'ink', label: { en: 'MR1 = MC', ru: 'MR1 = MC' }, dx: 14, dy: 5 };

// Long run: D2 touches ATC at E (Q 4, P 6.5); the firm produces where MR2 = MC.
const eMark: MarkSpec = { id: 'e', at: [4, 6.5], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: -4, dy: -9 };
const mrMcMark: MarkSpec = { id: 'mrmc', at: [4, 4], tone: 'ink', label: { en: 'MR = MC', ru: 'MR = MC' }, dx: -68, dy: 3 };
const qGuide: GuideSpec = { id: 'q4', from: [4, 0], to: [4, 6.5], tone: 'muted' };
const pGuide: GuideSpec = { id: 'p65', from: [0, 6.5], to: [4, 6.5], tone: 'muted' };
const minGuide: GuideSpec = { id: 'q6', from: [6, 0], to: [6, 6], tone: 'alt' };
const capacityGuide: GuideSpec = { id: 'cap', from: [4, 1], to: [6, 1], tone: 'alt', label: { en: 'excess capacity', ru: 'избыточные мощности' }, labelAt: 'end' };

const axes = {
  xMax: 12,
  yMax: 12,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price and cost (P)', ru: 'Цена и издержки (P)' },
};

const steps: Step[] = [
  {
    title: { en: 'Firm demand and costs', ru: 'Спрос и издержки фирмы' },
    text: {
      en: 'Each firm sells a differentiated product, so it faces a downward-sloping demand D1 (AR1). MR1 lies below AR1. The U-shaped ATC falls to its minimum at Q 6.',
      ru: 'Каждая фирма продаёт дифференцированный продукт, поэтому её спрос D1 (AR1) наклонён вниз. MR1 лежит ниже AR1. U-образная кривая ATC падает до минимума при Q 6.',
    },
    graph: { ...axes, curves: [d1, mr1, mc, atc] },
  },
  {
    title: { en: 'Short run: supernormal profit', ru: 'Краткосрочный период: сверхприбыль (supernormal profit)' },
    text: {
      en: 'The firm produces where MR1 = MC: Q 5. It charges the price on D1 for that quantity: P1 = 8, which is above ATC (6.1). Profit = (8 - 6.1) x 5 = 9.5, the green rectangle.',
      ru: 'Фирма производит там, где MR1 = MC: Q 5. Цену она берёт по кривой D1: P1 = 8, что выше ATC (6.1). Прибыль = (8 - 6.1) × 5 = 9.5 — это зелёный прямоугольник.',
    },
    graph: {
      ...axes,
      curves: [d1, mr1, mc, atc],
      areas: [profitArea],
      guides: [q1Guide, p1Guide],
      marks: [e1Mark, mrMc1Mark],
      xTicks: ticks([5]),
      yTicks: [{ value: ATC_Q1, label: { en: '6.1', ru: '6.1' } }, { value: 8, label: { en: '8', ru: '8' } }],
    },
  },
  {
    title: { en: 'Normal profit in the long run', ru: 'Нормальная прибыль (normal profit) в долгосрочном периоде' },
    text: {
      en: 'Rival brands enter and shift D1 left to D2, until D2 just touches ATC at E. The firm now produces where MR2 = MC: Q 4. Price equals average cost (6.5), so the firm earns only normal profit.',
      ru: 'Новые конкуренты выходят на рынок и сдвигают D1 влево до D2, пока она лишь касается ATC в точке E. Теперь фирма производит там, где MR2 = MC: Q 4. Цена равна средним издержкам (6.5), поэтому фирма получает только нормальную прибыль.',
    },
    graph: {
      ...axes,
      curves: [d1Old, d2, mr2, mc, atc],
      guides: [qGuide, pGuide],
      marks: [eMark, mrMcMark],
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
      curves: [d2, mr2, mc, atc],
      guides: [qGuide, pGuide, minGuide, capacityGuide],
      marks: [eMark, mrMcMark],
      xTicks: ticks([4, 6]),
      yTicks: ticks([6.5]),
    },
  },
];

export default function MonopolisticCompetition({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Monopolistic competition: from supernormal profit to the long-run equilibrium', ru: 'Монополистическая конкуренция: от сверхприбыли к долгосрочному равновесию' }}
      steps={steps}
    />
  );
}
