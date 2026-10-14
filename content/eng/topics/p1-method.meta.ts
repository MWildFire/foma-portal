import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-method',
  subject: 'eng',
  code: 'P1.M',
  title: { en: 'Method: a guided analysis in 75 minutes', ru: 'Метод: направленный анализ за 75 минут' },
  papers: ['P1'],
  order: 1,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can read a guiding question and say exactly what it asks me to explain', ru: 'Могу прочитать направляющий вопрос и назвать, что именно в нём нужно объяснить' },
    { en: 'I can annotate an unseen extract for techniques and for shifts in meaning', ru: 'Могу разметить незнакомый отрывок: приёмы и смены смысла' },
    { en: 'I can write a one-sentence thesis that answers the question and makes a claim about effect', ru: 'Могу написать тезис в одном предложении: он отвечает на вопрос и утверждает что-то об эффекте' },
    { en: 'I can plan three or four paragraphs and keep each one linked to the question', ru: 'Могу составить план из трёх–четырёх абзацев, связанных с вопросом' },
    { en: 'I can divide 75 minutes between reading, planning, writing and checking', ru: 'Могу разделить 75 минут между чтением, планом, письмом и проверкой' },
  ],
  termIds: ['imagery', 'simile', 'anticlimax', 'enjambment', 'onomatopoeia', 'personification', 'tone'],
  questionIds: ['p1-dickinson-fly', 'chk-p1-method-1', 'chk-p1-method-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
