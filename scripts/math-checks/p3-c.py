"""Numeric checks for the two P3 tasks in content/math/p3/questions/p3-c.ts (q-p3-07 and q-p3-08).

Every answer and every number printed in a markscheme is recomputed here from the data in the prompts:
scipy for the logarithmic and linear regressions, the chi-squared test, the t and normal quantiles and the
chi-squared quantile; numpy for the arrays and the residuals; plain arithmetic for the sample size. Run:
    python3 scripts/math-verify.py p3-c
"""

import math

import numpy as np
from scipy import stats

# ---- q-p3-07: fan power model P = a N^b, parts (a) to (g) ----
SPEED = np.array([3, 4, 5, 6, 7, 8, 9, 10], dtype=float)
POWER = np.array([0.8, 1.9, 3.6, 6.6, 10.1, 15.7, 21.2, 29.4])
LOG_FIT = stats.linregress(np.log(SPEED), np.log(POWER))   # (b), (c): regression of ln P on ln N
R_LOG = LOG_FIT.rvalue                                      # (b) r for the logarithmic data
C_LOG, B_POW = LOG_FIT.intercept, LOG_FIT.slope             # (c): ln P = c + b ln N
A_POW = math.exp(C_LOG)                                     # (c): a = e^c
PCT_10 = 100 * (1.1 ** B_POW - 1)                           # (d): percentage increase for a 10% rise in N
ONE_TENTH_POW = 1.1 ** B_POW                                # (d) markscheme: 1.1^b
POWER_75 = A_POW * 7.5 ** B_POW                             # (e)(i)
SPEED_12KW = (12 / A_POW) ** (1 / B_POW)                    # (e)(ii)
LIN_FIT = stats.linregress(SPEED, POWER)                    # (f): P = p + qN by least squares
P_LIN, Q_LIN = LIN_FIT.intercept, LIN_FIT.slope             # (f)(i)
RES_LIN = POWER - (P_LIN + Q_LIN * SPEED)                   # (f)(ii): residuals, linear model
RES_POW = POWER - A_POW * SPEED ** B_POW                    # (f)(ii): residuals, power model
SSR_LIN = float(np.sum(RES_LIN ** 2))                       # (f)(ii)
SSR_POW = float(np.sum(RES_POW ** 2))                       # (f)(ii)
R_LIN = LIN_FIT.rvalue                                      # (f)(iii) markscheme
LIN_AT_3 = P_LIN + Q_LIN * 3                                # (f)(iii) markscheme
POWER_12 = A_POW * 12 ** B_POW                              # (g)
LIN_AT_12 = P_LIN + Q_LIN * 12                              # (g) markscheme

# ---- q-p3-08: transport by grade (chi-squared test) and Metro journey times, parts (a) to (g) ----
TABLE = np.array([[40, 34, 30],    # bus: G10, G11, G12
                  [20, 19, 22],    # car
                  [25, 20, 30]])   # Metro
CHI2_STAT, CHI2_P, DOF, EXPECTED = stats.chi2_contingency(TABLE, correction=False)   # (a), (b), (c)
E_BUS_G10 = EXPECTED[0, 0]                                  # (b)(i)
MIN_E = EXPECTED.min()                                      # (b)(ii): car, G11
MAX_CONTRIB = float(((TABLE - EXPECTED) ** 2 / EXPECTED).max())   # (d) markscheme: bus, G12
CRIT_95 = stats.chi2.ppf(0.95, DOF)                         # (c) markscheme
N_METRO, XBAR, S_METRO = 40, 34.6, 7.9                      # (e): sample of Metro journeys
SE_METRO = S_METRO / math.sqrt(N_METRO)                     # (e) markscheme
T_39 = stats.t.ppf(0.975, N_METRO - 1)                      # (e) markscheme
CI_LO, CI_HI = XBAR - T_39 * SE_METRO, XBAR + T_39 * SE_METRO   # (e)
Z_95 = stats.norm.ppf(0.975)                                # (g) markscheme: 1.96
RAW_N = (1.96 * S_METRO / 1.5) ** 2                         # (g): n >= (z sigma / E)^2 with z = 1.96
N_MIN = math.ceil(RAW_N)                                    # (g): minimum sample size

CHECKS = [
    # numbers printed in the markschemes (worked steps), in the order they appear
    ('we-p3-c-01', ONE_TENTH_POW, '1.33'),                                  # q-p3-07 (d): 1.1^b
    ('we-p3-c-02', [RES_LIN[0], RES_LIN[3], RES_LIN[7]], '3.66; -2.56; 4.22'),  # q-p3-07 (f)(iii): residuals at N = 3, 6, 10
    ('we-p3-c-03', LIN_AT_3, '-2.86'),                                      # q-p3-07 (f)(iii): linear model at N = 3
    ('we-p3-c-04', R_LIN, '0.963'),                                         # q-p3-07 (f)(iii): r of the linear model
    ('we-p3-c-05', LIN_AT_12, '33.2'),                                      # q-p3-07 (g): linear model at N = 12
    ('we-p3-c-06', Z_95, '1.96'),                                           # q-p3-08 (g): z for 95%
    ('we-p3-c-07', CRIT_95, '9.49'),                                        # q-p3-08 (c): chi-squared critical value, df 4
    ('we-p3-c-08', MAX_CONTRIB, '0.862'),                                   # q-p3-08 (d): largest contribution (bus, G12)
    ('we-p3-c-09', SE_METRO, '1.25'),                                       # q-p3-08 (e): s / sqrt(n)
    ('we-p3-c-10', T_39, '2.02'),                                           # q-p3-08 (e): t, df 39
    ('we-p3-c-11', RAW_N, '106.6'),                                         # q-p3-08 (g): (z sigma / E)^2
    # answers, in part order (the verifier compares each value with the answer field)
    ('q-p3-07', [R_LOG, C_LOG, B_POW, A_POW, PCT_10, POWER_75, SPEED_12KW, P_LIN, Q_LIN, SSR_LIN, SSR_POW, POWER_12], None),
    ('q-p3-08', [DOF, E_BUS_G10, MIN_E, CHI2_STAT, CHI2_P, CI_LO, CI_HI, N_MIN], None),
]
