"""Numeric checks for topic 1-15-eigen-2x2 (Eigenvalues and eigenvectors of 2 x 2 matrices). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

import numpy as np
import sympy as sp


def eigen_summary(matrix):
    """Eigenvalues, largest first, each with an integer eigenvector (no common factor, positive first entry)."""
    values, vectors = np.linalg.eig(matrix)
    order = np.argsort(-values.real)
    eigenvalues = [float(values[i].real) for i in order]
    eigenvectors = []
    for i in order:
        w = vectors[:, i].real
        ratio = Fraction(float(w[0] / w[1])).limit_denominator(100)
        p, q = ratio.numerator, ratio.denominator
        if p < 0:
            p, q = -p, -q
        eigenvectors.append((p, q))
    return eigenvalues, eigenvectors


def check_pairs(matrix, values, vectors):
    """Each eigenvalue solves det(M - lambda I) = 0, and each integer vector satisfies M v = lambda v."""
    for lam, (p, q) in zip(values, vectors):
        v = np.array([p, q], dtype=float)
        assert abs(np.linalg.det(matrix - lam * np.eye(2))) < 1e-9
        assert np.allclose(matrix @ v, lam * v)


# Worked example (EN and RU): A = [[5, -4], [2, -1]], characteristic polynomial lambda^2 - 4 lambda + 3.
A = np.array([[5.0, -4.0], [2.0, -1.0]])
lam_symbol = sp.symbols('lam')
char_poly = sp.expand(sp.Matrix([[5 - lam_symbol, -4], [2, -1 - lam_symbol]]).det())
assert sp.Poly(char_poly, lam_symbol).all_coeffs() == [1, -4, 3]
eig_A, vec_A = eigen_summary(A)                                   # [3, 1]; [(2, 1), (1, 1)]
check_pairs(A, eig_A, vec_A)
P = np.array(vec_A, dtype=float).T                                # columns are the eigenvectors
D = np.diag(eig_A)
P_inv = np.linalg.inv(P)
assert np.allclose(P @ D @ P_inv, A)
assert np.allclose(P @ (D @ D) @ P_inv, np.linalg.matrix_power(A, 2))

WE_1 = eig_A                                                      # 3; 1
WE_2 = [float(x) for pair in vec_A for x in pair]                 # 2; 1; 1; 1
WE_3 = [float(x) for x in A @ np.array(vec_A[0], dtype=float)]    # 6; 3
WE_4 = [float(x) for x in P_inv.ravel()]                          # 1; -1; -1; 2
WE_5 = [float(x) for x in np.linalg.matrix_power(A, 2).ravel()]   # 17; -16; 8; -7
WE_6 = [float(x) for x in np.array(eig_A) ** 2]                   # 9; 1

# q-1-15-01: eigenvalues of [[1, 3], [2, 2]].
Q1_matrix = np.array([[1.0, 3.0], [2.0, 2.0]])
Q1, _ = eigen_summary(Q1_matrix)                                  # [4, -1]
check_pairs(Q1_matrix, Q1, eigen_summary(Q1_matrix)[1])

# q-1-15-02: C = [[2, 3], [4, 1]] has eigenvalue 5 with eigenvector (1, k); the other eigenvalue.
C = np.array([[2.0, 3.0], [4.0, 1.0]])
vals_C, vecs_C = np.linalg.eig(C)
idx = int(np.argmin(np.abs(vals_C - 5.0)))
w = vecs_C[:, idx].real
k_value = float(w[1] / w[0])                                      # the eigenvector is (1, k)
other = float(vals_C[1 - idx].real)                               # -2
assert np.allclose(C @ np.array([1.0, k_value]), 5.0 * np.array([1.0, k_value]))
assert abs(other - (np.trace(C) - 5.0)) < 1e-9

# q-1-15-03: population model x_(n+1) = A x_n with A = [[0.8, 0.3], [0.2, 0.7]], x_0 = (100, 0).
A3 = np.array([[0.8, 0.3], [0.2, 0.7]])
vals3, vecs3 = eigen_summary(A3)                                  # [1, 0.5]; [(3, 2), (1, -1)]
check_pairs(A3, vals3, vecs3)
P3 = np.array(vecs3, dtype=float).T                               # larger eigenvalue first
P3_inv = np.linalg.inv(P3)                                        # 0.2, 0.2, 0.4, -0.6
x0 = np.array([100.0, 0.0])


def centre(n):
    return float((np.linalg.matrix_power(A3, n) @ x0)[0])


for n in range(11):
    assert abs(centre(n) - (60 + 40 * 0.5 ** n)) < 1e-9          # c_n = 60 + 40 (0.5)^n
c3 = centre(3)                                                    # 65
least_n = next(n for n in range(200) if centre(n) < 62)           # 5

Q3 = [vals3[0], vals3[1], *[float(x) for x in vecs3[0]], *[float(x) for x in vecs3[1]],
      *[float(x) for x in P3_inv.ravel()], c3, float(least_n)]

CHECKS = [
    ('we-1-15-eigen-2x2-1', WE_1, '3; 1'),
    ('we-1-15-eigen-2x2-2', WE_2, '2; 1; 1; 1'),
    ('we-1-15-eigen-2x2-3', WE_3, '6; 3'),
    ('we-1-15-eigen-2x2-4', WE_4, '1; -1; -1; 2'),
    ('we-1-15-eigen-2x2-5', WE_5, '17; -16; 8; -7'),
    ('we-1-15-eigen-2x2-6', WE_6, '9; 1'),
    ('q-1-15-01', Q1, None),
    ('q-1-15-02', [k_value, other], None),
    ('q-1-15-03', Q3, None),
]
