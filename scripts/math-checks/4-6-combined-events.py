"""Numeric checks for topic 4-6-combined-events (Combined events and conditional probability). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction
from itertools import permutations

# Worked example (EN and RU): 50 students, F = studies French (30), G = studies German (24), both (12).
N_STUDENTS = 50
P_F = Fraction(30, N_STUDENTS)
P_G = Fraction(24, N_STUDENTS)
P_F_AND_G = Fraction(12, N_STUDENTS)
P_F_OR_G = Fraction(30 + 24 - 12, N_STUDENTS)
P_F_GIVEN_G = P_F_AND_G / P_G
WE_1 = [float(P_F_OR_G), float(P_F_GIVEN_G)]
WE_2 = [float(P_F), float(P_G), float(P_F * P_G), float(P_F_AND_G)]

# q-4-6-01: 40 students; 26 Chinese, 15 Spanish, 9 both. P(Chinese or Spanish or both) = (26 + 15 - 9) / 40.
Q1 = Fraction(26 + 15 - 9, 40)

# q-4-6-02: with replacement, 5 red and 3 blue; the two choices are independent.
P_RED = Fraction(5, 8)
Q2 = P_RED * P_RED

# q-4-6-03: without replacement, 5 red (indices 0 to 4) and 3 blue (indices 5 to 7).
# Every ordered pair of different counters is equally likely: 8 x 7 = 56 draws.
COUNTERS = ['R'] * 5 + ['B'] * 3
DRAWS = list(permutations(range(8), 2))


def prob(event):
    return Fraction(sum(1 for first, second in DRAWS if event(COUNTERS[first], COUNTERS[second])), len(DRAWS))


P_R1_AND_R2 = prob(lambda a, b: a == 'R' and b == 'R')
P_AT_LEAST_ONE_RED = prob(lambda a, b: a == 'R' or b == 'R')
P_B1_AND_R2 = prob(lambda a, b: a == 'B' and b == 'R')
P_R2 = prob(lambda a, b: b == 'R')
P_B1_GIVEN_R2 = P_B1_AND_R2 / P_R2
P_R1 = prob(lambda a, b: a == 'R')
P_R2_GIVEN_R1 = P_R1_AND_R2 / P_R1
P_EXACTLY_ONE_RED = prob(lambda a, b: (a == 'R') != (b == 'R'))

CHECKS = [
    ('we-4-6-combined-events-1', WE_1, '0.840; 0.500'),
    ('we-4-6-combined-events-2', WE_2, '0.600; 0.480; 0.288; 0.240'),
    ('q-4-6-01', float(Q1), None),
    ('q-4-6-02', float(Q2), None),
    ('q-4-6-03', [float(P_R1_AND_R2), float(P_AT_LEAST_ONE_RED), float(P_B1_GIVEN_R2), float(P_R2_GIVEN_R1), float(P_EXACTLY_ONE_RED)], None),
]
