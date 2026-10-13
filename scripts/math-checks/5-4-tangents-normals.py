"""Numeric checks for topic 5-4-tangents-normals (Tangents and normals). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x = sp.symbols('x')

# Worked example (EN and RU): f(x) = x^3 - 2x + 1 at x = 2, so P(2, 5).
f_we = x**3 - 2*x + 1
p_we = f_we.subs(x, 2)                          # 5
m_we = sp.diff(f_we, x).subs(x, 2)              # tangent gradient 10
c_tan = p_we - m_we * 2                         # tangent y = 10x - 15
x_tan = -c_tan / m_we                           # tangent meets the x-axis at x = 1.5
m_nor = -1 / m_we                               # normal gradient -0.1
c_nor = p_we - m_nor * 2                        # normal y = -0.1x + 5.2

# q-5-4-01: normal to y = 2x^2 - 3x + 5 at x = 2, its y-intercept.
f1 = 2*x**2 - 3*x + 5
p1 = f1.subs(x, 2)                              # 7
m1 = sp.diff(f1, x).subs(x, 2)                  # 5
c1 = p1 - (-1 / m1) * 2                         # normal y = -0.2x + 7.4

# q-5-4-02: triangle OAB, tangent to y = 9 - x^2 at x = 1.5.
f2 = 9 - x**2
x2 = sp.Rational(3, 2)
p2 = f2.subs(x, x2)                             # 27/4 = 6.75
m2 = sp.diff(f2, x).subs(x, x2)                 # -3
c2 = p2 - m2 * x2                               # tangent y = -3x + 45/4 (11.25)
a2 = sp.Rational(1, 2) * (-c2 / m2) * c2        # 21.09375

# q-5-4-03: hill y = 6x - x^2, P(5, 5), tangent to the ground, normal meets C again.
f3 = 6*x - x**2
assert f3.subs(x, 5) == 5                       # P lies on C
g3 = sp.diff(f3, x).subs(x, 5)                  # gradient -4
c3 = 5 - g3 * 5                                 # tangent y = -4x + 25
xA = -c3 / g3                                   # 6.25
dist = sp.sqrt((xA - 5)**2 + 5**2)              # sqrt(425)/4 = 5.1539...
m_n = -1 / g3                                   # normal gradient 1/4
c_n = 5 - m_n * 5                               # normal y = x/4 + 3.75
roots = sp.solve(sp.Eq(f3, m_n * x + c_n), x)   # 3/4 and 5
xQ = [r for r in roots if r != 5][0]            # 0.75

CHECKS = [
    ('we-5-4-tangents-normals-1', [p_we, m_we], '5; 10'),
    ('we-5-4-tangents-normals-2', [c_tan, x_tan], '-15; 1.5'),
    ('we-5-4-tangents-normals-3', [m_nor, c_nor], '-0.1; 5.2'),
    ('we-5-4-tangents-normals-4', [m_we * m_nor], '-1'),
    ('q-5-4-01', c1, None),
    ('q-5-4-02', a2, None),
    ('q-5-4-03', [g3, xA, dist, xQ], None),
]
