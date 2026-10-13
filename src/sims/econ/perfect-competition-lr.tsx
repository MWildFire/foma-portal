import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type CurveSpec, type Step } from './_lib/graph';

// Firm in perfect competition, long run. The same cost curves as the short-run diagram:
// ATC = 0.25Q^2 - Q + 14 + 16/Q and MC = 0.75Q^2 - 2Q + 14. The lowest ATC is 18 at Q 4, where MC = ATC = 18.
// Price above that level (P1 = 29) gives supernormal profit and attracts entry; price below it (P2 = 14.75) gives losses and causes exit.
const MC = (q: number): number => 0.75 * q * q - 2 * q + 14;
const ATC = (q: number): number => 0.25 * q * q - q + 14 + 16 / q;
const P1 = 29;
const P2 = 14.75;
const P_LR = 18;

const mcCurve: CurveSpec = { id: 'mc', points: fn(MC, 0, 6.5, 26), tone: 'supply', label: { en: 'MC', ru: 'MC' } };
const atcCurve: CurveSpec = { id: 'atc', points: fn(ATC, 1, 8, 28), tone: 'ink', label: { en: 'ATC', ru: 'ATC' } };
const costCurves: CurveSpec[] = [mcCurve, atcCurve];

const priceLine = (price: number, id: string, label: string): CurveSpec => ({
  id,
  points: fn(() => price, 0, 8, 1),
  tone: 'demand',
  label: { en: label, ru: label },
});

const axes = {
  xMax: 9,
  yMax: 36,
  xLabel: { en: 'Output (Q)', ru: 'Выпуск (Q)' },
  yLabel: { en: 'Price, cost', ru: 'Цена, издержки' },
};

const steps: Step[] = [
  {
    title: { en: 'Long-run cost curves', ru: 'Долгосрочные кривые издержек' },
    text: {
      en: 'In the long run all costs are variable, so the firm can change its size. Its ATC is lowest at Q 4 (ATC = 18), and MC cuts ATC at that lowest point E.',
      ru: 'В долгосрочном периоде все издержки переменные, поэтому фирма может менять свой размер. Минимум средних общих издержек (ATC) равен 18 при Q = 4, и в этой точке E предельные издержки (MC) пересекают ATC.',
    },
    graph: {
      ...axes,
      curves: costCurves,
      marks: [{ id: 'E', at: [4, P_LR], tone: 'ink', label: { en: 'E (min ATC)', ru: 'E (min ATC)' }, dx: 8, dy: 22 }],
    },
  },
  {
    title: { en: 'Entry: supernormal profit', ru: 'Вход фирм: сверхприбыль' },
    text: {
      en: 'At price P1, above the minimum ATC, firms earn supernormal profit (green). New firms enter, market supply shifts right, and the price falls towards the minimum ATC.',
      ru: 'При цене P1, которая выше минимума ATC, фирмы получают сверхприбыль (зелёный прямоугольник). Новые фирмы входят в отрасль, рыночное предложение сдвигается вправо, и цена падает к минимуму ATC.',
    },
    graph: {
      ...axes,
      curves: [...costCurves, priceLine(P1, 'p1', 'P1')],
      areas: [{ id: 'profit', points: [[0, ATC(6)], [6, ATC(6)], [6, P1], [0, P1]], tone: 'gain' }],
      guides: [{ id: 'q1', from: [6, 0], to: [6, P1], tone: 'muted' }],
      marks: [
        { id: 'Q1', at: [6, P1], tone: 'ink', label: { en: 'Q1', ru: 'Q1' }, dx: 8, dy: 16 },
        { id: 'E', at: [4, P_LR], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Exit: losses', ru: 'Выход фирм: убытки' },
    text: {
      en: 'At price P2, below the minimum ATC, firms make losses (red rectangle). Some firms leave, market supply shifts left, and the price rises towards the minimum ATC.',
      ru: 'При цене P2, которая ниже минимума ATC, фирмы несут убытки (красный прямоугольник). Часть фирм уходит, рыночное предложение сдвигается влево, и цена растёт к минимуму ATC.',
    },
    graph: {
      ...axes,
      curves: [...costCurves, priceLine(P2, 'p2', 'P2')],
      areas: [{ id: 'loss', points: [[0, P2], [3, P2], [3, ATC(3)], [0, ATC(3)]], tone: 'loss' }],
      guides: [{ id: 'q2', from: [3, 0], to: [3, P2], tone: 'muted' }],
      marks: [
        { id: 'Q2', at: [3, P2], tone: 'ink', label: { en: 'Q2', ru: 'Q2' }, dx: -20, dy: -8 },
        { id: 'E', at: [4, P_LR], tone: 'muted' },
      ],
    },
  },
  {
    title: { en: 'Long-run equilibrium', ru: 'Долгосрочное равновесие' },
    text: {
      en: 'Entry and exit push the price to the minimum ATC: P = MC = ATC = 18 at Q 4. Each firm makes normal profit (zero economic profit), so no firm has a reason to enter or leave.',
      ru: 'Вход и выход фирм возвращают цену к минимуму ATC: P = MC = ATC = 18 при Q = 4. Каждая фирма получает нормальную прибыль (normal profit), то есть нулевую экономическую прибыль, поэтому ни одной фирме нет причин входить в отрасль или выходить из неё.',
    },
    graph: {
      ...axes,
      curves: [...costCurves, priceLine(P_LR, 'plr', 'P*')],
      marks: [{ id: 'E', at: [4, P_LR], tone: 'ink', label: { en: 'E: P = MC = ATC', ru: 'E: P = MC = ATC' }, dx: 8, dy: 22 }],
    },
  },
];

export default function PerfectCompetitionLr({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Firm in perfect competition: long run, entry and exit', ru: 'Фирма при совершенной конкуренции: долгосрочный период, вход и выход' }}
      steps={steps}
    />
  );
}
