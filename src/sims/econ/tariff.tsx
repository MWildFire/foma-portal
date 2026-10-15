import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GraphSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Tariff of 1 per unit on imports, small importing country, world price Pw = 3.
// Domestic market (the same in the quota and export-subsidy sims): Qd = 24 - 2P (P = 12 - 0.5Q), Qs = 2P (P = 0.5Q).
// Autarky E: P 6, Q 12. Free trade: Qd 18, Qs 6, imports 12, CS 81, PS 9.
// Tariff: P = Pw + t = 4, Qd 16, Qs 8, imports 8, CS 64 (loss 17), PS 16 (gain 7), revenue 1 x 8 = 8, DWL 1 + 1 = 2.
// Check: 17 = 7 + 8 + 2.

const D = fn(q => 12 - 0.5 * q, 0, 24, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);

const tick = (value: number, text: string): TickSpec => ({ value, label: { en: text, ru: text } });

const axes = {
  xMax: 24,
  yMax: 13,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supply: CurveSpec = { id: 's', points: S, tone: 'supply', label: { en: 'S', ru: 'S' } };
const worldPrice: CurveSpec = { id: 'pw', points: [[0, 3], [24, 3]], tone: 'ink', dashed: true };
const domesticPrice: CurveSpec = { id: 'p4', points: [[0, 4], [24, 4]], tone: 'policy', width: 2 };
// The price line is a curve that runs to the right edge of the plot, so it cannot carry a label there. The label is a guide of
// zero length: it draws no line, only the text, above the left end of the line.
const domesticPriceLabel: GuideSpec = { id: 'p4-label', from: [0, 4], to: [0, 4], tone: 'policy', label: { en: 'Pw + t = 4', ru: 'Pw + t = 4' } };

// Areas. The four tiles a, b, c, d split the lost consumer surplus (the band between prices 3 and 4) without overlap.
const csFree: AreaSpec = { id: 'cs-free', points: [[0, 12], [0, 3], [18, 3]], tone: 'gain' };
const psFree: AreaSpec = { id: 'ps-free', points: [[0, 0], [0, 3], [6, 3]], tone: 'gain' };
const csTariff: AreaSpec = { id: 'cs-tariff', points: [[0, 12], [0, 4], [16, 4]], tone: 'gain' };
const lostCs: AreaSpec = { id: 'lost-cs', points: [[0, 3], [18, 3], [16, 4], [0, 4]], tone: 'loss' };
const psGain: AreaSpec = { id: 'ps-gain', points: [[0, 3], [0, 4], [8, 4], [6, 3]], tone: 'gain' };
const revenue: AreaSpec = { id: 'revenue', points: [[8, 3], [8, 4], [16, 4], [16, 3]], tone: 'policy' };
const dwlProduction: AreaSpec = { id: 'dwl-production', points: [[6, 3], [8, 3], [8, 4]], tone: 'loss' };
const dwlConsumption: AreaSpec = { id: 'dwl-consumption', points: [[16, 3], [16, 4], [18, 3]], tone: 'loss' };

const eMark: MarkSpec = { id: 'e', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: -3, dy: -10 };
const csMark = (at: [number, number], text: string, dx = 8, dy = 4): MarkSpec => ({ id: 'cs-' + text, at, tone: 'gain', label: { en: text, ru: text }, dx, dy });
const psMark = (at: [number, number], text: string, dx = 10, dy = 4): MarkSpec => ({ id: 'ps-' + text, at, tone: 'gain', label: { en: text, ru: text }, dx, dy });
const revenueMark: MarkSpec = { id: 'revenue', at: [8.5, 3.5], tone: 'policy', label: { en: 'revenue 8', ru: 'доход 8' }, dx: 6, dy: 4 };
const lostMark: MarkSpec = { id: 'lost', at: [0.5, 3.5], tone: 'loss', label: { en: 'CS −17', ru: 'CS −17' }, dx: 10, dy: 4 };
const dwlMarks: MarkSpec[] = [
  { id: 'dwl-1', at: [7.33, 3.33], tone: 'loss', label: { en: 'DWL', ru: 'DWL' }, dx: -8, dy: 22 },
  { id: 'dwl-2', at: [16.67, 3.33], tone: 'loss', label: { en: 'DWL', ru: 'DWL' }, dx: -30, dy: 22 },
];

const freeTradeGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(6, '6'), tick(18, '18')],
  yTicks: [tick(3, 'Pw 3'), tick(6, '6')],
  curves: [demand, supply, worldPrice],
  areas: [csFree, psFree],
  guides: [
    { id: 'q6', from: [6, 0], to: [6, 3], tone: 'muted' },
    { id: 'q18', from: [18, 0], to: [18, 3], tone: 'muted' },
  ],
  marks: [
    eMark,
    csMark([3, 8], 'CS 81', 8, 4),
    psMark([1.5, 2.5], 'PS 9', 6, 4),
    { id: 'imports', at: [12, 3], tone: 'ink', label: { en: 'imports 12', ru: 'импорт 12' }, dx: -31, dy: -6 },
  ],
};

const tariffGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supply, worldPrice, domesticPrice],
  guides: [
    { id: 'q8', from: [8, 0], to: [8, 4], tone: 'muted' },
    { id: 'q16', from: [16, 0], to: [16, 4], tone: 'muted' },
    domesticPriceLabel,
  ],
  marks: [
    { id: 'qs', at: [8, 4], tone: 'supply' },
    { id: 'qd', at: [16, 4], tone: 'demand' },
    { id: 'imports', at: [12, 4], tone: 'ink', label: { en: 'imports 8', ru: 'импорт 8' }, dx: -28, dy: 27 },
  ],
};

const csFallsGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supply, worldPrice, domesticPrice],
  areas: [csTariff, lostCs],
  guides: [domesticPriceLabel],
  marks: [csMark([2, 9], 'CS 64'), lostMark],
};

const gainAndRevenueGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supply, worldPrice, domesticPrice],
  areas: [psGain, revenue],
  guides: [domesticPriceLabel],
  marks: [psMark([0.5, 3.5], 'PS +7'), revenueMark],
};

const completeGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supply, worldPrice, domesticPrice],
  areas: [csTariff, psGain, revenue, dwlProduction, dwlConsumption],
  guides: [domesticPriceLabel],
  marks: [csMark([2, 9], 'CS 64'), psMark([0.5, 3.5], 'PS +7'), revenueMark, ...dwlMarks],
};

const steps: Step[] = [
  {
    title: { en: 'Free trade at world price 3', ru: 'Свободная торговля: мировая цена 3' },
    text: {
      en: 'With free trade the price is the world price 3 (without trade it would be 6, point E): buyers take 18, firms supply 6 and imports are 12. Consumer surplus (CS) is 81 and producer surplus (PS) is 9.',
      ru: 'При свободной торговле цена равна мировой Pw = 3 (без торговли было бы 6, точка E): покупатели берут 18, фирмы предлагают 6, импорт равен 12. Излишек потребителя (consumer surplus, CS) равен 81, излишек производителя (producer surplus, PS) — 9.',
    },
    graph: freeTradeGraph,
  },
  {
    title: { en: 'Tariff raises the price to 4', ru: 'Тариф поднимает цену до 4' },
    text: {
      en: 'A specific tariff of 1 per unit raises the domestic price to Pw + t = 3 + 1 = 4. Domestic supply rises to 8, demand falls to 16 and imports fall from 12 to 8.',
      ru: 'Специфический тариф (specific tariff) 1 на единицу поднимает внутреннюю цену до Pw + t = 3 + 1 = 4. Отечественное предложение растёт до 8, спрос падает до 16, импорт сокращается с 12 до 8.',
    },
    graph: tariffGraph,
  },
  {
    title: { en: 'Consumer surplus falls', ru: 'Излишек потребителя падает' },
    text: {
      en: 'Consumers now pay 4 instead of 3, so CS falls from 81 to 64 (green). The red band is the CS lost, 81 − 64 = 17: it goes to producers, the government and deadweight loss (DWL).',
      ru: 'Потребители платят 4 вместо 3, поэтому CS падает с 81 до 64 (зелёный). Красная полоса — потерянный CS, 81 − 64 = 17: она уходит производителям, государству и в чистые потери общества (deadweight loss, DWL).',
    },
    graph: csFallsGraph,
  },
  {
    title: { en: 'Producer gain and tariff revenue', ru: 'Выигрыш производителей и доход от тарифа' },
    text: {
      en: 'Producers receive 4 per unit, so PS rises from 9 to 16: a gain of 7 (green). The government collects 1 on each of the 8 imports: tariff revenue 1 × 8 = 8 (purple).',
      ru: 'Производители получают 4 за единицу, поэтому PS растёт с 9 до 16: выигрыш 7 (зелёный). Государство собирает 1 с каждой из 8 импортных единиц: доход от тарифа 1 × 8 = 8 (фиолетовый).',
    },
    graph: gainAndRevenueGraph,
  },
  {
    title: { en: 'Complete picture', ru: 'Полная картина' },
    text: {
      en: 'CS falls by 17 = PS gain 7 + revenue 8 + DWL 2. The two red triangles, 1 and 1, are the deadweight loss of 2: a loss to society that nobody receives.',
      ru: 'CS падает на 17 = рост PS 7 + доход 8 + DWL 2. Два красных треугольника, по 1, — это чистые потери общества, 2: их никто не получает.',
    },
    graph: completeGraph,
  },
];

export default function Tariff({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{
        en: 'Tariff: world price 3, tariff 1, domestic price 4',
        ru: 'Тариф: мировая цена 3, тариф 1, внутренняя цена 4',
      }}
      steps={steps}
    />
  );
}
