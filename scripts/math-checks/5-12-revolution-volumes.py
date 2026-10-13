"""Numeric checks for topic 5-12-revolution-volumes (areas and volumes of revolution). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
import sympy as sp
from scipy import integrate, optimize

x, y, k = sp.symbols('x y k')

# Worked example (EN and RU): the region under y = 4 - x^2 for 0 <= x <= 2, rotated about the x-axis, and the same
# region rotated about the y-axis with x^2 = 4 - y for 0 <= y <= 4.
AREA_WE = sp.integrate(4 - x**2, (x, 0, 2))                        # 16/3
VOL_X_WE = sp.pi * sp.integrate((4 - x**2)**2, (x, 0, 2))          # 256 pi / 15
VOL_Y_WE = sp.pi * sp.integrate(sp.sqrt(4 - y)**2, (y, 0, 4))      # 8 pi

# q-5-12-01: y = e^x for 0 <= x <= 1, rotated about the x-axis.
VOL_E = sp.pi * sp.integrate(sp.exp(x)**2, (x, 0, 1))              # pi (e^2 - 1) / 2

# q-5-12-02: y = x^2 + 1 gives x^2 = y - 1; rotated about the y-axis for 1 <= y <= 5.
VOL_Q2 = sp.pi * sp.integrate(sp.sqrt(y - 1)**2, (y, 1, 5))        # 8 pi

# q-5-12-03: (a) positive root of 9 - x^2; (b) area; (c) volume about the x-axis; (d) volume about the y-axis;
# (e) k in [0, 9] such that the part 0 <= y <= k holds half the volume of the solid in (d).
ROOT_A = max(r for r in sp.solve(9 - x**2, x) if r > 0)            # 3
AREA_B = sp.integrate(9 - x**2, (x, 0, ROOT_A))                    # 18
VOL_C = sp.pi * sp.integrate((9 - x**2)**2, (x, 0, ROOT_A))        # 648 pi / 5
VOL_D = sp.pi * sp.integrate(sp.sqrt(9 - y)**2, (y, 0, 9))         # 81 pi / 2
ROOTS_E = sp.solve(sp.pi * (9 * k - k**2 / 2) - VOL_D / 2, k)
K_E = [float(r) for r in ROOTS_E if 0 <= float(r) <= 9]
assert len(K_E) == 1

# Independent numerical cross-checks (scipy quadrature and root finding) of the exact values.
assert abs(float(AREA_WE) - integrate.quad(lambda t: 4 - t * t, 0, 2)[0]) < 1e-9
assert abs(float(VOL_X_WE) - integrate.quad(lambda t: np.pi * (4 - t * t) ** 2, 0, 2)[0]) < 1e-9
assert abs(float(VOL_Y_WE) - integrate.quad(lambda t: np.pi * (4 - t), 0, 4)[0]) < 1e-9
assert abs(float(VOL_E) - integrate.quad(lambda t: np.pi * np.exp(2 * t), 0, 1)[0]) < 1e-9
assert abs(float(VOL_Q2) - integrate.quad(lambda t: np.pi * (t - 1), 1, 5)[0]) < 1e-9
assert abs(float(VOL_C) - integrate.quad(lambda t: np.pi * (9 - t * t) ** 2, 0, 3)[0]) < 1e-9
assert abs(float(VOL_D) - integrate.quad(lambda t: np.pi * (9 - t), 0, 9)[0]) < 1e-9
K_NUM = optimize.brentq(lambda t: np.pi * (9 * t - t * t / 2) - 0.5 * float(VOL_D), 0, 9)
assert abs(K_E[0] - K_NUM) < 1e-9

CHECKS = [
    ('we-5-12-revolution-volumes-1', float(AREA_WE), '5.33'),       # 16/3
    ('we-5-12-revolution-volumes-2', float(VOL_X_WE), '53.6'),      # 256 pi / 15
    ('we-5-12-revolution-volumes-3', float(VOL_Y_WE), '25.1'),      # 8 pi
    ('q-5-12-01', float(VOL_E), None),
    ('q-5-12-02', float(VOL_Q2), None),
    ('q-5-12-03', [float(ROOT_A), float(AREA_B), float(VOL_C), float(VOL_D), K_E[0]], None),
]
