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
      en: 'Explain the effect of the enjambment in this original couplet. Name the line break where it falls, and say what the reader does at that point.',
      ru: 'Объясните эффект анжамбемана (enjambment) в этом оригинальном двустишии. Укажите место переноса и скажите, что читатель делает в этот момент.',
    },
    stimulus: {
      en: 'She folded up the letter small and white\nAnd set it on the table out of sight.',
      ru: 'She folded up the letter small and white\nAnd set it on the table out of sight.',
    },
    markscheme: {
      en: '1 mark: identifies the enjambment after "white": the first line has no stop, and the sentence runs on into "And set it on the table out of sight". 1 mark: explains the pace: the folding and the hiding happen in one movement, with no pause at the line end. 1 mark: links the effect to the speaker and the meaning: the haste to hide the letter, and the reader carried on in the same breath, unable to linger over it.',
      ru: '1 балл: называет анжамбеман после слова «white»: в первой строке нет остановки, и предложение продолжается в строке «And set it on the table out of sight». 1 балл: объясняет темп: складывание и прятанье письма происходят одним движением, без паузы на конце строки. 1 балл: связывает эффект с говорящим и смыслом: спешка спрятать письмо, а читатель ведётся дальше на том же дыхании и не может задержаться на нём.',
    },
    model: {
      en: 'The enjambment falls after "white". The first line ends without a stop, so the reader must move straight on to "And set it on the table out of sight". The folding and the hiding happen in one unbroken movement, which matches the speaker\'s haste to put the letter away. The reader is carried over the line break in the same breath and cannot linger over the letter, just as the speaker does not want to.',
      ru: 'Анжамбеман (enjambment) стоит после слова «white». Первая строка заканчивается без остановки, поэтому читатель сразу переходит к «And set it on the table out of sight». Складывание и прятанье происходят одним непрерывным движением, что совпадает со спешкой говорящего убрать письмо. Читатель переносится через конец строки на том же дыхании и не может задержаться на письме, так же как и сам говорящий.',
    },
    origin: 'original',
    minutes: 5,
  },
];
