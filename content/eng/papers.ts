import type { PaperGuide } from '../../src/contract/types';

// Paper guides for the school mock. Durations must match data/exams.json (eng-p1 75 min, eng-p2 105 min).
// Timed sets reuse the practice passages (Paper 1) and the prompts of the P2 bank (Paper 2) by id.
// Timed sets keep the printed minutes.
export const papers: PaperGuide[] = [
  {
    subject: 'eng',
    paper: 'P1',
    title: { en: 'Paper 1: guided literary analysis', ru: 'Paper 1: направленный литературный анализ' },
    minutes: 75,
    marks: 20,
    structure: {
      en: 'Two unseen extracts from different forms (for example poetry and prose, or drama and non-fiction), each with a guiding question. Choose one extract and answer its guiding question, or propose another focus on how the text is written. Four criteria, each marked 0–5: understanding and interpretation, analysis and evaluation, focus and organisation, language.',
      ru: 'Два незнакомых отрывка разных форм (например, поэзия и проза или драма и нон-фикшн), у каждого — направляющий вопрос. Выберите один отрывок и ответьте на его направляющий вопрос или предложите другой технический фокус. Четыре критерия, каждый оценивается от 0 до 5: понимание и интерпретация, анализ и оценка, фокус и организация, язык.',
    },
    strategy: {
      en: 'The paper is 75 minutes. About 10 minutes: read the guiding questions, read both extracts for sense, choose one. 5 minutes: annotate it. 10 minutes: write the thesis and the plan. 45 minutes: write the response. 5 minutes: check the quotations, the links to the question and the time. Plan before you write: a response without a thesis cannot reach the top band of criterion B. You type in the exam, so practise typing a full response against the 45-minute clock.',
      ru: 'Пейпер длится 75 минут. Около 10 минут: прочитать направляющие вопросы, прочитать оба отрывка ради смысла, выбрать один. 5 минут: разметить его. 10 минут: написать тезис и план. 45 минут: написать ответ. 5 минут: проверить цитаты, связи с вопросом и время. Сначала план: ответ без тезиса не может попасть в высшую группу критерия B. На экзамене вы печатаете, поэтому тренируйте печать полного ответа на 45 минут.',
    },
    criteria: {
      en: 'A understanding and interpretation (0–5) · B analysis and evaluation (0–5) · C focus and organisation (0–5) · D language (0–5). Total 20. Check the criteria against your teacher\'s handout.',
      ru: 'A понимание и интерпретация (0–5) · B анализ и оценка (0–5) · C фокус и организация (0–5) · D язык (0–5). Всего 20. Критерии сверяйте с раздатками учителя.',
    },
    commandTerms: ['Analyse', 'How', 'Consider', 'In what ways'],
    asked: { en: 'What the exam asks, from 38 extracts in 19 papers (May 2021 to November 2025): each paper gives two extracts of different forms (poetry, prose, drama or non-fiction), and you choose one. The guiding question is almost always a how-question (24 of the 30 visible questions) about the effect a writer creates: a mood or atmosphere, the tension or bond between characters, a personality shown through speech or stage directions, or imagery and sound. A few papers say in what ways or by what means. You may also propose your own technical focus. No author repeats across sessions.', ru: 'Что спрашивают: 38 отрывков из 19 пейперов (май 2021 — ноябрь 2025). В каждом пейпере два отрывка разных форм (поэзия, проза, драма или нон-фикшн), выбираете один. Направляющий вопрос почти всегда how (24 из 30 видимых вопросов): какой эффект создаёт автор — настроение или атмосферу, напряжение или связь между персонажами, характер через речь или ремарки, образы и звук. Иногда спрашивают in what ways или by what means. Можно предложить собственный технический фокус. Авторы между сессиями не повторяются.' },
    timedSets: [
      {
        id: 'p1-set-poetry-prose',
        title: { en: 'Full paper: poetry and prose extracts', ru: 'Весь пейпер: стихотворение и проза' },
        questionIds: ['p1-dickinson-fly', 'p1-joyce-araby'],
        minutes: 75,
      },
      {
        id: 'p1-set-drama-nonfiction',
        title: { en: 'Full paper: drama and speech extracts', ru: 'Весь пейпер: драма и речь' },
        questionIds: ['p1-wilde-earnest', 'p1-douglass-fourth'],
        minutes: 75,
      },
      {
        id: 'p1-set-poetry-prose-2',
        title: { en: 'Full paper: poetry and prose extracts (second set)', ru: 'Весь пейпер: стихотворение и проза (второй набор)' },
        questionIds: ['p1-hardy-thrush', 'p1-mansfield-garden'],
        minutes: 75,
      },
      {
        id: 'p1-set-drama-nonfiction-2',
        title: { en: 'Full paper: drama and non-fiction extracts (second set)', ru: 'Весь пейпер: драма и нон-фикшн (второй набор)' },
        questionIds: ['p1-ibsen-doll', 'p1-wollstonecraft-rights'],
        minutes: 75,
      },
      {
        id: 'p1-one-extract-45',
        title: { en: 'One extract (practice)', ru: 'Один отрывок (тренировка)' },
        questionIds: ['p1-keats-nightingale'],
        minutes: 45,
      },
      {
        id: 'p1-one-extract-30',
        title: { en: 'One short poem (quick practice)', ru: 'Одно короткое стихотворение (быстрая тренировка)' },
        questionIds: ['p1-owen-dulce'],
        minutes: 30,
      },
    ],
  },
  {
    subject: 'eng',
    paper: 'P2',
    title: { en: 'Paper 2: comparative essay', ru: 'Paper 2: сравнительное эссе' },
    minutes: 105,
    marks: 25,
    structure: {
      en: 'One essay that compares two works you have studied (not the works used for the Individual Oral). Choose one of four general prompts. Five criteria, each marked 0–5, as in the school materials: A understanding of the prompt and both works; B1 authorial choices; B2 comparison; C focus and organisation; D language.',
      ru: 'Одно эссе, которое сравнивает два изученных произведения (не те, что использовались для Individual Oral). Выберите один из четырёх общих вопросов. Пять критериев, каждый оценивается от 0 до 5, как в материалах школы: A понимание задания и обоих произведений; B1 авторские решения; B2 сравнение; C фокус и организация; D язык.',
    },
    strategy: {
      en: 'The paper is 105 minutes. 10 minutes: read the prompt, choose the two works, write a thesis and three comparison points. 80 minutes: write, with one comparison point per paragraph and a comparison in every paragraph. 10 minutes: check the thesis, the quotations and the conclusion. 5 minutes: spare. Do not write a summary of either work: each paragraph compares the choices the two writers make. You type in the exam, so practise typing an essay against the 80-minute clock.',
      ru: 'Пейпер длится 105 минут. 10 минут: прочитать задание, выбрать два произведения, написать тезис и три пункта сравнения. 80 минут: писать, один пункт сравнения на абзац и сравнение в каждом абзаце. 10 минут: проверить тезис, цитаты и вывод. 5 минут — запас. Не пишите пересказ ни одного из произведений: каждый абзац сравнивает решения двух авторов. На экзамене вы печатаете, поэтому тренируйте печать эссе на 80 минут.',
    },
    criteria: {
      en: 'A (0–5) · B1 (0–5) · B2 (0–5) · C (0–5) · D (0–5). Total 25, as in the school materials. The IB papers from May 2023 to November 2025 print 30 marks.',
      ru: 'A (0–5) · B1 (0–5) · B2 (0–5) · C (0–5) · D (0–5). Всего 25, как в материалах школы. Вопросы IB за май 2023 — ноябрь 2025 печатаются на 30 баллов.',
    },
    commandTerms: ['Compare', 'Discuss', 'Explore', 'Evaluate'],
    asked: { en: 'What the exam asks, from 52 prompts in 13 papers (May 2023 to November 2025): the main concept is most often representation (17 prompts), then creativity (9) and transformation (8). Communication, identity, perspective and culture lead less often, but culture is the usual background (17 times as a second concept). The commands are mostly discuss (19), how-questions without a separate verb (12) and compare (9). Most prompts ask for a technique together with its effect (16), or for a claim to be tested against two works. No prompt names a form or a pair of works: you choose any two works you have studied. The IB paper is 1 h 45 min for 30 marks; the school mock uses 25 (see the criteria).', ru: 'Что спрашивают: 52 вопроса из 13 пейперов (май 2023 — ноябрь 2025). Главное понятие чаще всего — репрезентация (17 вопросов), затем творчество (9) и трансформация (8). Коммуникация, идентичность, перспектива и культура встречаются реже, но культура обычно служит фоном (17 раз как второе понятие). Команды: discuss (19), вопросы how без отдельного глагола (12) и compare (9). Большинство вопросов просит приём вместе с его эффектом (16) или проверку утверждения на двух произведениях. Ни один вопрос не называет форму или пару произведений: вы выбираете любые два изученных. Пейпер IB — 1 ч 45 мин, 30 баллов; в моке школы — 25 (см. критерии).' },
    timedSets: [
      {
        id: 'p2-full',
        title: { en: 'Full paper: one essay', ru: 'Весь пейпер: одно эссе' },
        questionIds: ['p2-q01', 'p2-q02', 'p2-q03', 'p2-q04'],
        minutes: 105,
      },
      {
        id: 'p2-essay-80',
        title: { en: 'Writing only (plan already done)', ru: 'Только письмо (план уже готов)' },
        questionIds: ['p2-q05'],
        minutes: 80,
      },
      {
        id: 'p2-plan-10',
        title: { en: 'Planning only', ru: 'Только план' },
        questionIds: ['p2-q06'],
        minutes: 10,
      },
    ],
  },
];
