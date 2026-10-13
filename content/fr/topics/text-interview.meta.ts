import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-interview',
  subject: 'fr',
  code: 'P1.interview',
  title: { en: 'Writing: interview', ru: 'Письмо: интервью (interview)' },
  papers: ['P1'],
  order: 14,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can introduce an interviewee in a few sentences: who the person is and why the interview matters', ru: 'Могу представить собеседника в нескольких предложениях: кто он и почему интервью интересно' },
    { en: "I can ask open questions with Pourquoi, Comment and Qu'est-ce que", ru: "Могу задавать открытые вопросы с Pourquoi, Comment и Qu'est-ce que" },
    { en: 'I can write answers in the first person and keep the register with vous', ru: 'Могу писать ответы от первого лица и выдерживать регистр, обращаясь на vous' },
    { en: "I can mark questions and answers clearly with a dash or the speaker's name", ru: 'Могу ясно отмечать вопросы и ответы тире или именем говорящего' },
  ],
  termIds: [],
  questionIds: ['p1-interview', 'p1-interview-q1', 'p1-interview-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
