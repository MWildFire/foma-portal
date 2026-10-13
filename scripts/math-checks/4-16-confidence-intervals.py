"""Numeric checks for topic 4-16-confidence-intervals (Confidence intervals for a normal mean). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from scipy import stats

# Worked example A (EN and RU), z case: 95% CI for mu with sigma = 4.5, n = 36, sample mean 329.6.
Z_95 = stats.norm.ppf(0.975)
SE_A = 4.5 / np.sqrt(36)
E_A = Z_95 * SE_A
WE_1 = [Z_95, SE_A]
WE_2 = [E_A]
WE_3 = [329.6 - E_A, 329.6 + E_A]

# Worked example B (EN and RU), t case: 95% CI, n = 12, sample mean 58.3, s = 4.3, 11 degrees of freedom.
T_11 = stats.t.ppf(0.975, 11)
SE_B = 4.3 / np.sqrt(12)
E_B = T_11 * SE_B
WE_4 = [T_11, SE_B]
WE_5 = [E_B]
WE_6 = [58.3 - E_B, 58.3 + E_B]

# q-4-16-01: z case, 90% CI, sigma = 2.0, n = 16, sample mean 251.4.
Z_90 = stats.norm.ppf(0.95)
E_Q1 = Z_90 * 2.0 / np.sqrt(16)
Q1 = [251.4 - E_Q1, 251.4 + E_Q1]

# q-4-16-02: t case, 95% CI, n = 10, sample mean 14.6, s = 2.1, 9 degrees of freedom.
T_9 = stats.t.ppf(0.975, 9)
E_Q2 = T_9 * 2.1 / np.sqrt(10)
Q2 = [14.6 - E_Q2, 14.6 + E_Q2]

# q-4-16-03: bottles, n = 15, sample mean 500.8, s = 3.2, 14 degrees of freedom.
T_14_95 = stats.t.ppf(0.975, 14)
T_14_99 = stats.t.ppf(0.995, 14)
SE_Q3 = 3.2 / np.sqrt(15)
Q3_B = [500.8 - T_14_95 * SE_Q3, 500.8 + T_14_95 * SE_Q3]     # (b) 95% CI
Q3_D = [500.8 - T_14_99 * SE_Q3, 500.8 + T_14_99 * SE_Q3]     # (d) 99% CI
# (e) least n with n >= (z* sigma / E)^2, sigma = 3.2 known, E = 1, 95% confidence.
Q3_E = next(n for n in range(2, 10000) if Z_95 * 3.2 / 1.0 <= np.sqrt(n))

CHECKS = [
    ('we-4-16-1', WE_1, '1.960; 0.75'),
    ('we-4-16-2', WE_2, '1.47'),
    ('we-4-16-3', WE_3, '328.13; 331.07'),
    ('we-4-16-4', WE_4, '2.201; 1.241'),
    ('we-4-16-5', WE_5, '2.73'),
    ('we-4-16-6', WE_6, '55.57; 61.03'),
    ('q-4-16-01', Q1, None),
    ('q-4-16-02', Q2, None),
    ('q-4-16-03', [Q3_B[0], Q3_B[1], Q3_D[0], Q3_D[1], Q3_E], None),
]
