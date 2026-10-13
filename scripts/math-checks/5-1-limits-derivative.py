"""Numeric checks for topic 5-1-limits-derivative (limits and the derivative). Run by scripts/math-verify.py."""

import sympy as sp

x, h = sp.symbols('x h')
f = x**3 - 6*x**2 + 9*x + 1            # f(x) = x^3 - 6x^2 + 9x + 1
fp = sp.diff(f, x)                     # f'(x) = 3x^2 - 12x + 9


def value(point):
    return f.subs(x, point)


def chord(x0, step):
    """Gradient of the chord from x0 to x0 + step, from the definition, in exact rationals."""
    return (f.subs(x, x0 + step) - f.subs(x, x0)) / step


def volume(t):
    """V(t) in litres for the tank question q-5-1-02."""
    return sp.Rational(1, 2) * t**3 + 4 * t


# Symbolic identities used in the "show that" steps (the assertions stop the file if they ever fail).
assert sp.simplify(chord(1, h) - (h**2 - 3*h)) == 0          # g(h) = -3h + h^2 at x = 1
assert sp.simplify(chord(2, h) - (h**2 - 3)) == 0            # g(h) = -3 + h^2 at x = 2
assert sp.expand(value(2 + h) - (h**3 - 3*h + 3)) == 0       # f(2 + h) = 3 - 3h + h^3

LIMIT_AT_1 = sp.limit(sp.simplify(chord(1, h)), h, 0)        # 0, the gradient of the curve at x = 1
TANGENT_AT_2 = fp.subs(x, 2)                                 # -3
STEP_FOR_MINUS_2_99 = sp.sqrt(sp.Rational(-299, 100) + 3)    # h with -3 + h^2 = -2.99, h > 0: 1/10
RATE_AVG = (volume(sp.Rational('2.001')) - volume(2)) / sp.Rational('0.001')   # 10.0030005

CHECKS = [
    # Worked example (EN and RU): f(1), f(1.1) and g(0.1).
    ('we-5-1-limits-derivative-1', [value(1), value(sp.Rational('1.1')), chord(1, sp.Rational('0.1'))], '5; 4.971; -0.2900'),
    # Worked example: f(1.01) and g(0.01).
    ('we-5-1-limits-derivative-2', [value(sp.Rational('1.01')), chord(1, sp.Rational('0.01'))], '4.999701; -0.0299'),
    # Worked example: the limit of g(h) as h tends to 0.
    ('we-5-1-limits-derivative-3', [LIMIT_AT_1], '0'),
    # q-5-1-01: g(0.1), g(0.01) and the limit (the answer field).
    ('q-5-1-01', [chord(1, sp.Rational('0.1')), chord(1, sp.Rational('0.01')), LIMIT_AT_1], None),
    # q-5-1-02 markscheme: V(2), V(2.001), the change in V and the average rate.
    ('we-5-1-limits-derivative-ms-1', [volume(2), volume(sp.Rational('2.001')), volume(sp.Rational('2.001')) - volume(2), RATE_AVG], '12; 12.010003; 0.010003; 10.003'),
    ('q-5-1-02', [RATE_AVG], None),
    # q-5-1-03 markscheme: f(2), h^2 and h, and g(0.01) with its difference from the gradient -3.
    ('we-5-1-limits-derivative-ms-2', [value(2)], '3'),
    ('we-5-1-limits-derivative-ms-3', [STEP_FOR_MINUS_2_99**2, STEP_FOR_MINUS_2_99], '0.01; 0.100'),
    ('we-5-1-limits-derivative-ms-4', [chord(2, sp.Rational('0.01')), chord(2, sp.Rational('0.01')) - TANGENT_AT_2], '-2.9999; 0.0001'),
    # q-5-1-03 (answer field): gradient at x = 2, h for g(h) = -2.99, and g(0.01) - f'(2).
    ('q-5-1-03', [TANGENT_AT_2, STEP_FOR_MINUS_2_99, chord(2, sp.Rational('0.01')) - TANGENT_AT_2], None),
]
