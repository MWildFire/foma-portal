"""Numeric checks for topic 3-13-scalar-vector-product (scalar and vector products). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np


def angle_deg(u, w):
    """Angle between two vectors in degrees."""
    u = np.asarray(u, dtype=float)
    w = np.asarray(w, dtype=float)
    return float(np.degrees(np.arccos(np.dot(u, w) / (np.linalg.norm(u) * np.linalg.norm(w)))))


def acute_angle_deg(u, w):
    """Acute angle between two lines with direction vectors u and w, in degrees."""
    u = np.asarray(u, dtype=float)
    w = np.asarray(w, dtype=float)
    return float(np.degrees(np.arccos(abs(np.dot(u, w)) / (np.linalg.norm(u) * np.linalg.norm(w)))))


# Worked example (EN and RU): v = (3, 0, 4), w = (1, 2, 2).
V = np.array([3.0, 0.0, 4.0])
W = np.array([1.0, 2.0, 2.0])
CROSS = np.cross(V, W)                       # (-8, -2, 6)
WE_1 = [float(np.dot(V, W))]                 # 11
WE_2 = [
    float(np.linalg.norm(V)),
    float(np.linalg.norm(W)),
    float(np.linalg.norm(V) * np.linalg.norm(W)),
    float(np.dot(V, W) / (np.linalg.norm(V) * np.linalg.norm(W))),
    angle_deg(V, W),
]                                            # 5; 3; 15; 0.733; 42.8
WE_3 = [*CROSS, float(np.dot(CROSS, CROSS)), float(np.linalg.norm(CROSS))]   # -8; -2; 6; 104; 10.2

# q-3-13-01: angle between v = (2, -1, 3) and w = (1, 4, -2).
Q1_ANGLE = angle_deg([2.0, -1.0, 3.0], [1.0, 4.0, -2.0])                     # 117.81

# q-3-13-02: acute angle between the lines with directions (1, 2, 2) and (-2, 1, -2).
Q2_ANGLE = acute_angle_deg([1.0, 2.0, 2.0], [-2.0, 1.0, -2.0])               # 63.61

# q-3-13-03: roof face OAB with O(0, 0, 0), A(2, 0, 2), B(4, 8, 8).
OA = np.array([2.0, 0.0, 2.0])
OB = np.array([4.0, 8.0, 8.0])
AB = OB - OA
Q3_DOT = float(np.dot(OA, OB))               # 24
Q3_ANGLE_AOB = angle_deg(OA, OB)             # 45.0
Q3_CROSS = list(np.cross(OA, OB))            # -16; -8; 16
Q3_AREA = 0.5 * float(np.linalg.norm(np.cross(OA, OB)))          # 12
Q3_ACUTE = acute_angle_deg(OA, AB)           # 56.31

CHECKS = [
    ('we-3-13-scalar-vector-product-1', WE_1, '11'),
    ('we-3-13-scalar-vector-product-2', WE_2, '5; 3; 15; 0.733; 42.8'),
    ('we-3-13-scalar-vector-product-3', WE_3, '-8; -2; 6; 104; 10.2'),
    ('q-3-13-01', Q1_ANGLE, None),
    ('q-3-13-02', Q2_ANGLE, None),
    ('q-3-13-03', [Q3_DOT, Q3_ANGLE_AOB, *Q3_CROSS, Q3_AREA, Q3_ACUTE], None),
]
