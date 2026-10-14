#!/usr/bin/env python3
# Recomputes the calculation answers of the Economics content (content/econ/) from the formulas named in
# scripts/econ-checks/*.json, and checks the numbers that data sets quote in their markscheme. The content is not
# trusted: every value comes from the formula applied to the arguments written in the check file.
#
#   python3 scripts/econ-verify.py
#
# Rules (also in the brief for the content agents):
#   - every Question with an "answer" needs a check entry for it;
#   - every Question with the command Calculate needs an "answer" or a check entry for it;
#   - a check with "signed": true also compares the sign (the markscheme must then write the sign, for example -2.4);
#   - the arguments of a check must appear as numbers in the question's prompt or stimulus (the student sees them);
#   - the answer must equal the recomputed value rounded to the decimals the answer is written with;
#   - a check with "expect_in" must find its recomputed value among the numbers of those fields (for example
#     "markscheme.en"), within "tol" (default: 0.2 % or 0.005, whichever is larger; absolute values are compared).
#   - a check with "ref" (a past paper id, no "question") is a calculation written out in a past-paper guide: both the
#     English and the Russian guide must state every argument and the answer, and the answer must be the recomputed
#     value rounded to the decimals it is written with. Such checks live in scripts/econ-checks/pastpapers-*.json.
# Exit code 0 when everything passes, 1 otherwise.

import glob
import json
import os
import re
import subprocess
import sys
from decimal import ROUND_HALF_UP, Decimal

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
CHECK_DIR = os.path.join(ROOT, 'scripts', 'econ-checks')


def pct_change(old, new):
    return (new - old) / old * 100


def ped(q1, q2, p1, p2):
    return pct_change(q1, q2) / pct_change(p1, p2)


def yed(q1, q2, y1, y2):
    return pct_change(q1, q2) / pct_change(y1, y2)


def xed(q1, q2, pb1, pb2):
    return pct_change(q1, q2) / pct_change(pb1, pb2)


def total_revenue(p, q):
    return p * q


def profit(p, q, total_cost):
    return p * q - total_cost


def linear_price(a, b, c, d):
    return (a - c) / (b + d)


def linear_quantity(a, b, c, d):
    return a - b * linear_price(a, b, c, d)


def excess_demand(a, b, c, d, p):
    return (a - b * p) - (c + d * p)


def tax_revenue(t, q):
    return t * q


def triangle(base, height):
    return base * height / 2


def rectangle(base, height):
    return base * height


def consumer_share(pes, ped):
    return pes / (pes + abs(ped))


def real_gdp(nominal, deflator):
    return nominal / deflator * 100


def gdp_deflator(nominal, real):
    return nominal / real * 100


def cpi(basket_now, basket_base):
    return basket_now / basket_base * 100


def inflation(index_now, index_before):
    return (index_now - index_before) / index_before * 100


def unemployment_rate(unemployed, labour_force):
    return unemployed / labour_force * 100


def output_gap(actual, potential):
    return (actual - potential) / potential * 100


def mps(mpc):
    return 1 - mpc


def multiplier(mps, mpt, mpm):
    return 1 / (mps + mpt + mpm)


def multiplier_from_mpc(mpc):
    return 1 / (1 - mpc)


def gini(area_a, area_b):
    return area_a / (area_a + area_b)


def budget_balance(tax_revenue, spending):
    return tax_revenue - spending


def convert(amount, rate):
    return amount * rate


def terms_of_trade(export_index, import_index):
    return export_index / import_index * 100


def current_account(exports, imports, net_income, net_transfers):
    return exports - imports + net_income + net_transfers


def ratio(a, b):
    return a / b


def gni_per_capita(gni, population):
    return gni / population


def gdp_expenditure(c, i, g, x, m):
    return c + i + g + (x - m)


def mr_mc_quantity(a, b, mc):
    # A monopolist with inverse demand P = a - bQ and constant marginal cost mc: MR = a - 2bQ is set equal to mc.
    return (a - mc) / (2 * b)


def trade_balance(exports, imports):
    return exports - imports


def difference(a, b):
    return a - b


FUNCTIONS = {
    'pct_change': pct_change, 'pct': pct_change,
    'ped': ped, 'pes': ped, 'yed': yed, 'xed': xed,
    'total_revenue': total_revenue, 'profit': profit,
    'linear_price': linear_price, 'linear_quantity': linear_quantity, 'excess_demand': excess_demand,
    'tax_revenue': tax_revenue, 'triangle': triangle, 'rectangle': rectangle, 'consumer_share': consumer_share,
    'real_gdp': real_gdp, 'gdp_deflator': gdp_deflator, 'cpi': cpi, 'inflation': inflation,
    'unemployment_rate': unemployment_rate, 'output_gap': output_gap,
    'mps': mps, 'multiplier': multiplier, 'multiplier_from_mpc': multiplier_from_mpc,
    'gini': gini, 'budget_balance': budget_balance, 'convert': convert,
    'terms_of_trade': terms_of_trade, 'current_account': current_account,
    'ratio': ratio, 'gni_per_capita': gni_per_capita,
    'gdp_expenditure': gdp_expenditure, 'mr_mc_quantity': mr_mc_quantity, 'trade_balance': trade_balance,
    'difference': difference,
}

NUMBER = re.compile(r'(?<![\w.])-?\d+(?:[.,]\d+)?')


def numbers_in(text):
    # The unicode minus sign and the en dash used as a minus both become "-"; a decimal comma becomes a point.
    text = text.replace('−', '-').replace('–', '-')
    values = []
    for match in NUMBER.finditer(text):
        try:
            values.append(float(match.group(0).replace(',', '.')))
        except ValueError:
            pass
    return values


def normalise(text):
    # Quotes are matched on the same reading as numbers_in: unicode minus and en dash become "-", no-break spaces become spaces.
    text = text.replace('−', '-').replace('–', '-').replace(' ', ' ').replace(' ', ' ')
    return re.sub(r'\s+', ' ', text).strip()


# A change or a direction in the prompt: the sign is part of the answer (-20% is not 20%).
SIGN_CUE = re.compile(r'\b(rises?|rose|falls?|fell|increases?|decreases?|minus sign)\b|\bfrom\b.*?\bto\b', re.IGNORECASE)

# A role worked out from two stated numbers, e.g. "derived: 16 - 10" (operators: - + x /).
DERIVED = re.compile(r'derived:\s*(-?\d+(?:\.\d+)?)\s*([-+x/])\s*(-?\d+(?:\.\d+)?)')


# A fall in the prompt is written as a positive number ("fall in investment of AED 20"); the argument carries the minus sign.
FALL_CUE = re.compile(r'\b(falls?|fell|fallen|decreases?|decreased|drops?|dropped|reduces?|reduced)\b', re.IGNORECASE)


def expected_number(quoted, argument):
    if argument < 0 and FALL_CUE.search(quoted):
        return -argument
    return argument


def check_roles(entry, texts, where, failures):
    # Each argument must be tied to the text it comes from. The role is a quote from the prompt or guide that ends with
    # the argument's number, e.g. "from AED 4.00" for the old price. The quote must occur in the text, so an argument
    # placed under the wrong role fails here even when the answer happens to match.
    args = entry.get('args', {})
    name = entry.get('question') or entry.get('ref')
    roles = entry.get('roles')
    if not isinstance(roles, dict) or set(roles) != set(args):
        failures.append(f"{where}: {name}: roles must quote the text for every argument ({', '.join(args) or 'none'})")
        return False
    haystacks = [normalise(text) for text in texts if text]
    ok = True
    for key, quote in roles.items():
        quoted = normalise(str(quote))
        derived = DERIVED.fullmatch(quoted)
        if derived:
            # A value worked out from two numbers the text states, e.g. "derived: 16 - 10" for a gap between 16 and 10.
            a, op, b = float(derived.group(1)), derived.group(2), float(derived.group(3))
            result = {'-': a - b, '+': a + b, 'x': a * b, '/': a / b if b else None}[op]
            if result is None or abs(result - float(args[key])) > 1e-9:
                failures.append(f"{where}: {name}: role {key} \"{quote}\" gives {result}, but {key} = {args[key]}")
                ok = False
            elif not all(any(abs(x - number) < 1e-9 for text in texts if text for x in numbers_in(text)) for number in (a, b)):
                failures.append(f"{where}: {name}: role {key} \"{quote}\" uses a number that the prompt or guide text does not state")
                ok = False
            continue
        found = numbers_in(quoted)
        if not found:
            failures.append(f"{where}: {name}: role {key} quote \"{quote}\" has no number")
            ok = False
        elif abs(found[-1] - expected_number(quoted, float(args[key]))) > 1e-9:
            failures.append(f"{where}: {name}: role {key} quote \"{quote}\" ends with {found[-1]:g}, but {key} = {args[key]}")
            ok = False
        elif not any(quoted in haystack for haystack in haystacks):
            failures.append(f"{where}: {name}: role {key} quote \"{quote}\" is not in the prompt or guide text")
            ok = False
    return ok


def field_text(question, dotted):
    current = question
    for part in dotted.split('.'):
        if not isinstance(current, dict):
            return ''
        current = current.get(part)
    return current if isinstance(current, str) else ''


def decimals_of(answer):
    return len(answer.split('.')[1]) if '.' in answer else 0


def rounds_to(value, answer):
    places = decimals_of(answer)
    quantum = Decimal(1).scaleb(-places)
    rounded = Decimal(repr(round(value, 9))).quantize(quantum, rounding=ROUND_HALF_UP)
    return rounded == Decimal(answer)


def load_questions():
    result = subprocess.run(
        ['node', '--experimental-strip-types', os.path.join(ROOT, 'scripts', 'econ-dump.ts')],
        cwd=ROOT, capture_output=True, text=True,
    )
    if result.returncode != 0:
        sys.stderr.write(result.stderr)
        sys.exit(2)
    return json.loads(result.stdout)


def load_checks():
    checks = []
    for path in sorted(glob.glob(os.path.join(CHECK_DIR, '*.json'))):
        with open(path, encoding='utf-8') as handle:
            data = json.load(handle)
        for entry in data.get('checks', []):
            entry['_file'] = os.path.relpath(path, ROOT)
            checks.append(entry)
    return checks


GUIDE_FIELDS = ('guide.en', 'guide.ru')


def check_guide(entry, pastpapers, where, failures):
    # A calculation written out in a past-paper guide. The guide must state every argument and the answer, in both
    # languages, and the answer must be the value the function gives, rounded to the decimals it is written with.
    ref_id = entry.get('ref')
    ref = pastpapers.get(ref_id)
    if ref is None:
        failures.append(f"{where}: past paper {ref_id} is not in content/econ")
        return False
    name = entry.get('fn')
    if name not in FUNCTIONS:
        failures.append(f"{where}: {ref_id}: unknown function {name}")
        return False
    args = entry.get('args', {})
    try:
        value = FUNCTIONS[name](**args)
    except (TypeError, ZeroDivisionError) as error:
        failures.append(f"{where}: {ref_id}: {name}{args} cannot be computed ({error})")
        return False
    answer = str(entry.get('answer', '')).strip()
    if not re.fullmatch(r'-?\d+(\.\d+)?', answer):
        failures.append(f"{where}: {ref_id}: answer \"{answer}\" is not a plain decimal number")
        return False
    if not rounds_to(value, answer):
        failures.append(f"{where}: {ref_id}: {name}{args} = {value:.6f}, which is not {answer} at {decimals_of(answer)} decimal places")
        return False
    ok = check_roles(entry, [field_text(ref, field) for field in entry.get('in', GUIDE_FIELDS)], where, failures)
    for field in entry.get('in', GUIDE_FIELDS):
        numbers = numbers_in(field_text(ref, field))
        missing = [key for key, arg in args.items() if not any(abs(x - float(arg)) < 1e-9 for x in numbers)]
        if not numbers:
            failures.append(f"{where}: {ref_id}: {field} is empty")
            ok = False
        elif missing:
            failures.append(f"{where}: {ref_id}: {field} does not state {', '.join(missing)}")
            ok = False
        elif not any(abs(x - float(answer)) < 1e-9 for x in numbers):
            failures.append(f"{where}: {ref_id}: {field} does not state the answer {answer}")
            ok = False
    return ok


def main():
    rows = load_questions()
    questions = [row for row in rows if row.get('kind') != 'pastpaper']
    pastpapers = {}
    for row in rows:
        if row.get('kind') == 'pastpaper':
            pastpapers.setdefault(row['id'], row)
    by_id = {}
    for question in questions:
        by_id.setdefault(question['id'], question)
    checks = load_checks()
    failures = []
    passed = 0

    checked = {entry.get('question') for entry in checks}
    with_expect = {entry.get('question') for entry in checks if 'expect_in' in entry}
    for question in questions:
        answer = question.get('answer')
        if answer not in (None, '') and question['id'] not in checked:
            failures.append(f"{question['id']}: answer {answer} has no check entry in scripts/econ-checks/")
        if question.get('command') == 'Calculate' and answer in (None, '') and question['id'] not in with_expect:
            failures.append(f"{question['id']}: Calculate question has neither an answer nor an expect_in check in scripts/econ-checks/")

    for entry in checks:
        where = entry['_file']
        if 'ref' in entry:
            if check_guide(entry, pastpapers, where, failures):
                passed += 1
            continue
        qid = entry.get('question')
        question = by_id.get(qid)
        if question is None:
            failures.append(f"{where}: question {qid} is not in content/econ")
            continue
        name = entry.get('fn')
        if name not in FUNCTIONS:
            failures.append(f"{where}: {qid}: unknown function {name}")
            continue
        args = entry.get('args', {})
        try:
            value = FUNCTIONS[name](**args)
        except (TypeError, ZeroDivisionError) as error:
            failures.append(f"{where}: {qid}: {name}{args} cannot be computed ({error})")
            continue

        check_roles(entry, [field_text(question, path) for path in ('prompt.en', 'prompt.ru', 'stimulus.en', 'stimulus.ru')], where, failures)

        answer = question.get('answer')
        compared = False
        if answer not in (None, ''):
            compared = True
            answer = str(answer).strip()
            if not re.fullmatch(r'-?\d+(\.\d+)?', answer):
                failures.append(f"{where}: {qid}: answer \"{answer}\" is not a plain decimal number")
            elif not rounds_to(value, answer):
                failures.append(f"{where}: {qid}: {name}{args} = {value:.6f}, which is not {answer} at {decimals_of(answer)} decimal places")
            else:
                passed += 1

        if 'expect_in' in entry:
            compared = True
            tolerance = entry.get('tol', max(0.005, abs(value) * 0.002))
            signed = entry.get('signed', bool(SIGN_CUE.search(field_text(question, 'prompt.en') + ' ' + field_text(question, 'stimulus.en'))))
            found = False
            for field in entry['expect_in']:
                for number in numbers_in(field_text(question, field)):
                    if signed:
                        matches = abs(number - value) <= tolerance
                    else:
                        matches = abs(abs(number) - abs(value)) <= tolerance
                    if matches:
                        found = True
                        break
                if found:
                    break
            if found:
                passed += 1
            else:
                failures.append(f"{where}: {qid}: {name}{args} = {value:.6f} is not in {', '.join(entry['expect_in'])}")

        if not compared:
            failures.append(f"{where}: {qid}: the check has nothing to compare (no answer, no expect_in)")

    answers = sum(1 for question in questions if question.get('answer') not in (None, ''))
    print(f"econ-verify: {answers} calculation answers, {len(checks)} check entries, {passed} checks passed, {len(failures)} problems")
    for line in failures:
        print(f"  FAIL {line}")
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main())
