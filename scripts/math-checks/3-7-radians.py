"""Numeric checks for topic 3-7-radians (Radians). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from sympy import Rational, pi, sqrt

# Worked example (EN and RU): 150 degrees in radians is 5pi/6, printed 2.618.
WE_1 = [float(Rational(150) * pi / 180)]

# Worked example (EN and RU): r = 12 and theta = pi/3 give arc length 4pi and sector area 24pi.
WE_2 = [float(12 * pi / 3), float(Rational(1, 2) * 12**2 * pi / 3)]

# Worked example (EN and RU): 1.5 radians in degrees.
WE_3 = [float(np.rad2deg(1.5))]

CHECKS = [
    ('we-3-7-radians-1', WE_1, '2.618'),
    ('we-3-7-radians-2', WE_2, '12.566; 75.398'),
    ('we-3-7-radians-3', WE_3, '85.9'),
    # q-3-7-01: A = (1/2) r^2 theta with r = 6.5 and theta = 2.4.
    ('q-3-7-01', float(Rational(1, 2) * Rational(13, 2) ** 2 * Rational(12, 5)), None),
    # q-3-7-02: 1.4 radians in degrees.
    ('q-3-7-02', float(np.rad2deg(1.4)), None),
    ('q-3-7-03', [
        float(6 * Rational(6, 5)),                          # (a) s = r theta, r = 6, theta = 1.2
        float(Rational(1, 2) * 6**2 * Rational(6, 5)),      # (b) A = (1/2) r^2 theta
        float(sqrt(Rational(2 * 30) / Rational(6, 5))),     # (c) r^2 = 2A / theta, A = 30, theta = 1.2
        np.rad2deg(float(Rational(9, 6))),                  # (d) theta = s / r = 9 / 6 radians, in degrees
    ], None),
]
