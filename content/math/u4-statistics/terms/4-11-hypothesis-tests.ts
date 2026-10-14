import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'null-hypothesis-h0',
    term: { en: 'null hypothesis H0', ru: 'нулевая гипотеза H0 (null hypothesis H0)' },
    def: {
      en: 'The statement that the population shows no effect, no association or the claimed value. The test assumes H0 is true and asks how surprising the data would be if it were.',
      ru: 'Утверждение, что в генеральной совокупности нет эффекта, связи или заявленного значения. Тест считает H0 верной и оценивает, насколько неожиданными были бы данные в этом случае.',
    },
    syllabus: '4.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.2, p. 629' },
    pitfall: {
      en: 'A test either rejects H0 or does not reject it. It never proves H0 true.',
      ru: 'Тест либо отклоняет H0, либо не отклоняет её. Он никогда не доказывает, что H0 верна.',
    },
  },
  {
    id: 'significance-level-alpha',
    term: { en: 'significance level α', ru: 'уровень значимости α (significance level α)' },
    def: {
      en: 'The probability of rejecting H0 when H0 is true, chosen before the test is carried out. Common values are 0.05 and 0.01.',
      ru: 'Вероятность отклонить H0, если H0 верна; выбирается до проведения теста. Обычные значения: 0,05 и 0,01.',
    },
    syllabus: '4.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.2, p. 630' },
  },
  {
    id: 'p-value-of-a-test',
    term: { en: 'p-value', ru: 'p-значение (p-value)' },
    def: {
      en: 'The p-value is the chance, assuming H0 is correct, of a result as extreme as the observed one, or more so, in the direction given by H1. H0 is rejected if the p-value falls below the significance level.',
      ru: 'Вероятность при условии, что H0 верна, получить результат не менее экстремальный, чем наблюдаемый, в направлении, заданном H1. H0 отклоняют, если p-значение меньше уровня значимости.',
    },
    syllabus: '4.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.2, p. 631' },
    pitfall: {
      en: 'A p-value is not the probability that H0 is true.',
      ru: 'p-значение — это не вероятность того, что H0 верна.',
    },
  },
  {
    id: 'chi-squared-independence-test',
    term: { en: 'chi-squared test for independence', ru: 'χ²-тест независимости (chi-squared test for independence)' },
    def: {
      en: 'A test of whether two categorical variables in a contingency table are associated. It compares the observed frequencies with the expected frequencies that independence would give.',
      ru: 'Тест на связь двух категориальных переменных в таблице сопряжённости. Он сравнивает наблюдаемые частоты с ожидаемыми при независимости.',
    },
    syllabus: '4.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 14.4, p. 650' },
    sim: 'math.chi-squared-lab',
  },
];
