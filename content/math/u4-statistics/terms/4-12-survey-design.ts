import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 4.12',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'reliability-of-questionnaire',
    term: { en: 'reliability', ru: 'надёжность (reliability)' },
    def: {
      en: 'How consistently a questionnaire gives the same results when it is used again under the same conditions. A common check is test-retest: the same questionnaire is given twice and the two sets of answers are compared.',
      ru: 'Насколько стабильно анкета даёт одинаковые результаты при повторном использовании в тех же условиях. Частая проверка — тест-ретест: одну анкету дают дважды и сравнивают два набора ответов.',
    },
    syllabus: '4.12',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Reliability concerns consistency, not whether the questions measure the right thing. That is validity.',
      ru: 'Надёжность касается согласованности, а не того, измеряют ли вопросы нужное. Это валидность.',
    },
  },
  {
    id: 'validity-of-questionnaire',
    term: { en: 'validity', ru: 'валидность (validity)' },
    def: {
      en: 'How well a questionnaire measures what it is meant to measure. It is checked against an independent criterion, or by expert judgement of the content.',
      ru: 'Насколько хорошо анкета измеряет то, что должна измерять. Проверяют по независимому критерию или экспертной оценкой содержания.',
    },
    syllabus: '4.12',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'categorising-numerical-data',
    term: { en: 'categorising numerical data', ru: 'категоризация числовых данных (categorising numerical data)' },
    def: {
      en: 'Grouping numerical values into classes that do not overlap and together cover every value, so that the counts can go into a chi-squared table. Neighbouring classes are combined when an expected frequency is less than 5.',
      ru: 'Разбиение числовых значений на классы, которые не пересекаются и вместе покрывают все значения, чтобы подсчёты можно было записать в таблицу χ². Соседние классы объединяют, если ожидаемая частота меньше 5.',
    },
    syllabus: '4.12',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The class boundaries and widths must be stated, because the test result depends on them.',
      ru: 'Границы и ширину классов нужно указывать: от них зависит результат теста.',
    },
  },
];
