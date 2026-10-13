"""Numeric checks for topic 5-10-second-derivative (The second derivative). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x = sp.symbols('x', real=True)
t = sp.symbols('t', real=True)

# Worked example, steps 1 and 2: f(x) = x^3 - 6x^2 + 9x + 1.
f = x**3 - 6*x**2 + 9*x + 1
fp = sp.diff(f, x)
fpp = sp.diff(f, x, 2)
WE_1 = [float(r) for r in sorted(sp.solve(sp.Eq(fp, 0), x))]     # stationary points x = 1 and x = 3
WE_2 = [float(fpp.subs(x, 1)), float(fpp.subs(x, 3))]             # f''(1) = -6, f''(3) = 6
WE_3 = [float(f.subs(x, 1)), float(f.subs(x, 3))]                 # f(1) = 5, f(3) = 1

# Worked example, step 3: g(x) = x e^(-x), stationary at x = 1.
g = x * sp.exp(-x)
assert sp.simplify(sp.diff(g, x).subs(x, 1)) == 0
WE_4 = [float(sp.diff(g, x, 2).subs(x, 1)), float(g.subs(x, 1))]  # g''(1) = -e^(-1), g(1) = e^(-1)

# q-5-10-01: f(x) = 3 ln x + x^2 for x > 0, find f''(2).
q1 = float(sp.diff(3 * sp.log(x) + x**2, x, 2).subs(x, 2))        # -3/4 + 2

# q-5-10-02: f(x) = x^4 - 8x^2 + 5, local maximum value and local minimum value.
h = x**4 - 8 * x**2 + 5
hp = sp.diff(h, x)
hpp = sp.diff(h, x, 2)
roots = sorted(sp.solve(sp.Eq(hp, 0), x))
maxima = [r for r in roots if float(hpp.subs(x, r)) < 0]
minima = [r for r in roots if float(hpp.subs(x, r)) > 0]
q2 = [float(h.subs(x, maxima[0])), float(h.subs(x, minima[0]))]   # 5 and -11

# q-5-10-03: C(t) = 4t e^(-0.5t): time of maximum, greatest concentration, C''(2), C'(6).
C = 4 * t * sp.exp(-sp.Rational(1, 2) * t)
Cp = sp.diff(C, t)
Cpp = sp.diff(C, t, 2)
t_max = [r for r in sp.solve(sp.Eq(Cp, 0), t) if float(r) > 0][0]
q3 = [float(t_max), float(C.subs(t, t_max)), float(Cpp.subs(t, 2)), float(Cp.subs(t, 6))]

CHECKS = [
    ('we-5-10-second-derivative-1', WE_1, '1; 3'),
    ('we-5-10-second-derivative-2', WE_2, '-6; 6'),
    ('we-5-10-second-derivative-3', WE_3, '5; 1'),
    ('we-5-10-second-derivative-4', WE_4, '-0.368; 0.368'),
    ('q-5-10-01', q1, None),
    ('q-5-10-02', q2, None),
    ('q-5-10-03', q3, None),
]
