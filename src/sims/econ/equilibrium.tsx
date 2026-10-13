import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Market equilibrium. Demand Qd = 24 - 2P (P = 12 - 0.5Q) and supply Qs = 2P (P = 0.5Q) cross at E: P = 6, Q = 12.
// At P = 9: Qd = 6 and Qs = 18, a surplus of 12. At P = 3: Qd = 18 and Qs = 6, a shortage of 12.
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

const curves: CurveSpec[] = [
  { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } },
  { id: 's', points: S, tone: 'supply', label: { en: 'S', ru: 'S' } },
];

// An arrow is a shaft and an open head, because the library draws curves only.
// The head points towards the equilibrium price: down from above, up from below.
function arrow(x: number, from: number, tip: number): CurveSpec[] {
  const wing = tip < from ? tip + 0.5 : tip - 0.5;
  return [
    { id: 'shaft-' + from, points: [[x, from], [x, tip]], tone: 'ink', width: 2.5 },
    { id: 'head-' + from, points: [[x - 0.6, wing], [x, tip], [x + 0.6, wing]], tone: 'ink', width: 2.5 },
  ];
}

const steps: Step[] = [
  {
    title: { en: 'Equilibrium at E', ru: 'Равновесие в точке E' },
    text: {
      en: 'Demand (D) and supply (S) cross at E. At P = 6 the quantity demanded and the quantity supplied are both 12, so the market is in equilibrium.',
      ru: 'Спрос (demand, D) и предложение (supply, S) пересекаются в точке равновесия (equilibrium) E. При P = 6 величина спроса и величина предложения равны 12, поэтому рынок находится в равновесии.',
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
    title: { en: 'Price above equilibrium: surplus', ru: 'Цена выше равновесной: излишек' },
    text: {
      en: 'At P = 9 sellers offer 18 but buyers want only 6. The surplus of 12 unsold units pushes the price down towards E.',
      ru: 'При P = 9 продавцы предлагают 18, а покупатели хотят купить только 6. Излишек (surplus) в 12 нераспроданных единиц давит на цену вниз, к точке E.',
    },
    graph: {
      ...axes,
      curves,
      guides: [{ id: 'surplus', from: [6, 9], to: [18, 9], tone: 'alt', label: { en: 'surplus 12', ru: 'излишек 12' }, labelAt: 'start' }],
      marks: [
        { id: 'Qd', at: [6, 9], tone: 'demand', label: { en: 'Qd 6', ru: 'Qd 6' }, dx: -44, dy: 4 },
        { id: 'Qs', at: [18, 9], tone: 'supply', label: { en: 'Qs 18', ru: 'Qs 18' }, dx: 8, dy: 14 },
      ],
    },
  },
  {
    title: { en: 'Price below equilibrium: shortage', ru: 'Цена ниже равновесной: дефицит' },
    text: {
      en: 'At P = 3 buyers want 18 but sellers offer only 6. The shortage of 12 units pushes the price up towards E.',
      ru: 'При P = 3 покупатели хотят купить 18, а продавцы предлагают только 6. Дефицит (shortage) в 12 единиц толкает цену вверх, к точке E.',
    },
    graph: {
      ...axes,
      curves,
      guides: [{ id: 'shortage', from: [6, 3], to: [18, 3], tone: 'policy' }],
      marks: [
        { id: 'mid', at: [12, 3], tone: 'policy', label: { en: 'shortage 12', ru: 'дефицит 12' }, dx: -26, dy: -7 },
        { id: 'Qs', at: [6, 3], tone: 'supply', label: { en: 'Qs 6', ru: 'Qs 6' }, dx: -44, dy: 4 },
        { id: 'Qd', at: [18, 3], tone: 'demand', label: { en: 'Qd 18', ru: 'Qd 18' }, dx: 8, dy: -10 },
      ],
    },
  },
  {
    title: { en: 'Adjustment to equilibrium', ru: 'Возврат к равновесию' },
    text: {
      en: 'The arrows show the price moving: the surplus pulls it down from 9 and the shortage pulls it up from 3. Both forces move the price towards E (P 6, Q 12).',
      ru: 'Стрелки показывают движение цены: излишек тянет её вниз от 9, дефицит тянет вверх от 3. Оба процесса возвращают цену к точке E (P = 6, Q = 12).',
    },
    graph: {
      ...axes,
      curves: [...curves, ...arrow(0.9, 9, 6.5), ...arrow(0.9, 3, 5.5)],
      guides: [
        { id: 'surplus', from: [6, 9], to: [18, 9], tone: 'alt', label: { en: 'surplus 12', ru: 'излишек 12' }, labelAt: 'start' },
        { id: 'shortage', from: [6, 3], to: [18, 3], tone: 'policy' },
      ],
      marks: [
        { id: 'mid', at: [12, 3], tone: 'policy', label: { en: 'shortage 12', ru: 'дефицит 12' }, dx: -26, dy: -7 },
        { id: 'E', at: [12, 6], tone: 'ink', label: { en: 'E (P 6, Q 12)', ru: 'E (P 6, Q 12)' }, dx: -86, dy: -4 },
      ],
    },
  },
];

export default function Equilibrium({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Market equilibrium: surplus, shortage and adjustment', ru: 'Равновесие на рынке: излишек, дефицит и возврат к равновесию' }}
      steps={steps}
    />
  );
}
