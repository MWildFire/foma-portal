import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Minimum price (price floor) of 9 on the market D: P = 12 - 0.5Q and S: P = 0.5Q. Free-market E is (Q 12, P 6).
// At P = 9: Qd = 2 x (12 - 9) = 6 (point on D), Qs = 2 x 9 = 18 (point on S). Surplus = 18 - 6 = 12.
// No purchase: only Qd = 6 is traded. Welfare loss = 1/2 x (9 - 3) x (12 - 6) = 18 (triangle between Q 6 and Q 12, with E at the tip).
// The government buys the surplus at 9 (Tragakes ch.4 p.122-125, Fig 4.7): spending = 12 x 9 = 108 (rectangle Q 6 to 18, P 0 to 9).
// CS falls from 36 to 9, PS rises from 36 to 81, so CS + PS rises by f = 1/2 x 12 x 3 = 18 (triangle (6;9)-(18;9)-(12;6)).
// Welfare loss = spending - f = 108 - 18 = 90: the rectangle without the triangle f (pentagon (6;0)-(18;0)-(18;9)-(12;6)-(6;9)).
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
// On the last step the triangle f sits right above E, so E has no label there.
const Edot: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink' };
const floorLine: GuideSpec = { id: 'min', from: [0, 9], to: [18, 9], tone: 'policy', label: { en: 'min 9', ru: 'мин. 9' }, labelAt: 'start' };
const surplusBar: CurveSpec = { id: 'surplus', points: [[18, 9], [6, 9]], tone: 'policy', width: 4, label: { en: 'surplus 12', ru: 'излишек 12' } };
const qd: MarkSpec = { id: 'Qd', at: [6, 9], tone: 'demand', label: { en: 'Qd 6', ru: 'Qd 6' }, dx: -44, dy: 18 };
const qs: MarkSpec = { id: 'Qs', at: [18, 9], tone: 'supply', label: { en: 'Qs 18', ru: 'Qs 18' }, dx: 8, dy: 14 };

// No purchase: the trades between Q 6 and Q 12 are lost.
const dwl: AreaSpec = { id: 'dwl', points: [[6, 9], [12, 6], [6, 3]], tone: 'loss' };
const dwlLeader: GuideSpec = { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 18', ru: 'потери 18' }, labelAt: 'end' };

// With the purchase: spending is the rectangle; the welfare loss is the rectangle without the triangle f.
const cost: AreaSpec = { id: 'cost', points: [[6, 0], [18, 0], [18, 9], [6, 9]], tone: 'policy' };
const loss: AreaSpec = { id: 'loss', points: [[6, 0], [18, 0], [18, 9], [12, 6], [6, 9]], tone: 'loss' };
const gainF: AreaSpec = { id: 'f', points: [[6, 9], [18, 9], [12, 6]], tone: 'gain' };
const outline: CurveSpec = { id: 'rect', points: [[6, 0], [6, 9], [18, 9], [18, 0]], tone: 'policy', width: 2 };
const costMark: MarkSpec = { id: 'cost', at: [18, 5.5], tone: 'policy', label: { en: 'cost 108', ru: 'расходы 108' }, dx: 8, dy: 4 };
const fMark: MarkSpec = { id: 'f', at: [8.6, 8.2], tone: 'gain', label: { en: 'f 18', ru: 'f 18' }, dx: 6, dy: 4 };
const lossMark: MarkSpec = { id: 'loss', at: [7, 1.6], tone: 'loss', label: { en: 'welfare loss 90', ru: 'потери 90' }, dx: 6, dy: 4 };

const steps: Step[] = [
  {
    title: { en: 'Market before the floor', ru: 'Рынок до ограничения цены' },
    text: {
      en: 'Demand and supply cross at E: Q = 12 and P = 6. This is the free-market price.',
      ru: 'Спрос и предложение пересекаются в точке E: Q = 12 и P = 6. Это рыночная цена без ограничений.',
    },
    graph: { ...axes, curves: [demand, supply], marks: [E] },
  },
  {
    title: { en: 'Minimum price of 9', ru: 'Минимальная цена 9' },
    text: {
      en: 'A minimum price (price floor) of 9 is set above the equilibrium price of 6. Buyers may not pay less than 9, so the price stays at 9.',
      ru: 'Установлена минимальная цена (price floor) 9, выше равновесной цены 6. Покупатели не могут платить меньше 9, поэтому цена остаётся на уровне 9.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      guides: [floorLine],
      marks: [E],
    },
  },
  {
    title: { en: 'Surplus of 12', ru: 'Излишек 12' },
    text: {
      en: 'At P = 9 sellers offer 18 (point on S) but buyers want only 6 (point on D). Only 6 units are bought, and the surplus of 12 is the purple bar from Q 6 to Q 18.',
      ru: 'При P = 9 продавцы предлагают 18 (точка на S), а покупатели хотят купить только 6 (точка на D). Покупают только 6 единиц, а излишек (surplus) 12 показан фиолетовой полосой от Q 6 до Q 18.',
    },
    graph: {
      ...axes,
      curves: [demand, supply, surplusBar],
      guides: [floorLine],
      marks: [E, qd, qs],
    },
  },
  {
    title: { en: 'No purchase: deadweight loss 18', ru: 'Без выкупа: чистые потери 18' },
    text: {
      en: 'If the government does not buy the surplus, only 6 units are traded, so the trades between Q 6 and Q 12 are lost. The red triangle is the deadweight loss (DWL): 1/2 x 6 x 6 = 18.',
      ru: 'Если государство не выкупает излишек, продаётся только 6 единиц, поэтому сделки между Q 6 и Q 12 теряются. Красный треугольник — это чистые потери (DWL): 1/2 x 6 x 6 = 18.',
    },
    graph: {
      ...axes,
      curves: [demand, supply, surplusBar],
      areas: [dwl],
      guides: [floorLine, dwlLeader],
      marks: [E, qd, qs],
    },
  },
  {
    title: { en: 'Government buys the surplus', ru: 'Государство выкупает излишек' },
    text: {
      en: 'If the government buys the surplus at 9, its cost is 12 x 9 = 108: the purple rectangle from Q 6 to Q 18 up to the price of 9.',
      ru: 'Если государство выкупает излишек по цене 9, его расходы составят 12 x 9 = 108: фиолетовый прямоугольник от Q 6 до Q 18 до уровня цены 9.',
    },
    graph: {
      ...axes,
      curves: [demand, supply, surplusBar],
      areas: [cost],
      guides: [floorLine],
      marks: [E, qd, qs, costMark],
    },
  },
  {
    title: { en: 'Welfare loss with the purchase (complete picture)', ru: 'Чистые потери при выкупе (полная картина)' },
    text: {
      en: 'With the purchase producers sell 18 units at 9 and the government pays 108 for the 12 it buys. Consumer plus producer surplus rises only by f, the green triangle: 1/2 x 12 x 3 = 18. The welfare loss is the rest of the rectangle (red): 108 - 18 = 90.',
      ru: 'При выкупе производители продают 18 единиц по цене 9, а государство платит 108 за выкупленные 12. Сумма излишков потребителей и производителей растёт лишь на f — зелёный треугольник: 1/2 x 12 x 3 = 18. Чистые потери (welfare loss) — остальная часть прямоугольника (красная область): 108 - 18 = 90.',
    },
    graph: {
      ...axes,
      curves: [demand, supply, surplusBar, outline],
      areas: [loss, gainF],
      guides: [floorLine],
      marks: [Edot, qd, qs, costMark, fMark, lossMark],
    },
  },
];

export default function PriceFloor({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Price floor: a minimum price creates a surplus', ru: 'Минимальная цена: создаёт излишек' }}
      steps={steps}
    />
  );
}
