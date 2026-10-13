"""Numeric checks for topic 1-2-arithmetic-sequences (arithmetic sequences and series). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction


def nth_term(u1, d, n):
    """u_n = u_1 + (n - 1) d, exact."""
    return u1 + (n - 1) * d


def sum_formula(u1, d, n):
    """S_n = n/2 (2 u_1 + (n - 1) d), exact."""
    return Fraction(n, 2) * (2 * u1 + (n - 1) * d)


def sum_loop(u1, d, n):
    """The same sum added term by term in a loop, to cross-check the formula."""
    total = 0
    for k in range(1, n + 1):
        total += u1 + (k - 1) * d
    return total


def checked_sum(u1, d, n):
    """The exact formula and the loop must agree; the value is returned for the checks."""
    by_formula = sum_formula(u1, d, n)
    by_loop = sum_loop(u1, d, n)
    assert by_formula == by_loop, (u1, d, n, by_formula, by_loop)
    return float(by_formula)


# Worked example 1 (EN and RU): u_1 = 5, d = 3. u_10 = 5 + 9 x 3 = 32 and S_10 = 185.
WE_1 = [float(nth_term(5, 3, 10)), checked_sum(5, 3, 10)]

# Worked example 2 (EN and RU): sum of (2k + 1) for k = 1 to 4. The terms are 3, 5, 7, 9; S_4 = 24.
TERMS_2 = [2 * k + 1 for k in range(1, 5)]
WE_2 = [float(value) for value in TERMS_2] + [checked_sum(3, 2, 4)]
assert sum(TERMS_2) == checked_sum(3, 2, 4)

# q-1-2-01: d = 11 - 7 = 4 and u_20 = 7 + 19 x 4 = 83 (u_20 also found by repeated addition).
_term = 7
for _ in range(19):
    _term += 4
assert _term == nth_term(7, 4, 20) == 83
Q1 = [float(11 - 7), float(nth_term(7, 4, 20))]

# q-1-2-02: 25 rows, u_1 = 18, d = 2; S_25 = 25/2 x (18 + 66) = 1050.
Q2 = checked_sum(18, 2, 25)

# q-1-2-03 (a): u_12 = 120 + 11 x 8 = 208.
U12 = nth_term(120, 8, 12)
assert U12 == 208
# q-1-2-03 (b): S_12 for u_1 = 120, d = 8.
S12 = checked_sum(120, 8, 12)
# q-1-2-03 (c): percentage error of the model value 208 against the actual 196, relative to 196.
PERCENT_ERROR = float(Fraction(U12 - 196, 196) * 100)
# q-1-2-03 (d): first week n with the model value above 250.
FIRST_WEEK = next(n for n in range(1, 200) if nth_term(120, 8, n) > 250)
assert nth_term(120, 8, FIRST_WEEK - 1) <= 250 < nth_term(120, 8, FIRST_WEEK) and FIRST_WEEK == 18
Q3 = [float(U12), S12, PERCENT_ERROR, float(FIRST_WEEK)]

CHECKS = [
    ('we-1-2-arithmetic-sequences-1', WE_1, '32; 185'),
    ('we-1-2-arithmetic-sequences-2', WE_2, '3; 5; 7; 9; 24'),
    ('q-1-2-01', Q1, None),
    ('q-1-2-02', Q2, None),
    ('q-1-2-03', Q3, None),
]
