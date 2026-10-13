"""Numeric checks for topic 1-4-financial-sequences (financial applications of sequences). Run python3 scripts/math-verify.py to evaluate them."""


def future_value(pv, rate_percent, years, per_year=1):
    """Compound interest: PV (1 + r/(100k))^(kn)."""
    return pv * (1 + rate_percent / (100 * per_year)) ** (years * per_year)


def value_after(v0, rate_percent, years):
    """Reducing-balance depreciation: V0 (1 - r/100)^n."""
    return v0 * (1 - rate_percent / 100) ** years


def first_year_below(v0, rate_percent, threshold):
    """Least whole number of years after which the value is below the threshold."""
    years = 0
    while value_after(v0, rate_percent, years) >= threshold:
        years += 1
    return years


# Worked example 1 (EN and RU): AED 20000 at 3.5% a year, compounded annually, for 5 years.
WE_1 = [future_value(20000, 3.5, 5)]

# Worked example 2: a car of AED 85000 losing 12% a year on a reducing-balance basis, after 4 years.
WE_2 = [value_after(85000, 12, 4)]

# Worked example 3: the value after 5 and after 6 years, and the least number of years to fall below AED 40000.
WE_3 = [value_after(85000, 12, 5), value_after(85000, 12, 6), first_year_below(85000, 12, 40000)]

# q-1-4-03 (a) to (c): the van after 4 years, the least number of years to fall below AED 40000, the investment.
Q3 = [value_after(120000, 15, 4), first_year_below(120000, 15, 40000), future_value(120000, 4.5, 4, 12)]

CHECKS = [
    ('we-1-4-financial-sequences-1', WE_1, '23753.73'),
    ('we-1-4-financial-sequences-2', WE_2, '50974.11'),
    ('we-1-4-financial-sequences-3', WE_3, '44857.21; 39474.35; 6'),
    ('q-1-4-01', future_value(15000, 4, 6), None),
    ('q-1-4-02', 100 * (1 - (25000 / 40000) ** (1 / 4)), None),
    ('q-1-4-03', Q3, None),
]
