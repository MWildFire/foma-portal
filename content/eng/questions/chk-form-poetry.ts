import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-form-poetry-1',
    subject: 'eng',
    topicIds: ['form-poetry'],
    paper: 'P1',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify the rhyme scheme and the metre of this original quatrain. Name the two pairs of rhyming words, and mark the stresses in the first line.',
      ru: 'Определите схему рифмовки и метр этого оригинального четверостишия. Назовите две пары рифмующихся слов и отметьте ударения в первой строке.',
    },
    stimulus: {
      en: 'The lamp burns low above the sill,\nThe rain runs down the glass all night;\nI sit, and hear the clock stand still,\nAnd wait for you until the light.',
      ru: 'The lamp burns low above the sill,\nThe rain runs down the glass all night;\nI sit, and hear the clock stand still,\nAnd wait for you until the light.',
    },
    markscheme: {
      en: '1 mark: rhyme scheme ABAB, with the pairs "sill" and "still" (A) and "night" and "light" (B). 1 mark: iambic tetrameter, four iambs (two syllables each), eight syllables per line, with the stress on every second syllable. 1 mark: a correct stress marking of the first line, for example: the LAMP burns LOW a-BOVE the SILL.',
      ru: '1 балл: схема рифмовки ABAB, пары «sill» и «still» (A) и «night» и «light» (B). 1 балл: ямбический тетраметр (iambic tetrameter): четыре ямба по два слога, восемь слогов в строке, ударение на каждом втором слоге. 1 балл: верная разметка ударений в первой строке, например: the LAMP burns LOW a-BOVE the SILL.',
    },
    model: {
      en: 'Rhyme scheme: ABAB. "Sill" rhymes with "still", and "night" with "light". Metre: iambic tetrameter. Each line has eight syllables and four stresses, falling on every second syllable: the LAMP burns LOW a-BOVE the SILL.',
      ru: 'Схема рифмовки: ABAB. «Sill» рифмуется с «still», «night» — с «light». Метр: ямбический тетраметр (iambic tetrameter). В каждой строке восемь слогов и четыре ударения, которые падают на каждый второй слог: the LAMP burns LOW a-BOVE the SILL.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'chk-form-poetry-2',
    subject: 'eng',
    topicIds: ['form-poetry'],
    paper: 'P1',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Explain the effect of the enjambment in this original couplet. Identify the unfinished syntax at the line break, explain one possible rhythmic effect and connect it with concealment in the wording.',
      ru: 'Объясните эффект анжамбемана (enjambment) в этом оригинальном двустишии. Укажите незавершённую конструкцию на границе строк, объясните возможный ритмический эффект и свяжите его с сокрытием в словах.',
    },
    stimulus: {
      en: 'She folded up the letter, hid it where\nThe lamp would cast no light, and left it there.',
      ru: 'She folded up the letter, hid it where\nThe lamp would cast no light, and left it there.',
    },
    markscheme: {
      en: '1 mark: the break after "where" leaves its clause incomplete until the next line. 1 mark: explains a possible effect, such as forward expectation of the location or a moment of suspension; no rule requires a breathless reading. 1 mark: links the delayed location and "no light" to the concealment, while acknowledging that the person’s motive and haste are not established. Accept another text-supported effect.',
      ru: '1 балл: после "where" конструкция остаётся незавершённой до следующей строки. 1 балл: объяснён возможный эффект — ожидание места или краткая задержка; безостановочное чтение необязательно. 1 балл: отложенное указание места и "no light" связаны с сокрытием, но мотив и спешка персонажа не объявлены доказанными. Принимайте другой обоснованный по тексту эффект.',
    },
    model: {
      en: 'The break after "where" postpones the location until "The lamp would cast no light". It can draw the reader forward to complete the clause, or create a brief suspense before the dark place is revealed. That delayed information fits the action of hiding the letter. The lines do not prove why the person hides it or that she is in a hurry; the narrative "she" is also not automatically the speaker of the poem.',
      ru: 'Перенос после "where" откладывает указание места до "The lamp would cast no light". Он может побуждать продолжить чтение, чтобы завершить конструкцию, или создавать задержку перед раскрытием тёмного места. Отложенная информация соотносится с прятаньем письма. Строки не доказывают мотив или спешку персонажа; повествовательное "she" также не означает, что героиня сама говорит стихотворение.',
    },
    origin: 'original',
    minutes: 5,
  },
];
