export const coverageShare = (wanted: number, other: number): number => Math.max(0, Math.min(wanted, 100 - other));
