import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a3-2-design',
  subject: 'cs',
  code: 'A3.2',
  title: { en: 'Database design', ru: 'Проектирование баз данных' },
  papers: ['P1'],
  order: 10,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can describe the conceptual, logical and physical levels of a database schema and what each one contains', ru: 'Умею описывать концептуальный, логический и физический уровни схемы базы данных и то, что содержит каждый из них' },
    { en: 'I can construct an entity relationship diagram with cardinality and modality for a given scenario', ru: 'Умею строить диаграмму «сущность-связь» с кардинальностью и модальностью по заданному сценарию' },
    { en: 'I can outline the main string, numeric and date/time data types and choose a suitable one for a field', ru: 'Умею кратко описывать основные строковые, числовые и типы даты/времени и выбирать подходящий тип для поля' },
    { en: 'I can explain insert, update and deletion anomalies and why normalization removes them', ru: 'Умею объяснять аномалии вставки, обновления и удаления и то, почему нормализация их устраняет' },
    { en: 'I can normalize a flat table to third normal form, naming the partial and transitive dependencies I remove', ru: 'Умею привести плоскую таблицу к третьей нормальной форме, называя частичные и транзитивные зависимости, которые убираю' },
    { en: 'I can evaluate when denormalization is worth its cost in redundancy and update problems', ru: 'Умею оценивать, когда денормализация стоит своей цены в виде избыточности и проблем с обновлением' },
  ],
  termIds: [
    'a3-2-schema',
    'a3-2-conceptual-schema',
    'a3-2-logical-schema',
    'a3-2-physical-schema',
    'a3-2-erd',
    'a3-2-cardinality',
    'a3-2-data-type',
    'a3-2-anomaly',
    'a3-2-normalization',
    'a3-2-partial-dependency',
    'a3-2-transitive-dependency',
    'a3-2-denormalization',
  ],
  questionIds: [
    'port-a3-2-q1b',
    'port-a3-2-q2b',
    'port-a3-2-q3a',
    'port-a3-2-q3b',
    'port-a3-2-q4',
    'port-a3-2-q5',
    'a3-2-q01',
    'a3-2-q02',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.2, pp. 173–190' },
    { kind: 'own', title: 'FomaCS lesson: A3.2 Database design (Russian notes)' },
  ],
};

export default topic;
