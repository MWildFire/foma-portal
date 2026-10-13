import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a4-1-ml-fundamentals',
  subject: 'cs',
  code: 'A4.1',
  title: { en: 'Machine learning fundamentals', ru: 'Основы машинного обучения' },
  papers: ['P1'],
  order: 13,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can define machine learning and deep learning and show how deep learning sits inside machine learning', ru: 'Умею определять машинное и глубокое обучение и показывать, как глубокое обучение входит в машинное' },
    { en: 'I can describe supervised, unsupervised, reinforcement and transfer learning, with a real-world example for each', ru: 'Умею описывать обучение с учителем, без учителя, с подкреплением и перенос обучения, приводя пример из практики для каждого' },
    { en: 'I can tell classification and regression apart by the kind of output each one produces', ru: 'Умею отличать классификацию от регрессии по типу результата, который получает каждая из них' },
    { en: 'I can choose a learning paradigm for a scenario by checking the labels, the output and whether rewards are used', ru: 'Умею выбирать тип обучения для сценария, проверяя метки, тип результата и наличие наград' },
    { en: 'I can describe the hardware used in each machine learning scenario, including GPUs, ASICs, FPGAs and edge devices', ru: 'Умею описывать оборудование для каждого сценария машинного обучения, включая GPU, ASIC, FPGA и периферийные устройства' },
    { en: 'I can justify a hardware choice for a scenario using speed, power use, flexibility and scalability', ru: 'Умею обосновывать выбор оборудования для сценария по скорости, энергопотреблению, гибкости и масштабируемости' },
  ],
  termIds: [
    'a4-1-machine-learning',
    'a4-1-deep-learning',
    'a4-1-supervised',
    'a4-1-unsupervised',
    'a4-1-reinforcement',
    'a4-1-transfer',
    'a4-1-classification',
    'a4-1-regression',
    'a4-1-gpu',
    'a4-1-edge-computing',
  ],
  questionIds: ['port-a4-1-q1', 'port-a4-1-q2a', 'port-a4-1-q3', 'port-a4-1-q4', 'port-a4-1-q5', 'port-a4-1-q6', 'a4-1-q01', 'a4-1-q02'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.1, pp. 237–250' },
  ],
};

export default topic;
