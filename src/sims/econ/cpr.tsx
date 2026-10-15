import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Common pool resource. Tragakes ch.5 p.152: the overuse of a common pool resource is shown with the negative production externality diagram (Fig 5.3).
// Main picture (steps 1-4), fishing firms in the open seas: demand is MPB = MSB: P = 12 - 0.5Q. Supply is MPC, the private cost of fishing: P = 0.5Q.
// The external cost of depleting the stock is 3 per unit, so MSC: P = 0.5Q + 3.
// Market: MPB = MPC at Qm = 12, P = 6. Socially optimal: MSB = MSC at Qopt = 9, P = 7.5. Welfare loss = 1/2 x 3 x 3 = 4.5: triangle (9, 7.5), (12, 9), (12, 6).
// Extension (steps 5-6), Tragakes ch.5 p.145-146 (Fig 5.1, maximum sustainable yield) and an open-access model of a fishery:
// TR = 12E - 0.5E^2 has the shape of the total yield: it peaks at E = 12 (MSY, value 72). Total cost TC = 4E.
// Open access: entry goes on while TR > TC, so the equilibrium is TR = TC at E = 16 (both 64, zero profit), to the right of MSY.
// Socially optimal effort maximises TR - TC = 8E - 0.5E^2, so E* = 8: TR = 64, TC = 32, profit 32. TR is 64 at both E = 8 and E = 16.
const D: [number, number][] = [[24, 0], [4, 10]];
const MPC = fn(q => 0.5 * q, 0, 24, 1);
const MSC = fn(q => 0.5 * q + 3, 0, 20, 1);
const TR = fn(e => 12 * e - 0.5 * e * e, 0, 18, 36);
const TC = fn(e => 4 * e, 0, 18, 1);

const ticks = (values: number[]): TickSpec[] => values.map(value => ({ value, label: { en: String(value), ru: String(value) } }));

// Main picture: numbers on the Q axis; the names Qm and Qopt stand at the points Em and Es on the curves.
const axes = {
  xMax: 28,
  yMax: 14,
  xLabel: { en: 'Quantity of fish (Q)', ru: 'Количество рыбы (Q)' },
  yLabel: { en: 'Price, cost (P)', ru: 'Цена, издержки (P)' },
  xTicks: ticks([9, 12]),
  yTicks: ticks([4.5, 6, 7.5, 9, 12]),
};

const mpb: CurveSpec = { id: 'mpb', points: D, tone: 'demand', label: { en: 'MPB = MSB', ru: 'MPB = MSB' } };
const mpc: CurveSpec = { id: 'mpc', points: MPC, tone: 'supply', label: { en: 'MPC', ru: 'MPC' } };
const msc: CurveSpec = { id: 'msc', points: MSC, tone: 'alt', label: { en: 'MSC', ru: 'MSC' } };

const em: MarkSpec = { id: 'Em', at: [12, 6], tone: 'ink', label: { en: 'Qm', ru: 'Qm' }, dx: 17, dy: 3 };
const emMuted: MarkSpec = { ...em, tone: 'muted' };
const es: MarkSpec = { id: 'Es', at: [9, 7.5], tone: 'ink', label: { en: 'Qopt', ru: 'Qopt' }, dx: -14, dy: -20 };
// The welfare-loss annotation has no data-point marker.
const dwl: MarkSpec = { id: 'dwl', dot: false, at: [11, 7.6], tone: 'loss', label: { en: 'DWL 4.5', ru: 'DWL 4,5' }, dx: 10, dy: -5 };

// Extension: effort (E) on the horizontal axis.
const effortAxes = {
  xMax: 24,
  yMax: 90,
  xLabel: { en: 'Fishing effort (E)', ru: 'Усилие лова (E)' },
};

// The yield curve stops at E = 16 so that its name (longer in Russian) stays inside the picture.
const yieldCurve: CurveSpec = { id: 'yield', points: fn(e => 12 * e - 0.5 * e * e, 0, 16, 32), tone: 'demand', label: { en: 'Total yield', ru: 'Общий улов' } };
const tr: CurveSpec = { id: 'tr', points: TR, tone: 'demand', label: { en: 'TR', ru: 'TR' } };
const tc: CurveSpec = { id: 'tc', points: TC, tone: 'supply', label: { en: 'TC', ru: 'TC' } };
const profitLabel: MarkSpec = { id: 'profit', dot: false, at: [8, 48], tone: 'policy', label: { en: 'profit 32', ru: 'прибыль 32' }, dx: 8, dy: -28 };

const steps: Step[] = [
  {
    title: { en: 'Open access: the private market', ru: 'Открытый доступ: частный рынок' },
    text: {
      en: 'Fishing firms use the open seas for free. Demand is the marginal private benefit (MPB), equal to the marginal social benefit (MSB), and supply is the firms\' marginal private cost (MPC). The market settles at Qm = 12 and P = 6, where MPB = MPC.',
      ru: 'Рыболовные фирмы пользуются открытым морем бесплатно. Спрос — это предельная частная выгода (MPB), равная предельной общественной выгоде (MSB), а предложение — предельные частные издержки фирм (MPC). Рынок уравновешивается при Qm = 12 и P = 6, где MPB = MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc],
      guides: [{ id: 'qm', from: [12, 0], to: [12, 6], tone: 'muted' }],
      marks: [em],
    },
  },
  {
    title: { en: 'External cost: the stock is depleted', ru: 'Внешняя издержка: запас истощается' },
    text: {
      en: 'Catching fish depletes the stock and harms the sea for everyone else, an external cost of 3 per unit that the firms do not pay. The marginal social cost (MSC) is MPC plus 3, so MSC lies above MPC.',
      ru: 'Вылов истощает запас рыбы и вредит морю для всех остальных: это внешняя издержка 3 на единицу, которую фирмы не платят. Предельные общественные издержки (MSC) равны MPC плюс 3, поэтому MSC лежит выше MPC.',
    },
    graph: {
      ...axes,
      curves: [mpb, mpc, msc],
      guides: [
        { id: 'qm', from: [12, 0], to: [12, 6], tone: 'muted' },
        { id: 'gap', from: [6, 3], to: [6, 6], tone: 'alt' },
      ],
      marks: [emMuted],
    },
  },
  {
    title: { en: 'Socially optimal use', ru: 'Социально оптимальное использование' },
    text: {
      en: 'The socially optimal catch is where MSB = MSC: 12 - 0.5Q = 0.5Q + 3, so Qopt = 9 at P = 7.5. The market catch Qm = 12 is above Qopt: the resource is overused.',
      ru: 'Социально оптимальный вылов там, где MSB = MSC: 12 - 0.5Q = 0.5Q + 3, то есть Qopt = 9 при P = 7.5. Рыночный вылов Qm = 12 выше Qopt: ресурс используется слишком интенсивно (перелов).',
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
    title: { en: 'Overuse and welfare loss (the exam diagram)', ru: 'Перелов и потери благосостояния (диаграмма для экзамена)' },
    text: {
      en: 'The units from 9 to 12 cost society more than they are worth: the red triangle is the welfare loss (DWL), 1/2 x 3 x 3 = 4.5. A tax or a quota that cuts the catch to Qopt = 9 would remove it.',
      ru: 'Единицы с 9 до 12 обходятся обществу дороже, чем стоят: красный треугольник — это потери благосостояния (DWL), 1/2 x 3 x 3 = 4.5. Налог или квота, снижающие вылов до Qopt = 9, убрали бы их.',
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
    title: { en: 'Extension: maximum sustainable yield', ru: 'Дополнение: максимальный устойчивый улов' },
    text: {
      en: 'The total catch rises with fishing effort, reaches its maximum sustainable yield (MSY) at E = 12, and then falls because the stock can no longer renew itself. Effort to the left of MSY is sustainable; to the right of it, it is not.',
      ru: 'Общий улов растёт с усилием лова, достигает максимального устойчивого улова (maximum sustainable yield, MSY) при E = 12 и затем падает, потому что запас больше не успевает восстанавливаться. Усилие левее MSY устойчиво, правее — нет.',
    },
    graph: {
      ...effortAxes,
      yLabel: { en: 'Total yield', ru: 'Общий улов' },
      curves: [yieldCurve],
      guides: [
        { id: 'msy', from: [12, 0], to: [12, 72], tone: 'ink' },
        { id: 'sust', from: [3, 6], to: [11.5, 6], tone: 'gain', dashed: false, label: { en: 'sustainable', ru: 'устойчиво' }, labelAt: 'start' },
        { id: 'unsust', from: [12.5, 6], to: [23, 6], tone: 'loss', dashed: false, label: { en: 'unsustainable', ru: 'неустойчиво' }, labelAt: 'start' },
      ],
      marks: [{ id: 'msyPoint', at: [12, 72], tone: 'ink', label: { en: 'MSY', ru: 'MSY' }, dx: 8, dy: -8 }],
      xTicks: ticks([12]),
    },
  },
  {
    title: { en: 'Extension: open access and the optimum (complete picture)', ru: 'Дополнение: открытый доступ и оптимум (полная картина)' },
    text: {
      en: 'Measure the catch in money: total yield becomes total revenue (TR), and total cost (TC) is added. With open access, boats keep entering while TR exceeds TC, so effort reaches Eoa = 16, to the right of MSY, where TR = TC = 64 and profit is zero. At E* = 8 the same revenue, 64, costs only 32, so profit is 32.',
      ru: 'Измерим улов в деньгах: общий улов становится общей выручкой (TR), и добавляются общие издержки (TC). При открытом доступе лодки продолжают приходить, пока TR выше TC, поэтому усилие доходит до Eoa = 16, правее MSY, где TR = TC = 64 и прибыль равна нулю. При E* = 8 та же выручка, 64, обходится всего в 32, поэтому прибыль равна 32.',
    },
    graph: {
      ...effortAxes,
      yLabel: { en: 'Revenue or cost', ru: 'Выручка или издержки' },
      curves: [tr, tc],
      guides: [
        { id: 'opt', from: [8, 0], to: [8, 32], tone: 'ink' },
        { id: 'profit', from: [8, 32], to: [8, 64], tone: 'policy' },
        { id: 'oa', from: [16, 0], to: [16, 64], tone: 'muted' },
      ],
      marks: [
        { id: 'Es', at: [8, 64], tone: 'policy' },
        { id: 'Ec', at: [8, 32], tone: 'policy' },
        { id: 'Eoa', at: [16, 64], tone: 'ink' },
        { id: 'msyPoint', at: [12, 72], tone: 'muted', label: { en: 'MSY', ru: 'MSY' }, dx: 8, dy: -8 },
        profitLabel,
      ],
      xTicks: [{ value: 8, label: { en: 'E* 8', ru: 'E* 8' } }, { value: 16, label: { en: 'Eoa 16', ru: 'Eoa 16' } }],
      yTicks: ticks([32, 64]),
    },
  },
];

export default function Cpr({ lang }: { lang: Lang }) {
  return (
    <>
    <StepPlayer
      lang={lang}
      label={{ en: 'Common pool resource: overuse of a shared fish stock', ru: 'Общий ресурс: перелов общего запаса рыбы' }}
      steps={steps.slice(0, 4)}
    />
    <details>
      <summary>{lang === 'ru' ? 'Вне мока: MSY и модель TR/TC' : 'Outside the mock: MSY and the TR/TC model'}</summary>
      <StepPlayer lang={lang} label={{ en: 'Optional extension: fishing effort', ru: 'Дополнение: усилие лова' }} steps={steps.slice(4)} />
    </details>
    </>
  );
}
