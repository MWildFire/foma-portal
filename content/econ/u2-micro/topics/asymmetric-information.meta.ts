import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'asymmetric-information',
  subject: 'econ',
  code: '2.10',
  title: { en: 'Asymmetric information', ru: 'Асимметричная информация (asymmetric information)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 21,
  minutes: 35,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can define asymmetric information and give an example from a real market', ru: 'Могу определить асимметричную информацию и привести пример из реального рынка' },
    { en: 'I can explain adverse selection and moral hazard, and tell them apart', ru: 'Могу объяснить неблагоприятный отбор и моральный риск и отличить их друг от друга' },
    { en: 'I can explain how signalling and screening reduce information gaps', ru: 'Могу объяснить, как сигнализация и скрининг уменьшают разрыв в информации' },
    { en: 'I can explain why asymmetric information reduces efficiency and evaluate government responses', ru: 'Могу объяснить, почему асимметричная информация снижает эффективность, и оценить меры государства' },
  ],
  termIds: [
    'asymmetric-information',
    'adverse-selection',
    'moral-hazard',
    'principal-agent-problem',
    'signalling',
    'screening',
    'market-for-lemons',
    'mandatory-disclosure',
  ],
  sims: ['econ.asymmetric-info'],
  questionIds: ['econ-asymmetric-information-01', 'econ-asymmetric-information-02', 'econ-asymmetric-information-03'],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' }],
};

export default topic;
