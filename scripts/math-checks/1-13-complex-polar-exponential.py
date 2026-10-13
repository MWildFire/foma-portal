"""Numeric checks for topic 1-13-complex-polar-exponential (polar and exponential form). Run python3 scripts/math-verify.py to evaluate them."""

import cmath
import math

# Worked example (EN and RU): z = -2 + 2i, so r = 2.83 and theta = 3pi/4 = 2.356 rad; z^4 = -64;
# 6 cos(wt) + 8 sin(wt) = 10.0 cos(wt - 0.927).
Z = complex(-2, 2)
R_Z = abs(Z)                                   # 2.83
THETA_Z = cmath.phase(Z)                       # 2.356 radians, 3pi/4
Z4 = Z ** 4                                    # -64
R_SUM = math.hypot(6, 8)                       # 10.0
PHI_SUM = math.atan2(8, 6)                     # 0.927 radians

# q-1-13-02: z = 2 cis 25 degrees, w = 1.5 cis 40 degrees; modulus and argument of z^3 / w.
Z_A = cmath.rect(2, math.radians(25))
W_A = cmath.rect(1.5, math.radians(40))
Q_A = Z_A ** 3 / W_A                           # modulus 5.33, argument 35.0 degrees

# q-1-13-03 (P2): V(t) = 12 cos(wt) + 5 sin(wt) with omega = 100 pi, so V(t) = Re(V e^(i omega t)) for V = 12 - 5i.
OMEGA = 100 * math.pi
V = complex(12, -5)
R_V = abs(V)                                   # 13.0
PHI_V = -cmath.phase(V)                        # 0.395 radians, so V(t) = R cos(omega t - phi)
T_MAX_MS = 1000 * PHI_V / OMEGA                # first positive maximum at omega t = phi, 1.26 ms
ARG_V_DEG = math.degrees(cmath.phase(V))       # -22.62 degrees
W_C = 4 * cmath.exp(1j * 1.2)                  # W(t) = 4 cos(omega t + 1.2) = Re(W_C e^(i omega t))
AMPLITUDE = abs(V + W_C)                       # 13.51
V_AT = 12 * math.cos(OMEGA * 0.001) + 5 * math.sin(OMEGA * 0.001)   # 12.96 volts at t = 0.001 s

CHECKS = [
    ('we-1-13-complex-polar-exponential-1', [R_Z, THETA_Z], '2.83; 2.356'),
    ('we-1-13-complex-polar-exponential-2', [Z4.real, abs(Z4)], '-64; 64'),
    ('we-1-13-complex-polar-exponential-3', [R_SUM, PHI_SUM], '10.0; 0.927'),
    ('q-1-13-01', [R_Z, THETA_Z], None),
    ('q-1-13-02', [abs(Q_A), math.degrees(cmath.phase(Q_A))], None),
    ('q-1-13-03', [R_V, PHI_V, T_MAX_MS, R_V, ARG_V_DEG, AMPLITUDE, V_AT], None),
]
