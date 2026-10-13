import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'b1-1-computational-thinking',
  subject: 'cs',
  code: 'B1.1',
  title: { en: 'Computational thinking', ru: 'Компьютерное мышление' },
  papers: ['P2'],
  order: 18,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can construct a problem specification with a problem statement, constraints, objectives and goals, input and output specifications, and evaluation criteria', ru: 'Умею составить спецификацию задачи: формулировка, ограничения, цели и показатели, спецификации входных и выходных данных, критерии оценки' },
    { en: 'I can write objectives and specific goals so that each goal is measurable, time-limited and linked to an objective', ru: 'Умею формулировать цели и конкретные показатели так, чтобы каждый показатель был измеримым, ограниченным по времени и связанным с целью' },
    { en: 'I can describe decomposition, pattern recognition, abstraction and algorithmic design, and give an example of each', ru: 'Умею описывать декомпозицию, распознавание закономерностей, абстракцию и алгоритмическое проектирование и приводить пример каждой' },
    { en: 'I can explain how the four ideas of computational thinking work together to turn a real problem into steps a computer can follow', ru: 'Умею объяснять, как четыре идеи компьютерного мышления работают вместе, превращая реальную задачу в шаги, которые может выполнить компьютер' },
    { en: 'I can trace a flowchart with decisions and loops by recording the variable values after every step', ru: 'Умею проследить блок-схему с решениями и циклами, записывая значения переменных после каждого шага' },
    { en: 'I can sketch a flowchart with the standard symbols: start and end, process, input and output, decision and flowline', ru: 'Умею набросать блок-схему стандартными символами: начало и конец, процесс, ввод и вывод, решение и линия потока' },
  ],
  termIds: [
    'b1-1-computational-thinking',
    'b1-1-problem-specification',
    'b1-1-objectives-and-goals',
    'b1-1-input-specification',
    'b1-1-output-specification',
    'b1-1-decomposition',
    'b1-1-pattern-recognition',
    'b1-1-abstraction',
    'b1-1-algorithmic-design',
    'b1-1-flowchart',
  ],
  questionIds: [
    'b1-1-q01',
    'b1-1-q02',
    'b1-1-q03',
    'b1-1-q04',
    'b1-1-q05',
    'b1-1-q06',
    'b1-1-q07',
    'b1-1-q08',
    'b1-1-q09',
    'b1-1-q10',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B1.1, pp. 317–336' },
  ],
};

export default topic;
