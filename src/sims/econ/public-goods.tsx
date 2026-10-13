import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Public good, two people: A and B. Market demand is the VERTICAL sum of the two demand curves, because both use the same unit.
// A: P = 12 - Q. B: P = 8 - 0.5Q. Sum: P = 20 - 1.5Q (valid up to Q 12). MC = 5.
// The sum meets MC at E: Q 10 (efficient). Only A pays, so the market stops where A's demand meets MC: Q 7 (under-provision).
// Individual curves are listed from the right end to the left end, so their labels sit at the free top-left of the graph.
const DA = fn(q => 12 - q, 0, 12, 12).reverse();
const DB = fn(q => 8 - 0.5 * q, 0, 14, 14).reverse();
const DSUM = fn(q => 20 - 1.5 * q, 0, 12, 24);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const indiv: CurveSpec[] = [
  { id: 'da', points: DA, tone: 'demand', label: { en: 'DA', ru: 'DA' } },
  { id: 'db', points: DB, tone: 'alt', label: { en: 'DB', ru: 'DB' } },
];
const sum: CurveSpec = { id: 'sum', points: DSUM, tone: 'ink', label: { en: 'D (sum)', ru: 'D (сумма)' } };
const mc: CurveSpec = { id: 'mc', points: [[0, 5], [14, 5]], tone: 'supply', label: { en: 'MC', ru: 'MC' } };

const axes = {
  xMax: 16,
  yMax: 20,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const steps: Step[] = [
  {
    title: { en: 'Individual demand', ru: 'Индивидуальный спрос' },
    text: {
      en: 'Each curve shows what one person would pay for each unit. A starts at 12 and B at 8, so A values the good more.',
      ru: 'Каждая кривая показывает, сколько один человек заплатил бы за каждую единицу. Спрос A начинается с 12, спрос B с 8, поэтому A ценит благо выше.',
    },
    graph: { ...axes, curves: indiv },
  },
  {
    title: { en: 'Vertical sum', ru: 'Вертикальное сложение' },
    text: {
      en: 'Everyone enjoys the same unit, so market demand adds the prices at each quantity, not the quantities. At Q 4: A pays 8 and B pays 6, a total of 14.',
      ru: 'Все пользуются одной и той же единицей, поэтому рыночный спрос складывает цены при каждом количестве, а не количества. При Q 4: A платит 8, B платит 6, всего 14.',
    },
    graph: {
      ...axes,
      curves: [...indiv, sum],
      guides: [{ id: 'stack', from: [4, 0], to: [4, 14], tone: 'muted' }],
      marks: [
        { id: 'a4', at: [4, 8], tone: 'demand', label: { en: 'A 8', ru: 'A 8' }, dx: 8, dy: -6 },
        { id: 'b4', at: [4, 6], tone: 'alt', label: { en: 'B 6', ru: 'B 6' }, dx: 8, dy: 20 },
        { id: 's4', at: [4, 14], tone: 'ink', label: { en: 'sum 14', ru: 'сумма 14' }, dx: 8, dy: -6 },
      ],
      xTicks: ticks([4]),
    },
  },
  {
    title: { en: 'Efficient quantity', ru: 'Эффективный объём' },
    text: {
      en: 'Efficient output is where total benefit equals marginal cost (MC = 5). The sum meets MC at E, so Qopt = 10 is efficient.',
      ru: 'Эффективный объём там, где общая выгода равна предельным издержкам (marginal cost, MC = 5). Сумма пересекает MC в точке E, поэтому Qopt = 10 — эффективный объём.',
    },
    graph: {
      ...axes,
      curves: [...indiv, sum, mc],
      guides: [{ id: 'eq', from: [10, 0], to: [10, 5], tone: 'ink' }],
      marks: [{ id: 'e', at: [10, 5], tone: 'ink', label: { en: 'Qopt 10', ru: 'Qopt 10' }, dx: 8, dy: -8 }],
      xTicks: ticks([10]),
    },
  },
  {
    title: { en: 'Market under-provision', ru: 'Недопроизводство на рынке' },
    text: {
      en: 'Free riders can use the good without paying. Only A pays, so the market stops at Qm = 7, where A demand meets MC. That is 3 units below the efficient Qopt = 10.',
      ru: 'Безбилетники (free riders) пользуются благом, не платя. Платит только A, поэтому рынок останавливается на Qm = 7, где спрос A пересекает MC. Это на 3 единицы меньше эффективного Qopt = 10.',
    },
    graph: {
      ...axes,
      curves: [...indiv, sum, mc],
      guides: [
        { id: 'eq', from: [10, 0], to: [10, 5], tone: 'ink' },
        { id: 'mq', from: [7, 0], to: [7, 5], tone: 'demand' },
      ],
      marks: [
        { id: 'e', at: [10, 5], tone: 'ink', label: { en: 'Qopt 10', ru: 'Qopt 10' }, dx: 8, dy: -8 },
        { id: 'm', at: [7, 5], tone: 'demand', label: { en: 'Qm 7', ru: 'Qm 7' }, dx: -50, dy: 20 },
      ],
      xTicks: ticks([7, 10]),
    },
  },
];

export default function PublicGoods({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Public good: market demand is the vertical sum', ru: 'Общественное благо: рыночный спрос — вертикальная сумма' }}
      steps={steps}
    />
  );
}
