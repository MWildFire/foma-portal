import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.6',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'significant-figures',
    term: { en: 'significant figures (s.f.)', ru: 'значащие цифры (significant figures (s.f.))' },
    def: {
      en: 'The digits of a number counted from its first non-zero digit. Rounding to n significant figures keeps the first n of these digits and rounds the rest, for example 0.0047 has two significant figures.',
      ru: 'Цифры числа, которые считаются от первой ненулевой цифры. Округление до n значащих цифр оставляет первые n таких цифр, например, у числа 0,0047 две значащие цифры.',
    },
    syllabus: '1.6',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Leading zeros are never significant, but zeros between non-zero digits are: 0.0407 has three significant figures.',
      ru: 'Ведущие нули никогда не бывают значащими, а нули между ненулевыми цифрами бывают: у числа 0,0407 три значащие цифры.',
    },
  },
  {
    id: 'bounds-of-rounded-value',
    term: { en: 'upper and lower bounds', ru: 'верхняя и нижняя границы (upper and lower bounds)' },
    def: {
      en: 'The largest and smallest values that a rounded number could have before rounding. For a value rounded to a given place, they lie half a unit of that place above and below the stated value.',
      ru: 'Наибольшее и наименьшее значения, которые могло иметь округлённое число до округления. Для значения, округлённого до данного разряда, они лежат на половину единицы этого разряда выше и ниже указанного значения.',
    },
    syllabus: '1.6',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
  },
];
