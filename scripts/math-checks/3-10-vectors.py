"""Numeric checks for topic 3-10-vectors (vectors: components, magnitude, unit vectors, position vectors).
Run: scripts/math-verify.py 3-10-vectors"""

import numpy as np


def flat(*parts):
    return [float(v) for part in parts for v in np.atleast_1d(part)]


# Worked example (EN and RU): A(1, -2, 4) and B(5, 1, -2).
A_WE = np.array([1.0, -2.0, 4.0])
B_WE = np.array([5.0, 1.0, -2.0])
AB_WE = B_WE - A_WE

# q-3-10-01: P(-1, 2, 5) and Q(2, -2, 1); distance PQ.
PQ = np.array([2.0, -2.0, 1.0]) - np.array([-1.0, 2.0, 5.0])

# q-3-10-02: u = i + 2j + 2k; positive k with |k u| = 10.
U = np.array([1.0, 2.0, 2.0])
K = 10.0 / np.linalg.norm(U)

# q-3-10-03: position vectors a and b of the points A and B.
A = np.array([2.0, -1.0, 3.0])
B = np.array([5.0, 3.0, -2.0])
AB = B - A
MID = (A + B) / 2
UNIT_AB = AB / np.linalg.norm(AB)
C = A + 2 * AB
D = A - AB / 2

CHECKS = [
    ('we-3-10-vectors-1', flat(AB_WE), '4; 3; -6'),
    ('we-3-10-vectors-2', float(np.linalg.norm(AB_WE)), '7.810'),
    ('we-3-10-vectors-3', flat(AB_WE / np.linalg.norm(AB_WE)), '0.512; 0.384; -0.768'),
    ('q-3-10-01', float(np.linalg.norm(PQ)), None),
    ('q-3-10-02', float(K), None),
    ('q-3-10-03', flat(AB, np.linalg.norm(AB), MID, UNIT_AB, C, D), None),
]
