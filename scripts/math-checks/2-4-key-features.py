"""Numeric checks for topic 2-4-key-features (Key features of graphs). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x = sp.symbols('x')

# Worked example (EN and RU): food truck profit P(x) = -0.5x^2 + 30x - 200 for 0 <= x <= 60.
P = -sp.Rational(1, 2) * x**2 + 30 * x - 200
ZEROS = sorted(float(r) for r in sp.solve(P, x))                       # x = 30 -/+ sqrt(500)
P_TURN = sp.solve(sp.diff(P, x), x)[0]                                 # axis of symmetry
TURN = [float(P_TURN), float(P.subs(x, P_TURN))]                       # maximum point (x, P)
ON_100 = sorted(float(r) for r in sp.solve(sp.Eq(P, 100), x))         # P(x) = 100

# q-2-4-01: f(x) = (4x - 7)/(3x + 2): vertical asymptote x, horizontal asymptote y, y-intercept.
f = (4 * x - 7) / (3 * x + 2)
VERTICAL = float(sp.solve(3 * x + 2, x)[0])
HORIZONTAL = float(sp.limit(f, x, sp.oo))
Y_INTERCEPT = float(f.subs(x, 0))

# q-2-4-02: g(x) = x^3 - 4x^2 + 2x + 1: the local maximum point (second derivative negative there).
g = x**3 - 4 * x**2 + 2 * x + 1
LOCAL_MAX = []
for c in sp.solve(sp.diff(g, x), x):
    if sp.diff(g, x, 2).subs(x, c) < 0:
        LOCAL_MAX = [float(c), float(g.subs(x, c))]

# q-2-4-03: profit Q(x) = -0.5x^2 + 230x - 4000 on 0 <= x <= 300; average cost A(x) = C(x)/x.
Q = -sp.Rational(1, 2) * x**2 + 230 * x - 4000
BREAK_EVEN = [float(r) for r in sp.solve(Q, x) if 0 <= float(r) <= 300]
X_MAX = float(sp.solve(sp.diff(Q, x), x)[0])
PROFIT_MAX = float(Q.subs(x, X_MAX))
A = (4000 + 120 * x) / x
A_ASYMPTOTE = float(sp.limit(A, x, sp.oo))
X_FOR_150 = float(sp.solve(sp.Eq(A, 150), x)[0])

CHECKS = [
    ('we-2-4-key-features-1', ZEROS, '7.64; 52.36'),
    ('we-2-4-key-features-2', TURN, '30; 250'),
    ('we-2-4-key-features-3', ON_100, '12.68; 47.32'),
    ('q-2-4-01', [VERTICAL, HORIZONTAL, Y_INTERCEPT], None),
    ('q-2-4-02', LOCAL_MAX, None),
    ('q-2-4-03', [BREAK_EVEN[0], X_MAX, PROFIT_MAX, A_ASYMPTOTE, X_FOR_150], None),
]
