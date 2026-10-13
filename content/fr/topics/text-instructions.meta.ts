import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-instructions',
  subject: 'fr',
  code: 'P1.instructions',
  title: { en: 'Writing: instructions', ru: 'Письмо: инструкция (instructions)' },
  papers: ['P1'],
  order: 21,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain what a device is for and who it is for', ru: 'Могу объяснить, для чего нужен прибор и для кого он предназначен' },
    { en: 'I can write numbered steps in the imperative, for example Ouvrez, Versez, Fermez', ru: 'Могу записать пронумерованные шаги в повелительном наклонении: Ouvrez, Versez, Fermez' },
    { en: 'I can write warnings with Attention ! and Important : and general rules in the infinitive', ru: 'Могу писать предупреждения (Attention !, Important :) и общие правила в инфинитиве' },
    { en: "I can use il faut que and avant que with the subjunctive", ru: 'Могу использовать il faut que и avant que с сослагательным наклонением' },
    { en: 'I can say what the user should do when something goes wrong', ru: 'Могу написать, что делать пользователю, если что-то пошло не так' },
  ],
  termIds: [],
  questionIds: ['p1-instructions', 'p1-instructions-q1', 'p1-instructions-q2'],
  sources: [{ kind: 'own', title: 'Own wording for this portal; not in the ThinkIB text-types list (page 71138)' }],
};

export default topic;
