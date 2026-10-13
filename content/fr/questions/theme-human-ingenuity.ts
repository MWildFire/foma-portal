import type { FrQuestion } from '../types';

// Theme 3 (Human ingenuity): two quick checks. The French item is in prompt.fr; prompt.en and prompt.ru give the task.
export const questions: FrQuestion[] = [
  {
    id: 't3-q1',
    subject: 'fr',
    topicIds: ['theme-human-ingenuity'],
    paper: 'P1',
    section: 'T3',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the correct word to complete the sentence (A, B or C).',
      ru: 'Выберите правильное слово, чтобы дополнить предложение (A, B или C).',
      fr: "Complétez la phrase : « La technologie ___ permet de travailler à distance sans difficulté. »\nA) actuellement\nB) actuelle\nC) actuels",
    },
    markscheme: {
      en: "1 mark: B, actuelle. Actuel is an adjective, so it agrees in gender and number with the feminine singular noun la technologie. A is the adverb actuellement (currently), which cannot describe a noun, and C is plural, which does not agree with the singular noun.",
      ru: "1 балл: B, actuelle. Actuel — прилагательное, поэтому оно согласуется с существительным la technologie в женском роде и в единственном числе. A — наречие actuellement («в настоящее время»), которое не может описывать существительное, а C стоит во множественном числе и не согласуется с существительным в единственном числе.",
    },
    answer: 'B',
    origin: 'original',
    minutes: 1,
  },
  {
    id: 't3-q2',
    subject: 'fr',
    topicIds: ['theme-human-ingenuity'],
    paper: 'P2',
    section: 'T3',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the best meaning of the expression in the sentence (A, B or C).',
      ru: 'Выберите лучшее значение выражения в предложении (A, B или C).',
      fr: "Lisez la phrase : « Les chercheurs ont mis au point un vaccin en moins d'un an. » Que veut dire « mettre au point » ?\nA) développer et perfectionner\nB) abandonner\nC) reporter",
    },
    markscheme: {
      en: "1 mark: A, to develop and perfect. Mettre au point means to develop something until it works well, so the researchers produced a vaccine that works. B means to abandon and C means to postpone; neither fits a sentence about a finished result.",
      ru: "1 балл: A, разработать и довести до рабочего состояния. Mettre au point означает доработать что-то до тех пор, пока оно хорошо работает, поэтому исследователи создали рабочую вакцину. B значит «отказаться», C значит «отложить»; ни один из этих вариантов не подходит к фразе о готовом результате.",
    },
    answer: 'A',
    origin: 'original',
    minutes: 1,
  },
];
