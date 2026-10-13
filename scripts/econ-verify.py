#!/usr/bin/env python3
# Recomputes the calculation answers of the Economics content (content/econ/) from the formulas named in
# scripts/econ-checks/*.json, and checks the numbers that data sets quote in their markscheme. The content is not
# trusted: every value comes from the formula applied to the arguments written in the check file.
#
#   python3 scripts/econ-verify.py
#
# Rules (also in the brief for the content agents):
#   - every Question with an "answer" needs a check entry for it;
#   - the arguments of a check must appear as numbers in the question's prompt or stimulus (the student sees them);
#   - the answer must equal the recomputed value rounded to the decimals the answer is written with;
#   - a check with "expect_in" must find its recomputed value among the numbers of those fields (for example
#     "markscheme.en"), within "tol" (default: 0.2 % or 0.005, whichever is larger; absolute values are compared).
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


def main():
    questions = load_questions()
    by_id = {}
    for question in questions:
        by_id.setdefault(question['id'], question)
    checks = load_checks()
    failures = []
    passed = 0

    checked = {entry.get('question') for entry in checks}
    for question in questions:
        answer = question.get('answer')
        if answer not in (None, '') and question['id'] not in checked:
            failures.append(f"{question['id']}: answer {answer} has no check entry in scripts/econ-checks/")

    for entry in checks:
        where = entry['_file']
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

        shown = ' '.join(
            field_text(question, path) for path in ('prompt.en', 'prompt.ru', 'stimulus.en', 'stimulus.ru')
        )
        shown_numbers = numbers_in(shown)
        missing = [key for key, arg in args.items() if not any(abs(x - float(arg)) < 1e-9 for x in shown_numbers)]
        if missing:
            failures.append(f"{where}: {qid}: argument(s) {', '.join(missing)} are not written in the prompt or stimulus")
            continue

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
            found = False
            for field in entry['expect_in']:
                for number in numbers_in(field_text(question, field)):
                    if abs(abs(number) - abs(value)) <= tolerance:
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
