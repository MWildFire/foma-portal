import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a3-4-alternative-databases',
  subject: 'cs',
  code: 'A3.4',
  title: { en: 'Alternative databases and data warehouses', ru: 'Альтернативные базы данных и хранилища данных' },
  papers: ['P1'],
  hl: true,
  order: 12,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can outline the main alternatives to relational databases: NoSQL, cloud-based, spatial and in-memory', ru: 'Умею описывать основные альтернативы реляционным базам: NoSQL, облачные, пространственные и работающие в оперативной памяти' },
    { en: 'I can explain what a data warehouse is for and how the ETL process fills it', ru: 'Умею объяснять, для чего нужно хранилище данных и как процесс ETL наполняет его данными' },
    { en: 'I can explain the role of OLAP cubes and of the five OLAP operations in business intelligence', ru: 'Умею объяснять роль OLAP-кубов и пяти операций OLAP в бизнес-аналитике' },
    { en: 'I can distinguish OLAP from data mining and name the main data mining techniques', ru: 'Умею отличать OLAP от интеллектуального анализа данных и называть его основные методы' },
    { en: 'I can describe the features of distributed databases: fragmentation, replication and consistency', ru: 'Умею описывать особенности распределённых баз данных: фрагментацию, репликацию и согласованность' },
    { en: 'I can weigh the trade-offs of an alternative database against a relational one for a given scenario', ru: 'Умею сравнивать альтернативную базу данных с реляционной для заданного сценария и называть компромиссы' },
  ],
  termIds: [
    'a3-4-nosql',
    'a3-4-cloud-database',
    'a3-4-spatial-database',
    'a3-4-in-memory-database',
    'a3-4-data-warehouse',
    'a3-4-etl',
    'a3-4-olap',
    'a3-4-olap-cube',
    'a3-4-data-mining',
    'a3-4-distributed-database',
    'a3-4-fragmentation',
    'a3-4-replication',
  ],
  questionIds: ['port-a3-4-q1', 'port-a3-4-q2', 'port-a3-4-q3', 'port-a3-4-q4', 'port-a3-4-q5', 'a3-4-q01', 'a3-4-q02', 'a3-4-q03'],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, pp. 215–234' },
  ],
};

export default topic;
