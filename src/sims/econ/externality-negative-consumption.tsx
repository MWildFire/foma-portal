import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step, type TickSpec } from './_lib/graph';

// Negative consumption externality (smoking). Private benefit is MPB: P = 12 - 0.5Q.
// External cost of consumption = 3 per unit, so MSB = MPB - 3: P = 9 - 0.5Q.
// Supply is MPC = MSC (no production externality): P = 0.5Q.
// Market: MPB = MPC at Qm = 12, P = 6. Socially optimal: MSB = MPC at Q* = 9, P = 4.5.
// Welfare loss = 1/2 x 3 x 3 = 4.5: triangle (9, 4.5), (12, 6), (12, 3), between MSC (top) and MSB (bottom).
// An indirect tax of 3 (= external cost) shifts supply up to S+t: P = 0.5Q + 3, which meets MPB at Q = 9.
const MPB = fn(q => 12 - 0.5 * q, 0, 24, 1);
const MSB = fn(q => 9 - 0.5 * q, 0, 18, 1);
const MPC = fn(q => 0.5 * q, 0, 16, 1);
const SPLUS_T = fn(q => 0.5 * q + 3, 0, 18, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: [{ value: 9, label: { en: 'Q* 9', ru: 'Q* 9' } }, { value: 12, label: { en: 'Qm 12', ru: 'Qm 12' } }],
  yTicks: ticks([4.5, 6, 7.5, 9, 12]),
};

const mpb: CurveSpec = { id: 'mpb', points: MPB, tone: 'demand', label: { en: 'MPB', ru: 'MPB' } };
const msb: CurveSpec = { id: 'msb', points: MSB, tone: 'alt', label: { en: 'MSB', ru: 'MSB' } };
const mpc: CurveSpec = { id: 'mpc', points: MPC, tone: 'supply', label: { en: 'MPC = MSC', ru: 'MPC = MSC' } };

const steps: Step[] = [
  {
    title: { en: 'Private market', ru: 'Частный рынок' },
    text: {
      en: 'Buyers weigh only their private benefit (MPB). The market settles at Qm = 12 and P = 6, where MPB = MPC.',
      ru: 'Потребители учитывают только частную выгоду (MPB). Рынок уравновешивается при Qm = 12 и P = 6, где MPB = MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc],
      guides: [{ id: 'qm', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [{ id: 'Em', at: [12, 6], tone: 'ink' }],
    },
  },
  {
    title: { en: 'External cost of 3', ru: 'Внешняя издержка 3' },
    text: {
      en: 'Smoking imposes external costs on other people, so the marginal social benefit (MSB) is MPB minus 3 per unit. MSB lies below MPB.',
      ru: 'Курение создаёт внешние издержки для других людей, поэтому предельная общественная выгода (MSB) равна MPB минус 3 на единицу. MSB лежит ниже MPB.',
    },
    graph: {
      ...axes,
      curves: [mpb, msb, mpc],
      guides: [
        { id: 'qm', from: [12, 0], to: [12, 6], tone: 'muted' },
        { id: 'gap', from: [6, 6], to: [6, 9], tone: 'alt' },
      ],
      marks: [{ id: 'Em', at: [12, 6], tone: 'muted' }],
    },
  },
  {
    title: { en: 'Socially optimal quantity', ru: 'Социально оптимальный объём' },
    text: {
      en: 'The socially optimal output is where MSB = MPC: 9 - 0.5Q = 0.5Q, so Q* = 9 at P = 4.5. Consumption should be 9, not 12.',
      ru: 'Оптимальный объём (socially optimal) там, где MSB = MPC: 9 - 0.5Q = 0.5Q, то есть Q* = 9 при P = 4.5. Потребление должно быть 9, а не 12.',
    },
    graph: {
      ...axes,
      curves: [mpb, msb, mpc],
      guides: [
        { id: 'qs', from: [9, 0], to: [9, 4.5], tone: 'ink' },
        { id: 'ps', from: [0, 4.5], to: [9, 4.5], tone: 'muted' },
      ],
      marks: [
        { id: 'Es', at: [9, 4.5], tone: 'ink' },
        { id: 'Em', at: [12, 6], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Welfare loss', ru: 'Потери благосостояния' },
    text: {
      en: 'Units from 9 to 12 cost society more than they give. The red triangle between MSB and MPC is the welfare loss: 1/2 x 3 x 3 = 4.5.',
      ru: 'Единицы с 9 до 12 обходятся обществу дороже, чем приносят пользы. Красный треугольник между MSB и MPC — это потери благосостояния: 1/2 x 3 x 3 = 4.5.',
    },
    graph: {
      ...axes,
      curves: [mpb, msb, mpc],
      areas: [{ id: 'loss', points: [[9, 4.5], [12, 6], [12, 3]], tone: 'loss' }],
      guides: [
        { id: 'qs', from: [9, 0], to: [9, 4.5], tone: 'ink' },
        { id: 'dwl', from: [12, 4.5], to: [16, 4.5], tone: 'loss', label: { en: 'DWL 4.5', ru: 'потери 4.5' }, labelAt: 'end' },
      ],
      marks: [
        { id: 'Es', at: [9, 4.5], tone: 'ink' },
        { id: 'Em', at: [12, 6], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Indirect tax equal to the external cost (complete picture)', ru: 'Косвенный налог, равный внешней издержке (полная картина)' },
    text: {
      en: 'An indirect tax of 3 per unit, equal to the external cost, shifts supply up to S+t. The market moves to Q* = 9: buyers pay 7.5, sellers keep 4.5, and the welfare loss disappears.',
      ru: 'Косвенный налог 3 на единицу, равный внешней издержке, сдвигает предложение вверх до S+t. Рынок переходит к Q* = 9: покупатели платят 7.5, продавцы получают 4.5, а потери благосостояния исчезают.',
    },
    graph: {
      ...axes,
      // MPB, MSB and MPC = MSC keep the style and labels of steps 1-4; E1 lies on MPB and S+t.
      curves: [
        mpb,
        msb,
        mpc,
        { id: 'st', points: SPLUS_T, tone: 'policy', label: { en: 'S+t', ru: 'S+t' } },
      ],
      guides: [
        { id: 'qs', from: [9, 0], to: [9, 7.5], tone: 'ink' },
        { id: 'pc', from: [0, 7.5], to: [9, 7.5], tone: 'demand' },
        { id: 'pp', from: [0, 4.5], to: [9, 4.5], tone: 'supply' },
      ],
      marks: [
        { id: 'E1', at: [9, 7.5], tone: 'policy', label: { en: 'E1', ru: 'E1' }, dx: -7, dy: -12 },
        { id: 'Sp', at: [9, 4.5], tone: 'supply' },
        { id: 'Em', at: [12, 6], tone: 'muted' },
      ],
    },
  },
];

export default function ExternalityNegativeConsumption({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Negative consumption externality: overconsumption and a tax', ru: 'Негативный внешний эффект потребления: перепотребление и налог' }}
      steps={steps}
    />
  );
}
