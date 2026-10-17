import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GraphSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Quota of 8 units on imports, small importing country, world price Pw = 3.
// Same domestic market as the tariff sim: Qd = 24 - 2P, Qs = 2P, autarky E: P 6, Q 12.
// Free trade: Qd 18, Qs 6, imports 12, CS 81, PS 9.
// Quota 8: total supply = domestic supply + 8, so at price 3 it is flat from 6 to 14 (kinked S + quota).
// Price 4 (E'): Qd 16, domestic supply 8, imports 8 = quota. CS 64, PS 16, rent 1 x 8 = 8, DWL 1 + 1 = 2.
// The quota rent equals the tariff revenue of the tariff sim, so the two policies differ in who gets the rent.

// D stops a little above the axis: its label stands right of the end, and the shared Graph moves labels that end beyond x 320.
const D = fn(q => 12 - 0.5 * q, 0, 21.5, 1);
const S = fn(q => 0.5 * q, 0, 24, 1);
const SQ: [number, number][] = [[0, 0], [6, 3], [14, 3], [16, 4]];

const tick = (value: number, text: string): TickSpec => ({ value, label: { en: text, ru: text } });

const axes = {
  xMax: 24,
  yMax: 13,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supply: CurveSpec = { id: 's', points: S, tone: 'supply', label: { en: 'S', ru: 'S' } };
const supplyOld: CurveSpec = { id: 's0', points: S, tone: 'muted', dashed: true, label: { en: 'S', ru: 'S' } };
const supplyWithQuota: CurveSpec = { id: 'sq', points: SQ, tone: 'supply', width: 2.5 };
const worldPrice: CurveSpec = { id: 'pw', points: [[0, 3], [24, 3]], tone: 'ink', dashed: true };
const domesticPrice: CurveSpec = { id: 'p4', points: [[0, 4], [24, 4]], tone: 'policy', width: 2 };

// Areas: the same tiles as the tariff sim. The rent (purple) is the rectangle between prices 3 and 4 for the 8 imports.
const csFree: AreaSpec = { id: 'cs-free', points: [[0, 12], [0, 3], [18, 3]], tone: 'gain' };
const psFree: AreaSpec = { id: 'ps-free', points: [[0, 0], [0, 3], [6, 3]], tone: 'gain' };
const csQuota: AreaSpec = { id: 'cs-quota', points: [[0, 12], [0, 4], [16, 4]], tone: 'gain' };
const psGain: AreaSpec = { id: 'ps-gain', points: [[0, 3], [0, 4], [8, 4], [6, 3]], tone: 'gain' };
const rent: AreaSpec = { id: 'rent', points: [[8, 3], [8, 4], [16, 4], [16, 3]], tone: 'policy' };
const dwlProduction: AreaSpec = { id: 'dwl-production', points: [[6, 3], [8, 3], [8, 4]], tone: 'loss' };
const dwlConsumption: AreaSpec = { id: 'dwl-consumption', points: [[16, 3], [16, 4], [18, 3]], tone: 'loss' };

const eMark: MarkSpec = { id: 'e', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: -3, dy: -10 };
const csMark = (at: [number, number], text: string, dx = 8, dy = 4): MarkSpec => ({ id: 'cs-' + text, at, tone: 'gain', label: { en: text, ru: text }, dx, dy });
const psMark = (at: [number, number], text: string, dx = 10, dy = 4): MarkSpec => ({ id: 'ps-' + text, at, tone: 'gain', label: { en: text, ru: text }, dx, dy });
const rentMark: MarkSpec = { id: 'rent', at: [8.5, 3.5], tone: 'policy', label: { en: 'rent 8', ru: 'рента 8' }, dx: 6, dy: 4 };
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

const quotaGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(6, '6'), tick(14, '14'), tick(18, '18')],
  yTicks: [tick(3, 'Pw 3')],
  curves: [demand, supplyOld, supplyWithQuota, worldPrice],
  marks: [
    { id: 'lo', at: [6, 3], tone: 'supply' },
    { id: 'hi', at: [14, 3], tone: 'policy', label: { en: 'S + quota', ru: 'S + квота' }, dx: 4, dy: 16 },
    { id: 'quota', at: [11, 3], tone: 'policy', label: { en: 'quota 8', ru: 'квота 8' }, dx: -26, dy: -6 },
  ],
};

const priceRisesGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supplyOld, supplyWithQuota, worldPrice, domesticPrice],
  guides: [
    { id: 'q8', from: [8, 0], to: [8, 4], tone: 'muted' },
    { id: 'q16', from: [16, 0], to: [16, 4], tone: 'muted' },
  ],
  marks: [
    { id: 'qs', at: [8, 4], tone: 'supply' },
    { id: 'eprime', at: [16, 4], tone: 'ink', label: { en: "E'", ru: "E'" }, dx: 6, dy: -6 },
    // The strip between prices 3 and 4 is only 15 px high, so 'imports 8' stands under the world price line, below its dot
    // (the same place as in the tariff sim), and covers neither the dot nor a line.
    { id: 'imports', at: [12, 4], tone: 'ink', label: { en: 'imports 8', ru: 'импорт 8' }, dx: -28, dy: 29 },
  ],
};

const rentGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supply, worldPrice, domesticPrice],
  areas: [rent],
  marks: [rentMark],
};

const completeGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(8, '8'), tick(16, '16')],
  yTicks: [tick(3, 'Pw 3'), tick(4, 'P 4')],
  curves: [demand, supply, worldPrice, domesticPrice],
  areas: [csQuota, psGain, rent, dwlProduction, dwlConsumption],
  marks: [csMark([2, 9], 'CS 64'), psMark([0.5, 3.5], 'PS +7'), rentMark, ...dwlMarks],
};

const steps: Step[] = [
  {
    title: { en: 'Free trade at world price 3', ru: 'Свободная торговля: мировая цена 3' },
    text: {
      en: 'Free trade at world price 3: buyers take 18, firms supply 6 and imports are 12. A quota will cap these imports at 8 units. CS is 81 and PS is 9.',
      ru: 'Свободная торговля при мировой цене 3: покупатели берут 18, фирмы предлагают 6, импорт равен 12. Квота (quota) ограничит импорт 8 единицами. CS равен 81, PS равен 9.',
    },
    graph: freeTradeGraph,
  },
  {
    title: { en: 'Quota caps imports at 8', ru: 'Квота ограничивает импорт 8' },
    text: {
      en: 'A quota of 8 limits imports to 8 units at any price. Total supply is domestic supply plus 8, so at price 3 it is flat from 6 (domestic) to 14 (6 + 8).',
      ru: 'Квота 8 ограничивает импорт 8 единицами при любой цене. Общее предложение — это отечественное плюс 8, поэтому при цене 3 оно горизонтально от 6 (отечественное) до 14 (6 + 8).',
    },
    graph: quotaGraph,
  },
  {
    title: { en: 'Price rises to 4', ru: 'Цена растёт до 4' },
    text: {
      en: "The price rises to 4, where demand meets the kinked supply at E' (Q 16). Domestic supply is 8 and imports are 8, exactly the quota, so imports fall from 12 to 8.",
      ru: "Цена растёт до 4: спрос пересекает ломаное предложение в точке E' (Q 16). Отечественное предложение 8, импорт 8, то есть ровно квота: импорт падает с 12 до 8.",
    },
    graph: priceRisesGraph,
  },
  {
    title: { en: 'Quota rent', ru: 'Рента от квоты' },
    text: {
      en: 'The 8 imports are sold at 4 but cost 3 abroad, so each earns 1 more: rent = 1 × 8 = 8 (purple). Licence holders (importers) keep it, or foreign suppliers do if they can charge the higher price.',
      ru: 'Восемь импортных единиц продаются по 4, а за границей стоят 3, поэтому каждая даёт 1 сверху: рента (quota rent) = 1 × 8 = 8 (фиолетовый). Её получают держатели импортных лицензий или зарубежные поставщики, если могут брать высокую цену.',
    },
    graph: rentGraph,
  },
  {
    title: { en: 'Complete picture', ru: 'Полная картина' },
    text: {
      en: 'Compared with the tariff: the same CS 64, PS +7 and DWL 2. The rent 8 replaces the tariff revenue 8, so with a quota the government gets nothing unless it sells the licences.',
      ru: 'По сравнению с тарифом: тот же CS 64, рост PS 7 и DWL 2. Рента 8 заменяет доход от тарифа 8, поэтому при квоте государство ничего не получает, если не продаёт лицензии.',
    },
    graph: completeGraph,
  },
];

export default function Quota({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{
        en: 'Quota of 8: world price 3, domestic price 4, quota rent',
        ru: 'Квота 8: мировая цена 3, внутренняя цена 4, рента от квоты',
      }}
      steps={steps}
    />
  );
}
