import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.5',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'exponent-laws-integer',
    term: { en: 'laws of integer exponents', ru: 'законы степеней с целым показателем (laws of integer exponents)' },
    def: {
      en: 'Rules for multiplying, dividing and raising powers of the same non-zero base when the exponents are integers. They also give $a^{0}=1$ and $a^{-n}=\\dfrac{1}{a^{n}}$.',
      ru: 'Правила умножения, деления и возведения в степень при одном и том же основании $a\\neq 0$ и целых показателях. Из них следуют $a^{0}=1$ и $a^{-n}=\\dfrac{1}{a^{n}}$.',
    },
    syllabus: '1.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
    pitfall: {
      en: 'Only positive numbers have a logarithm. $\\log_{10}0$ and $\\log_{10}(-5)$ are undefined.',
      ru: 'Логарифм существует только у положительных чисел. $\\log_{10}0$ и $\\log_{10}(-5)$ не определены.',
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
    src: source,
    pitfall: {
      en: 'ln is the logarithm to base e, not to base 10. Check the base in the question before you evaluate.',
      ru: 'Функция $\\ln$ — логарифм по основанию e, а не по основанию 10. Проверьте основание в задаче до вычисления.',
    },
  },
];
