// Fair sharing of a limited amount between claimants (cards in the recall, spare minutes in a day).
export interface Claim {
  key: string;
  wants: number;      // whole units the claimant could use
  weight: number;     // relative share when the amount is not enough for everybody
}

// Splits `capacity` whole units in proportion to the weights. A claimant that wants less than its share gets exactly
// what it wants and the rest is shared again among the others. Leftover single units go to the biggest fractions,
// then to the claimant that comes first in the list, so the result is deterministic.
export function shareFairly(capacity: number, claims: Claim[]): Map<string, number> {
  const result = new Map<string, number>();
  for (const claim of claims) result.set(claim.key, 0);
  let pending = claims.filter(claim => claim.wants > 0 && claim.weight > 0);
  let left = Math.max(0, Math.floor(capacity));
  while (pending.length > 0 && left > 0) {
    const totalWeight = pending.reduce((sum, claim) => sum + claim.weight, 0);
    const satisfied = pending.filter(claim => claim.wants * totalWeight <= left * claim.weight);
    if (satisfied.length > 0) {
      for (const claim of satisfied) {
        result.set(claim.key, claim.wants);
        left -= claim.wants;
      }
      pending = pending.filter(claim => !satisfied.includes(claim));
      continue;
    }
    const exact = pending.map(claim => (left * claim.weight) / totalWeight);
    const shares = exact.map(Math.floor);
    let spare = left - shares.reduce((a, b) => a + b, 0);
    const byFraction = exact
      .map((value, index) => ({ index, fraction: value - shares[index] }))
      .sort((a, b) => b.fraction - a.fraction || a.index - b.index);
    for (const { index } of byFraction) {
      if (spare <= 0) break;
      shares[index] += 1;
      spare -= 1;
    }
    pending.forEach((claim, index) => result.set(claim.key, shares[index]));
    break;
  }
  return result;
}
