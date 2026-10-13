"""Numeric checks for topic 4-14-linear-transformations (Linear transformations of random variables). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Worked example A (EN and RU): P = 4.5X - 150 with E(X) = 120 and Var(X) = 225.
A_MEAN_X, A_VAR_X = 120.0, 225.0
A_A, A_B = 4.5, -150.0
A_MEAN_P = A_A * A_MEAN_X + A_B        # E(P)
A_VAR_P = A_A ** 2 * A_VAR_X           # Var(P), the constant -150 does not change it
WE_1 = [A_MEAN_P, A_VAR_P, float(np.sqrt(A_VAR_P))]

# Worked example B (EN and RU): W = B + C with B and C independent.
B_MEAN, B_VAR = 0.40, 0.0025
C_MEAN, C_VAR = 2.35, 0.0400
W_MEAN = B_MEAN + C_MEAN
W_VAR = B_VAR + C_VAR
WE_2 = [W_MEAN, W_VAR, float(np.sqrt(W_VAR))]

# Worked example C (EN and RU): sample 499, 503, 500, 498 with n = 4.
SAMPLE_C = np.array([499.0, 503.0, 500.0, 498.0])
XBAR_C = float(SAMPLE_C.mean())
DEV2_C = (SAMPLE_C - XBAR_C) ** 2      # squared deviations from the sample mean
S2_C = float(np.var(SAMPLE_C, ddof=1))  # sample variance with divisor n - 1
WE_3 = [XBAR_C]
WE_4 = [float(value) for value in DEV2_C] + [float(DEV2_C.sum())]
WE_5 = [S2_C]

# q-4-14-01: H = T/60 with E(T) = 35.5 and Var(T) = 49, so E(H) = E(T)/60 and Var(H) = Var(T)/60^2.
Q1_MEAN_H = 35.5 / 60
Q1_SD_H = float(np.sqrt(49 / 60 ** 2))

# q-4-14-02: E(2X - 3Y) and Var(2X - 3Y) for independent X and Y.
Q2_MEAN = 2 * 5.4 - 3 * 2.1
Q2_VAR = 2 ** 2 * 0.36 + (-3) ** 2 * 0.49

# q-4-14-03: loaves 512, 498, 505, 530, 489; estimates of the mean and variance of T = X1 + X2 + X3.
LOAVES = np.array([512.0, 498.0, 505.0, 530.0, 489.0])
Q3_XBAR = float(LOAVES.mean())
Q3_S2 = float(np.var(LOAVES, ddof=1))

CHECKS = [
    ('we-4-14-1', WE_1, '390; 4556.25; 67.5'),
    ('we-4-14-2', WE_2, '2.75; 0.0425; 0.206'),
    ('we-4-14-3', WE_3, '500'),
    ('we-4-14-4', WE_4, '1; 9; 0; 4; 14'),
    ('we-4-14-5', WE_5, '4.67'),
    ('q-4-14-01', [Q1_MEAN_H, Q1_SD_H], None),
    ('q-4-14-02', [Q2_MEAN, Q2_VAR], None),
    ('q-4-14-03', [Q3_XBAR, Q3_S2, 3 * Q3_XBAR, 3 * Q3_S2], None),
]
