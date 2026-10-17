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
// AD1: P = 15 - Y. AD2 is a comparison shift of 2, not a claimed chronological first round. With fixed-price k = 2, ΔG = 2 gives the full AD3 shift of 4; rising SRAS reduces realised ΔY to 2.
export const ad1Price = (y: number): number => 15 - y;
export const ad2Price = (y: number): number => 17 - y;
export const ad3Price = (y: number): number => 19 - y;

// Equilibria: A = AD1 and SRAS (below potential output), C = AD2 and SRAS (comparison), B = AD3 and SRAS, on LRAS.
export const pointA: Point = [8, 7];
export const pointC: Point = [9, 8];
export const pointB: Point = [10, 9];
