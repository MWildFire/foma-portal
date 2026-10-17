import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-techniques-general-1',
    subject: 'eng',
    topicIds: ['techniques-general'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Read this original sentence from a letter: "After the director closed the unopened report and forbade questions, I wrote to my colleague: What a thorough discussion that was." Identify the device used in the letter-writer’s phrase "thorough discussion" and state what it does to the tone of the letter.',
      ru: 'Прочитайте оригинальное предложение из письма: «After the director closed the unopened report and forbade questions, I wrote to my colleague: What a thorough discussion that was.» Назовите приём, который использован в словах автора письма «thorough discussion», и скажите, что он делает с тоном письма.',
    },
    markscheme: {
      en: '1 mark: the device is verbal irony, because the words say the opposite of what happened: the unopened report and forbidden questions undermine the letter-writer’s apparent praise. 1 mark: the effect on tone: the tone becomes sardonic and mocking, so the reader hears the frustration of the writer with the director.',
      ru: '1 балл: приём — словесная ирония (verbal irony): слова говорят противоположное тому, что произошло, ведь непрочитанный доклад и запрет вопросов опровергают внешнюю похвалу автора письма. 1 балл: эффект на тон: тон становится язвительным и насмешливым, и читатель слышит раздражение автора письма.',
    },
    model: {
      en: 'The device is verbal irony: "thorough discussion" says the opposite of what happened, because the report was left unopened and questions were forbidden. The tone becomes sardonic and mocking, so the reader hears the frustration of the writer with the director.',
      ru: 'Приём — словесная ирония (verbal irony): фраза «thorough discussion» говорит противоположное тому, что произошло, ведь непрочитанный доклад и запрет вопросов опровергают внешнюю похвалу автора письма. Тон становится язвительным, и читатель слышит раздражение автора письма по отношению к директору.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-techniques-general-2',
    subject: 'eng',
    topicIds: ['techniques-general'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Read this original sentence: "A hush settled over the hall before the verdict." Explain the difference between the denotation and the connotation of the word "hush" in this sentence.',
      ru: 'Прочитайте оригинальное предложение: «A hush settled over the hall before the verdict.» Объясните разницу между денотацией (denotation) и коннотацией (connotation) слова «hush» в этом предложении.',
    },
    markscheme: {
      en: '1 mark: the denotation is the literal meaning: a soft silence, the quiet of people who have stopped speaking. 1 mark: the connotation is the feeling the word carries here: anticipation or tension before a judgement; reverence is possible but not required. 1 mark: the difference is explained: the denotation names the quiet, while the connotation shapes the mood; choosing "hush" rather than "silence" makes the moment tense before the verdict.',
      ru: '1 балл: денотация (denotation) — прямое значение: мягкая тишина, молчание людей, которые перестали говорить. 1 балл: коннотация (connotation) — чувство, которое слово несёт здесь: ожидание или напряжение перед решением; благоговение возможно, но не обязательно. 1 балл: объяснена разница: денотация обозначает тишину, а коннотация задаёт настроение; выбор «hush» вместо «silence» делает момент напряжённым перед вердиктом.',
    },
    model: {
      en: 'Denotation: a hush is a soft, quiet silence in the room. Connotation: the word carries anticipation and possible tension, as if the people in the hall are holding their breath before a judgement. The denotation names the quiet; the connotation creates the mood. Choosing hush rather than silence makes the moment feel charged before the verdict.',
      ru: 'Денотация (denotation): hush — мягкая, тихая тишина в зале. Коннотация (connotation): слово несёт ожидание и возможное напряжение, как будто люди в зале затаили дыхание перед приговором. Денотация обозначает тишину, а коннотация создаёт настроение. Выбор hush, а не silence, делает момент напряжённым перед вердиктом.',
    },
    origin: 'original',
    minutes: 5,
  },
];
