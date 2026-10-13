import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-essay',
  subject: 'fr',
  code: 'P1.essay',
  title: { en: 'Writing: essay', ru: 'Письмо: эссе (essay)' },
  papers: ['P1'],
  order: 19,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a formal essay with a clear thesis, a plan and a conclusion', ru: 'Могу написать формальное эссе с ясным тезисом, планом и заключением' },
    { en: 'I can support each argument with an example and link it to the next part', ru: 'Могу подкрепить каждый аргумент примером и связать его со следующей частью' },
    { en: "I can use linking words such as d'une part… d'autre part, certes… mais and en revanche", ru: "Могу использовать связки: d'une part… d'autre part, certes… mais, en revanche" },
    { en: 'I can use bien que with the subjunctive, for example soient, not sont', ru: 'Могу использовать bien que с сослагательным наклонением: soient, а не sont' },
    { en: 'I can answer a counter-argument and keep one register and one pronoun, je or nous', ru: 'Могу ответить на контраргумент и выдержать один регистр и одно местоимение: je или nous' },
  ],
  termIds: [],
  questionIds: ['p1-essay', 'p1-essay-q1', 'p1-essay-q2'],
  sources: [{ kind: 'own', title: 'Own wording for this portal; not in the ThinkIB text-types list (page 71138)' }],
};

export default topic;
