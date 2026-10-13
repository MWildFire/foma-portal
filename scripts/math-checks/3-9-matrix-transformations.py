"""Numeric checks for topic 3-9-matrix-transformations (geometric transformations with matrices).
Run: scripts/math-verify.py 3-9-matrix-transformations"""

import numpy as np
import sympy as sp


def flat(*parts):
    return [float(v) for part in parts for v in np.atleast_1d(part)]


def polygon_area(points):
    """Shoelace formula for a polygon whose vertices are listed in order."""
    pts = np.asarray(points, dtype=float)
    x, y = pts[:, 0], pts[:, 1]
    return float(abs(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1))) / 2)


def rotation(degrees):
    t = np.radians(degrees)
    return np.array([[np.cos(t), -np.sin(t)], [np.sin(t), np.cos(t)]])


# Worked example (EN and RU): M = [[2, -1], [1, 1]], P(1, 2), triangle A(1, 0), B(3, 0), C(2, 1).
M_WE = np.array([[2.0, -1.0], [1.0, 1.0]])
TRIANGLE = np.array([[1.0, 0.0], [3.0, 0.0], [2.0, 1.0]])

# q-3-9-01: P(4, 1) rotated anticlockwise through 60 degrees about the origin.
ROT_P = rotation(60) @ np.array([4.0, 1.0])

# q-3-9-02: A = [[3, -1], [2, 2]] acting on a region of area 4.
A = np.array([[3.0, -1.0], [2.0, 2.0]])

# q-3-9-03: T = S R, where R is a rotation through 90 degrees anticlockwise and S stretches by 3 parallel to the y-axis.
R = rotation(90)
S = np.array([[1.0, 0.0], [0.0, 3.0]])
M_T = S @ R
SQUARE = np.array([[0.0, 0.0], [1.0, 0.0], [1.0, 1.0], [0.0, 1.0]])
K = sp.symbols('k')
K_ROOTS = sorted(float(root) for sign in (5, -5) for root in sp.solve(sp.Eq(K - 2, sign), K))

CHECKS = [
    ('we-3-9-matrix-transformations-1', float(np.linalg.det(M_WE)), '3'),
    ('we-3-9-matrix-transformations-2', flat(M_WE @ np.array([1.0, 2.0])), '0; 3'),
    ('we-3-9-matrix-transformations-3', flat(polygon_area(TRIANGLE), polygon_area(TRIANGLE @ M_WE.T)), '1; 3'),
    ('q-3-9-01', flat(ROT_P), None),
    ('q-3-9-02', flat(np.linalg.det(A), abs(np.linalg.det(A)) * 4), None),
    ('q-3-9-03', flat(M_T @ np.array([2.0, 5.0]), polygon_area(SQUARE @ M_T.T),
                      np.linalg.solve(M_T, np.array([6.0, -9.0])), K_ROOTS), None),
]
