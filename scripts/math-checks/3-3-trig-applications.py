"""Numeric checks for topic 3-3-trig-applications (applications of trigonometry). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Worked example 1: observer 80 m from the foot of a tower, angle of elevation 28 degrees, so h = 80 tan 28.
WE_1 = [80 * np.tan(np.radians(28))]                                    # 42.5

# Worked example 2: ladder of length 5 with its foot 1.5 m from the wall, so h squared = 5^2 - 1.5^2.
HEIGHT_SQ = 5 ** 2 - 1.5 ** 2
WE_2 = [HEIGHT_SQ, np.sqrt(HEIGHT_SQ)]                                 # 22.75, 4.77

# Worked example 3: angle with the ground, cos theta = 1.5 / 5.
WE_3 = [1.5 / 5, np.degrees(np.arccos(1.5 / 5))]                       # 0.3, 72.5

# q-3-3-01: kite string 50 m at an angle of elevation 35 degrees, so h = 50 sin 35.
Q1 = 50 * np.sin(np.radians(35))                                        # 28.7

# q-3-3-02: lighthouse top 30 m above sea level, angle of depression 12 degrees, so d = 30 / tan 12.
Q2 = 30 / np.tan(np.radians(12))                                        # 141.1

# q-3-3-03: AB = 500, angle CAB = 62 degrees, angle CBA = 48 degrees, mast of height 60 m on C.
ANGLE_C = 180 - 62 - 48
AC = 500 * np.sin(np.radians(48)) / np.sin(np.radians(70))             # sine rule
BC = 500 * np.sin(np.radians(62)) / np.sin(np.radians(70))             # sine rule
PERP = AC * np.sin(np.radians(62))                                     # shortest distance from C to AB
ELEVATION = np.degrees(np.arctan(60 / AC))                             # angle of elevation of the mast top from A
TOP_TO_B = np.sqrt(BC ** 2 + 60 ** 2)                                  # Pythagoras
Q3 = [ANGLE_C, AC, PERP, ELEVATION, TOP_TO_B]                          # 70, 395.42, 349.13, 8.63, 473.62

CHECKS = [
    ('we-3-3-trig-applications-1', WE_1, '42.5'),
    ('we-3-3-trig-applications-2', WE_2, '22.75; 4.77'),
    ('we-3-3-trig-applications-3', WE_3, '0.3; 72.5'),
    ('q-3-3-01', Q1, None),
    ('q-3-3-02', Q2, None),
    ('q-3-3-03', Q3, None),
]
