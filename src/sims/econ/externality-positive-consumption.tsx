import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Positive consumption externality (vaccination). Private demand is MPB: P = 9 - 0.5Q.
// Supply is MPC = MSC (no production externality): P = 0.5Q. External benefit = 3 per unit, so MSB: P = 12 - 0.5Q.
// Market: MPB = MPC at Qm = 9, P = 4.5. Socially optimal: MSB = MPC at Q* = 12, P = 6.
// Welfare loss = 1/2 x 3 x 3 = 4.5: triangle (9, 4.5), (9, 7.5), (12, 6).
// A subsidy of 3 per unit on consumption shifts demand up by 3 to MSB: the market reaches Q* = 12; buyers pay 3 net.
const MPB = fn(q => 9 - 0.5 * q, 0, 18, 1);
const MPC = fn(q => 0.5 * q, 0, 16, 1);
const MSB = fn(q => 12 - 0.5 * q, 0, 24, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: [{ value: 9, label: { en: 'Qm 9', ru: 'Qm 9' } }, { value: 12, label: { en: 'Q* 12', ru: 'Q* 12' } }],
  yTicks: ticks([4.5, 6, 7.5, 9, 12]),
};

const mpb: CurveSpec = { id: 'mpb', points: MPB, tone: 'demand', label: { en: 'MPB', ru: 'MPB' } };
const mpc: CurveSpec = { id: 'mpc', points: MPC, tone: 'supply', label: { en: 'MPC = MSC', ru: 'MPC = MSC' } };
const msb: CurveSpec = { id: 'msb', points: MSB, tone: 'alt', label: { en: 'MSB', ru: 'MSB' } };

// The welfare-loss label: a dot inside the triangle (9; 4.5), (9; 7.5), (12; 6) and the name next to it.
const dwl: MarkSpec = { id: 'dwl', at: [10, 6.2], tone: 'loss', label: { en: 'DWL', ru: 'DWL' }, dx: 7, dy: -15 };

const steps: Step[] = [
  {
    title: { en: 'Private market', ru: 'Частный рынок' },
    text: {
      en: 'Buyers see only their private benefit (MPB). The market settles at Qm = 9 and P = 4.5, where MPB = MPC, and MSC = MPC because production has no external effect.',
      ru: 'Покупатели видят только свою частную выгоду (MPB). Рынок уравновешивается при Qm = 9 и P = 4.5, где MPB = MPC. MSC равно MPC, так как производство не создаёт внешних эффектов.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc],
      guides: [{ id: 'qm', from: [9, 0], to: [9, 4.5], tone: 'muted' }],
      marks: [{ id: 'Em', at: [9, 4.5], tone: 'ink' }],
    },
  },
  {
    title: { en: 'External benefit of 3', ru: 'Внешняя выгода 3' },
    text: {
      en: 'Vaccination also protects other people, so the marginal social benefit (MSB) is MPB plus an external benefit of 3 per unit. MSB lies above MPB.',
      ru: 'Вакцинация защищает и других людей, поэтому предельная общественная выгода (MSB) равна MPB плюс внешняя выгода 3 на единицу. MSB лежит выше MPB.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msb],
      guides: [
        { id: 'qm', from: [9, 0], to: [9, 4.5], tone: 'muted' },
        { id: 'gap', from: [6, 6], to: [6, 9], tone: 'alt' },
      ],
      marks: [{ id: 'Em', at: [9, 4.5], tone: 'muted' }],
    },
  },
  {
    title: { en: 'Socially optimal quantity', ru: 'Социально оптимальный объём' },
    text: {
      en: 'The socially optimal output is where MSB = MPC: 12 - 0.5Q = 0.5Q, so Q* = 12 at P = 6. Consumption should be 12, not 9.',
      ru: 'Оптимальный объём (socially optimal) там, где MSB = MPC: 12 - 0.5Q = 0.5Q, то есть Q* = 12 при P = 6. Потребление должно быть 12, а не 9.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msb],
      guides: [
        { id: 'qs', from: [12, 0], to: [12, 6], tone: 'ink' },
        { id: 'ps', from: [0, 6], to: [12, 6], tone: 'muted' },
      ],
      marks: [
        { id: 'Es', at: [12, 6], tone: 'ink' },
        { id: 'Em', at: [9, 4.5], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Welfare loss', ru: 'Потери благосостояния' },
    text: {
      en: 'Units from 9 to 12 bring more benefit to society than they cost, but buyers do not consume them. The red triangle is the welfare loss (DWL), 1/2 x 3 x 3 = 4.5.',
      ru: 'Единицы с 9 до 12 приносят обществу больше пользы, чем стоят, но покупатели их не потребляют. Красный треугольник — это потери благосостояния (DWL), 1/2 x 3 x 3 = 4.5.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msb],
      areas: [{ id: 'loss', points: [[9, 4.5], [9, 7.5], [12, 6]], tone: 'loss' }],
      guides: [{ id: 'qs', from: [12, 0], to: [12, 6], tone: 'ink' }],
      marks: [
        { id: 'Es', at: [12, 6], tone: 'ink' },
        { id: 'Em', at: [9, 4.5], tone: 'muted' },
        dwl,
      ],
    },
  },
  {
    title: { en: 'Subsidy moves the market to Q* (complete picture)', ru: 'Субсидия переводит рынок к Q* (полная картина)' },
    text: {
      en: 'A subsidy of 3 per unit on consumption shifts demand up by 3 to MSB. The market reaches Q* = 12 at P = 6: sellers receive 6, and buyers pay 3 after the subsidy.',
      ru: 'Субсидия 3 на единицу на потребление сдвигает спрос вверх на 3 до MSB. Рынок переходит к Q* = 12 при P = 6: продавцы получают 6, а покупатели платят 3 после субсидии.',
    },
    graph: {
      ...axes,
      curves: [{ ...mpb, tone: 'muted', dashed: true }, mpc, { ...msb, points: fn(q => 12 - 0.5 * q, 0, 16, 1), tone: 'policy', label: { en: 'MSB with subsidy', ru: 'MSB с субсидией' } }],
      guides: [
        { id: 'qs', from: [12, 0], to: [12, 6], tone: 'ink' },
        { id: 'sub', from: [4, 7], to: [4, 10], tone: 'policy', label: { en: 'subsidy 3', ru: 'субсидия 3' }, labelAt: 'end' },
      ],
      marks: [
        { id: 'Es', at: [12, 6], tone: 'ink' },
        { id: 'Em', at: [9, 4.5], tone: 'muted' },
      ],
    },
  },
];

export default function ExternalityPositiveConsumption({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Positive consumption externality: underconsumption and a subsidy', ru: 'Позитивный внешний эффект потребления: недопотребление и субсидия' }}
      steps={steps}
    />
  );
}
