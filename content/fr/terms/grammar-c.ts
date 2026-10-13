import type { FrTerm } from '../types';

// Grammar C (units G6 and G7): relative pronouns, logical and sequence connectors, concession, comparatives,
// superlatives, negation and agreement of the past participle. 15 grammar points, ids gr-… (kebab-case).
export const terms: FrTerm[] = [
  // ---- relative pronouns (G6) ----
  {
    id: 'gr-qui',
    term: { en: 'relative pronoun: qui', ru: 'относительное местоимение «qui»', fr: 'le pronom relatif « qui »' },
    def: {
      en: 'replaces the subject of the following clause (a person or a thing); it never changes form.',
      ru: 'заменяет подлежащее следующей части предложения (человека или предмет); форма не меняется.',
    },
    example: {
      en: 'It is the neighbour who lives opposite us.',
      ru: 'Это соседка, которая живёт напротив нас.',
      fr: "C'est la voisine qui habite en face de chez nous.",
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-que',
    term: { en: 'relative pronoun: que', ru: 'относительное местоимение «que»', fr: 'le pronom relatif « que »' },
    def: {
      en: 'replaces the direct object of the following verb; it is shortened before a vowel.',
      ru: 'заменяет прямое дополнение следующего глагола; перед гласной сокращается.',
    },
    example: {
      en: 'The novel that I am reading at the moment is gripping.',
      ru: 'Роман, который я сейчас читаю, захватывающий.',
      fr: 'Le roman que je lis en ce moment est passionnant.',
    },
    pitfall: {
      en: 'Do not use « que » before a verb that needs a subject: write « le garçon qui habite », not « le garçon que habite ».',
      ru: 'Не ставьте «que» перед глаголом, которому нужно подлежащее: «le garçon qui habite», а не «le garçon que habite».',
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-dont',
    term: { en: 'relative pronoun: dont', ru: 'относительное местоимение «dont»', fr: 'le pronom relatif « dont »' },
    def: {
      en: "replaces a phrase introduced by 'of' or 'about'; it also means 'whose'.",
      ru: 'заменяет группу с предлогом (of, about) после глагола или прилагательного; также значит «чей».',
    },
    example: {
      en: 'The film you told me about came out yesterday.',
      ru: 'Фильм, о котором ты мне рассказывал, вышел вчера.',
      fr: "Le film dont tu m'as parlé est sorti hier.",
    },
    pitfall: {
      en: 'Do not put a preposition before « dont »: say « la personne à qui je pense » (people) or « le sujet auquel je pense » (things).',
      ru: 'Не ставьте предлог перед «dont»: «la personne à qui je pense» (о людях) или «le sujet auquel je pense» (о предметах).',
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-ou',
    term: { en: 'relative pronoun: où', ru: 'относительное местоимение «où»', fr: 'le pronom relatif « où »' },
    def: {
      en: "replaces a noun of place or time and means 'where' or 'when' (in which, at which).",
      ru: 'заменяет существительное места или времени и значит «где» или «когда» (in which, at which).',
    },
    example: {
      en: 'The restaurant where we ate yesterday was excellent.',
      ru: 'Ресторан, где мы ели вчера, был отличным.',
      fr: 'Le restaurant où nous avons mangé hier était excellent.',
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },

  // ---- logical and sequence connectors, concession (G6) ----
  {
    id: 'gr-connecteurs-logiques',
    term: { en: 'logical connectors', ru: 'логические связки', fr: 'les connecteurs logiques' },
    def: {
      en: 'words that link two ideas to show a result, a contrast or an explanation.',
      ru: 'слова, которые связывают две мысли и показывают результат, противопоставление или объяснение.',
    },
    example: {
      en: 'It rained all day; nevertheless, we went for a walk.',
      ru: 'Весь день шёл дождь; тем не менее мы пошли гулять.',
      fr: 'Il a plu toute la journée ; pourtant, nous avons fait une promenade.',
    },
    pitfall: {
      en: 'Put a comma after a connector that opens a sentence: « Pourtant, il… », not « Pourtant il… ».',
      ru: 'После связки, которая открывает предложение, ставьте запятую: «Pourtant, il…», а не «Pourtant il…».',
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-connecteurs-chronologiques',
    term: { en: 'sequence connectors', ru: 'связки последовательности', fr: 'les connecteurs chronologiques' },
    def: {
      en: 'words that order the steps of a text or an event: first, then, finally.',
      ru: 'слова, которые упорядочивают шаги текста или события: сначала, затем, наконец.',
    },
    example: {
      en: 'First, I read the text; then I answer the questions; finally, I reread my answer.',
      ru: 'Сначала я читаю текст; затем отвечаю на вопросы; наконец, перечитываю свой ответ.',
      fr: "D'abord, je lis le texte ; ensuite, je réponds aux questions ; enfin, je relis ma réponse.",
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-bien-que',
    term: { en: 'concession: bien que', ru: 'уступка: bien que', fr: 'la conjonction « bien que »' },
    def: {
      en: "introduces a contrast or concession ('although'); the verb after it is in the subjunctive.",
      ru: 'вводит уступку («although»); глагол в придаточной части стоит в сослагательном наклонении (subjunctive).',
    },
    example: {
      en: 'Although the road is long, we will arrive before noon.',
      ru: 'Хотя дорога длинная, мы приедем до полудня.',
      fr: 'Bien que la route soit longue, nous arriverons avant midi.',
    },
    pitfall: {
      en: 'Do not use the indicative after « bien que »: write « bien que la route soit longue », not « bien que la route est longue ».',
      ru: 'После «bien que» не ставьте изъявительное наклонение: «bien que la route soit longue», а не «bien que la route est longue».',
    },
    syllabus: 'G6.relatives-connectors',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },

  // ---- comparison, negation and agreement (G7) ----
  {
    id: 'gr-comparatif',
    term: { en: 'comparative', ru: 'сравнительная степень', fr: 'le comparatif' },
    def: {
      en: "compares two things with 'more', 'less' or 'as ... as'; the second item follows 'than' or 'as'.",
      ru: 'сравнивает два предмета с помощью «больше», «меньше» или «так же … как»; второй предмет стоит после «чем» или «как».',
    },
    example: {
      en: 'This film is more interesting than the book.',
      ru: 'Этот фильм интереснее, чем книга.',
      fr: 'Ce film est plus intéressant que le livre.',
    },
    pitfall: {
      en: 'Compare with « que », not « de »: « plus grand que mon frère », not « plus grand de mon frère ».',
      ru: 'Сравнивайте с «que», а не с «de»: «plus grand que mon frère», а не «plus grand de mon frère».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-comparatif-quantite',
    term: { en: 'comparative of quantity', ru: 'сравнение количества', fr: 'le comparatif de quantité' },
    def: {
      en: "expresses an amount: more or fewer of something, with 'de' (not 'que') before a number.",
      ru: 'выражает количество: больше или меньше чего-либо, с предлогом «de» (а не «que») перед числом.',
    },
    example: {
      en: 'There are more than twenty students in the class.',
      ru: 'В классе больше двадцати учеников.',
      fr: 'Il y a plus de vingt élèves dans la classe.',
    },
    pitfall: {
      en: 'Before a number, write « plus de vingt », not « plus que vingt ».',
      ru: 'Перед числом пишите «plus de vingt», а не «plus que vingt».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-meilleur-mieux',
    term: { en: 'irregular comparatives', ru: 'неправильные сравнительные формы', fr: 'meilleur et mieux (comparatif irrégulier)' },
    def: {
      en: "irregular comparative forms: an adjective (better, from 'good') and an adverb (better, from 'well').",
      ru: 'неправильные сравнительные формы: прилагательное (от «хороший», лучший) и наречие (от «хорошо», лучше).',
    },
    example: {
      en: 'This version is better, and I understand it better.',
      ru: 'Эта версия лучше, и я понимаю её лучше.',
      fr: 'Cette version est meilleure, et je la comprends mieux.',
    },
    pitfall: {
      en: 'Never write « plus bon » or « plus bien »: say « meilleur » (adjective) and « mieux » (adverb).',
      ru: 'Никогда не пишите «plus bon» или «plus bien»: говорите «meilleur» (прилагательное) и «mieux» (наречие).',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-superlatif',
    term: { en: 'superlative', ru: 'превосходная степень', fr: 'le superlatif' },
    def: {
      en: "the most or the least of a group: definite article + 'more' or 'less' + adjective.",
      ru: 'высшая или низшая степень качества в группе: определённый артикль + «больше» или «меньше» + прилагательное.',
    },
    example: {
      en: 'It is the funniest film of the season.',
      ru: 'Это самый смешной фильм сезона.',
      fr: "C'est le film le plus drôle de la saison.",
    },
    pitfall: {
      en: 'The article agrees with the noun: « la plus belle ville », never « le plus belle ville ».',
      ru: 'Артикль согласуется с существительным: «la plus belle ville», а не «le plus belle ville».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-ne-pas',
    term: { en: 'negation: ne … pas', ru: 'отрицание «ne … pas»', fr: 'la négation « ne … pas »' },
    def: {
      en: "makes a verb negative with two parts: one before the verb and one after it, meaning 'not'.",
      ru: 'делает глагол отрицательным двумя частями: первая стоит перед глаголом, вторая после него (значит «не»).',
    },
    example: {
      en: 'I do not understand this question.',
      ru: 'Я не понимаю этот вопрос.',
      fr: 'Je ne comprends pas cette question.',
    },
    pitfall: {
      en: 'In writing, always use both parts: « je ne comprends pas », not « je comprends pas ».',
      ru: 'В письменной речи используйте обе части: «je ne comprends pas», а не «je comprends pas».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-ne-jamais-plus',
    term: { en: 'negations: never, no longer', ru: 'отрицания «ne … jamais» и «ne … plus»', fr: 'les négations « ne … jamais » et « ne … plus »' },
    def: {
      en: "two-part negations that wrap the verb in the same way as 'not', meaning 'never' and 'no longer'.",
      ru: 'отрицания из двух частей, которые стоят вокруг глагола так же, как «не»: «никогда» и «больше не».',
    },
    example: {
      en: 'He never eats meat.',
      ru: 'Он никогда не ест мясо.',
      fr: 'Il ne mange jamais de viande.',
    },
    pitfall: {
      en: "In the passé composé, « jamais » and « plus » go after the auxiliary: « Je n'ai jamais vu ce film », « Il n'a plus fumé ».",
      ru: 'В passé composé «jamais» и «plus» ставятся после вспомогательного глагола: «Je n\'ai jamais vu ce film», «Il n\'a plus fumé».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-rien-personne',
    term: { en: 'negative pronouns: rien, personne', ru: 'отрицательные местоимения «rien» и «personne»', fr: 'les pronoms négatifs « rien » et « personne »' },
    def: {
      en: "nothing and nobody; in the past tense 'rien' goes after the auxiliary and 'personne' after the participle.",
      ru: 'ничего и никто; в прошедшем времени «rien» стоит после вспомогательного глагола, а «personne» — после причастия.',
    },
    example: {
      en: 'I did not understand anything in the lesson.',
      ru: 'Я ничего не понял на уроке.',
      fr: "Je n'ai rien compris à la leçon.",
    },
    pitfall: {
      en: "Write « Je n'ai vu personne », not « Je n'ai personne vu ».",
      ru: 'Пишите «Je n\'ai vu personne», а не «Je n\'ai personne vu».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
  {
    id: 'gr-ni-ni',
    term: { en: 'negation: ni … ni', ru: 'отрицание «ni … ni»', fr: 'la négation « ni … ni »' },
    def: {
      en: "means 'neither … nor'; the verb keeps its negative, and nouns after 'ni' drop any indefinite or partitive article.",
      ru: 'значит «ни … ни»; глагол сохраняет отрицание, а существительные после «ni» теряют неопределённый или партитивный артикль.',
    },
    example: {
      en: 'I have neither a brother nor a sister.',
      ru: 'У меня нет ни брата, ни сестры.',
      fr: "Je n'ai ni frère ni sœur.",
    },
    pitfall: {
      en: 'Keep « ne » before the verb: « Il ne mange ni viande ni poisson. »',
      ru: 'Сохраняйте «ne» перед глаголом: «Il ne mange ni viande ni poisson».',
    },
    syllabus: 'G7.comparison-negation-agreement',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: "Authors' French B material (2026)" },
  },
];
