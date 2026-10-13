import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-organisation-1',
    subject: 'eng',
    topicIds: ['p2-organisation'],
    paper: 'P2',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'A student ends an essay with this conclusion: "In conclusion, both narrators hide information from the reader, and the reader trusts them less at the end. Both works use silence in different ways." The essay answers this prompt: "Compare how two works present a narrator who withholds information from the reader. To what extent does the withholding change the reader\'s trust?" Suggest a rewritten conclusion that answers the prompt in new words, makes one judgement about the effect, and does not summarise the paragraphs.',
      ru: 'Ученик заканчивает эссе таким выводом: «In conclusion, both narrators hide information from the reader, and the reader trusts them less at the end. Both works use silence in different ways.» Эссе отвечает на задание: «Compare how two works present a narrator who withholds information from the reader. To what extent does the withholding change the reader\'s trust?» Предложите переписанный вывод, который отвечает на задание новыми словами, делает одно суждение о действии сокрытия и не пересказывает абзацы.',
    },
    markscheme: {
      en: '1 mark: the conclusion answers the prompt directly with a judgement, for example that the withholding changes trust only through its motive. 1 mark: it states a comparison or a new point in new words, not a repeat of the summary sentence. 1 mark: it does not restart with "In conclusion", does not list the paragraphs, and ends on the effect rather than on a restatement.',
      ru: '1 балл: вывод прямо отвечает на задание суждением, например: сокрытие меняет доверие только через мотив. 1 балл: вывод называет сравнение или новую мысль новыми словами, а не повторяет итоговую фразу. 1 балл: вывод не начинается с «In conclusion», не перечисляет абзацы и заканчивается эффектом, а не пересказом.',
    },
    model: {
      en: 'To a large extent, the withholding changes the reader\'s trust, but only through its motive: silence that protects others earns trust, while silence born of fear takes away the reader\'s belief in the narrator. The reader\'s trust therefore depends less on what is hidden than on the reason for hiding it.',
      ru: 'В целом сокрытие сильно меняет доверие читателя, но лишь через мотив: молчание, которое защищает других, вызывает доверие, а молчание из страха отнимает веру в рассказчика. Поэтому доверие читателя зависит меньше от того, что скрыто, и больше от причины, по которой это скрыто.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-organisation-2',
    subject: 'eng',
    topicIds: ['p2-organisation'],
    paper: 'P2',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'A student plans a Paper 2 essay in four parts: (a) a conclusion that answers the prompt in new words; (b) an introduction that names both works and states one thesis; (c) body paragraph 1, the first comparison; (d) body paragraph 2, the strongest comparison. Outline the order in which the four parts should appear, and give one reason for the position of the strongest comparison.',
      ru: 'Ученик планирует эссе Paper 2 из четырёх частей: (a) вывод, который отвечает на задание новыми словами; (b) введение, которое называет оба произведения и формулирует один тезис; (c) абзац 1, первое сравнение; (d) абзац 2, самое сильное сравнение. Опишите порядок, в котором должны идти эти части, и назовите одну причину, по которой самое сильное сравнение стоит на своём месте.',
    },
    markscheme: {
      en: '1 mark: the order is b, c, d, a: introduction, first comparison, strongest comparison, conclusion. 1 mark: a reason, for example that the strongest comparison comes last so that the essay builds to its point and the conclusion can answer the prompt from it.',
      ru: '1 балл: порядок b, c, d, a: введение, первое сравнение, самое сильное сравнение, вывод. 1 балл: причина, например: самое сильное сравнение стоит последним, чтобы эссе вело к своей точке, а вывод мог опереться на неё.',
    },
    model: {
      en: 'b, c, d, a. The strongest comparison comes last among the body paragraphs, so the argument builds to its most important point, and the conclusion can answer the prompt from that point.',
      ru: 'b, c, d, a. Самое сильное сравнение стоит последним среди абзацев, поэтому аргумент строится к главной мысли, а вывод отвечает на задание, опираясь на неё.',
    },
    origin: 'original',
    minutes: 3,
  },
];
