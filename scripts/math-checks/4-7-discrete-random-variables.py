"""Numeric checks for topic 4-7-discrete-random-variables (Discrete random variables). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

# Worked example (EN and RU): X takes the values 1, 2 and 4 with probabilities 0.5, 0.3 and 0.2.
VALUES = [1, 2, 4]
PROBS = [Fraction(5, 10), Fraction(3, 10), Fraction(2, 10)]
TOTAL = sum(PROBS)
PRODUCTS = [x * p for x, p in zip(VALUES, PROBS)]
E_X = sum(PRODUCTS)
WE_1 = [float(TOTAL)]
WE_2 = [float(p) for p in PRODUCTS] + [float(E_X)]
WE_3 = [float(E_X - Fraction(25, 10))]  # player pays 2.5 to play

# q-4-7-01: P(X=0) = 0.1, P(X=1) = 0.4, P(X=2) = k, P(X=3) = 0.2; k makes the probabilities add to 1.
K = 1 - Fraction(1, 10) - Fraction(4, 10) - Fraction(2, 10)
E_Q1 = 0 * Fraction(1, 10) + 1 * Fraction(4, 10) + 2 * K + 3 * Fraction(2, 10)

# q-4-7-02: a fair die; the player wins 100 AED on a 6 (probability 1/6) and pays 20 AED to play.
NET_Q2 = 100 * Fraction(1, 6) - 20

# q-4-7-03: 10 tickets, prizes 50 (1 ticket), 20 (2 tickets), 5 (3 tickets) and 0 (4 tickets).
TICKETS = {50: 1, 20: 2, 5: 3, 0: 4}
N_TICKETS = sum(TICKETS.values())
DIST = {prize: Fraction(count, N_TICKETS) for prize, count in TICKETS.items()}
P_ZERO = DIST[0]
E_PRIZE = sum(prize * p for prize, p in DIST.items())
NET_GAIN_Q3C = E_PRIZE - 12
TOTAL_PRIZES_500 = 500 * E_PRIZE
PROFIT_PER_TICKET = 12 - E_PRIZE  # the stall receives 12 AED per ticket sold
LEAST_N = next(n for n in range(1, 10000) if n * PROFIT_PER_TICKET >= 300)

CHECKS = [
    ('we-4-7-discrete-random-variables-1', WE_1, '1'),
    ('we-4-7-discrete-random-variables-2', WE_2, '0.5; 0.6; 0.8; 1.9'),
    ('we-4-7-discrete-random-variables-3', WE_3, '-0.6'),
    ('q-4-7-01', [float(K), float(E_Q1)], None),
    ('q-4-7-02', float(NET_Q2), None),
    ('q-4-7-03', [float(P_ZERO), float(E_PRIZE), float(NET_GAIN_Q3C), float(TOTAL_PRIZES_500), LEAST_N], None),
]
