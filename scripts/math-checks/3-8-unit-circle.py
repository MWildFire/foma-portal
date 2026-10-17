"""Numeric checks for topic 3-8-unit-circle (Unit circle and trigonometric equations). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from sympy import Rational, cos, pi, sin, sqrt, tan

# Worked example 1 (EN and RU): theta = 120 degrees on the unit circle.
WE_1 = [float(cos(2 * pi / 3)), float(sin(2 * pi / 3)), float(tan(2 * pi / 3))]

# Worked example 2 (EN and RU): cos theta = 0.6 in quadrant IV gives sin^2 theta = 0.64 and sin theta = -0.8.
WE_2 = [float(Rational(3, 5) ** 2), float(1 - Rational(3, 5) ** 2), -float(sqrt(1 - Rational(3, 5) ** 2))]

# Worked example 3 (EN and RU): a = 8, b = 10, A = 40 degrees (ambiguous case).
WE_SIN_B = float(10 * sin(40 * pi / 180) / 8)
WE_B1 = float(np.rad2deg(np.arcsin(WE_SIN_B)))
WE_3 = [WE_SIN_B, WE_B1, 180 - WE_B1]

# q-3-8-01: cos theta = -0.6 with 90 < theta < 180 degrees. arccos returns the second-quadrant angle directly.
THETA_01 = np.arccos(-0.6)
Q01 = [float(np.sin(THETA_01)), float(np.tan(THETA_01))]

# q-3-8-02: cos x = -0.4 on 0 <= x <= 2 pi: the second-quadrant solution and 2 pi minus it.
X1 = float(np.arccos(-0.4))
Q02 = [X1, float(2 * np.pi - X1)]

# q-3-8-03: triangle ABC with a = BC = 7 (opposite A), b = AC = 9 and A = 45 degrees.
SIN_B = 9 * np.sin(np.deg2rad(45)) / 7
B1 = np.rad2deg(np.arcsin(SIN_B))
B2 = 180 - B1
C1 = 180 - 45 - B1
C2 = 180 - 45 - B2
AREA1 = 0.5 * 7 * 9 * np.sin(np.deg2rad(C1))   # angle C lies between sides BC and AC
AREA2 = 0.5 * 7 * 9 * np.sin(np.deg2rad(C2))
Q03 = [SIN_B, B1, B2, C1, C2, AREA1, AREA2]

CHECKS = [
    ('we-3-8-unit-circle-1', WE_1, '-0.500; 0.866; -1.732'),
    ('we-3-8-unit-circle-2', WE_2, '0.36; 0.64; -0.800'),
    ('we-3-8-unit-circle-3', WE_3, '0.803; 53.5; 126.5'),
    ('q-3-8-01', Q01, None),
    ('q-3-8-02', Q02, None),
    ('q-3-8-03', Q03, None),
]

# R03: tangent extends beyond the unit circle; degrees and radians agree.
CHECKS.append(('we-r03-tangent-120', __import__('math').tan(2 * __import__('math').pi / 3), '-1.732'))
