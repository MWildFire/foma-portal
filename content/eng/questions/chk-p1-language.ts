import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p1-language-1',
    subject: 'eng',
    topicIds: ['p1-language'],
    paper: 'P1',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'This is a focused rewriting drill, not an IB banned-word rule. Rewrite the sentence below in precise literary language. Use one precise verb, one literary term, and no vague words such as "good", "shows" or "very": "The poem is very good at showing that the room is quiet, and the simile is nice."',
      ru: 'Это отдельная тренировка редактирования, а не список запрещённых IB слов. Перепишите предложение ниже на точном литературном языке. Используйте один точный глагол и один литературный термин, без размытых слов вроде «good», «shows» или «very»: «The poem is very good at showing that the room is quiet, and the simile is nice.»',
    },
    markscheme: {
      en: '1 mark: removes the vague words ("very", "good", "shows", "nice") and states the effect directly. 1 mark: uses one precise verb, such as "suggests", "reinforces" or "undercuts", with the right meaning. 1 mark: uses a term correctly: "simile" for a figurative comparison, often signalled by "like" or "as"; these words alone are not sufficient.',
      ru: '1 балл: убраны размытые слова («very», «good», «shows», «nice») и эффект назван прямо. 1 балл: использован точный глагол, например «suggests», «reinforces» или «undercuts», с верным значением. 1 балл: термин употреблён верно: «simile» для образного сравнения, часто выраженного через «like» или «as»; самих этих слов недостаточно.',
    },
    model: {
      en: 'The poem\'s simile makes the silence of the room concrete and reinforces the tension of the waiting.',
      ru: 'Сравнение (simile) в стихотворении делает тишину комнаты осязаемой и усиливает напряжение ожидания.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p1-language-2',
    subject: 'eng',
    topicIds: ['p1-language'],
    paper: 'P1',
    marks: 2,
    command: 'Suggest',
    prompt: {
      en: 'Suggest one sentence that integrates the quotation "the stillness in the air" into a comment on the poem, so that the quotation is part of the grammar of the sentence.',
      ru: 'Предложите одно предложение, которое вплетает цитату «the stillness in the air» в комментарий к стихотворению так, чтобы цитата была частью грамматики предложения.',
    },
    markscheme: {
      en: '1 mark: the quotation is exact ("the stillness in the air") and sits inside the sentence, for example as the object of a verb, not as a separate sentence. 1 mark: the sentence comments on an effect, using a precise verb such as "compares", "recalls" or "suggests".',
      ru: '1 балл: цитата точная («the stillness in the air») и стоит внутри предложения, например как дополнение к глаголу, а не отдельным предложением. 1 балл: предложение комментирует эффект, с точным глаголом, например «compares» («сравнивает»), «recalls» («напоминает») или «suggests» («предполагает»).',
    },
    model: {
      en: 'The speaker compares the calm of the room to "the stillness in the air", so the quiet before death feels like the quiet before a storm.',
      ru: 'Голос стихотворения сравнивает покой комнаты с «the stillness in the air», поэтому тишина перед смертью ощущается как тишина перед бурей.',
    },
    origin: 'original',
    minutes: 3,
  },
];
