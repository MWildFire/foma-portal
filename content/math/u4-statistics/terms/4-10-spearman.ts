import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'spearman-rank-correlation',
    term: {
      en: 'Spearman\'s rank correlation coefficient',
      ru: 'коэффициент ранговой корреляции Спирмена (Spearman\'s rank correlation coefficient)',
    },
    def: {
      en: 'A correlation coefficient from −1 to 1, calculated as Pearson\'s coefficient for the ranks of the data. It is undefined if either rank list is constant. It measures how consistently one variable rises or falls with the other, whether or not the link is a straight line.',
      ru: 'Коэффициент корреляции от −1 до 1, вычисляемый как коэффициент Пирсона для рангов данных. Если один из списков рангов постоянен, коэффициент не определён. Он показывает, насколько согласованно одна величина растёт или убывает вместе с другой, даже если связь не прямолинейна.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.1, p. 626' },
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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.1, p. 626' },
  },
  {
    id: 'outlier-effect-on-correlation',
    term: {
      en: 'effect of an outlier on correlation',
      ru: 'влияние выброса на корреляцию (effect of an outlier on correlation)',
    },
    def: {
      en: 'An extreme point can change Pearson\'s $r$ a great deal, because its actual value enters the calculation. Spearman\'s $r_s$ uses only ranks, so changing a value without changing its rank has no effect; changing its rank can still affect the result.',
      ru: 'Экстремальная точка может сильно изменить коэффициент Пирсона $r$, потому что в расчёт входит её реальное значение. Коэффициент $r_s$ использует только ранги, поэтому изменение величины без изменения ранга не влияет на результат; изменение ранга всё же может повлиять.',
    },
    syllabus: '4.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.1, p. 628' },
  },
];
