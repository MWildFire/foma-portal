import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'own' as const,
  title: 'Author explanation; a standalone textbook page has not been verified / Авторское объяснение; отдельная страница учебника не подтверждена',
};

export const terms: Term[] = [
  {
    id: 'system-linear-equations',
    term: { en: 'system of linear equations', ru: 'система линейных уравнений (system of linear equations)' },
    def: {
      en: 'Linear equations in the same unknowns, solved together. A solution is a set of values that satisfies every equation at the same time.',
      ru: 'Линейные уравнения с одними и теми же неизвестными, решаемые вместе. Решение — набор значений, при котором одновременно выполняются все уравнения.',
    },
    syllabus: '1.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 9.3, p. 384' },
    pitfall: {
      en: 'Check the solution in every original equation, not only in the one you used to find it.',
      ru: 'Проверяйте решение во всех исходных уравнениях, а не только в том, с которым работали.',
    },
  },
  {
    id: 'inconsistent-system',
    term: { en: 'inconsistent system (no solution)', ru: 'несовместная система (inconsistent system (no solution))' },
    def: {
      en: 'A system of linear equations with no set of values that satisfies all of them, because the equations contradict each other.',
      ru: 'Система линейных уравнений, для которой нет набора значений, удовлетворяющего всем уравнениям, потому что уравнения противоречат друг другу.',
    },
    syllabus: '1.8',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'First check the entry against the original equations. A correctly identified inconsistent system has no solution; explain that result in context.',
      ru: 'Сначала сверьте ввод с исходными уравнениями. Если правильно введённая система несовместна, решения нет; объясните результат в контексте.',
    },
  },
  {
    id: 'polynomial-root',
    term: { en: 'root of a polynomial', ru: 'корень многочлена (root of a polynomial)' },
    def: {
      en: 'A value of $x$ for which the polynomial $p(x)$ equals zero. Its real roots are the x-intercepts of $y=p(x)$; the graph can cross or just touch the axis.',
      ru: 'Значение $x$, при котором многочлен $p(x)$ равен нулю. Его действительные корни — общие точки графика $y=p(x)$ и оси $x$; возможны переход через ось и касание.',
    },
    syllabus: '1.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 6.3, p. 261' },
    pitfall: {
      en: 'A cubic can have only one real root, so do not assume there are three. Distinguish a complete polynomial-solver result from roots visible in one graph window: a restricted window or numerical search can miss roots.',
      ru: 'Кубический многочлен может иметь только один действительный корень, поэтому не считайте, что их три. Отличай полный результат решателя многочленов от корней, видимых в одном окне графика: ограниченное окно или численный поиск могут пропускать корни.',
    },
  },
];
