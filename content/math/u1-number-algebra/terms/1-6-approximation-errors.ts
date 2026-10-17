import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'significant-figures',
    term: { en: 'significant figures (s.f.)', ru: 'значащие цифры (significant figures (s.f.))' },
    def: {
      en: 'Digits retained to express a value at a stated precision; this convention does not prove that the measurement is accurate. Rounding to $n$ significant figures (s.f.) keeps the first $n$ of these digits and rounds the rest, for example 0.0047 has two significant figures.',
      ru: 'Цифры, сохраняемые при записи значения с указанной точностью; такая запись сама по себе не доказывает правильности измерения. При округлении до $n$ значащих цифр (s.f.) сохраняются первые $n$ таких цифр, а остальные округляются; например, у числа 0,0047 две значащие цифры.',
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
      en: 'For a nonnegative value $M$ rounded to the nearest unit $u$ with midpoint ties upwards, the exact value $V$ satisfies $M - 0.5u \\le V < M + 0.5u$. Intersect this interval with any physical restriction: if the measured quantity cannot be negative and rounds to zero, its feasible lower bound is zero.',
      ru: 'Для неотрицательного $M$, округлённого к ближайшей единице $u$ с серединой вверх точное значение $V$ удовлетворяет неравенству $M - 0{,}5u \\le V < M + 0{,}5u$. Пересеки этот промежуток с физическими ограничениями: если измеряемая величина неотрицательна и округляется до нуля, её нижняя допустимая граница равна нулю.',
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
      en: 'Here the absolute error magnitude: absolute difference divided by the absolute nonzero exact value, times 100%. A signed percentage error is a different convention used in the booklet.',
      ru: 'Здесь абсолютная величина ошибки: модуль разности делят на модуль ненулевого точного значения и умножают на 100%. Процентная погрешность со знаком — другое соглашение, используемое в книжке формул.',
    },
    syllabus: '1.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 7' },
  },
];
