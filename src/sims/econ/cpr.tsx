import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type MarkSpec, type Step } from './_lib/graph';

// Common pool resource: open-access fishing. x = fishing effort (E), y = revenue or cost (same units).
// Total revenue TR = 12E - 0.5E^2 (hump-shaped: more boats catch fewer fish each). Total cost TC = 4E.
// Open access: entry goes on while TR > TC, so the equilibrium is TR = TC at E = 16 (both 64, normal profit zero).
// Socially optimal effort maximises TR - TC = 8E - 0.5E^2, so E* = 8: TR = 64, TC = 32, profit 32.
// TR is 64 at both E = 8 and E = 16, so the same catch costs half as much at the optimum.
const TR = fn(e => 12 * e - 0.5 * e * e, 0, 18, 36);
const TC = fn(e => 4 * e, 0, 18, 1);

const axes = {
  xMax: 24,
  yMax: 90,
  xLabel: { en: 'Effort (E)', ru: 'Усилие (E)' },
  yLabel: { en: 'Revenue or cost', ru: 'Выручка или издержки' },
  xTicks: [{ value: 8, label: { en: 'E* 8', ru: 'E* 8' } }, { value: 16, label: { en: 'Eoa 16', ru: 'Eoa 16' } }],
  yTicks: [{ value: 32, label: { en: '32', ru: '32' } }, { value: 64, label: { en: '64', ru: '64' } }],
};

const tr: CurveSpec = { id: 'tr', points: TR, tone: 'demand', label: { en: 'TR', ru: 'TR' } };
const tc: CurveSpec = { id: 'tc', points: TC, tone: 'supply', label: { en: 'TC', ru: 'TC' } };

const profitLabel: MarkSpec = { id: 'profit', at: [8, 48], tone: 'policy', label: { en: 'profit 32', ru: 'прибыль 32' }, dx: 6, dy: -24 };

const steps: Step[] = [
  {
    title: { en: 'Revenue and cost of fishing', ru: 'Выручка и издержки рыбной ловли' },
    text: {
      en: 'Total revenue (TR) from the catch rises with effort, then falls as boats share the same fish. Total cost (TC) rises in step with effort.',
      ru: 'Общая выручка (TR) от улова растёт с усилием, а затем падает, потому что лодки делят одну и ту же рыбу. Общие издержки (TC) растут пропорционально усилию.',
    },
    graph: { ...axes, curves: [tr, tc] },
  },
  {
    title: { en: 'Open-access equilibrium at E = 16', ru: 'Равновесие при открытом доступе: E = 16' },
    text: {
      en: 'With open access, fishers keep entering while revenue exceeds cost. Entry stops at E = 16, where TR = TC = 64: normal profit is zero and the stock is overfished.',
      ru: 'При открытом доступе рыбаки продолжают приходить, пока выручка выше издержек. Вход прекращается при E = 16, где TR = TC = 64: нормальная прибыль равна нулю, а запас перелавливается.',
    },
    graph: {
      ...axes,
      curves: [tr, tc],
      guides: [{ id: 'oa', from: [16, 0], to: [16, 64], tone: 'ink' }],
      marks: [{ id: 'Eoa', at: [16, 64], tone: 'ink' }],
    },
  },
  {
    title: { en: 'Socially optimal effort at E = 8', ru: 'Социально оптимальное усилие: E = 8' },
    text: {
      en: 'Society gains most where the gap between TR and TC is largest: E* = 8, with TR = 64 and TC = 32. Profit = 64 - 32 = 32. Effort above 8 only wastes resources.',
      ru: 'Общество получает больше всего там, где разрыв между TR и TC наибольший: E* = 8, TR = 64 и TC = 32. Прибыль = 64 - 32 = 32. Усилие сверх 8 лишь растрачивает ресурсы.',
    },
    graph: {
      ...axes,
      curves: [tr, tc],
      guides: [
        { id: 'opt', from: [8, 0], to: [8, 32], tone: 'ink' },
        { id: 'profit', from: [8, 32], to: [8, 64], tone: 'policy' },
      ],
      marks: [
        { id: 'Es', at: [8, 64], tone: 'policy' },
        { id: 'Ec', at: [8, 32], tone: 'policy' },
        profitLabel,
      ],
    },
  },
  {
    title: { en: 'Same catch, half the cost (complete picture)', ru: 'Тот же улов, вдвое меньше издержек (полная картина)' },
    text: {
      en: 'Open access overfishes to E = 16 and earns zero profit. At E = 8 the catch earns the same revenue, 64, at half the cost, 32. Quotas, licences or taxes that cut effort to 8 leave a profit of 32.',
      ru: 'При открытом доступе усилие доходит до E = 16, и прибыль равна нулю. При E = 8 улов приносит ту же выручку, 64, но вдвое меньшие издержки, 32. Квоты, лицензии или налоги, снижающие усилие до 8, оставляют прибыль 32.',
    },
    graph: {
      ...axes,
      curves: [tr, tc],
      guides: [
        { id: 'opt', from: [8, 0], to: [8, 32], tone: 'ink' },
        { id: 'profit', from: [8, 32], to: [8, 64], tone: 'policy' },
        { id: 'oa', from: [16, 0], to: [16, 64], tone: 'muted' },
      ],
      marks: [
        { id: 'Es', at: [8, 64], tone: 'policy' },
        { id: 'Ec', at: [8, 32], tone: 'policy' },
        { id: 'Eoa', at: [16, 64], tone: 'muted' },
        profitLabel,
      ],
    },
  },
];

export default function Cpr({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Common pool resource: open-access fishing overuses the stock', ru: 'Общий ресурс: открытый доступ к рыбной ловле ведёт к перелову' }}
      steps={steps}
    />
  );
}
