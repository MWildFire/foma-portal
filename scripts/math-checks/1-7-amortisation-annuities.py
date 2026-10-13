"""Numeric checks for topic 1-7-amortisation-annuities (amortisation and annuities). Run python3 scripts/math-verify.py to evaluate them."""


def rate_per_period(annual_percent, per_year):
    """Rate per period: r / (100k)."""
    return annual_percent / (100 * per_year)


def instalment(principal, i, periods):
    """Equal payment that repays a loan: PV i / (1 - (1 + i)^(-N))."""
    return principal * i / (1 - (1 + i) ** (-periods))


def balance_after(principal, i, payment, j):
    """Outstanding balance after j payments: PV (1 + i)^j - M ((1 + i)^j - 1) / i."""
    return principal * (1 + i) ** j - payment * ((1 + i) ** j - 1) / i


def savings_value(deposit, i, periods):
    """Future value of equal deposits made at the end of each period: M ((1 + i)^N - 1) / i."""
    return deposit * ((1 + i) ** periods - 1) / i


# Worked example: AED 60000 at 6% a year compounded monthly, repaid by 60 instalments.
i_we = rate_per_period(6, 12)
M_we = instalment(60000, i_we, 60)
INTEREST_1 = 60000 * i_we
PRINCIPAL_1 = M_we - INTEREST_1
BALANCE_1 = 60000 - PRINCIPAL_1

WE_1 = [M_we]
WE_2 = [INTEREST_1, PRINCIPAL_1, BALANCE_1]
WE_3 = [balance_after(60000, i_we, M_we, 24)]

# q-1-7-01: savings of AED 500 at the end of each month, 4.2% a year compounded monthly, for 10 years.
Q1 = savings_value(500, rate_per_period(4.2, 12), 120)

# q-1-7-02: car loan of AED 120000, 4.8% a year compounded monthly, 36 instalments; balance after 12.
i_car = rate_per_period(4.8, 12)
M_car = instalment(120000, i_car, 36)
Q2 = balance_after(120000, i_car, M_car, 12)

# q-1-7-03: home loan of AED 850000, 3.6% a year compounded monthly, 300 instalments.
i_home = rate_per_period(3.6, 12)
M_home = instalment(850000, i_home, 300)
INTEREST_FIRST = 850000 * i_home
Q3 = [
    M_home,
    INTEREST_FIRST,
    balance_after(850000, i_home, M_home, 1),
    balance_after(850000, i_home, M_home, 120),
    100 * INTEREST_FIRST / M_home,
]

CHECKS = [
    ('we-1-7-amortisation-annuities-1', WE_1, '1159.97'),
    ('we-1-7-amortisation-annuities-2', WE_2, '300.00; 859.97; 59140.03'),
    ('we-1-7-amortisation-annuities-3', WE_3, '38129.33'),
    ('q-1-7-01', Q1, None),
    ('q-1-7-02', Q2, None),
    ('q-1-7-03', Q3, None),
]
