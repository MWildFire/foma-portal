"""Numeric checks for the extra Paper 2 questions q-3-16-04 (graph algorithms) and q-4-11-04 (chi-squared test).

Every value is recomputed here: road routes, spanning trees, pairings and round trips by enumeration, and the
chi-squared values with scipy. Run: python3 scripts/math-verify.py p2-extra
"""

import itertools

import numpy as np
from scipy import stats

# ---- q-3-16-04: five depots joined by roads (lengths in km) ----

NODES = ['A', 'B', 'C', 'D', 'E']
ROADS = {
    ('A', 'C'): 9, ('A', 'D'): 10, ('A', 'E'): 7,
    ('B', 'C'): 4, ('B', 'D'): 8, ('B', 'E'): 5,
    ('C', 'E'): 6, ('D', 'E'): 11,
}
ROAD = {}
for (x, y), length in ROADS.items():
    ROAD[(x, y)] = length
    ROAD[(y, x)] = length


def find_root(parent, v):
    while parent[v] != v:
        v = parent[v]
    return v


def is_spanning_tree(nodes, edges):
    parent = {v: v for v in nodes}
    for x, y in edges:
        rx, ry = find_root(parent, x), find_root(parent, y)
        if rx == ry:
            return False
        parent[rx] = ry
    return len(edges) == len(nodes) - 1


def min_tree_by_enumeration(nodes, weight):
    """Least total weight of a spanning tree, found by trying every choice of n - 1 edges."""
    pairs = [e for e in itertools.combinations(nodes, 2) if e in weight]
    best = None
    for chosen in itertools.combinations(pairs, len(nodes) - 1):
        if is_spanning_tree(nodes, chosen):
            total = sum(weight[e] for e in chosen)
            best = total if best is None else min(best, total)
    return best


def kruskal(nodes, weight):
    """Kruskal's algorithm: the accepted edges in acceptance order, and the rejected edges."""
    pairs = sorted((e for e in itertools.combinations(nodes, 2) if e in weight), key=lambda e: weight[e])
    parent = {v: v for v in nodes}
    accepted, rejected = [], []
    for x, y in pairs:
        rx, ry = find_root(parent, x), find_root(parent, y)
        if rx == ry:
            rejected.append((x, y))
        else:
            parent[rx] = ry
            accepted.append((x, y))
    return accepted, rejected


def routes(start, end):
    """Every simple route from start to end along the roads, as (length, path)."""
    found = []

    def walk(path, length):
        here = path[-1]
        if here == end:
            found.append((length, tuple(path)))
            return
        for nxt in NODES:
            if (here, nxt) in ROAD and nxt not in path:
                walk(path + [nxt], length + ROAD[(here, nxt)])

    walk([start], 0)
    return found


# Complete graph of shortest route lengths (parts (b) and (c)); a route may pass through other depots.
DIST = {}
for x in NODES:
    for y in NODES:
        if x != y:
            best = min(length for length, _ in routes(x, y))
            DIST[(x, y)] = best


def shortest_routes(x, y):
    return [path for length, path in routes(x, y) if length == DIST[(x, y)]]


for e, length in ROADS.items():
    assert DIST[e] == length, f'road {e} is not a shortest route between its ends'
    assert len(shortest_routes(*e)) == 1, f'shortest route {e} is not unique'
assert shortest_routes('A', 'B') == [('A', 'E', 'B')]
assert shortest_routes('C', 'D') == [('C', 'B', 'D')]

# Part (a): Kruskal on the roads, cross-checked by enumeration.
ACCEPTED, REJECTED = kruskal(NODES, ROAD)
assert ACCEPTED == [('B', 'C'), ('B', 'E'), ('A', 'E'), ('B', 'D')], ACCEPTED
assert ('C', 'E') in REJECTED, REJECTED  # CE closes the cycle B-C-E; the tree is complete after four roads
MST_TOTAL = sum(ROAD[e] for e in ACCEPTED)
assert MST_TOTAL == min_tree_by_enumeration(NODES, ROAD)


# Part (b): nearest neighbour from A on the complete graph of shortest route lengths.
def nearest_neighbour(start):
    unvisited = [v for v in NODES if v != start]
    here, steps, route = start, [], [start]
    while unvisited:
        best = min(DIST[(here, v)] for v in unvisited)
        nearest = [v for v in unvisited if DIST[(here, v)] == best]
        assert len(nearest) == 1, 'nearest-neighbour choice is not unique'
        steps.append(best)
        here = nearest[0]
        route.append(here)
        unvisited.remove(here)
    steps.append(DIST[(here, start)])
    route.append(start)
    return sum(steps), steps, route


NN_TOTAL, NN_STEPS, NN_ROUTE = nearest_neighbour('A')
assert NN_ROUTE == ['A', 'E', 'B', 'C', 'D', 'A'], NN_ROUTE


# Part (c): delete E, minimum spanning tree of the other four depots, plus the two shortest distances from E.
def deleted_vertex_bound(deleted):
    rest = [v for v in NODES if v != deleted]
    tree = min_tree_by_enumeration(rest, DIST)
    lengths = sorted(DIST[(deleted, v)] for v in rest)
    assert lengths[1] < lengths[2], 'the two cheapest edges from the deleted vertex are not unique'
    return tree + lengths[0] + lengths[1], tree, lengths[:2]


LOWER, LOWER_TREE, LOWER_TWO = deleted_vertex_bound('E')


# Part (d): Chinese postman. Odd vertices, all pairings, and an independent brute force over road repeats.
ODD = [v for v in NODES if sum(1 for e in ROADS if v in e) % 2 == 1]
assert ODD == ['A', 'B', 'C', 'D'], ODD
PAIRINGS = [[('A', 'B'), ('C', 'D')], [('A', 'C'), ('B', 'D')], [('A', 'D'), ('B', 'C')]]


def all_pairings(items):
    if not items:
        yield []
        return
    first = items[0]
    for k in range(1, len(items)):
        rest = items[1:k] + items[k + 1:]
        for others in all_pairings(rest):
            yield [(first, items[k])] + others


def as_sets(pairings):
    return {frozenset(frozenset(p) for p in pairing) for pairing in pairings}


assert as_sets(PAIRINGS) == as_sets(all_pairings(ODD))
PAIR_COSTS = [sum(DIST[p] for p in pairing) for pairing in PAIRINGS]
POSTMAN_EXTRA = min(PAIR_COSTS)
assert PAIR_COSTS.count(POSTMAN_EXTRA) == 1
POSTMAN = sum(ROADS.values()) + POSTMAN_EXTRA


def postman_by_multiplicity():
    """Each road is walked once or twice (more is never needed); keep the choices with all degrees even."""
    best = None
    edges = list(ROADS.items())
    for mult in itertools.product((1, 2), repeat=len(edges)):
        degree = {v: 0 for v in NODES}
        total = 0
        for ((x, y), length), m in zip(edges, mult):
            degree[x] += m
            degree[y] += m
            total += m * length
        if all(d % 2 == 0 for d in degree.values()):
            best = total if best is None else min(best, total)
    return best


assert postman_by_multiplicity() == POSTMAN


# Part (e): least round trip by enumerating every round trip from A (only to confirm the bounds bracket it).
def least_round_trip(start):
    others = [v for v in NODES if v != start]
    best = None
    for order in itertools.permutations(others):
        if order[0] > order[-1]:
            continue  # a round trip and its reverse have the same length
        cycle = [start, *order, start]
        total = sum(DIST[(cycle[i], cycle[i + 1])] for i in range(len(cycle) - 1))
        best = total if best is None else min(best, total)
    return best


TSP_MIN = least_round_trip('A')
assert LOWER <= TSP_MIN <= NN_TOTAL

# ---- q-4-11-04: two offices by three travel modes ----

OBSERVED = np.array([[52.0, 6.0, 32.0], [22.0, 8.0, 30.0]])
EXPECTED = np.outer(OBSERVED.sum(axis=1), OBSERVED.sum(axis=0)) / OBSERVED.sum()
TERMS = (OBSERVED - EXPECTED) ** 2 / EXPECTED
CHI2 = float(TERMS.sum())
DF = (OBSERVED.shape[0] - 1) * (OBSERVED.shape[1] - 1)
P_VALUE = float(stats.chi2.sf(CHI2, DF))
CRITICAL = float(stats.chi2.ppf(0.95, DF))

ref_chi2, ref_p, ref_df, ref_expected = stats.chi2_contingency(OBSERVED, correction=False)
assert np.isclose(ref_chi2, CHI2) and np.isclose(ref_p, P_VALUE) and ref_df == DF
assert np.allclose(ref_expected, EXPECTED)

CHECKS = [
    ('q-3-16-04', [MST_TOTAL, NN_TOTAL, LOWER, POSTMAN], None),
    ('q-4-11-04', [float(EXPECTED[0, 0]), float(EXPECTED[0, 1]), float(EXPECTED[0, 2]),
                   float(EXPECTED[1, 0]), float(EXPECTED[1, 1]), float(EXPECTED[1, 2]),
                   CHI2, DF, P_VALUE], None),
    # Intermediate numbers printed in the markscheme (not answers); they keep the printed working correct.
    ('we-p2-extra-3-16-1', [DIST[('A', 'B')], DIST[('C', 'D')]], '12; 12'),
    ('we-p2-extra-3-16-2', NN_STEPS, '7; 5; 4; 12; 10'),
    ('we-p2-extra-3-16-3', [LOWER_TREE, LOWER_TWO[0], LOWER_TWO[1]], '21; 5; 6'),
    ('we-p2-extra-3-16-4', PAIR_COSTS, '24; 17; 14'),
    ('we-p2-extra-3-16-5', [TSP_MIN], '35'),
    ('we-p2-extra-4-11-1', [float(t) for t in TERMS.flatten()], '1.301; 0.686; 0.727; 1.951; 1.029; 1.090'),
    ('we-p2-extra-4-11-2', [CRITICAL], '5.991'),
]
