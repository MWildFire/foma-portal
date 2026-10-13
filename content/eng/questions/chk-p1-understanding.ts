import type { Question } from '../../../src/contract/types';

const passage = 'The kettle had been boiling for ten minutes before anyone thought to switch it off. Pavel counted the cups on the table twice, as if one of them might have gone missing. "Sit down, Pavel," Marta said, without turning from the window. "Nobody else is coming."';

export const questions: Question[] = [
  {
    id: 'chk-p1-understanding-1',
    subject: 'eng',
    topicIds: ['p1-understanding'],
    paper: 'P1',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Read the original passage. Identify the speaker and the listener of the words in quotation marks.',
      ru: 'Прочитайте оригинальный отрывок. Определите говорящего и слушателя слов в кавычках.',
    },
    stimulus: { en: passage, ru: passage },
    markscheme: {
      en: '1 mark: the speaker is Marta, the woman by the window, who gives the instruction and the verdict. 1 mark: the listener is Pavel, who is named in the words "Sit down, Pavel," and who has been counting the cups.',
      ru: '1 балл: говорящий — Марта, женщина у окна, которая отдаёт приказ и выносит приговор. 1 балл: слушатель — Павел, которого называют по имени в словах «Sit down, Pavel,» и который пересчитывает чашки.',
    },
    model: {
      en: 'The speaker is Marta. She is standing by the window and says the words in quotation marks. The listener is Pavel, whom she addresses directly as "Pavel", and who has been counting the cups on the table.',
      ru: 'Говорящий — Марта. Она стоит у окна и произносит слова в кавычках. Слушатель — Павел: она обращается к нему напрямую по имени, и он до этого пересчитывал чашки на столе.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'chk-p1-understanding-2',
    subject: 'eng',
    topicIds: ['p1-understanding'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Explain the tone of the sentence "Nobody else is coming." Support your answer with a quotation from the passage.',
      ru: 'Объясните тон предложения «Nobody else is coming.» Подтвердите ответ цитатой из отрывка.',
    },
    stimulus: { en: passage, ru: passage },
    markscheme: {
      en: '1 mark: names a tone that fits the sentence, for example flat, resigned or bitter. 1 mark: quotes accurately from the passage, for example "without turning from the window". 1 mark: explains how the quotation produces the tone, for example she does not look at Pavel, so the words sound like a verdict rather than comfort.',
      ru: '1 балл: назван тон, который подходит предложению, например ровный, покорный или горький. 1 балл: точная цитата из отрывка, например «without turning from the window». 1 балл: объяснено, как цитата создаёт тон: она не смотрит на Павла, поэтому слова звучат как приговор, а не как утешение.',
    },
    model: {
      en: 'The tone is flat and resigned. Marta does not look at Pavel: she speaks "without turning from the window", so the last sentence reads as a fact she has already accepted rather than a hope. Because she does not turn, the words sound like a verdict, not comfort, and the reader feels that the wait is over.',
      ru: 'Тон ровный и покорный. Марта не смотрит на Павла: она говорит «without turning from the window», поэтому последняя фраза звучит как факт, который она уже приняла, а не как надежда. Потому что она не оборачивается, слова звучат как приговор, а не как утешение, и читатель понимает, что ожидание окончено.',
    },
    origin: 'original',
    minutes: 4,
  },
];
