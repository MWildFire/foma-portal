import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-3-central-dispersion',
  subject: 'math',
  code: '4.3',
  title: { en: 'Central tendency and dispersion', ru: 'Центральная тенденция и разброс (Central tendency and dispersion)' },
  papers: ['P1', 'P2', 'P3'],
  order: 44,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can find the mean, median and mode of a data set, and estimate the mean and the modal class from grouped data',
      ru: 'Могу найти среднее, медиану и моду набора данных и оценить среднее и модальный класс по сгруппированным данным',
    },
    {
      en: 'I can calculate the standard deviation, the variance and the interquartile range, and use them to compare spread',
      ru: 'Могу вычислить стандартное отклонение, дисперсию и межквартильный размах и сравнить разброс данных',
    },
    {
      en: 'I can predict how adding a constant or multiplying by a constant changes the mean and the spread of the data',
      ru: 'Могу предсказать, как прибавление константы или умножение на константу меняет среднее и разброс данных',
    },
  ],
  termIds: ['estimated-mean-grouped', 'modal-class', 'interquartile-range', 'standard-deviation'],
  formulaIds: ['grouped-mean-estimate', 'sd-formula', 'iqr-formula', 'linear-change-effect'],
  questionIds: ['q-4-3-01', 'q-4-3-02', 'q-4-3-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.3',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
