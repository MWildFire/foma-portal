"""Numeric checks for topic 5-18-euler-second-order (Euler's method for second-order equations).

Every Euler step is a plain loop with exact fractions, so no rounding enters the computed values.
"""

import math
from fractions import Fraction as F


def euler(accel, x, v, h, steps):
    """Euler's method for x'' = accel(x, v, t) from t = 0. Returns (t, x, v) after each step."""
    t = F(0)
    rows = []
    for _ in range(steps):
        # Both right-hand sides use the values at the start of the step, so they are evaluated before anything changes.
        x, v, t = x + h * v, v + h * accel(x, v, t), t + h
        rows.append((t, x, v))
    return rows


def as_floats(row):
    t, x, v = row
    return [float(t), float(x), float(v)]


# Worked example (EN and RU): x'' = -4x - 0.5 x', x(0) = 1, x'(0) = 0, h = 0.1, three steps.
WE = euler(lambda x, v, t: -4 * x - F(1, 2) * v, F(1), F(0), F(1, 10), 3)

# q-5-18-01: x'' = 2t - x, x(0) = 0, x'(0) = 1, h = 0.5, two steps.
Q1 = euler(lambda x, v, t: 2 * t - x, F(0), F(1), F(1, 2), 2)

# q-5-18-03: x'' = -4x, x(0) = 2, x'(0) = 0, h = 0.2, five steps.
Q3 = euler(lambda x, v, t: -4 * x, F(2), F(0), F(1, 5), 5)
X_04, V_04 = float(Q3[1][1]), float(Q3[1][2])              # x and dx/dt at t = 0.4
X_1 = float(Q3[4][1])                                       # x at t = 1
EXACT = 2 * math.cos(2)                                     # exact x at t = 1
PERCENT = abs(X_1 - EXACT) / abs(EXACT) * 100              # percentage error
E0 = 4 * F(2) ** 2                                          # E = 4x^2 + v^2 at t = 0
E5 = 4 * Q3[4][1] ** 2 + Q3[4][2] ** 2                      # E at t = 1
AMPLITUDE_FACTOR = math.sqrt(float(E5 / E0))               # amplitude factor over five steps

CHECKS = [
    ('we-5-18-euler-second-order-1', as_floats(WE[0]), '0.1; 1.000; -0.400'),
    ('we-5-18-euler-second-order-2', as_floats(WE[1]), '0.2; 0.960; -0.780'),
    ('we-5-18-euler-second-order-3', as_floats(WE[2]), '0.3; 0.882; -1.125'),
    ('q-5-18-01', [float(Q1[1][1]), float(Q1[1][2])], None),
    ('we-5-18-euler-second-order-4', [float(Q1[0][1]), float(Q1[0][2])], '0.5; 1.0'),                 # markscheme of q-5-18-01
    ('q-5-18-03', [X_04, V_04, X_1, PERCENT, AMPLITUDE_FACTOR], None),
    ('we-5-18-euler-second-order-5', [float(Q3[2][1]), float(Q3[2][2]), float(Q3[3][1]), float(Q3[3][2])],
     '1.040; -4.544; 0.131; -5.376'),                                                                  # markscheme of q-5-18-03 (c)
    ('we-5-18-euler-second-order-6', [2 * math.cos(2)], '-0.83229'),                                  # markscheme of q-5-18-03 (d)
    ('we-5-18-euler-second-order-7', [float(1 + F(1, 5) ** 2 * 4)], '1.16'),                          # markscheme of q-5-18-03 (e)
]
