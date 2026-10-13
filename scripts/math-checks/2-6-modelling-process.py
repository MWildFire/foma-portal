"""Numeric checks for topic 2-6-modelling-process (The modelling process). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np

# Worked example (EN and RU): Dubai monthly average highs in degrees C (illustrative values), t = 1 for January.
MONTHS = np.array([3, 4, 5, 6, 7, 8, 9, 10], dtype=float)
HIGHS = np.array([28.7, 33.4, 38.1, 40.8, 41.9, 42.1, 39.8, 35.9])
A, B, C = np.polyfit(MONTHS, HIGHS, 2)                    # quadratic least squares
MODEL = np.poly1d([A, B, C])
VERTEX_T = -B / (2 * A)                                   # month of the peak
PEAK = float(MODEL(VERTEX_T))
JUNE = float(MODEL(6))
JANUARY = float(MODEL(1))
MAX_RESIDUAL = float(np.max(np.abs(HIGHS - MODEL(MONTHS))))

# q-2-6-01: sales S (thousand AED) for t = 1..6: least-squares line S = mt + c, prediction at t = 9.
T_SALES = np.arange(1, 7, dtype=float)
S_SALES = np.array([41.2, 43.5, 44.1, 47.0, 48.6, 50.4])
M, C_LINE = np.polyfit(T_SALES, S_SALES, 1)
S9 = M * 9 + C_LINE

# q-2-6-02: speed model v = 110 - 1.8n: residual at n = 30 for observed 57.3, and n where v = 0.
RESIDUAL_30 = 57.3 - (110 - 1.8 * 30)
N_ZERO = 110 / 1.8

# q-2-6-03: population P (thousands) for t = 0..4: exponential model P = k a^t, least squares on ln P.
T_POP = np.arange(0, 5, dtype=float)
P_POP = np.array([118, 127, 137, 148, 160], dtype=float)
SLOPE, INTERCEPT = np.polyfit(T_POP, np.log(P_POP), 1)
K = float(np.exp(INTERCEPT))
GROWTH = float(np.exp(SLOPE))
P10 = K * GROWTH**10
LEAST_T = next(t for t in range(0, 100) if K * GROWTH**t > 300)

CHECKS = [
    ('we-2-6-modelling-process-0', [1, 3, 6, 10], '1; 3; 6; 10'),
    ('we-2-6-modelling-process-1', list(HIGHS), '28.7; 33.4; 38.1; 40.8; 41.9; 42.1; 39.8; 35.9'),
    ('we-2-6-modelling-process-2', [A, B, C], '-0.766; 11.1; 1.85'),
    ('we-2-6-modelling-process-3', [VERTEX_T, PEAK, JUNE], '7.24; 42.03; 40.85'),
    ('we-2-6-modelling-process-4', JANUARY, '12.18'),
    ('we-2-6-modelling-process-5', MAX_RESIDUAL, '0.6'),
    ('q-2-6-01', [M, C_LINE, S9], None),
    ('q-2-6-02', [RESIDUAL_30, N_ZERO], None),
    ('q-2-6-03', [P_POP[1] / P_POP[0], P_POP[4] / P_POP[3], K, GROWTH, P10, LEAST_T], None),
]
