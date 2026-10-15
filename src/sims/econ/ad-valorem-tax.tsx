import type { L, Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Point, type Step, type TickSpec, type Tone } from './_lib/graph';

// Ad valorem tax of 50% of the price without tax (the price sellers receive, Pp) on the same market:
// D: P = 12 - 0.5Q and S: P = 0.5Q. Tragakes ch.4 p.128: "a fixed percentage of the price of the good".
// Before the tax E is (Q 12, P 6). Buyers pay Pc = 1.5 x Pp, so S+t: P = 1.5 x 0.5Q = 0.75Q.
// The gap between S+t and S is 50% of the price on S: 1 at Q 4, 2 at Q 8, 3 at Q 12.
// New equilibrium: 12 - 0.5Q = 0.75Q, so Q = 9.6. Buyers pay Pc = 7.2 (on D); sellers keep Pp = 4.8 (on S at Q 9.6).
// Tax per unit = 7.2 - 4.8 = 2.4 (50% of 4.8), so tax revenue = 2.4 x 9.6 = 23.04 (rectangle).
// Deadweight loss = 1/2 x 2.4 x (12 - 9.6) = 2.88 (triangle to E).
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);
const St = fn(q => 0.75 * q, 0, 17, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([9.6, 12]),
  yTicks: ticks([4.8, 6, 7.2, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supplyOld: CurveSpec = { id: 's', points: S, tone: 'muted', dashed: true, label: { en: 'S', ru: 'S' } };
const supplyTax: CurveSpec = { id: 'st', points: St, tone: 'policy', label: { en: 'S+t', ru: 'S+t' } };

const oldE: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 4, dy: -14 };
// E1 stands right above its point, in the space between the falling and the rising curve.
const newE: MarkSpec = { id: 'E1', at: [9.6, 7.2], tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: -10, dy: -12 };
const dotSp: MarkSpec = { id: 'Sp', at: [9.6, 4.8], tone: 'supply' };

// The two prices are named on their lines: Pc (blue, on D) and Pp (orange, on S); the numbers stand on the price axis.
const q96: GuideSpec = { id: 'q96', from: [9.6, 0], to: [9.6, 7.2], tone: 'ink' };
const pc: GuideSpec = { id: 'pc', from: [0, 7.2], to: [9.6, 7.2], tone: 'demand', label: { en: 'Pc', ru: 'Pc' }, labelAt: 'start' };
const pp: GuideSpec = { id: 'pp', from: [0, 4.8], to: [9.6, 4.8], tone: 'supply' };
// A text note: the shared Graph has no text-only element, so a guide of zero length carries the label.
const note = (id: string, at: Point, tone: Tone, label: L): GuideSpec => ({ id, from: at, to: at, tone, label, labelAt: 'start' });
// The rectangle between Pc and Pp is low, so Pp is named under its line and the two notes stand inside the rectangle.
// The two notes sit 15 px apart (baselines), so their 11px text boxes do not touch.
const ppNote = note('pp-name', [0.3, 3.7], 'supply', { en: 'Pp', ru: 'Pp' });
const taxNote = note('t', [0.3, 5.06], 'policy', { en: 't = 2.4', ru: 't = 2.4' });
const revenueNote = note('rev-note', [0.3, 6.1], 'policy', { en: 'revenue 23.04', ru: 'выручка 23.04' });
const revenue: AreaSpec = { id: 'rev', points: [[0, 4.8], [9.6, 4.8], [9.6, 7.2], [0, 7.2]], tone: 'policy' };

const steps: Step[] = [
  {
    title: { en: 'Market before the tax', ru: 'Рынок до налога' },
    text: {
      en: 'Demand (D) and supply (S) cross at E: Q = 12 and P = 6. This is the free-market equilibrium.',
      ru: 'Спрос (D) и предложение (S) пересекаются в точке E: Q = 12 и P = 6. Это равновесие свободного рынка.',
    },
    graph: {
      ...axes,
      curves: [demand, { ...supplyOld, dashed: false, tone: 'supply' }],
      guides: [{ id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [oldE],
    },
  },
  {
    title: { en: '50% ad valorem tax', ru: 'Адвалорный налог 50%' },
    text: {
      en: 'An ad valorem tax is a percentage of the price. A 50% tax adds half of the price sellers receive, so the gap between S and S+t grows with price: 1 at Q 4 and 2 at Q 8.',
      ru: 'Адвалорный налог (ad valorem tax) — это процент от цены. Налог 50% добавляет половину цены, которую получают продавцы, поэтому разрыв между S и S+t растёт вместе с ценой: 1 при Q 4 и 2 при Q 8.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      guides: [
        { id: 'gap4', from: [4, 2], to: [4, 3], tone: 'policy' },
        { id: 'gap8', from: [8, 4], to: [8, 6], tone: 'policy' },
      ],
    },
  },
  {
    title: { en: 'New equilibrium at Q 9.6', ru: 'Новое равновесие при Q 9.6' },
    text: {
      en: 'The new equilibrium is E1 at Q = 9.6. Buyers pay Pc = 7.2 (the blue line to D). Sellers keep Pp = 4.8 (the orange line to S). The gap is the tax: Pc - Pp = t = 2.4, which is 50% of Pp.',
      ru: 'Новое равновесие E1 при Q = 9.6. Покупатели платят Pc = 7.2 (синяя линия к D). Продавцы получают Pp = 4.8 (оранжевая линия к S). Разница — это налог: Pc - Pp = t = 2.4, то есть 50% от Pp.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      guides: [q96, pc, pp, ppNote, taxNote],
      marks: [newE, dotSp],
    },
  },
  {
    title: { en: 'Tax revenue', ru: 'Налоговая выручка' },
    text: {
      en: 'The tax per unit at Q 9.6 is 7.2 - 4.8 = 2.4, so revenue is 2.4 x 9.6 = 23.04: the purple rectangle between the buyers price Pc = 7.2 and the sellers price Pp = 4.8, for Q from 0 to 9.6.',
      ru: 'Налог на единицу при Q 9.6 равен 7.2 - 4.8 = 2.4, поэтому выручка равна 2.4 x 9.6 = 23.04: фиолетовый прямоугольник между ценой покупателя Pc = 7.2 и ценой продавца Pp = 4.8 при Q от 0 до 9.6.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      areas: [revenue],
      guides: [q96, pc, pp, ppNote, taxNote, revenueNote],
      marks: [newE, dotSp],
    },
  },
  {
    title: { en: 'Deadweight loss (complete picture)', ru: 'Чистые потери (полная картина)' },
    text: {
      en: 'Quantity falls from 12 to 9.6, so the deadweight loss is 1/2 x 2.4 x 2.4 = 2.88: the red triangle (DWL). E is kept for comparison.',
      ru: 'Количество падает с 12 до 9.6, поэтому чистые потери равны 1/2 x 2.4 x 2.4 = 2.88: красный треугольник (DWL). Точка E оставлена для сравнения.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      areas: [
        revenue,
        { id: 'dwl', points: [[9.6, 7.2], [12, 6], [9.6, 4.8]], tone: 'loss' },
      ],
      guides: [
        q96,
        pc,
        pp,
        ppNote,
        taxNote,
        revenueNote,
        { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 2.88', ru: 'потери 2.88' }, labelAt: 'end' },
      ],
      marks: [oldE, newE, dotSp],
    },
  },
];

export default function AdValoremTax({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Ad valorem tax: a percentage of price', ru: 'Адвалорный налог: процент от цены' }}
      steps={steps}
    />
  );
}
