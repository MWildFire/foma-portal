"""Numeric checks for topic 2-8-transformations (transformations of graphs). Run python3 scripts/math-verify.py."""

import sympy as sp

x = sp.symbols('x')
Half = sp.Rational(1, 2)

# we-1: f(t) = t^2 - 1 gives f(3) = 8. Image of (3, 8) under y = 0.5 f(x - 4) + 1.
f1 = lambda u: u**2 - 1
x1 = sp.solve(sp.Eq(x - 4, 3), x)[0]          # the point (3, 8) is reached when x - 4 = 3
WE_1 = [x1, Half*f1(x1 - 4) + 1]              # 7, 5

# we-2: image of (3, 8) under y = f(3x + 3) = f(3(x + 1)).
x2 = sp.solve(sp.Eq(3*x + 3, 3), x)[0]        # 3x + 3 = 3
WE_2 = [x2, f1(3*x2 + 3)]                     # 0, 8

# q-2-8-01: f(t) = t - 7 gives f(4) = -3, the point P(4, -3).
# Image under y = -2 f(0.5(x + 1)) + 5.
f2 = lambda u: u - 7
x3 = sp.solve(sp.Eq(Half*(x + 1), 4), x)[0]   # 0.5(x + 1) = 4
Q01 = [x3, -2*f2(Half*(x3 + 1)) + 5]         # 7, 11

# q-2-8-02: f(t) = 8 - (t - 3)^2 has its maximum at (3, 8). Maximum of y = f(2x - 6).
g2 = 8 - (2*x - 6 - 3)**2
x4 = sp.solve(sp.diff(g2, x), x)[0]
Q02 = [x4, g2.subs(x, x4)]                    # 9/2, 8

# q-2-8-03: f(x) = x^2 - 4x + 5.
f3 = lambda u: u**2 - 4*u + 5
a_vertex = sp.solve(sp.diff(f3(x), x), x)[0]  # part (a): h = 2
b_min = f3(a_vertex)                          # part (a): k = 1
g3 = 2*f3(x + 3) + 4                          # translate 3 left, stretch 2, translate 4 up
assert sp.expand(g3 - (2*(x + 1)**2 + 6)) == 0   # part (b)
g_vertex = sp.solve(sp.diff(g3, x), x)[0]     # part (c): x = -1
g_min = g3.subs(x, g_vertex)                  # part (c): 6
roots = sorted(sp.solve(sp.Eq(g3, 14), x), key=float)   # part (d): -3 and 1
h3 = f3(x/2)                                  # horizontal stretch with scale factor 2
h_vertex = sp.solve(sp.diff(h3, x), x)[0]     # part (e): x = 4
h_min = h3.subs(x, h_vertex)                  # part (e): 1
Q03 = [a_vertex, b_min, g_vertex, g_min, roots[0], roots[1], h_vertex, h_min]

CHECKS = [
    ('we-2-8-transformations-1', WE_1, '7; 5'),
    ('we-2-8-transformations-2', WE_2, '0; 8'),
    ('q-2-8-01', Q01, None),
    ('q-2-8-02', Q02, None),
    ('q-2-8-03', Q03, None),
]
