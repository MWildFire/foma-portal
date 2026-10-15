import type { Point } from './_lib/graph';

// Geometry of the fiscal-policy diagram, kept apart from the component so that tests/econ-diagram-fiscal-policy.test.mjs
// can check it with node:test. Model: Tragakes ch.13 Fig 13.2(a), the AD-AS model with an upward-sloping SRAS and a
// vertical LRAS at potential output. Every curve gives the price level P as a function of real output Y.
export const POTENTIAL_OUTPUT = 10;
export const GOVERNMENT_SPENDING_RISE = 2;
export const MPC = 0.5;
export const MULTIPLIER = 1 / (1 - MPC);

// SRAS slopes up over its whole length: P = Y - 1.
export const srasPrice = (y: number): number => y - 1;
// AD1: P = 15 - Y. The rise in G shifts AD right by 2 (AD2, the first round); the multiplier makes the total shift 2 x 2 = 4 (AD3).
export const ad1Price = (y: number): number => 15 - y;
export const ad2Price = (y: number): number => 17 - y;
export const ad3Price = (y: number): number => 19 - y;

// Equilibria: A = AD1 and SRAS (below potential output), C = AD2 and SRAS (first round), B = AD3 and SRAS, on LRAS.
export const pointA: Point = [8, 7];
export const pointC: Point = [9, 8];
export const pointB: Point = [10, 9];
