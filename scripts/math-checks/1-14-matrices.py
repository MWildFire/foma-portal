"""Numeric checks for topic 1-14-matrices (Matrices). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
import sympy as sp

# Worked example (EN and RU): A = [[2, 1], [1, 1]], b = (5, 3), B = [[1, 0], [-2, 3]].
A = np.array([[2.0, 1.0], [1.0, 1.0]])
B = np.array([[1.0, 0.0], [-2.0, 3.0]])
b = np.array([5.0, 3.0])

WE_1 = [float(np.linalg.det(A))]                                   # det A
WE_2 = [float(v) for v in np.linalg.inv(A).ravel()]                # A^(-1), row by row
WE_3 = [float(v) for v in np.linalg.solve(A, b)]                   # x = A^(-1) b
WE_4 = [float(v) for v in (A @ B).ravel()]                         # AB
WE_5 = [float(v) for v in (B @ A).ravel()]                         # BA
assert not np.allclose(A @ B, B @ A)                               # the order of the factors matters

# q-1-14-01: the value of k for which [[k, 2], [1, 3]] has no inverse, found symbolically.
k = sp.symbols('k')
k_zero = float(sp.solve(sp.Matrix([[k, 2], [1, 3]]).det(), k)[0])
assert abs(np.linalg.det(np.array([[k_zero, 2.0], [1.0, 3.0]]))) < 1e-9

# q-1-14-02: 3x - y = 7 and x + 2y = 4, written as M x = b and solved with the inverse of M.
M = np.array([[3.0, -1.0], [1.0, 2.0]])
rhs = np.array([7.0, 4.0])
x_sol = [float(v) for v in np.linalg.inv(M) @ rhs]

# q-1-14-03: cafe recipe matrix R (rows: espresso shots, milk units; columns: latte, flat white).
R = np.array([[1.0, 2.0], [3.0, 1.0]])
O = np.array([[4.0, 1.0], [2.0, 3.0]])     # rows: latte, flat white; columns: Monday, Tuesday
stock = np.array([8.0, 9.0])               # 8 shots and 9 units of milk
det_R = float(np.linalg.det(R))
inv_R = [float(v) for v in np.linalg.inv(R).ravel()]
lattes_flat = [float(v) for v in np.linalg.inv(R) @ stock]
RO = [float(v) for v in (R @ O).ravel()]

CHECKS = [
    ('we-1-14-matrices-1', WE_1, '1'),
    ('we-1-14-matrices-2', WE_2, '1; -1; -1; 2'),
    ('we-1-14-matrices-3', WE_3, '2; 1'),
    ('we-1-14-matrices-4', WE_4, '0; 3; -1; 3'),
    ('we-1-14-matrices-5', WE_5, '2; 1; -1; 1'),
    ('q-1-14-01', k_zero, None),
    ('q-1-14-02', x_sol, None),
    ('q-1-14-03', [det_R] + inv_R + lattes_flat + RO, None),
]
