#!/usr/bin/env python3
"""Find the printed pages where maths terms are defined in the AI HL course book.

The book text stays outside git: one file per PDF page, made with
  pdftotext -layout -f P -l P <book>.pdf <folder>/pNNNN.txt
MATH_BOOK_TEXT points at that folder (default: ~/Projects/foma-portal-sources/math/book-text).

Usage:
  python3 scripts/math-book-search.py "gradient of a straight line" "gradient"
  python3 scripts/math-book-search.py --pages 97-106 --max 5 "perpendicular lines"
  python3 scripts/math-book-search.py --sections 3          # section headings of chapter 3
  python3 scripts/math-book-search.py --offset              # printed page = PDF page - offset
  python3 scripts/math-book-search.py --pages 97-106 --copycheck < candidates.txt

Each hit prints the locator to use ("ch. 3.2, p. 97"), a DEF mark when the text after
the term looks like a definition, and a snippet. Definitions are listed first.
--copycheck reads candidate sentences (one per line) and reports runs of 7+ words that
the book contains, so that English definitions stay in our own words.
The output quotes the book: read it in the terminal, never paste it into the repo.
"""
import argparse
import bisect
import collections
import glob
import os
import re
import sys
import unicodedata

BOOK_DIR = os.path.expanduser(os.environ.get('MATH_BOOK_TEXT', '~/Projects/foma-portal-sources/math/book-text'))
FIRST_BODY_PDF = 12   # PDF page 12 is printed page 1; earlier pages are front matter
DEFAULT_OFFSET = 11   # printed page = PDF page - 11 (checked on 855 printed footers)
COPY_RUN = 7          # word runs of this length or more count as copied
FOOTER = re.compile(r'^\s*(\d{1,3})\s*$')
HEADING = re.compile(r'^\s*(\d{1,2})\.(\d{1,2})\s+([A-Z][^\n]{2,70})$')
DEF_CUE = re.compile(r'^(?:is|are|refers to|means|is called|are called|is known as|is defined as|is the|are the)\b', re.I)
# The text layer drops the ff / fi / fl ligatures ("Dierential", "xed"), so they are
# removed from both the search term and the book text before comparing.
GAPS = re.compile(r'ffi|ffl|ff|fi|fl')


def letters_of(text):
    """Lower-case letters and digits of text, ligature gaps removed.

    Returns the comparison string and the offset in text of each of its characters.
    """
    chars, offsets = [], []
    for index, ch in enumerate(text):
        low = ch.lower()
        if low == 'z':
            low = 's'  # the book mixes -ize and -ise spellings; compare them as -ise
        if low.isalnum():
            chars.append(low)
            offsets.append(index)
    joined = ''.join(chars)
    keep = [True] * len(joined)
    for match in GAPS.finditer(joined):
        for k in range(match.start(), match.end()):
            keep[k] = False
    return (''.join(c for c, k in zip(chars, keep) if k),
            [o for o, k in zip(offsets, keep) if k])


def tokens(text):
    """Lower-case words for copy checks. LaTeX between $...$ is ignored."""
    text = re.sub(r'\$[^$]*\$', ' ', text)
    words = re.findall(r'[a-z0-9]+', unicodedata.normalize('NFKC', text).lower().replace('z', 's'))
    return [w for w in (GAPS.sub('', word) for word in words) if w]


def footer_number(text):
    for line in text.split('\n')[-5:][::-1]:
        match = FOOTER.match(line)
        if match and 1 <= int(match.group(1)) <= 880:
            return int(match.group(1))
    return None


class Book:
    def __init__(self):
        self.pages = {}
        for path in sorted(glob.glob(os.path.join(BOOK_DIR, 'p[0-9][0-9][0-9][0-9].txt'))):
            with open(path, encoding='utf-8', errors='replace') as handle:
                self.pages[int(os.path.basename(path)[1:5])] = unicodedata.normalize('NFKC', handle.read())
        counts = collections.Counter()
        for pdf, text in self.pages.items():
            number = footer_number(text) if pdf >= FIRST_BODY_PDF else None
            if number is not None:
                counts[pdf - number] += 1
        self.offset_counts = counts
        self.offset = counts.most_common(1)[0][0] if counts else DEFAULT_OFFSET
        self.headings = []  # (pdf, line index, 'N.M', title) in reading order
        for pdf in sorted(self.pages):
            if pdf < FIRST_BODY_PDF:
                continue
            for index, line in enumerate(self.pages[pdf].split('\n')):
                match = HEADING.match(line)
                if match and 1 <= int(match.group(1)) <= 15 and 1 <= int(match.group(2)) <= 12:
                    self.headings.append((pdf, index, f'{match.group(1)}.{match.group(2)}', match.group(3).strip()))
        self.keys = [(pdf, index) for pdf, index, _, _ in self.headings]
        self.letter_cache = {}

    def printed(self, pdf):
        return pdf - self.offset

    def section_at(self, pdf, index):
        position = bisect.bisect_right(self.keys, (pdf, index)) - 1
        return self.headings[position][2] if position >= 0 else 'n/a'

    def letters(self, pdf):
        if pdf not in self.letter_cache:
            self.letter_cache[pdf] = letters_of(self.pages[pdf])
        return self.letter_cache[pdf]

    def find(self, term, first_pdf, last_pdf, context):
        needle, _ = letters_of(term)
        hits = []
        if not needle:
            return hits
        for pdf in range(max(first_pdf, FIRST_BODY_PDF), min(last_pdf, max(self.pages)) + 1):
            if pdf not in self.pages:
                continue
            text = self.pages[pdf]
            letters, offsets = self.letters(pdf)
            start = letters.find(needle)
            while start >= 0:
                begin = offsets[start]
                end = offsets[start + len(needle) - 1] + 1
                after = text[end:end + 40].lstrip(' ,.;:()\n')
                definition = bool(DEF_CUE.match(after))
                section = self.section_at(pdf, text.count('\n', 0, begin))
                snippet = ' '.join(text[max(0, begin - context):end + context].split())
                hits.append((not definition, self.printed(pdf), section, definition, snippet))
                start = letters.find(needle, start + 1)
        hits.sort(key=lambda hit: (hit[0], hit[1]))
        return hits


def gram_index(book, first_pdf, last_pdf, size):
    grams = {}
    for pdf in range(max(first_pdf, FIRST_BODY_PDF), min(last_pdf, max(book.pages)) + 1):
        if pdf not in book.pages:
            continue
        words = tokens(book.pages[pdf])
        for i in range(len(words) - size + 1):
            grams.setdefault(' '.join(words[i:i + size]), book.printed(pdf))
    return grams


def copy_check(book, first_pdf, last_pdf, lines):
    grams = gram_index(book, first_pdf, last_pdf, COPY_RUN)
    for number, line in enumerate(lines, 1):
        words = tokens(line)
        if len(words) < COPY_RUN:
            print(f'#{number} ok (under {COPY_RUN} words)')
            continue
        matched = [' '.join(words[i:i + COPY_RUN]) in grams for i in range(len(words) - COPY_RUN + 1)]
        found = False
        i = 0
        while i < len(matched):
            if not matched[i]:
                i += 1
                continue
            j = i
            while j < len(matched) and matched[j]:
                j += 1
            run = j - 1 + COPY_RUN - i  # grams i..j-1 cover words i .. j-1+COPY_RUN-1
            page = grams[' '.join(words[i:i + COPY_RUN])]
            print(f'#{number} COPIED {run} words, p. {page}: "{" ".join(words[i:i + run])}"')
            found = True
            i = j
        if not found:
            print(f'#{number} ok')


def main():
    parser = argparse.ArgumentParser(description='Find term definitions in the AI HL course book.')
    parser.add_argument('terms', nargs='*', help='terms to look for (case and punctuation ignored)')
    parser.add_argument('--pages', metavar='A-B', help='restrict to printed pages A to B (inclusive)')
    parser.add_argument('--max', type=int, default=3, help='hits to show per term (default 3)')
    parser.add_argument('--context', type=int, default=200, help='characters of context on each side')
    parser.add_argument('--sections', type=int, metavar='CHAPTER', help='list section headings of a chapter')
    parser.add_argument('--offset', action='store_true', help='show the PDF-to-printed page offset')
    parser.add_argument('--copycheck', action='store_true', help='read sentences from stdin and report copied runs')
    args = parser.parse_args()
    book = Book()

    if args.offset:
        print(f'offset (PDF - printed): {book.offset}; top counts: {book.offset_counts.most_common(4)}')
        print(f'pages loaded: {len(book.pages)}; section headings: {len(book.headings)}')
        return
    if args.sections is not None:
        seen = set()
        for pdf, _, code, title in book.headings:
            if code.split('.')[0] == str(args.sections) and code not in seen:
                seen.add(code)
                print(f'{code}  p. {book.printed(pdf)}  {title}')
        return
    first_pdf, last_pdf = 0, 10**6
    if args.pages:
        low, high = (int(part) for part in args.pages.split('-'))
        first_pdf, last_pdf = low + book.offset, high + book.offset
    if args.copycheck:
        copy_check(book, first_pdf, last_pdf, sys.stdin.read().splitlines())
        return
    if not args.terms:
        parser.print_help()
        return
    for term in args.terms:
        hits = book.find(term, first_pdf, last_pdf, args.context)
        print(f'== {term}  ({len(hits)} hits)')
        if not hits:
            print('   no hits: try a shorter or different wording')
        for _, printed, section, definition, snippet in hits[:args.max]:
            locator = f'ch. {section}, p. {printed}' if section != 'n/a' else f'p. {printed}'
            print(f"   {'DEF ' if definition else '    '}{locator} | {snippet}")


if __name__ == '__main__':
    main()
