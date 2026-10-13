"""Numeric checks for topic 1-9-log-laws (Laws of logarithms). Run python3 scripts/math-verify.py to evaluate them."""

import math

import sympy as sp
from scipy import optimize

X = sp.symbols('x')

# Worked example (EN and RU): log2(x+1) + log2(x-1) = 3 for x > 1, root found numerically;
# the product equation (x+1)(x-1) = 2^3 is solved symbolically for both roots (-3 is rejected).
ROOT = optimize.brentq(lambda x: math.log2(x + 1) + math.log2(x - 1) - 3, 1.0 + 1e-9, 10.0)
WE_1 = [(ROOT + 1) * (ROOT - 1), ROOT ** 2]                                       # 8 and 9
WE_2 = sorted(float(root) for root in sp.solve((X + 1) * (X - 1) - 2 ** 3, X))  # -3 and 3

# q-1-9-01: log2 x = 3.4 and log2 y = 1.2, value of log2(x^2 y / 8), computed from x and y.
X_VALUE, Y_VALUE = 2 ** 3.4, 2 ** 1.2
Q01 = math.log2(X_VALUE ** 2 * Y_VALUE / 8)

# q-1-9-02: the positive root of log2 x + log2(x+6) = 4.
Q02 = optimize.brentq(lambda x: math.log2(x) + math.log2(x + 6) - 4, 1e-9, 10.0)

# q-1-9-03: parts (b), (c), (d), (e) of the decibel question.
Q03 = [
    10 * math.log10(2),                  # (b) increase for two identical sources, dB
    10 * math.log10(2.0e-5 / 1.0e-12),   # (c) level of intensity 2.0e-5 W m^-2, dB
    10 ** ((80 - 70) / 10),              # (d) ratio of intensities for levels 80 dB and 70 dB
    10 * math.log10(10),                 # (e) increase for ten identical sources, dB
]

CHECKS = [
    ('we-1-9-log-laws-1', WE_1, '8; 9'),
    ('we-1-9-log-laws-2', WE_2, '-3; 3'),
    ('q-1-9-01', Q01, None),
    ('q-1-9-02', Q02, None),
    ('q-1-9-03', Q03, None),
]
