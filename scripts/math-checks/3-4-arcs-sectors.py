"""Numeric checks for topic 3-4-arcs-sectors (Arcs and sectors of a circle). Run python3 scripts/math-verify.py to evaluate them."""

import sympy as sp

PI = sp.pi


def arc(radius, degrees):
    """Arc length for a central angle given in degrees."""
    return sp.sympify(degrees) / 360 * 2 * PI * radius


def sector(radius, degrees):
    """Area of a sector for a central angle given in degrees."""
    return sp.sympify(degrees) / 360 * PI * radius**2


# Worked example (EN and RU): radius 6 cm, central angle 50 degrees.
WE_1 = [arc(6, 50), sector(6, 50)]                  # 5.24 and 15.7 (3 s.f.)
WE_2 = [sp.Integer(50) / 180 * PI]                  # 50 degrees in radians: 0.873
WE_3 = [6 * sp.Integer(50) / 180 * PI]              # l = r * theta: 5.24

# q-3-4-02: arc length 14 with radius 6. The angle in degrees comes first, then the area.
ANGLE_02 = 14 * 360 / (2 * PI * 6)                  # 420/pi degrees
AREA_02 = sp.Rational(1, 2) * 6 * 14                # 1/2 r l = 42

# q-3-4-03: sprinkler sector, radius 12 m, central angle 75 degrees.
AREA_03 = sector(12, 75)                            # 30 pi, the area in part (b)
ANGLE_03C = AREA_03 / (PI * 9**2) * 360             # angle for radius 9 with the same area
PERIMETER_03D = arc(9, ANGLE_03C) + 2 * 9           # arc plus two radii
UNWATERED_03E = arc(12, 360 - 75)                   # the rest of the lawn edge

CHECKS = [
    ('we-3-4-arcs-sectors-1', [float(v) for v in WE_1], '5.24; 15.7'),
    ('we-3-4-arcs-sectors-2', [float(v) for v in WE_2], '0.873'),
    ('we-3-4-arcs-sectors-3', [float(v) for v in WE_3], '5.24'),
    ('q-3-4-01', float(arc(9, 120)), None),
    ('q-3-4-02', [float(ANGLE_02), float(AREA_02)], None),
    ('q-3-4-03', [
        float(arc(12, 75)),
        float(AREA_03),
        float(ANGLE_03C),
        float(PERIMETER_03D),
        float(UNWATERED_03E),
    ], None),
]
