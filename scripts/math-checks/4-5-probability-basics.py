"""Numeric checks for topic 4-5-probability-basics (Probability basics). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction
from itertools import product

from sympy import isprime

# Worked example (EN and RU): spinner with sectors 1 to 8, A = multiple of 3; 60 spins.
SPINNER = range(1, 9)
A_SPIN = [x for x in SPINNER if x % 3 == 0]
P_A = Fraction(len(A_SPIN), len(SPINNER))
WE_1 = [float(P_A), float(1 - P_A), float(60 * P_A)]

# q-4-5-01: bag with 3 red, 5 white and 4 green counters; probability that the counter is not white.
BAG = ['red'] * 3 + ['white'] * 5 + ['green'] * 4
P_NOT_WHITE = Fraction(sum(1 for colour in BAG if colour != 'white'), len(BAG))

# q-4-5-02: 380 students, P(Spanish) = 0.27; expected number who do not choose Spanish.
P_NOT_SPANISH = 1 - Fraction(27, 100)
EXPECTED_NOT_SPANISH = 380 * P_NOT_SPANISH

# q-4-5-03: two fair six-sided dice, score = sum of the two faces, 36 equally likely pairs.
PAIRS = list(product(range(1, 7), repeat=2))
SCORES = [a + b for a, b in PAIRS]
N_PAIRS = len(PAIRS)
P_10_OR_MORE = Fraction(sum(1 for s in SCORES if s >= 10), N_PAIRS)
P_PRIME = Fraction(sum(1 for s in SCORES if isprime(s)), N_PAIRS)
EXPECTED_PRIME_150 = 150 * P_PRIME
P_NOT_7 = 1 - Fraction(sum(1 for s in SCORES if s == 7), N_PAIRS)
LEAST_N = next(n for n in range(1, 1000) if n * P_10_OR_MORE >= 5)

CHECKS = [
    ('we-4-5-probability-basics-1', WE_1, '0.250; 0.750; 15'),
    ('q-4-5-01', float(P_NOT_WHITE), None),
    ('q-4-5-02', float(EXPECTED_NOT_SPANISH), None),
    ('q-4-5-03', [float(P_10_OR_MORE), float(P_PRIME), float(EXPECTED_PRIME_150), LEAST_N, float(P_NOT_7)], None),
]
