"""Numeric checks for the P3 tasks q-p3-04, q-p3-05 and q-p3-06 (file p3-b). Run: python3 scripts/math-verify.py p3-b"""

import math

import numpy as np
import sympy as sp
from scipy import optimize

# ---------- q-p3-04: Option 1 (monthly deposits) and Option 2 (loan), AED ----------
DEP = 1500.0                  # monthly deposit
I_SAVE = 0.003                # 3.6% per year, compounded monthly
LOAN = 60000.0
I_LOAN = 0.005                # 6% per year, compounded monthly
N_LOAN = 48


def savings_sim(n):
    """Balance after n month-end deposits, built month by month."""
    bal = 0.0
    for _ in range(n):
        bal = bal * (1 + I_SAVE) + DEP
    return bal


def savings_closed(n):
    return DEP * ((1 + I_SAVE) ** n - 1) / I_SAVE


def loan_after(payment, k):
    """Loan balance after k month-end payments, built month by month."""
    bal = LOAN
    for _ in range(k):
        bal = bal * (1 + I_LOAN) - payment
    return bal


def car_value(years):
    return 60000.0 * 0.88 ** years


S24 = savings_sim(24)
N_CONT = optimize.brentq(lambda n: savings_closed(n) - 60000.0, 1, 200, xtol=1e-12)
LEAST_MONTHS = next(n for n in range(1, 500) if savings_sim(n) >= 60000.0)
PAYMENT = optimize.brentq(lambda p: loan_after(p, N_LOAN), 1000, 2000, xtol=1e-12)
B12 = loan_after(PAYMENT, 12)
I12 = 12 * PAYMENT - (LOAN - B12)
V3 = car_value(3)
LEAST_YEARS = next(t for t in range(0, 50) if car_value(t) < 30000.0)

# numbers printed in the markscheme
S37 = savings_sim(37)
S38 = savings_sim(38)
V5 = car_value(5)
V6 = car_value(6)
YEARS_CONT = optimize.brentq(lambda t: car_value(t) - 30000.0, 0, 20, xtol=1e-12)
LOAN_INTEREST = N_LOAN * PAYMENT - LOAN          # 48P - 60000
SAVINGS_INTEREST = savings_sim(38) - 38 * DEP    # S_38 - 38 x 1500
TOTAL_REPAID = N_LOAN * PAYMENT                  # 48P
OPTION2_EXTRA = TOTAL_REPAID - 38 * DEP          # 48P - 57000

# ---------- q-p3-05: weather Markov chain (sunny S, cloudy C, rainy R) ----------
R = sp.Rational
T = np.array([[0.6, 0.2, 0.2],
              [0.3, 0.5, 0.2],
              [0.3, 0.3, 0.4]])
ROW_SUNNY_5 = np.linalg.matrix_power(T, 5)[0]
T2 = np.linalg.matrix_power(T, 2)
DAY0 = np.array([0.5, 0.2, 0.3])
RAIN_DAY2 = float((DAY0 @ np.linalg.matrix_power(T, 2))[2])

# steady state: pi T = pi with pi_S + pi_C + pi_R = 1, solved exactly
Ts = sp.Matrix([[R(6, 10), R(2, 10), R(2, 10)],
                [R(3, 10), R(5, 10), R(2, 10)],
                [R(3, 10), R(3, 10), R(4, 10)]])
pS, pC, pR = sp.symbols('pS pC pR')
pi_row = sp.Matrix([[pS, pC, pR]])
eqs = list(pi_row * Ts - pi_row) + [pS + pC + pR - 1]
sol = sp.solve(eqs, [pS, pC, pR], dict=True)[0]
STEADY = [float(sol[pS]), float(sol[pC]), float(sol[pR])]

# two-state (rainy / not rainy) sub-model M
M = np.array([[0.8, 0.2],
              [0.6, 0.4]])
Ms = sp.Matrix([[R(4, 5), R(1, 5)], [R(3, 5), R(2, 5)]])
lam = sp.symbols('lam')
EIG = sorted((float(r) for r in sp.solve(sp.det(Ms - lam * sp.eye(2)), lam)), reverse=True)  # [1.0, 0.2]
RAIN_DAY3 = float(np.linalg.matrix_power(M, 3)[0, 1])   # 0.25 - 0.25 * 0.2^3
TRACE_M = M[0, 0] + M[1, 1]
DET_M = M[0, 0] * M[1, 1] - M[0, 1] * M[1, 0]
M_FROM_T = [T[0, 0] + T[0, 1], T[0, 2], T[2, 0] + T[2, 1], T[2, 2]]
P_EIG = np.array([[1.0, 1.0], [1.0, -3.0]])

# ---------- q-p3-06: Ferris wheel, h(t) = a sin(bt + c) + d ----------
TT = np.arange(13, dtype=float)
HH = np.array([1.6, 5.7, 14.3, 26.9, 39.6, 49.0, 51.8, 48.9, 39.6, 26.8, 14.5, 5.4, 2.2])


def linear_fit(b):
    """For fixed b the model is linear in A = a cos c, B = a sin c and d: least squares gives all three."""
    X = np.column_stack([np.sin(b * TT), np.cos(b * TT), np.ones_like(TT)])
    coef = np.linalg.lstsq(X, HH, rcond=None)[0]
    resid = HH - X @ coef
    return float(resid @ resid), coef


# 0 < b < pi: at whole-minute readings b and 2*pi - b give identical heights, so the range fixes the model
grid = np.linspace(0.005, math.pi - 0.005, 40001)
errors = [linear_fit(b)[0] for b in grid]
k0 = int(np.argmin(errors))
b_fit = optimize.minimize_scalar(lambda b: linear_fit(b)[0], bounds=(grid[k0] - 1e-4, grid[k0] + 1e-4),
                                 method='bounded', options={'xatol': 1e-13}).x
_, coef = linear_fit(b_fit)
A_COEF, B_COEF, d_fit = coef
a_fit = math.hypot(A_COEF, B_COEF)
c_fit = math.atan2(B_COEF, A_COEF) % (2 * math.pi)

T_PER = 2 * math.pi / b_fit
# highest point: sin(theta) = 1 with theta = bt + c; first t >= 0
T_TOP = min(x for x in ((math.pi / 2 + 2 * math.pi * k - c_fit) / b_fit for k in range(-3, 4)) if x >= 0)
# 40 m: sin(theta) = (40 - d)/a, two angles on the unit circle, times in the first turn
X40 = (40 - d_fit) / a_fit
THETA40 = math.asin(X40)
T40 = sorted(x for x in ((base + 2 * math.pi * k - c_fit) / b_fit
                         for base in (THETA40, math.pi - THETA40) for k in range(-3, 4))
             if 0 <= x <= T_PER)
# h'(t) = ab cos(bt + c) is greatest where h''(t) = 0 (bt + c = 2 pi k) and it is a maximum
T_RATE = min(x for x in ((2 * math.pi * k - c_fit) / b_fit for k in range(-3, 4)) if x >= 0)
MAX_RATE = a_fit * b_fit
H20 = d_fit + a_fit * math.sin(20 * b_fit + c_fit)
MAX_RESIDUAL = float(np.max(np.abs(a_fit * np.sin(b_fit * TT + c_fit) + d_fit - HH)))

CHECKS = [
    # q-p3-04 (answer order: S_24, n, least months, P, B_12, interest in first 12 months, V_3, least years)
    ('q-p3-04', [S24, N_CONT, LEAST_MONTHS, PAYMENT, B12, I12, V3, LEAST_YEARS], None),
    ('we-q-p3-04-1', S37, '58605'),
    ('we-q-p3-04-2', S38, '60280'),
    ('we-q-p3-04-3', V5, '31664'),
    ('we-q-p3-04-4', V6, '27864'),
    ('we-q-p3-04-5', YEARS_CONT, '5.42'),
    ('we-q-p3-04-6', LOAN_INTEREST, '7637'),
    ('we-q-p3-04-7', SAVINGS_INTEREST, '3280'),
    ('we-q-p3-04-8', TOTAL_REPAID, '67637'),
    ('we-q-p3-04-9', OPTION2_EXTRA, '10637'),
    ('we-q-p3-04-10', 1 + 60000.0 * I_SAVE / DEP, '1.12'),       # (1.003)^n = 1 + 60000 x 0.003 / 1500
    ('we-q-p3-04-11', 38 * DEP, '57000'),                         # total deposits in 38 months
    # q-p3-05 (answer order: (a) three values, (b), (c) three values, (e)(i) two eigenvalues, (e)(iii))
    ('q-p3-05', list(ROW_SUNNY_5) + [RAIN_DAY2] + STEADY + EIG + [RAIN_DAY3], None),
    ('we-q-p3-05-1', [TRACE_M, DET_M], '1.2; 0.2'),
    ('we-q-p3-05-2', M_FROM_T, '0.8; 0.2; 0.6; 0.4'),
    ('we-q-p3-05-3', [T[0, 2], T[1, 2]], '0.2; 0.2'),
    ('we-q-p3-05-4', list(M @ np.array([1.0, 1.0])), '1; 1'),
    ('we-q-p3-05-5', list(M @ np.array([1.0, -3.0])), '0.2; -0.6'),
    ('we-q-p3-05-6', STEADY[0] + STEADY[1], '0.75'),
    ('we-q-p3-05-7', list(np.linalg.inv(P_EIG).ravel()), '0.75; 0.25; 0.25; -0.25'),
    ('we-q-p3-05-8', [T2[0, 2], T2[1, 2], T2[2, 2]], '0.24; 0.24; 0.28'),   # two-step rain probabilities
    ('we-q-p3-05-9', 0.2 ** 3, '0.008'),
    # q-p3-06 (answer order: a, b, c, d, T, first top time, two times at 40 m, time of max rate, max rate, h(20))
    ('q-p3-06', [a_fit, b_fit, c_fit, d_fit, T_PER, T_TOP, T40[0], T40[1], T_RATE, MAX_RATE, H20], None),
    ('we-q-p3-06-1', X40, '0.517'),
    ('we-q-p3-06-2', 5 * math.pi / 2, '7.85'),
    ('we-q-p3-06-3', 20 / T_PER, '1.7'),
    ('we-q-p3-06-4', MAX_RESIDUAL, '0.4'),
]
