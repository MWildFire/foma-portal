"""Numeric checks for the three P3 tasks in content/math/p3/questions/p3-a.ts (q-p3-01 to q-p3-03).

Every answer and every number printed in a markscheme is recomputed here from the data in the prompts:
scipy for the regression, the normal and t distributions and the root finding; numpy for the adjacency
matrix power; plain loops for Euler's method and the graph algorithms. Run:
    python3 scripts/math-verify.py p3-a
"""

import math

import numpy as np
from scipy import optimize, stats

# ---- q-p3-01: journey times on a delivery route, parts (a) to (e) ----
DIST = np.array([6, 9, 12, 14, 17, 19, 22, 25, 27, 30], dtype=float)
TIME = np.array([28.7, 31.2, 32.1, 36.8, 44.2, 49.2, 52.5, 61.4, 55.9, 67.2])
FIT = stats.linregress(DIST, TIME)                 # least-squares regression of t on d
R_CORR = FIT.rvalue                                # (a) product-moment r
A_INT, B_GRAD = FIT.intercept, FIT.slope           # (b) t = a + b d
PRED_22 = A_INT + B_GRAD * 22                      # (c) predicted time for 22 km
MEAN_D, MEAN_T = DIST.mean(), TIME.mean()          # the regression line passes through this point
MU_22, SIGMA_22 = 52.4, 3.2                        # normal model stated in part (d)
Z_58 = (58 - MU_22) / SIGMA_22
P_GT_58 = stats.norm.sf(58, MU_22, SIGMA_22)       # (d)(i)
Z_90 = stats.norm.ppf(0.9)
T_90 = stats.norm.ppf(0.9, MU_22, SIGMA_22)        # (d)(ii)
N_JOURNEYS, XBAR, S_SAMPLE, MU_OLD = 36, 49.8, 6.1, 52.0
SE = S_SAMPLE / math.sqrt(N_JOURNEYS)
T_STAT = (XBAR - MU_OLD) / SE                      # (e) one-sample t statistic
P_TWO_TAILED = 2 * stats.t.sf(abs(T_STAT), N_JOURNEYS - 1)
T_CRIT = stats.t.ppf(0.975, N_JOURNEYS - 1)        # critical value for a two-tailed 5% test, df 35

# ---- q-p3-02: logistic users model, parts (b) to (f) ----
L_SAT, K_RATE, P_0 = 60.0, 0.3, 4.0
C_CONST = (L_SAT - P_0) / P_0                      # constant of the solution, 14


def logistic(t):
    return L_SAT / (1 + C_CONST * math.exp(-K_RATE * t))


def growth(p):
    return K_RATE * p * (1 - p / L_SAT)            # dP/dt as a function of P


P_6 = logistic(6)                                  # (b)
PCT_6 = 100 * P_6 / L_SAT
T_50 = optimize.brentq(lambda t: logistic(t) - 50, 0, 100)   # (c)
EULER = [P_0]                                      # (d) Euler steps with h = 1
for _ in range(3):
    EULER.append(EULER[-1] + 1.0 * growth(EULER[-1]))
F_VALUES = [growth(EULER[0]), growth(EULER[1]), growth(EULER[2])]
P_3_EXACT = logistic(3)                            # (e)
ERR_3 = P_3_EXACT - EULER[3]
T_STAR = optimize.brentq(lambda t: logistic(t) - L_SAT / 2, 0, 100)   # (f) growth is fastest at P = L/2
RATE_MAX = -optimize.minimize_scalar(lambda p: -growth(p), bounds=(0, L_SAT), method='bounded').fun

# ---- q-p3-03: campus delivery network, parts (a) to (f) ----
VERTICES = 'ABCDEFG'
IDX = {v: i for i, v in enumerate(VERTICES)}
EDGES = [('A', 'B', 4), ('A', 'C', 6), ('B', 'C', 3), ('B', 'D', 7), ('C', 'D', 5), ('C', 'E', 8),
         ('D', 'E', 4), ('D', 'F', 6), ('E', 'F', 3), ('E', 'G', 7), ('F', 'G', 5)]
ADJ = np.zeros((7, 7), dtype=int)
for u, v, _ in EDGES:
    ADJ[IDX[u], IDX[v]] = ADJ[IDX[v], IDX[u]] = 1
DEGREES = [int(x) for x in ADJ.sum(axis=1)]       # (a) in the order A to G
WALKS_3_AE = int(np.linalg.matrix_power(ADJ, 3)[IDX['A'], IDX['E']])   # (c)


def kruskal(nodes, weighted_edges):
    """Kruskal's algorithm. Returns the weights of the accepted edges, in the order they were accepted."""
    parent = {v: v for v in nodes}

    def root(v):
        while parent[v] != v:
            v = parent[v]
        return v

    accepted = []
    for w, u, v in sorted(weighted_edges):
        ru, rv = root(u), root(v)
        if ru != rv:
            parent[ru] = rv
            accepted.append(w)
    return accepted


MST_WEIGHTS = kruskal(list(range(7)), [(w, IDX[u], IDX[v]) for u, v, w in EDGES])   # (b)
MST_TOTAL = sum(MST_WEIGHTS)


def shortest_times():
    """All-pairs shortest travel times (Floyd-Warshall) on the campus graph."""
    n = 7
    dist = [[math.inf] * n for _ in range(n)]
    for i in range(n):
        dist[i][i] = 0
    for u, v, w in EDGES:
        dist[IDX[u]][IDX[v]] = dist[IDX[v]][IDX[u]] = w
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist


DIST_MAT = shortest_times()


def nearest_neighbour(start):
    """Nearest neighbour on the complete network of shortest times. Returns the route and the step times."""
    route, steps = [start], []
    current, unvisited = start, set(range(7)) - {start}
    while unvisited:
        nxt = min(unvisited, key=lambda j: (DIST_MAT[current][j], VERTICES[j]))
        steps.append(DIST_MAT[current][nxt])
        route.append(nxt)
        unvisited.remove(nxt)
        current = nxt
    steps.append(DIST_MAT[current][start])
    route.append(start)
    return route, steps


NN_ROUTE, NN_STEPS = nearest_neighbour(IDX['A'])  # (d)
NN_TOTAL = sum(NN_STEPS)
REST = [i for i in range(7) if i != IDX['A']]     # (e) delete A, then find the minimum spanning tree
REST_WEIGHTS = kruskal(REST, [(DIST_MAT[i][j], i, j) for i in REST for j in REST if i < j])
TWO_FROM_A = sorted(DIST_MAT[IDX['A']][j] for j in REST)[:2]
LOWER_BOUND = sum(REST_WEIGHTS) + sum(TWO_FROM_A)
ROUTE_F = ['A', 'B', 'D', 'F', 'G', 'E', 'C', 'A']   # (f)
ROUTE_F_STEPS = [DIST_MAT[IDX[x]][IDX[y]] for x, y in zip(ROUTE_F, ROUTE_F[1:])]
ROUTE_F_TOTAL = sum(ROUTE_F_STEPS)

CHECKS = [
    # numbers printed in the markschemes (worked steps), in the same order as the markschemes print them
    ('we-p3-a-01', Z_58, '1.75'),                          # q-p3-01 (d)(i): z for 58 minutes
    ('we-p3-a-02', Z_90, '1.28'),                          # q-p3-01 (d)(ii): z for 90%
    ('we-p3-a-03', SE, '1.02'),                            # q-p3-01 (e): s / sqrt(n)
    ('we-p3-a-04', T_CRIT, '2.030'),                       # q-p3-01 (e): critical value, df 35
    ('we-p3-a-05', [MEAN_D, MEAN_T], '18.1; 45.9'),        # q-p3-01 (b): mean point of the regression
    ('we-p3-a-06', C_CONST, '14'),                         # q-p3-02 (a): C = (60 - 4) / 4
    ('we-p3-a-07', F_VALUES, '1.12; 1.405; 1.745'),        # q-p3-02 (d): f(4), f(5.12), f(6.525)
    ('we-p3-a-08', L_SAT / 2, '30'),                       # q-p3-02 (f): P = L / 2
    ('we-p3-a-09', NN_STEPS, '4; 3; 5; 4; 3; 5; 21'),      # q-p3-03 (d): nearest neighbour steps
    ('we-p3-a-10', MST_WEIGHTS, '3; 3; 4; 4; 5; 5'),       # q-p3-03 (b): edges of the tree
    ('we-p3-a-11', REST_WEIGHTS, '3; 3; 4; 5; 5'),         # q-p3-03 (e): tree on the other six buildings
    ('we-p3-a-12', TWO_FROM_A, '4; 6'),                    # q-p3-03 (e): two shortest times from A
    ('we-p3-a-13', ROUTE_F_STEPS, '4; 7; 6; 5; 7; 8; 6'),  # q-p3-03 (f): steps of the route A B D F G E C A
    ('we-p3-a-14', len(MST_WEIGHTS), '6'),                 # q-p3-03 (b): number of edges of the tree
    ('we-p3-a-15', sum(REST_WEIGHTS), '20'),               # q-p3-03 (e): weight of the tree without A
    # answers, in part order (the verifier compares each value with the answer field)
    ('q-p3-01', [R_CORR, A_INT, B_GRAD, PRED_22, P_GT_58, T_90, T_STAT, P_TWO_TAILED], None),
    ('q-p3-02', [P_6, PCT_6, T_50, EULER[1], EULER[2], EULER[3], P_3_EXACT, ERR_3, T_STAR, RATE_MAX], None),
    ('q-p3-03', DEGREES + [MST_TOTAL, WALKS_3_AE, NN_TOTAL, LOWER_BOUND, ROUTE_F_TOTAL], None),
]
