"""Numeric checks for topic 4-11-hypothesis-tests (chi-squared and t-tests). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from scipy import stats

# Worked example (EN and RU) and sim default: year group (rows) by usual travel (columns), 120 students.
OBS_WE = np.array([[28, 9, 23], [22, 6, 32]], dtype=float)
CHI_WE, P_WE, DOF_WE, EXP_WE = stats.chi2_contingency(OBS_WE, correction=False)
WE_1 = [EXP_WE[0, 0], EXP_WE[0, 1], EXP_WE[0, 2]]        # 25, 7.5, 27.5 (the IB2 row is the same)
WE_2 = [CHI_WE]                                            # 2.793
WE_3 = [DOF_WE, stats.chi2.sf(CHI_WE, DOF_WE), stats.chi2.ppf(0.95, DOF_WE)]   # 2; 0.247; 5.991

# q-4-11-01: fair die, 120 rolls, expected count 20 per face (goodness of fit, 6 - 1 = 5 degrees of freedom).
DIE = stats.chisquare([18, 24, 15, 21, 19, 23], f_exp=[20] * 6)

# q-4-11-02: two-tailed p-value for t = 2.31 with 15 - 1 = 14 degrees of freedom.
P_T = 2 * stats.t.sf(2.31, 14)

# q-4-11-03: study place (rows: sciences, humanities) by place (columns: library, home, cafe), 150 students.
OBS_Q3 = np.array([[34, 21, 15], [18, 33, 29]], dtype=float)
CHI_Q3, P_Q3, DOF_Q3, EXP_Q3 = stats.chi2_contingency(OBS_Q3, correction=False)

CHECKS = [
    ('we-4-11-hypothesis-tests-1', WE_1, '25; 7.5; 27.5'),
    ('we-4-11-hypothesis-tests-2', WE_2, '2.793'),
    ('we-4-11-hypothesis-tests-3', WE_3, '2; 0.247; 5.991'),
    ('q-4-11-01', [DIE.statistic, 6 - 1], None),
    ('q-4-11-02', P_T, None),
    ('q-4-11-03', [EXP_Q3[0, 0], CHI_Q3, DOF_Q3, stats.chi2.sf(CHI_Q3, DOF_Q3)], None),
]
