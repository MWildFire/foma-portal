"""Numeric checks for topic 4-8-binomial (Binomial distribution). Run python3 scripts/math-verify.py to evaluate them."""

from scipy import stats

# Worked example (EN and RU): X ~ B(10, 0.7). P(X = 8); P(X >= 9) = P(X > 8); mean and variance.
WE_1 = [stats.binom.pmf(8, 10, 0.7)]
WE_2 = [stats.binom.sf(8, 10, 0.7)]
WE_3 = [stats.binom.mean(10, 0.7), stats.binom.var(10, 0.7)]

# q-4-8-03 (d): least n with P(at least one faulty bottle among n) > 0.95, for p = 0.04.
P_FAULT = 0.04
LEAST_N = next(n for n in range(1, 500) if stats.binom.sf(0, n, P_FAULT) > 0.95)

CHECKS = [
    ('we-4-8-binomial-1', WE_1, '0.233'),
    ('we-4-8-binomial-2', WE_2, '0.149'),
    ('we-4-8-binomial-3', WE_3, '7; 2.1'),
    ('q-4-8-01', stats.binom.pmf(3, 8, 0.25), None),                     # P(X = 3), X ~ B(8, 0.25)
    ('q-4-8-02', stats.binom.sf(1, 12, 0.05), None),                     # P(Y >= 2), Y ~ B(12, 0.05)
    ('q-4-8-03', [
        stats.binom.mean(20, P_FAULT),                                   # (b) E(X)
        stats.binom.var(20, P_FAULT),                                    # (b) Var(X)
        stats.binom.pmf(2, 20, P_FAULT),                                 # (c) P(X = 2)
        stats.binom.sf(0, 20, P_FAULT),                                  # (c) P(X >= 1)
        LEAST_N,                                                         # (d) least n
        stats.binom.sf(2, 20, P_FAULT),                                  # (e) P(X >= 3)
    ], None),
]
