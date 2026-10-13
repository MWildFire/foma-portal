import type { TopicMeta } from '../../../../src/contract/types';

const meta: TopicMeta = {
  id: 'b2-3-programming-constructs',
  subject: 'cs',
  code: 'B2.3',
  title: { en: 'Programming constructs', ru: 'Конструкции программирования' },
  papers: ['P2'],
  order: 21,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can put instructions in a correct sequence and explain how a wrong order or an infinite loop changes a program.',
      ru: 'Умею расставлять инструкции в правильной последовательности и объяснять, как неверный порядок или бесконечный цикл меняет работу программы.',
    },
    {
      en: 'I can write selection statements with if, elif and else in Python, using comparison and logical operators.',
      ru: 'Умею писать ветвления с if, elif и else на Python, используя операторы сравнения и логические операторы.',
    },
    {
      en: 'I can write while loops and for loops, and choose the right kind of loop for a task.',
      ru: 'Умею писать циклы while и for и выбирать подходящий вид цикла для задачи.',
    },
    {
      en: 'I can write functions that take parameters and return a value, and call them with the right arguments.',
      ru: 'Умею писать функции с параметрами и возвращаемым значением и вызывать их с правильными аргументами.',
    },
    {
      en: 'I can explain modularization and give its advantages for reading, testing and reusing code.',
      ru: 'Умею объяснять модульность и её преимущества для чтения, проверки и повторного использования кода.',
    },
    {
      en: 'I can trace a program that combines selection, loops and functions, and state the output it prints.',
      ru: 'Умею проследить программу, которая сочетает ветвления, циклы и функции, и назвать результат, который она печатает.',
    },
  ],
  termIds: [
    'b2-3-selection',
    'b2-3-repetition',
    'b2-3-while-loop',
    'b2-3-for-loop',
    'b2-3-infinite-loop',
    'b2-3-function',
    'b2-3-parameter',
    'b2-3-argument',
    'b2-3-return-value',
    'b2-3-modularization',
  ],
  sims: ['cs.trace-table', 'cs.python-runner'],
  questionIds: [
    'b2-3-q01',
    'b2-3-q02',
    'b2-3-q03',
    'b2-3-q04',
    'b2-3-q05',
    'b2-3-q06',
    'b2-3-q07',
    'b2-3-q08',
    'b2-3-q09',
    'b2-3-q10',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.3, pp. 362–375' },
  ],
};

export default meta;
