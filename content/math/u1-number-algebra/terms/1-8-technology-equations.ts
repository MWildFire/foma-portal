import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.8',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'system-linear-equations',
    term: { en: 'system of linear equations', ru: 'система линейных уравнений (system of linear equations)' },
    def: {
      en: 'Two or three linear equations in the same unknowns, solved together. A solution is a set of values that satisfies every equation at the same time.',
      ru: 'Два или три линейных уравнения с одними и теми же неизвестными, которые решают вместе. Решение — набор значений, при котором выполняются все уравнения одновременно.',
    },
    syllabus: '1.8',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Check the solution in every original equation, not only in the one you used to find it.',
      ru: 'Проверяйте решение во всех исходных уравнениях, а не только в том, с которым работали.',
    },
  },
  {
    id: 'inconsistent-system',
    term: { en: 'inconsistent system (no solution)', ru: 'несовместная система (inconsistent system)' },
    def: {
      en: 'A system of linear equations with no set of values that satisfies all of them, because the equations contradict each other.',
      ru: 'Система линейных уравнений, для которой нет набора значений, удовлетворяющего всем уравнениям, потому что уравнения противоречат друг другу.',
    },
    syllabus: '1.8',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A "no solution" result is a valid answer. Interpret it in context rather than entering the equations again.',
      ru: 'Результат «решения нет» — верный ответ. Объясните его в контексте, а не вводите уравнения заново.',
    },
  },
  {
    id: 'polynomial-root',
    term: { en: 'root of a polynomial', ru: 'корень многочлена (root of a polynomial)' },
    def: {
      en: 'A value of $x$ for which the polynomial $p(x)$ equals zero. Its real roots are the x-intercepts of the graph of $y=p(x)$.',
      ru: 'Значение $x$, при котором многочлен $p(x)$ равен нулю. Его действительные корни — точки пересечения графика $y=p(x)$ с осью $x$.',
    },
    syllabus: '1.8',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A cubic can have only one real root, so do not assume there are three. Read the number of real roots from the output.',
      ru: 'Кубический многочлен может иметь только один действительный корень, поэтому не считайте, что их три. Число действительных корней берите из результата.',
    },
  },
];
