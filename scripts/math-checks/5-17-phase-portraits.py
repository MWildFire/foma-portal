"""Numeric checks for topic 5-17-phase-portraits (Phase portraits of coupled linear systems).

Eigenvalues and eigenvectors are computed with numpy.linalg; every printed value is compared within half a unit of its
last printed decimal (see scripts/math-verify.py).
"""

import math

import numpy as np


def eig_largest_first(matrix):
    """Real parts of the eigenvalues, largest first, with the eigenvectors (columns) in the same order."""
    values, vectors = np.linalg.eig(np.array(matrix, dtype=float))
    order = np.argsort(-values.real)
    return values[order].real, vectors[:, order].real


# Worked example (EN and RU): dx/dt = x + 2y, dy/dt = 3x + 2y, so A = [[1, 2], [3, 2]].
WE_A = np.array([[1.0, 2.0], [3.0, 2.0]])
WE_TRACE = float(np.trace(WE_A))                            # 3
WE_DET = float(np.linalg.det(WE_A))                         # -4
WE_EIGS, WE_VECS = eig_largest_first(WE_A)                  # 4 and -1
SLOPE_4 = WE_VECS[1, 0] / WE_VECS[0, 0]                     # 1.5: the eigen-direction (2, 3)
SLOPE_M1 = WE_VECS[1, 1] / WE_VECS[0, 1]                    # -1: the eigen-direction (1, -1)

# q-5-17-01 and its markscheme: B = [[-3, 1], [2, -2]].
B = np.array([[-3.0, 1.0], [2.0, -2.0]])
Q1_EIGS, _ = eig_largest_first(B)                           # -1 and -4
B_COEFFS = [float(-np.trace(B)), float(np.linalg.det(B))]   # 5 and 4 in lam^2 + 5 lam + 4 = 0


# q-5-17-02: the greatest integer p for which [[p, 5], [-2, -p]] has trace 0 and a positive determinant.
def is_centre(p):
    m = np.array([[p, 5.0], [-2.0, -p]])
    return abs(np.trace(m)) < 1e-12 and np.linalg.det(m) > 1e-12


Q2_P = max(p for p in range(-10, 11) if is_centre(p))       # 3

# q-5-17-03: C = [[-1, 2], [-2, -1]].
C = np.array([[-1.0, 2.0], [-2.0, -1.0]])
ROOTS = np.linalg.eigvals(C)                                # -1 + 2i and -1 - 2i
RE = float(ROOTS.real[0])                                   # -1
IM = float(np.max(ROOTS.imag))                              # 2
PERIOD = 2 * math.pi / IM                                   # pi = 3.14159...
HALF_LIFE = math.log(2) / -RE                               # ln 2 = 0.693147...
TRACE_C, DET_C = float(np.trace(C)), float(np.linalg.det(C))  # -2 and 5
DISC = TRACE_C ** 2 - 4 * DET_C                             # T^2 - 4D = -16
SQUARE_CONST = -float(np.polyval([1.0, -TRACE_C, DET_C], -1.0))   # (lam + 1)^2 = -4

CHECKS = [
    ('we-5-17-phase-portraits-1', [WE_TRACE, WE_DET], '3; -4'),
    ('we-5-17-phase-portraits-2', list(WE_EIGS), '4; -1'),
    ('we-5-17-phase-portraits-3', [SLOPE_4, SLOPE_M1, 2.0, 2.0 * SLOPE_4, 1.0, SLOPE_M1], '1.5; -1; 2; 3; 1; -1'),
    ('q-5-17-01', list(Q1_EIGS), None),
    ('we-5-17-phase-portraits-4', B_COEFFS, '5; 4'),                       # markscheme of q-5-17-01
    ('q-5-17-02', Q2_P, None),
    ('q-5-17-03', [TRACE_C, DET_C, RE, IM, PERIOD, HALF_LIFE], None),
    ('we-5-17-phase-portraits-5', [DISC, SQUARE_CONST], '-16; -4'),         # markscheme of q-5-17-03 (b) and (e)
]
