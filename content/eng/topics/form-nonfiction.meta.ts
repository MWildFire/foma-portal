import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'form-nonfiction',
  subject: 'eng',
  code: 'F.NFI',
  title: { en: 'Non-fiction and speeches: argument and rhetoric', ru: 'Нон-фикшн и речи: аргументация и риторика' },
  papers: ['P1', 'P2'],
  order: 9,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the three appeals (ethos, pathos, logos) and find each one in a speech', ru: 'Могу назвать три апелляции (этос, пафос, логос) и найти каждую в речи' },
    { en: 'I can say who the audience is and what the speaker wants that audience to do or feel', ru: 'Могу назвать аудиторию и то, что оратор хочет, чтобы она сделала или почувствовала' },
    { en: 'I can explain what a rhetorical question, anaphora or antithesis does to the listener', ru: 'Могу объяснить, что риторический вопрос, анафора или антитеза делают со слушателем' },
    { en: 'I can trace how an argument is built and point to the place where it turns', ru: 'Могу проследить, как построен аргумент, и указать место, где он меняет направление' },
  ],
  termIds: ['ethos', 'pathos', 'logos', 'rhetorical-question', 'anaphora', 'antithesis', 'tricolon', 'direct-address', 'audience', 'purpose', 'rhetoric', 'argument'],
  questionIds: ['p1-douglass-fourth', 'p1-wollstonecraft-rights', 'chk-form-nonfiction-1', 'chk-form-nonfiction-2'],
  sources: [{ kind: 'own', title: 'Method written for this portal; rhetoric terms follow the course terminology, checked against the course textbook' }],
};

export default topic;
