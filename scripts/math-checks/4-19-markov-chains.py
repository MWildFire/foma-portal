"""Numeric checks for topic 4-19-markov-chains (Markov chains). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Two-state chain (worked example and q-4-19-01): columns of T are the current states A and B, rows the next states.
T2 = np.array([[0.8, 0.3], [0.2, 0.7]])
S0 = np.array([1.0, 0.0])
S1 = T2 @ S0
S2 = T2 @ S1
S10 = np.linalg.matrix_power(T2, 10) @ S0

# Steady state of a two-state chain: solve (T - I)s = 0 with the entries summing to 1 (stacked least squares).
A2 = np.vstack([T2 - np.eye(2), np.ones(2)])
STEADY2 = np.linalg.lstsq(A2, np.array([0.0, 0.0, 1.0]), rcond=None)[0]

# Gym chain (q-4-19-02): first column (0.9, 0.1), second column (0.4, 0.6).
G = np.array([[0.9, 0.4], [0.1, 0.6]])
AG = np.vstack([G - np.eye(2), np.ones(2)])
STEADY_G = np.linalg.lstsq(AG, np.array([0.0, 0.0, 1.0]), rcond=None)[0]

# Weather chain (q-4-19-03): states S, C, D; columns are the current day, rows the next day.
W = np.array([[0.6, 0.4, 0.5], [0.3, 0.2, 0.5], [0.1, 0.4, 0.0]])
DUSTY_DAY3 = (np.linalg.matrix_power(W, 2) @ np.array([1.0, 0.0, 0.0]))[2]
AW = np.vstack([W - np.eye(3), np.ones(3)])
STEADY_W = np.linalg.lstsq(AW, np.array([0.0, 0.0, 0.0, 1.0]), rcond=None)[0]

CHECKS = [
    ('we-4-19-markov-chains-1', list(S1), '0.8; 0.2'),
    ('we-4-19-markov-chains-2', list(S2), '0.70; 0.30'),
    ('we-4-19-markov-chains-3', list(STEADY2), '0.60; 0.40'),
    ('we-4-19-markov-chains-4', list(S10), '0.600; 0.400'),
    ('q-4-19-01', list(S2), None),
    ('q-4-19-02', list(STEADY_G), None),
    ('q-4-19-03', [DUSTY_DAY3, *STEADY_W], None),
]
