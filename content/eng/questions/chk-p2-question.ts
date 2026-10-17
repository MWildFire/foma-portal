import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-question-1',
    subject: 'eng',
    topicIds: ['p2-question'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify the command term, the judgement phrase and two key words in this prompt, and say in a few words what each one asks you to do: "Discuss how two works show a place that protects its people and also limits them. To what extent does the writer\'s choice of setting make the reader feel that limit?"',
      ru: 'Укажите командное слово (command term), фразу суждения и два ключевых слова в этом задании и кратко скажите, что требует каждое из них: «Discuss how two works show a place that protects its people and also limits them. To what extent does the writer\'s choice of setting make the reader feel that limit?»',
    },
    markscheme: {
      en: '1 mark: the command term is "discuss", which asks for a balanced review with a supported conclusion. 1 mark: the judgement phrase is "to what extent", which asks for a degree, not a yes or no. 1 mark: two key words (for example "protects" and "limits", or "setting" and "reader"), each with what it asks the answer to define or trace.',
      ru: '1 балл: командное слово «discuss» требует взвешенного обзора с обоснованным выводом. 1 балл: фраза суждения «to what extent» требует степени, а не ответа «да» или «нет». 1 балл: два ключевых слова (например, «protects» и «limits» или «setting» и «reader»), и для каждого сказано, что ответ должен определить или проследить.',
    },
    model: {
      en: 'Command term: "discuss", a balanced review with a supported conclusion. Judgement phrase: "to what extent", so the answer must say how far the claim holds, for example "largely, but not entirely". Key words: "protects" and "limits" set up the two sides that each work must show; "setting" is the technique the prompt asks about.',
      ru: 'Командное слово: «discuss», взвешенный обзор с обоснованным выводом. Фраза суждения: «to what extent», поэтому ответ должен сказать, насколько утверждение верно, например «в основном, но не полностью». Ключевые слова: «protects» и «limits» задают две стороны, которые должно показать каждое произведение; «setting» — приём, о котором спрашивает задание.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-question-2',
    subject: 'eng',
    topicIds: ['p2-question'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'This opening sentence answers a prompt about two works: "Both works tell the story of a child who leaves home and then returns." Explain which question the sentence answers and what an examiner would miss in it. Then write a possible replacement sentence using explicitly invented details for the prompt "Compare how two works show the cost of returning home."',
      ru: 'Это вступительное предложение отвечает на задание о двух произведениях: «Both works tell the story of a child who leaves home and then returns.» Объясните, на какой вопрос отвечает это предложение и что упустит экзаменатор. Затем напишите возможное предложение-замену с явно вымышленными деталями для задания «Compare how two works show the cost of returning home» (Сравните, как два произведения показывают цену возвращения домой).',
    },
    markscheme: {
      en: '1 mark: the sentence answers "what happens" (the plot), not "how the works show" the cost. 1 mark: the sentence identifies a shared plot pattern, but does not yet analyse its presentation or the cost of return. A similarity is a comparison too; a difference is not compulsory in every sentence. 1 mark: the replacement names a specific cost of returning and uses a comparison word. 1 mark: the replacement names a technique in each work and says what it shows about the cost.',
      ru: '1 балл: предложение отвечает на вопрос «что происходит» (сюжет), а не на вопрос, как произведения показывают цену. 1 балл: предложение называет общий сюжетный ход, но пока не анализирует его изображение и цену возвращения. Сходство тоже является сравнением; различие не обязательно в каждом предложении. 1 балл: замена называет конкретную цену возвращения и содержит слово сравнения. 1 балл: замена называет приём в каждом произведении и говорит, что он показывает о цене.',
    },
    model: {
      en: 'The sentence answers the question "what happens?", so it summarises the plot of both works. It offers a limited similarity, but no analysis of the cost or how it is presented. Hypothetical replacement: "Whereas the first work shows the cost of return through a family meal that falls silent, the second shows it through a door that is never opened, so both show that home is changed by the return, not restored by it."',
      ru: 'Предложение отвечает на вопрос «что происходит?», поэтому пересказывает сюжет обоих произведений. В нём есть ограниченное сходство, но нет анализа цены возвращения и того, как она изображена. Условная замена: «Тогда как в первом произведении цена возвращения видна через семейный ужин, который замолкает, во втором она видна через дверь, которую так и не открывают, поэтому оба произведения показывают: дом меняется от возвращения, а не восстанавливается им.»',
    },
    origin: 'original',
    minutes: 6,
  },
];
