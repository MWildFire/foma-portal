import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'b2-1-programming-fundamentals',
  subject: 'cs',
  code: 'B2.1',
  title: { en: 'Programming fundamentals', ru: 'Основы программирования' },
  papers: ['P2'],
  order: 19,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can choose a suitable data type (int, float, str or bool) for a value and justify the choice', ru: 'Умею выбрать подходящий тип данных (int, float, str или bool) для значения и обосновать выбор' },
    { en: 'I can trace a program that uses global and local variables, and predict its output', ru: 'Умею проследить программу с глобальными и локальными переменными и предсказать её вывод' },
    { en: 'I can find, slice, replace and split strings, and join them with concatenation', ru: 'Умею находить, извлекать, заменять и разделять строки, а также соединять их конкатенацией' },
    { en: 'I can use try, except and finally to handle errors such as invalid input, and explain what each block does', ru: 'Умею использовать try, except и finally для обработки ошибок, например неверного ввода, и объяснять, что делает каждый блок' },
    { en: 'I can use trace tables, print statements, breakpoints and step-by-step execution to find errors', ru: 'Умею находить ошибки с помощью таблиц трассировки, операторов print, точек останова и пошагового выполнения' },
    { en: 'I can tell a logic error, which gives a wrong result, from an exception, which stops the program', ru: 'Умею отличить логическую ошибку, которая даёт неверный результат, от исключения, которое останавливает программу' },
  ],
  termIds: [
    'b2-1-variable',
    'b2-1-data-type',
    'b2-1-string',
    'b2-1-global-variable',
    'b2-1-local-variable',
    'b2-1-concatenate',
    'b2-1-exception-handling',
    'b2-1-debugging',
    'b2-1-trace-table',
    'b2-1-breakpoint',
  ],
  questionIds: [
    'b2-1-q01',
    'b2-1-q02',
    'b2-1-q03',
    'b2-1-q04',
    'b2-1-q05',
    'b2-1-q06',
    'b2-1-q07',
    'b2-1-q08',
    'b2-1-q09',
    'b2-1-q10',
  ],
  sims: ['cs.python-runner'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.1, pp. 337–349' },
  ],
};

export default topic;
