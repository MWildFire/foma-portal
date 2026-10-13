"""Numeric checks for topic 1-6-approximation-errors (approximation and errors). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction as F


def bounds(value, decimals):
    """Lower and upper bounds of a value rounded to the given number of decimal places, as exact fractions."""
    half_unit = F(1, 2 * 10 ** decimals)
    return value - half_unit, value + half_unit


def percentage_error(approximate, exact):
    """Difference from the exact value as a percentage of the exact value (always positive)."""
    return abs(approximate - exact) / exact * 100


def one_significant_figure(value):
    """Rounding to one significant figure, done by the formatting of the number."""
    return float('%.1g' % value)


# Worked example: a length of 12.4 correct to 1 decimal place, and a width of 8.6 correct to 1 decimal place.
LOW_L, HIGH_L = bounds(F(124, 10), 1)
LOW_W, HIGH_W = bounds(F(86, 10), 1)

WE_1 = [F(1, 20), LOW_L, HIGH_L]                          # half unit, length bounds
WE_2 = [LOW_W, HIGH_W, LOW_L * LOW_W, HIGH_L * HIGH_W]    # width bounds, lower and upper area
WE_3 = [percentage_error(F(36, 10), F(375, 100))]         # 3.6 used for the true value 3.75

# q-1-6-01: one parcel of 2.4 kg (1 decimal place), and six such parcels.
LOW_P, HIGH_P = bounds(F(24, 10), 1)
Q1 = [LOW_P, HIGH_P, 6 * LOW_P, 6 * HIGH_P]

# q-1-6-03 (a) to (c): bounds, area bounds, the estimate and its percentage error against 106.64.
Q3 = [
    LOW_L, HIGH_L, LOW_W, HIGH_W,
    LOW_L * LOW_W, HIGH_L * HIGH_W,
    one_significant_figure(12.4) * one_significant_figure(8.6),
    percentage_error(F(90), F(10664, 100)),
]

CHECKS = [
    ('we-1-6-approximation-errors-1', WE_1, '0.05; 12.35; 12.45'),
    ('we-1-6-approximation-errors-2', WE_2, '8.55; 8.65; 105.59; 107.69'),
    ('we-1-6-approximation-errors-3', WE_3, '4.00'),
    ('q-1-6-01', Q1, None),
    ('q-1-6-02', percentage_error(F(120, 100), F(115, 100)), None),
    ('q-1-6-03', Q3, None),
]
