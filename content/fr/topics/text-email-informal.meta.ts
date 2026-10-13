import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-email-informal',
  subject: 'fr',
  code: 'P1.email-informal',
  title: { en: 'Writing: informal e-mail', ru: 'Письмо: неформальный e-mail (informal e-mail)' },
  papers: ['P1'],
  order: 10,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write an informal e-mail with a subject line, a greeting and a first-name signature', ru: 'Могу написать неформальный e-mail с темой, приветствием и подписью именем' },
    { en: 'I can use tu consistently when I write to a friend', ru: 'Могу последовательно использовать tu, когда пишу другу' },
    { en: 'I can make plans with the futur proche and invite with the impératif and the conditionnel', ru: 'Могу строить планы через futur proche и приглашать через impératif и conditionnel' },
    { en: 'I can introduce myself: my origins, my languages and my passions', ru: 'Могу представить себя: свои корни, языки и увлечения' },
    { en: "I can close a friendly e-mail with the right phrase, such as « Je t'embrasse »", ru: "Могу правильно закончить дружеское письмо, например фразой « Je t'embrasse »" },
  ],
  termIds: [],
  questionIds: ['p1-email-informal', 'p1-email-informal-q1', 'p1-email-informal-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
