"""Numeric checks for topic 4-2-presenting-data (Presenting data). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Worked example (EN and RU): n = 40, cumulative frequencies 6, 18, 33, 40 at upper boundaries 10, 20, 30, 40 minutes.
CF_WE = np.array([0, 6, 18, 33, 40])
BOUND_WE = np.array([0, 10, 20, 30, 40])
WE_1 = [40 / 4, 40 / 2, 3 * 40 / 4]
WE_2 = [np.interp(20, CF_WE, BOUND_WE)]
WE_3 = [np.interp(10, CF_WE, BOUND_WE), np.interp(30, CF_WE, BOUND_WE)]
WE_4 = [np.interp(30, CF_WE, BOUND_WE) - np.interp(10, CF_WE, BOUND_WE)]

# q-4-2-01: class 30 to 50 minutes has frequency 10 and width 20; students with time 20 minutes or more: 15 + 10.
Q1 = [10 / 20, 15 + 10]

# q-4-2-02: ordered text message counts; quartiles are the medians of the lower and upper halves (GDC method, n even).
MESSAGES = np.sort(np.array([3, 5, 6, 8, 8, 9, 11, 12, 14, 15, 17, 21]))
LOWER_QUARTILE = np.median(MESSAGES[:6])
UPPER_QUARTILE = np.median(MESSAGES[6:])
Q2 = [float(MESSAGES.max() - MESSAGES.min()), float(UPPER_QUARTILE - LOWER_QUARTILE)]

# q-4-2-03: cumulative frequency graph, points at the upper class boundaries 0, 5, ..., 30 minutes.
FREQ = np.array([4, 12, 20, 24, 14, 6])
CF = np.concatenate([[0], np.cumsum(FREQ)])
BOUND = np.arange(0, 35, 5)
MEDIAN = np.interp(CF[-1] / 2, CF, BOUND)
LOWER_Q = np.interp(CF[-1] / 4, CF, BOUND)
UPPER_Q = np.interp(3 * CF[-1] / 4, CF, BOUND)
P90 = np.interp(0.9 * CF[-1], CF, BOUND)
PERCENT_10_TO_20 = 100 * (FREQ[2] + FREQ[3]) / CF[-1]
Q3 = [
    *[float(v) for v in np.cumsum(FREQ)],
    float(MEDIAN),
    float(LOWER_Q),
    float(UPPER_Q),
    float(P90),
    float(UPPER_Q - LOWER_Q),
    float(PERCENT_10_TO_20),
]

CHECKS = [
    ('we-4-2-presenting-data-1', WE_1, '10; 20; 30'),
    ('we-4-2-presenting-data-2', WE_2, '21.3'),
    ('we-4-2-presenting-data-3', WE_3, '13.3; 28.0'),
    ('we-4-2-presenting-data-4', WE_4, '14.7'),
    ('q-4-2-01', Q1, None),
    ('q-4-2-02', Q2, None),
    ('q-4-2-03', Q3, None),
]
