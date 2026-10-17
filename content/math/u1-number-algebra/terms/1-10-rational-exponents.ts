import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'own' as const,
  title: 'Author explanation; a standalone textbook page has not been verified / Авторское объяснение; отдельная страница учебника не подтверждена',
};

export const terms: Term[] = [
  {
    id: 'rational-exponent',
    term: { en: 'rational exponent', ru: 'рациональный показатель степени (rational exponent)' },
    def: {
      en: 'For $a>0$, integer $m$ and positive integer $n$, $a^{\\frac{1}{n}}$ is the positive $n$th root of $a$, and $a^{\\frac{m}{n}}=\\left(a^{\\frac{1}{n}}\\right)^{m}$. The denominator gives the root and the numerator gives the power.',
      ru: 'При $a>0$, целом $m$ и положительном целом $n$ величина $a^{\\frac{1}{n}}$ — положительный корень $n$-й степени из $a$, а $a^{\\frac{m}{n}}=\\left(a^{\\frac{1}{n}}\\right)^{m}$. Знаменатель задаёт корень, числитель — степень.',
    },
    syllabus: '1.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 11' },
    pitfall: {
      en: 'The rules here are stated for a positive base. With a negative base the root may not be real.',
      ru: 'Правила здесь записаны для положительного основания. При отрицательном основании корень может не быть действительным.',
    },
  },
  {
    id: 'exponent-laws-rational',
    term: { en: 'laws of exponents for rational powers', ru: 'законы степеней для рациональных показателей (laws of exponents for rational powers)' },
    def: {
      en: 'For a positive base $a$ and rational exponents $m$ and $n$, the rules of exponents are $a^{m}\\times a^{n}=a^{m+n}$, $(a^{m})^{n}=a^{mn}$ and $\\dfrac{a^{m}}{a^{n}}=a^{m-n}$.',
      ru: 'Для положительного основания $a$ и рациональных показателей $m$ и $n$ правила степеней таковы: $a^{m}\\times a^{n}=a^{m+n}$, $(a^{m})^{n}=a^{mn}$ и $\\dfrac{a^{m}}{a^{n}}=a^{m-n}$.',
    },
    syllabus: '1.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 11' },
    pitfall: {
      en: 'The laws act on products and powers only. $a^{p}+a^{q}$ does not simplify to $a^{p+q}$.',
      ru: 'Законы работают только с произведениями и степенями. $a^{p}+a^{q}$ не упрощается до $a^{p+q}$.',
    },
  },
  {
    id: 'odd-root-negative-base',
    term: { en: 'odd root of a negative number', ru: 'корень нечётной степени из отрицательного числа (odd root of a negative number)' },
    def: {
      en: 'For odd $n$ and $a>0$, the $n$th root of $-a$ is real and negative: $(-a)^{\\frac{1}{n}}=-a^{\\frac{1}{n}}$. An even root of a negative number is not real.',
      ru: 'Для нечётного $n$ и $a>0$ корень $n$-й степени из $-a$ действителен и отрицателен: $(-a)^{\\frac{1}{n}}=-a^{\\frac{1}{n}}$. Корень чётной степени из отрицательного числа не действителен.',
    },
    syllabus: '1.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Do not treat $(-4)^{\\frac{1}{2}}$ as a real number: even roots of negative numbers are not real.',
      ru: 'Не считайте $(-4)^{\\frac{1}{2}}$ действительным числом: корни чётной степени из отрицательных чисел не действительны.',
    },
  },
];
