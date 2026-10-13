import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 4.10',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'spearman-rank-correlation',
    term: {
      en: 'Spearman\'s rank correlation coefficient',
      ru: 'коэффициент ранговой корреляции Спирмена (Spearman\'s rank correlation coefficient)',
    },
    def: {
      en: 'A correlation coefficient from −1 to 1, calculated as Pearson\'s coefficient for the ranks of the data. It measures how consistently one variable rises or falls with the other, whether or not the link is a straight line.',
      ru: 'Коэффициент корреляции от −1 до 1, вычисляемый как коэффициент Пирсона для рангов данных. Он показывает, насколько согласованно одна величина растёт или убывает вместе с другой, даже если связь не прямолинейна.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The differences $d_i$ between the two ranks always add up to zero, so square them before adding.',
      ru: 'Разности $d_i$ между двумя рангами всегда в сумме дают ноль, поэтому их нужно возвести в квадрат до суммирования.',
    },
  },
  {
    id: 'monotonic-association',
    term: {
      en: 'monotonic association',
      ru: 'монотонная связь (monotonic association)',
    },
    def: {
      en: 'A relationship in which y always increases, or always decreases, as x increases. The points need not lie on a straight line.',
      ru: 'Связь, при которой y всегда возрастает или всегда убывает при росте x. Точки не обязаны лежать на одной прямой.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'outlier-effect-on-correlation',
    term: {
      en: 'effect of an outlier on correlation',
      ru: 'влияние выброса на корреляцию (effect of an outlier on correlation)',
    },
    def: {
      en: 'An extreme point can change Pearson\'s $r$ a great deal, because its actual value enters the calculation. Spearman\'s $r_s$ uses only ranks, so the size of that value matters much less than its position in the order.',
      ru: 'Экстремальная точка может сильно изменить коэффициент Пирсона $r$, потому что в расчёт входит её реальное значение. Коэффициент $r_s$ использует только ранги, поэтому величина такого значения влияет гораздо меньше, чем её место в порядке.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
