"""Numeric checks for topic 1-11-infinite-geometric (Sum of an infinite geometric sequence). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

# Worked example (EN and RU): u1 = 36 and r = -1/3, exact fractions.
U1 = Fraction(36)
R = Fraction(-1, 3)
WE_1 = [float(U1 / (1 - R))]                        # S_infinity = 27
WE_2 = [float(U1 * (1 - R ** 10) / (1 - R)), 27.0]  # S_10 = 26.99954..., and 27.000 to 3 decimal places
WE_3 = [float(U1 * R ** 2)]                         # third term of the sequence: 4

# q-1-11-01: u1 = 12 and r = -0.25, S = u1 / (1 - r).
Q01 = float(Fraction(12) / (1 - Fraction(-1, 4)))

# q-1-11-02: S = u1 / (1 - r) gives r = 1 - u1 / S, with u1 = 10 and S = 40.
Q02 = float(1 - Fraction(10, 40))


def total_distance(bounces, factor, first_height=2.0):
    """Distance after the given number of complete bounces: one initial fall, then a rise and a fall per bounce."""
    distance = first_height
    height = first_height
    for _ in range(bounces):
        height = height * factor
        distance += 2 * height
    return distance


TOTAL_06 = total_distance(400, 0.6)  # the total of part (b), 8 m (400 bounces leave a negligible remainder)
LEAST_N = next(n for n in range(200) if TOTAL_06 - total_distance(n, 0.6) < 0.01)

Q03 = [
    float(2 * Fraction(3, 5) ** 3),   # (a) height after the 3rd bounce, 0.432 m
    LEAST_N,                          # (d) least n with less than 0.01 m still to cover
    total_distance(400, 0.9),         # (e) second ball with factor 0.9, total 38 m
]

CHECKS = [
    ('we-1-11-infinite-geometric-1', WE_1, '27'),
    ('we-1-11-infinite-geometric-2', WE_2, '26.99954; 27.000'),
    ('we-1-11-infinite-geometric-3', WE_3, '4'),
    ('q-1-11-01', Q01, None),
    ('q-1-11-02', Q02, None),
    ('q-1-11-03', Q03, None),
]
