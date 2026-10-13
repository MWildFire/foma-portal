import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Foreign exchange market (illustrative). Exchange rate E = AED per 1 USD; quantity in billion USD.
// Demand for USD D1: E = 6 - 0.1Q. Supply of USD S1: E = 2 + 0.1Q. Equilibrium E1: Q = 20, E = 4.
// Demand rises by 10 at every rate (D2: E = 7 - 0.1Q): E2 = (25, 4.5). USD appreciates, AED depreciates.
// Supply rises by 10 at every rate (S2: E = 1 + 0.1Q): E3 = (25, 3.5). USD depreciates, AED appreciates.
const D1 = fn(q => 6 - 0.1 * q, 0, 36, 18);
const S1 = fn(q => 2 + 0.1 * q, 0, 36, 18);
const D2 = fn(q => 7 - 0.1 * q, 10, 38, 14);
const S2 = fn(q => 1 + 0.1 * q, 10, 36, 13);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 40,
  yMax: 7,
  xLabel: { en: 'Quantity of USD (bn)', ru: 'Количество USD (млрд)' },
  yLabel: { en: 'Exchange rate (AED per USD)', ru: 'Курс (AED за USD)' },
  xTicks: ticks([20, 25]),
  yTicks: [3.5, 4, 4.5].map(value => ({ value, label: { en: String(value), ru: String(value) } })),
};

const d1: CurveSpec = { id: 'd1', points: D1, tone: 'demand', label: { en: 'D', ru: 'D' } };
const d1Muted: CurveSpec = { id: 'd1-muted', points: D1, tone: 'muted', dashed: true, label: { en: 'D', ru: 'D' } };
const s1: CurveSpec = { id: 's1', points: S1, tone: 'supply', label: { en: 'S', ru: 'S' } };
const s1Muted: CurveSpec = { id: 's1-muted', points: S1, tone: 'muted', dashed: true, label: { en: 'S', ru: 'S' } };
const d2: CurveSpec = { id: 'd2', points: D2, tone: 'demand', label: { en: 'D2', ru: 'D2' } };
const s2: CurveSpec = { id: 's2', points: S2, tone: 'supply', label: { en: 'S2', ru: 'S2' } };

// E1 label sits above-right of the point, clear of S1 and D2. E2 and E3 labels sit between the crossing lines.
const e1: MarkSpec = { id: 'E1', at: [20, 4], tone: 'ink', label: { en: 'E1', ru: 'E1' }, dx: 8, dy: -10 };
const e1Muted: MarkSpec = { id: 'E1', at: [20, 4], tone: 'muted', label: { en: 'E1', ru: 'E1' }, dx: 8, dy: -10 };
const e2: MarkSpec = { id: 'E2', at: [25, 4.5], tone: 'demand', label: { en: 'E2', ru: 'E2' }, dx: -4, dy: 18 };
const e3: MarkSpec = { id: 'E3', at: [25, 3.5], tone: 'supply', label: { en: 'E3', ru: 'E3' }, dx: 6, dy: 22 };

const e1Guides: GuideSpec[] = [
  { id: 'e1-h', from: [0, 4], to: [20, 4], tone: 'muted' },
  { id: 'e1-v', from: [20, 0], to: [20, 4], tone: 'muted' },
];

const steps: Step[] = [
  {
    title: { en: 'Equilibrium exchange rate', ru: 'Равновесный обменный курс' },
    text: {
      en: 'Demand for USD (D) falls as the exchange rate rises, and supply of USD (S) rises with it. They meet at E1: 20 billion USD are traded at 4 AED per USD.',
      ru: 'Спрос на USD (D) падает, когда курс растёт, а предложение USD (S) растёт вместе с ним. Они пересекаются в точке E1: 20 млрд USD продаются по 4 AED за USD.',
    },
    graph: {
      ...axes,
      curves: [d1, s1],
      guides: e1Guides,
      marks: [e1],
    },
  },
  {
    title: { en: 'Demand for USD rises', ru: 'Спрос на USD растёт' },
    text: {
      en: 'If demand for USD rises (for example, to pay for imports priced in USD), D shifts right to D2. The new equilibrium E2 is at 4.5 AED per USD: the USD appreciates and the AED depreciates.',
      ru: 'Если спрос на USD растёт (например, чтобы оплатить импорт в USD), кривая D сдвигается вправо до D2. Новое равновесие E2 — 4.5 AED за USD: USD дорожает (appreciation), а AED дешевеет (depreciation).',
    },
    graph: {
      ...axes,
      curves: [d1Muted, s1, d2],
      marks: [e1Muted, e2],
    },
  },
  {
    title: { en: 'Supply of USD rises', ru: 'Предложение USD растёт' },
    text: {
      en: 'If the supply of USD rises (for example, from export earnings or capital inflows), S shifts right to S2. The new equilibrium E3 is at 3.5 AED per USD: the USD depreciates and the AED appreciates.',
      ru: 'Если предложение USD растёт (например, из-за экспортной выручки или притока капитала), кривая S сдвигается вправо до S2. Новое равновесие E3 — 3.5 AED за USD: USD дешевеет (depreciation), а AED дорожает (appreciation).',
    },
    graph: {
      ...axes,
      curves: [d1, s1Muted, s2],
      marks: [e1Muted, e3],
    },
  },
  {
    title: { en: 'Complete picture', ru: 'Итоговая картина' },
    text: {
      en: 'Compared with E1 (4 AED per USD), a rise in demand for USD pushes the rate up to 4.5 (E2) and a rise in supply pushes it down to 3.5 (E3). A higher rate means the AED buys fewer USD.',
      ru: 'По сравнению с E1 (4 AED за USD) рост спроса на USD поднимает курс до 4.5 (E2), а рост предложения снижает его до 3.5 (E3). Более высокий курс означает, что за AED можно купить меньше USD.',
    },
    graph: {
      ...axes,
      curves: [d1Muted, s1Muted, d2, s2],
      marks: [e1Muted, e2, e3],
    },
  },
];

export default function FxMarket({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Foreign exchange market: demand and supply of USD', ru: 'Валютный рынок: спрос и предложение USD' }}
      steps={steps}
    />
  );
}
