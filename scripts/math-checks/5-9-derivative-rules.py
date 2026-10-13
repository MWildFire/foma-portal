"""Numeric checks for topic 5-9-derivative-rules (Derivative rules and related rates). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x, u, r, h = sp.symbols('x u r h')

# Worked example 1 (EN and RU): y = (2x + 1)^5 by the chain rule, at x = 1 (so u = 2x + 1 = 3).
WE1_U = float((2 * x + 1).subs(x, 1))                                   # 3
WE1_DYDU = float(sp.diff(u ** 5, u).subs(u, 3))                         # 405
WE1_DUDX = float(sp.diff(2 * x + 1, x))                                 # 2
WE1_DYDX = float(sp.diff((2 * x + 1) ** 5, x).subs(x, 1))               # 810

# Worked example 2 (EN and RU): y = x e^x by the product rule; the gradient at x = 1 is 2e.
WE2_DYDX = float(sp.diff(x * sp.exp(x), x).subs(x, 1))                  # 2e = 5.4366
WE2_2E = float(2 * sp.E)                                                # 2e

# Worked example 3 (EN and RU): sphere V = (4/3) pi r^3 with r = 5 and dr/dt = 0.2.
WE3_EXPR = (sp.diff(sp.Rational(4, 3) * sp.pi * r ** 3, r) * sp.Rational(1, 5)).subs(r, 5)   # 20 pi
WE3_DVDT = float(WE3_EXPR)                                              # 62.83
WE3_COEF = float(sp.simplify(WE3_EXPR / sp.pi))                         # 20

# Formula examples (EN and RU): d/dx x^(-1) at x = 2; the chain example; x^2 ln x at x = 2.
F_POWER = float(sp.diff(x ** -1, x).subs(x, 2))                         # -0.25
F_CHAIN = WE1_DYDX                                                      # 810
F_PRODUCT = float(sp.diff(x ** 2 * sp.log(x), x).subs(x, 2))            # 4.7726

# Question 1 (EN and RU): gradient of y = e^x/(x+1) at x = 1, which is e/4.
Q01 = float(sp.diff(sp.exp(x) / (x + 1), x).subs(x, 1))                 # 0.67957

# Question 2 (EN and RU): A = pi r^2, dr/dt = 0.5, r = 4, so dA/dt = 4 pi.
Q02 = float((sp.diff(sp.pi * r ** 2, r) * sp.Rational(1, 2)).subs(r, 4))   # 12.566

# Question 3 (EN and RU): conical tank, vertex down, top radius 4 m and height 10 m, so r = 2h/5.
rh = sp.Rational(2, 5) * h
V = sp.Rational(1, 3) * sp.pi * rh ** 2 * h
assert sp.simplify(V - sp.Rational(4, 75) * sp.pi * h ** 3) == 0        # (a): V = 4 pi h^3 / 75
dVdh = sp.diff(V, h)
assert sp.simplify(dVdh - sp.Rational(4, 25) * sp.pi * h ** 2) == 0     # (b): dV/dh = 4 pi h^2 / 25
Q03_DHDT = float(sp.Rational(2) / dVdh.subs(h, 5))                      # (c): dV/dt = 2, so 1/(2 pi)
assert sp.simplify(sp.Rational(2) / dVdh - 25 / (2 * sp.pi * h ** 2)) == 0   # (e): dh/dt = 25/(2 pi h^2)
As = sp.pi * rh ** 2                                                    # surface area of the water
dAsdh = sp.diff(As, h)
Q03_DADT = float(dAsdh.subs(h, 5) * sp.Rational(2) / dVdh.subs(h, 5))   # (d): 0.8
Q03_AS_COEF = float(sp.simplify(As / (sp.pi * h ** 2)))                 # 0.16
Q03_DAS_COEF = float(sp.simplify(dAsdh / (sp.pi * h)))                  # 0.32
Q03_RATIO = float(rh.subs(h, 1))                                        # r/h = 0.4

CHECKS = [
    # Worked example 1: u, du/dx-free values, dy/du and dy/dx in the order they are printed.
    ('we-5-9-derivative-rules-1', [WE1_U, WE1_DYDU, WE1_DUDX, WE1_DYDX], '3; 405; 2; 810'),
    # Worked example 2: the coefficient 2 and the gradient 2e.
    ('we-5-9-derivative-rules-2', [2.0, WE2_2E], '2; 5.44'),
    # Worked example 3: r, dr/dt, r squared, the coefficient 20 and dV/dt.
    ('we-5-9-derivative-rules-3', [5.0, float(sp.Rational(1, 5)), 5.0 ** 2, WE3_COEF, WE3_DVDT], '5; 0.2; 25; 20; 62.83'),
    # Formula examples.
    ('we-5-9-derivative-rules-f1', [F_POWER], '-0.25'),
    ('we-5-9-derivative-rules-f2', [F_CHAIN], '810'),
    ('we-5-9-derivative-rules-f3', [F_PRODUCT], '4.77'),
    # Question 2 markscheme: the rate of change of r and 4 pi.
    ('we-5-9-derivative-rules-m2', [0.5, 4 * float(sp.pi)], '0.5; 12.57'),
    # Question 3 markscheme: r = 0.4h, r^2 = 0.16 h^2, dA/dh = 0.32 pi h, and h = 5.
    ('we-5-9-derivative-rules-m3', [Q03_RATIO, Q03_AS_COEF, Q03_DAS_COEF, 5.0], '0.4; 0.16; 0.32; 5'),
    ('q-5-9-01', Q01, None),
    ('q-5-9-02', Q02, None),
    ('q-5-9-03', [Q03_DHDT, Q03_DADT], None),
]
