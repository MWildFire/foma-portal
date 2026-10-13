"""Numeric checks for topic 3-16-graph-algorithms (Graph algorithms). Run python3 scripts/math-verify.py to evaluate them."""

import itertools

import numpy as np
from scipy.sparse.csgraph import minimum_spanning_tree

# Weighted graphs as (u, v, weight). W: six sites (Kruskal, Prim). P: postman graph with four odd vertices.
# K: complete graph on five vertices (travelling salesman). Q1, Q2, R, H: exam question graphs.
W_V = list('ABCDEF')
W = [('A', 'B', 4), ('A', 'C', 3), ('B', 'C', 6), ('B', 'D', 5), ('C', 'D', 8), ('C', 'E', 9), ('D', 'E', 7), ('D', 'F', 10), ('E', 'F', 2)]
V5 = list('ABCDE')
P = [('A', 'B', 5), ('A', 'C', 6), ('A', 'D', 3), ('A', 'E', 12), ('B', 'C', 1), ('B', 'E', 7), ('C', 'E', 2)]
K = [('A', 'B', 1), ('A', 'C', 2), ('A', 'D', 8), ('A', 'E', 5), ('B', 'C', 10), ('B', 'D', 16), ('B', 'E', 11), ('C', 'D', 7), ('C', 'E', 13), ('D', 'E', 9)]
Q1 = [('A', 'B', 12), ('A', 'C', 8), ('A', 'D', 9), ('A', 'E', 1), ('B', 'C', 7), ('B', 'D', 11), ('C', 'E', 4)]
Q2 = [('A', 'B', 2), ('A', 'C', 7), ('A', 'D', 12), ('A', 'E', 5), ('B', 'C', 10), ('B', 'E', 4), ('C', 'D', 11)]
R = [('A', 'B', 3), ('A', 'C', 10), ('A', 'D', 5), ('B', 'C', 1), ('B', 'D', 11), ('B', 'E', 9), ('C', 'D', 7)]
H = [('A', 'B', 11), ('A', 'C', 18), ('A', 'D', 3), ('A', 'E', 20), ('B', 'C', 8), ('B', 'D', 6), ('B', 'E', 5), ('C', 'D', 13), ('C', 'E', 10), ('D', 'E', 4)]


def weights(edges):
    table = {}
    for u, v, w in edges:
        table[(u, v)] = w
        table[(v, u)] = w
    return table


def degrees(vertices, edges):
    deg = {v: 0 for v in vertices}
    for u, v, _ in edges:
        deg[u] += 1
        deg[v] += 1
    return deg


def connects_all(vertices, edges):
    reach = {vertices[0]}
    grew = True
    while grew:
        grew = False
        for u, v, _ in edges:
            if (u in reach) != (v in reach):
                reach |= {u, v}
                grew = True
    return reach == set(vertices)


def kruskal(vertices, edges):
    """Edges in the order Kruskal examines them, with True (accepted) or False (rejected); stops when the tree is complete."""
    parent = {v: v for v in vertices}

    def find(x):
        while parent[x] != x:
            x = parent[x]
        return x

    trace = []
    for edge in sorted(edges, key=lambda e: e[2]):
        a, b = find(edge[0]), find(edge[1])
        accepted = a != b
        if accepted:
            parent[a] = b
        trace.append((edge, accepted))
        if sum(1 for _, ok in trace if ok) == len(vertices) - 1:
            break
    return trace


def prim(vertices, edges, start):
    """Edges in the order Prim adds them, growing one tree from start."""
    inside, order = {start}, []
    while len(inside) < len(vertices):
        crossing = [e for e in edges if (e[0] in inside) != (e[1] in inside)]
        edge = min(crossing, key=lambda e: e[2])
        order.append(edge)
        inside |= {edge[0], edge[1]}
    return order


def mst_weight(vertices, edges):
    """Minimum spanning tree weight by scipy (independent of the Kruskal code above)."""
    index = {v: i for i, v in enumerate(vertices)}
    m = np.zeros((len(vertices), len(vertices)))
    for u, v, w in edges:
        m[index[u], index[v]] = w
        m[index[v], index[u]] = w
    return float(minimum_spanning_tree(m).sum())


def mst_exhaustive(vertices, edges):
    """Least total weight of n - 1 edges that connect all vertices (every choice is tried)."""
    best = None
    for chosen in itertools.combinations(edges, len(vertices) - 1):
        if connects_all(vertices, chosen):
            total = sum(e[2] for e in chosen)
            best = total if best is None else min(best, total)
    return best


def shortest(vertices, edges, a, b):
    """Shortest route from a to b, found by checking every simple path: (length, vertex list)."""
    table = weights(edges)
    found = []

    def walk(node, seen, path, length):
        if node == b:
            found.append((length, path))
            return
        for other in vertices:
            if (node, other) in table and other not in seen:
                walk(other, seen | {other}, path + [other], length + table[(node, other)])

    walk(a, {a}, [a], 0)
    return min(found)


def pairings(items):
    if not items:
        yield []
        return
    first, rest = items[0], items[1:]
    for k, other in enumerate(rest):
        for tail in pairings(rest[:k] + rest[k + 1:]):
            yield [(first, other)] + tail


def postman(vertices, edges):
    """Each pairing of the odd vertices as (repeated length, pairs, shortest routes), least first."""
    odd = [v for v, d in degrees(vertices, edges).items() if d % 2]
    options = []
    for pairing in pairings(odd):
        parts = [shortest(vertices, edges, a, b) for a, b in pairing]
        options.append((sum(p[0] for p in parts), pairing, [p[1] for p in parts]))
    return sorted(options)


def route_length(vertices, edges, option):
    """Total weight after repeating the routes of one pairing; all degrees must then be even and the graph connected."""
    table = weights(edges)
    repeated = [(p[i], p[i + 1], table[(p[i], p[i + 1])]) for p in option[2] for i in range(len(p) - 1)]
    multi = list(edges) + repeated
    assert all(d % 2 == 0 for d in degrees(vertices, multi).values()), 'route has an odd vertex'
    assert connects_all(vertices, multi), 'route does not reach every vertex'
    return sum(e[2] for e in multi)


def cycle_weight(edges, ring):
    table = weights(edges)
    return sum(table[(ring[i], ring[i + 1])] for i in range(len(ring) - 1))


def tsp_exhaustive(vertices, edges):
    """Least Hamiltonian cycle, checking every cycle once: ((weight, cycle), number of cycles)."""
    best, count = None, 0
    for perm in itertools.permutations(vertices[1:]):
        if perm[0] > perm[-1]:
            continue
        count += 1
        ring = (vertices[0],) + perm + (vertices[0],)
        total = cycle_weight(edges, ring)
        if best is None or total < best[0]:
            best = (total, ''.join(ring))
    return best, count


def nearest_neighbour(vertices, edges, start):
    """Nearest-neighbour tour from start: (total weight, vertex list including the return to start)."""
    table = weights(edges)
    tour, total, left = [start], 0, [v for v in vertices if v != start]
    while left:
        here = tour[-1]
        costs = sorted(table[(here, v)] for v in left)
        assert len(costs) == 1 or costs[0] != costs[1], 'tie in nearest neighbour'
        nxt = min(left, key=lambda v: table[(here, v)])
        total += table[(here, nxt)]
        tour.append(nxt)
        left.remove(nxt)
    total += table[(tour[-1], start)]
    return total, tour + [start]


def deleted_vertex(vertices, edges, v):
    """Lower bound: minimum spanning tree without v plus the two cheapest edges from v: (bound, tree edges, two edges)."""
    rest = [x for x in vertices if x != v]
    kept = [e for e in edges if v not in (e[0], e[1])]
    spokes = sorted((e for e in edges if v in (e[0], e[1])), key=lambda e: e[2])[:2]
    tree = [edge for edge, ok in kruskal(rest, kept) if ok]
    assert abs(mst_weight(rest, kept) - sum(e[2] for e in tree)) < 1e-9
    return sum(e[2] for e in tree) + sum(e[2] for e in spokes), tree, spokes


def d(a, b):
    """Shortest route length between two vertices of P."""
    return shortest(V5, P, a, b)[0]


# ---- worked example 1: Kruskal and Prim on the six-site network W ----
w_trace = kruskal(W_V, W)
w_acc = [edge for edge, ok in w_trace if ok]
w_rej = [edge for edge, ok in w_trace if not ok]
assert [(e[0], e[1]) for e, _ in w_trace] == [('E', 'F'), ('A', 'C'), ('A', 'B'), ('B', 'D'), ('B', 'C'), ('D', 'E')]
assert [(e[0], e[1]) for e in w_acc] == [('E', 'F'), ('A', 'C'), ('A', 'B'), ('B', 'D'), ('D', 'E')]
assert [(e[0], e[1]) for e in w_rej] == [('B', 'C')]
w_prim = prim(W_V, W, 'A')
assert [(e[0], e[1]) for e in w_prim] == [('A', 'C'), ('A', 'B'), ('B', 'D'), ('D', 'E'), ('E', 'F')]
W_TOTAL = sum(e[2] for e in w_acc)
assert W_TOTAL == mst_weight(W_V, W) == mst_exhaustive(W_V, W) == sum(e[2] for e in w_prim) == 21

# ---- worked example 2: Chinese postman on P (four odd vertices) ----
p_deg = degrees(V5, P)
p_opts = postman(V5, P)
assert [o[0] for o in p_opts] == [10, 12, 12]
assert p_opts[0][1] == [('B', 'D'), ('C', 'E')] and p_opts[0][2] == [['B', 'A', 'D'], ['C', 'E']]
P_TOTAL = sum(e[2] for e in P)
P_ROUTE = route_length(V5, P, p_opts[0])
assert P_TOTAL == 36 and P_ROUTE == 46

# ---- worked example 3: nearest neighbour and deleted vertex on the complete graph K ----
k_best, k_count = tsp_exhaustive(V5, K)
k_nn_total, k_tour = nearest_neighbour(V5, K, 'A')
k_bound, k_tree, k_spokes = deleted_vertex(V5, K, 'A')
assert k_tour == ['A', 'B', 'C', 'D', 'E', 'A'] and k_nn_total == 32
assert [(e[0], e[1]) for e in k_tree] == [('C', 'D'), ('D', 'E'), ('B', 'C')]
assert [(e[0], e[1], e[2]) for e in k_spokes] == [('A', 'B', 1), ('A', 'C', 2)] and k_bound == 29
assert cycle_weight(K, 'ABEDCA') == 30 and k_best[0] == 30 and k_count == 12

# ---- exam questions and markscheme numbers ----
q2_option = postman(V5, Q2)[0]
assert q2_option[1] == [('B', 'C')] and q2_option[0] == 9 and route_length(V5, Q2, q2_option) == 60
r_opts = postman(V5, R)
assert [o[0] for o in r_opts] == [15, 19, 21] and r_opts[0][1] == [('A', 'D'), ('C', 'E')]
h_nn_total, h_tour = nearest_neighbour(V5, H, 'A')
h_bound, h_tree, h_spokes = deleted_vertex(V5, H, 'A')
assert h_tour == ['A', 'D', 'E', 'B', 'C', 'A'] and h_nn_total == 38 and h_bound == 31
assert [(e[0], e[1]) for e in h_tree] == [('D', 'E'), ('B', 'E'), ('B', 'C')] and sum(e[2] for e in h_tree) == 17
q1_trace = kruskal(V5, Q1)
assert [e[2] for e, _ in q1_trace] == [1, 4, 7, 8, 9] and [ok for _, ok in q1_trace] == [True, True, True, False, True]

CHECKS = [
    # worked example 1: Kruskal (EF, AC, AB, BD accepted; BC rejected; DE accepted) and Prim from A
    ('we-3-16-graph-algorithms-1', [w for _, _, w in W], '4; 3; 6; 5; 8; 9; 7; 10; 2'),
    ('we-3-16-graph-algorithms-2', sorted(w for _, _, w in W), '2; 3; 4; 5; 6; 7; 8; 9; 10'),
    ('we-3-16-graph-algorithms-3', [e[2] for e in w_acc[:4]], '2; 3; 4; 5'),
    ('we-3-16-graph-algorithms-4', [e[2] for e in w_rej], '6'),
    ('we-3-16-graph-algorithms-5', [w_acc[4][2], len(w_acc), len(W_V)], '7; 5; 6'),
    ('we-3-16-graph-algorithms-6', [e[2] for e in w_acc] + [W_TOTAL], '2; 3; 4; 5; 7; 21'),
    ('we-3-16-graph-algorithms-7', [e[2] for e in w_prim] + [sum(e[2] for e in w_prim)], '3; 4; 5; 7; 2; 21'),
    # worked example 2: Chinese postman on P
    ('we-3-16-graph-algorithms-8', [w for _, _, w in P], '5; 6; 3; 12; 1; 7; 2'),
    ('we-3-16-graph-algorithms-9', [p_deg[v] for v in V5], '4; 3; 3; 1; 3'),
    ('we-3-16-graph-algorithms-10', [d('B', 'D'), d('C', 'E'), d('B', 'D') + d('C', 'E'), d('B', 'C'), d('D', 'E'), d('B', 'C') + d('D', 'E'), d('B', 'E'), d('C', 'D'), d('B', 'E') + d('C', 'D')], '8; 2; 10; 1; 11; 12; 3; 9; 12'),
    ('we-3-16-graph-algorithms-11', [P_TOTAL, p_opts[0][0], P_ROUTE], '36; 10; 46'),
    # worked example 3: nearest neighbour from A and the deleted-vertex bound for A on K
    ('we-3-16-graph-algorithms-12', [w for _, _, w in K], '1; 2; 8; 5; 10; 16; 11; 7; 13; 9'),
    ('we-3-16-graph-algorithms-13', [weights(K)[(k_tour[i], k_tour[i + 1])] for i in range(5)] + [k_nn_total], '1; 10; 7; 9; 5; 32'),
    ('we-3-16-graph-algorithms-14', [e[2] for e in k_tree] + [sum(e[2] for e in k_tree), k_spokes[0][2], k_spokes[1][2], k_bound], '7; 9; 10; 26; 1; 2; 29'),
    ('we-3-16-graph-algorithms-15', [k_bound, k_nn_total], '29; 32'),
    ('we-3-16-graph-algorithms-16', [k_count, k_best[0]], '12; 30'),
    # markscheme numbers of the exam questions
    ('we-3-16-graph-algorithms-17', [e[2] for e, _ in q1_trace] + [mst_weight(V5, Q1)], '1; 4; 7; 8; 9; 21'),
    ('we-3-16-graph-algorithms-18', [shortest(V5, Q2, 'B', 'A')[0], shortest(V5, Q2, 'A', 'C')[0], q2_option[0], weights(Q2)[('B', 'C')], sum(e[2] for e in Q2), route_length(V5, Q2, q2_option)], '2; 7; 9; 10; 51; 60'),
    ('we-3-16-graph-algorithms-19', [degrees(V5, R)[v] for v in V5], '3; 4; 3; 3; 1'),
    ('we-3-16-graph-algorithms-20', [sum(e[2] for e in R), shortest(V5, R, 'A', 'D')[0], weights(R)[('C', 'B')], weights(R)[('B', 'E')], shortest(V5, R, 'C', 'E')[0], r_opts[0][0], r_opts[1][0], r_opts[2][0], sum(e[2] for e in R), r_opts[0][0], route_length(V5, R, r_opts[0])], '46; 5; 1; 9; 10; 15; 19; 21; 46; 15; 61'),
    ('we-3-16-graph-algorithms-21', [weights(H)[(h_tour[i], h_tour[i + 1])] for i in range(5)] + [h_nn_total], '3; 4; 5; 8; 18; 38'),
    ('we-3-16-graph-algorithms-22', [e[2] for e in h_tree] + [sum(e[2] for e in h_tree)] + [e[2] for e in h_spokes] + [h_bound], '4; 5; 8; 17; 3; 11; 31'),
    ('we-3-16-graph-algorithms-23', [h_bound, h_nn_total], '31; 38'),
    # sim known answers (mst-lab, route-lab)
    ('we-3-16-graph-algorithms-24', [W_TOTAL], '21'),
    ('we-3-16-graph-algorithms-25', [v for o in p_opts for v in (o[0], P_TOTAL + o[0])], '10; 46; 12; 48; 12; 48'),
    ('we-3-16-graph-algorithms-26', [nearest_neighbour(V5, K, s)[0] for s in V5], '32; 30; 30; 30; 32'),
    ('we-3-16-graph-algorithms-27', [deleted_vertex(V5, K, v)[0] for v in V5], '29; 25; 23; 23; 24'),
    # exam questions with an answer field
    ('q-3-16-01', mst_weight(V5, Q1), None),
    ('q-3-16-02', route_length(V5, Q2, q2_option), None),
    ('q-3-16-03', [route_length(V5, R, r_opts[0]), h_nn_total, h_bound], None),
]
