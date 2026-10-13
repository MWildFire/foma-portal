"""Numeric checks for topic 4-18-hypothesis-errors (hypothesis tests for means and correlation; Type I and II errors). Run python3 scripts/math-verify.py to evaluate them."""

import math

from scipy import stats

# Worked example 1 (t-test, bakery): xbar = 512, mu0 = 500, s = 18, n = 9, right-tailed. t and the p-value (df 8).
T_WE1 = (512 - 500) / (18 / math.sqrt(9))
WE_1 = [T_WE1, stats.t.sf(T_WE1, 8)]

# Worked example 2 (Poisson, one day): P(X <= 4) and P(X <= 5) for X ~ Po(10); power and beta when X ~ Po(6).
WE_2 = [stats.poisson.cdf(4, 10), stats.poisson.cdf(5, 10)]
WE_3 = [stats.poisson.cdf(4, 6), 1 - stats.poisson.cdf(4, 6)]

# q-4-18-01: paint drying, n = 16, xbar = 6.4, s = 0.8, mu0 = 6.0; t and two-tailed p-value (df 15).
T_Q1 = (6.4 - 6.0) / (0.8 / math.sqrt(16))
Q1 = [T_Q1, 2 * stats.t.sf(abs(T_Q1), 15)]

# q-4-18-02: correlation r = 0.62 from n = 12 pairs; t and one-tailed p-value (df 10).
R, N = 0.62, 12
T_Q2 = R * math.sqrt(N - 2) / math.sqrt(1 - R * R)
Q2 = [T_Q2, stats.t.sf(T_Q2, N - 2)]

# q-4-18-03: T ~ Po(30) under H0 (3 shifts, m0 = 10). c is the largest value with P(T <= c) <= 0.05;
# then the actual significance level, and beta when the true mean is 7 per shift (T ~ Po(21)).
C = max(c for c in range(0, 200) if stats.poisson.cdf(c, 30) <= 0.05)
Q3 = [C, stats.poisson.cdf(C, 30), 1 - stats.poisson.cdf(C, 21)]

CHECKS = [
    ('we-4-18-hypothesis-errors-1', WE_1, '2.00; 0.040'),
    ('we-4-18-hypothesis-errors-2', WE_2, '0.029; 0.067'),
    ('we-4-18-hypothesis-errors-3', WE_3, '0.285; 0.715'),
    ('q-4-18-01', Q1, None),
    ('q-4-18-02', Q2, None),
    ('q-4-18-03', Q3, None),
]
