"""Numeric checks for topic 2-7-composite-inverse (composite and inverse functions). Run python3 scripts/math-verify.py."""

import sympy as sp

x, t, n = sp.symbols('x t n')

# Worked example: f(x) = 3x - 1, g(x) = x^2 + 2, and h(x) = x^2 - 4 for x >= 0 with inverse h^-1.
f = lambda u: 3*u - 1
g = lambda u: u**2 + 2
h = lambda u: u**2 - 4

# we-1: g(2) = 6, f(6) = 17, f(2) = 5, g(5) = 27.
WE_1 = [g(2), f(g(2)), f(2), g(f(2))]

# we-2: least output of h on x >= 0 (h is increasing there, so h(0));
# 12 + 4; h^-1(12) is the non-negative root of h(t) = 12.
WE_2 = [h(0), 12 + 4, [s for s in sp.solve(sp.Eq(h(t), 12), t) if s >= 0][0]]

# we-3: (f o h^-1)(12) = f(4).
WE_3 = [f(WE_2[2])]

# q-2-7-01: f(x) = 2x + 5, g(x) = x^2 - 3: (f o g)(3) and (g o f)(3).
f1 = lambda u: 2*u + 5
g1 = lambda u: u**2 - 3
Q01 = [f1(g1(3)), g1(f1(3))]

# q-2-7-02: h(x) = x^2 - 6x + 13 for x >= 3; h^-1(29) is the root of h(t) = 29 that lies in the domain t >= 3.
h2 = lambda u: u**2 - 6*u + 13
Q02 = [s for s in sp.solve(sp.Eq(h2(t), 29), t) if s >= 3][0]

# q-2-7-03: C(n) = 0.01(n + 100)^2 for n >= 0 (AED), n(t) = 50t items after t hours.
C = lambda m: sp.Rational(1, 100)*(m + 100)**2
total = lambda tt: C(50*tt)
assert sp.simplify(total(t) - 25*(t + 2)**2) == 0       # part (a)
Q03 = [
    total(3),                                            # part (b): 625 AED
    [s for s in sp.solve(sp.Eq(C(n), 400), n) if s >= 0][0],   # part (c)(ii): 100 items
    [s for s in sp.solve(sp.Eq(total(t), 1600), t) if s >= 0][0],  # part (d): 6 hours
]

CHECKS = [
    ('we-2-7-composite-inverse-1', WE_1, '6; 17; 5; 27'),
    ('we-2-7-composite-inverse-2', WE_2, '-4; 16; 4'),
    ('we-2-7-composite-inverse-3', WE_3, '11'),
    ('q-2-7-01', Q01, None),
    ('q-2-7-02', Q02, None),
    ('q-2-7-03', Q03, None),
]
