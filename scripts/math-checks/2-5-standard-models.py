"""Numeric checks for topic 2-5-standard-models (Modelling with standard functions). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
import sympy as sp
from scipy.optimize import brentq

x = sp.symbols('x')


# Worked example (EN and RU): coffee cooling T(t) = 26 + 54 * 0.92^t, t in minutes.
def temperature(t):
    return 26 + 54 * 0.92**t


WE_T0 = temperature(0)                                    # starting temperature
WE_T10 = temperature(10)                                  # after 10 minutes
WE_T40 = brentq(lambda t: temperature(t) - 40, 0, 100)    # time to reach 40

# q-2-5-01: h(x) = -0.4x^2 + 2.4x + 0.9 (x >= 0): highest point and the positive zero.
h = -sp.Rational(2, 5) * x**2 + sp.Rational(12, 5) * x + sp.Rational(9, 10)
VERTEX_X = float(sp.solve(sp.diff(h, x), x)[0])
VERTEX_H = float(h.subs(x, VERTEX_X))
LANDING = max(float(r) for r in sp.solve(h, x) if float(r) >= 0)

# q-2-5-02: D(t) = 12 - 1.5cos(pi t / 6) for 0 <= t <= 12: maximum, minimum and first t with D = 12.75.


def daylight(t):
    return 12 - 1.5 * np.cos(np.pi * t / 6)


GRID = np.linspace(0, 12, 120001)
D_MAX = float(daylight(GRID).max())
D_MIN = float(daylight(GRID).min())
FIRST_T = brentq(lambda t: daylight(t) - 12.75, 0, 6)

# q-2-5-03: V(x) = x(30 - 2x)^2 = 4x^3 - 120x^2 + 900x for 0 < x < 15.
V = 4 * x**3 - 120 * x**2 + 900 * x
assert sp.expand(x * (30 - 2 * x)**2 - V) == 0          # the expansion asked for in part (a)
X_MAX = [float(c) for c in sp.solve(sp.diff(V, x), x) if 0 < float(c) < 15][0]
V_MAX = float(V.subs(x, X_MAX))
ROOTS_1000 = sorted(float(np.real(r)) for r in np.roots([4, -120, 900, -1000])
                    if abs(np.imag(r)) < 1e-9 and 0 < np.real(r) < 15)
V_AT_2 = float(V.subs(x, 2))

CHECKS = [
    ('we-2-5-standard-models-1', WE_T0, '80'),
    ('we-2-5-standard-models-2', WE_T10, '49.5'),
    ('we-2-5-standard-models-3', WE_T40, '16.2'),
    ('q-2-5-01', [VERTEX_X, VERTEX_H, LANDING], None),
    ('q-2-5-02', [D_MAX, D_MIN, FIRST_T], None),
    ('q-2-5-03', [X_MAX, V_MAX, ROOTS_1000[0], ROOTS_1000[1], V_AT_2], None),
]
