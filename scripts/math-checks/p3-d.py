"""Numeric checks for the two P3 tasks in content/math/p3/questions/p3-d.ts (q-p3-09 and q-p3-10).

Every answer and every number printed in a markscheme is recomputed here from the data printed in the prompts:
scipy.optimize.curve_fit for the logistic regression (least squares on N, as the GDC does), scipy.stats for the
straight-line regression, and numpy and the math module for the rest. Run:
    python3 scripts/math-verify.py p3-d
"""

import math

import numpy as np
from scipy import optimize, stats

# ---- q-p3-09: households in a recycling scheme, parts (a) to (f) ----
TIME = np.array([0, 1, 2, 3, 4, 5, 6, 8, 10, 12], dtype=float)                     # months, as printed
HOUSEHOLDS = np.array([7.2, 11.3, 14.6, 22.1, 30.2, 41.2, 49.9, 67.9, 78.3, 85.4])  # hundreds, as printed


def logistic(t, a, b, c):
    return c / (1 + a * np.exp(-b * t))


def fit_logistic():
    """Least-squares fit of N = c / (1 + a e^(-bt)); keeps the best of several starting points."""
    best = None
    for start in ([12, 0.45, 90], [5, 0.3, 100], [20, 0.8, 85], [10, 0.6, 95]):
        params, _ = optimize.curve_fit(logistic, TIME, HOUSEHOLDS, p0=start, maxfev=20000)
        ss = float(np.sum((HOUSEHOLDS - logistic(TIME, *params)) ** 2))
        if best is None or ss < best[1]:
            best = (params, ss)
    return best[0]


A_FIT, B_FIT, C_FIT = fit_logistic()                                               # (a)
N_15 = float(logistic(15, A_FIT, B_FIT, C_FIT))                                    # (b)
LN_TERM = math.log(60 * A_FIT / (C_FIT - 60))                                      # (c) ln(60a / (c - 60))
T_60 = LN_TERM / B_FIT                                                             # (c) time when N = 60
N_7 = float(logistic(7, A_FIT, B_FIT, C_FIT))
N_8 = float(logistic(8, A_FIT, B_FIT, C_FIT))
FIRST_MONTH = next(n for n in range(100) if logistic(n, A_FIT, B_FIT, C_FIT) > 60)  # (c) first whole month
SS_LOGISTIC = float(np.sum((HOUSEHOLDS - logistic(TIME, A_FIT, B_FIT, C_FIT)) ** 2))  # (d)
LINE = stats.linregress(TIME, HOUSEHOLDS)                                          # (d) least-squares line of N on t
LINE_INTERCEPT, LINE_SLOPE = float(LINE.intercept), float(LINE.slope)
SS_LINE = float(np.sum((HOUSEHOLDS - (LINE_INTERCEPT + LINE_SLOPE * TIME)) ** 2))  # (d)
RESIDUALS = HOUSEHOLDS - logistic(TIME, A_FIT, B_FIT, C_FIT)                       # (e) actual minus model
RESID_10 = float(RESIDUALS[int(np.where(TIME == 10)[0][0])])                        # (e) at t = 10
MODEL_10 = float(logistic(10, A_FIT, B_FIT, C_FIT))                                # (e)
N_60 = float(logistic(60, A_FIT, B_FIT, C_FIT))                                    # (f)

# ---- q-p3-10: pyramid canopy with four 10 m ropes, parts (a) to (f) ----
ROPE = 10.0                                    # rope length, m
RULE_DEG = 45.0                                # each rope at least this angle with the ground


def volume(h):
    return (2 / 3) * (100 * h - h ** 3)        # (a) V = (1/3) s^2 h with s^2 = 2(100 - h^2)


S2_6 = 2 * (ROPE ** 2 - 6.0 ** 2)              # (b) s^2 for h = 6
S_6 = math.sqrt(S2_6)                          # (b) side of the base
V_6 = volume(6.0)                              # (b) volume
OA_6 = S_6 / math.sqrt(2)                      # (c) half-diagonal of the base
COS_THETA_6 = OA_6 / ROPE                      # (c) cos of the rope angle, 0.8
THETA_6 = math.degrees(math.acos(COS_THETA_6))  # (c) angle between a rope and the ground
COS_ATB_6 = (2 * ROPE ** 2 - S2_6) / (2 * ROPE ** 2)   # (c) cosine rule in triangle ATB
ATB_6 = math.degrees(math.acos(COS_ATB_6))     # (c) angle between two adjacent ropes
P_X = math.cos(math.radians(45.0))             # (d) unit-circle point at 45 degrees
P_Y = math.sin(math.radians(45.0))
HMIN = ROPE * math.sin(math.radians(RULE_DEG))  # (d) least height, 5 sqrt 2
TABLE = [round(6.0 + 0.1 * k, 1) for k in range(16)]   # (e) GDC table h = 6.0, 6.1, ..., 7.5
ALLOWED = [h for h in TABLE if h >= HMIN]      # (e) heights that satisfy the rule
H_TABLE = max(ALLOWED, key=volume)             # (e)(i) largest volume among allowed table heights
V_TABLE = volume(H_TABLE)
V_70, V_71, V_72 = volume(7.0), volume(7.1), volume(7.2)   # (e) table values quoted in the markscheme
V_EXACT = volume(HMIN)                         # (e)(ii) volume at h = 5 sqrt 2
S2_EX = 2 * (ROPE ** 2 - HMIN ** 2)            # (f) s^2 at h = 5 sqrt 2
S_EX = math.sqrt(S2_EX)                        # (f) side of the base, 10.0
MARGIN = (10.5 - S_EX) / 2                     # (f) margin on each side of the 10.5 m plot

CHECKS = [
    # numbers printed in the markschemes (worked steps), in the order the markschemes print them
    ('we-p3-d-01', LN_TERM, '3.17'),                                               # q-p3-09 (c)
    ('we-p3-d-02', [LINE_INTERCEPT, LINE_SLOPE], '3.99; 7.22'),                    # q-p3-09 (d): N = 3.99 + 7.22t
    ('we-p3-d-03', [N_7, N_8], '59.6; 67.8'),                                      # q-p3-09 (c): N(7), N(8)
    ('we-p3-d-04', MODEL_10, '79.1'),                                              # q-p3-09 (e): model at t = 10
    ('we-p3-d-05', [float(RESIDUALS.min()), float(RESIDUALS.max())], '-1.0; 1.1'),  # q-p3-09 (e): residual range
    ('we-p3-d-06', S2_6, '128'),                                                   # q-p3-10 (b): s^2 = 2(100 - 36)
    ('we-p3-d-07', [OA_6, COS_THETA_6, COS_ATB_6], '8; 0.8; 0.36'),                # q-p3-10 (c)
    ('we-p3-d-08', [V_70, V_71, V_72], '238.0; 234.7; 231.2'),                     # q-p3-10 (e): table values
    ('we-p3-d-09', S2_EX, '100'),                                                  # q-p3-10 (f): s^2 at h = 5 sqrt 2
    ('we-p3-d-10', MARGIN, '0.25'),                                                # q-p3-10 (f): margin on the plot
    ('we-p3-d-11', V_EXACT - V_TABLE, '0.98'),                                     # q-p3-10 (e)(iii): difference
    ('we-p3-d-12', 100 * 6.0 - 6.0 ** 3, '384'),                                   # q-p3-10 (b): 100 x 6 - 6^3
    # answers, in part order (the verifier compares each value with the answer field)
    ('q-p3-09', [A_FIT, B_FIT, C_FIT, N_15, T_60, FIRST_MONTH, SS_LOGISTIC, SS_LINE, RESID_10, N_60], None),
    ('q-p3-10', [S_6, V_6, THETA_6, ATB_6, P_X, P_Y, HMIN, H_TABLE, V_TABLE, V_EXACT, S_EX], None),
]
