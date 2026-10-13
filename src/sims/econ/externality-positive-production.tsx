import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Positive production externality (training or research spillovers). Demand is MPB = MSB: P = 12 - 0.5Q.
// Supply is MPC: P = 0.5Q + 3. External benefit = 3 per unit, so MSC = MPC - 3: P = 0.5Q.
// Market: MPB = MPC at Qm = 9, P = 7.5. Socially optimal: MSB = MSC at Q* = 12, P = 6.
// Welfare loss = 1/2 x 3 x 3 = 4.5: triangle (9, 7.5), (9, 4.5), (12, 6), between MSB (top) and MSC (bottom).
// A subsidy of 3 per unit on production shifts supply down by 3 onto MSC: the market reaches Q* = 12.
const D: [number, number][] = [[24, 0], [4, 10]];
const MPC = fn(q => 0.5 * q + 3, 0, 18, 1);
const MSC = fn(q => 0.5 * q, 0, 16, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: [{ value: 9, label: { en: 'Qm 9', ru: 'Qm 9' } }, { value: 12, label: { en: 'Q* 12', ru: 'Q* 12' } }],
  yTicks: ticks([4.5, 6, 7.5, 9, 12]),
};

const mpb: CurveSpec = { id: 'mpb', points: D, tone: 'demand', label: { en: 'MPB = MSB', ru: 'MPB = MSB' } };
const mpc: CurveSpec = { id: 'mpc', points: MPC, tone: 'supply', label: { en: 'MPC', ru: 'MPC' } };
const msc: CurveSpec = { id: 'msc', points: MSC, tone: 'alt', label: { en: 'MSC', ru: 'MSC' } };

const steps: Step[] = [
  {
    title: { en: 'Private market', ru: 'Частный рынок' },
    text: {
      en: 'Firms see only their private costs (MPC). The benefit is private too, so MPB = MSB. The market settles at Qm = 9 and P = 7.5, where MPB = MPC.',
      ru: 'Фирмы видят только частные издержки (MPC). Выгода тоже частная, поэтому MPB = MSB. Рынок уравновешивается при Qm = 9 и P = 7.5, где MPB = MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc],
      guides: [{ id: 'qm', from: [9, 0], to: [9, 7.5], tone: 'muted' }],
      marks: [{ id: 'Em', at: [9, 7.5], tone: 'ink' }],
    },
  },
  {
    title: { en: 'External benefit of 3', ru: 'Внешняя выгода 3' },
    text: {
      en: 'Training workers also helps other firms, an external benefit of 3 per unit. So the marginal social cost (MSC) is MPC minus 3, and MSC lies below MPC.',
      ru: 'Обучение работников помогает и другим фирмам: внешняя выгода 3 на единицу. Поэтому предельные общественные издержки (MSC) равны MPC минус 3, и MSC лежит ниже MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      guides: [
        { id: 'qm', from: [9, 0], to: [9, 7.5], tone: 'muted' },
        { id: 'gap', from: [6, 3], to: [6, 6], tone: 'alt' },
      ],
      marks: [{ id: 'Em', at: [9, 7.5], tone: 'muted' }],
    },
  },
  {
    title: { en: 'Socially optimal quantity', ru: 'Социально оптимальный объём' },
    text: {
      en: 'The socially optimal output is where MSB = MSC: 12 - 0.5Q = 0.5Q, so Q* = 12 at P = 6. Firms produce only 9, so output is too low.',
      ru: 'Оптимальный выпуск (socially optimal) там, где MSB = MSC: 12 - 0.5Q = 0.5Q, то есть Q* = 12 при P = 6. Фирмы производят только 9, поэтому выпуск слишком мал.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      guides: [
        { id: 'qs', from: [12, 0], to: [12, 6], tone: 'ink' },
        { id: 'ps', from: [0, 6], to: [12, 6], tone: 'muted' },
      ],
      marks: [
        { id: 'Es', at: [12, 6], tone: 'ink' },
        { id: 'Em', at: [9, 7.5], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Welfare loss', ru: 'Потери благосостояния' },
    text: {
      en: 'Units from 9 to 12 give society more benefit than they cost, but firms do not make them. The red triangle is the welfare loss: 1/2 x 3 x 3 = 4.5.',
      ru: 'Единицы с 9 до 12 приносят обществу больше пользы, чем стоят, но фирмы их не производят. Красный треугольник — это потери благосостояния: 1/2 x 3 x 3 = 4.5.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      areas: [{ id: 'loss', points: [[9, 7.5], [9, 4.5], [12, 6]], tone: 'loss' }],
      guides: [
        { id: 'qs', from: [12, 0], to: [12, 6], tone: 'ink' },
        { id: 'dwl', from: [12, 6], to: [12, 1.5], tone: 'loss', label: { en: 'DWL 4.5', ru: 'потери 4.5' }, labelAt: 'end' },
      ],
      marks: [
        { id: 'Es', at: [12, 6], tone: 'ink' },
        { id: 'Em', at: [9, 7.5], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Subsidy moves supply to the optimum (complete picture)', ru: 'Субсидия сдвигает предложение к оптимуму (полная картина)' },
    text: {
      en: 'A subsidy of 3 per unit shifts supply down by 3 to S-s = MSC. Output reaches Q* = 12 at P = 6: buyers pay 6, and producers receive 9 (6 plus the subsidy of 3).',
      ru: 'Субсидия 3 на единицу сдвигает предложение вниз на 3 до S-s = MSC. Выпуск достигает Q* = 12 при P = 6: покупатели платят 6, а производители получают 9 (6 плюс субсидия 3).',
    },
    graph: {
      ...axes,
      curves: [mpb, { ...mpc, tone: 'muted', dashed: true }, { ...msc, tone: 'policy', label: { en: 'S-s = MSC', ru: 'S-s = MSC' } }],
      guides: [
        { id: 'qs', from: [12, 0], to: [12, 6], tone: 'ink' },
        { id: 'pc', from: [0, 6], to: [12, 6], tone: 'demand' },
        { id: 'pp', from: [0, 9], to: [12, 9], tone: 'supply' },
      ],
      marks: [
        { id: 'Es', at: [12, 6], tone: 'ink' },
        { id: 'Sp', at: [12, 9], tone: 'supply' },
      ],
    },
  },
];

export default function ExternalityPositiveProduction({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Positive production externality: underproduction and a subsidy', ru: 'Позитивный внешний эффект производства: недопроизводство и субсидия' }}
      steps={steps}
    />
  );
}
