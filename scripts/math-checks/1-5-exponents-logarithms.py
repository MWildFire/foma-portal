"""Numeric checks for topic 1-5-exponents-logarithms (laws of exponents; logarithms). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

import sympy as sp

R = sp.Rational
t = sp.symbols('t')

# Worked example, step 1 (EN and RU): (2^5 x 2^-3) / 2^-1 = 2^3 = 8, in exact fractions.
WE_1 = Fraction(2) ** 5 * Fraction(2) ** -3 / Fraction(2) ** -1
# Worked example, step 2: log10 250 to 3 decimal places.
WE_2 = sp.log(250, 10).evalf(30)
# Worked example, step 3: ln 20 to 3 decimal places.
WE_3 = sp.log(20).evalf(30)

# q-1-5-01: pH = -log10(3.2 x 10^-5), and 3.2 x 10^-5 = 32 / 10^6.
PH = (-sp.log(R(32, 10 ** 6), 10)).evalf(30)

# q-1-5-02 is a 'Show that' question with no answer field: the identity must hold exactly for several integers.
for n in range(-4, 6):
    assert Fraction(5) ** (n + 1) - Fraction(5) ** (n - 1) == Fraction(24, 5) * Fraction(5) ** n, n

# q-1-5-03: C(t) = 4 e^(-0.12 t). The part (b) identity holds symbolically.
assert sp.simplify(4 * sp.exp(-R(12, 100) * (t + 1)) - sp.exp(-R(12, 100)) * 4 * sp.exp(-R(12, 100) * t)) == 0
C_AT_6 = (4 * sp.exp(-R(72, 100))).evalf(30)              # (a) C(6) to 3 s.f.
PERCENT_AFTER_1H = (100 * sp.exp(-R(12, 100))).evalf(30)  # (b) percentage after 1 hour, 3 s.f.
HALF_LIFE = (sp.log(2) / R(12, 100)).evalf(30)            # (c) solves 4 e^(-0.12t) = 2
TIME_TO_ONE = (sp.log(4) / R(12, 100)).evalf(30)          # (d) solves 4 e^(-0.12t) = 1
LEAST_HOUR = next(n for n in range(0, 200) if (4 * sp.exp(-R(12, 100) * n)).evalf(30) < 1)   # (e)

# The worked markscheme prints C(6), C(11), C(12) and the rounded results: each must agree with the exact value.
assert round(float(C_AT_6), 2) == 1.95
assert round(float((4 * sp.exp(-R(132, 100))).evalf(30)), 2) == 1.07
assert round(float((4 * sp.exp(-R(144, 100))).evalf(30)), 3) == 0.948
assert round(float(PERCENT_AFTER_1H), 1) == 88.7
assert round(float(HALF_LIFE), 2) == 5.78
assert round(float(TIME_TO_ONE), 2) == 11.55

CHECKS = [
    ('we-1-5-exponents-logarithms-1', WE_1, '8'),
    ('we-1-5-exponents-logarithms-2', WE_2, '2.398'),
    ('we-1-5-exponents-logarithms-3', WE_3, '2.996'),
    ('q-1-5-01', PH, None),
    ('q-1-5-03', [4, C_AT_6, PERCENT_AFTER_1H, HALF_LIFE, TIME_TO_ONE, LEAST_HOUR], None),
]
