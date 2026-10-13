"""Numeric checks for topic 5-2-increasing-decreasing (increasing and decreasing functions). Run by scripts/math-verify.py."""

import sympy as sp

x = sp.symbols('x')
f = x**3 - 6*x**2 + 9*x + 1          # the function of the worked example and of q-5-2-03
fp = sp.diff(f, x)                   # f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)
g = x**3 - 3*x                       # the function of q-5-2-02
gp = sp.diff(g, x)                   # g'(x) = 3x^2 - 3

assert sp.expand(fp - 3*(x - 1)*(x - 3)) == 0     # part (a) of q-5-2-03

ZEROS = sorted(sp.solve(sp.Eq(fp, 0), x), key=float)                       # [1, 3]
INC_F = sp.solve_univariate_inequality(fp > 0, x, relational=False)         # f increasing where f' > 0
INC_IN_DOMAIN = sp.Intersection(sp.Interval(-1, 5), INC_F)                  # [-1, 1) and (3, 5]
INC_PIECES = list(INC_IN_DOMAIN.args) if isinstance(INC_IN_DOMAIN, sp.Union) else [INC_IN_DOMAIN]
DEC_G = sp.solve_univariate_inequality(gp < 0, x, relational=False)         # (-1, 1)
ROOTS_OF_9 = sorted(sp.solve(sp.Eq(fp, 9), x), key=float)                    # x(x - 4) = 0: [0, 4]
X_IN_3_TO_5 = [r for r in ROOTS_OF_9 if 3 < r <= 5]                          # [4]

CHECKS = [
    # Worked example: the zeros of f'(x).
    ('we-5-2-increasing-decreasing-1', [float(r) for r in ZEROS], '1; 3'),
    # Worked example: test values f'(0), f'(2), f'(4).
    ('we-5-2-increasing-decreasing-2', [float(fp.subs(x, v)) for v in (0, 2, 4)], '9; -3; 9'),
    # q-5-2-03 markscheme: lengths of the two increasing pieces in -1 <= x <= 5, and their total.
    ('we-5-2-increasing-decreasing-ms-1', [float(p.measure) for p in INC_PIECES] + [float(INC_IN_DOMAIN.measure)], '2; 2; 4'),
    # q-5-2-03 markscheme: f'(2).
    ('we-5-2-increasing-decreasing-ms-2', [float(fp.subs(x, 2))], '-3'),
    # q-5-2-03 markscheme: the roots of x(x - 4) = 0.
    ('we-5-2-increasing-decreasing-ms-3', [float(r) for r in ROOTS_OF_9], '0; 4'),
    ('q-5-2-01', [float(r) for r in ZEROS], None),
    ('q-5-2-02', [float(DEC_G.start), float(DEC_G.end)], None),
    ('q-5-2-03', [float(r) for r in ZEROS] + [float(INC_IN_DOMAIN.measure), float(fp.subs(x, 2)), float(X_IN_3_TO_5[0])], None),
]
