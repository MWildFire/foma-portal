"""Numeric checks for topic 1-1-standard-form (standard form a x 10^k). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction


def standard_form(x):
    """Return (a, k) with x = a x 10^k and 1 <= a < 10, computed exactly from a positive Fraction."""
    a = Fraction(x)
    k = 0
    while a >= 10:
        a /= 10
        k += 1
    while a < 1:
        a *= 10
        k -= 1
    return float(a), k


# Worked example (EN and RU), step 1: (3.6 x 10^5) x (2.4 x 10^-3) = 8.64 x 10^2.
WE_1 = list(standard_form(Fraction(36, 10) * Fraction(24, 10) * Fraction(10) ** (5 - 3)))
# Worked example, step 2: 3.8 x 10^3 = 0.38 x 10^4, so the mantissa 0.38 is printed.
WE_2 = [float(Fraction(38, 10) / 10)]
# Worked example, step 3: 4.2 x 10^4 + 0.38 x 10^4 = 4.58 x 10^4 (sum of 42 000 and 3 800).
WE_3 = list(standard_form(Fraction(42000) + Fraction(3800)))

# q-1-1-01: 0.000 000 12 = 12 x 10^-8 = 1.2 x 10^-7.
Q1 = list(standard_form(Fraction(12, 10 ** 8)))

# q-1-1-02: ratio of Earth's mass to the Moon's mass, 5.97 x 10^24 / (7.35 x 10^22), to 3 s.f.
Q2 = list(standard_form(Fraction(597, 100) * 10 ** 24 / (Fraction(735, 100) * 10 ** 22)))

# q-1-1-03 (a): light time from the Sun to the Earth, in seconds (distance 1.496 x 10^11 m, speed 3.00 x 10^8 m/s).
LIGHT_SECONDS = Fraction(1496, 1000) * 10 ** 11 / (Fraction(3, 1) * 10 ** 8)
# q-1-1-03 (b): spacecraft time in days at 1.2 x 10^4 m/s (seconds per day = 86 400).
CRAFT_SECONDS = Fraction(1496, 1000) * 10 ** 11 / (Fraction(12, 10) * 10 ** 4)
CRAFT_DAYS = float(CRAFT_SECONDS / 86400)
# q-1-1-03 (c): ratio of the two journey times.
RATIO = CRAFT_SECONDS / LIGHT_SECONDS
Q3 = list(standard_form(LIGHT_SECONDS)) + [CRAFT_DAYS] + list(standard_form(RATIO))

CHECKS = [
    ('we-1-1-standard-form-1', WE_1, '8.64; 2'),
    ('we-1-1-standard-form-2', WE_2, '0.38'),
    ('we-1-1-standard-form-3', WE_3, '4.58; 4'),
    ('q-1-1-01', Q1, None),
    ('q-1-1-02', Q2, None),
    ('q-1-1-03', Q3, None),
]
