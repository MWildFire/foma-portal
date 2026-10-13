"""Numeric checks for topic 1-8-technology-equations (solving equations with technology). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
import sympy as sp

R = sp.Rational
x = sp.symbols('x')


def real_roots(coefficients):
    """Real roots of a polynomial (highest power first), sorted; each one is substituted back into the polynomial."""
    degree = len(coefficients) - 1
    found = []
    for root in np.roots(coefficients):
        if abs(root.imag) < 1e-9:
            value = float(root.real)
            residual = sum(c * value ** (degree - i) for i, c in enumerate(coefficients))
            assert abs(residual) < 1e-9, (coefficients, value, residual)
            found.append(value)
    return sorted(found)


# Worked example, step 2 (EN and RU): 2x + y - z = 4.5, x - 3y + 2z = 2, 3x + 2y + z = 12.5.
A_WE = np.array([[2.0, 1.0, -1.0], [1.0, -3.0, 2.0], [3.0, 2.0, 1.0]])
B_WE = np.array([4.5, 2.0, 12.5])
SOL_WE = np.linalg.solve(A_WE, B_WE)
assert np.abs(A_WE @ SOL_WE - B_WE).max() < 1e-9                       # substitution into all three equations
assert np.abs(A_WE @ np.array([2.5, 1.5, 2.0]) - B_WE).max() < 1e-9    # the printed values satisfy the system
EXACT_WE = sp.Matrix([[2, 1, -1], [1, -3, 2], [3, 2, 1]]).LUsolve(sp.Matrix([R(9, 2), 2, R(25, 2)]))
assert list(EXACT_WE) == [R(5, 2), R(3, 2), 2]

# Worked example, Reveal (EN and RU): the only real root of x^3 - x - 1 = 0.
WE_CUBIC = real_roots([1.0, 0.0, -1.0, -1.0])
assert len(WE_CUBIC) == 1
assert len(sp.real_roots(sp.Poly(x ** 3 - x - 1, x))) == 1

# q-1-8-01 (P1): coffee c, fresh juice j and croissant k (AED), from three daily sales records.
A_Q1 = np.array([[2.0, 1.0, 3.0], [1.0, 2.0, 1.0], [3.0, 1.0, 2.0]])
B_Q1 = np.array([53.6, 36.45, 61.45])
SOL_Q1 = np.linalg.solve(A_Q1, B_Q1)
assert np.abs(A_Q1 @ SOL_Q1 - B_Q1).max() < 1e-9
assert np.abs(A_Q1 @ np.array([13.75, 8.40, 5.90]) - B_Q1).max() < 1e-9   # the printed answers
EXACT_Q1 = sp.Matrix([[2, 1, 3], [1, 2, 1], [3, 1, 2]]).LUsolve(sp.Matrix([R(536, 10), R(3645, 100), R(6145, 100)]))
assert list(EXACT_Q1) == [R(55, 4), R(42, 5), R(59, 10)]   # 13.75, 8.4 and 5.9

# q-1-8-02 (P1): every real root of x^3 - 4x + 1 = 0.
ROOTS_Q2 = real_roots([1.0, 0.0, -4.0, 1.0])
assert len(ROOTS_Q2) == 3
assert len(sp.real_roots(sp.Poly(x ** 3 - 4 * x + 1, x))) == 3

# q-1-8-03 (P2), parts (a) and (b): P(x) = a x^2 + b x + c through (1, 2.3), (2, 3.9) and (4, 3.1).
A_Q3 = np.array([[1.0, 1.0, 1.0], [4.0, 2.0, 1.0], [16.0, 4.0, 1.0]])
B_Q3 = np.array([2.3, 3.9, 3.1])
ABC_NUMERIC = np.linalg.solve(A_Q3, B_Q3)
assert np.abs(A_Q3 @ ABC_NUMERIC - B_Q3).max() < 1e-9
EXACT_ABC = sp.Matrix([[1, 1, 1], [4, 2, 1], [16, 4, 1]]).LUsolve(sp.Matrix([R(23, 10), R(39, 10), R(31, 10)]))
A_EX, B_EX, C_EX = list(EXACT_ABC)
assert (A_EX, B_EX, C_EX) == (R(-2, 3), R(18, 5), R(-19, 30))
assert np.allclose(ABC_NUMERIC, [-2 / 3, 3.6, -19 / 30])
P_EXACT = A_EX * x ** 2 + B_EX * x + C_EX
assert [P_EXACT.subs(x, value) for value in (1, 2, 4)] == [R(23, 10), R(39, 10), R(31, 10)]

# q-1-8-03 (P2), part (c): P(x) = 0 is 20x^2 - 108x + 19 = 0 after multiplying by -30; each root is substituted back.
ROOTS_Q3C = sorted(float(sp.N(root, 15)) for root in sp.solve(-30 * P_EXACT, x))
for value in ROOTS_Q3C:
    assert abs(float(P_EXACT.subs(x, value))) < 1e-9

# q-1-8-03 (P2), part (d): Q(x) = 3x - C(x) with C(x) = 0.1x^3 - 0.9x^2 + 2.4x + 0.5, so -10 Q(x) = x^3 - 9x^2 - 6x + 5.
Q_EXACT = sp.expand(3 * x - (R(1, 10) * x ** 3 - R(9, 10) * x ** 2 + R(24, 10) * x + R(1, 2)))
assert sp.expand(-10 * Q_EXACT - (x ** 3 - 9 * x ** 2 - 6 * x + 5)) == 0
ALL_Q3D = real_roots([1.0, -9.0, -6.0, 5.0])
assert len(ALL_Q3D) == 3
assert len(sp.real_roots(sp.Poly(x ** 3 - 9 * x ** 2 - 6 * x + 5, x))) == 3
ROOTS_Q3D = [value for value in ALL_Q3D if value > 0]   # part (e): the negative root is not used
assert len(ROOTS_Q3D) == 2

CHECKS = [
    ('we-1-8-technology-equations-1', list(SOL_WE), '2.5; 1.5; 2'),
    ('we-1-8-technology-equations-2', WE_CUBIC[0], '1.325'),
    ('q-1-8-01', list(SOL_Q1), None),
    ('q-1-8-02', ROOTS_Q2, None),
    ('q-1-8-03', [A_EX, B_EX, C_EX] + ROOTS_Q3C + ROOTS_Q3D, None),
]
