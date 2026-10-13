"""Numeric checks for topic 5-8-trapezoidal-rule (The trapezoidal rule). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
import sympy as sp

x = sp.symbols('x')


def trapezoid(xs, ys):
    """Trapezoidal estimate for equally spaced ordinates: (h/2) * (y0 + 2*(y1 + ... + y_{n-1}) + yn)."""
    xs = np.asarray(xs, dtype=float)
    ys = np.asarray(ys, dtype=float)
    h = xs[1] - xs[0]
    assert np.allclose(np.diff(xs), h), 'the ordinates must be equally spaced'
    return float(h / 2 * (ys[0] + 2 * ys[1:-1].sum() + ys[-1]))


# Worked example 1 (EN and RU): f(x) = x^2 on [0, 2] with n = 4 strips, so h = 0.5.
WE1_XS = np.linspace(0, 2, 5)
WE1_YS = WE1_XS ** 2
WE1_H = float(WE1_XS[1] - WE1_XS[0])                                # 0.5
WE1_T = trapezoid(WE1_XS, WE1_YS)                                   # 2.75
WE1_I = float(sp.integrate(x ** 2, (x, 0, 2)))                      # 8/3 = 2.6667
WE1_E = WE1_T - WE1_I                                               # 0.0833
WE1_F2 = float(sp.diff(x ** 2, x, 2))                               # f''(x) = 2

# Worked example 2 (EN and RU): speeds 0, 8, 12, 10 m/s at t = 0, 3, 6, 9 s, so h = 3 and n = 3.
WE2_TS = [0, 3, 6, 9]
WE2_VS = [0, 8, 12, 10]
WE2_T = trapezoid(WE2_TS, WE2_VS)                                   # 75

# Formula example (trapezoidal-error-formula): T = 2.75 and I = 8/3, the values of worked example 1.

# Question 1 (EN and RU): rate of flow in litres per minute at t = 0, 2, 4, 6 minutes.
Q01_H = float(np.diff([0, 2, 4, 6])[0])                             # 2
Q01_T = trapezoid([0, 2, 4, 6], [3.0, 4.2, 5.1, 4.8])               # 26.4

# Question 2 (EN and RU): integral of x e^x over [0, 1] with 2 strips.
Q02_XS = np.linspace(0, 1, 3)
Q02_H = float(Q02_XS[1] - Q02_XS[0])                                # 0.5
Q02_T = trapezoid(Q02_XS, Q02_XS * np.exp(Q02_XS))                  # 1.092

# Question 3 (EN and RU): f(t) = 1/(t+1) on [0, 4]; exact value and the 4-strip and 8-strip estimates.
F = 1 / (x + 1)
Q03_I = float(sp.integrate(F, (x, 0, 4)))                           # ln 5 = 1.6094
Q03_XS4 = np.linspace(0, 4, 5)
Q03_XS8 = np.linspace(0, 4, 9)
Q03_H4 = float(Q03_XS4[1] - Q03_XS4[0])                             # 1
Q03_H8 = float(Q03_XS8[1] - Q03_XS8[0])                             # 0.5
Q03_T4 = trapezoid(Q03_XS4, 1 / (Q03_XS4 + 1))                      # 1.6833
Q03_T8 = trapezoid(Q03_XS8, 1 / (Q03_XS8 + 1))                      # 1.62897
Q03_F2_0 = float(sp.diff(F, x, 2).subs(x, 0))                       # f''(0) = 2; f''(t) > 0 on [0, 4]

CHECKS = [
    # Worked example 1: h, the ordinates, T4, I, E and f''(x), in the order they are printed.
    ('we-5-8-trapezoidal-rule-1', [2.0, 0.0, WE1_H, WE1_YS[1], WE1_YS[2], WE1_YS[3], WE1_YS[4], WE1_T, WE1_I, WE1_E, WE1_F2],
     '2; 0; 0.5; 0.25; 1; 2.25; 4; 2.75; 2.667; 0.083; 2'),
    # Worked example 2: times, speeds, strip width, and the distance.
    ('we-5-8-trapezoidal-rule-2', [0, 3, 6, 9, 8, 12, 10, WE2_T], '0; 3; 6; 9; 8; 12; 10; 75'),
    # Formula example: T, I and E.
    ('we-5-8-trapezoidal-rule-3', [WE1_T, WE1_I, WE1_E], '2.75; 2.667; 0.083'),
    # Question 1 markscheme: h, h/2 = 1, the data, and the result.
    ('we-5-8-trapezoidal-rule-m1', [Q01_H, Q01_H / 2, 3.0, 4.2, 5.1, 4.8, Q01_T], '2; 1; 3.0; 4.2; 5.1; 4.8; 26.4'),
    # Question 2 markscheme: h, f(0.5) = 0.5 e^0.5 and f(1) = e.
    ('we-5-8-trapezoidal-rule-m2', [Q02_H, 0.5 * np.exp(0.5), np.e], '0.5; 0.824; 2.718'),
    # Question 3 markscheme (b): the ordinates and the 4-strip estimate.
    ('we-5-8-trapezoidal-rule-m3', [Q03_H4, *(1 / (Q03_XS4[1:] + 1)), Q03_T4], '1; 0.5; 0.333; 0.25; 0.2; 1.683'),
    # Question 3 markscheme (c): the error of the 4-strip estimate.
    ('we-5-8-trapezoidal-rule-m4', [Q03_T4, Q03_I, Q03_T4 - Q03_I], '1.683; 1.609; 0.074'),
    # Question 3 markscheme (d): f''(0) = 2 > 0.
    ('we-5-8-trapezoidal-rule-m6', [Q03_F2_0], '2'),
    # Question 3 markscheme (e): strip width, the 8-strip error and the 4-strip error.
    ('we-5-8-trapezoidal-rule-m5', [Q03_H8, Q03_T8, abs(Q03_T8 - Q03_I)], '0.5; 1.629; 0.020'),
    ('q-5-8-01', Q01_T, None),
    ('q-5-8-02', Q02_T, None),
    ('q-5-8-03', [Q03_I, Q03_T4, Q03_T4 - Q03_I, Q03_T8], None),
]
