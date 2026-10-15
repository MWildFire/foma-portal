import type { L, Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Tax incidence: the same tax of 3 per unit under two supply curves, on one demand curve D: P = 18 - Q.
// Before the tax E is (Q 12, P 6) in both cases; PED at E = 1 x 6/12 = 0.5 (inelastic).
// Case 1, inelastic demand: S1: P = 0.5Q (PES 1 at E). S1+t: P = 0.5Q + 3. Equilibrium: 18 - Q = 0.5Q + 3, so Q = 10.
//   Buyers pay 8 (2 more than 6); sellers keep 5 (1 less). Buyers' share 2/3 = consumer_share(1, 0.5).
// Case 2, elastic supply: S2: P = 0.25Q + 3 (PES 2 at E). S2+t: P = 0.25Q + 6. Equilibrium: 18 - Q = 0.25Q + 6, so Q = 9.6.
//   Buyers pay 8.4 (2.4 more); sellers keep 5.4 (0.6 less). Buyers' share 2.4/3 = 4/5 = consumer_share(2, 0.5).
// The tax wedge is drawn at the new quantity: blue above the old price 6 (buyers), orange below it (sellers).
const D = fn(q => 18 - q, 4, 18, 1);
const S1 = fn(q => 0.5 * q, 0, 24, 1);
const S1t = fn(q => 0.5 * q + 3, 0, 20, 1);
const S2 = fn(q => 0.25 * q + 3, 0, 24, 1);
const S2t = fn(q => 0.25 * q + 6, 0, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([10, 12]),
  yTicks: ticks([4, 6, 8, 12]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const E: MarkSpec = { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: 4, dy: -14 };

// The tax wedge at quantity q: the buyers' part from the old price 6 up to buyers' price, the sellers' part from
// the sellers' price up to 6. Drawn as thick vertical segments.
function wedge(q: number, buyersPrice: number, sellersPrice: number): CurveSpec[] {
  return [
    { id: 'wb' + q, points: [[q, 6], [q, buyersPrice]], tone: 'demand', width: 7 },
    { id: 'ws' + q, points: [[q, sellersPrice], [q, 6]], tone: 'supply', width: 7 },
  ];
}

// Leader lines from the wedge to a label in the empty area on the right (Q 16 to 28, P 2 to 7).
function leader(id: string, from: [number, number], to: [number, number], tone: 'demand' | 'supply', label: L): GuideSpec {
  return { id, from, to, tone, label, labelAt: 'end' };
}

const steps: Step[] = [
  {
    title: { en: 'Inelastic demand: before the tax', ru: 'Неэластичный спрос: до налога' },
    text: {
      en: 'Demand is inelastic at E (PED 0.5): D is steep, so buyers cut quantity little when the price rises. Supply S1 is unit elastic (PES 1). E is Q 12, P 6.',
      ru: 'Спрос неэластичен в точке E (PED 0.5): кривая D крутая, поэтому покупатели мало сокращают количество при росте цены. Предложение S1 имеет единичную эластичность (PES 1). E: Q 12, P 6.',
    },
    graph: {
      ...axes,
      curves: [demand, { id: 's1', points: S1, tone: 'supply', label: { en: 'S1', ru: 'S1' } }],
      guides: [{ id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [E],
    },
  },
  {
    title: { en: 'Tax 3: buyers pay two thirds', ru: 'Налог 3: покупатели платят две трети' },
    text: {
      en: 'The tax of 3 per unit gives S1+t. The new equilibrium E1 is at Q 10: buyers pay 8 and sellers keep 5. Buyers pay 2 of the 3 (67%, blue); sellers pay 1 (33%, orange).',
      ru: 'Налог 3 на единицу даёт S1+t. Новое равновесие E1 при Q 10: покупатели платят 8, продавцы получают 5. Покупатели платят 2 из 3 (67%, синий), продавцы платят 1 (33%, оранжевый).',
    },
    graph: {
      ...axes,
      curves: [
        demand,
        { id: 's1', points: S1, tone: 'muted', dashed: true, label: { en: 'S1', ru: 'S1' } },
        { id: 's1t', points: S1t, tone: 'policy', label: { en: 'S1+t', ru: 'S1+t' } },
        ...wedge(10, 8, 5),
      ],
      guides: [
        { id: 'p0', from: [0, 6], to: [10, 6], tone: 'muted' },
        leader('lb', [10, 7], [16, 5.6], 'demand', { en: 'buyers 67%', ru: 'покупатели 67%' }),
        leader('ls', [10, 5.5], [16, 3.8], 'supply', { en: 'sellers 33%', ru: 'продавцы 33%' }),
      ],
      marks: [E, { id: 'E1', at: [10, 8], tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: -34, dy: -9 }],
    },
  },
  {
    title: { en: 'Elastic supply: before the tax', ru: 'Эластичное предложение: до налога' },
    text: {
      en: 'Now supply S2 is elastic at E (PES 2): the curve is flat, so a small change in price changes quantity a lot. Demand D is the same steep curve. E is Q 12, P 6.',
      ru: 'Теперь предложение S2 эластично в точке E (PES 2): кривая пологая, поэтому небольшое изменение цены сильно меняет количество. Спрос D тот же крутой. E: Q 12, P 6.',
    },
    graph: {
      ...axes,
      curves: [demand, { id: 's2', points: S2, tone: 'supply', label: { en: 'S2', ru: 'S2' } }],
      guides: [{ id: 'e-v', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [E],
    },
  },
  {
    title: { en: 'Elastic supply: sellers pay less', ru: 'Эластичное предложение: продавцы платят меньше' },
    text: {
      en: 'With the same tax of 3, S2+t gives E2 at Q 9.6: buyers pay 8.4 and sellers keep 5.4. Buyers pay 2.4 (80%) and sellers only 0.6 (20%), so the seller pays less than in the first case.',
      ru: 'С тем же налогом 3 S2+t даёт E2 при Q 9.6: покупатели платят 8.4, продавцы получают 5.4. Покупатели платят 2.4 (80%), а продавцы только 0.6 (20%), то есть продавец платит меньше, чем в первом случае.',
    },
    graph: {
      ...axes,
      curves: [
        demand,
        { id: 's2', points: S2, tone: 'muted', dashed: true, label: { en: 'S2', ru: 'S2' } },
        { id: 's2t', points: S2t, tone: 'policy', label: { en: 'S2+t', ru: 'S2+t' } },
        ...wedge(9.6, 8.4, 5.4),
      ],
      guides: [
        { id: 'p0', from: [0, 6], to: [9.6, 6], tone: 'muted' },
        leader('lb', [9.6, 7.2], [16, 5.6], 'demand', { en: 'buyers 80%', ru: 'покупатели 80%' }),
        leader('ls', [9.6, 5.7], [16, 3.8], 'supply', { en: 'sellers 20%', ru: 'продавцы 20%' }),
      ],
      marks: [E, { id: 'E2', at: [9.6, 8.4], tone: 'policy', label: { en: 'E2', ru: 'E2' }, dx: -34, dy: -9 }],
    },
  },
];

export default function TaxIncidence({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Tax incidence: who pays the tax depends on elasticity', ru: 'Налоговое бремя: кто платит налог, зависит от эластичности' }}
      steps={steps}
    />
  );
}
