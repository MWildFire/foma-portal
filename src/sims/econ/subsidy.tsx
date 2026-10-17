import type { L, Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Point, type Step, type TickSpec, type Tone } from './_lib/graph';

// Per-unit subsidy of 3 on the same market: D: P = 12 - 0.5Q and S: P = 0.5Q. Before the subsidy E is (Q 12, P 6).
// The subsidy lowers the price sellers need for each unit by 3, so S shifts down by 3: S-s: P = 0.5Q - 3.
// New equilibrium: 12 - 0.5Q = 0.5Q - 3, so Q = 15. Consumers pay Pc = 4.5 (on D at Q 15, down from 6).
// Producers receive Pp = 7.5 (on S at Q 15, up from 6): 4.5 + 3 = 7.5. Cost of the subsidy = 3 x 15 = 45 (rectangle).
// Deadweight loss = 1/2 x 3 x 3 = 4.5 (triangle between Q 12 and Q 15: units cost more than they are worth).
// Names as in Tragakes ch.4 p.135-137 (Fig 4.15-4.16): Pc is the price paid by consumers, Pp the price received by producers.
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

const E: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 2, dy: -27 };
// E1 stands in the free space right of its point, between the rising and the falling curve.
const newE: MarkSpec = { id: 'E1', at: [15, 4.5], tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: 16, dy: 4 };
const dotSp: MarkSpec = { id: 'Sp', at: [15, 7.5], tone: 'supply' };

// The two prices are named on their lines: Pc (blue, on D) and Pp (orange, on S); the numbers stand on the price axis.
const q15: GuideSpec = { id: 'q15', from: [15, 0], to: [15, 7.5], tone: 'ink' };
const pc: GuideSpec = { id: 'pc', from: [0, 4.5], to: [15, 4.5], tone: 'demand', label: { en: 'Pc', ru: 'Pc' }, labelAt: 'start' };
const pp: GuideSpec = { id: 'pp', from: [0, 7.5], to: [15, 7.5], tone: 'supply', label: { en: 'Pp', ru: 'Pp' }, labelAt: 'start' };
// A text note: the shared Graph has no text-only element, so a guide of zero length carries the label.
const note = (id: string, at: Point, tone: Tone, label: L): GuideSpec => ({ id, from: at, to: at, tone, label, labelAt: 'start' });
const subsidyNote = note('s', [0.3, 5.5], 'policy', { en: 's = 3', ru: 's = 3' });
const costNote = note('cost-note', [0.3, 6.4], 'policy', { en: 'cost 45', ru: 'расходы 45' });
const cost: AreaSpec = { id: 'cost', points: [[0, 4.5], [15, 4.5], [15, 7.5], [0, 7.5]], tone: 'policy' };

const steps: Step[] = [
  {
    title: { en: 'Market before the subsidy', ru: 'Рынок до субсидии' },
    text: {
      en: 'Demand (D) and supply (S) cross at E: Q = 12 and P = 6. This hypothetical competitive market has no externalities or other initial distortions, so the starting equilibrium is efficient.',
      ru: 'Спрос (D) и предложение (S) пересекаются в точке E: Q = 12 и P = 6. В этом условном конкурентном рынке нет внешних эффектов и других исходных искажений, поэтому начальное равновесие эффективно.',
    },
    graph: {
      ...axes,
      curves: [demand, { ...supplyOld, dashed: false, tone: 'supply' }],
      guides: [{ id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [E],
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
      marks: [E],
    },
  },
  {
    title: { en: 'New equilibrium at Q 15', ru: 'Новое равновесие при Q 15' },
    text: {
      en: 'The new equilibrium is E1 at Q = 15. Consumers pay Pc = 4.5, down from 6 (the blue line to D). Producers receive Pp = 7.5, up from 6 (the orange line to S), because the subsidy adds 3: Pp - Pc = s = 3.',
      ru: 'Новое равновесие E1 при Q = 15. Потребители платят Pc = 4.5, меньше, чем 6 (синяя линия к D). Производители получают Pp = 7.5, больше, чем 6 (оранжевая линия к S), потому что субсидия добавляет 3: Pp - Pc = s = 3.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplySub],
      guides: [q15, pc, pp, subsidyNote],
      marks: [newE, dotSp],
    },
  },
  {
    title: { en: 'Cost of the subsidy', ru: 'Стоимость субсидии' },
    text: {
      en: 'The government pays 3 per unit on 15 units: 3 x 15 = 45. This is the purple rectangle between the consumers price Pc = 4.5 and the producers price Pp = 7.5.',
      ru: 'Государство платит 3 за единицу на 15 единицах: 3 x 15 = 45. Это фиолетовый прямоугольник между ценой потребителя Pc = 4.5 и ценой производителя Pp = 7.5.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplySub],
      areas: [cost],
      guides: [q15, pc, pp, subsidyNote, costNote],
      marks: [newE, dotSp],
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
        cost,
        { id: 'dwl', points: [[12, 6], [15, 4.5], [15, 7.5]], tone: 'loss' },
      ],
      guides: [
        // No vertical line at Q 15 on this step: it would cross the label of the DWL leader.
        pc,
        pp,
        subsidyNote,
        costNote,
        { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 4.5', ru: 'потери 4.5' }, labelAt: 'end' },
      ],
      marks: [E, newE, dotSp],
    },
  },
];

export default function Subsidy({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Subsidy: lower consumer price, higher producer price, cost and deadweight loss', ru: 'Субсидия: цена для потребителя ниже, цена для производителя выше, расходы и чистые потери' }}
      steps={steps}
    />
  );
}
