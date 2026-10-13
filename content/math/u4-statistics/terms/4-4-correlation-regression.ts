import type { Term } from '../../../../src/contract/types';

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
      ru: 'коэффициент корреляции Пирсона (Pearson\'s product-moment correlation coefficient) r',
    },
    def: {
      en: 'A number from −1 to 1 that measures the strength and direction of a linear relationship between two numerical variables. Values near ±1 mean the points lie close to a straight line; values near 0 mean no linear pattern.',
      ru: 'Число от −1 до 1, которое показывает силу и направление линейной связи между двумя числовыми величинами. Значения, близкие к ±1, означают, что точки лежат близко к прямой; значения, близкие к 0, означают отсутствие линейной закономерности.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
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
    src: source,
    pitfall: {
      en: 'Swapping x and y gives a different line: the regression of y on x predicts y from x.',
      ru: 'Перестановка x и y даёт другую прямую: регрессия y на x предсказывает y по x.',
    },
  },
  {
    id: 'mean-point-regression',
    term: {
      en: 'mean point',
      ru: 'точка средних (mean point)',
    },
    def: {
      en: 'The point $(\\bar{x}, \\bar{y})$ with coordinates equal to the two sample means. The regression line of y on x always passes through it.',
      ru: 'Точка $(\\bar{x}, \\bar{y})$, координаты которой равны средним значениям обеих величин. Линия регрессии y на x всегда проходит через неё.',
    },
    syllabus: '4.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
