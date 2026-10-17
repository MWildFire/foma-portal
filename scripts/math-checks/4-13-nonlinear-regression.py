"""Numeric checks for topic 4-13-nonlinear-regression (Non-linear regression and the coefficient of determination)."""
import numpy as np
from scipy import stats


def r_squared(y, y_hat):
    """Coefficient of determination R^2 = 1 - SSR / SST."""
    y = np.asarray(y, dtype=float)
    y_hat = np.asarray(y_hat, dtype=float)
    return 1 - np.sum((y - y_hat) ** 2) / np.sum((y - y.mean()) ** 2)


# Worked example (EN and RU): sign-ups y (hundreds) after x weeks. Logarithmic fit y = a + b ln x (natural log).
WE_X = np.array([1, 2, 4, 8, 16])
WE_Y = np.array([4.4, 5.2, 7.9, 9.3, 11.6])
WE_LOG = stats.linregress(np.log(WE_X), WE_Y)
WE_R2_LOG = r_squared(WE_Y, WE_LOG.intercept + WE_LOG.slope * np.log(WE_X))
WE_LIN = stats.linregress(WE_X, WE_Y)
WE_R2_LIN = r_squared(WE_Y, WE_LIN.intercept + WE_LIN.slope * WE_X)
WE_PRED12 = WE_LOG.intercept + WE_LOG.slope * np.log(12)

# q-4-13-01: sum of squared residuals of the line y = 2x + 1.
Q1_X = np.arange(1, 6)
Q1_Y = np.array([3.5, 4, 7.5, 10, 10])
Q1_SSR = np.sum((Q1_Y - (2 * Q1_X + 1)) ** 2)

# q-4-13-02: quadratic regression of height h (m) on time t (s); coefficients of at^2 + bt + c.
Q2_T = np.array([0, 0.5, 1, 1.5, 2, 2.5, 3])
Q2_H = np.array([1.2, 4.0, 6.1, 7.1, 7.6, 6.6, 4.6])
Q2_COEF = np.polyfit(Q2_T, Q2_H, 2)
Q2_R2 = r_squared(Q2_H, np.polyval(Q2_COEF, Q2_T))

# q-4-13-03: customers per day y (hundreds) on day x.
Q3_X = np.array([1, 2, 3, 5, 7, 10, 14])
Q3_Y = np.array([3.4, 4.2, 5.5, 6.1, 7.3, 7.7, 8.2])
Q3_LOG = stats.linregress(np.log(Q3_X), Q3_Y)
Q3_R2_LOG = r_squared(Q3_Y, Q3_LOG.intercept + Q3_LOG.slope * np.log(Q3_X))
Q3_LIN = stats.linregress(Q3_X, Q3_Y)
Q3_R2_LIN = r_squared(Q3_Y, Q3_LIN.intercept + Q3_LIN.slope * Q3_X)
Q3_PRED21 = Q3_LOG.intercept + Q3_LOG.slope * np.log(21)

CHECKS = [
    ('we-4-13-nonlinear-regression-1', [WE_LOG.intercept, WE_LOG.slope], '3.98; 2.67'),
    ('we-4-13-nonlinear-regression-2', WE_R2_LOG, '0.979'),
    ('we-4-13-nonlinear-regression-3', [WE_R2_LIN, WE_PRED12], '0.898; 10.6'),
    ('we-4-13-nonlinear-regression-4', list(Q2_COEF), '-1.93; 6.99; 1.09'),
    ('q-4-13-01', Q1_SSR, None),
    ('q-4-13-02', Q2_R2, None),
    ('q-4-13-03', [Q3_LOG.intercept, Q3_LOG.slope, Q3_R2_LOG, Q3_R2_LIN, Q3_PRED21], None),
]

# R03: the Plants data used in the lab, independently fitted with numpy.
LAB_X = np.array([2, 4, 6, 8, 10])
LAB_Y = np.array([5, 9, 10, 14, 18])
LAB_COEF = np.polyfit(LAB_X, LAB_Y, 2)
CHECKS.append(('we-r03-plants-quadratic', [*LAB_COEF, sum((LAB_Y - np.polyval(LAB_COEF, LAB_X)) ** 2)], '0.053571; 0.907143; 3.4; 2.05714'))
