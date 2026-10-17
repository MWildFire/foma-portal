import type { L, Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Point, type Step, type TickSpec, type Tone } from './_lib/graph';

// Specific (per-unit) tax of 3 on a market with D: P = 12 - 0.5Q and S: P = 0.5Q.
// Before the tax E is (Q 12, P 6). With the tax, S shifts up by 3: S+t: P = 0.5Q + 3.
// New equilibrium: 12 - 0.5Q = 0.5Q + 3, so Q = 9. Buyers pay Pc = 7.5 (on D at Q 9); sellers keep Pp = 4.5 (on S at Q 9).
// Tax revenue = 3 x 9 = 27 (rectangle). Deadweight loss = 1/2 x 3 x 3 = 4.5 (triangle between Q 9 and Q 12).
// Names as in Tragakes ch.4 p.129 (Fig 4.11b): Pc is the price paid by consumers, Pp the price received by producers.
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);
const St = fn(q => 0.5 * q + 3, 0, 20, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([9, 12]),
  yTicks: ticks([3, 4.5, 6, 7.5, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supplyOld: CurveSpec = { id: 's', points: S, tone: 'muted', dashed: true, label: { en: 'S', ru: 'S' } };
const supplyTax: CurveSpec = { id: 'st', points: St, tone: 'policy', label: { en: 'S+t', ru: 'S+t' } };

const oldE: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 4, dy: -14 };
// E1 stands right above its point, in the space between the falling and the rising curve.
const newE: MarkSpec = { id: 'E1', at: [9, 7.5], tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: -7, dy: -12 };
const dotSp: MarkSpec = { id: 'Sp', at: [9, 4.5], tone: 'supply' };

// The two prices are named on their lines: Pc (blue, on D) and Pp (orange, on S); the numbers stand on the price axis.
const q9: GuideSpec = { id: 'q9', from: [9, 0], to: [9, 7.5], tone: 'ink' };
const pc: GuideSpec = { id: 'pc', from: [0, 7.5], to: [9, 7.5], tone: 'demand', label: { en: 'Pc', ru: 'Pc' }, labelAt: 'start' };
const pp: GuideSpec = { id: 'pp', from: [0, 4.5], to: [9, 4.5], tone: 'supply', label: { en: 'Pp', ru: 'Pp' }, labelAt: 'start' };
// A text note: the shared Graph has no text-only element, so a guide of zero length carries the label.
const note = (id: string, at: Point, tone: Tone, label: L): GuideSpec => ({ id, from: at, to: at, tone, label, labelAt: 'start' });
const taxNote = note('t', [0.3, 5.5], 'policy', { en: 't = 3', ru: 't = 3' });
const revenueNote = note('rev-note', [0.3, 6.4], 'policy', { en: 'revenue 27', ru: 'налоги 27' });
const revenue: AreaSpec = { id: 'rev', points: [[0, 4.5], [9, 4.5], [9, 7.5], [0, 7.5]], tone: 'policy' };

const steps: Step[] = [
  {
    title: { en: 'Market before the tax', ru: 'Рынок до налога' },
    text: {
      en: 'Demand (D) and supply (S) cross at E: Q = 12 and P = 6. This hypothetical competitive market has no externalities or other initial distortions, so the starting equilibrium is efficient.',
      ru: 'Спрос (D) и предложение (S) пересекаются в точке E: Q = 12 и P = 6. В этом условном конкурентном рынке нет внешних эффектов и других исходных искажений, поэтому начальное равновесие эффективно.',
    },
    graph: {
      ...axes,
      curves: [demand, { ...supplyOld, dashed: false, tone: 'supply' }],
      guides: [
        { id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' },
      ],
      marks: [oldE],
    },
  },
  {
    title: { en: 'Tax shifts supply up by 3', ru: 'Налог сдвигает предложение вверх на 3' },
    text: {
      en: 'A specific tax of 3 per unit adds 3 to the cost of every unit sold. Sellers need 3 more for each unit, so S shifts up by 3 to S+t.',
      ru: 'Специфический налог 3 на единицу добавляет 3 к издержкам каждой проданной единицы. Продавцам нужно на 3 больше за каждую единицу, поэтому S сдвигается вверх на 3 до S+t.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      guides: [{ id: 'gap', from: [4, 2], to: [4, 5], tone: 'policy' }],
    },
  },
  {
    title: { en: 'New equilibrium at Q 9', ru: 'Новое равновесие при Q 9' },
    text: {
      en: 'The new equilibrium is E1 at Q = 9. Buyers pay Pc = 7.5 (the blue line to D). Sellers keep Pp = 4.5 (the orange line to S). The gap is the tax: Pc - Pp = t = 3.',
      ru: 'Новое равновесие E1 при Q = 9. Покупатели платят Pc = 7.5 (синяя линия к D). Продавцы получают Pp = 4.5 (оранжевая линия к S). Разница — это налог: Pc - Pp = t = 3.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      guides: [q9, pc, pp, taxNote],
      marks: [newE, dotSp],
    },
  },
  {
    title: { en: 'Tax revenue', ru: 'Налоговые поступления' },
    text: {
      en: 'Government revenue is the tax per unit times the quantity sold: 3 x 9 = 27. It is the purple rectangle between the buyers price Pc = 7.5 and the sellers price Pp = 4.5, for Q from 0 to 9.',
      ru: 'Налоговые поступления государства равна налогу на единицу, умноженному на проданное количество: 3 x 9 = 27. Это фиолетовый прямоугольник между ценой покупателя Pc = 7.5 и ценой продавца Pp = 4.5 при Q от 0 до 9.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      areas: [revenue],
      guides: [q9, pc, pp, taxNote, revenueNote],
      marks: [newE, dotSp],
    },
  },
  {
    title: { en: 'Deadweight loss (complete picture)', ru: 'Чистые потери (полная картина)' },
    text: {
      en: 'Quantity falls from 12 to 9, so trade worth 1/2 x 3 x 3 = 4.5 is lost. The red triangle is the deadweight loss (DWL). E is kept for comparison.',
      ru: 'Количество падает с 12 до 9, поэтому теряется обмен на сумму 1/2 x 3 x 3 = 4.5. Красный треугольник — это чистые потери (DWL). Точка E оставлена для сравнения.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      areas: [
        revenue,
        { id: 'dwl', points: [[9, 7.5], [12, 6], [9, 4.5]], tone: 'loss' },
      ],
      guides: [
        q9,
        pc,
        pp,
        taxNote,
        revenueNote,
        { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 4.5', ru: 'потери 4.5' }, labelAt: 'end' },
      ],
      marks: [oldE, newE, dotSp],
    },
  },
];

export default function SpecificTax({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Specific tax: tax revenue and deadweight loss', ru: 'Налог на единицу: выручка и чистые потери' }}
      steps={steps}
    />
  );
}
