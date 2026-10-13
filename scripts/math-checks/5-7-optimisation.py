"""Numeric checks for topic 5-7-optimisation (optimisation in context). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x, p = sp.symbols('x p', real=True)

# Worked example (EN and RU): revenue R(p) = p(400 - 10p) for a ticket price of p AED; tickets sold 400 - 10p.
R = p * (400 - 10 * p)
WE_1 = [float(sp.solve(400 - 10 * p, p)[0])]                              # 40: the upper end of the domain
p_star = sp.solve(sp.diff(R, p), p)[0]
WE_2 = [float(p_star)]                                                    # 20
WE_3 = [float(400 - 10 * p_star), float(R.subs(p, p_star))]               # 200; 4000

# q-5-7-01: rectangular pen against a wall with 60 m of fencing, A(x) = x(60 - 2x).
A = x * (60 - 2 * x)
x_pen = sp.solve(sp.diff(A, x), x)[0]
Q_01 = [float(x_pen), float(A.subs(x, x_pen))]                            # 15; 450

# q-5-7-02: average cost per unit A(x) = C(x)/x with C(x) = 0.5x^2 - 12x + 150 (AED); the positive turning point.
C = sp.Rational(1, 2) * x**2 - 12 * x + 150
A_avg = sp.simplify(C / x)
x_cost = [r for r in sp.solve(sp.diff(A_avg, x), x) if float(r) > 0][0]
Q_02 = [float(x_cost), float(A_avg.subs(x, x_cost))]                      # 17.3; 5.32

# q-5-7-03: open box from a 20 cm by 30 cm sheet, V(x) = x(20 - 2x)(30 - 2x) with domain 0 < x < 10.
V = x * (20 - 2 * x) * (30 - 2 * x)
roots = sorted(sp.solve(sp.diff(V, x), x), key=float)                     # 3.92; 12.7
x_valid = [r for r in roots if 0 < float(r) < 10][0]
Q_03 = [float(roots[0]), float(roots[1]), float(V.subs(x, x_valid))]     # 3.92; 12.7; 1056

CHECKS = [
    ('we-5-7-optimisation-1', WE_1, '40'),
    ('we-5-7-optimisation-2', WE_2, '20'),
    ('we-5-7-optimisation-3', WE_3, '200; 4000'),
    ('q-5-7-01', Q_01, None),
    ('q-5-7-02', Q_02, None),
    ('q-5-7-03', Q_03, None),
]
