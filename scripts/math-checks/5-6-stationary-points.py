"""Numeric checks for topic 5-6-stationary-points (stationary points). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x, t = sp.symbols('x t', real=True)

# Worked example (EN and RU): f(x) = x^3 - 6x^2 + 9x + 1 has stationary points at x = 1 and x = 3, with f(1) = 5 and f(3) = 1.
F = x**3 - 6*x**2 + 9*x + 1
WE_1 = [float(r) for r in sorted(sp.solve(sp.diff(F, x), x), key=float)]   # 1; 3
WE_2 = [float(F.subs(x, 1)), float(F.subs(x, 3))]                         # 5; 1

# q-5-6-01: the local maximum of G(x) = x^3 - 4x + 1 is the stationary point where the second derivative is negative.
G = x**3 - 4*x + 1
x_max = [r for r in sp.solve(sp.diff(G, x), x) if float(sp.diff(G, x, 2).subs(x, r)) < 0][0]
Q_01 = [float(x_max), float(G.subs(x, x_max))]                            # -1.15; 4.08

# q-5-6-02: C(t) = 0.02t^3 - 0.6t^2 + 4.5t + 3 on 0 <= t <= 12; the turning point inside the interval is a maximum.
C = sp.Rational(2, 100) * t**3 - sp.Rational(6, 10) * t**2 + sp.Rational(9, 2) * t + 3
t_max = [r for r in sp.solve(sp.diff(C, t), t)
         if 0 <= float(r) <= 12 and float(sp.diff(C, t, 2).subs(t, r)) < 0][0]
Q_02 = [float(t_max), float(C.subs(t, t_max))]                            # 5; 13

# q-5-6-03: P(t) = t^3 - 12t^2 + 45t + 40 on 0 <= t <= 8: turning points, their values, and the greatest value on the interval.
P = t**3 - 12*t**2 + 45*t + 40
p_turn = sorted(sp.solve(sp.diff(P, t), t), key=float)                    # 3; 5
candidates = [sp.Integer(0), sp.Integer(8)] + [r for r in p_turn if 0 <= float(r) <= 8]
t_best = max(candidates, key=lambda r: float(P.subs(t, r)))
Q_03 = [float(p_turn[0]), float(p_turn[1]), float(P.subs(t, p_turn[0])),
        float(P.subs(t, p_turn[1])), float(P.subs(t, t_best)), float(t_best)]   # 3; 5; 94; 90; 144; 8

CHECKS = [
    ('we-5-6-stationary-points-1', WE_1, '1; 3'),
    ('we-5-6-stationary-points-2', WE_2, '5; 1'),
    ('q-5-6-01', Q_01, None),
    ('q-5-6-02', Q_02, None),
    ('q-5-6-03', Q_03, None),
]
