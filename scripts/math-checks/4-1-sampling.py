"""Numeric checks for topic 4-1-sampling (Samples, data and sampling). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

import numpy as np

# Worked example (EN and RU): sample proportion 15/50; estimate for 900 students; gate sample 22/50 and its excess over 0.300.
WE_1 = [float(Fraction(15, 50))]
WE_2 = [float(Fraction(15, 50) * 900)]
WE_3 = [float(Fraction(22, 50)), float(Fraction(22, 50) - Fraction(15, 50))]

# q-4-1-01: 18 of 40 sampled students walk; scaled up to 800 students.
Q1 = float(Fraction(18, 40) * 800)

# q-4-1-02: sample mean of the 5 heights (cm).
Q2 = float(np.mean([162, 170, 158, 175, 165]))

# q-4-1-03: (c) sample proportion, (d) scaled count, (e)(i) means with and without the value 45.
JOURNEY = np.array([12, 15, 18, 14, 16, 45, 13, 17])
Q3 = [
    float(Fraction(42, 60)),
    float(Fraction(42, 60) * 1200),
    float(np.mean(JOURNEY)),
    float(np.mean(JOURNEY[JOURNEY != 45])),
]

CHECKS = [
    ('we-4-1-sampling-1', WE_1, '0.300'),
    ('we-4-1-sampling-2', WE_2, '270'),
    ('we-4-1-sampling-3', WE_3, '0.440; 0.140'),
    ('q-4-1-01', Q1, None),
    ('q-4-1-02', Q2, None),
    ('q-4-1-03', Q3, None),
]
