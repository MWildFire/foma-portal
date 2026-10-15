import type { Point } from './_lib/graph';

// Geometry of the customs-union diagram (trade creation and trade diversion), kept apart from the component so that
// tests/econ-diagram-integration.test.mjs can check it with node:test.
// Domestic market: Qd = 40 - 2P (P = 20 - 0.5Q), Qs = 2P - 4 (P = 2 + 0.5Q).
// Prices: RoW (rest of the world) 4, partner 6, RoW with a tariff of 4 = 8.
export const PRICE_ROW = 4;
export const PRICE_PARTNER = 6;
export const TARIFF = 4;
export const PRICE_WITH_TARIFF = PRICE_ROW + TARIFF;

export const demandPrice = (q: number): number => 20 - 0.5 * q;
export const supplyPrice = (q: number): number => 2 + 0.5 * q;
export const quantityDemanded = (p: number): number => 40 - 2 * p;
export const quantitySupplied = (p: number): number => 2 * p - 4;

// Before the union the price is 8 (imports from the RoW); after it the price is 6 (imports from the partner).
export const QS_BEFORE = quantitySupplied(PRICE_WITH_TARIFF); // 12
export const QD_BEFORE = quantityDemanded(PRICE_WITH_TARIFF); // 24
export const QS_AFTER = quantitySupplied(PRICE_PARTNER); // 8
export const QD_AFTER = quantityDemanded(PRICE_PARTNER); // 28

// Tariff revenue before the union: the tariff on the 12 imported units, between Q 12 and 24.
export const TARIFF_REVENUE: Point[] = [[QS_BEFORE, PRICE_ROW], [QD_BEFORE, PRICE_ROW], [QD_BEFORE, PRICE_WITH_TARIFF], [QS_BEFORE, PRICE_WITH_TARIFF]];
// Trade creation, production effect: output between Q 8 and 12 now costs the partner price 6 instead of the supply cost
// along S. The gain is the triangle between S and the price 6, so it lies below S with the right angle at (12, 6).
export const CREATION_PRODUCTION: Point[] = [[QS_AFTER, PRICE_PARTNER], [QS_BEFORE, PRICE_PARTNER], [QS_BEFORE, PRICE_WITH_TARIFF]];
// Trade creation, consumption effect: extra purchases between Q 24 and 28, the triangle between D and the price 6.
export const CREATION_CONSUMPTION: Point[] = [[QD_BEFORE, PRICE_PARTNER], [QD_BEFORE, PRICE_WITH_TARIFF], [QD_AFTER, PRICE_PARTNER]];
// Trade diversion: the units that were imported from the RoW before the union (Q 12 to 24) now cost 6 instead of 4.
export const DIVERSION: Point[] = [[QS_BEFORE, PRICE_ROW], [QD_BEFORE, PRICE_ROW], [QD_BEFORE, PRICE_PARTNER], [QS_BEFORE, PRICE_PARTNER]];
