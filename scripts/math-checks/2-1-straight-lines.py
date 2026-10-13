"""Numeric checks for topic 2-1-straight-lines (Straight lines). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

# Worked example (EN and RU): gradient and y-intercept of the line through (-3, 4) and (5, -2);
# x-intercept and gradient of the perpendicular line.
M_WE = Fraction(-2 - 4, 5 - (-3))            # -3/4
C_WE = 4 - M_WE * (-3)                       # y-intercept, 7/4
X_WE = -C_WE / M_WE                          # x-intercept, 7/3
PERP_WE = -1 / M_WE                          # perpendicular gradient, 4/3
WE_1 = [M_WE, C_WE]
WE_2 = [X_WE, PERP_WE]

# q-2-1-01: line through (-1, 5) and (4, 1); x-intercept.
M_01 = Fraction(1 - 5, 4 - (-1))
C_01 = 1 - M_01 * 4
X_01 = -C_01 / M_01

# q-2-1-02: L1 is 3x - 4y + 8 = 0 (gradient 3/4); L2 is perpendicular to L1 and passes through (2, 5).
M_L1 = Fraction(3, 4)
M_L2 = -1 / M_L1
C_02 = 5 - M_L2 * 2

# q-2-1-03: tank volume V(t) = m t + c, linear while draining. Volumes are exact decimals.
V0 = Fraction(240)
V5 = Fraction('168.4')
M_03 = (V5 - V0) / 5                         # -14.32
T_EMPTY = V0 / -M_03                         # 16.76
V10 = V0 + M_03 * 10                         # 96.8
DIFF_10 = (300 + M_03 * 10) - V10            # 60
T_PUMP = 10 + V10 / -(M_03 - 20)             # 12.82

CHECKS = [
    ('we-2-1-straight-lines-1', WE_1, '-0.75; 1.75'),
    ('we-2-1-straight-lines-2', WE_2, '2.33; 1.33'),
    ('q-2-1-01', X_01, None),
    ('q-2-1-02', C_02, None),
    ('q-2-1-03', [M_03, T_EMPTY, V10, DIFF_10, T_PUMP], None),
]
