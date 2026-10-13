import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.10',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'rational-exponent',
    term: { en: 'rational exponent', ru: 'рациональный показатель степени (rational exponent)' },
    def: {
      en: 'For $a>0$ and $n>0$, $a^{\\frac{1}{n}}$ is the positive $n$th root of $a$, and $a^{\\frac{m}{n}}=\\left(a^{\\frac{1}{n}}\\right)^{m}$. The denominator gives the root and the numerator gives the power.',
      ru: 'При $a>0$ и $n>0$ величина $a^{\\frac{1}{n}}$ — положительный корень $n$-й степени из $a$, а $a^{\\frac{m}{n}}=\\left(a^{\\frac{1}{n}}\\right)^{m}$. Знаменатель задаёт корень, числитель — степень.',
    },
    syllabus: '1.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The rules here are stated for a positive base. With a negative base the root may not be real.',
      ru: 'Правила здесь записаны для положительного основания. При отрицательном основании корень может не быть действительным.',
    },
  },
  {
    id: 'exponent-laws-rational',
    term: { en: 'laws of exponents for rational powers', ru: 'законы степеней для рациональных показателей (laws of exponents for rational powers)' },
    def: {
      en: 'For $a,b>0$ and rational $p$, $q$: $a^{p}a^{q}=a^{p+q}$, $\\dfrac{a^{p}}{a^{q}}=a^{p-q}$, $(a^{p})^{q}=a^{pq}$ and $(ab)^{p}=a^{p}b^{p}$. The laws for whole-number exponents carry over unchanged.',
      ru: 'При $a,b>0$ и рациональных $p$, $q$: $a^{p}a^{q}=a^{p+q}$, $\\dfrac{a^{p}}{a^{q}}=a^{p-q}$, $(a^{p})^{q}=a^{pq}$ и $(ab)^{p}=a^{p}b^{p}$. Законы для целых показателей переносятся без изменений.',
    },
    syllabus: '1.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
