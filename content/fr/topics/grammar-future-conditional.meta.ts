import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'grammar-future-conditional',
  subject: 'fr',
  code: 'G3.future-conditional',
  title: { en: 'Grammar: futur proche, futur simple, conditional and si-clauses', ru: 'Грамматика: futur proche, futur simple, conditionnel и фразы со si' },
  papers: ['P1', 'P2'],
  order: 26,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can talk about plans with the futur proche (aller and an infinitive)', ru: 'Могу говорить о планах с futur proche (aller и инфинитив)' },
    { en: 'I can form the futur simple, including the irregular stems', ru: 'Могу образовать futur simple, включая неправильные основы' },
    { en: 'I can use the conditionnel présent for politeness, advice and hypotheses', ru: 'Могу использовать conditionnel présent для вежливости, совета и гипотез' },
    { en: 'I can write si-clauses for a real future and for an unreal present', ru: 'Могу писать фразы со si для реального будущего и нереального настоящего' },
  ],
  termIds: ['gr-futur-proche', 'gr-futur-simple', 'gr-futur-stems-irregular', 'gr-conditionnel-present', 'gr-si-real', 'gr-si-unreal'],
  questionIds: ['grammar-future-conditional-q1', 'grammar-future-conditional-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
