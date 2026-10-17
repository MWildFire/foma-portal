// Inputs are the integer tenths used by the sliders. Rank zero and rank one must be distinguished.
export type Kind = 'zero-system' | 'saddle' | 'degenerate' | 'stable-node' | 'unstable-node' | 'centre' | 'stable-spiral' | 'unstable-spiral';

// ti = 10 × trace and di = 100 × determinant are integers, so every test below is exact.
export function classifyPhasePortrait(a10: number, b10: number, c10: number, d10: number): Kind {
  if (a10 === 0 && b10 === 0 && c10 === 0 && d10 === 0) return 'zero-system';
  const ti = a10 + d10;
  const di = a10 * d10 - b10 * c10;
  const disc = ti * ti - 4 * di;   // 100 × (T² − 4D)
  if (di < 0) return 'saddle';
  if (di === 0) return 'degenerate';
  if (disc >= 0) return ti < 0 ? 'stable-node' : 'unstable-node';
  if (ti === 0) return 'centre';
  return ti < 0 ? 'stable-spiral' : 'unstable-spiral';
}

