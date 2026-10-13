"""Numeric checks for topic 4-15-normal-sums-clt (Normal combinations and the central limit theorem). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from scipy import stats

# Worked example A (EN and RU): T = A + O with A ~ N(150, 144) and O ~ N(180, 225) independent (variances).
T_MEAN = 150.0 + 180.0
T_VAR = 144.0 + 225.0
WE_1 = [T_MEAN, T_VAR, float(np.sqrt(T_VAR))]

# Worked example B (EN and RU): CLT for the mean of n = 40 waiting times, mean 4.2, standard deviation 3.0.
SE_B = 3.0 / np.sqrt(40)
WE_2 = [SE_B, 3.0 ** 2 / 40]

# Worked example A, probability: P(T > 340) for T ~ N(330, 369).
WE_3 = [1 - stats.norm.cdf(340, loc=T_MEAN, scale=np.sqrt(T_VAR))]

# Worked example B, probability: P(sample mean > 5), approximately N(4.2, SE^2).
WE_4 = [1 - stats.norm.cdf(5, loc=4.2, scale=SE_B)]

# q-4-15-01: L1 - L2 ~ N(40 - 25, 0.36 + 0.16) for independent rods; P(L1 - L2 > 16).
Q1_P = 1 - stats.norm.cdf(16, loc=40.0 - 25.0, scale=np.sqrt(0.36 + 0.16))

# q-4-15-02: CLT, sample mean ~ approximately N(3.6, 2.4^2 / 50); P(sample mean < 3.2).
Q2_P = stats.norm.cdf(3.2, loc=3.6, scale=2.4 / np.sqrt(50))

# q-4-15-03: (a) T ~ N(300, 27); (b) P(T < 295); (c) P(sample mean > 101), mean ~ N(100, 9/25);
# (d) least n with standard error 3/sqrt(n) at most 0.4.
Q3_T_MEAN = 3 * 100.0
Q3_T_VAR = 3 * 9.0
Q3_B = stats.norm.cdf(295, loc=Q3_T_MEAN, scale=np.sqrt(Q3_T_VAR))
Q3_C = 1 - stats.norm.cdf(101, loc=100.0, scale=np.sqrt(9 / 25))
Q3_D = next(n for n in range(1, 10000) if 3 / np.sqrt(n) <= 0.4)

CHECKS = [
    ('we-4-15-1', WE_1, '330; 369; 19.21'),
    ('we-4-15-2', WE_2, '0.474; 0.225'),
    ('we-4-15-3', WE_3, '0.301'),
    ('we-4-15-4', WE_4, '0.046'),
    ('q-4-15-01', Q1_P, None),
    ('q-4-15-02', Q2_P, None),
    ('q-4-15-03', [Q3_T_MEAN, Q3_T_VAR, Q3_B, Q3_C, Q3_D], None),
]
