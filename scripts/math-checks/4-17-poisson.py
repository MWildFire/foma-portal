"""Numeric checks for topic 4-17-poisson (Poisson distribution). Run python3 scripts/math-verify.py to evaluate them."""

from scipy import stats

# Worked example (EN and RU): P(X = 5) and P(X <= 2) for X ~ Po(3); P(Y = 4) for Y ~ Po(6) (two hours).
WE_1 = [stats.poisson.pmf(5, 3), stats.poisson.cdf(2, 3)]
WE_2 = [stats.poisson.pmf(4, 6)]

# q-4-17-03 (c): least n with P(X <= n) > 0.95 for X ~ Po(12).
LEAST_N = next(n for n in range(200) if stats.poisson.cdf(n, 12) > 0.95)

CHECKS = [
    ('we-4-17-poisson-1', WE_1, '0.101; 0.423'),
    ('we-4-17-poisson-2', WE_2, '0.134'),
    ('q-4-17-01', stats.poisson.pmf(3, 2), None),                    # m = 0.4 x 5 = 2
    ('q-4-17-02', 1 - stats.poisson.cdf(3, 6), None),                # m = 3 x 2 = 6, P(X >= 4)
    ('q-4-17-03', [stats.poisson.pmf(10, 12), LEAST_N, 1 - stats.poisson.cdf(15, 12)], None),
]
