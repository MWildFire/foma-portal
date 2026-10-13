"""Numeric checks for the maths diagnostic, diag-01 to diag-15. Run python3 scripts/math-verify.py diagnostic to evaluate them."""

import math
from fractions import Fraction

import numpy as np
import sympy as sp
from scipy import stats

x, h, s = sp.symbols('x h s')

# diag-01: (2.5 x 10^(-4)) x (4.8 x 10^6) = 1200 g = 1.2 x 10^3 g, so a = 1.20 and k = 3 (exact fractions).
MASS = Fraction(25, 10) * Fraction(48, 10) * Fraction(10) ** 2
K1 = next(k for k in range(-20, 21) if Fraction(10) ** k <= MASS < Fraction(10) ** (k + 1))
A1 = float(MASS / Fraction(10) ** K1)

# diag-02: total of the first 12 terms of the arithmetic sequence with u_1 = 120 and d = 15.
S2 = sum(120 + 15 * i for i in range(12))

# diag-03: u_10 = 1200 x 1.08^9 for the geometric sequence with u_1 = 1200 and r = 1.08.
U3 = 1200 * 1.08 ** 9

# diag-04: gradient of L1 = (-3 - 5)/(6 - 2) = -2, so a perpendicular line has gradient -1/(-2) = 1/2.
M4 = -1 / ((-3 - 5) / (6 - 2))

# diag-05: f^-1(5) is the value s with (2s - 1)/(s + 3) = 5, which is -16/3.
F5 = float(sp.solve(sp.Eq((2 * s - 1) / (s + 3), 5), s)[0])

# diag-06: local minimum of x^3 + x^2 - 6x on [-2, 2]: the root of 3x^2 + 2x - 6 = 0 where f''(x) > 0.
f6 = x**3 + x**2 - 6 * x
crit6 = [r for r in sp.solve(sp.diff(f6, x), x) if float(sp.diff(f6, x, 2).subs(x, r)) > 0]
X6 = float(crit6[0])
Y6 = float(f6.subs(x, crit6[0]))

# diag-07: hemisphere (2/3) pi 6^3 plus cone (1/3) pi 6^2 x 10 = 264 pi cm^3.
V7 = float(sp.Rational(2, 3) * sp.pi * 6**3 + sp.Rational(1, 3) * sp.pi * 6**2 * 10)

# diag-08: cosine rule with AB = 5, BC = 9 and angle ABC = 60 degrees: AC^2 = 25 + 81 - 45 = 61.
AC8 = math.sqrt(5**2 + 9**2 - 2 * 5 * 9 * math.cos(math.radians(60)))

# diag-09: BF = d and h = d tan 50 = (d + 20) tan 30, so d = 20 tan 30 / (tan 50 - tan 30) and h = d tan 50.
T30, T50 = math.tan(math.radians(30)), math.tan(math.radians(50))
H9 = 20 * T30 / (T50 - T30) * T50

# diag-10: population standard deviation (divisor n = 12) of the 12 waiting times.
WAIT = np.array([12, 15, 9, 22, 13, 18, 11, 16, 13, 20, 17, 10], dtype=float)
SD10 = float(np.std(WAIT))

# diag-11: P(not by bus) = 1 - 96/240 = 0.6; expected number in a group of 17 = 17 x 0.6.
E11 = 17 * (1 - 96 / 240)

# diag-12: X ~ N(1200, 90^2): P(X > 1300) and the 10th percentile L.
P12 = float(stats.norm.sf(1300, loc=1200, scale=90))
L12 = float(stats.norm.ppf(0.10, loc=1200, scale=90))

# diag-13: gradient of the chord from x = 2 to x = 2 + h on y = x^2 + 3x, and its limit as h tends to 0.
f13 = x**2 + 3 * x
G13 = float(sp.limit((f13.subs(x, 2 + h) - f13.subs(x, 2)) / h, h, 0))

# diag-14: f'(x) = 3(x + 1)(x - 3); the stationary point with f''(x) > 0 is the local minimum at x = 3.
f14 = x**3 - 3 * x**2 - 9 * x + 4
X14 = float([r for r in sp.solve(sp.diff(f14, x), x) if float(sp.diff(f14, x, 2).subs(x, r)) > 0][0])

# diag-15: C(x) = 0.02x^3 - 0.6x^2 + 12x + 500, so C'(x) = 0.06x^2 - 1.2x + 12 and C'(12) = 6.24.
C15 = sp.Rational(2, 100) * x**3 - sp.Rational(6, 10) * x**2 + 12 * x + 500
R15 = float(sp.diff(C15, x).subs(x, 12))

CHECKS = [
    ('diag-01', [A1, K1], None),     # 1.20; 3
    ('diag-02', S2, None),           # 2430
    ('diag-03', U3, None),           # 2399
    ('diag-04', float(M4), None),    # 0.5
    ('diag-05', F5, None),           # -5.33
    ('diag-06', [X6, Y6], None),     # 1.12; -4.06
    ('diag-07', V7, None),           # 829.4
    ('diag-08', AC8, None),          # 7.81
    ('diag-09', H9, None),           # 22.4
    ('diag-10', SD10, None),         # 3.88
    ('diag-11', E11, None),          # 10.2
    ('diag-12', [P12, L12], None),   # 0.13; 1085
    ('diag-13', G13, None),          # 7
    ('diag-14', X14, None),          # 3
    ('diag-15', R15, None),          # 6.24
]
