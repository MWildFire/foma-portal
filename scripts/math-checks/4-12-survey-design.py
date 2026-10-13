"""Numeric checks for topic 4-12-survey-design (survey design, categorising data, reliability). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from scipy import stats

# Worked example (EN and RU): heights of 100 students in four classes; normal model with mean 165 and sd 7.
EDGES = [-np.inf, 158, 165, 172, np.inf]
PROBS = np.diff(stats.norm.cdf(EDGES, loc=165, scale=7))
EXP_WE = 100 * PROBS
OBS_WE = np.array([18, 30, 36, 16], dtype=float)
CHI_WE = float(((OBS_WE - EXP_WE) ** 2 / EXP_WE).sum())
DOF_WE = 4 - 1 - 2

# q-4-12-02: test-retest table (rows: first answer yes, no; columns: second answer yes, no), 60 students.
TEST_RETEST = np.array([[30, 4], [6, 20]], dtype=float)
CHI_TR, P_TR, DOF_TR, EXP_TR = stats.chi2_contingency(TEST_RETEST, correction=False)

# q-4-12-03: late arrivals on 80 days; Poisson model with the mean estimated from the counts.
COUNTS = np.array([20, 26, 18, 10, 6], dtype=float)
MEAN = float((np.arange(5) * COUNTS).sum() / COUNTS.sum())            # 116 / 80 = 1.45
E4 = 80 * stats.poisson.pmf(4, MEAN)                                    # expected days with 4 late arrivals
OBS_LATE = np.array([20, 26, 18, 16], dtype=float)                      # categories 0, 1, 2 and 3 or more (10 + 6)
EXP_LATE = np.array([
    80 * stats.poisson.pmf(0, MEAN),
    80 * stats.poisson.pmf(1, MEAN),
    80 * stats.poisson.pmf(2, MEAN),
    80 * stats.poisson.sf(2, MEAN),                                     # P(X >= 3)
])
CHI_LATE = float(((OBS_LATE - EXP_LATE) ** 2 / EXP_LATE).sum())

CHECKS = [
    ('we-4-12-survey-design-1', [3, DOF_WE], '3; 1'),
    ('we-4-12-survey-design-2', [PROBS[0]], '0.1587'),
    ('we-4-12-survey-design-3', [EXP_WE[0], EXP_WE[1]], '15.9; 34.1'),
    ('we-4-12-survey-design-4', [CHI_WE, stats.chi2.sf(CHI_WE, DOF_WE), stats.chi2.ppf(0.95, DOF_WE)], '0.891; 0.345; 3.841'),
    ('q-4-12-01', 7 - 1 - 2, None),
    ('q-4-12-02', [EXP_TR[0, 0], CHI_TR], None),
    ('q-4-12-03', [MEAN, E4, CHI_LATE, 4 - 1 - 1], None),
]
