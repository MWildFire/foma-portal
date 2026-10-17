// Illustrative monocentric envelope; R03 decision, checked by geo-diagram-bidrent.test.mjs.
// Urban ordering: Rodrigue et al., The Geography of Transport Systems, 3rd ed., ch.6 pp.202–203, Fig.6.9.
// Farming is the constant outside option in this simplified model; all numerical parameters are illustrative.
export type Use = 'commercial' | 'industry' | 'housing' | 'farming';
export type Intercepts = Record<Use, number>;
export interface Zone { use: Use; from: number; to: number }
export const USES: Use[] = ['commercial', 'industry', 'housing', 'farming'];
const SLOPE: Record<Use, number> = { commercial: 70, industry: 30, housing: 10, farming: 0 };
export const MAX_KM = 10;
const SAMPLE_KM = 0.05;
export const interceptsOf = (demand: number, access: number): Intercepts => ({
  commercial: 400 * demand + (access - 50),
  industry: 320 + (access - 50) * 0.5,
  housing: 230,
  farming: 150,
});

export function rentOf(use: Use, km: number, intercepts: Intercepts, transport: number): number {
  return Math.max(0, intercepts[use] - SLOPE[use] * transport * km);
}

// The use that can pay the most at this distance, or null when no use can pay anything.
export function winnerAt(km: number, intercepts: Intercepts, transport: number): Use | null {
  let winner: Use | null = null;
  let top = 0;
  for (const use of USES) {
    const value = rentOf(use, km, intercepts, transport);
    if (value > top) {
      top = value;
      winner = use;
    }
  }
  return winner;
}

// Contiguous distance ranges in which one use is the highest bidder, sampled every SAMPLE_KM.
export function zonesOf(intercepts: Intercepts, transport: number): Zone[] {
  const zones: Zone[] = [];
  const steps = Math.round(MAX_KM / SAMPLE_KM);
  for (let i = 0; i <= steps; i++) {
    const km = Math.round(i * SAMPLE_KM * 100) / 100;
    const use = winnerAt(km, intercepts, transport);
    if (use === null) continue;
    const last = zones[zones.length - 1];
    if (last && last.use === use && last.to >= km - SAMPLE_KM - 1e-9) {
      last.to = km;
    } else {
      zones.push({ use, from: km, to: km });
    }
  }
  return zones;
}
