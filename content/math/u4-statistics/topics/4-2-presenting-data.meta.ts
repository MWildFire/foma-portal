import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-2-presenting-data',
  subject: 'math',
  code: '4.2',
  title: { en: 'Presenting data', ru: 'Представление данных (Presenting data)' },
  papers: ['P1', 'P2', 'P3'],
  order: 43,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can build a histogram from a grouped frequency table, using frequency density when the class widths differ',
      ru: 'Могу построить гистограмму по таблице сгруппированных частот и использовать плотность частоты, если ширина классов разная',
    },
    {
      en: 'I can draw a cumulative frequency graph and read the median, quartiles and percentiles from it',
      ru: 'Могу построить график накопленных частот и по нему найти медиану, квартили и перцентили',
    },
    {
      en: 'I can draw a box and whisker diagram from five values and use it to compare two data sets',
      ru: 'Могу нарисовать диаграмму размаха по пяти значениям и с её помощью сравнить два набора данных',
    },
  ],
  termIds: ['histogram-grouped-data', 'cumulative-frequency-graph', 'box-and-whisker-diagram', 'interquartile-range'],
  formulaIds: ['frequency-density', 'quartile-cumulative-position', 'iqr-formula'],
  questionIds: ['q-4-2-01', 'q-4-2-02', 'q-4-2-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.2',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
