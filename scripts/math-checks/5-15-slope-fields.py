"""Numeric checks for topic 5-15-slope-fields (slope fields). Run python3 scripts/math-verify.py 5-15-slope-fields."""

import sympy as sp
from scipy.integrate import solve_ivp
from scipy.optimize import brentq

x, y = sp.symbols('x y')


def solution_through(f, y0, x_end):
    """Numerical solution of dy/dx = f(x, y) with y(0) = y0 from x = 0 to x_end; returns a function of x."""
    sol = solve_ivp(lambda t, u: [f(t, u[0])], (0.0, x_end), [y0], rtol=1e-12, atol=1e-12, dense_output=True)
    return lambda t: float(sol.sol(t)[0])


# Worked example (EN and RU): dy/dx = x - y through (0, 1), read from the field.
curve = solution_through(lambda t, u: t - u, 1.0, 3.0)
x_min = brentq(lambda t: t - curve(t), 0.5, 0.9)           # the gradient x - y is zero here
WE_1 = [0.0 - 1.0]                                         # f(0, 1)
WE_2 = [x_min, curve(x_min)]                               # the minimum point, both coordinates ln 2
WE_3 = [curve(1.0), 1.0 - curve(1.0)]                      # y(1) and the gradient at x = 1

# q-5-15-01 (P1): isocline x - 2y = 1/2 written as y = mx + c.
line = sp.solve(sp.Eq(x - 2 * y, sp.Rational(1, 2)), y)[0]
Q1 = [float(sp.diff(line, x)), float(line.subs(x, 0))]     # m = 1/2, c = -1/4

# q-5-15-02 (P1): tangent at (0, 1) to the curve through (0, 1) of dy/dx = x - y.
m = float((x - y).subs({x: 0, y: 1}))                      # gradient at (0, 1)
Q2 = [m, 1.0 - m * 0.0]                                    # y = mx + c, c = 1 - m * 0

# q-5-15-03 (P2): logistic model dy/dx = y(1 - y/4), y(0) = 1 (population in hundreds).
equilibria = sorted(float(v) for v in sp.solve(sp.Eq(y * (1 - y / 4), 0), y))
rate_at_200 = float((y * (1 - y / 4)).subs(y, 2)) * 100    # rabbits per year
logistic = solution_through(lambda t, u: u * (1 - u / 4), 1.0, 4.0)
t_300 = brentq(lambda t: logistic(t) - 3.0, 0.5, 4.0)      # y = 3 means 300 rabbits
Q3 = equilibria + [rate_at_200, t_300]

CHECKS = [
    ('we-5-15-slope-fields-1', WE_1, '-1'),
    ('we-5-15-slope-fields-2', WE_2, '0.693; 0.693'),
    ('we-5-15-slope-fields-3', WE_3, '0.736; 0.264'),
    ('q-5-15-01', Q1, None),
    ('q-5-15-02', Q2, None),
    ('q-5-15-03', Q3, None),
]
