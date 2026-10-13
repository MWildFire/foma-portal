import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-report',
  subject: 'fr',
  code: 'P1.report',
  title: { en: 'Writing: report', ru: 'Письмо: доклад и отчёт (report)' },
  papers: ['P1'],
  order: 17,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can structure a report with an introduction, numbered sections and a conclusion', ru: 'Могу построить доклад: введение, пронумерованные разделы и заключение' },
    { en: 'I can keep a formal, impersonal tone (on, the passive, il est)', ru: 'Могу сохранять официальный безличный тон (on, пассив, il est)' },
    { en: 'I can describe observations with approximate figures (environ, près de)', ru: 'Могу описывать наблюдения с приблизительными цифрами (environ, près de)' },
    { en: 'I can write recommendations with il est recommandé de and the subjunctive', ru: 'Могу писать рекомендации с il est recommandé de и subjonctif' },
  ],
  termIds: [],
  questionIds: ['p1-report', 'p1-report-q1', 'p1-report-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
