import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GraphSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';

// Export subsidy of 1 per unit. The country exports, so its world price (9) is above its autarky price (6).
// Same domestic market as the tariff and quota sims: Qd = 24 - 2P, Qs = 2P, autarky E: P 6, Q 12.
// Free trade at 9: Qd 6, Qs 18, exports 12, CS 9, PS 81.
// Subsidy 1: exporters get 9 + 1 = 10, so the domestic price is 10: Qd 4, Qs 20, exports 16.
// CS 9 -> 4 (loss 5 = transfer 4 + DWL 1). PS 81 -> 100 (gain 19 = from consumers 4 + from government 15).
// Government cost 1 x 16 = 16 (= 15 to producers + DWL 1). Deadweight loss 1 + 1 = 2.
// Check: -5 + 19 - 16 = -2.

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
const worldPrice: CurveSpec = { id: 'pw', points: [[0, 9], [24, 9]], tone: 'ink', dashed: true };
const subsidyPrice: CurveSpec = { id: 'p10', points: [[0, 10], [24, 10]], tone: 'policy', width: 2 };

const csFree: AreaSpec = { id: 'cs-free', points: [[0, 12], [0, 9], [6, 9]], tone: 'gain' };
const psFree: AreaSpec = { id: 'ps-free', points: [[0, 0], [0, 9], [18, 9]], tone: 'gain' };
const csSub: AreaSpec = { id: 'cs-sub', points: [[0, 12], [0, 10], [4, 10]], tone: 'gain' };
const transfer: AreaSpec = { id: 'transfer', points: [[0, 9], [4, 9], [4, 10], [0, 10]], tone: 'loss' };
const dwlConsumption: AreaSpec = { id: 'dwl-consumption', points: [[4, 9], [6, 9], [4, 10]], tone: 'loss' };
const psGain: AreaSpec = { id: 'ps-gain', points: [[0, 9], [0, 10], [20, 10], [18, 9]], tone: 'gain' };
const cost: AreaSpec = { id: 'cost', points: [[4, 9], [4, 10], [20, 10], [20, 9]], tone: 'policy' };
const dwlProduction: AreaSpec = { id: 'dwl-production', points: [[18, 9], [20, 9], [20, 10]], tone: 'loss' };

const eMark: MarkSpec = { id: 'e', at: [12, 6], tone: 'ink', label: { en: 'E', ru: 'E' }, dx: -3, dy: -10 };

const freeTradeGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(6, '6'), tick(18, '18')],
  yTicks: [tick(9, 'Pw 9'), tick(6, '6')],
  curves: [demand, supply, worldPrice],
  areas: [csFree, psFree],
  guides: [
    { id: 'q6', from: [6, 0], to: [6, 9], tone: 'muted' },
    { id: 'q18', from: [18, 0], to: [18, 9], tone: 'muted' },
  ],
  marks: [
    eMark,
    { id: 'cs', at: [0.4, 9.4], tone: 'gain', label: { en: 'CS 9', ru: 'CS 9' }, dx: 8, dy: 4 },
    { id: 'ps', at: [2, 7], tone: 'gain', label: { en: 'PS 81', ru: 'PS 81' }, dx: 6, dy: 4 },
    { id: 'exports', at: [12, 9], tone: 'ink', label: { en: 'exports 12', ru: 'экспорт 12' }, dx: -30, dy: 13 },
  ],
};

const subsidyGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(4, '4'), tick(20, '20')],
  yTicks: [tick(9, 'Pw 9'), tick(10, 'P 10')],
  curves: [demand, supply, worldPrice, subsidyPrice],
  marks: [
    { id: 'qd', at: [4, 10], tone: 'demand' },
    { id: 'qs', at: [20, 10], tone: 'supply' },
    { id: 'exports', at: [12, 10], tone: 'ink', label: { en: 'exports 16', ru: 'экспорт 16' }, dx: -32, dy: -7 },
  ],
};

const consumersLoseGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(4, '4'), tick(6, '6'), tick(20, '20')],
  yTicks: [tick(9, 'Pw 9'), tick(10, 'P 10')],
  curves: [demand, supply, worldPrice, subsidyPrice],
  areas: [csSub, transfer],
  marks: [
    { id: 'cs-left', at: [4, 10], tone: 'gain', label: { en: 'CS 4', ru: 'CS 4' }, dx: 4, dy: -6 },
    { id: 'cs-lost', at: [0.4, 9.5], tone: 'loss', label: { en: 'CS −5', ru: 'CS −5' }, dx: 8, dy: 4 },
  ],
};

const producersGainGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(18, '18'), tick(20, '20')],
  yTicks: [tick(9, 'Pw 9'), tick(10, 'P 10')],
  curves: [demand, supply, worldPrice, subsidyPrice],
  areas: [psGain],
  marks: [{ id: 'ps-gain', at: [7, 9.5], tone: 'gain', label: { en: 'PS +19', ru: 'PS +19' }, dx: 8, dy: 4 }],
};

const completeGraph: GraphSpec = {
  ...axes,
  xTicks: [tick(4, '4'), tick(6, '6'), tick(18, '18'), tick(20, '20')],
  yTicks: [tick(9, 'Pw 9'), tick(10, 'P 10')],
  curves: [demand, supply, worldPrice, subsidyPrice],
  areas: [csSub, transfer, psGain, dwlConsumption, cost, dwlProduction],
  marks: [
    { id: 'cs-left', at: [4, 10], tone: 'gain', label: { en: 'CS 4', ru: 'CS 4' }, dx: 4, dy: -6 },
    { id: 'cs-lost', at: [0.4, 9.5], tone: 'loss', label: { en: 'CS −5', ru: 'CS −5' }, dx: 8, dy: 4 },
    { id: 'ps-gain', at: [7, 9.5], tone: 'gain', label: { en: 'PS +19', ru: 'PS +19' }, dx: 8, dy: 4 },
    { id: 'cost', at: [13, 9.5], tone: 'policy', label: { en: 'cost 16', ru: 'расход 16' }, dx: 6, dy: 4 },
    { id: 'dwl-1', at: [4.67, 9.33], tone: 'loss', label: { en: 'DWL', ru: 'DWL' }, dx: -30, dy: 18 },
    { id: 'dwl-2', at: [19.33, 9.33], tone: 'loss', label: { en: 'DWL', ru: 'DWL' }, dx: -6, dy: 18 },
  ],
};

const steps: Step[] = [
  {
    title: { en: 'Free trade at world price 9', ru: 'Свободная торговля: мировая цена 9' },
    text: {
      en: 'The world price 9 is above the autarky price 6, so the country exports. At 9 buyers take 6 and firms supply 18: exports are 12, CS is 9 and PS is 81.',
      ru: 'Мировая цена 9 выше цены без торговли (6), поэтому страна экспортирует. При цене 9 покупатели берут 6, фирмы предлагают 18: экспорт равен 12, CS равен 9, PS равен 81.',
    },
    graph: freeTradeGraph,
  },
  {
    title: { en: 'Subsidy raises the price to 10', ru: 'Субсидия поднимает цену до 10' },
    text: {
      en: 'An export subsidy of 1 per unit pays exporters 9 + 1 = 10. Domestic sellers will not take less, so the price rises to 10: demand falls to 4, supply rises to 20 and exports rise to 16.',
      ru: 'Экспортная субсидия (export subsidy) 1 на единицу платит экспортёрам 9 + 1 = 10. Внутренние продавцы не согласятся на меньшее, поэтому цена растёт до 10: спрос падает до 4, предложение растёт до 20, экспорт — до 16.',
    },
    graph: subsidyGraph,
  },
  {
    title: { en: 'Consumers lose', ru: 'Потребители теряют' },
    text: {
      en: 'Consumers pay 10 instead of 9 and buy 4 instead of 6, so CS falls from 9 to 4: a loss of 5 (red). Of this, 4 goes to producers and 1 is deadweight loss (DWL).',
      ru: 'Потребители платят 10 вместо 9 и покупают 4 вместо 6, поэтому CS падает с 9 до 4: потеря 5 (красный). Из неё 4 уходит производителям, а 1 — чистые потери общества (deadweight loss, DWL).',
    },
    graph: consumersLoseGraph,
  },
  {
    title: { en: 'Producers gain', ru: 'Производители выигрывают' },
    text: {
      en: 'Producers sell 20 units at 10 instead of 18 at 9, so PS rises from 81 to 100: a gain of 19 (green). Of this, 4 comes from consumers and 15 from the government.',
      ru: 'Производители продают 20 единиц по 10 вместо 18 по 9, поэтому PS растёт с 81 до 100: выигрыш 19 (зелёный). Из них 4 поступает от потребителей, 15 — от государства.',
    },
    graph: producersGainGraph,
  },
  {
    title: { en: 'Complete picture', ru: 'Полная картина' },
    text: {
      en: 'The government pays 1 on each of the 16 exports: a cost of 16 (purple). Net: CS −5, PS +19, government −16, so the deadweight loss is 2 (red: 1 + 1).',
      ru: 'Государство платит 1 за каждую из 16 экспортных единиц: расход 16 (фиолетовый). Итог: CS −5, PS +19, государство −16, поэтому чистые потери (DWL) равны 2 (красный: 1 + 1).',
    },
    graph: completeGraph,
  },
];

export default function ExportSubsidy({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{
        en: 'Export subsidy of 1: world price 9, domestic price 10',
        ru: 'Экспортная субсидия 1: мировая цена 9, внутренняя цена 10',
      }}
      steps={steps}
    />
  );
}
