"""Numeric checks for topic 4-10-spearman (Spearman's rank correlation)."""
import numpy as np
from scipy import stats

# Worked example (EN and RU): two judges' ranks of six bakeries.
WE_A = np.array([1, 2, 3, 4, 5, 6])
WE_B = np.array([2, 1, 4, 3, 6, 5])

# q-4-10-01: two teachers' ranks of eight essays (no ties).
Q1_A = np.array([1, 2, 3, 4, 5, 6, 7, 8])
Q1_B = np.array([2, 4, 1, 3, 6, 5, 8, 7])

# q-4-10-02: maths and physics marks (out of 80) of six students.
Q2_MATHS = np.array([34, 58, 41, 72, 65, 49])
Q2_PHYS = np.array([38, 50, 47, 70, 61, 44])

# q-4-10-03: rating x (out of 5) and price y (AED) of eight coffee shops; the shop charging 65 AED is removed in (d).
Q3_X = np.array([4.4, 3.9, 4.9, 3.6, 4.7, 4.1, 4.6, 4.2])
Q3_Y = np.array([17, 12, 65, 14, 24, 15, 22, 18])
Q3_RANK_DIFF = stats.rankdata(Q3_X) - stats.rankdata(Q3_Y)
Q3_KEEP = Q3_Y != 65

CHECKS = [
    ('we-4-10-spearman-1', np.sum((WE_A - WE_B) ** 2), '6'),
    ('we-4-10-spearman-2', stats.spearmanr(WE_A, WE_B)[0], '0.829'),
    ('q-4-10-01', stats.spearmanr(Q1_A, Q1_B)[0], None),
    ('q-4-10-02', stats.spearmanr(Q2_MATHS, Q2_PHYS)[0], None),
    ('q-4-10-03', [np.sum(Q3_RANK_DIFF ** 2),                                  # (a) sum of d squared
                   stats.spearmanr(Q3_X, Q3_Y)[0],                              # (b) r_s, 8 shops
                   stats.pearsonr(Q3_X, Q3_Y)[0],                               # (c) r, 8 shops
                   stats.spearmanr(Q3_X[Q3_KEEP], Q3_Y[Q3_KEEP])[0],            # (d) r_s, 7 shops
                   stats.pearsonr(Q3_X[Q3_KEEP], Q3_Y[Q3_KEEP])[0]], None),     # (d) r, 7 shops
]
