import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'concept-representation',
  subject: 'eng',
  code: 'C.RE',
  title: { en: 'Key concept: representation', ru: 'Ключевое понятие: репрезентация' },
  papers: ['P1', 'P2'],
  order: 23,
  minutes: 30,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can say who is shown in a text, who speaks for them, and what the text leaves out', ru: 'Могу назвать, кто показан в тексте, кто говорит от их имени и что остаётся за пределами описания' },
    { en: 'I can tell a stereotype from a complex representation and support my judgement with a technique', ru: 'Могу отличить стереотип от сложного образа и подкрепить своё суждение приёмом' },
    { en: 'I can explain how focalisation and the choice of narrator decide what the reader sees', ru: 'Могу объяснить, как фокализация и выбор рассказчика определяют, что видит читатель' },
    { en: 'I can show how imagery and symbol build an image of a place or a group', ru: 'Могу показать, как образность и символ строят образ места или группы' },
    { en: 'I can question a representation: who gains from it, whose view is missing, and what the audience is expected to believe', ru: 'Могу поставить репрезентацию под сомнение: кто от неё выигрывает, чьего взгляда не хватает и во что должна поверить аудитория' },
  ],
  termIds: ['focalisation', 'omniscient-narrator', 'unreliable-narrator', 'imagery', 'symbol', 'audience'],
  questionIds: ['chk-concept-representation-1', 'chk-concept-representation-2'],
  sources: [{ kind: 'own', title: 'Own wording for this portal, based on the key concepts of the IB English A: Literature course' }],
};

export default topic;
