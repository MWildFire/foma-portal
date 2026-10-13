"""Numeric checks for topic 5-16-euler-first-order (Euler's method). Run python3 scripts/math-verify.py 5-16-euler-first-order."""

from scipy.integrate import solve_ivp
from scipy.optimize import brentq


def euler(f, x0, y0, h, steps):
    """Plain Euler loop: y(n+1) = y(n) + h f(x(n), y(n)). Returns the y values, starting with y0."""
    x, y = x0, y0
    values = [y]
    for _ in range(steps):
        y = y + h * f(x, y)
        x = x + h
        values.append(y)
    return values


def euler_system(f1, f2, x0, y0, t0, h, steps):
    """Euler's method for dx/dt = f1(x, y, t), dy/dt = f2(x, y, t). Both updates use the values at the start of the step."""
    x, y, t = x0, y0, t0
    rows = [(x, y, t)]
    for _ in range(steps):
        x, y = x + h * f1(x, y, t), y + h * f2(x, y, t)
        t = t + h
        rows.append((x, y, t))
    return rows


# Worked example (EN and RU): dy/dx = x - y, y(0) = 1, h = 0.2 (five steps to x = 1).
euler_02 = euler(lambda x, y: x - y, 0.0, 1.0, 0.2, 5)
WE_1 = euler_02[1:]                                        # 0.8, 0.68, 0.624, 0.6192, 0.65536

# Exact y(1) from a numerical solver, to compare with the Euler values.
sol = solve_ivp(lambda t, u: [t - u[0]], (0.0, 1.0), [1.0], rtol=1e-12, atol=1e-12)
exact_1 = float(sol.y[0, -1])
WE_2 = [exact_1, euler_02[-1], exact_1 - euler_02[-1]]     # 0.736; 0.655; 0.080

euler_01 = euler(lambda x, y: x - y, 0.0, 1.0, 0.1, 10)
WE_3 = [euler_01[-1], exact_1 - euler_01[-1]]              # 0.697; 0.038
euler_005 = euler(lambda x, y: x - y, 0.0, 1.0, 0.05, 20)
WE_4 = [exact_1 - euler_005[-1]]                           # 0.019

# System example (EN and RU): dx/dt = y, dy/dt = t - x, x(0) = 1, y(0) = 0, h = 0.5 (two steps).
rows = euler_system(lambda x, y, t: y, lambda x, y, t: t - x, 1.0, 0.0, 0.0, 0.5, 2)
WE_5 = list(rows[1])                                       # x1, y1, t1 = 1, -0.5, 0.5
WE_6 = list(rows[2])                                       # x2, y2, t2 = 0.75, -0.75, 1
x1, y1, t1 = rows[1]
x2_new = x1 + 0.5 * y1                                     # the mistake: x is updated first
WE_7 = [y1 + 0.5 * (t1 - x2_new)]                          # y then uses the new x: -0.625

# q-5-16-01 (P1): dy/dx = x + y through (1, 2), h = 0.5, two steps to x = 2.
Q1 = [euler(lambda x, y: x + y, 1.0, 2.0, 0.5, 2)[-1]]

# q-5-16-02 (P1): coupled system with t, x(0) = 2, y(0) = 3, h = 0.5, two steps to t = 1.
rows_q2 = euler_system(lambda x, y, t: x + y, lambda x, y, t: t - x, 2.0, 3.0, 0.0, 0.5, 2)
Q2 = [rows_q2[-1][0], rows_q2[-1][1]]                      # x and y at t = 1

# q-5-16-03 (P2): cooling dT/dt = -0.2(T - 20), T(0) = 80.
euler_T = euler(lambda t, T: -0.2 * (T - 20), 0.0, 80.0, 2.0, 2)     # values at t = 0, 2, 4
sol_T = solve_ivp(lambda t, u: [-0.2 * (u[0] - 20)], (0.0, 10.0), [80.0], rtol=1e-12, atol=1e-12, dense_output=True)
temperature = lambda t: float(sol_T.sol(t)[0])
T_4 = temperature(4.0)                                     # exact temperature at t = 4
t_30 = brentq(lambda t: temperature(t) - 30.0, 5.0, 12.0)  # time when the exact temperature is 30
Q3 = [euler_T[-1], T_4, T_4 - euler_T[-1], t_30]

CHECKS = [
    ('we-5-16-euler-first-order-1', WE_1, '0.8; 0.68; 0.624; 0.6192; 0.65536'),
    ('we-5-16-euler-first-order-2', WE_2, '0.736; 0.655; 0.080'),
    ('we-5-16-euler-first-order-3', WE_3, '0.697; 0.038'),
    ('we-5-16-euler-first-order-4', WE_4, '0.019'),
    ('we-5-16-euler-first-order-5', WE_5, '1; -0.5; 0.5'),
    ('we-5-16-euler-first-order-6', WE_6, '0.75; -0.75; 1'),
    ('we-5-16-euler-first-order-7', WE_7, '-0.625'),
    ('q-5-16-01', Q1, None),
    ('q-5-16-02', Q2, None),
    ('q-5-16-03', Q3, None),
]
