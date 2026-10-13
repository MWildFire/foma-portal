"""Numeric checks for topic 2-3-graphs-sketching (Graphs of functions and sketching). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x = sp.symbols('x')

# Worked example (EN and RU): h(x) = (x^2 - 4) + (6 - 2x). Turning point (1, 1); h(0); h(2); discriminant.
H = (x**2 - 4) + (6 - 2 * x)
TURN_X = sp.solve(sp.diff(H, x), x)[0]
TURN_Y = H.subs(x, TURN_X)
WE_1 = [float(TURN_X), float(TURN_Y)]
WE_2 = [float(H.subs(x, 0)), float(H.subs(x, 2)), float(sp.discriminant(H, x))]

# q-2-3-01: h = f + g with f = x^2 - 4x + 1 and g = 0.5x + 2; x-coordinate of the minimum point.
H1 = (x**2 - 4 * x + 1) + (sp.Rational(1, 2) * x + 2)
Q01 = float(sp.solve(sp.diff(H1, x), x)[0])

# q-2-3-02: g(x) = f(x - 2) - 1 with f(1) = 3 and f(4) = -2 given; g(3) and g(6).
F_GIVEN = {1: 3, 4: -2}
G3 = F_GIVEN[3 - 2] - 1
G6 = F_GIVEN[6 - 2] - 1

# q-2-3-03: profit P = R - C with R = 18x, C = 0.02x^2 + 6x + 900 on 0 <= x <= 500; P2 uses revenue 20x.
R = 18 * x
C = sp.Rational(1, 50) * x**2 + 6 * x + 900
P = sp.expand(R - C)
P2 = sp.expand(20 * x - C)
X_CROSS = float([r for r in sp.solve(sp.Eq(R, C), x) if 0 < float(r) <= 500][0])
N_POS = next(n for n in range(0, 501) if float(P.subs(x, n)) > 0)
X_MAX = float(sp.solve(sp.diff(P, x), x)[0])
P_MAX = float(P.subs(x, X_MAX))
N_POS2 = next(n for n in range(0, 501) if float(P2.subs(x, n)) > 0)

CHECKS = [
    ('we-2-3-graphs-sketching-1', WE_1, '1; 1'),
    ('we-2-3-graphs-sketching-2', WE_2, '2; 2; -4'),
    ('q-2-3-01', Q01, None),
    ('q-2-3-02', [G3, G6], None),
    ('q-2-3-03', [X_CROSS, N_POS, X_MAX, P_MAX, N_POS2], None),
]
