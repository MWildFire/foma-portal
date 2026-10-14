// Data and layout rules for the population pyramid simulator. Kept apart from the component so that tests can check orientation.

// Bands run from the youngest (index 0, 0–9) to the oldest (index 8, 80+).
export const BANDS = ['0–9', '10–19', '20–29', '30–39', '40–49', '50–59', '60–69', '70–79', '80+'];

// Illustrative age–sex shapes for the five stages of the demographic transition model. They are not data for any country.
// Relative weights for the nine bands, in the same order as BANDS. Each sex carries half of the population.
export const WEIGHTS: number[][] = [
  [13, 12, 11, 10, 9, 8, 6, 4, 2],
  [17, 16, 13, 10, 7, 5, 3, 2, 1],
  [10, 11, 12, 12, 11, 9, 7, 5, 3],
  [7, 8, 10, 11, 11, 10, 9, 7, 5],
  [5, 6, 7, 8, 9, 10, 11, 12, 10],
];

// Each sex has half of the population, so a band's share of the total is weight / sum × 50 (per cent).
export function sharesOf(stage: number): number[] {
  const weights = WEIGHTS[stage];
  const sum = weights.reduce((total, weight) => total + weight, 0);
  return weights.map(weight => (weight / sum) * 50);
}

// One scale for all five stages, so that the shapes can be compared directly.
export const MAX_SHARE = Math.max(...WEIGHTS.map((_, stage) => Math.max(...sharesOf(stage))));

// Drawing geometry, in SVG units.
export const CENTRE = 200;
export const GAP = 40; // free space on both sides of the centre, for the age labels
export const MAX_BAR = 140; // length of the largest band

export function barLength(share: number): number {
  return (share / MAX_SHARE) * MAX_BAR;
}

// The chart is drawn from the top: row 0 is the oldest band (80+) and the last row is the youngest (0–9).
export function bandForRow(row: number): number {
  return BANDS.length - 1 - row;
}

// Male bars grow to the left of the centre and female bars to the right, both outward from the gap.
export function maleBarX(width: number): number {
  return CENTRE - GAP - width;
}

export function femaleBarX(): number {
  return CENTRE + GAP;
}
