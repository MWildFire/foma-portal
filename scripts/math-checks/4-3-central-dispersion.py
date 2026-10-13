"""Numeric checks for topic 4-3-central-dispersion (Central tendency and dispersion). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction
from statistics import mode

import numpy as np

# Worked example (EN and RU): study hours of 8 students; sum, mean, median, mode, sum of squared deviations, sd, quartiles.
WE_DATA = np.sort(np.array([2, 4, 4, 5, 6, 6, 6, 9]))
WE_SUM = float(np.sum(WE_DATA))
WE_MEAN = float(np.mean(WE_DATA))
WE_MEDIAN = float(np.median(WE_DATA))
WE_MODE = float(mode(WE_DATA.tolist()))
WE_SS = float(np.sum((WE_DATA - WE_MEAN) ** 2))
WE_SD = float(np.std(WE_DATA))
WE_Q1 = float(np.median(WE_DATA[:4]))
WE_Q3 = float(np.median(WE_DATA[4:]))
WE_1 = [WE_SUM, WE_MEAN, WE_MEDIAN, WE_MODE]
WE_2 = [WE_SS, WE_SD]
WE_3 = [WE_Q1, WE_Q3, WE_Q3 - WE_Q1]

# q-4-3-01: estimated mean from grouped data, midpoints 5, 15, 25, 35 with frequencies 6, 18, 24, 12.
MIDPOINTS = np.array([5, 15, 25, 35])
FREQ_PLANTS = np.array([6, 18, 24, 12])
MEAN_PLANTS = float(np.sum(FREQ_PLANTS * MIDPOINTS) / np.sum(FREQ_PLANTS))

# q-4-3-02: linear change y = 2x + 5 applied to a set with mean 14 and standard deviation 3.5.
Q2 = [float(Fraction(2) * Fraction(14) + 5), float(Fraction(2) * Fraction(7, 2))]

# q-4-3-03: (a)(i) grouped mean with midpoints 2, 5, 7, 10 and frequencies 5, 12, 14, 9.
MID_STEPS = np.array([2, 5, 7, 10])
FREQ_STEPS = np.array([5, 12, 14, 9])
MEAN_GROUPED = float(np.sum(FREQ_STEPS * MID_STEPS) / np.sum(FREQ_STEPS))
# (b) the six values, (c) quartiles as medians of the lower and upper halves.
SIX = np.sort(np.array([3, 5, 6, 7, 9, 12]))
MEAN_SIX = float(np.mean(SIX))
SD_SIX = float(np.std(SIX))
LOWER_Q = float(np.median(SIX[:3]))
UPPER_Q = float(np.median(SIX[3:]))
Q3_LIST = [MEAN_GROUPED, MEAN_SIX, SD_SIX, LOWER_Q, UPPER_Q, UPPER_Q - LOWER_Q]

CHECKS = [
    ('we-4-3-central-dispersion-1', WE_1, '42; 5.25; 5.5; 6'),
    ('we-4-3-central-dispersion-2', WE_2, '29.5; 1.92'),
    ('we-4-3-central-dispersion-3', WE_3, '4; 6; 2'),
    ('q-4-3-01', MEAN_PLANTS, None),
    ('q-4-3-02', Q2, None),
    ('q-4-3-03', Q3_LIST, None),
]
