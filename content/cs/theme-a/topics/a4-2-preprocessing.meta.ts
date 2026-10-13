import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a4-2-preprocessing',
  subject: 'cs',
  code: 'A4.2',
  title: { en: 'Data preprocessing', ru: 'Предобработка данных' },
  papers: ['P1'],
  hl: true,
  order: 14,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain why data cleaning matters and list its main tasks: outliers, duplicates, incorrect or badly formatted data, and missing data.',
      ru: 'Умею объяснить, зачем нужна очистка данных, и перечислить её основные задачи: выбросы, дубликаты, некорректные или плохо оформленные данные и пропуски.',
    },
    {
      en: 'I can calculate min-max normalization and z-score standardization, and say when each one suits a feature.',
      ru: 'Умею вычислять нормализацию min-max и z-оценку (стандартизацию) и говорить, когда каждая из них подходит признаку.',
    },
    {
      en: 'I can explain why outliers affect normalization more than standardization.',
      ru: 'Умею объяснить, почему выбросы сильнее влияют на нормализацию, чем на стандартизацию.',
    },
    {
      en: 'I can describe the role of feature selection and distinguish filter, wrapper and embedded methods.',
      ru: 'Умею описать роль отбора признаков и различать фильтрующие, обёрточные и встроенные методы.',
    },
    {
      en: 'I can explain why dimensionality reduction matters and describe the curse of dimensionality.',
      ru: 'Умею объяснить, зачем нужно снижение размерности, и описать проклятие размерности.',
    },
    {
      en: 'I can suggest a suitable way to fill missing values for a numeric feature or a categorical feature.',
      ru: 'Умею предложить подходящий способ заполнить пропуски для числового или категориального признака.',
    },
  ],
  termIds: [
    'a4-2-data-cleaning',
    'a4-2-missing-data',
    'a4-2-normalization',
    'a4-2-standardization',
    'a4-2-feature-selection',
    'a4-2-filter-method',
    'a4-2-wrapper-method',
    'a4-2-embedded-method',
    'a4-2-dimensionality-reduction',
    'a4-2-curse-of-dimensionality',
  ],
  formulaIds: ['cs-min-max-normalization', 'cs-z-score-standardization'],
  questionIds: [
    'port-a4-2-q1a',
    'port-a4-2-q1b',
    'port-a4-2-q2a',
    'port-a4-2-q2b',
    'port-a4-2-q3',
    'port-a4-2-q4',
    'a4-2-q01',
    'a4-2-q02',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.2, pp. 251–263' },
  ],
};

export default topic;
