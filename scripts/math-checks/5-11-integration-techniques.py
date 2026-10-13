"""Numeric checks for topic 5-11-integration-techniques (Integration of standard functions and substitution). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x = sp.symbols('x', real=True)
t = sp.symbols('t', real=True)
s = sp.symbols('s', real=True)

# Worked example, step 2: integral from 0 to 1 of 6x(3x^2 + 1)^4 dx (u = 3x^2 + 1, u runs from 1 to 4).
WE_1 = [float(sp.integrate(6 * x * (3 * x**2 + 1)**4, (x, 0, 1)))]          # 1023/5
# Worked example, step 3: integral from 1 to 2 of x(x^2 - 1)^3 dx (u = x^2 - 1, u runs from 0 to 3).
WE_2 = [float(sp.integrate(x * (x**2 - 1)**3, (x, 1, 2)))]                  # 81/8

# Worked example, step 2 limits: x = 0 gives u = 1 and x = 1 gives u = 4 (u = 3x^2 + 1).
WE_3 = [3 * 0**2 + 1, 3 * 1**2 + 1]
# Worked example, step 3 limits: x = 1 gives u = 0 and x = 2 gives u = 3 (u = x^2 - 1).
WE_4 = [1**2 - 1, 2**2 - 1]

# q-5-11-01: integral from 1 to 2 of (1/x + 2x) dx.
q1 = float(sp.integrate(1 / x + 2 * x, (x, 1, 2)))                           # ln 2 + 3
# q-5-11-02: integral from 0 to 1 of 2x(x^2 + 1)^3 dx.
q2 = float(sp.integrate(2 * x * (x**2 + 1)**3, (x, 0, 1)))                   # 15/4
# q-5-11-03: water flows in at 2t e^(t^2) litres per minute.
rate = 2 * t * sp.exp(t**2)
V = sp.integrate(2 * s * sp.exp(s**2), (s, 0, t))                            # total volume e^(t^2) - 1
T = [r for r in sp.solve(sp.Eq(V, 20), t) if float(r) > 0][0]               # e^(T^2) = 21
q3 = [float(sp.integrate(rate, (t, 0, 1))),                                   # e - 1
      float(sp.integrate(rate, (t, 1, 2))),                                   # e^4 - e
      float(T)]                                                               # sqrt(ln 21)

CHECKS = [
    ('we-5-11-integration-techniques-1', WE_1, '204.6'),
    ('we-5-11-integration-techniques-2', WE_2, '10.125'),
    ('we-5-11-integration-techniques-3', WE_3, '1; 4'),
    ('we-5-11-integration-techniques-4', WE_4, '0; 3'),
    ('q-5-11-01', q1, None),
    ('q-5-11-02', q2, None),
    ('q-5-11-03', q3, None),
]
