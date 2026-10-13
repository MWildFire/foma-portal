import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'b2-5-file-processing',
  subject: 'cs',
  code: 'B2.5',
  title: { en: 'File processing', ru: 'Обработка файлов' },
  papers: ['P2'],
  order: 23,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can explain what a sequential file is, and why its records can only be read in order, starting from the first one',
      ru: 'Умею объяснить, что такое последовательный файл и почему его записи можно читать только по порядку, начиная с первой',
    },
    {
      en: 'I can describe the operations on a file: open it in a suitable mode, read or write it, and close it',
      ru: 'Умею описать операции с файлом: открыть его в подходящем режиме, читать или писать и закрыть',
    },
    {
      en: 'I can distinguish write mode ("w") from append mode ("a") and say which one erases the existing data',
      ru: 'Умею различать режим записи («w») и режим добавления («a») и сказать, какой из них стирает прежние данные',
    },
    {
      en: 'I can read a file line by line in a loop that stops at the end of the file',
      ru: 'Умею читать файл построчно в цикле, который останавливается в конце файла',
    },
    {
      en: 'I can construct Python code that appends records to a file and reads them back, and I can trace such code to predict its printed output',
      ru: 'Умею написать код на Python, который добавляет записи в файл и читает их обратно, и проследить такой код, предсказав его вывод',
    },
    {
      en: 'I can explain the limits of sequential files, such as slow searching, and name the cases where they are still a good choice',
      ru: 'Умею объяснить ограничения последовательных файлов, например медленный поиск, и назвать случаи, где они всё же подходят',
    },
  ],
  termIds: [
    'b2-5-file-processing-operation',
    'b2-5-text-file',
    'b2-5-sequential-file',
    'b2-5-sequential-access',
    'b2-5-record',
    'b2-5-end-of-file',
    'b2-5-write-mode',
    'b2-5-append-mode',
    'b2-5-read-mode',
    'b2-5-close-file',
  ],
  questionIds: [
    'b2-5-q01',
    'b2-5-q02',
    'b2-5-q03',
    'b2-5-q04',
    'b2-5-q05',
    'b2-5-q06',
    'b2-5-q07',
    'b2-5-q08',
    'b2-5-q09',
    'b2-5-q10',
  ],
  sims: ['cs.python-runner'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. B2.5, pp. 407–416' },
  ],
};

export default topic;
