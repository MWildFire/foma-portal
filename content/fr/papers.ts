import type { PaperGuide } from '../../src/contract/types';

// Paper guides for French B SL: P1 (writing), P2 reading and P2 listening, each with its mock timed sets.
// The durations are the ones printed in data/exams.json (fr-p1 75 minutes, fr-p2r 45, fr-p2l 60); validate-content checks them.

// Question ids of whole sections. Every reading section r1 to r6 and listening section l1 to l8 holds ten questions
// (r1-q01 … r6-q10, l1-q01 … l8-q10), one mark each, so three sections make a timed set of 30 questions and 30 marks.
const questionsOf = (...sections: string[]): string[] =>
  sections.flatMap(section => Array.from({ length: 10 }, (_, index) => `${section}-q${String(index + 1).padStart(2, '0')}`));

export const papers: PaperGuide[] = [
  {
    subject: 'fr',
    paper: 'P1',
    title: { en: 'Paper 1: writing (mock, 75 minutes)', ru: 'Часть 1 (Paper 1): письмо, пробный вариант, 75 минут' },
    minutes: 75,
    marks: 30,
    structure: {
      en: 'Three writing tasks, each on a different theme. Choose one task and write 250 to 400 words in French for the reader and purpose the task names. The task is marked on criteria A, B and C, 30 marks in total. Each timed set holds three tasks from three different themes.',
      ru: 'Три задания на письмо, каждое на свою тему. Выберите одно задание и напишите 250–400 слов по-французски для адресата и с целью, которые указаны в задании. Задание оценивается по критериям A, B и C, всего 30 баллов. Каждый набор (на 75 минут) содержит три задания из трёх разных тем.',
    },
    strategy: {
      en: 'Spend about 10 minutes choosing: take the task whose text type and reader you know best and whose three content points you can cover. Spend 10 minutes on a plan: tone, reader, the three points in order, and the connectors you will use. Write for about 45 minutes, aiming at 300 to 350 words. Keep about 10 minutes to check agreements, accents, the choice of tu or vous, and the word count.',
      ru: 'Около 10 минут на выбор задания: возьмите то, где вы хорошо знаете тип текста (text type) и адресата и где сможете раскрыть все три пункта. 10 минут на план (plan): тон, адресат, три пункта по порядку и связки (connectors). Около 45 минут на текст, цель 300–350 слов. Около 10 минут оставьте на проверку: согласование, акценты, выбор tu или vous и объём.',
    },
    criteria: {
      en: 'A Language (12 marks): accurate grammar and spelling, a range of structures and vocabulary, correct accents and agreements. B Message (12 marks): the right text type, reader and register, all three content points covered, and a clear, organised text. C Conceptual understanding (6 marks): the theme is treated with depth, with examples and a personal or cultural view.',
      ru: 'A Язык (Language), 12 баллов: точная грамматика и орфография, разнообразные конструкции и лексика, правильные акценты и согласование. B Сообщение (Message), 12 баллов: верный тип текста, адресат и регистр, все три пункта задания раскрыты, текст ясный и хорошо организован. C Концептуальное понимание (Conceptual understanding), 6 баллов: тема раскрыта глубоко, есть примеры и личная или культурная точка зрения.',
    },
    commandTerms: ['Write'],
    timedSets: [
      {
        id: 'fr-p1-set-1',
        title: { en: 'Set 1: article (theme 5), blog (theme 1), interview (theme 3)', ru: 'Набор 1: статья (тема 5), блог (тема 1), интервью (тема 3)' },
        questionIds: ['p1-article', 'p1-blog', 'p1-interview'],
        minutes: 75,
      },
      {
        id: 'fr-p1-set-2',
        title: { en: 'Set 2: report (theme 5), diary (theme 2), formal letter (theme 4)', ru: 'Набор 2: отчёт (тема 5), дневник (тема 2), официальное письмо (тема 4)' },
        questionIds: ['p1-report', 'p1-diary', 'p1-letter-formal'],
        minutes: 75,
      },
      {
        id: 'fr-p1-set-3',
        title: { en: 'Set 3: informal e-mail (theme 1), brochure (theme 2), speech (theme 4)', ru: 'Набор 3: неформальное электронное письмо (тема 1), брошюра (тема 2), речь (тема 4)' },
        questionIds: ['p1-email-informal', 'p1-brochure', 'p1-speech'],
        minutes: 75,
      },
      {
        id: 'fr-p1-set-4',
        title: { en: 'Set 4: essay (theme 1), social media post (theme 2), review (theme 3)', ru: 'Набор 4: эссе (тема 1), пост для соцсетей (тема 2), отзыв (тема 3)' },
        questionIds: ['p1-essay', 'p1-social-post', 'p1-review'],
        minutes: 75,
      },
    ],
  },
  {
    subject: 'fr',
    paper: 'P2',
    part: 'reading',
    title: { en: 'Paper 2: reading (mock, 45 minutes)', ru: 'Часть 2 (Paper 2): чтение, пробный вариант, 45 минут' },
    minutes: 45,
    marks: 30,
    structure: {
      en: 'Six French texts with ten questions each. Each timed set covers three texts: 30 questions, 30 marks, one mark per question. Question types: Identify (true, false or not mentioned), State (a short answer, in English or French as the question says), Match (a letter for each item) and Quote (the exact French words copied from the text). The mock is shorter than the final exam here: 45 minutes against 1 hour in the final reading paper.',
      ru: 'Шесть французских текстов, к каждому по десять вопросов. Каждый набор на время охватывает три текста: 30 вопросов, 30 баллов, по одному баллу за вопрос. Типы вопросов: Identify (верно, неверно или не упоминается), State (краткий ответ по-английски или по-французски, как сказано в вопросе), Match (буква для каждого пункта) и Quote (точная цитата: французские слова, скопированные из текста). Пробный вариант здесь короче итогового экзамена: 45 минут против 1 часа в итоговой части чтения.',
    },
    strategy: {
      en: 'Read the ten questions for a text before you read the text, and underline the key words. Scan the text for those words and read the sentences around them. Answer "not mentioned" only when the text says nothing at all about the point. For Quote, copy the French words exactly, with no changes and no extra words. Aim for about 1 minute 20 seconds per question, so that 30 questions take about 40 minutes, and keep 5 minutes to check.',
      ru: 'Прочитайте десять вопросов к тексту до того, как читать сам текст, и подчеркните ключевые слова. Ищите эти слова в тексте и читайте предложения вокруг них. Ответ «non mentionné» (не упоминается) ставьте, только если текст вообще ничего не говорит об этом. В Quote копируйте французские слова точно, без изменений и лишних слов. На один вопрос около 1 минуты 20 секунд: 30 вопросов займут около 40 минут, 5 минут оставьте на проверку.',
    },
    commandTerms: ['Identify', 'State', 'Match', 'Quote'],
    timedSets: [
      {
        id: 'fr-p2r-set-1',
        title: { en: 'Set 1: texts 1 to 3 (r1 to r3)', ru: 'Набор 1: тексты 1–3 (r1–r3)' },
        questionIds: questionsOf('r1', 'r2', 'r3'),
        minutes: 45,
      },
      {
        id: 'fr-p2r-set-2',
        title: { en: 'Set 2: texts 4 to 6 (r4 to r6)', ru: 'Набор 2: тексты 4–6 (r4–r6)' },
        questionIds: questionsOf('r4', 'r5', 'r6'),
        minutes: 45,
      },
    ],
  },
  {
    subject: 'fr',
    paper: 'P2',
    part: 'listening',
    title: { en: 'Paper 2: listening (mock, 60 minutes)', ru: 'Часть 2 (Paper 2): аудирование, пробный вариант, 60 минут' },
    minutes: 60,
    marks: 30,
    structure: {
      en: 'Eight recorded French texts, such as dialogues, announcements and interviews, with ten questions each. Each timed set covers three recordings: 30 questions, 30 marks, one mark per question. Question types: Identify (true, false or not mentioned, or a choice of A, B or C), State (a short answer, in English or French as the question says), Note (one word or a number, written as heard) and Match (a letter for each item). The mock is longer than the final exam here: 60 minutes against 45 minutes in the final listening paper.',
      ru: 'Восемь записей на французском, например диалоги, объявления и интервью, по десять вопросов к каждой. Каждый набор на время охватывает три записи: 30 вопросов, 30 баллов, по одному баллу за вопрос. Типы вопросов: Identify (верно, неверно или не упоминается, либо выбор A, B или C), State (краткий ответ по-английски или по-французски, как сказано в вопросе), Note (одно слово или число, записанное так, как вы услышали) и Match (буква для каждого пункта). Пробный вариант здесь длиннее итогового экзамена: 60 минут против 45 минут в итоговой части аудирования.',
    },
    strategy: {
      en: 'Read the ten questions for a recording before it plays and mark the key words. Answer in the order the speakers talk, and write first the answers you are sure of. A Note answer is usually one word or a number, spelled correctly. A State answer is a short phrase of one to three words, in the language the question asks for. Keep about 5 minutes at the end to check the spelling of every answer.',
      ru: 'Прочитайте десять вопросов к записи до того, как она начнётся, и отметьте ключевые слова. Отвечайте в том порядке, в котором говорят участники, и сначала записывайте то, в чём уверены. Ответ Note обычно состоит из одного слова или числа, написанного правильно. Ответ State — короткая фраза из одного–трёх слов на том языке, который указан в вопросе. В конце оставьте около 5 минут на проверку орфографии каждого ответа.',
    },
    commandTerms: ['Identify', 'State', 'Note'],
    timedSets: [
      {
        id: 'fr-p2l-set-1',
        title: { en: 'Set 1: recordings 1 to 3 (l1 to l3)', ru: 'Набор 1: записи 1–3 (l1–l3)' },
        questionIds: questionsOf('l1', 'l2', 'l3'),
        minutes: 60,
      },
      {
        id: 'fr-p2l-set-2',
        title: { en: 'Set 2: recordings 4 to 6 (l4 to l6)', ru: 'Набор 2: записи 4–6 (l4–l6)' },
        questionIds: questionsOf('l4', 'l5', 'l6'),
        minutes: 60,
      },
      {
        id: 'fr-p2l-set-3',
        title: { en: 'Set 3: recordings 7 and 8, then recording 1 (l7, l8, l1)', ru: 'Набор 3: записи 7 и 8, затем запись 1 (l7, l8, l1)' },
        questionIds: questionsOf('l7', 'l8', 'l1'),
        minutes: 60,
      },
    ],
  },
];
