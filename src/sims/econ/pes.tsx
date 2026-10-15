import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type Step, type TickSpec } from './_lib/graph';

// Price elasticity of supply (PES). Three supply lines through E (P 6, Q 12):
// Inelastic (steep): Q = 6 + P, so P = Q - 6. PES at E = 1 x 6 / 12 = 0.5.
// Unit elastic: Q = 2P, a line through the origin. PES = 1 everywhere.
// Elastic (flat): Q = 4P - 12, so P = 3 + 0.25Q. PES at E = 4 x 6 / 12 = 2.
// Price rise from 6 to 8 (+33.3%): inelastic Q 12 -> 14 (+16.7%), unit Q 12 -> 16 (+33.3%), elastic Q 12 -> 20 (+66.7%).
const S_IN = fn(q => q - 6, 6, 20, 1);
const S_UNIT = fn(q => 0.5 * q, 0, 24, 1);
const S_EL = fn(q => 3 + 0.25 * q, 0, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 30,
  yMax: 16,
  xLabel: { en: 'Quantity supplied (Q)', ru: 'Величина предложения (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([6, 12, 18, 24]),
  yTicks: ticks([2, 4, 6, 8, 10, 12, 14]),
};

// Reading guides for the price rise from 6 to 8.
const priceGuides = (toQ: number): GuideSpec[] => [
  { id: 'p8', from: [0, 8], to: [toQ, 8], tone: 'muted' },
  { id: 'q8', from: [toQ, 0], to: [toQ, 8], tone: 'muted' },
];

const steps: Step[] = [
  {
    title: { en: 'Inelastic supply (steep)', ru: 'Неэластичное предложение (крутая кривая)' },
    text: {
      en: 'Supply is steep: Q = 6 + P. Between E and F the price rises by 33.3% (6 to 8) but quantity rises by only 16.7% (12 to 14). PES = 16.7% / 33.3% = 0.5, so supply is inelastic.',
      ru: 'Предложение крутое: Q = 6 + P. Между E и F цена растёт на 33,3% (с 6 до 8), а величина предложения — только на 16,7% (с 12 до 14). PES = 16,7% / 33,3% = 0,5, значит предложение неэластично.',
    },
    graph: {
      ...axes,
      curves: [{ id: 'sin', points: S_IN, tone: 'supply', label: { en: 'Inelastic', ru: 'Неэласт.' } }],
      guides: [{ id: 'e-h', from: [0, 6], to: [12, 6], tone: 'muted' }, { id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }, ...priceGuides(14)],
      marks: [
        { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 8, dy: 14 },
        { id: 'F', at: [14, 8], tone: 'ink', label: { en: 'F (P 8, Q 14)', ru: 'F (P 8, Q 14)' }, dx: 8, dy: 14 },
      ],
    },
  },
  {
    title: { en: 'Unit elastic supply', ru: 'Единичная эластичность предложения' },
    text: {
      en: 'Supply is a straight line through the origin: Q = 2P. The price rises by 33.3% (6 to 8) and quantity rises by 33.3% (12 to 16). PES = 1 at every point: unit elastic.',
      ru: 'Предложение — прямая линия через начало координат: Q = 2P. Цена растёт на 33,3% (с 6 до 8), величина предложения — на 33,3% (с 12 до 16). PES = 1 в каждой точке: единичная эластичность.',
    },
    graph: {
      ...axes,
      curves: [{ id: 'sunit', points: S_UNIT, tone: 'supply', label: { en: 'Unit', ru: 'Единич.' } }],
      guides: [{ id: 'e-h', from: [0, 6], to: [12, 6], tone: 'muted' }, { id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }, ...priceGuides(16)],
      marks: [
        { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 8, dy: 14 },
        { id: 'G', at: [16, 8], tone: 'ink', label: { en: 'G (P 8, Q 16)', ru: 'G (P 8, Q 16)' }, dx: 8, dy: 14 },
      ],
    },
  },
  {
    title: { en: 'Elastic supply (flat)', ru: 'Эластичное предложение (пологая кривая)' },
    text: {
      en: 'Supply is flat: Q = 4P - 12. The price rises by 33.3% (6 to 8) and quantity rises by 66.7% (12 to 20). PES = 66.7% / 33.3% = 2, so supply is elastic.',
      ru: 'Предложение пологое: Q = 4P - 12. Цена растёт на 33,3% (с 6 до 8), величина предложения — на 66,7% (с 12 до 20). PES = 66,7% / 33,3% = 2, значит предложение эластично.',
    },
    graph: {
      ...axes,
      curves: [{ id: 'sel', points: S_EL, tone: 'supply', label: { en: 'Elastic', ru: 'Эласт.' } }],
      guides: [{ id: 'e-h', from: [0, 6], to: [12, 6], tone: 'muted' }, { id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }, ...priceGuides(20)],
      marks: [
        { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 8, dy: 14 },
        { id: 'H', at: [20, 8], tone: 'ink', label: { en: 'H (P 8, Q 20)', ru: 'H (P 8, Q 20)' }, dx: 8, dy: 14 },
      ],
    },
  },
  {
    title: { en: 'Limit cases: PES = 0 and PES = infinity', ru: 'Крайние случаи: PES = 0 и PES = ∞' },
    text: {
      en: 'Perfectly inelastic supply (PES = 0) is a vertical line: quantity stays at 12 whatever the price. Perfectly elastic supply (PES = infinity) is a horizontal line at price 6: any quantity is supplied at 6, and nothing is supplied below 6.',
      ru: 'Абсолютно неэластичное предложение (PES = 0) — вертикальная линия: величина предложения остаётся равной 12 при любой цене. Абсолютно эластичное предложение (PES = ∞) — горизонтальная линия на уровне цены 6: любой объём поставляется по цене 6, а ниже 6 не поставляется ничего.',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'vert', points: [[12, 0], [12, 15]], tone: 'supply', label: { en: 'PES = 0', ru: 'PES = 0' } },
        { id: 'horiz', points: [[0, 6], [24, 6]], tone: 'alt', label: { en: 'PES = ∞', ru: 'PES = ∞' } },
      ],
      marks: [{ id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E (P 6, Q 12)', ru: 'E (P 6, Q 12)' }, dx: 8, dy: 14 }],
    },
  },
  {
    title: { en: 'Time period', ru: 'Фактор времени' },
    text: {
      en: 'The time period matters. In the short run (SR) firms cannot add capacity, so supply is steep and PES is low. In the long run (LR) they can build, hire and buy more inputs, so the same price rise brings a larger change in quantity: PES is higher.',
      ru: 'Период времени имеет значение. В краткосрочном периоде (SR) фирмы не могут расширить мощности, поэтому предложение крутое и PES низкий. В долгосрочном периоде (LR) фирмы могут строить, нанимать работников и закупать больше ресурсов, поэтому то же повышение цены даёт большее изменение величины предложения: PES выше.',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'sin', points: S_IN, tone: 'muted', dashed: true, label: { en: 'SR', ru: 'SR' } },
        { id: 'sel', points: S_EL, tone: 'supply', label: { en: 'LR', ru: 'LR' } },
      ],
      guides: [{ id: 'p8', from: [0, 8], to: [20, 8], tone: 'muted' }],
      marks: [
        { id: 'F', at: [14, 8], tone: 'muted', label: { en: 'SR: Q 14', ru: 'SR: Q 14' }, dx: -64, dy: -8 },
        { id: 'H', at: [20, 8], tone: 'ink', label: { en: 'LR: Q 20', ru: 'LR: Q 20' }, dx: 8, dy: 14 },
      ],
    },
  },
  {
    title: { en: 'Summary: three shapes through E', ru: 'Итог: три кривые через E' },
    text: {
      en: 'All three supply curves pass through E (P 6, Q 12). The steeper the curve, the lower the PES: inelastic (steep), unit elastic (through the origin), elastic (flat).',
      ru: 'Все три кривые предложения проходят через E (P = 6, Q = 12). Чем круче кривая, тем ниже PES: неэластичное (крутое), единичная эластичность (через начало координат), эластичное (пологое) предложение.',
    },
    graph: {
      ...axes,
      curves: [
        { id: 'sin', points: S_IN, tone: 'supply', label: { en: 'Inelastic', ru: 'Неэласт.' } },
        { id: 'sunit', points: S_UNIT, tone: 'alt', label: { en: 'Unit', ru: 'Единич.' } },
        { id: 'sel', points: S_EL, tone: 'gain', label: { en: 'Elastic', ru: 'Эласт.' } },
      ],
      marks: [{ id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E (P 6, Q 12)', ru: 'E (P 6, Q 12)' }, dx: 8, dy: 14 }],
    },
  },
];

export default function Pes({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Price elasticity of supply: inelastic, unit elastic and elastic supply', ru: 'Ценовая эластичность предложения: неэластичное, единичное и эластичное предложение' }}
      steps={steps}
    />
  );
}
