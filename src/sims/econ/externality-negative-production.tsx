import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Negative production externality (pollution). Demand is MPB = MSB: P = 12 - 0.5Q.
// Supply is MPC: P = 0.5Q. External cost = 3 per unit, so MSC: P = 0.5Q + 3.
// Market: MPB = MPC at Qm = 12, P = 6. Socially optimal: MSB = MSC at Qopt = 9, P = 7.5 (MPC there = 4.5).
// Welfare loss = 1/2 x 3 x 3 = 4.5: triangle (9, 7.5), (12, 9), (12, 6). A tax of 3 (= external cost) shifts supply to MSC.
const D: [number, number][] = [[24, 0], [4, 10]];
const MPC = fn(q => 0.5 * q, 0, 24, 1);
const MSC = fn(q => 0.5 * q + 3, 0, 20, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  // Only numbers on the Q axis; the names Qopt and Qm sit at the points Es and Em on the curves.
  xTicks: ticks([9, 12]),
  yTicks: ticks([4.5, 6, 7.5, 9, 12]),
};

const mpb: CurveSpec = { id: 'mpb', points: D, tone: 'demand', label: { en: 'MPB = MSB', ru: 'MPB = MSB' } };
const mpc: CurveSpec = { id: 'mpc', points: MPC, tone: 'supply', label: { en: 'MPC', ru: 'MPC' } };
const msc: CurveSpec = { id: 'msc', points: MSC, tone: 'alt', label: { en: 'MSC', ru: 'MSC' } };

// Market point Em (Qm 12) and socially optimal point Es (Qopt 9). The offsets keep each name clear of the curves, guides and dots:
// Qm stands right of Em, between MPC above and MPB below; Qopt stands above Es, between MPB and MSC.
const em: MarkSpec = { id: 'Em', at: [12, 6], tone: 'ink', label: { en: 'Qm', ru: 'Qm' }, dx: 17, dy: 3 };
const emMuted: MarkSpec = { ...em, tone: 'muted' };
const es: MarkSpec = { id: 'Es', at: [9, 7.5], tone: 'ink', label: { en: 'Qopt', ru: 'Qopt' }, dx: -14, dy: -20 };
// The welfare-loss label: a dot inside the triangle (9; 7.5), (12; 9), (12; 6) and the name next to it.
const dwl: MarkSpec = { id: 'dwl', dot: false, at: [11, 7.6], tone: 'loss', label: { en: 'DWL 4.5', ru: 'DWL 4,5' }, dx: 10, dy: -5 };

const steps: Step[] = [
  {
    title: { en: 'Private market', ru: 'Частный рынок' },
    text: {
      en: 'Demand is the marginal private benefit (MPB) and supply is the marginal private cost (MPC). The market settles at Qm = 12 and P = 6, where MPB = MPC.',
      ru: 'Спрос — это предельная частная выгода (MPB), а предложение — предельные частные издержки (MPC). Рынок уравновешивается при Qm = 12 и P = 6, где MPB = MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc],
      guides: [{ id: 'qm', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [em],
    },
  },
  {
    title: { en: 'External cost of 3', ru: 'Внешняя издержка 3' },
    text: {
      en: 'Production pollutes, so there is an external cost of 3 per unit. The marginal social cost (MSC) is MPC plus 3, so MSC lies above MPC.',
      ru: 'Производство загрязняет среду, поэтому возникает внешняя издержка 3 на единицу. Предельные общественные издержки (MSC) равны MPC плюс 3, поэтому MSC лежит выше MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      guides: [
        { id: 'qm', from: [12, 0], to: [12, 6], tone: 'muted' },
        { id: 'gap', from: [6, 3], to: [6, 6], tone: 'alt', label: { en: 'cost 3', ru: 'издержка 3' }, labelAt: 'start' },
      ],
      marks: [emMuted],
    },
  },
  {
    title: { en: 'Socially optimal quantity', ru: 'Социально оптимальный объём' },
    text: {
      en: 'The socially optimal output is where MSB = MSC: 12 - 0.5Q = 0.5Q + 3, so Qopt = 9 at P = 7.5. Beyond Qopt each unit costs society more than it gives.',
      ru: 'Оптимальный выпуск (socially optimal) там, где MSB = MSC: 12 - 0.5Q = 0.5Q + 3, то есть Qopt = 9 при P = 7.5. Сверх Qopt каждая единица обходится обществу дороже, чем приносит пользы.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      guides: [
        { id: 'qs', from: [9, 0], to: [9, 7.5], tone: 'ink' },
        { id: 'ps', from: [0, 7.5], to: [9, 7.5], tone: 'muted' },
      ],
      marks: [es, emMuted],
    },
  },
  {
    title: { en: 'Welfare loss', ru: 'Потери благосостояния' },
    text: {
      en: 'The market makes 12, which is 3 more than Qopt = 9. The units from 9 to 12 cost society more than they are worth: the red triangle is the welfare loss (DWL), 1/2 x 3 x 3 = 4.5.',
      ru: 'Рынок производит 12, то есть на 3 больше Qopt = 9. Единицы с 9 до 12 обходятся обществу дороже, чем стоят: красный треугольник — это потери благосостояния (DWL), 1/2 x 3 x 3 = 4.5.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      areas: [{ id: 'loss', points: [[9, 7.5], [12, 9], [12, 6]], tone: 'loss' }],
      guides: [
        { id: 'qs', from: [9, 0], to: [9, 7.5], tone: 'ink' },
        { id: 'ps', from: [0, 7.5], to: [9, 7.5], tone: 'muted' },
      ],
      marks: [es, emMuted, dwl],
    },
  },
  {
    title: { en: 'Tax equal to the external cost (complete picture)', ru: 'Налог, равный внешней издержке (полная картина)' },
    text: {
      en: 'A tax of 3 per unit, equal to the external cost, shifts supply up to MSC (S+t). The market moves to Qopt = 9: buyers pay 7.5, producers keep 4.5, and the welfare loss disappears.',
      ru: 'Налог 3 на единицу, равный внешней издержке, сдвигает предложение вверх до MSC (S+t). Рынок переходит к Qopt = 9: покупатели платят 7.5, производители получают 4.5, а потери благосостояния исчезают.',
    },
    graph: {
      ...axes,
      curves: [mpb, { ...mpc, points: fn(q => 0.5 * q, 0, 20, 1), tone: 'muted', dashed: true }, { ...msc, tone: 'policy', label: { en: 'S+t = MSC', ru: 'S+t = MSC' } }],
      guides: [
        { id: 'qs', from: [9, 0], to: [9, 7.5], tone: 'ink' },
        { id: 'pc', from: [0, 7.5], to: [9, 7.5], tone: 'demand' },
        { id: 'pp', from: [0, 4.5], to: [9, 4.5], tone: 'supply' },
      ],
      marks: [es, { id: 'Ep', at: [9, 4.5], tone: 'supply' }, emMuted],
    },
  },
];

export default function ExternalityNegativeProduction({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Negative production externality: overproduction and a tax', ru: 'Негативный внешний эффект производства: перепроизводство и налог' }}
      steps={steps}
    />
  );
}
