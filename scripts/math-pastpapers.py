#!/usr/bin/env python3
"""Maths AI HL past papers: index, question skeletons, checks and content/math/pastpapers.ts.

Source PDFs, extracted text and analysis live outside git in
~/Projects/foma-portal-sources/math/past-papers/. Only the generated TypeScript
goes into the repo: question numbers, marks, command terms, topic ids and links to
the PDFs. No question text, resource booklet or markscheme text is copied.

  python3 scripts/math-pastpapers.py catalogue   # topic catalogue for classification
  python3 scripts/math-pastpapers.py index       # index every PDF into index.json
  python3 scripts/math-pastpapers.py text        # pdftotext -layout for every PDF
  python3 scripts/math-pastpapers.py skeleton    # analysis/<id>.json with question digests
  python3 scripts/math-pastpapers.py check       # marks, counts, topic ids, command terms
  python3 scripts/math-pastpapers.py build OUT   # write the TypeScript module to OUT
"""
import argparse
import csv
import glob
import json
import os
import re
import subprocess
import sys
import urllib.parse

HOME_SOURCES = os.path.expanduser('~/Projects/foma-portal-sources/math')
PAST = os.path.join(HOME_SOURCES, 'past-papers')
PDF_ROOT = os.path.join(PAST, 'IB PAST PAPERS - YEAR')
TEXT_DIR = os.path.join(PAST, 'text')
ANALYSIS_DIR = os.path.join(PAST, 'analysis')
GUIDE_DIR = os.path.join(PAST, 'guides')
INDEX_PATH = os.path.join(PAST, 'index.json')
CATALOGUE_PATH = os.path.join(HOME_SOURCES, 'topic-catalogue.tsv')
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
MATH_CONTENT = os.path.join(REPO, 'content', 'math')

# Scope set by the round: sessions M21..N25. M26 exists on the site but is out of scope.
SCOPE = ['M21', 'N21', 'M22', 'N22', 'M23', 'N23', 'M24', 'N24', 'M25', 'N25']
COVER_TIME_RE = re.compile(r'\b(\d) hours?(?: (\d{1,2}) minutes?)?')
ALLOWED_MINUTES = {'P1': [120], 'P2': [120], 'P3': [60, 75]}  # cover times seen in the 2021-2025 papers

# IB command terms, longest first so that "Hence or otherwise" wins over "Hence".
COMMAND_TERMS = sorted([
    'Hence or otherwise', 'Show that', 'Write down', 'Hence', 'Find', 'Calculate', 'Determine',
    'Estimate', 'State', 'Justify', 'Explain', 'Interpret', 'Comment', 'Verify', 'Prove', 'Deduce',
    'Sketch', 'Draw', 'Construct', 'Identify', 'Describe', 'Compare', 'Suggest', 'Outline',
    'Predict', 'Solve', 'Derive', 'Plot', 'Label', 'Express', 'Give', 'Show', 'Use', 'Define',
    'List', 'Investigate', 'Evaluate', 'Measure', 'Demonstrate', 'Differentiate', 'Distinguish',
    'Consider', 'Determine', 'Write',
], key=len, reverse=True)
COMMAND_RE = re.compile(r'^(' + '|'.join(re.escape(t) for t in COMMAND_TERMS) + r')(?![a-z])')
LABEL_RE = re.compile(r'^\(?([a-h]|[ivx]{1,4})\)?[\.\)]?\s+')
HEADER_RE = re.compile(r'^\s*(\d{1,2})\s*\.?\s*[\[\(]\s*Maximum\s+marks?\s*:?\s*(\d+)\s*[\]\)]', re.I)
CONTROL_RE = re.compile(r'[\x00-\x08\x0b\x0e-\x1f]')
MAX_RE = re.compile(r'maximum mark for this examination paper is \[(\d+) marks?\]')
NOISE_RE = re.compile(r'(turn over|©|International Baccalaureate|Organi[sz]ation du|Organizaci|^\s*\d+\s*$|blank page|Please do not)', re.I)


def field(src, pattern, path):
    m = re.search(pattern, src, re.S)
    if not m:
        sys.exit(f'math-pastpapers: no match for {pattern!r} in {path}')
    return m.group(1)


def read_catalogue():
    rows = []
    for path in sorted(glob.glob(os.path.join(MATH_CONTENT, 'u*', 'topics', '*.meta.ts'))):
        src = open(path, encoding='utf-8').read()
        tid = field(src, r"\bid:\s*'([^']+)'", path)
        code = field(src, r"\bcode:\s*'([^']+)'", path)
        title_match = re.search(r"title:\s*\{\s*en:\s*(?:'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\")", src, re.S)
        if not title_match:
            sys.exit(f'math-pastpapers: no English title in {path}')
        title = title_match.group(1) if title_match.group(1) is not None else title_match.group(2)
        papers = field(src, r"papers:\s*\[([^\]]*)\]", path).replace("'", '').replace(' ', '').replace('\n', '')
        unit = os.path.basename(os.path.dirname(os.path.dirname(path)))
        rows.append({'id': tid, 'code': code, 'unit': unit, 'papers': papers, 'title': title})
    return rows


def topic_ids():
    return {row['id'] for row in read_catalogue()}


def cmd_catalogue(_args):
    rows = read_catalogue()
    os.makedirs(HOME_SOURCES, exist_ok=True)
    with open(CATALOGUE_PATH, 'w', encoding='utf-8', newline='') as fh:
        writer = csv.writer(fh, delimiter='\t')
        writer.writerow(['id', 'code', 'unit', 'papers', 'title_en'])
        for r in rows:
            writer.writerow([r['id'], r['code'], r['unit'], r['papers'], r['title']])
    print(f'catalogue: {len(rows)} topics -> {CATALOGUE_PATH}')


def classify(rel):
    """Return (session, paper, tz, kind) for a PDF path relative to PDF_ROOT."""
    m = re.search(r'/(May|November) (\d{4}) Examination Session/', '/' + rel)
    if m:
        session = ('M' if m.group(1) == 'May' else 'N') + m.group(2)[2:]
    else:
        m2 = re.search(r'More Papers (M\d\d)', rel)
        session = m2.group(1) if m2 else '?'
    name = os.path.basename(rel)
    pm = re.search(r'(?:paper[ _]?|AIHL[ _]P|P)(\d)(?![0-9])', name, re.I)
    paper = 'P' + pm.group(1) if pm else '?'
    if re.search(r'TZ\s*1', name, re.I):
        tz = 'TZ1'
    elif re.search(r'TZ\s*2', name, re.I):
        tz = 'TZ2'
    elif re.search(r'TZ\s*3', name, re.I):
        tz = 'TZ3'
    elif re.search(r'TZ\s*B|Zone[ _]B', name, re.I):
        tz = 'ZONEB'
    elif 'More Papers' in rel and session == 'M23':
        tz = 'MORE'
    else:
        tz = ''
    kind = 'markscheme' if re.search(r'markscheme|marks', name, re.I) else 'paper'
    return session, paper, tz, kind


def make_id(session, paper, tz):
    base = f"math-{paper.lower()}-{session.lower()}"
    if tz:
        base += '-' + tz.lower()
    return base


def pdf_url(rel):
    return 'https://ibdocs.re/p/' + urllib.parse.quote(rel)


def cmd_index(_args):
    entries = []
    for path in sorted(glob.glob(os.path.join(PDF_ROOT, '**', '*.pdf'), recursive=True)):
        rel = os.path.relpath(path, PAST)
        session, paper, tz, kind = classify(rel.split('/', 1)[1] if rel.startswith('IB PAST') else rel)
        entries.append({
            'id': make_id(session, paper, tz) + ('-ms' if kind == 'markscheme' else ''),
            'session': session, 'paper': paper, 'tz': tz, 'kind': kind,
            # 'More Papers M23' repeats the M23 TZ2 papers (word overlap 0.7-1.0), so it is not a separate variant.
            'inScope': session in SCOPE and tz != 'MORE', 'rel': rel, 'url': pdf_url(rel.split('/', 1)[1]),
        })
    with open(INDEX_PATH, 'w', encoding='utf-8') as fh:
        json.dump(entries, fh, ensure_ascii=False, indent=1)
    print(f'index: {len(entries)} PDFs, in scope {sum(e["inScope"] for e in entries)} -> {INDEX_PATH}')


def cmd_text(args):
    os.makedirs(TEXT_DIR, exist_ok=True)
    entries = json.load(open(INDEX_PATH, encoding='utf-8'))
    done = scanned = 0
    for e in entries:
        if not e['inScope']:
            continue
        out = os.path.join(TEXT_DIR, e['id'] + '.txt')
        if args.force or not os.path.exists(out):
            subprocess.run(['pdftotext', '-layout', os.path.join(PAST, e['rel']), out], check=True)
            done += 1
        if os.path.getsize(out) < 200:
            scanned += 1
    print(f'text: extracted {done}, no text layer (scanned) {scanned}')


def command_terms(text):
    """Sentence-initial IB command terms in order of appearance, without duplicates."""
    found = []
    for sentence in re.split(r'(?<=[.?!])\s+|\s(?=\(?[a-h]\)?[.)]\s)|\s(?=\([ivx]{1,4}\)\s)', text):
        s = LABEL_RE.sub('', sentence.strip().lstrip('.)( '), count=1)
        m = COMMAND_RE.match(s)
        if m:
            term = m.group(1)
            if term not in found:
                found.append(term)
    return found


def parse_questions(text):
    lines = CONTROL_RE.sub(' ', text).replace('\x0c', '\n').split('\n')
    questions, current = [], None
    started = False
    for line in lines:
        h = HEADER_RE.match(line)
        if h:
            started = True
            current = {'q': h.group(1), 'marks': int(h.group(2)), 'body': []}
            questions.append(current)
            continue
        if not started or current is None:
            continue
        if NOISE_RE.search(line) or not line.strip():
            continue
        current['body'].append(line.strip())
    for q in questions:
        body = ' '.join(q['body'])
        body = re.sub(r'\s+', ' ', body).strip()
        q['text'] = body
        q['commands'] = command_terms(body)
        del q['body']
    return questions


def cover_minutes_for(paper_id):
    path = os.path.join(TEXT_DIR, paper_id + '.txt')
    return cover_minutes(open(path, encoding='utf-8', errors='replace').read())


def cover_minutes(raw):
    m = COVER_TIME_RE.search(CONTROL_RE.sub(' ', raw))
    if not m:
        return None
    return int(m.group(1)) * 60 + (int(m.group(2)) if m.group(2) else 0)


def cmd_skeleton(args):
    os.makedirs(ANALYSIS_DIR, exist_ok=True)
    entries = json.load(open(INDEX_PATH, encoding='utf-8'))
    written = []
    for e in entries:
        if not e['inScope'] or e['kind'] != 'paper':
            continue
        if e['paper'] not in ALLOWED_MINUTES:
            continue
        text_path = os.path.join(TEXT_DIR, e['id'] + '.txt')
        if not os.path.exists(text_path) or os.path.getsize(text_path) < 200:
            continue
        out = os.path.join(ANALYSIS_DIR, e['id'] + '.json')
        if os.path.exists(out) and not args.force:
            continue
        raw = open(text_path, encoding='utf-8', errors='replace').read()
        m = MAX_RE.search(CONTROL_RE.sub(' ', raw).replace('\n', ' '))
        max_marks = int(m.group(1)) if m else None
        questions = parse_questions(raw)
        doc = {
            'id': e['id'], 'session': e['session'], 'paper': e['paper'], 'tz': e['tz'],
            'url': e['url'], 'maxMarks': max_marks, 'minutes': cover_minutes(raw),
            'questions': [{
                'q': q['q'], 'marks': q['marks'], 'command': ', '.join(q['commands']),
                'commandsDetected': q['commands'], 'topicIds': [], 'text': q['text'][:6000],
            } for q in questions],
        }
        with open(out, 'w', encoding='utf-8') as fh:
            json.dump(doc, fh, ensure_ascii=False, indent=1)
        written.append((e['id'], len(questions), max_marks, sum(q['marks'] for q in questions)))
    for row in written:
        print('skeleton', *row)
    print(f'skeleton: wrote {len(written)} analysis files')


def cmd_check(_args):
    ids = topic_ids()
    problems = 0
    for path in sorted(glob.glob(os.path.join(ANALYSIS_DIR, '*.json'))):
        doc = json.load(open(path, encoding='utf-8'))
        qs = doc['questions']
        total = sum(q['marks'] for q in qs)
        numbers = [q['q'] for q in qs]
        bad = []
        if doc['maxMarks'] is None or total != doc['maxMarks']:
            bad.append(f'marks {total} != maxMarks {doc["maxMarks"]}')
        minutes = cover_minutes_for(doc['id'])
        if minutes not in ALLOWED_MINUTES.get(doc['paper'], []):
            bad.append(f'cover minutes {minutes} not in {ALLOWED_MINUTES.get(doc["paper"])}')
        if numbers != [str(i) for i in range(1, len(qs) + 1)]:
            bad.append(f'question numbers {numbers}')
        for q in qs:
            if not q['topicIds']:
                bad.append(f'Q{q["q"]} has no topicIds')
            unknown = [t for t in q['topicIds'] if t not in ids]
            if unknown:
                bad.append(f'Q{q["q"]} unknown topic {unknown}')
            if not q['command']:
                bad.append(f'Q{q["q"]} no command term detected')
        status = 'ok' if not bad else 'FAIL'
        problems += len(bad)
        print(f'{status} {doc["id"]}: {len(qs)} questions, {total}/{doc["maxMarks"]} marks' + (' | ' + '; '.join(bad) if bad else ''))
    print(f'check: {problems} problem(s)')
    return 1 if problems else 0


def ts_string(value):
    return "'" + value.replace('\\', '\\\\').replace("'", "\\'") + "'"


def ts_l(value):
    return '{ en: ' + ts_string(value['en']) + ', ru: ' + ts_string(value['ru']) + ' }'


def cmd_build(args):
    ids = topic_ids()
    index = {e['id']: e for e in json.load(open(INDEX_PATH, encoding='utf-8'))}
    out = ['import type { PastPaperRef } from \'../../src/contract/types\';', '',
           '// Past papers for Maths AI HL (IB Diploma), sessions M21 to N25, all time zones. Items keep the',
           '// question number, its maximum mark, the command terms and the topic codes. PDFs are linked, not copied.',
           '// Generated by scripts/math-pastpapers.py build; edit the analysis or guides there, not this file.', '',
           'export const pastPapers: PastPaperRef[] = [']
    count = 0
    for path in sorted(glob.glob(os.path.join(ANALYSIS_DIR, '*.json'))):
        doc = json.load(open(path, encoding='utf-8'))
        if doc['session'] not in SCOPE:
            continue
        guide_path = os.path.join(GUIDE_DIR, doc['id'] + '.json')
        guide = json.load(open(guide_path, encoding='utf-8')) if os.path.exists(guide_path) else None
        ms = index.get(doc['id'] + '-ms')
        files = [{'kind': 'questions', 'url': doc['url']}]
        if ms:
            files.append({'kind': 'markscheme', 'url': ms['url']})
        out.append('  {')
        out.append(f"    id: {ts_string(doc['id'])},")
        out.append("    subject: 'math',")
        out.append(f"    paper: {ts_string(doc['paper'])},")
        out.append(f"    session: {ts_string(doc['session'])},")
        out.append("    level: 'HL',")
        if doc['tz']:
            out.append(f"    tz: {ts_string(doc['tz'])},")
        out.append('    files: [')
        for f in files:
            out.append(f"      {{ kind: {ts_string(f['kind'])}, url: {ts_string(f['url'])} }},")
        out.append('    ],')
        out.append(f"    minutes: {cover_minutes_for(doc['id'])},")  # printed on the cover of that session
        out.append(f"    marks: {doc['maxMarks']},")
        out.append('    items: [')
        for q in doc['questions']:
            bad = [t for t in q['topicIds'] if t not in ids]
            if not q['topicIds'] or bad:
                sys.exit(f"build: {doc['id']} Q{q['q']} has missing or unknown topicIds {bad}")
            topics = ', '.join(ts_string(t) for t in q['topicIds'])
            out.append(f"      {{ q: {ts_string(q['q'])}, marks: {q['marks']}, topicIds: [{topics}], command: {ts_string(q['command'])} }},")
        out.append('    ],')
        if guide:
            out.append(f"    guide: {ts_l(guide)},")
        out.append('  },')
        count += 1
    out.append('];')
    out.append('')
    with open(args.out, 'w', encoding='utf-8') as fh:
        fh.write('\n'.join(out))
    print(f'build: {count} papers -> {args.out}')


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='cmd', required=True)
    sub.add_parser('catalogue').set_defaults(func=cmd_catalogue)
    sub.add_parser('index').set_defaults(func=cmd_index)
    p = sub.add_parser('text'); p.add_argument('--force', action='store_true'); p.set_defaults(func=cmd_text)
    p = sub.add_parser('skeleton'); p.add_argument('--force', action='store_true'); p.set_defaults(func=cmd_skeleton)
    sub.add_parser('check').set_defaults(func=cmd_check)
    p = sub.add_parser('build'); p.add_argument('out'); p.set_defaults(func=cmd_build)
    args = parser.parse_args()
    result = args.func(args)
    sys.exit(result or 0)


if __name__ == '__main__':
    main()
