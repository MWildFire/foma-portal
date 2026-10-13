import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'public-goods',
  subject: 'econ',
  code: '2.9',
  title: { en: 'Public goods', ru: 'Общественные блага (public goods)' },
  papers: ['P1', 'P2', 'P3'],
  order: 20,
  minutes: 35,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    { en: 'I can define a public good and explain non-rivalry and non-excludability', ru: 'Могу дать определение общественному благу и объяснить неконкурентность в потреблении и неисключаемость' },
    { en: 'I can explain the free-rider problem and why the market under-provides a public good', ru: 'Могу объяснить проблему безбилетника и то, почему рынок предоставляет общественное благо в недостаточном объёме' },
    { en: 'I can derive the market demand for a public good by vertical summation', ru: 'Могу получить рыночный спрос на общественное благо вертикальным суммированием' },
    { en: 'I can find the socially optimal quantity of a public good and compare it with the market quantity', ru: 'Могу найти оптимальный для общества объём общественного блага и сравнить его с рыночным объёмом' },
    { en: 'I can evaluate government provision and quasi-public goods as solutions', ru: 'Могу оценить государственное предоставление и квазиобщественные блага как решения проблемы' },
  ],
  termIds: [
    'public-good', 'non-rivalry', 'non-excludability', 'free-rider', 'free-rider-problem',
    'vertical-summation', 'optimal-public-good-quantity', 'quasi-public-good', 'public-provision',
  ],
  sims: ['econ.public-goods'],
  questionIds: ['econ-public-goods-01', 'econ-public-goods-02', 'econ-public-goods-03', 'econ-public-goods-04'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.9' }],
};

export default topic;
