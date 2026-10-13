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
      en: 'Read this original sentence from a letter: "The meeting, planned for a month, ended in four minutes, and the director thanked us for our thorough discussion." Identify the device used in the phrase "thorough discussion" and state what it does to the tone of the letter.',
      ru: 'Прочитайте оригинальное предложение из письма: «The meeting, planned for a month, ended in four minutes, and the director thanked us for our thorough discussion.» Назовите приём, который использован во фразе «thorough discussion», и скажите, что он делает с тоном письма.',
    },
    markscheme: {
      en: '1 mark: the device is verbal irony, because the words say the opposite of what happened: a four-minute meeting was not a thorough discussion. 1 mark: the effect on tone: the tone becomes sardonic and mocking, so the reader hears the frustration of the writer with the director.',
      ru: '1 балл: приём — словесная ирония (verbal irony): слова говорят противоположное тому, что произошло, ведь четырёхминутная встреча не была тщательным обсуждением. 1 балл: эффект на тон: тон становится язвительным и насмешливым, и читатель слышит раздражение автора письма.',
    },
    model: {
      en: 'The device is verbal irony: "thorough discussion" says the opposite of what happened, because a four-minute meeting was not thorough. The tone becomes sardonic and mocking, so the reader hears the frustration of the writer with the director.',
      ru: 'Приём — словесная ирония (verbal irony): фраза «thorough discussion» говорит противоположное тому, что произошло, ведь четырёхминутная встреча не была тщательным обсуждением. Тон становится язвительным, и читатель слышит раздражение автора письма с директором.',
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
      en: '1 mark: the denotation is the literal meaning: a soft silence, the quiet of people who have stopped speaking. 1 mark: the connotation is the feeling the word carries here: tension, reverence and the sense that something important is about to be said. 1 mark: the difference is explained: the denotation names the sound, while the connotation shapes the mood; choosing "hush" rather than "silence" makes the moment tense before the verdict.',
      ru: '1 балл: денотация (denotation) — прямое значение: мягкая тишина, молчание людей, которые перестали говорить. 1 балл: коннотация (connotation) — чувство, которое слово несёт здесь: напряжение, благоговение и ощущение, что сейчас прозвучит нечто важное. 1 балл: объяснена разница: денотация называет звук, а коннотация задаёт настроение; выбор «hush» вместо «silence» делает момент напряжённым перед вердиктом.',
    },
    model: {
      en: 'Denotation: a hush is a soft, quiet silence in the room. Connotation: the word carries tension and reverence, as if the people in the hall are holding their breath before a judgement. The denotation names the sound; the connotation creates the mood. Choosing hush rather than silence makes the moment feel charged before the verdict.',
      ru: 'Денотация (denotation): hush — мягкая, тихая тишина в зале. Коннотация (connotation): слово несёт напряжение и благоговение, как будто люди в зале затаили дыхание перед приговором. Денотация называет звук, а коннотация создаёт настроение. Выбор hush, а не silence, делает момент напряжённым перед вердиктом.',
    },
    origin: 'original',
    minutes: 5,
  },
];
