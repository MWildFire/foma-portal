"""Numeric checks for topic 3-5-perpendicular-bisectors (Perpendicular bisectors). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x, y = sp.symbols('x y', real=True)  # sympy geometry uses real symbols


def bisector(p, q):
    """Perpendicular bisector of the segment pq, as a sympy Line."""
    return sp.Segment(p, q).perpendicular_bisector()


def gradient_and_intercept(line):
    """For a non-vertical line written as y = m x + c, return (m, c)."""
    y_of_x = sp.solve(line.equation(), y)[0]
    return sp.diff(y_of_x, x), y_of_x.subs(x, 0)


# Worked example (EN and RU): A(2, 1), B(8, 5).
WE_MID = sp.Point(2, 1).midpoint(sp.Point(8, 5))                                 # (5, 3)
WE_M, WE_C = gradient_and_intercept(bisector(sp.Point(2, 1), sp.Point(8, 5)))     # -3/2 and 21/2
WE_ON_LINE = WE_M * 1 + WE_C                                                       # height at x = 1: 9
WE_DIST = sp.Point(1, 9).distance(sp.Point(2, 1))                                  # sqrt(65)

# q-3-5-01: P(1, 9), Q(7, 1). Midpoint, bisector y = mx + c, and where it meets the x-axis.
Q1_MID = sp.Point(1, 9).midpoint(sp.Point(7, 1))
Q1_M, Q1_C = gradient_and_intercept(bisector(sp.Point(1, 9), sp.Point(7, 1)))
Q1_K = sp.solve(Q1_M * x + Q1_C, x)[0]

# q-3-5-02: circumcentre of A(0, 0), B(6, 0), C(2, 4), and the radius OA.
Q2_O = sp.Triangle(sp.Point(0, 0), sp.Point(6, 0), sp.Point(2, 4)).circumcenter
Q2_R = Q2_O.distance(sp.Point(0, 0))

# q-3-5-03: masts A(0, 0), B(12, 0), C(4, 9); depot D is the circumcentre.
A3, B3, C3 = sp.Point(0, 0), sp.Point(12, 0), sp.Point(4, 9)
Q3_AB_X = sp.solve(bisector(A3, B3).equation(), x)[0]                             # x = 6
Q3_M, Q3_C = gradient_and_intercept(bisector(A3, C3))                             # -4/9 and c
Q3_D = sp.Triangle(A3, B3, C3).circumcenter
Q3_AD = A3.distance(Q3_D)
Q3_ANGLE = sp.acos((2 * Q3_AD**2 - 144) / (2 * Q3_AD**2))                         # angle ADB, cosine rule
Q3_ARC = Q3_ANGLE * Q3_AD                                                         # minor arc = angle x radius

CHECKS = [
    ('we-3-5-perpendicular-bisectors-1', [float(WE_MID.x), float(WE_MID.y)], '5; 3'),
    ('we-3-5-perpendicular-bisectors-2', [float(WE_M), float(WE_C)], '-1.5; 10.5'),
    ('we-3-5-perpendicular-bisectors-3', [float(WE_ON_LINE), float(WE_DIST)], '9; 8.06'),
    ('q-3-5-01', [float(Q1_MID.x), float(Q1_MID.y), float(Q1_M), float(Q1_C), float(Q1_K)], None),
    ('q-3-5-02', [float(Q2_O.x), float(Q2_O.y), float(Q2_R)], None),
    ('q-3-5-03', [
        float(Q3_AB_X),
        float(Q3_M),
        float(Q3_C),
        float(Q3_D.x),
        float(Q3_D.y),
        float(Q3_AD),
        float(Q3_ARC),
    ], None),
]
