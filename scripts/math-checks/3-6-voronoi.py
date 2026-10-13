"""Numeric checks for topic 3-6-voronoi (Voronoi diagrams). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

x, y = sp.symbols('x y', real=True)  # sympy geometry uses real symbols


def dist(p, q):
    """Exact distance between two points given as tuples or sympy points."""
    return sp.Point(p).distance(sp.Point(q))


def nearest(point, sites):
    """Index of the site nearest to the point."""
    return min(range(len(sites)), key=lambda i: float(dist(point, sites[i])))


def nearest_distance(point, sites):
    """Distance from the point to its nearest site."""
    return min((dist(point, site) for site in sites), key=float)


# Worked example (EN and RU): stations (0, 0), (5, 0), (2, 6) read 10, 14, 8; the point Q(3, 2).
WE_STATIONS = [(0, 0), (5, 0), (2, 6)]
WE_READINGS = [10, 14, 8]
WE_Q = (3, 2)
WE_1 = [dist(WE_Q, s) for s in WE_STATIONS]                                       # sqrt(13), sqrt(8), sqrt(17)
WE_2 = [WE_READINGS[nearest(WE_Q, WE_STATIONS)]]                                  # reading at (5, 0): 14
WE_BISECTOR = sp.Segment(sp.Point(0, 0), sp.Point(5, 0)).perpendicular_bisector()
WE_3 = [sp.solve(WE_BISECTOR.equation(), x)[0]]                                   # x = 5/2

# q-3-6-01: towns A(1, 1), B(7, 2), C(4, 8) and house P(5, 4).
TOWNS_1 = [(1, 1), (7, 2), (4, 8)]
Q1 = nearest_distance((5, 4), TOWNS_1)                                            # sqrt(8)

# q-3-6-02: stations A(0, 0), B(6, 0), C(2, 6) read 21.5, 18.0, 24.2; the point P(4, 1).
STATIONS_2 = [(0, 0), (6, 0), (2, 6)]
READINGS_2 = [21.5, 18.0, 24.2]
Q2 = [READINGS_2[nearest((4, 1), STATIONS_2)], nearest_distance((4, 1), STATIONS_2)]

# q-3-6-03: four stations A(0, 0), B(8, 0), C(2, 6), D(9, 6).
STATIONS_3 = [(0, 0), (8, 0), (2, 6), (9, 6)]
READINGS_3 = [14, 9, 21, 11]
V = sp.Triangle(sp.Point(0, 0), sp.Point(8, 0), sp.Point(2, 6)).circumcenter     # (4, 2)
W = sp.Triangle(sp.Point(8, 0), sp.Point(2, 6), sp.Point(9, 6)).circumcenter     # (11/2, 7/2)
R_V = nearest_distance(V, STATIONS_3)
R_W = nearest_distance(W, STATIONS_3)
DUMP = V if float(R_V) > float(R_W) else W                                        # the vertex further away
Q3_READING = READINGS_3[nearest((7, 4), STATIONS_3)]                              # station D: 11

CHECKS = [
    ('we-3-6-voronoi-1', [float(v) for v in WE_1], '3.61; 2.83; 4.12'),
    ('we-3-6-voronoi-2', [float(v) for v in WE_2], '14'),
    ('we-3-6-voronoi-3', [float(v) for v in WE_3], '2.5'),
    ('q-3-6-01', float(Q1), None),
    ('q-3-6-02', [float(v) for v in Q2], None),
    ('q-3-6-03', [
        float(R_V),
        float(W.x),
        float(W.y),
        float(R_W),
        float(DUMP.x),
        float(DUMP.y),
        float(Q3_READING),
    ], None),
]
