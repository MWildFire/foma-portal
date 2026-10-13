"""Numeric checks for topic 1-10-rational-exponents (Rational exponents). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

R = sp.Rational

# Worked example (EN and RU): (4/9)^(-3/2) * 27^(2/3), evaluated exactly with sympy.
WE_1 = float(sp.Rational(4, 9) ** R(-3, 2))                                     # 27/8 = 3.375
WE_2 = [float(sp.Integer(27) ** R(1, 3)), float(sp.Integer(27) ** R(2, 3))]      # 3 and 9
WE_3 = float(sp.Rational(4, 9) ** R(-3, 2) * sp.Integer(27) ** R(2, 3))          # 243/8 = 30.375

# q-1-10-01: (27/8)^(-2/3) as a decimal.
Q01 = float(sp.Rational(27, 8) ** R(-2, 3))

# q-1-10-02 (b): the expression at x = 4, evaluated from its original form.
Q02 = float((sp.Integer(4) ** R(1, 2) + sp.Integer(4) ** R(-1, 2)) / sp.Integer(4) ** R(1, 2))

# q-1-10-03: parts (b), (c), (d), (e), using T = r^(3/2) and r = T^(2/3).
Q03 = [
    float(sp.Rational(52, 10) ** R(3, 2)),     # (b) Jupiter period at 5.2 AU, years
    float(sp.Integer(76) ** R(2, 3)),          # (c) mean distance for a period of 76 years, AU
    float(sp.Integer(4) ** R(3, 2)),           # (d) period of a planet at 4 AU, years
    float(sp.Integer(8) ** R(2, 3)),           # (e) distance ratio for a period ratio of 8
]

CHECKS = [
    ('we-1-10-rational-exponents-1', WE_1, '3.375'),
    ('we-1-10-rational-exponents-2', WE_2, '3; 9'),
    ('we-1-10-rational-exponents-3', WE_3, '30.375'),
    ('q-1-10-01', Q01, None),
    ('q-1-10-02', Q02, None),
    ('q-1-10-03', Q03, None),
]
