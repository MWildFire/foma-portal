import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a3-1-fundamentals',
  subject: 'cs',
  code: 'A3.1',
  title: { en: 'Database fundamentals', ru: 'Основы баз данных' },
  papers: ['P1'],
  order: 9,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain the features, benefits and limitations of a relational database', ru: 'Умею объяснять особенности, преимущества и ограничения реляционной базы данных' },
    { en: 'I can describe the insert, deletion and update anomalies of a flat file and explain how normalization removes them', ru: 'Умею описывать аномалии вставки, удаления и обновления в плоском файле и объяснять, как нормализация их устраняет' },
    { en: 'I can define entity, attribute, relationship and cardinality precisely', ru: 'Умею точно определять сущность, атрибут, связь и кардинальность' },
    { en: 'I can tell a primary key from a foreign key and recognize composite and concatenated keys', ru: 'Умею отличать первичный ключ от внешнего и узнавать составной и конкатенированный ключи' },
    { en: 'I can identify one-to-one, one-to-many and many-to-many relationships and say whether a relationship is mandatory or optional', ru: 'Умею определять связи «один-к-одному», «один-ко-многим» и «многие-ко-многим» и говорить, обязательна ли связь' },
    { en: 'I can weigh the benefits of a relational database against its limitations for a given organization', ru: 'Умею сопоставлять преимущества реляционной базы данных с её ограничениями для конкретной организации' },
  ],
  termIds: [
    'a3-1-entity',
    'a3-1-anomaly',
    'a3-1-normalization',
    'a3-1-primary-key',
    'a3-1-foreign-key',
    'a3-1-attribute',
    'a3-1-relationship',
    'a3-1-cardinality',
  ],
  questionIds: [
    'port-a3-1-q1a',
    'port-a3-1-q1b',
    'port-a3-1-q2a',
    'port-a3-1-q2b',
    'port-a3-1-q3',
    'port-a3-1-q4',
    'a3-1-q01',
    'a3-1-q02',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.1, pp. 167–172' },
    { kind: 'own', title: 'FomaCS lesson: A3.1 Database fundamentals (Russian notes)' },
  ],
};

export default topic;
