import type { FrQuestion } from '../types';

// Quick checks for the two grammar topics of Grammar C (G6 relatives and connectors, G7 comparison, negation and
// agreement). Each one has three options, A, B or C, and exactly one correct answer.
export const questions: FrQuestion[] = [
  {
    id: 'grammar-relatives-connectors-q1',
    subject: 'fr',
    topicIds: ['grammar-relatives-connectors'],
    paper: 'P1',
    section: 'G6',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Choose the correct relative pronoun to complete the sentence: La voiture … mon père a achetée est rouge. A) qui B) que C) dont',
      ru: 'Выберите правильное относительное местоимение, чтобы дополнить предложение: La voiture … mon père a achetée est rouge. A) qui B) que C) dont',
      fr: 'Complétez la phrase avec le pronom relatif correct : La voiture … mon père a achetée est rouge. A) qui B) que C) dont',
    },
    markscheme: {
      en: 'Answer: B. « Que » is the direct object: my father bought the car. « Qui » replaces a subject here, not the car. « Dont » needs a verb that takes « de », such as « parler de »; « acheter » does not take it. Because « que » stands before « a achetée », the participle agrees with it: feminine singular « achetée ».',
      ru: 'Ответ: B. «Que» — прямое дополнение: отец купил машину. «Qui» здесь заменяет подлежащее, а не машину. «Dont» нужен с глаголом, который требует предлога «de» (например, «parler de»); «acheter» так не строится. Так как «que» стоит перед «a achetée», причастие согласуется с ним: женский род, единственное число, «achetée».',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'grammar-relatives-connectors-q2',
    subject: 'fr',
    topicIds: ['grammar-relatives-connectors'],
    paper: 'P2',
    section: 'G6',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'In the sentence « Il faisait froid ; pourtant, nous sommes allés nager. », what does « pourtant » express? A) a consequence B) a cause C) a contrast',
      ru: 'Что выражает слово «pourtant» в предложении « Il faisait froid ; pourtant, nous sommes allés nager. »? A) следствие B) причину C) противопоставление',
      fr: 'Dans la phrase « Il faisait froid ; pourtant, nous sommes allés nager. », le mot « pourtant » exprime : A) une conséquence B) une cause C) une opposition',
    },
    markscheme: {
      en: 'Answer: C. « Pourtant » means « nevertheless »: the cold did not stop us from going swimming, so the connector introduces a contrast. A consequence would use « donc » or « par conséquent », and a cause would use « parce que » or « car ».',
      ru: 'Ответ: C. «Pourtant» значит «тем не менее»: холод не помешал нам пойти плавать, значит, связка выражает противопоставление. Следствие передают словами «donc» или «par conséquent», причину — «parce que» или «car».',
    },
    answer: 'C',
    origin: 'original',
  },
  {
    id: 'grammar-comparison-negation-agreement-q1',
    subject: 'fr',
    topicIds: ['grammar-comparison-negation-agreement'],
    paper: 'P1',
    section: 'G7',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Choose the correct comparative to complete the sentence: Ce médicament marche … que l'ancien. A) mieux B) meilleur C) plus bon",
      ru: "Выберите правильную сравнительную форму, чтобы дополнить предложение: Ce médicament marche … que l'ancien. A) mieux B) meilleur C) plus bon",
      fr: "Complétez la phrase avec la forme correcte : Ce médicament marche … que l'ancien. A) mieux B) meilleur C) plus bon",
    },
    markscheme: {
      en: 'Answer: A. « Marcher » is a verb, so it needs an adverb, and « mieux » is the irregular comparative of « bien ». « Meilleur » is an adjective and cannot describe a verb. « Plus bon » is not a French comparative at all: the comparative of « bon » is « meilleur ».',
      ru: 'Ответ: A. «Marcher» — глагол, поэтому нужно наречие: «mieux» — неправильная сравнительная форма от «bien». «Meilleur» — прилагательное и не может описывать глагол. «Plus bon» не является французской сравнительной формой: сравнительная форма от «bon» — «meilleur».',
    },
    answer: 'A',
    origin: 'original',
  },
  {
    id: 'grammar-comparison-negation-agreement-q2',
    subject: 'fr',
    topicIds: ['grammar-comparison-negation-agreement'],
    paper: 'P2',
    section: 'G7',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'What does the sentence « Elle ne travaille plus ici. » mean? A) She has just started working here. B) She has stopped working here. C) She works here every day.',
      ru: 'Что значит фраза « Elle ne travaille plus ici. »? A) Она только что начала работать здесь. B) Она перестала работать здесь. C) Она работает здесь каждый день.',
      fr: 'Que signifie la phrase « Elle ne travaille plus ici. » ? A) Elle vient de commencer à travailler ici. B) Elle a arrêté de travailler ici. C) Elle travaille ici tous les jours.',
    },
    markscheme: {
      en: 'Answer: B. « Ne … plus » means « no longer »: she worked here before and has stopped. « Vient de commencer » says the opposite (she has just begun), and « tous les jours » is not implied by « ne … plus ».',
      ru: 'Ответ: B. «Ne … plus» значит «больше не»: она раньше работала здесь и перестала. «Vient de commencer» означает обратное (она только начала), а «tous les jours» из «ne … plus» не следует.',
    },
    answer: 'B',
    origin: 'original',
  },
];
