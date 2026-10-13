"""Numeric checks for topic 5-5-integration-areas (Integration and areas under curves). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x = sp.symbols('x')
t = sp.symbols('t')

# Worked example (EN and RU): f'(x) = 3x^2 + 4x + 1 and the curve passes through (1, 7).
F_we = sp.integrate(3*x**2 + 4*x + 1, x)                 # x^3 + 2x^2 + x
C_we = 7 - F_we.subs(x, 1)                               # C = 3
f_we = F_we + C_we                                       # x^3 + 2x^2 + x + 3
assert min(float(f_we.subs(x, sp.Rational(k, 100))) for k in range(0, 201)) > 0   # f(x) > 0 on [0, 2]
area_we = sp.integrate(f_we, (x, 0, 2))                  # 52/3 = 17.333...

# q-5-5-01: dy/dx = 3x^2 - 4x + 1 through (2, 5); the y-coordinate at x = 3.
F1 = sp.integrate(3*x**2 - 4*x + 1, x)
C1 = 5 - F1.subs(x, 2)                                   # C = 3
y3 = (F1 + C1).subs(x, 3)                                # 15

# q-5-5-02: area enclosed by y = 9 - x^2, the x-axis, the y-axis and x = 2.
area2 = sp.integrate(9 - x**2, (x, 0, 2))                # 46/3 = 15.333...

# q-5-5-03: inflow R(t) = 0.6t^2 - 3t + 12 litres per minute, 50 litres at t = 0.
R = sp.Rational(3, 5)*t**2 - 3*t + 12
assert min(float(R.subs(t, sp.Rational(k, 10))) for k in range(0, 101)) > 0      # R(t) > 0 on [0, 10]
total = sp.integrate(R, (t, 0, 10))                      # 170 litres
V = sp.integrate(R, t) + 50                              # 0.2t^3 - 1.5t^2 + 12t + 50
V4 = V.subs(t, 4)                                        # 86.8 litres
t100 = sp.nsolve(V - 100, t, 5)                          # 5.2031...

CHECKS = [
    ('we-5-5-integration-areas-1', [C_we], '3'),
    ('we-5-5-integration-areas-2', [area_we], '17.3'),
    ('q-5-5-01', y3, None),
    ('q-5-5-02', area2, None),
    ('q-5-5-03', [total, V4, t100], None),
]
