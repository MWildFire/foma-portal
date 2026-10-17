import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.4',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'pearson-r-coefficient',
    term: {
      en: 'Pearson\'s product-moment correlation coefficient r',
      ru: 'коэффициент корреляции Пирсона r (Pearson\'s product-moment correlation coefficient r)',
    },
    def: {
      en: 'Defined when both variables vary: a number from −1 to 1 that describes how strongly, and in which direction, two numerical variables are linearly related. Values near ±1 mean the points lie close to a straight line; values near 0 indicate weak sample linear association, not proof of no relationship or zero population correlation.',
      ru: 'При ненулевом разбросе обеих величин — число от −1 до 1, которое показывает силу и направление линейной связи между двумя числовыми величинами. Значения, близкие к ±1, означают, что точки лежат близко к прямой; значения, близкие к 0, указывают на слабую линейную связь в выборке, а не доказывают отсутствие зависимости или нулевую корреляцию в совокупности.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.4, p. 69' },
    pitfall: {
      en: 'r measures only linear association. A strong curved pattern can give r close to 0, and correlation does not show that one variable causes the other.',
      ru: 'r измеряет только линейную связь. Сильная криволинейная зависимость может дать r, близкое к 0, а корреляция не доказывает, что одна величина вызывает другую.',
    },
    sim: 'math.regression-lab',
  },
  {
    id: 'regression-line-y-on-x',
    term: {
      en: 'regression line of y on x',
      ru: 'линия регрессии y на x (regression line of y on x)',
    },
    def: {
      en: 'The straight line $y = ax + b$ that minimises the sum of squared vertical distances from the points to the line. It is used to predict $y$ from $x$.',
      ru: 'Прямая $y = ax + b$, которая минимизирует сумму квадратов вертикальных расстояний от точек до прямой. Используется для предсказания $y$ по $x$.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 4.5, p. 191' },
    pitfall: {
      en: 'Swapping x and y generally gives a different line; with perfect nonzero linear correlation the geometric lines coincide. The regression of y on x predicts y from x.',
      ru: 'Перестановка x и y обычно даёт другую прямую; при идеальной ненулевой линейной корреляции геометрические прямые совпадают. Регрессия y на x предсказывает y по x.',
    },
  },
  {
    id: 'mean-point-regression',
    term: {
      en: 'mean point',
      ru: 'точка средних (mean point)',
    },
    def: {
      en: 'The point $(\\bar{x}, \\bar{y})$ whose coordinates are the two sample means. To sketch a best-fit line, mark this point and draw the line through it following the data trend.',
      ru: 'Точка $(\\bar{x}, \\bar{y})$, координаты которой равны средним значениям обеих величин. Чтобы провести линию наилучшего приближения от руки, отметьте эту точку и проведите через неё прямую вдоль тенденции данных.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 2.4, pp. 68–69; review exercise 10, p. 77' },
  },
];
