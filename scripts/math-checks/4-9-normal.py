"""Numeric checks for topic 4-9-normal (Normal distribution). Run python3 scripts/math-verify.py to evaluate them."""

from scipy import stats

# Worked example (EN and RU): X ~ N(32, 4^2), journey times in minutes.
WE_1 = [stats.norm.cdf(36, 32, 4)]                                # P(X <= 36) = P(Z <= 1)
WE_2 = [stats.norm.cdf(36, 32, 4) - stats.norm.cdf(28, 32, 4)]    # P(28 < X < 36)
WE_3 = [stats.norm.ppf(0.9, 32, 4)]                               # x with P(X <= x) = 0.9

# q-4-9-03: X ~ N(12, 2.5^2), parcel masses in kg. P_HEAVY = P(X > 15), used unrounded in parts (d) and (e).
P_HEAVY = stats.norm.sf(15, 12, 2.5)
LEAST_N = next(n for n in range(1, 200) if stats.binom.sf(0, n, P_HEAVY) > 0.9)

CHECKS = [
    ('we-4-9-normal-1', WE_1, '0.841'),
    ('we-4-9-normal-2', WE_2, '0.683'),
    ('we-4-9-normal-3', WE_3, '37.13'),
    ('q-4-9-01', stats.norm.cdf(1.03, 1.00, 0.02) - stats.norm.cdf(0.97, 1.00, 0.02), None),
    ('q-4-9-02', stats.norm.ppf(0.9, 64, 9), None),
    ('q-4-9-03', [
        P_HEAVY,                                                   # (a) P(X > 15)
        stats.norm.cdf(15, 12, 2.5) - stats.norm.cdf(9, 12, 2.5),  # (b) P(9 <= X <= 15)
        stats.norm.ppf(0.2, 12, 2.5),                              # (c) m with P(X < m) = 0.2
        stats.binom.pmf(2, 8, P_HEAVY),                            # (d) P(exactly 2 of 8 heavy)
        LEAST_N,                                                   # (e) least n
    ], None),
]
