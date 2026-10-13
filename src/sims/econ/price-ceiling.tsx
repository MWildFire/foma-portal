import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Maximum price (price ceiling) of 3 on the market D: P = 12 - 0.5Q and S: P = 0.5Q. Free-market E is (Q 12, P 6).
// At P = 3: Qd = 2 x (12 - 3) = 18 (point on D), Qs = 2 x 3 = 6 (point on S). Shortage = 18 - 6 = 12.
// Traded quantity = the smaller of Qd and Qs = 6. Welfare loss = 1/2 x (9 - 3) x (12 - 6) = 18 (triangle to E).
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([6, 12, 18]),
  yTicks: ticks([3, 6, 9, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supply: CurveSpec = { id: 's', points: S, tone: 'supply', label: { en: 'S', ru: 'S' } };
const E: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 2, dy: -27 };
const ceiling = { id: 'max', from: [0, 3] as [number, number], to: [18, 3] as [number, number], tone: 'policy' as const };

const steps: Step[] = [
  {
    title: { en: 'Market before the ceiling', ru: 'Рынок до ограничения цены' },
    text: {
      en: 'Demand and supply cross at E: Q = 12 and P = 6. This is the free-market price.',
      ru: 'Спрос и предложение пересекаются в точке E: Q = 12 и P = 6. Это рыночная цена без ограничений.',
    },
    graph: { ...axes, curves: [demand, supply], marks: [E] },
  },
  {
    title: { en: 'Maximum price of 3', ru: 'Максимальная цена 3' },
    text: {
      en: 'A maximum price (price ceiling) of 3 is set below the equilibrium price of 6. Sellers may not charge more than 3, so the price stays at 3.',
      ru: 'Установлена максимальная цена (price ceiling) 3, ниже равновесной цены 6. Продавцы не могут брать больше 3, поэтому цена остаётся на уровне 3.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      guides: [{ ...ceiling, label: { en: 'max 3', ru: 'макс. 3' }, labelAt: 'start' }],
      marks: [E],
    },
  },
  {
    title: { en: 'Shortage of 12', ru: 'Дефицит 12' },
    text: {
      en: 'At P = 3 buyers want 18 (point on D) but sellers offer only 6 (point on S). The shortage of 12 is the purple bar from Q 6 to Q 18.',
      ru: 'При P = 3 покупатели хотят купить 18 (точка на D), а продавцы предлагают только 6 (точка на S). Дефицит (shortage) 12 показан фиолетовой полосой от Q 6 до Q 18.',
    },
    graph: {
      ...axes,
      curves: [
        demand,
        supply,
        { id: 'short', points: [[6, 3], [18, 3]], tone: 'policy', width: 4, label: { en: 'shortage 12', ru: 'дефицит 12' } },
      ],
      guides: [{ ...ceiling, dashed: true }],
      marks: [
        E,
        { id: 'Qs', at: [6, 3], tone: 'supply', label: { en: 'Qs 6', ru: 'Qs 6' }, dx: -30, dy: -10 },
        { id: 'Qd', at: [18, 3], tone: 'demand', label: { en: 'Qd 18', ru: 'Qd 18' }, dx: -32, dy: 23 },
      ],
    },
  },
  {
    title: { en: 'Welfare loss (complete picture)', ru: 'Чистые потери (полная картина)' },
    text: {
      en: 'Only 6 units are traded, so the trades between Q 6 and Q 12 are lost. The red triangle is the deadweight loss: 1/2 x 6 x 6 = 18.',
      ru: 'Продаётся только 6 единиц, поэтому сделки между Q 6 и Q 12 теряются. Красный треугольник — это чистые потери (DWL): 1/2 x 6 x 6 = 18.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      areas: [{ id: 'dwl', points: [[6, 9], [12, 6], [6, 3]], tone: 'loss' }],
      guides: [
        { ...ceiling, dashed: true },
        { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 18', ru: 'потери 18' }, labelAt: 'end' },
      ],
      marks: [
        E,
        { id: 'a', at: [6, 9], tone: 'demand' },
        { id: 'b', at: [6, 3], tone: 'supply' },
      ],
    },
  },
];

export default function PriceCeiling({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Price ceiling: a maximum price creates a shortage', ru: 'Максимальная цена: создаёт дефицит' }}
      steps={steps}
    />
  );
}
