"""Numeric checks for topic 1-12-complex-cartesian (complex numbers: Cartesian form). Run python3 scripts/math-verify.py to evaluate them."""

import cmath
import math

# Worked example (EN and RU): z = 2 + 3i and w = 1 - 4i.
Z = complex(2, 3)
W = complex(1, -4)
QUOTIENT = Z / W                               # -0.588 + 0.647i
NUMERATOR = Z * W.conjugate()                  # -10 + 11i, after multiplying by the conjugate 1 + 4i
DENOMINATOR = abs(W) ** 2                      # 17
MODULUS_Z = abs(Z)                             # 3.61
ARG_Z = math.degrees(cmath.phase(Z))           # 56.3 degrees

# Worked example, third step: u^2 - 4u + 13 = 0 has discriminant -36 and roots 2 +/- 3i.
DISC = (-4) ** 2 - 4 * 1 * 13
ROOT = (4 + cmath.sqrt(complex(DISC))) / 2     # 2 + 3i

# q-1-12-02: z = 5 - 12i.
Z2 = complex(5, -12)

# q-1-12-03 (P2): the root of z^2 - 6z + 34 = 0 with positive imaginary part, its modulus and argument,
# (3 + 5i)^3, and the least n with |(3 + 5i)^n| > 1000.
P_ROOT = (6 + cmath.sqrt(complex(36 - 4 * 34))) / 2   # 3 + 5i
P3 = P_ROOT ** 3                                       # -198 + 10i
LEAST_N = next(n for n in range(1, 50) if abs(P_ROOT) ** n > 1000)

CHECKS = [
    ('we-1-12-complex-cartesian-1', [QUOTIENT.real, QUOTIENT.imag], '-0.588; 0.647'),
    ('we-1-12-complex-cartesian-2', [NUMERATOR.real, NUMERATOR.imag, DENOMINATOR], '-10; 11; 17'),
    ('we-1-12-complex-cartesian-3', [MODULUS_Z, cmath.phase(Z), ARG_Z], '3.61; 0.983; 56.3'),
    ('we-1-12-complex-cartesian-4', [DISC, ROOT.real, ROOT.imag], '-36; 2; 3'),
    ('q-1-12-01', [QUOTIENT.real, QUOTIENT.imag], None),
    ('q-1-12-02', [abs(Z2), math.degrees(cmath.phase(Z2))], None),
    ('q-1-12-03', [P_ROOT.real, P_ROOT.imag, abs(P_ROOT), math.degrees(cmath.phase(P_ROOT)),
                   P3.real, P3.imag, LEAST_N], None),
]
