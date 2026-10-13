"""Numeric checks for topic 2-10-log-linearisation (log-log and semi-log graphs). Run python3 scripts/math-verify.py to evaluate them."""

import math

import numpy as np

# Worked example, scaling (EN and RU): log10 of 4.8 x 10^7.
WE_1 = [math.log10(4.8e7)]                                 # 7.68

# Worked example, semi-log (EN and RU): y = 20 x 1.4^t, so ln y = ln 20 + t ln 1.4.
t = np.arange(0, 6, dtype=float)
semi_gradient, semi_intercept = np.polyfit(t, np.log(20 * 1.4 ** t), 1)
WE_2 = [semi_gradient, semi_intercept]                     # 0.336; 2.996
WE_3 = [math.exp(semi_gradient)]                           # growth factor b = 1.40

# Worked example, log-log (EN and RU): y = 3x^2, so log y = 2 log x + log 3.
x = np.arange(1, 6, dtype=float)
log_gradient, log_intercept = np.polyfit(np.log10(x), np.log10(3 * x ** 2), 1)
WE_4 = [log_gradient, log_intercept]                       # 2; 0.477

# q-2-10-01: sound level for I = 3.2 x 10^-9 W/m^2 relative to I0 = 10^-12 W/m^2.
Q1 = 10 * math.log10(3.2e-9 / 1e-12)                       # 35.05 decibels

# q-2-10-02: the line through (0, 0.5) and (1, 2.0) in log-log coordinates.
line_gradient, line_intercept = np.polyfit([0.0, 1.0], [0.5, 2.0], 1)
Q2 = [10 ** line_intercept, line_gradient]                 # a = 3.16; b = 1.50

# q-2-10-03: fish lengths (cm) and masses (g).
L = np.array([12, 18, 24, 30, 36, 42], dtype=float)
M = np.array([21, 66, 168, 320, 565, 872], dtype=float)
b, c = np.polyfit(np.log10(L), np.log10(M), 1)              # least squares of log10 M on log10 L
a = 10 ** c
r_loglog = np.corrcoef(np.log10(L), np.log10(M))[0, 1]
r_semilog = np.corrcoef(L, np.log10(M))[0, 1]
Q3 = [b, c, a, 2 ** b, a * 27 ** b, r_loglog, r_semilog]   # 3.000; -1.925; 0.0119; 8.00; 234; 0.9998; 0.9841

CHECKS = [
    ('we-2-10-log-linearisation-1', WE_1, '7.68'),
    ('we-2-10-log-linearisation-2', WE_2, '0.336; 2.996'),
    ('we-2-10-log-linearisation-3', WE_3, '1.40'),
    ('we-2-10-log-linearisation-4', WE_4, '2; 0.477'),
    ('q-2-10-01', Q1, None),
    ('q-2-10-02', Q2, None),
    ('q-2-10-03', Q3, None),
]
