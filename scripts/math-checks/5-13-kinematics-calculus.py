"""Numeric checks for topic 5-13-kinematics-calculus (Kinematics with calculus). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

t, C = sp.symbols('t C')

# Worked example: v = 3t^2 - 12t + 9 and s(0) = 2 (integration with a starting condition).
v_we = 3*t**2 - 12*t + 9
s_we = sp.integrate(v_we, t) + 2                              # t^3 - 6t^2 + 9t + 2
assert sp.simplify(sp.diff(s_we, t) - v_we) == 0              # substitution: ds/dt = v
assert s_we.subs(t, 0) == 2                                   # starting condition
REST = sorted(sp.solve(sp.Eq(v_we, 0), t))                    # rest times: 1 and 3
ACC_AT_REST = [sp.diff(v_we, t).subs(t, r) for r in REST]     # a = 6t - 12 at those times: -6 and 6
S_AT = [s_we.subs(t, k) for k in (1, 3, 4)]                   # 6, 2, 6
DISPLACEMENT = s_we.subs(t, 4) - s_we.subs(t, 0)              # 4
EDGES = [0] + REST + [4]
DISTANCE = sum(abs(sp.integrate(v_we, (t, lo, hi))) for lo, hi in zip(EDGES[:-1], EDGES[1:]))   # 12

# q-5-13-01: a = 10 - 4t with v(0) = 0; the next time at rest is the positive root of v = 0.
v1 = sp.integrate(10 - 4*t, t) + C
v1 = v1.subs(C, sp.solve(sp.Eq(v1.subs(t, 0), 0), C)[0])     # 10t - 2t^2
Q1 = max(r for r in sp.solve(sp.Eq(v1, 0), t) if r > 0)     # 5

# q-5-13-02: v = 6t - t^2 with s(0) = 0; s(4) = 80/3.
s2 = sp.integrate(6*t - t**2, t) + C
s2 = s2.subs(C, sp.solve(sp.Eq(s2.subs(t, 0), 0), C)[0])     # 3t^2 - t^3/3
Q2 = s2.subs(t, 4)                                            # 80/3 = 26.67

# q-5-13-03: tram with a = 1 - t/20, v(0) = 0 and s(0) = 0.
a3 = 1 - t/20
v3 = sp.integrate(a3, t) + C
v3 = v3.subs(C, sp.solve(sp.Eq(v3.subs(t, 0), 0), C)[0])     # t - t^2/40
assert sp.simplify(sp.diff(v3, t) - a3) == 0                  # substitution: dv/dt = a
s3 = sp.integrate(v3, t) + C
s3 = s3.subs(C, sp.solve(sp.Eq(s3.subs(t, 0), 0), C)[0])     # t^2/2 - t^3/120
assert sp.simplify(sp.diff(s3, t) - v3) == 0                  # substitution: ds/dt = v
Q3_S40 = s3.subs(t, 40)                                       # 800/3 = 266.67
Q3_T = sp.solve(sp.Eq(a3, 0), t)[0]                           # 20
Q3_VMAX = v3.subs(t, Q3_T)                                    # 10

CHECKS = [
    ('we-5-13-kinematics-calculus-1', [REST[0], REST[1], ACC_AT_REST[0], ACC_AT_REST[1]], '1; 3; -6; 6'),
    ('we-5-13-kinematics-calculus-2', S_AT, '6; 2; 6'),
    ('we-5-13-kinematics-calculus-3', [DISPLACEMENT, DISTANCE], '4; 12'),
    ('q-5-13-01', Q1, None),
    ('q-5-13-02', Q2, None),
    ('q-5-13-03', [Q3_S40, Q3_T, Q3_VMAX], None),
]
