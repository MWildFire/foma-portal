"""Numeric checks for topic 5-3-differentiating-powers (differentiating power functions). Run by scripts/math-verify.py."""

import sympy as sp

x, n = sp.symbols('x n')
y1 = 4*x**5 - 3*x**2 + 7*x - 2          # q-5-3-01
dy1 = sp.diff(y1, x)                    # 20x^4 - 6x + 7
y2 = 6*x**-2 + x**3                     # q-5-3-02, the curve 6/x^2 + x^3 written with powers
dy2 = sp.diff(y2, x)                    # -12x^-3 + 3x^2
y3 = 3*x**4 - 2*x**-1 + 5*x - 7         # the worked example in the topic
dy3 = sp.diff(y3, x)                    # 12x^3 + 2x^-2 + 5

assert sp.expand(dy1 - (20*x**4 - 6*x + 7)) == 0
assert sp.expand(dy2 - (-12*x**-3 + 3*x**2)) == 0

# q-5-3-03: C(n) = 0.02n^3 - 0.9n^2 + 20n + 150 in exact decimals (AED).
C = sp.Rational(1, 50)*n**3 - sp.Rational(9, 10)*n**2 + 20*n + 150
dC = sp.diff(C, n)                                                   # 0.06n^2 - 1.8n + 20
assert sp.expand(dC - (sp.Rational(3, 50)*n**2 - sp.Rational(9, 5)*n + 20)) == 0
assert sp.expand(dC - (sp.Rational(3, 50)*(n - 15)**2 + sp.Rational(13, 2))) == 0   # completed square

N_MIN = sp.solve(sp.diff(dC, n), n)[0]           # 15
C_MIN = dC.subs(n, N_MIN)                        # 6.5
MARGINAL_10 = dC.subs(n, 10)                     # 8
INCREASE = C.subs(n, 12) - C.subs(n, 10)         # 14.96
ESTIMATE = 2*MARGINAL_10                         # 16
ERROR = abs(ESTIMATE - INCREASE)                 # 1.04

CHECKS = [
    # Worked example (EN and RU): 12 x 2^3, 2 x 2^-2 and dy/dx at x = 2.
    ('we-5-3-differentiating-powers-1', [12*sp.Integer(2)**3, 2*sp.Integer(2)**-2, dy3.subs(x, 2)], '96; 0.5; 101.5'),
    # q-5-3-01 markscheme: 20 x 2^4, 6 x 2 and the value 315.
    ('we-5-3-differentiating-powers-ms-1', [20*sp.Integer(2)**4, 6*sp.Integer(2), dy1.subs(x, 2)], '320; 12; 315'),
    # q-5-3-02 markscheme: -12 x (-1)^-3, 3 x (-1)^2 and the gradient 15.
    ('we-5-3-differentiating-powers-ms-2', [-12*sp.Integer(-1)**-3, 3*sp.Integer(-1)**2, dy2.subs(x, -1)], '12; 3; 15'),
    # q-5-3-03 markscheme (a): the coefficients of C'(n).
    ('we-5-3-differentiating-powers-ms-3', [sp.Rational(3, 50), -sp.Rational(9, 5), 20], '0.06; -1.8; 20'),
    # q-5-3-03 markscheme (b): 0.06 x 10^2, -1.8 x 10, 20 and C'(10).
    ('we-5-3-differentiating-powers-ms-4', [sp.Rational(3, 50)*10**2, -sp.Rational(9, 5)*10, 20, MARGINAL_10], '6; -18; 20; 8'),
    # q-5-3-03 markscheme (c): the minimum at n = 15 and the least marginal cost.
    ('we-5-3-differentiating-powers-ms-5', [N_MIN, C_MIN], '15; 6.5'),
    # q-5-3-03 markscheme (d): C(10), C(12) and the increase.
    ('we-5-3-differentiating-powers-ms-6', [C.subs(n, 10), C.subs(n, 12), INCREASE], '280; 294.96; 14.96'),
    ('q-5-3-01', [dy1.subs(x, 2)], None),
    ('q-5-3-02', [dy2.subs(x, -1)], None),
    ('q-5-3-03', [MARGINAL_10, N_MIN, C_MIN, INCREASE, ESTIMATE, ERROR], None),
]
