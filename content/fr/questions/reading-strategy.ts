import type { FrQuestion } from '../types';

// Quick checks for the reading strategy topic (Paper 2, section P2R): one Choose item on each kind of reading answer.
export const questions: FrQuestion[] = [
  {
    id: 'reading-strategy-q1',
    subject: 'fr',
    topicIds: ['reading-strategy'],
    paper: 'P2',
    section: 'P2R',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'In a reading item the answer is "non mentionné". What does it mean? A) The statement is false. B) The text does not say it. C) The statement is partly true.',
      ru: 'В задании ответ « non mentionné ». Что это значит? A) Утверждение неверно. B) В тексте об этом не сказано. C) Утверждение отчасти верно.',
      fr: "Dans un exercice de lecture, la réponse est « non mentionné ». Que signifie-t-elle ? A) La phrase est fausse. B) Le texte n'en parle pas. C) La phrase est en partie vraie.",
    },
    markscheme: {
      en: 'Answer: B. Non mentionné means that the text gives no information about the statement, so it is neither vrai nor faux. Faux needs a sentence in the text that says the opposite.',
      ru: 'Ответ: B. Non mentionné значит, что в тексте нет информации об утверждении, поэтому это не vrai и не faux. Для faux нужна фраза в тексте, которая говорит обратное.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'reading-strategy-q2',
    subject: 'fr',
    topicIds: ['reading-strategy'],
    paper: 'P2',
    section: 'P2R',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'A Quote item asks for a French word from the text that means "a small shop that sells bread". What must you write? A) An English translation of the word. B) The French word exactly as it appears in the text. C) Any French word with a similar meaning.',
      ru: 'Задание «Quote» просит найти во французском тексте слово, которое значит «небольшой магазин, где продают хлеб». Что нужно написать? A) Английский перевод этого слова. B) Французское слово точно так, как оно стоит в тексте. C) Любое французское слово с похожим значением.',
      fr: "Un exercice « Quote » demande un mot français du texte qui signifie « petit magasin où l'on vend du pain ». Que faut-il écrire ? A) La traduction anglaise du mot. B) Le mot français exactement comme il apparaît dans le texte. C) Un autre mot français de sens proche.",
    },
    markscheme: {
      en: 'Answer: B. The mark is for the word that the text uses, in the same form (singular or plural, with its accents). A translation or a synonym is not the word in the text.',
      ru: 'Ответ: B. Балл дают за слово, которое использует текст, в той же форме (единственное или множественное число, с акцентами). Перевод или синоним — не то слово, которое стоит в тексте.',
    },
    answer: 'B',
    origin: 'original',
  },
];
