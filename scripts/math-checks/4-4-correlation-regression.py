"""Numeric checks for topic 4-4-correlation-regression (Correlation and linear regression)."""
import numpy as np
from scipy import stats

# Worked example (EN and RU): plants, fertiliser x (g) and height y (cm) after four weeks.
WE_X = np.array([2, 4, 6, 8, 10])
WE_Y = np.array([5, 9, 10, 14, 18])
WE_FIT = stats.linregress(WE_X, WE_Y)                 # slope = a, intercept = b
WE_R = stats.pearsonr(WE_X, WE_Y)[0]

# q-4-4-01: floor area x (m2) and annual rent y (thousand AED) of eight apartments.
Q1_X = np.array([45, 60, 70, 80, 95, 110, 120, 135])
Q1_Y = np.array([58, 79, 84, 101, 110, 128, 131, 150])
Q1_FIT = stats.linregress(Q1_X, Q1_Y)

# q-4-4-02: attendance x (%) and final grade y (%) of seven students.
Q2_X = np.array([72, 80, 85, 88, 93, 96, 100])
Q2_Y = np.array([55, 63, 62, 70, 72, 78, 84])

# q-4-4-03: maximum temperature x (C) and iced coffees sold y on seven days.
Q3_X = np.array([31, 33, 35, 36, 38, 40, 42])
Q3_Y = np.array([54, 63, 66, 68, 77, 79, 84])
Q3_FIT = stats.linregress(Q3_X, Q3_Y)

CHECKS = [
    ('we-4-4-correlation-regression-1', [WE_X.mean(), WE_Y.mean()], '6; 11.2'),
    ('we-4-4-correlation-regression-2', [WE_FIT.slope, WE_FIT.intercept], '1.55; 1.90'),
    ('we-4-4-correlation-regression-3', [WE_R, WE_FIT.slope * 9 + WE_FIT.intercept], '0.986; 15.85'),
    ('q-4-4-01', [Q1_FIT.slope, Q1_FIT.intercept], None),                  # a, b
    ('q-4-4-02', stats.pearsonr(Q2_X, Q2_Y)[0], None),                     # r
    ('q-4-4-03', [stats.pearsonr(Q3_X, Q3_Y)[0], Q3_FIT.slope, Q3_FIT.intercept,
                  Q3_FIT.slope * 38 + Q3_FIT.intercept], None),           # r, a, b, prediction at 38 C
]
