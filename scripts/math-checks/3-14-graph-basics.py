"""Numeric checks for topic 3-14-graph-basics (graph theory: basic definitions). Run python3 scripts/math-verify.py to evaluate them."""

from itertools import combinations

import numpy as np


def adjacency(n, edges):
    matrix = np.zeros((n, n), dtype=int)
    for u, v in edges:
        matrix[u][v] = matrix[v][u] = 1
    return matrix


# Worked example graph G: vertices A, B, C, D, E (indices 0 to 4); edges AB, AC, BC, BD, CD, DE.
G_EDGES = [(0, 1), (0, 2), (1, 2), (1, 3), (2, 3), (3, 4)]
G = adjacency(5, G_EDGES)
DEG = [int(x) for x in G.sum(axis=1)]                      # [2, 3, 3, 3, 1]
assert DEG == [sum(v in edge for edge in G_EDGES) for v in range(5)]  # explicit count of edge ends
assert sum(DEG) == 2 * len(G_EDGES)                         # handshaking
assert len(G_EDGES) != (5 - 1)                              # 6 edges, a tree on 5 vertices has 4: not a tree
SUB_EDGES = [edge for edge in G_EDGES if 4 not in edge]     # delete vertex E and its edge DE
WE_1 = DEG + [int(G.sum()), len(G_EDGES)]                   # [2, 3, 3, 3, 1, 12, 6]
WE_2 = [5 - 1]                                              # tree on 5 vertices: n - 1 edges
WE_3 = [len(SUB_EDGES)]                                     # 5 edges left
WE_4 = [10 * 9 // 2]                                        # complete graph K10: n(n - 1)/2 edges
WE_5 = [2 + 1 + 3 + 2]                                      # total out-degree of a digraph = number of arcs
WE_6 = [7 - 1]                                              # tree on 7 vertices
WE_7 = [9 * 8 // 2, 10 * 9 // 2]                            # markscheme of q-3-14-01: 36 edges for n = 9, 45 for n = 10
WE_8 = [6 * 5 // 2, 6 - 1]                                  # markscheme of q-3-14-03: 15 pairs of rooms, 5 doors for a tree

# q-3-14-01: a complete graph with n vertices has n(n - 1)/2 edges; find n for 45 edges.
N_FOR_45 = next(n for n in range(1, 100) if n * (n - 1) // 2 == 45)

# q-3-14-02: directed graph on P, Q, R, S (indices 0 to 3). Out-degrees 2, 1, 3, 2; in-degrees of P, Q, R 1, 3, 2.
OUT_DEG = [2, 1, 3, 2]
IN_KNOWN = [1, 3, 2]
ARCS = [(2, 0), (2, 1), (2, 3), (0, 1), (0, 3), (1, 2), (3, 1), (3, 2)]   # one digraph that realises the data
assert [sum(1 for u, _ in ARCS if u == v) for v in range(4)] == OUT_DEG
IN_S = sum(OUT_DEG) - sum(IN_KNOWN)                         # total arcs minus the other in-degrees
assert [sum(1 for _, w in ARCS if w == v) for v in range(4)] == IN_KNOWN + [IN_S]

# q-3-14-03: rooms A to F (indices 0 to 5) joined by doors AB, AC, BC, BD, CE, DE, DF, EF.
ROOMS = adjacency(6, [(0, 1), (0, 2), (1, 2), (1, 3), (2, 4), (3, 4), (3, 5), (4, 5)])
DEG_D = int(ROOMS[3].sum())                                 # 3
SUM_DEG = int(ROOMS.sum())                                  # 16
DOORS = SUM_DEG // 2                                        # 8
NOT_JOINED = sum(1 for i, j in combinations(range(6), 2) if ROOMS[i][j] == 0)   # 15 - 8 = 7
DOORS_IN_H = sum(1 for i, j in combinations(range(5), 2) if ROOMS[i][j])          # H without F: 6
assert DOORS != 6 - 1                                       # 8 doors, a tree on 6 rooms has 5: not a tree

CHECKS = [
    ('we-3-14-graph-basics-1', WE_1, '2; 3; 3; 3; 1; 12; 6'),
    ('we-3-14-graph-basics-2', WE_2, '4'),
    ('we-3-14-graph-basics-3', WE_3, '5'),
    ('we-3-14-graph-basics-4', WE_4, '45'),
    ('we-3-14-graph-basics-5', WE_5, '8'),
    ('we-3-14-graph-basics-6', WE_6, '6'),
    ('we-3-14-graph-basics-7', WE_7, '36; 45'),
    ('we-3-14-graph-basics-8', WE_8, '15; 5'),
    ('q-3-14-01', N_FOR_45, None),
    ('q-3-14-02', IN_S, None),
    ('q-3-14-03', [DEG_D, SUM_DEG, DOORS, NOT_JOINED, DOORS_IN_H], None),
]
