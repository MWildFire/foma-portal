"""Numeric checks for topic 2-2-functions-inverse (Functions and inverse functions). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
from scipy.optimize import brentq, minimize_scalar

# Worked example (EN and RU): cost C(n) = 4.5n + 12 in AED; C(20); C^(-1)(100) and C(19) (19 bags, the most that fits AED 100).
def cost(n):
    return 4.5 * n + 12

def cost_inverse(x):
    return (x - 12) / 4.5

WE_1 = [cost(20)]
WE_2 = [cost_inverse(100), cost(19)]

# q-2-2-01: f(x) = e^x + 2; f^(-1)(5) is the a with f(a) = 5.
Q01 = brentq(lambda a: np.exp(a) + 2 - 5, -10, 10)

# q-2-2-02: f(x) = x^2 - 6x + 11 for x >= 3: least value of f, and the x >= 3 with f(x) = 6.
Q02_MIN = minimize_scalar(lambda x: x * x - 6 * x + 11, bounds=(3, 50), method='bounded').fun
Q02_INV = brentq(lambda x: x * x - 6 * x + 11 - 6, 3, 10)

# q-2-2-03: T(t) = 4 + 18 e^(-0.4t) for t >= 0 (juice cooling in a fridge).
def temp(t):
    return 4 + 18 * np.exp(-0.4 * t)

Q03_T0 = temp(0)
Q03_LIMIT = temp(1000)
Q03_T5 = temp(5)
Q03_TIME_10 = brentq(lambda t: temp(t) - 10, 0, 50)
Q03_TIME_5 = brentq(lambda t: temp(t) - 5, 0, 100)

CHECKS = [
    ('we-2-2-functions-inverse-1', WE_1, '102'),
    ('we-2-2-functions-inverse-2', WE_2, '19.56; 97.5'),
    ('q-2-2-01', Q01, None),
    ('q-2-2-02', [Q02_MIN, Q02_INV], None),
    ('q-2-2-03', [Q03_T0, Q03_LIMIT, Q03_T5, Q03_TIME_10, Q03_TIME_5], None),
]
