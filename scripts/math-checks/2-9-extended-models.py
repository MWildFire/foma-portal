"""Numeric checks for topic 2-9-extended-models (extended models). Run python3 scripts/math-verify.py to evaluate them."""

import math

import sympy as sp
from scipy.optimize import brentq

t = sp.symbols('t', real=True)

# Worked example, half-life (EN and RU): N = 80 e^(-0.14t), t in days.
WE_1 = [math.log(2) / 0.14]                                # T = 4.95 days
WE_2 = [80 * math.exp(-0.14 * 10)]                         # N(10) = 19.7 g

# Worked example, logistic (EN and RU): y = 100 / (1 + 4e^(-0.5x)). Points found from the symbolic model.
y_we = 100 / (1 + 4 * sp.exp(-t / 2))
WE_3 = [float(y_we.subs(t, 0))]                            # y(0) = 20
x_inf = brentq(lambda s: float(sp.diff(y_we, t, 2).subs(t, s)), 1.0, 4.0)
WE_4 = [x_inf, float(y_we.subs(t, x_inf))]                 # x = 2.77 and y = 50 at the inflection point
WE_5 = [float(sp.diff(y_we, t).subs(t, x_inf))]            # greatest growth rate 12.5

# q-2-9-01: A = 400 e^(-0.231t); the half-life is where A = 200.
Q1 = math.log(2) / 0.231                                   # 3.00

# q-2-9-02: h = 1.8 sin(0.5(t - 1)) + 2.4 on 0 <= t <= 12 (sine in radians).
h = 1.8 * sp.sin(sp.Rational(1, 2) * (t - 1)) + 2.4
period = float(2 * sp.pi / sp.Rational(1, 2))              # 12.57 hours
t_peak = brentq(lambda s: float(sp.diff(h, t).subs(t, s)), 3.0, 5.0)   # 4.14, where h' changes sign
Q2 = [period, t_peak]

# q-2-9-03: N = 200 / (1 + 99e^(-0.9t)), t in days.
N = 200 / (1 + 99 * sp.exp(-sp.Rational(9, 10) * t))
N0 = float(N.subs(t, 0))                                   # 2 students
t100 = brentq(lambda s: float(N.subs(t, s)) - 100, 0.0, 20.0)          # 5.11 days
t_inf = brentq(lambda s: float(sp.diff(N, t, 2).subs(t, s)), 4.0, 6.0)  # inflection point
max_rate = float(sp.diff(N, t).subs(t, t_inf))             # 45 students per day
t180 = brentq(lambda s: float(N.subs(t, s)) - 180, 0.0, 20.0)          # 7.55 days
Q3 = [N0, t100, max_rate, t180]

CHECKS = [
    ('we-2-9-extended-models-1', WE_1, '4.95'),
    ('we-2-9-extended-models-2', WE_2, '19.7'),
    ('we-2-9-extended-models-3', WE_3, '20'),
    ('we-2-9-extended-models-4', WE_4, '2.77; 50'),
    ('we-2-9-extended-models-5', WE_5, '12.5'),
    ('q-2-9-01', Q1, None),
    ('q-2-9-02', Q2, None),
    ('q-2-9-03', Q3, None),
]
