import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a3-3-sql',
  subject: 'cs',
  code: 'A3.3',
  title: { en: 'Database programming', ru: 'Программирование баз данных' },
  papers: ['P1'],
  order: 11,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can outline the four sub-languages of SQL (DDL, DML, DCL and TCL) and give one command for each', ru: 'Умею кратко описать четыре подъязыка SQL (DDL, DML, DCL и TCL) и привести по одной команде для каждого' },
    { en: 'I can construct a SELECT query across two tables with an INNER JOIN, a WHERE condition and an ORDER BY clause', ru: 'Умею построить запрос SELECT по двум таблицам с INNER JOIN, условием WHERE и сортировкой ORDER BY' },
    { en: 'I can construct INSERT, UPDATE and DELETE statements and explain why UPDATE and DELETE need a WHERE clause', ru: 'Умею построить операторы INSERT, UPDATE и DELETE и объяснить, зачем UPDATE и DELETE нужен WHERE' },
    { en: 'I can construct calculations with COUNT, SUM, AVG, MIN and MAX, using GROUP BY and HAVING where needed', ru: 'Умею строить вычисления с COUNT, SUM, AVG, MIN и MAX, используя GROUP BY и HAVING там, где это нужно' },
    { en: 'I can explain how an index speeds up queries and why it slows down inserts, updates and deletes', ru: 'Умею объяснить, как индекс ускоряет запросы и почему он замедляет вставку, изменение и удаление записей' },
    { en: 'I can describe what a view is, why it stores no data of its own, and how it helps with security and simplicity (HL)', ru: 'Умею описать, что такое представление, почему оно не хранит собственных данных и как помогает с безопасностью и простотой (HL)' },
    { en: 'I can describe how transactions and the ACID properties keep data correct, using COMMIT and ROLLBACK (HL)', ru: 'Умею описать, как транзакции и свойства ACID сохраняют корректность данных с помощью COMMIT и ROLLBACK (HL)' },
  ],
  termIds: [
    'a3-3-sql',
    'a3-3-ddl',
    'a3-3-dml',
    'a3-3-dcl',
    'a3-3-tcl',
    'a3-3-query',
    'a3-3-join',
    'a3-3-index',
    'a3-3-aggregate',
    'a3-3-view',
    'a3-3-transaction',
    'a3-3-acid',
  ],
  questionIds: [
    'port-a3-3-q1',
    'port-a3-3-q3',
    'port-a3-3-q4',
    'port-a3-3-q5',
    'port-a3-3-q6',
    'port-a3-3-sql-q1',
    'port-a3-3-sql-q2',
    'port-a3-3-sql-q3',
    'a3-3-q01',
    'a3-3-q02',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.3, pp. 191–214' },
  ],
};

export default topic;
