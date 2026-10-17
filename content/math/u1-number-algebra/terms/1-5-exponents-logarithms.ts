import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'exponent-laws-integer',
    term: { en: 'laws of integer exponents', ru: 'законы степеней с целым показателем (laws of integer exponents)' },
    def: {
      en: 'Rules for multiplying, dividing and raising powers of a nonzero real base $a$ when the exponents are integers: $a^{m}\\times a^{n}=a^{m+n}$, $(a^{m})^{n}=a^{mn}$ and $\\dfrac{a^{m}}{a^{n}}=a^{m-n}$. A negative exponent gives a reciprocal power: $a^{-n}=\\dfrac{1}{a^{n}}$.',
      ru: 'Правила умножения, деления степеней и возведения степени в степень при ненулевом действительном основании $a$ и целых показателях: $a^{m}\\times a^{n}=a^{m+n}$, $(a^{m})^{n}=a^{mn}$ и $\\dfrac{a^{m}}{a^{n}}=a^{m-n}$. Отрицательный показатель задаёт обратную степень: $a^{-n}=\\dfrac{1}{a^{n}}$.',
    },
    syllabus: '1.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.1, p. 11' },
    pitfall: {
      en: 'Exponents add only when powers are multiplied. $2^{3}+2^{4}$ is not $2^{7}$.',
      ru: 'Показатели складываются только при умножении степеней. $2^{3}+2^{4}$ не равно $2^{7}$.',
    },
  },
  {
    id: 'logarithm-base-10',
    term: { en: 'logarithm base 10', ru: 'логарифм по основанию 10 (logarithm base 10)' },
    def: {
      en: 'For $x>0$, $\\log_{10}x$ is the power to which 10 must be raised to give $x$: if $\\log_{10}x=y$ then $10^{y}=x$.',
      ru: 'Для $x>0$ величина $\\log_{10}x$ — это степень, в которую нужно возвести 10, чтобы получить $x$: если $\\log_{10}x=y$, то $10^{y}=x$.',
    },
    syllabus: '1.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 320' },
    pitfall: {
      en: 'In the real-number logarithms used here, only positive arguments have a logarithm. $\\log_{10}0$ and $\\log_{10}(-5)$ are undefined.',
      ru: 'В рассматриваемых здесь действительных логарифмах аргумент должен быть положительным. $\\log_{10}0$ и $\\log_{10}(-5)$ не определены.',
    },
  },
  {
    id: 'logarithm-base-e',
    term: { en: 'natural logarithm (base e)', ru: 'натуральный логарифм (natural logarithm (base e))' },
    def: {
      en: 'For $x>0$, $\\ln x$ is the power to which the constant $e$ must be raised to give $x$: if $\\ln x=y$ then $e^{y}=x$.',
      ru: 'Для $x>0$ величина $\\ln x$ — это степень, в которую нужно возвести константу $e$, чтобы получить $x$: если $\\ln x=y$, то $e^{y}=x$.',
    },
    syllabus: '1.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 7.4, p. 320' },
    pitfall: {
      en: 'ln is the logarithm to base e, not to base 10. Check the base in the question before you evaluate.',
      ru: 'Функция $\\ln$ — логарифм по основанию e, а не по основанию 10. Проверьте основание в задаче до вычисления.',
    },
  },
];
