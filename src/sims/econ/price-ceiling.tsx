import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

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
const ceilingLine: GuideSpec = { id: 'max', from: [0, 3], to: [18, 3], tone: 'policy', label: { en: 'max 3', ru: 'макс. 3' }, labelAt: 'start' };
const shortage: CurveSpec = { id: 'short', points: [[6, 3], [18, 3]], tone: 'policy', width: 4, label: { en: 'shortage 12', ru: 'дефицит 12' } };
// Both quantity labels sit under the ends of the shortage bar, so they stay clear of 'max 3' and of the DWL label.
const qs: MarkSpec = { id: 'Qs', at: [6, 3], tone: 'supply', label: { en: 'Qs 6', ru: 'Qs 6' }, dx: 8, dy: 23 };
const qd: MarkSpec = { id: 'Qd', at: [18, 3], tone: 'demand', label: { en: 'Qd 18', ru: 'Qd 18' }, dx: -32, dy: 23 };

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
      en: 'A maximum price (price ceiling) of 3 is set below the equilibrium price of 6. Legal prices may not exceed 3; this diagram assumes enforcement and transactions at the ceiling.',
      ru: 'Установлена максимальная цена (price ceiling) 3, ниже равновесной цены 6. Законная цена не должна превышать 3; диаграмма предполагает соблюдение ограничения и сделки по верхней границе.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      guides: [ceilingLine],
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
      curves: [demand, supply, shortage],
      guides: [ceilingLine],
      marks: [E, qs, qd],
    },
  },
  {
    title: { en: 'Welfare loss (complete picture)', ru: 'Чистые потери (полная картина)' },
    text: {
      en: 'The shortage is still 12 (Q 6 to Q 18), but only 6 units are traded, so the trades between Q 6 and Q 12 are lost. Assuming the six units go to the buyers with highest willingness to pay, the lost-surplus triangle is 1/2 x 6 x 6 = 18. Inefficient rationing or search costs can add further losses; this is not an unconditional estimate for every price ceiling.',
      ru: 'Дефицит остаётся 12 (от Q 6 до Q 18), но продаётся только 6 единиц, поэтому сделки между Q 6 и Q 12 теряются. Если шесть единиц получают покупатели с наибольшей готовностью платить, треугольник утраченного излишка равен 1/2 x 6 x 6 = 18. Неэффективное распределение или издержки поиска могут добавить потери; это не безусловная оценка любого потолка цены.',
    },
    graph: {
      ...axes,
      curves: [demand, supply, shortage],
      areas: [{ id: 'dwl', points: [[6, 9], [12, 6], [6, 3]], tone: 'loss' }],
      guides: [
        ceilingLine,
        // The leader runs right from E, between S and D, so its label stays clear of 'Qd 18' under the shortage bar.
        { id: 'dwl-leader', from: [12, 6], to: [14.2, 6], tone: 'loss', label: { en: 'DWL 18', ru: 'потери 18' }, labelAt: 'end' },
      ],
      marks: [
        E,
        { id: 'a', at: [6, 9], tone: 'demand' },
        qs,
        qd,
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
