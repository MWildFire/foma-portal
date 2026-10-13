"""Numeric checks for topic 3-11-vector-line (vector equation of a line). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Worked example (EN and RU): line through A(2, -1, 4) and B(5, 3, -2); P(8, 7, -8) lies on it; midpoint of AB.
A = np.array([2.0, -1.0, 4.0])
B = np.array([5.0, 3.0, -2.0])
P = np.array([8.0, 7.0, -8.0])
D = B - A                                    # direction AB
LAM = (P[0] - A[0]) / D[0]                   # the first component fixes lambda
assert np.allclose(A + LAM * D, P)           # P lies on the line
WE_1 = list(D)                               # 3; 4; -6
WE_2 = [LAM, *(A + LAM * D)[1:]]             # 2; 7; -8
WE_3 = list(A + 0.5 * D)                     # 3.5; 1; 1

# q-3-11-01: the line through A(1, 2, -1) and B(4, -1, 3) meets the plane z = 0.
A1 = np.array([1.0, 2.0, -1.0])
D1 = np.array([4.0, -1.0, 3.0]) - A1
T1 = -A1[2] / D1[2]
Q1_POINT = list(A1 + T1 * D1)                # 1.75; 1.25; 0

# q-3-11-02: r = (3, -2) + lambda(4, 1): gradient and y-intercept.
D2 = np.array([4.0, 1.0])
A2 = np.array([3.0, -2.0])
GRADIENT = D2[1] / D2[0]                     # 0.25
LAM2 = -A2[0] / D2[0]                        # the point where x = 0
Y_INTERCEPT = A2[1] + LAM2 * D2[1]           # -2.75

# q-3-11-03: zip lines. L1 runs from A3(0, 0, 40) to B3(120, 60, 0); direction reduced to highest common factor 1.
A3 = np.array([0.0, 0.0, 40.0])
B3 = np.array([120.0, 60.0, 0.0])
G = int(np.gcd.reduce(np.abs((B3 - A3).astype(int))))
D3 = (B3 - A3) / G                           # (6, 3, -2)


def L1(t):
    return A3 + t * D3


# (b) point of L1 at height 25.
T_HEIGHT = (25.0 - A3[2]) / D3[2]            # 7.5
C = L1(T_HEIGHT)                             # (45, 22.5, 25)

# (c) L2 = (35, 11, 20) + mu(-5, 4, 10). Solve x and y for t and mu, then check z.
A_L2 = np.array([35.0, 11.0, 20.0])
D_L2 = np.array([-5.0, 4.0, 10.0])
M = np.array([[D3[0], -D_L2[0]], [D3[1], -D_L2[1]]])
T_C, MU_C = np.linalg.solve(M, A_L2[:2] - A3[:2])
assert np.isclose(L1(T_C)[2], A_L2[2] + MU_C * D_L2[2])   # third component agrees: the lines meet
INTERSECTION = L1(T_C)                       # (30, 15, 30)

# (d) L3 through Q(20, 0, 31), parallel to L1: the point with x = 50.
Q = np.array([20.0, 0.0, 31.0])
NU = (50.0 - Q[0]) / D3[0]                   # 5
P_L3 = Q + NU * D3                           # (50, 15, 21)

# (e) L2 meets the ground z = 0.
MU_GROUND = (0.0 - A_L2[2]) / D_L2[2]        # -2
E = A_L2 + MU_GROUND * D_L2                  # (45, 3, 0)

CHECKS = [
    ('we-3-11-vector-line-1', WE_1, '3; 4; -6'),
    ('we-3-11-vector-line-2', WE_2, '2; 7; -8'),
    ('we-3-11-vector-line-3', WE_3, '3.5; 1; 1'),
    ('q-3-11-01', Q1_POINT, None),
    ('q-3-11-02', [GRADIENT, Y_INTERCEPT], None),
    ('q-3-11-03', list(D3) + list(C) + list(INTERSECTION) + list(P_L3) + list(E), None),
]
