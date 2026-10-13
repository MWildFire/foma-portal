"""Numeric checks for topic 3-2-triangles-rules (sine and cosine rules, area). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Worked example 1: AB = 4, AC = 7, angle A = 50 degrees. BC squared (cosine rule), BC, and the area 1/2 x AB x AC x sin A.
BC_SQ = 4 ** 2 + 7 ** 2 - 2 * 4 * 7 * np.cos(np.radians(50))
WE_1 = [BC_SQ, np.sqrt(BC_SQ), 0.5 * 4 * 7 * np.sin(np.radians(50))]   # 29.00, 5.39, 10.7

# Worked example 2: sine rule with p = 6, P = 35 degrees, Q = 70 degrees, so q = p sin Q / sin P.
WE_2 = [6 * np.sin(np.radians(70)) / np.sin(np.radians(35))]           # 9.83

# q-3-2-01: AB = 6, AC = 10, angle A = 55 degrees, so BC.
Q1 = np.sqrt(6 ** 2 + 10 ** 2 - 2 * 6 * 10 * np.cos(np.radians(55)))  # 8.20

# q-3-2-02: PQ = 7, QR = 9, PR = 11, angle Q (opposite PR).
Q2 = np.degrees(np.arccos((7 ** 2 + 9 ** 2 - 11 ** 2) / (2 * 7 * 9)))  # 85.9

# q-3-2-03: AB = 120, AC = 150, angle A = 65 degrees.
BC = np.sqrt(120 ** 2 + 150 ** 2 - 2 * 120 * 150 * np.cos(np.radians(65)))
AREA = 0.5 * 120 * 150 * np.sin(np.radians(65))
ANGLE_B = np.degrees(np.arccos((120 ** 2 + BC ** 2 - 150 ** 2) / (2 * 120 * BC)))
PERIMETER = 120 + 150 + BC
AD = 2 * AREA / BC                                                      # altitude from A to BC
Q3 = [BC, AREA, ANGLE_B, PERIMETER, AD]                                 # 147.26, 8156.77, 67.39, 417.26, 110.78

CHECKS = [
    ('we-3-2-triangles-rules-1', WE_1, '29.00; 5.39; 10.7'),
    ('we-3-2-triangles-rules-2', WE_2, '9.83'),
    ('q-3-2-01', Q1, None),
    ('q-3-2-02', Q2, None),
    ('q-3-2-03', Q3, None),
]
