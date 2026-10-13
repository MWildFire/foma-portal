"""Numeric checks for topic 5-14-separation-variables (Differential equations: modelling and separation of variables). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

t, x = sp.symbols('t x')
k = sp.symbols('k', positive=True)
Tf, Nf, Af, yf = sp.Function('T'), sp.Function('N'), sp.Function('A'), sp.Function('y')

# Worked example (cooling): dT/dt = -k(T - 20) with T(0) = 90; general solution from sympy's ODE solver.
T_gen = sp.dsolve(sp.Eq(Tf(t).diff(t), -k*(Tf(t) - 20)), Tf(t), ics={Tf(0): 90}).rhs     # 20 + 70 e^(-kt)
A_WE = T_gen.subs(t, 0) - 20                                  # 70
K_WE = sp.solve(sp.Eq(T_gen.subs(t, 10), 55), k)[0]           # ln(2)/10, from T(10) = 55
T_WE = T_gen.subs(k, K_WE)
assert sp.simplify(T_WE.diff(t) + K_WE*(T_WE - 20)) == 0     # substitution into dT/dt = -k(T - 20)
assert sp.simplify(T_WE.subs(t, 0) - 90) == 0                # initial condition
assert sp.simplify(T_WE.subs(t, 10) - 55) == 0               # T(10) = 55
T20 = T_WE.subs(t, 20)                                        # 37.5
T30_TIME = sp.solve(sp.Eq(T_WE, 30), t)[0]                    # 10 ln 7 / ln 2 = 28.07

# q-5-14-01: dy/dx = 2xy with y(0) = 3; y(1) = 3e.
y_gen = sp.dsolve(sp.Eq(yf(x).diff(x), 2*x*yf(x)), yf(x), ics={yf(0): 3}).rhs
assert sp.simplify(y_gen.diff(x) - 2*x*y_gen) == 0
assert sp.simplify(y_gen.subs(x, 0) - 3) == 0
Q1 = y_gen.subs(x, 1)                                         # 3e = 8.1548

# q-5-14-02: dN/dt = 0.05(600 - N) with N(0) = 100; N(10) = 600 - 500 e^(-0.5).
N_gen = sp.dsolve(sp.Eq(Nf(t).diff(t), sp.Rational(1, 20)*(600 - Nf(t))), Nf(t), ics={Nf(0): 100}).rhs
assert sp.simplify(N_gen.diff(t) - sp.Rational(1, 20)*(600 - N_gen)) == 0
assert sp.simplify(N_gen.subs(t, 0) - 100) == 0
Q2 = N_gen.subs(t, 10)                                        # 296.73

# q-5-14-03: mixing, dA/dt = -A/100 with A(0) = 40.
A_gen = sp.dsolve(sp.Eq(Af(t).diff(t), -Af(t)/100), Af(t), ics={Af(0): 40}).rhs
assert sp.simplify(A_gen.diff(t) + A_gen/100) == 0
assert sp.simplify(A_gen.subs(t, 0) - 40) == 0
Q3_T10 = sp.solve(sp.Eq(A_gen, 10), t)[0]                     # 100 ln 4 = 138.63
Q3_A120 = A_gen.subs(t, 120)                                  # 40 e^(-1.2) = 12.0478

CHECKS = [
    ('we-5-14-separation-variables-1', [A_WE], '70'),
    ('we-5-14-separation-variables-2', [K_WE], '0.0693'),
    ('we-5-14-separation-variables-3', [T20, T30_TIME], '37.5; 28.1'),
    ('q-5-14-01', Q1, None),
    ('q-5-14-02', Q2, None),
    ('q-5-14-03', [Q3_T10, Q3_A120], None),
]
