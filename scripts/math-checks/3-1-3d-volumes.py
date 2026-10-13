"""Numeric checks for topic 3-1-3d-volumes (3D distance, volume and surface area). Run python3 scripts/math-verify.py to evaluate them."""

import numpy as np
import sympy as sp

# Worked example 1: A(2, -1, 5) and B(4, 1, 8). Coordinate differences 2, 2, 3; AB squared 17; AB = sqrt(17); midpoint (3, 0, 6.5).
A = np.array([2.0, -1.0, 5.0])
B = np.array([4.0, 1.0, 8.0])
DIFF = B - A
WE_1 = [*DIFF, float(DIFF @ DIFF), float(np.linalg.norm(DIFF))]   # 2, 2, 3, 17, 4.12
WE_2 = list((A + B) / 2)                                            # 3, 0, 6.5

# Worked example 2: right square pyramid, base side 6, perpendicular height 4, apex above the centre O.
s = sp.Integer(6)
height = sp.Integer(4)
base_area = s ** 2                                                  # 36
volume = sp.Rational(1, 3) * base_area * height                     # 48
half_edge = s / 2                                                   # 3
slant = sp.sqrt(height ** 2 + half_edge ** 2)                       # 5
face_area = sp.Rational(1, 2) * s * slant                           # 15
total_area = base_area + 4 * face_area                              # 96
OA = sp.sqrt(2) * s / 2                                             # half of the base diagonal, 3 sqrt(2)
tan_theta = height / OA                                             # 0.9428...
theta_deg = float(sp.atan(tan_theta) * 180 / sp.pi)                 # 43.31...

WE_3 = [float(base_area), float(volume)]                            # 36, 48
WE_4 = [float(half_edge), float(slant), float(face_area), float(total_area)]   # 3, 5, 15, 96
WE_5 = [float(tan_theta), theta_deg]                                # 0.943, 43.3

# q-3-1-01: (a) AB for A(-1, 3, 2) and B(5, -1, 8); (b) midpoint.
A1 = np.array([-1.0, 3.0, 2.0])
B1 = np.array([5.0, -1.0, 8.0])
Q1 = [float(np.linalg.norm(B1 - A1))] + list((A1 + B1) / 2)         # 9.38, 2, 1, 5

# q-3-1-02: angle between VA and the base, OA = 10 / sqrt(2), VO = 12.
Q2 = float(np.degrees(np.arctan(12 / (10 / np.sqrt(2)))))           # 59.49...

# q-3-1-03: hemisphere (radius 6) on a cone (radius 6, height 8).
r, h = 6.0, 8.0
l = np.sqrt(r ** 2 + h ** 2)                                        # slant height 10
external_area = np.pi * (2 * r ** 2 + r * l)                        # 132 pi
cone_angle = float(np.degrees(np.arccos(r / l)))                    # 53.13...
solid_volume = np.pi * (2 / 3 * r ** 3 + 1 / 3 * r ** 2 * h)        # 240 pi
Q3 = [l, external_area, cone_angle, solid_volume]                   # 10, 414.69, 53.13, 753.98

CHECKS = [
    ('we-3-1-3d-volumes-1', WE_1, '2; 2; 3; 17; 4.12'),
    ('we-3-1-3d-volumes-2', WE_2, '3; 0; 6.5'),
    ('we-3-1-3d-volumes-3', WE_3, '36; 48'),
    ('we-3-1-3d-volumes-4', WE_4, '3; 5; 15; 96'),
    ('we-3-1-3d-volumes-5', WE_5, '0.943; 43.3'),
    ('q-3-1-01', Q1, None),
    ('q-3-1-02', Q2, None),
    ('q-3-1-03', Q3, None),
]
