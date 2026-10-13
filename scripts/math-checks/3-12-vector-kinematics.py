"""Numeric checks for topic 3-12-vector-kinematics (vectors in kinematics). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from scipy import optimize

# Worked example (EN and RU): r0 = (2, 5, 10) and constant velocity v = (3, -1, 4).
R0 = np.array([2.0, 5.0, 10.0])
V = np.array([3.0, -1.0, 4.0])
R4 = R0 + 4 * V                              # (14, 1, 26)
DISP = R4 - R0                               # displacement from t = 0 to t = 4
WE_1 = list(R4)                              # 14; 1; 26
WE_2 = [float(np.dot(V, V)), float(np.linalg.norm(V))]            # 26; 5.10
WE_3 = list(DISP)                            # 12; -4; 16
WE_4 = [float(np.dot(DISP, DISP)), float(np.linalg.norm(DISP))]   # 416; 20.40

# q-3-12-01: drone r = (4, 6, 20) + t(2, -3, 1), speed.
SPEED_DRONE = float(np.linalg.norm([2.0, -3.0, 1.0]))             # 3.7417

# q-3-12-02: r_A = t(3, 1) and r_B = (12, 6) + t(-1, -1). Their difference is P0 + t P1.
P0 = np.array([0.0, 0.0]) - np.array([12.0, 6.0])
P1 = np.array([3.0, 1.0]) - np.array([-1.0, -1.0])
T_COLLIDE = -P0[0] / P1[0]                   # from the first component
assert np.allclose(P0 + T_COLLIDE * P1, 0.0)  # the second component agrees at the same t
COLLISION = list(T_COLLIDE * np.array([3.0, 1.0]))   # position (9, 3)

# q-3-12-03: robot r(t) = (t^3 - 6t^2 + 9t, 2t^2 - 8t).


def r(t):
    return np.array([t**3 - 6 * t**2 + 9 * t, 2 * t**2 - 8 * t])


def v(t):
    return np.array([3 * t**2 - 12 * t + 9, 4 * t - 8])


def speed(t):
    return float(np.linalg.norm(v(t)))


V0 = list(v(0.0))                            # 9; -8
SPEED0 = speed(0.0)                          # 12.04
ROOTS = sorted(float(x) for x in np.roots([3.0, -12.0, 9.0]))     # t = 1 and t = 3
POS_X_ZERO = [c for t0 in ROOTS for c in r(t0)]                   # 4; -6; 0; -6
m1 = optimize.minimize_scalar(speed, bounds=(0.0, 2.0), method='bounded', options={'xatol': 1e-10})
m2 = optimize.minimize_scalar(speed, bounds=(2.0, 4.0), method='bounded', options={'xatol': 1e-10})
MIN_SPEED = min(m1.fun, m2.fun)              # 2.98142
T_MIN = [m1.x, m2.x]                         # 5/3 and 7/3
grid = np.linspace(0.0, 4.0, 400001)         # independent grid check of the minimum on 0 <= t <= 4
assert abs(np.hypot(3 * grid**2 - 12 * grid + 9, 4 * grid - 8).min() - MIN_SPEED) < 1e-6
assert abs(m1.x - 5 / 3) < 1e-6 and abs(m2.x - 7 / 3) < 1e-6
DIST4 = float(np.linalg.norm(r(4.0)))        # 4

CHECKS = [
    ('we-3-12-vector-kinematics-1', WE_1, '14; 1; 26'),
    ('we-3-12-vector-kinematics-2', WE_2, '26; 5.10'),
    ('we-3-12-vector-kinematics-3', WE_3, '12; -4; 16'),
    ('we-3-12-vector-kinematics-4', WE_4, '416; 20.40'),
    ('q-3-12-01', SPEED_DRONE, None),
    ('q-3-12-02', [T_COLLIDE, COLLISION[0], COLLISION[1]], None),
    ('q-3-12-03', V0 + [SPEED0] + POS_X_ZERO + [MIN_SPEED] + T_MIN + [DIST4], None),
]
