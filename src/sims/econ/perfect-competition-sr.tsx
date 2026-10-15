import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type GuideSpec, type Point, type Step } from './_lib/graph';

// Firm in perfect competition, short run. Costs: AVC = 0.25Q^2 - Q + 14, fixed cost 16, so ATC = AVC + 16/Q
// and MC = 0.75Q^2 - 2Q + 14. MC cuts AVC at its minimum (Q 2, value 13) and ATC at its minimum (Q 4, value 18).
// P1 = 29: MR = MC at Q1 = 6, and P1 is above ATC(6) = 19.67, so profit is positive.
// P2 = 14.75: MR = MC at Q2 = 3, P2 is below ATC(3) = 18.58 but above AVC(3) = 13.25, so the firm makes a loss but still produces.
const MC = (q: number): number => 0.75 * q * q - 2 * q + 14;
const AVC = (q: number): number => 0.25 * q * q - q + 14;
const ATC = (q: number): number => AVC(q) + 16 / q;
const P1 = 29;
const P2 = 14.75;
const P3 = 13; // the minimum of AVC: the shut-down price

const mcCurve: CurveSpec = { id: 'mc', points: fn(MC, 0, 6.5, 26), tone: 'supply', label: { en: 'MC', ru: 'MC' } };
const atcCurve: CurveSpec = { id: 'atc', points: fn(ATC, 1, 8, 28), tone: 'ink', label: { en: 'ATC', ru: 'ATC' } };
const avcCurve: CurveSpec = { id: 'avc', points: fn(AVC, 0, 7, 28), tone: 'muted', dashed: true, label: { en: 'AVC', ru: 'AVC' } };
const costCurves: CurveSpec[] = [mcCurve, atcCurve, avcCurve];

const priceLine = (price: number, id: string): CurveSpec => ({
  id,
  points: fn(() => price, 0, 8, 1),
  tone: 'demand',
});

// The firm's demand is the horizontal price line, named P = AR = MR = D (Tragakes ch.7 p.211, Fig 7.8; p.214, Fig 7.10).
// The name is too long for the end of the line (it would run out of the picture), so it stands next to the line in a free place,
// as a label-only guide (from = to, nothing is drawn but the text).
const priceName = (id: string, at: Point, name: string): GuideSpec => ({
  id,
  from: at,
  to: at,
  tone: 'demand',
  dashed: false,
  label: { en: name, ru: name },
  labelAt: 'end',
});

const axes = {
  xMax: 9,
  yMax: 36,
  xLabel: { en: 'Output (Q)', ru: 'Выпуск (Q)' },
  yLabel: { en: 'Price, cost', ru: 'Цена, издержки' },
};

const steps: Step[] = [
  {
    title: { en: 'Cost curves of the firm', ru: 'Кривые издержек фирмы' },
    text: {
      en: 'MC cuts AVC and ATC at their lowest points. In perfect competition the firm is a price taker: its demand is the horizontal blue line at the market price, so P = AR = MR = D.',
      ru: 'Предельные издержки (marginal cost, MC) пересекают средние переменные (AVC) и средние общие (ATC) издержки в их минимумах. При совершенной конкуренции фирма — ценополучатель: её спрос — горизонтальная синяя линия на уровне рыночной цены, поэтому P = AR = MR = D.',
    },
    graph: {
      ...axes,
      curves: [...costCurves, priceLine(P1, 'p')],
      guides: [priceName('p-name', [1.5, 29.6], 'P = AR = MR = D')],
    },
  },
  {
    title: { en: 'Supernormal profit', ru: 'Сверхприбыль' },
    text: {
      en: 'At price P1 the firm produces Q1, where MR = MC. P1 is above ATC, so each unit earns P1 minus ATC. Profit = (P1 - ATC) x Q1, the green rectangle.',
      ru: 'При цене P1 фирма выпускает Q1, где предельный доход (marginal revenue, MR) равен MC. P1 выше ATC, поэтому каждая единица приносит P1 минус ATC. Прибыль = (P1 - ATC) × Q1 — это зелёный прямоугольник.',
    },
    graph: {
      ...axes,
      curves: [...costCurves, priceLine(P1, 'p1')],
      areas: [{ id: 'profit', points: [[0, ATC(6)], [6, ATC(6)], [6, P1], [0, P1]], tone: 'gain' }],
      guides: [{ id: 'q1', from: [6, 0], to: [6, P1], tone: 'muted' }, priceName('p1-name', [1.5, 29.6], 'P1 = AR1 = MR1 = D1')],
      marks: [{ id: 'Q1', at: [6, P1], tone: 'ink', label: { en: 'Q1', ru: 'Q1' }, dx: 8, dy: 16 }],
    },
  },
  {
    title: { en: 'Loss, but keep producing', ru: 'Убыток, но производство продолжается' },
    text: {
      en: 'At a lower price P2 the firm still produces where MR = MC (Q2). P2 is below ATC, so it makes a loss (red rectangle). It keeps producing because P2 covers AVC: revenue covers variable cost, so the loss is smaller than fixed cost.',
      ru: 'При более низкой цене P2 фирма всё равно выпускает Q2, где MR = MC. P2 ниже ATC, поэтому фирма несёт убыток (красный прямоугольник). Производство продолжается, потому что P2 покрывает AVC: выручка покрывает переменные издержки, и убыток меньше постоянных издержек.',
    },
    graph: {
      ...axes,
      curves: [...costCurves, priceLine(P2, 'p2')],
      areas: [{ id: 'loss', points: [[0, P2], [3, P2], [3, ATC(3)], [0, ATC(3)]], tone: 'loss' }],
      guides: [{ id: 'q2', from: [3, 0], to: [3, P2], tone: 'muted' }, priceName('p2-name', [4.8, 10.9], 'P2 = AR2 = MR2 = D2')],
      marks: [{ id: 'Q2', at: [3, P2], tone: 'ink', label: { en: 'Q2', ru: 'Q2' }, dx: -20, dy: -8 }],
    },
  },
  {
    title: { en: 'Short-run supply and the shut-down rule', ru: 'Краткосрочное предложение и правило закрытия' },
    text: {
      en: 'The short-run supply curve is the MC above the minimum AVC (purple). At the price P3, equal to the minimum AVC, the firm is at the shut-down point; at any price below P3 it stops producing and its loss equals fixed cost.',
      ru: 'Краткосрочная кривая предложения фирмы — это MC выше минимума AVC (фиолетовая линия). При цене P3, равной минимуму AVC, фирма находится в точке закрытия (shut-down point); при любой цене ниже P3 она прекращает производство, и её убыток равен постоянным издержкам.',
    },
    graph: {
      ...axes,
      curves: [
        ...costCurves,
        priceLine(P3, 'p3'),
        { id: 'supply', points: fn(MC, 2, 6.5, 18), tone: 'policy', width: 4 },
      ],
      guides: [priceName('p3-name', [5.5, 9], 'P3 = AR3 = MR3 = D3')],
      marks: [{ id: 'SD', at: [2, 13], tone: 'policy', label: { en: 'shut-down point', ru: 'точка закрытия' }, dx: 8, dy: 18 }],
    },
  },
];

export default function PerfectCompetitionSr({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Firm in perfect competition: short run', ru: 'Фирма при совершенной конкуренции: краткосрочный период' }}
      steps={steps}
    />
  );
}
