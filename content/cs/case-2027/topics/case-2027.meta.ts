import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'case-2027',
  subject: 'cs',
  code: 'p1-case',
  title: { en: 'Case study 2027 (section B)', ru: 'Кейс 2027 (раздел B)' },
  papers: ['P1'],
  order: 17,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain how the systems in a case study operate, from data collection to the output or decision they produce.',
      ru: 'Умею объяснять, как работают системы из кейса: от сбора данных до результата или решения, которое они выдают.',
    },
    {
      en: 'I can identify the computational thinking behind a system: its data, its algorithms and the trade-offs in its design.',
      ru: 'Умею выделять вычислительное мышление системы: её данные, алгоритмы и компромиссы в устройстве.',
    },
    {
      en: 'I can apply concepts from theme A and theme B to a new scenario, and link one scenario to another.',
      ru: 'Умею применять понятия из тем A и B к новому сценарию и связывать один сценарий с другим.',
    },
    {
      en: 'I can discuss the impacts and ethical issues of a system, naming the stakeholders who are affected.',
      ru: 'Умею обсуждать последствия и этические проблемы системы, называя заинтересованные стороны, которых они касаются.',
    },
    {
      en: 'I can evaluate and justify a strategy using the case, my own research and the new stimulus given in the exam.',
      ru: 'Умею оценивать и обосновывать стратегию, опираясь на кейс, собственные исследования и новый материал на экзамене.',
    },
  ],
  termIds: [
    'p1-case-latency',
    'p1-case-scalability',
    'p1-case-encryption-in-transit',
    'p1-case-data-sovereignty',
    'p1-case-data-protection',
    'p1-case-algorithmic-bias',
    'p1-case-stakeholder',
    'p1-case-trade-off',
  ],
  questionIds: [
    'p1-case-q01',
    'p1-case-q02',
    'p1-case-q03',
    'p1-case-q04',
    'p1-case-q05',
    'p1-case-q06',
    'p1-case-q07',
    'p1-case-q08',
    'p1-case-q09',
    'p1-case-q10',
    'p1-case-q11',
    'p1-case-q12',
    'p1-case-q13',
    'p1-case-q14',
    'p1-case-q15',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. External assessment, pp. 606–607' },
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'pp. 602–607' },
  ],
};

export default meta;
