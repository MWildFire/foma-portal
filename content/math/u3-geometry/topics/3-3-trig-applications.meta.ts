import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-3-trig-applications',
  subject: 'math',
  code: '3.3',
  title: { en: 'Applications of trigonometry', ru: 'Применения тригонометрии' },
  papers: ['P1', 'P2', 'P3'],
  order: 28,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can draw and label a diagram from a written description of a problem',
      ru: 'Могу сделать подписанный чертёж по текстовому описанию задачи',
    },
    {
      en: 'I can solve problems with angles of elevation and depression in right-angled and other triangles',
      ru: 'Могу решать задачи с углами возвышения и понижения в прямоугольных и других треугольниках',
    },
    {
      en: 'I can choose between Pythagoras, SOH CAH TOA, the sine rule and the cosine rule for a given problem',
      ru: 'Могу выбрать между теоремой Пифагора, SOH CAH TOA, теоремой синусов и теоремой косинусов для задачи',
    },
  ],
  termIds: ['angle-of-elevation', 'angle-of-depression', 'line-of-sight'],
  formulaIds: ['pythagoras-theorem', 'elevation-depression-tan', 'soh-cah-toa-ratios', 'triangle-sine-rule'],
  questionIds: ['q-3-3-01', 'q-3-3-02', 'q-3-3-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.3',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
