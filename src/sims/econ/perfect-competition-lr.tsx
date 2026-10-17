import type { L, Lang } from '../../contract/types';
import { Graph, StepFrame, fn, type CurveSpec, type GraphSpec, type GuideSpec, type MarkSpec, type Point, type TickSpec } from './_lib/graph';

// Perfect competition, long run, in two panels like Tragakes ch.7 p.214 (Fig 7.10): the firm (left) and the market (right).
// Firm: ATC = 0.25Q^2 - Q + 14 + 16/Q and MC = 0.75Q^2 - 2Q + 14, the same curves as the short-run diagram.
// The lowest ATC is 18 at Q 4, where MC = ATC = 18. Price above that level (P1 = 29) gives supernormal profit and attracts entry;
// price below it (P2 = 14.75) gives losses and causes exit. The firm's demand is the horizontal line P = AR = MR = D.
// Market: demand D: P = 40 - 0.2Q. Supply curves are parallel, slope 0.2:
//   S1: P = 18 + 0.2Q meets D at E1 (Q 55, P1 = 29); entry shifts supply right to S*: P = -4 + 0.2Q, which meets D at E* (Q 110, P* = 18).
//   S2: P = -10.5 + 0.2Q meets D at E2 (Q 126.25, P2 = 14.75); exit shifts supply left to S*.
const MC = (q: number): number => 0.75 * q * q - 2 * q + 14;
const ATC = (q: number): number => 0.25 * q * q - q + 14 + 16 / q;
const P1 = 29;
const P2 = 14.75;
const P_LR = 18;

const mcCurve: CurveSpec = { id: 'mc', points: fn(MC, 0, 6.5, 26), tone: 'supply', label: { en: 'MC', ru: 'MC' } };
const atcCurve: CurveSpec = { id: 'atc', points: fn(ATC, 1, 8, 28), tone: 'ink', label: { en: 'ATC', ru: 'ATC' } };
const costCurves: CurveSpec[] = [mcCurve, atcCurve];

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

const priceTick = (value: number, name: string): TickSpec => ({ value, label: { en: name, ru: name } });

const firmAxes = {
  xMax: 9,
  yMax: 36,
  xLabel: { en: 'Output of the firm (Q)', ru: 'Выпуск фирмы (Q)' },
  yLabel: { en: 'Price, cost', ru: 'Цена, издержки' },
};

const marketAxes = {
  xMax: 200,
  yMax: 36,
  xLabel: { en: 'Market quantity (Q)', ru: 'Количество на рынке (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const demand: CurveSpec = { id: 'd', points: fn(q => 40 - 0.2 * q, 20, 180, 1), tone: 'demand', label: { en: 'D', ru: 'D' } };
const supply = (id: string, name: string, points: Point[]): CurveSpec => ({
  id,
  points,
  tone: 'supply',
  label: { en: name, ru: name },
});
const sBefore1: CurveSpec = supply('s1', 'S1', fn(q => 18 + 0.2 * q, 0, 80, 1));
const sBefore2: CurveSpec = supply('s2', 'S2', fn(q => -10.5 + 0.2 * q, 52.5, 180, 1));
const sLong: CurveSpec = supply('sl', 'S*', fn(q => -4 + 0.2 * q, 20, 180, 1));
const sLongDashed: CurveSpec = { ...sLong, tone: 'muted', dashed: true };

const marketPoint = (id: string, at: Point, name: string, tone: MarkSpec['tone'], dx: number, dy: number): MarkSpec => ({
  id,
  at,
  tone,
  label: { en: name, ru: name },
  dx,
  dy,
});
const priceGuide = (id: string, price: number, qty: number, tone: GuideSpec['tone']): GuideSpec => ({ id, from: [0, price], to: [qty, price], tone });

interface LrStep {
  title: L;
  text: L;
  firm: GraphSpec;
  market: GraphSpec;
}

const steps: LrStep[] = [
  {
    title: { en: 'Long-run cost curves', ru: 'Долгосрочные кривые издержек' },
    text: {
      en: 'In the long run all costs are variable, so the firm can change its size. Its ATC is lowest at Q 4 (ATC = 18), and MC cuts ATC at that lowest point E. The right panel is the market: demand D and supply S of all the firms together.',
      ru: 'В долгосрочном периоде все издержки переменные, поэтому фирма может менять свой размер. Минимум средних общих издержек (ATC) равен 18 при Q = 4, и в этой точке E предельные издержки (MC) пересекают ATC. Правая панель — рынок: спрос D и предложение S всех фирм вместе.',
    },
    firm: {
      ...firmAxes,
      curves: costCurves,
      marks: [{ id: 'E', at: [4, P_LR], tone: 'ink', label: { en: 'E (min ATC)', ru: 'E (min ATC)' }, dx: 8, dy: 22 }],
    },
    market: {
      ...marketAxes,
      curves: [demand, { ...sLong, label: { en: 'S', ru: 'S' } }],
    },
  },
  {
    title: { en: 'Entry: supernormal profit', ru: 'Вход фирм: сверхприбыль' },
    text: {
      en: 'At the market price P1, above the minimum ATC, firms earn supernormal profit (green). New firms enter, market supply shifts right from S1 to S*, and the price falls towards the minimum ATC.',
      ru: 'При рыночной цене P1, которая выше минимума ATC, фирмы получают сверхприбыль (зелёный прямоугольник). Новые фирмы входят в отрасль, рыночное предложение сдвигается вправо с S1 до S*, и цена падает к минимуму ATC.',
    },
    firm: {
      ...firmAxes,
      curves: [...costCurves, priceLine(P1, 'p1')],
      areas: [{ id: 'profit', points: [[0, ATC(6)], [6, ATC(6)], [6, P1], [0, P1]], tone: 'gain' }],
      guides: [{ id: 'q1', from: [6, 0], to: [6, P1], tone: 'muted' }, priceName('p1-name', [1.5, 29.6], 'P1 = AR1 = MR1 = D1')],
      marks: [
        { id: 'Q1', at: [6, P1], tone: 'ink', label: { en: 'Q1', ru: 'Q1' }, dx: 8, dy: 16 },
        { id: 'E', at: [4, P_LR], tone: 'muted' },
      ],
      yTicks: [priceTick(P1, 'P1')],
    },
    market: {
      ...marketAxes,
      curves: [demand, sBefore1, sLongDashed],
      guides: [priceGuide('pg1', P1, 55, 'muted')],
      marks: [
        marketPoint('E1', [55, P1], 'E1', 'ink', -7, -12),
        marketPoint('Estar', [110, P_LR], 'E*', 'muted', -8, -13),
      ],
      yTicks: [priceTick(P1, 'P1'), priceTick(P_LR, 'P*')],
    },
  },
  {
    title: { en: 'Exit: losses', ru: 'Выход фирм: убытки' },
    text: {
      en: 'At the market price P2, below the minimum ATC, firms make losses (red rectangle). Some firms leave, market supply shifts left from S2 to S*, and the price rises towards the minimum ATC.',
      ru: 'При рыночной цене P2, которая ниже минимума ATC, фирмы несут убытки (красный прямоугольник). Часть фирм уходит, рыночное предложение сдвигается влево с S2 до S*, и цена растёт к минимуму ATC.',
    },
    firm: {
      ...firmAxes,
      curves: [...costCurves, priceLine(P2, 'p2')],
      areas: [{ id: 'loss', points: [[0, P2], [3, P2], [3, ATC(3)], [0, ATC(3)]], tone: 'loss' }],
      guides: [{ id: 'q2', from: [3, 0], to: [3, P2], tone: 'muted' }, priceName('p2-name', [4.8, 10.9], 'P2 = AR2 = MR2 = D2')],
      marks: [
        { id: 'Q2', at: [3, P2], tone: 'ink', label: { en: 'Q2', ru: 'Q2' }, dx: -20, dy: -8 },
        { id: 'E', at: [4, P_LR], tone: 'muted' },
      ],
      yTicks: [priceTick(P2, 'P2')],
    },
    market: {
      ...marketAxes,
      curves: [demand, sBefore2, sLongDashed],
      guides: [priceGuide('pg2', P2, 126.25, 'muted')],
      marks: [
        marketPoint('E2', [126.25, P2], 'E2', 'ink', -7, -12),
        marketPoint('Estar', [110, P_LR], 'E*', 'muted', -8, -13),
      ],
      yTicks: [priceTick(P2, 'P2'), priceTick(P_LR, 'P*')],
    },
  },
  {
    title: { en: 'Long-run equilibrium', ru: 'Долгосрочное равновесие' },
    text: {
      en: 'Entry and exit push the price to the minimum ATC: P* = MC = ATC = 18 at Q 4 for each firm. Each firm makes normal profit (zero economic profit), so no firm has a reason to enter or leave, and market supply stays at S*.',
      ru: 'Вход и выход фирм возвращают цену к минимуму ATC: у каждой фирмы P* = MC = ATC = 18 при Q = 4. Каждая фирма получает нормальную прибыль (normal profit), то есть нулевую экономическую прибыль, поэтому ни одной фирме нет причин входить в отрасль или выходить из неё, и рыночное предложение остаётся на уровне S*.',
    },
    firm: {
      ...firmAxes,
      curves: [...costCurves, priceLine(P_LR, 'plr')],
      guides: [priceName('plr-name', [4.8, 14.2], 'P* = AR* = MR* = D*')],
      marks: [{ id: 'E', at: [4, P_LR], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: -4, dy: -9 }],
      yTicks: [priceTick(P_LR, 'P*')],
    },
    market: {
      ...marketAxes,
      curves: [demand, sLong],
      guides: [priceGuide('pgl', P_LR, 110, 'ink')],
      marks: [marketPoint('Estar', [110, P_LR], 'E*', 'ink', -8, -13)],
      yTicks: [priceTick(P_LR, 'P*')],
    },
  },
];

const FIRM: L = { en: 'The firm', ru: 'Фирма' };
const MARKET: L = { en: 'The market', ru: 'Рынок' };
const PANEL = { flex: '1 1 360px', minWidth: 0 } as const;
const CAPTION = { fontWeight: 600, fontSize: 14, marginBottom: 2 } as const;

export default function PerfectCompetitionLr({ lang }: { lang: Lang }) {
  const label: L = { en: 'Perfect competition, long run: the firm and the market, entry and exit', ru: 'Совершенная конкуренция, долгосрочный период: фирма и рынок, вход и выход' };
  return (
    <StepFrame lang={lang} label={label} steps={steps}>
      {index => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <div style={PANEL}>
            <div style={CAPTION}>{FIRM[lang]}</div>
            <Graph spec={steps[index].firm} lang={lang} label={`${label[lang]}: ${FIRM[lang]}. ${steps[index].title[lang]}`} />
          </div>
          <div style={PANEL}>
            <div style={CAPTION}>{MARKET[lang]}</div>
            <Graph spec={steps[index].market} lang={lang} label={`${label[lang]}: ${MARKET[lang]}. ${steps[index].title[lang]}`} />
          </div>
        </div>
      )}
    </StepFrame>
  );
}
