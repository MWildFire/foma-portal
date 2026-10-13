"""Numeric checks for topic 3-15-adjacency-walks (adjacency matrices and walks). Run python3 scripts/math-verify.py to evaluate them."""

from fractions import Fraction

import numpy as np


def adjacency(n, arcs, directed=False):
    matrix = np.zeros((n, n), dtype=int)
    for u, v in arcs:
        matrix[u][v] = 1
        if not directed:
            matrix[v][u] = 1
    return matrix


def walks_enumerated(matrix, start, end, length):
    """Explicit enumeration: count every sequence of vertices of the given length joined by edges or arcs."""
    def extend(vertex, steps):
        if steps == length:
            return 1 if vertex == end else 0
        return sum(extend(nxt, steps + 1) for nxt in range(len(matrix)) if matrix[vertex][nxt])
    return extend(start, 0)


def walks(matrix, start, end, length):
    """Walks of exactly this length from start to end: an entry of the matrix power, checked by enumeration."""
    value = int(np.linalg.matrix_power(matrix, length)[start][end])
    assert value == walks_enumerated(matrix, start, end, length), 'matrix power and enumeration disagree'
    return value


def walks_at_most(matrix, start, end, length):
    return sum(walks(matrix, start, end, r) for r in range(1, length + 1))


def strongly_connected(matrix):
    n = len(matrix)
    reach = ((np.eye(n, dtype=int) + matrix) > 0).astype(int)
    return bool((np.linalg.matrix_power(reach, n) > 0).all())


def fraction_power(matrix, power):
    n = len(matrix)
    result = [[Fraction(int(i == j)) for j in range(n)] for i in range(n)]
    for _ in range(power):
        result = [[sum((result[i][m] * matrix[m][j] for m in range(n)), Fraction(0)) for j in range(n)]
                  for i in range(n)]
    return result


# Worked example (EN and RU): undirected graph on A, B, C, D, E (indices 0 to 4); edges AB, AC, BC, BD, CD, DE.
G = adjacency(5, [(0, 1), (0, 2), (1, 2), (1, 3), (2, 3), (3, 4)])
WE_1 = [int(x) for x in G.flatten()]                        # the 25 entries of the adjacency matrix, row by row
WE_2 = [walks(G, 0, 3, 3)]                                  # walks of length 3 from A to D
WE_3 = [walks(G, 0, 3, 1), walks(G, 0, 3, 2), walks(G, 0, 3, 3), walks_at_most(G, 0, 3, 3)]   # 0, 2, 2, 4

# q-3-15-01: simple graph on P, Q, R, S (indices 0 to 3); edges PQ, PR, QR, QS, RS. Walks of length 3 from Q to S.
H4 = adjacency(4, [(0, 1), (0, 2), (1, 2), (1, 3), (2, 3)])
Q1 = walks(H4, 1, 3, 3)

# q-3-15-02: digraph on X, Y, Z (indices 0 to 2); arcs X to Y, Y to X, Y to Z, Z to X. Walks of length at most 3, Y to X.
D3 = adjacency(3, [(0, 1), (1, 0), (1, 2), (2, 0)], directed=True)
Q2 = walks_at_most(D3, 1, 0, 3)

# q-3-15-03: strongly connected digraph on depots A to E (indices 0 to 4), with travel times in minutes.
ARCS5 = [(0, 1), (0, 2), (1, 3), (2, 1), (2, 4), (3, 0), (3, 4), (4, 0)]
TIMES = {(0, 1): 4, (0, 2): 2, (1, 3): 3, (2, 1): 5, (2, 4): 6, (3, 0): 2, (3, 4): 1, (4, 0): 3}
D5 = adjacency(5, ARCS5, directed=True)
assert strongly_connected(D5)
WALK_ACES = [(0, 2), (2, 4), (4, 0)]                        # A to C to E to A
assert all(arc in TIMES for arc in WALK_ACES)
Q3_A = sum(TIMES[arc] for arc in WALK_ACES)                 # 2 + 6 + 3 = 11 minutes
Q3_B = walks(D5, 0, 3, 3)                                   # 1: the walk A to C to B to D
Q3_C = walks_at_most(D5, 0, 1, 4)                           # 1 + 1 + 0 + 2 = 4
T = [[Fraction(int(D5[i][j]), int(D5[i].sum())) for j in range(5)] for i in range(5)]
assert all(sum(row) == 1 for row in T)
Q3_D = float(fraction_power(T, 2)[0][4])                    # 1/4 = 0.25
Q3_E = float(fraction_power(T, 3)[0][0])                    # 1/2 = 0.5

# Markscheme figures of the questions.
Q2_STEPS = [walks(D3, 1, 0, r) for r in (1, 2, 3)]          # Y-X, Y-Z-X, Y-X-Y-X: 1, 1, 1
Q3_C_ENTRIES = [walks(D5, 0, 1, r) for r in (1, 2, 3, 4)]   # row A, column B of the powers: 1, 1, 0, 2
Q3_E_PATHS = [float(T[0][1] * T[1][3] * T[3][0]), float(T[0][2] * T[2][4] * T[4][0])]   # 1/4 and 1/4

CHECKS = [
    ('we-3-15-adjacency-walks-1', WE_1,
     '0; 1; 1; 0; 0; 1; 0; 1; 1; 0; 1; 1; 0; 1; 0; 0; 1; 1; 0; 1; 0; 0; 0; 1; 0'),
    ('we-3-15-adjacency-walks-2', WE_2, '2'),
    ('we-3-15-adjacency-walks-3', WE_3, '0; 2; 2; 4'),
    ('q-3-15-01', Q1, None),
    ('q-3-15-02', Q2, None),
    ('we-3-15-adjacency-walks-4', Q2_STEPS, '1; 1; 1'),
    ('we-3-15-adjacency-walks-5', Q3_C_ENTRIES, '1; 1; 0; 2'),
    ('we-3-15-adjacency-walks-6', Q3_E_PATHS, '0.250; 0.250'),
    ('q-3-15-03', [Q3_A, Q3_B, Q3_C, Q3_D, Q3_E], None),
]
