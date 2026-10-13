#!/usr/bin/env python3
"""Recomputes every numeric answer and worked-example value of the maths subject (PLAN.md section 8).

    python3 scripts/math-verify.py               # every check file
    python3 scripts/math-verify.py 4-17-poisson  # only scripts/math-checks/4-17-poisson.py

Each scripts/math-checks/<name>.py defines CHECKS, a list of (id, computed, printed) tuples:
  - id: a question id (its `answer` field is checked) or a worked-example id that starts with "we-";
  - computed: a number or a list of numbers, recomputed here with numpy, scipy or sympy;
  - printed: what the reader sees, for example "0.101" or "0.105; 18; 0.156", or None to use the answer field.

A printed value is correct when it lies within half a unit of its last decimal place of the computed value:
|computed - printed| <= 0.5 * 10**(-decimals). So "0.101" is right for 0.100819, and "0.10" is not.
Every question with an answer needs a check. The exit code is 1 when any check fails.

Needs numpy, scipy and sympy, for example in a virtualenv: python3 -m venv ~/.foma-portal/venv-math && \
~/.foma-portal/venv-math/bin/pip install numpy scipy sympy
"""

import importlib.util
import json
import math
import subprocess
import sys
from pathlib import Path

sys.dont_write_bytecode = True   # no __pycache__ under scripts/math-checks/ (the repo does not ignore it)

ROOT = Path(__file__).resolve().parent.parent
CHECK_DIR = ROOT / 'scripts' / 'math-checks'


def load_questions():
    result = subprocess.run(
        ['node', '--experimental-strip-types', 'scripts/math-export.ts'],
        cwd=ROOT, capture_output=True, text=True, check=False,
    )
    if result.returncode != 0:
        sys.stderr.write(result.stdout + result.stderr)
        sys.exit(1)
    return {row['id']: row for row in json.loads(result.stdout)}


def parse_printed(text):
    """'0.105; 18' -> [(0.105, 3), (18.0, 0)]: the value and the number of decimals the reader sees."""
    parsed = []
    for token in text.split(';'):
        token = token.strip()
        if not token or ',' in token:
            raise ValueError(f'"{token}" must be a number written with a decimal point, for example 0.101')
        try:
            value = float(token)
        except ValueError:
            raise ValueError(f'"{token}" is not a number') from None
        decimals = len(token.split('.')[1]) if '.' in token else 0
        parsed.append((value, decimals))
    return parsed


def load_check_modules(selected):
    modules = []
    for path in sorted(CHECK_DIR.glob('*.py')):
        if path.name.startswith('_') or (selected and path.stem not in selected):
            continue
        spec = importlib.util.spec_from_file_location(f'math_checks_{path.stem.replace("-", "_")}', path)
        module = importlib.util.module_from_spec(spec)
        try:
            spec.loader.exec_module(module)
        except Exception as error:  # a broken check file is a failure, not a crash of the whole run
            modules.append((path.stem, error))
            continue
        modules.append((path.stem, getattr(module, 'CHECKS', None)))
    return modules


def main(argv):
    selected = set(argv[1:])
    questions = load_questions()
    failures = []
    seen = set()
    passed = 0

    for name, checks in load_check_modules(selected):
        if isinstance(checks, Exception):
            failures.append(f'{name}.py does not run: {checks}')
            continue
        if checks is None:
            failures.append(f'{name}.py defines no CHECKS list')
            continue
        for entry in checks:
            check_id, computed, printed = entry
            where = f'{name}.py {check_id}'
            if check_id in seen:
                failures.append(f'{where}: this id is checked twice')
                continue
            seen.add(check_id)
            if check_id in questions:
                if printed is None:
                    printed = questions[check_id]['answer']
                    if printed is None:
                        failures.append(f'{where}: the question has no answer field to compare with')
                        continue
            elif not check_id.startswith('we-'):
                failures.append(f'{where}: not a question id in content/math and not a we- worked example')
                continue
            elif printed is None:
                failures.append(f'{where}: a worked example needs its printed value')
                continue
            try:
                expected = parse_printed(printed)
            except ValueError as error:
                failures.append(f'{where}: {error}')
                continue
            values = list(computed) if isinstance(computed, (list, tuple)) else [computed]
            if len(values) != len(expected):
                failures.append(f'{where}: {len(values)} computed values but {len(expected)} printed ("{printed}")')
                continue
            ok = True
            for index, (value, (shown, decimals)) in enumerate(zip(values, expected)):
                value = float(value)
                if not math.isfinite(value):
                    failures.append(f'{where}: computed value {index + 1} is not a finite number')
                    ok = False
                    break
                if abs(value - shown) > 0.5 * 10 ** (-decimals) + 1e-9:
                    failures.append(f'{where}: printed "{printed}" but computed {value:.6g} (value {index + 1})')
                    ok = False
                    break
            if ok:
                passed += 1

    if not selected:
        for question_id, row in questions.items():
            if row['answer'] is not None and question_id not in seen:
                failures.append(f'question {question_id} has an answer but no check in scripts/math-checks/')

    for line in failures:
        print(f'FAIL  {line}')
    print(f'math-verify: {passed} checks passed, {len(failures)} problems: {"FAILED" if failures else "OK"}')
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
