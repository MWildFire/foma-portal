"""Numeric checks for topic 1-3-geometric-sequences (geometric sequences and series). Run python3 scripts/math-verify.py to evaluate them."""

import math
from fractions import Fraction


def nth_term(u1, r, n):
    """u_n = u_1 r^(n - 1), exact."""
    return Fraction(u1) * Fraction(r) ** (n - 1)


def sum_formula(u1, r, n):
    """S_n = u_1 (1 - r^n) / (1 - r), exact, for r not equal to 1."""
    return Fraction(u1) * (1 - Fraction(r) ** n) / (1 - Fraction(r))


def sum_loop(u1, r, n):
    """The same sum added term by term in a loop, to cross-check the formula."""
    total = Fraction(0)
    term = Fraction(u1)
    for _ in range(n):
        total += term
        term *= Fraction(r)
    return total


def checked_sum(u1, r, n):
    """The exact formula and the loop must agree; the value is returned for the checks."""
    by_formula = sum_formula(u1, r, n)
    by_loop = sum_loop(u1, r, n)
    assert by_formula == by_loop, (u1, r, n, by_formula, by_loop)
    return float(by_formula)


# Worked example 1 (EN and RU): u_1 = 8, r = 0.5. u_4 = 8 x 0.5^3 = 1 and S_4 = 8 + 4 + 2 + 1 = 15.
WE_1 = [float(nth_term(8, Fraction(1, 2), 4)), checked_sum(8, Fraction(1, 2), 4)]
assert WE_1 == [1.0, 15.0]

# Worked example 2 (EN and RU): sum of 3 x 2^(k-1) for k = 1 to 4. The terms are 3, 6, 12, 24; S_4 = 45.
TERMS_2 = [3 * 2 ** (k - 1) for k in range(1, 5)]
assert sum(TERMS_2) == 45 == checked_sum(3, 2, 4)
WE_2 = [float(value) for value in TERMS_2] + [checked_sum(3, 2, 4)]

# q-1-3-01: r = 1.2 / 2 = 0.6. Height after the 4th bounce is u_5 = 2 x 0.6^4 = 0.2592 (also by repeated multiplication).
R_BOUNCE = Fraction(12, 10) / 2
assert R_BOUNCE == Fraction(6, 10)
_height = Fraction(2)
for _ in range(4):
    _height *= R_BOUNCE
assert _height == nth_term(2, R_BOUNCE, 5)
Q1 = [float(R_BOUNCE), float(nth_term(2, R_BOUNCE, 5))]

# q-1-3-02: 7 days of visitors, u_1 = 400, r = 0.8. S_7 = 400 (1 - 0.8^7) / 0.2 = 1580.57, to the nearest whole number.
Q2 = checked_sum(400, Fraction(4, 5), 7)

# q-1-3-03: A_n is the sum of 500 x 0.7^j for j = 0 to n - 1, a geometric series with u_1 = 500 and r = 0.7.
R_MED = Fraction(7, 10)
A_3 = checked_sum(500, R_MED, 3)
assert A_3 == 1095.0
LEAST_N = next(n for n in range(1, 100) if checked_sum(500, R_MED, n) > 1600)
assert LEAST_N == 10
A_10 = checked_sum(500, R_MED, 10)
# The figures printed in the markscheme: A_9 = 1599.4, A_10 = 1619.6, and ln 0.04 / ln 0.7 = 9.02.
assert abs(checked_sum(500, R_MED, 9) - 1599.4) < 0.05
assert abs(A_10 - 1619.6) < 0.05
assert abs(math.log(0.04) / math.log(0.7) - 9.02) <= 0.005
Q3 = [A_3, float(LEAST_N), A_10]

CHECKS = [
    ('we-1-3-geometric-sequences-1', WE_1, '1; 15'),
    ('we-1-3-geometric-sequences-2', WE_2, '3; 6; 12; 24; 45'),
    ('q-1-3-01', Q1, None),
    ('q-1-3-02', Q2, None),
    ('q-1-3-03', Q3, None),
]
