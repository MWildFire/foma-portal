import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'core-paper-2-what-is-asked',
  subject: 'geo',
  code: 'core-paper-2',
  title: { en: 'What Paper 2 asks and how it is marked', ru: 'Что спрашивают на Paper 2 и как это оценивают' },
  papers: ['P2'],
  order: 0,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the three sections of Paper 2 and the marks each one carries', ru: 'Могу назвать три раздела Paper 2 и баллы каждого' },
    { en: 'I can match a command term to the answer it asks for', ru: 'Могу сопоставить командное слово с нужным ответом' },
    { en: 'I can check a 10-mark essay against the markband levels', ru: 'Могу проверить эссе на 10 баллов по уровням markband' },
    { en: 'I can say which subtopics come up most often in past Paper 2 sessions', ru: 'Могу назвать подтемы, которые чаще всего попадаются в прошлых сессиях Paper 2' },
  ],
  termIds: [],
  questionIds: ['core-2-2-b1', 'core-essay-1-1', 'core-essay-3-1'],
  caseIds: [],
  sources: [
    { kind: 'ib-guide', title: 'Geography guide (2017), Paper 2 structure, command terms and Section C markbands' },
    { kind: 'web', title: 'IB Documents mirror: Geography past papers, Paper 2, May 2019 to November 2025 (own tally of sessions, marks and subtopics)', url: 'https://ibdocs.re/past-papers-by-subject/geography' },
  ],
};

export default topic;
