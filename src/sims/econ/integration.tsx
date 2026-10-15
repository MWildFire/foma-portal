import type { Lang } from '../../contract/types';
import { StepPlayer, fn, type AreaSpec, type CurveSpec, type GuideSpec, type MarkSpec, type Step, type TickSpec } from './_lib/graph';
import {
  CREATION_CONSUMPTION,
  CREATION_PRODUCTION,
  DIVERSION,
  PRICE_PARTNER,
  PRICE_ROW,
  PRICE_WITH_TARIFF,
  TARIFF_REVENUE,
  demandPrice,
  supplyPrice,
} from './integration-logic';

// Domestic market. Demand Qd = 40 - 2P (P = 20 - 0.5Q); supply Qs = 2P - 4 (P = 2 + 0.5Q). The numbers and the areas are in
// integration-logic.ts.
// Prices: RoW (rest of the world) 4, partner 6, RoW with a tariff of 4 = 8.
// Before the union: domestic price 8, Qs 12, Qd 24, imports 12 from RoW, tariff revenue 4 x 12 = 48.
// After the union: price 6, Qs 8, Qd 28, imports 20 from the partner.
// Trade creation: 4 units of domestic output replaced (production effect, the triangle below S) and 4 units of extra consumption.
// Trade diversion: the 12 units imported from the cheaper RoW (4) before the union (Q 12 to 24) now come from the dearer partner (6): 12 x 2 = 24.
const D = fn(demandPrice, 0, 28, 14);
const S = fn(supplyPrice, 0, 24, 12);

const ticks = (values: number[], labels?: string[]): TickSpec[] =>
  values.map((value, i) => ({ value, label: { en: labels?.[i] ?? String(value), ru: labels?.[i] ?? String(value) } }));

const axes = {
  xMax: 32,
  yMax: 20,
  xLabel: { en: 'Quantity (Q)', ru: 'Количество (Q)' },
  yLabel: { en: 'Price (P)', ru: 'Цена (P)' },
  xTicks: ticks([8, 12, 24, 28]),
  yTicks: ticks([PRICE_ROW, PRICE_PARTNER, PRICE_WITH_TARIFF]),
};

const demand: CurveSpec = { id: 'd', points: D, tone: 'demand', label: { en: 'D', ru: 'D' } };
const supply: CurveSpec = { id: 's', points: S, tone: 'supply', label: { en: 'S', ru: 'S' } };

// Each price line is named at its left end, above the line (the S curve crosses the lines further right).
const priceWithTariff: GuideSpec = { id: 'p8', from: [0, PRICE_WITH_TARIFF], to: [32, PRICE_WITH_TARIFF], tone: 'policy', label: { en: 'RoW + tariff 8', ru: 'RoW + тариф 8' }, labelAt: 'start' };
const priceWithTariffMuted: GuideSpec = { id: 'p8', from: [0, PRICE_WITH_TARIFF], to: [32, PRICE_WITH_TARIFF], tone: 'muted', label: { en: 'RoW + tariff 8', ru: 'RoW + тариф 8' }, labelAt: 'start' };
const pricePartner: GuideSpec = { id: 'p6', from: [0, PRICE_PARTNER], to: [32, PRICE_PARTNER], tone: 'alt', label: { en: 'partner 6', ru: 'партнёр 6' }, labelAt: 'start' };
const priceRoW: GuideSpec = { id: 'p4', from: [0, PRICE_ROW], to: [32, PRICE_ROW], tone: 'ink', label: { en: 'RoW 4', ru: 'RoW 4' }, labelAt: 'start' };

const tariffRevenue: AreaSpec = { id: 'tariff', points: TARIFF_REVENUE, tone: 'policy' };
const creationProduction: AreaSpec = { id: 'creation-prod', points: CREATION_PRODUCTION, tone: 'gain' };
const creationConsumption: AreaSpec = { id: 'creation-cons', points: CREATION_CONSUMPTION, tone: 'gain' };
const diversion: AreaSpec = { id: 'diversion', points: DIVERSION, tone: 'loss' };

// Each label starts just right of its dot, inside open space between the price lines. The diversion dot sits in the middle of
// the diversion rectangle (Q 12 to 24).
const creationMark: MarkSpec = { id: 'creation', at: [14, 7], tone: 'gain', label: { en: 'creation', ru: 'создание' }, dx: 8, dy: 4 };
const diversionMark: MarkSpec = { id: 'diversion', at: [14, 5], tone: 'loss', label: { en: 'diversion', ru: 'отклонение' }, dx: 6, dy: 4 };

const steps: Step[] = [
  {
    title: { en: 'Before the union', ru: 'До союза' },
    text: {
      en: 'Before the union, imports come from the RoW at price 4 plus a tariff of 4, so the domestic price is 8. Supply is 12 and demand is 24, so 12 units are imported and the tariff revenue is 4 x 12 = 48.',
      ru: 'До союза импорт идёт из остального мира (RoW) по цене 4 плюс пошлина 4, поэтому внутренняя цена равна 8. Предложение 12, спрос 24, импорт 12 единиц, а пошлинная выручка (tariff revenue) равна 4 x 12 = 48.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      guides: [priceWithTariff, priceRoW],
      areas: [tariffRevenue],
      marks: [
        { id: 'tariff', at: [18, 6], tone: 'policy', label: { en: 'tariff 48', ru: 'пошлина 48' }, dx: -30, dy: 17 },
        { id: 'qs', at: [12, 8], tone: 'supply', label: { en: 'Qs 12', ru: 'Qs 12' }, dx: -18, dy: -12 },
        { id: 'qd', at: [24, 8], tone: 'demand', label: { en: 'Qd 24', ru: 'Qd 24' } },
      ],
    },
  },
  {
    title: { en: 'After the union: trade creation', ru: 'После союза: торговое создание (trade creation)' },
    text: {
      en: 'The partner sells at 6, which is below the tariff price of 8, so the price falls to 6. Imports now come from the partner, and trade creation (green) replaces 4 units of domestic output and adds 4 units of consumption.',
      ru: 'Партнёр продаёт по цене 6, а это ниже цены с пошлиной 8, поэтому цена падает до 6. Импорт теперь идёт от партнёра, и торговое создание (зелёным) замещает 4 единицы отечественного производства и добавляет 4 единицы потребления.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      guides: [priceWithTariffMuted, pricePartner],
      areas: [creationProduction, creationConsumption],
      marks: [creationMark],
    },
  },
  {
    title: { en: 'Trade diversion and summary', ru: 'Торговое отклонение (trade diversion) и итог' },
    text: {
      en: 'Trade diversion (red): 12 units move from the cheaper RoW (price 4) to the dearer partner (price 6), an extra cost of 2 each, or 24 in total. Consumers gain and the tariff revenue of 48 is lost; trade creation is a gain, trade diversion a loss.',
      ru: 'Торговое отклонение (trade diversion, красным): 12 единиц переходят от более дешёвого RoW (цена 4) к более дорогому партнёру (цена 6), доплата 2 за единицу, всего 24. Потребители выигрывают, пошлинная выручка 48 теряется; торговое создание даёт выигрыш, торговое отклонение — потерю.',
    },
    graph: {
      ...axes,
      curves: [demand, supply],
      guides: [priceWithTariffMuted, pricePartner, priceRoW],
      areas: [creationProduction, creationConsumption, diversion],
      marks: [creationMark, diversionMark],
    },
  },
];

export default function Integration({ lang }: { lang: Lang }) {
  return (
    <StepPlayer
      lang={lang}
      label={{ en: 'Customs union: trade creation and trade diversion', ru: 'Таможенный союз: торговое создание и отклонение' }}
      steps={steps}
    />
  );
}
