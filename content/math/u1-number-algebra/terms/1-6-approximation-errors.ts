import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'significant-figures',
    term: { en: 'significant figures (s.f.)', ru: 'значащие цифры (significant figures (s.f.))' },
    def: {
      en: 'The digits of a number that can be determined accurately, so they show how precise the value is. Rounding to $n$ significant figures (s.f.) keeps the first $n$ of these digits and rounds the rest, for example 0.0047 has two significant figures.',
      ru: 'Цифры числа, которые можно определить точно, поэтому они показывают, насколько точно известно значение. При округлении до $n$ значащих цифр (s.f.) сохраняются первые $n$ таких цифр, а остальные округляются; например, у числа 0,0047 две значащие цифры.',
    },
    syllabus: '1.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 4' },
    pitfall: {
      en: 'Leading zeros are never significant, but zeros between non-zero digits are: 0.0407 has three significant figures.',
      ru: 'Ведущие нули никогда не бывают значащими, а нули между ненулевыми цифрами бывают: у числа 0,0407 три значащие цифры.',
    },
  },
  {
    id: 'bounds-of-rounded-value',
    term: { en: 'upper and lower bounds', ru: 'верхняя и нижняя границы (upper and lower bounds)' },
    def: {
      en: 'If a value $M$ is correct to the unit $u$, the exact value $V$ satisfies $M - 0.5u \\le V < M + 0.5u$. The two ends of this range are the lower and upper bounds.',
      ru: 'Если значение $M$ верно с точностью до единицы $u$, то точное значение $V$ удовлетворяет неравенству $M - 0{,}5u \\le V < M + 0{,}5u$. Два конца этого промежутка — нижняя и верхняя границы.',
    },
    syllabus: '1.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 5' },
    pitfall: {
      en: 'For $12.4$ correct to 1 decimal place, $12.35 \\le x < 12.45$: the lower bound is included and the upper bound is not.',
      ru: 'Для $12{,}4$ с точностью до 1 знака после запятой $12{,}35 \\le x < 12{,}45$: нижняя граница входит в диапазон, верхняя не входит.',
    },
  },
  {
    id: 'percentage-error',
    term: { en: 'percentage error', ru: 'процентная погрешность (percentage error)' },
    def: {
      en: 'The difference between an approximate value and the exact value, divided by the exact value and written as a percentage. The difference is taken as a positive number.',
      ru: 'Разность между приближённым и точным значением, делённая на точное значение и выраженная в процентах. Разность берётся положительной.',
    },
    syllabus: '1.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 7' },
  },
];
