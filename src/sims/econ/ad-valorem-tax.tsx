import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Ad valorem tax of 50% of the buyers' price on the same market: D: P = 12 - 0.5Q and S: P = 0.5Q.
// Before the tax E is (Q 12, P 6). Sellers keep half of the buyers' price: Pp = 0.5 x Pc, so
// S+t: Pc = 2 x 0.5Q = Q. The gap between S+t and S is 50% of the price: 2 at Q 4, 4 at Q 8, 6 at Q 12.
// New equilibrium: 12 - 0.5Q = Q, so Q = 8. Buyers pay 8 (on D); sellers keep 4 (on S at Q 8).
// Tax per unit = 8 - 4 = 4, so tax revenue = 4 x 8 = 32 (rectangle). Deadweight loss = 1/2 x 4 x 4 = 8 (triangle to E).
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);
const St = fn(q => q, 0, 13, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([8, 12]),
  yTicks: ticks([4, 6, 8, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supplyOld: CurveSpec = { id: 's', points: S, tone: 'muted', dashed: true, label: { en: 'S', ru: 'S' } };
const supplyTax: CurveSpec = { id: 'st', points: St, tone: 'policy', label: { en: 'S+t', ru: 'S+t' } };

const oldE = { id: 'E', at: [12, 6] as [number, number], tone: 'ink' as const, label: { en: 'E', ru: 'E' }, dx: 4, dy: -14 };
const newE = { id: 'E1', at: [8, 8] as [number, number], tone: 'policy' as const, label: { en: 'E1', ru: 'E1' }, dx: -29, dy: 16 };

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
      en: 'An ad valorem tax is a percentage of the price. Sellers keep half of the buyers price, so the gap between S and S+t grows with price: 2 at Q 4 and 4 at Q 8.',
      ru: 'Адвалорный налог (ad valorem tax) — это процент от цены. Продавец оставляет половину цены покупателя, поэтому разрыв между S и S+t растёт вместе с ценой: 2 при Q 4 и 4 при Q 8.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      guides: [
        { id: 'gap4', from: [4, 2], to: [4, 4], tone: 'policy' },
        { id: 'gap8', from: [8, 4], to: [8, 8], tone: 'policy' },
      ],
    },
  },
  {
    title: { en: 'New equilibrium at Q 8', ru: 'Новое равновесие при Q 8' },
    text: {
      en: 'The new equilibrium is E1 at Q = 8. Buyers pay 8 (the blue line to D). Sellers keep 4 (the orange line to S), which is half of the buyers price.',
      ru: 'Новое равновесие E1 при Q = 8. Покупатели платят 8 (синяя линия к D). Продавцы получают 4 (оранжевая линия к S), то есть половину цены покупателя.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      guides: [
        { id: 'q8', from: [8, 0], to: [8, 8], tone: 'ink' },
        { id: 'pc', from: [0, 8], to: [8, 8], tone: 'demand' },
        { id: 'pp', from: [0, 4], to: [8, 4], tone: 'supply' },
      ],
      marks: [newE, { id: 'Sp', at: [8, 4], tone: 'supply' }],
    },
  },
  {
    title: { en: 'Tax revenue', ru: 'Налоговая выручка' },
    text: {
      en: 'The tax per unit at Q 8 is 8 - 4 = 4, so revenue is 4 x 8 = 32: the purple rectangle between the buyers price 8 and the sellers price 4, for Q from 0 to 8.',
      ru: 'Налог на единицу при Q 8 равен 8 - 4 = 4, поэтому выручка равна 4 x 8 = 32: фиолетовый прямоугольник между ценой покупателя 8 и ценой продавца 4 при Q от 0 до 8.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      areas: [{ id: 'rev', points: [[0, 4], [8, 4], [8, 8], [0, 8]], tone: 'policy' }],
      guides: [
        { id: 'q8', from: [8, 0], to: [8, 8], tone: 'ink' },
        { id: 'pc', from: [0, 8], to: [8, 8], tone: 'demand' },
        { id: 'pp', from: [0, 4], to: [8, 4], tone: 'supply' },
      ],
      marks: [newE, { id: 'Sp', at: [8, 4], tone: 'supply' }],
    },
  },
  {
    title: { en: 'Deadweight loss (complete picture)', ru: 'Чистые потери (полная картина)' },
    text: {
      en: 'Quantity falls from 12 to 8, so the deadweight loss is 1/2 x 4 x 4 = 8: the red triangle (DWL). E is kept for comparison.',
      ru: 'Количество падает с 12 до 8, поэтому чистые потери равны 1/2 x 4 x 4 = 8: красный треугольник (DWL). Точка E оставлена для сравнения.',
    },
    graph: {
      ...axes,
      curves: [demand, supplyOld, supplyTax],
      areas: [
        { id: 'rev', points: [[0, 4], [8, 4], [8, 8], [0, 8]], tone: 'policy' },
        { id: 'dwl', points: [[8, 8], [12, 6], [8, 4]], tone: 'loss' },
      ],
      guides: [
        { id: 'q8', from: [8, 0], to: [8, 8], tone: 'ink' },
        { id: 'pc', from: [0, 8], to: [8, 8], tone: 'demand' },
        { id: 'pp', from: [0, 4], to: [8, 4], tone: 'supply' },
        { id: 'dwl-leader', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 8', ru: 'потери 8' }, labelAt: 'end' },
      ],
      marks: [oldE, newE, { id: 'Sp', at: [8, 4], tone: 'supply' }],
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
