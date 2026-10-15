import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type Step, type TickSpec } from './_lib/graph';

// Same market as the equilibrium diagram: Qd = 24 - 2P (P = 12 - 0.5Q) and Qs = 2P (P = 0.5Q). E: P = 6, Q = 12.
// Consumer surplus: triangle (0, 12), (0, 6), (12, 6). Area = 1/2 x 12 x 6 = 36.
// Producer surplus: triangle (0, 0), (0, 6), (12, 6). Area = 1/2 x 12 x 6 = 36.
// Total surplus = 36 + 36 = 72.
const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([6, 12, 18, 24]),
  yTicks: ticks([3, 6, 9, 12]),
};

const curves = [
  { id: 'd', points: D, tone: 'demand' as const, label: { en: 'D', ru: 'D' } },
  { id: 's', points: S, tone: 'supply' as const, label: { en: 'S', ru: 'S' } },
];

const steps: Step[] = [
  {
    title: { en: 'Market equilibrium', ru: 'Равновесие на рынке' },
    text: {
      en: 'Equilibrium E: P = 6 and Q = 12. Consumer surplus and producer surplus are the two areas that the price line makes with the demand and supply curves.',
      ru: 'Равновесие E: P = 6 и Q = 12. Излишек потребителя (consumer surplus) и излишек производителя (producer surplus) — это две области, которые линия цены образует с кривыми спроса и предложения.',
    },
    graph: {
      ...axes,
      curves,
      guides: [
        { id: 'e-h', from: [0, 6], to: [12, 6], tone: 'muted' },
        { id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' },
      ],
      marks: [{ id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E (P 6, Q 12)', ru: 'E (P 6, Q 12)' }, dx: -86, dy: -4 }],
    },
  },
  {
    title: { en: 'Consumer surplus (CS)', ru: 'Излишек потребителя (CS)' },
    text: {
      en: 'CS (green) is the area above the price and below the demand curve: 1/2 x 12 x 6 = 36. It is the gain to buyers who pay less than the most they would have paid.',
      ru: 'CS (зелёный) — это область выше цены и ниже кривой спроса: 1/2 × 12 × 6 = 36. Это выгода покупателей, которые платят меньше максимальной цены, на которую готовы были согласиться.',
    },
    graph: {
      ...axes,
      curves,
      guides: [{ id: 'price', from: [0, 6], to: [12, 6], tone: 'muted' }],
      areas: [{ id: 'cs', points: [[0, 12], [0, 6], [12, 6]], tone: 'gain' }],
      marks: [{ id: 'CS', dot: false, at: [1.5, 7.5], tone: 'gain', label: { en: 'CS', ru: 'CS' } }],
    },
  },
  {
    title: { en: 'Producer surplus (PS)', ru: 'Излишек производителя (PS)' },
    text: {
      en: 'PS (teal) is the area below the price and above the supply curve: 1/2 x 12 x 6 = 36. It is the gain to sellers who receive more than the minimum they would accept.',
      ru: 'PS (бирюзовый) — это область ниже цены и выше кривой предложения: 1/2 × 12 × 6 = 36. Это выгода продавцов, которые получают больше минимальной цены, на которую готовы были согласиться.',
    },
    graph: {
      ...axes,
      curves,
      guides: [{ id: 'price', from: [0, 6], to: [12, 6], tone: 'muted' }],
      areas: [{ id: 'ps', points: [[0, 0], [0, 6], [12, 6]], tone: 'alt' }],
      marks: [{ id: 'PS', dot: false, at: [4, 4], tone: 'alt', label: { en: 'PS', ru: 'PS' } }],
    },
  },
  {
    title: { en: 'Total surplus', ru: 'Совокупный излишек' },
    text: {
      en: 'Total surplus = CS + PS = 36 + 36 = 72. It is the whole area between the demand and supply curves up to the equilibrium quantity of 12.',
      ru: 'Совокупный излишек (total surplus) = CS + PS = 36 + 36 = 72. Это вся область между кривыми спроса и предложения до равновесного количества 12.',
    },
    graph: {
      ...axes,
      curves,
      guides: [{ id: 'price', from: [0, 6], to: [12, 6], tone: 'muted' }],
      areas: [
        { id: 'cs', points: [[0, 12], [0, 6], [12, 6]], tone: 'gain' },
        { id: 'ps', points: [[0, 0], [0, 6], [12, 6]], tone: 'alt' },
      ],
      marks: [
        { id: 'CS', dot: false, at: [1.5, 7.5], tone: 'gain', label: { en: 'CS 36', ru: 'CS 36' } },
        { id: 'PS', dot: false, at: [4, 4], tone: 'alt', label: { en: 'PS 36', ru: 'PS 36' } },
        { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 8, dy: -12 },
        { id: 'ts', dot: false, at: [15, 9], label: { en: 'TS 72', ru: 'TS 72' } },
      ],
    },
  },
];

export default function Surplus({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Consumer surplus, producer surplus and total surplus', ru: 'Излишек потребителя, излишек производителя и совокупный излишек' }}
      steps={steps}
    />
  );
}
