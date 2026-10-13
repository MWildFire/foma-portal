import type { FrQuestion } from '../types';

// Paper 1, text types A: blog post, diary entry and informal e-mail. Each text type has one P1 task (with a model answer)
// and two quick checks. Ids: p1-<type> for the task, p1-<type>-q1 and p1-<type>-q2 for the quick checks.

export const questions: FrQuestion[] = [
  {
    id: 'p1-blog',
    subject: 'fr',
    topicIds: ['text-blog'],
    paper: 'P1',
    section: 'T1',
    marks: 30,
    command: 'Write',
    minutes: 40,
    prompt: {
      en: 'You keep a personal blog, and your readers follow your life. Write a blog post of 250 to 400 words about something that has changed your identity: a language, a culture, your family or a move. In your post, describe an experience that changed how you see yourself, explain how your family, your friends or your community have shaped your identity, and give your opinion: is identity fixed, or can it change?',
      ru: 'Вы ведёте личный блог, и ваши читатели следят за вашей жизнью. Напишите пост для блога объёмом 250–400 слов о том, что изменило вашу идентичность: о языке, культуре, семье или переезде. В посте опишите опыт, который изменил ваш взгляд на себя, объясните, как семья, друзья или сообщество повлияли на вашу идентичность, и выскажите мнение: фиксирована ли идентичность или она может меняться?',
      fr: 'Vous tenez un blog personnel, et vos lecteurs suivent votre vie. Écrivez un article de blog (250 à 400 mots) sur ce qui a changé votre identité : une langue, une culture, votre famille ou un déménagement. Dans votre article, racontez une expérience qui a changé votre façon de vous voir, expliquez comment votre famille, vos amis ou votre communauté ont influencé votre identité, et donnez votre avis : l\'identité est-elle fixe ou peut-elle changer ?',
    },
    markscheme: {
      en: 'Criterion A, Language (12 marks): accurate tenses (passé composé for the event, imparfait for the background, présent for the opinion), correct agreements, a range of structures (relative clauses, comparisons, comme si) and varied vocabulary for identity. Criterion B, Message (12 marks): all three content points are developed in order; the blog form is clear (title, date line, call to react, signature); tu is used with the readers throughout. Criterion C, Conceptual understanding (6 marks): the text shows that identity is shaped by family, community and experience and is not fixed; the opinion is reasoned, not a list of facts.',
      ru: 'Критерий A, Язык (12 баллов): точные времена (passé composé для события, imparfait для фона, présent для мнения), правильное согласование, разнообразные конструкции (относительные предложения, сравнения, comme si) и богатая лексика по теме идентичности. Критерий B, Сообщение (12 баллов): все три пункта раскрыты по порядку; форма блога понятна (заголовок, строка с датой, призыв ответить, подпись); обращение на tu выдержано до конца. Критерий C, Концептуальное понимание (6 баллов): текст показывает, что идентичность формируют семья, сообщество и опыт и что она не фиксирована; мнение обосновано, а не сводится к списку фактов.',
    },
    model: {
      en: 'Full marks for Message: all three content points are developed in order, the blog form is clear (title, date line, call to react and a first-name sign-off), and tu is kept with the readers. Language is accurate and varied: passé composé for the event and imparfait for the background, agreements such as « sentie » and « exclue », opinion phrases and rhetorical questions. Conceptual understanding is shown by the idea that identity is built with other people and can change over time.',
      ru: 'Полный балл за Message: все три пункта раскрыты по порядку, форма блога ясна (заголовок, строка с датой, призыв ответить и подпись именем), обращение на tu выдержано. Язык точный и разнообразный: passé composé для события и imparfait для фона, согласование «sentie» и «exclue», фразы мнения и риторические вопросы. Концептуальное понимание видно из идеи, что идентичность складывается с другими людьми и может меняться со временем.',
      fr: `Qui suis-je quand je parle breton ?
Publié le 12 octobre 2026

Salut à tous ! Aujourd'hui, je te raconte une histoire un peu personnelle. Pendant longtemps, j'ai cru être parisienne, sans racines particulières. Puis un week-end a tout changé.

L'été dernier, nous sommes allés dans le Finistère pour l'anniversaire de ma grand-mère. Il faisait beau, et toute la famille était dans le jardin. Pendant le repas, elle a parlé breton avec mes cousins, et je n'ai compris que quelques mots. Je me suis sentie exclue, comme si une partie de ma famille m'échappait. Le soir, mon oncle m'a montré un fest-noz, une fête traditionnelle avec des danses en cercle. Les musiciens jouaient de la bombarde, et les enfants tournaient au centre de la salle. Personne ne m'a demandé d'où je venais : on m'a simplement appris les pas.

Depuis, je prends des cours de breton en ligne, et ma famille m'encourage chaque semaine. Chaque dimanche, je téléphone à ma grand-mère, et nous parlons quelques minutes en breton, même si mes phrases sont très simples. Selon moi, notre identité ne vient pas seulement de nos origines : elle se construit avec les gens qui nous entourent. Ma grand-mère m'a transmis la langue, mais ce sont mes cousins qui m'ont donné l'envie de la parler. Pour moi, la langue est un lien entre les générations.

Mais l'identité est-elle fixe ? Je ne le pense pas. D'abord, j'ai cru qu'il fallait choisir entre Paris et la Bretagne. Ensuite, j'ai compris que l'on peut être les deux, et que chaque expérience ajoute une nouvelle couche à notre personnalité. Mes amis parisiens me taquinent parfois en disant que je suis « un peu bretonne », et cela me fait sourire. Qui n'a jamais eu l'impression de changer en changeant de lieu ?

Et toi, qu'est-ce qui t'a changé ? Une langue, une ville, une rencontre ? Dis-le-moi en commentaire, je lirai tout !

À bientôt,
Juliette`,
    },
    origin: 'original',
  },
  {
    id: 'p1-blog-q1',
    subject: 'fr',
    topicIds: ['text-blog'],
    paper: 'P1',
    section: 'T1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Which phrase suits a personal blog post for readers who follow you?\nA) « Je vous prie d'agréer… »\nB) « Salut à tous ! »\nC) « Cordialement, »",
      ru: "Какая формула подходит личному посту в блоге, который читают ваши подписчики?\nA) « Je vous prie d'agréer… »\nB) « Salut à tous ! »\nC) « Cordialement, »",
      fr: "Quelle formule convient le mieux à un article de blog personnel ?\nA) « Je vous prie d'agréer… »\nB) « Salut à tous ! »\nC) « Cordialement, »",
    },
    markscheme: {
      en: 'Answer B. « Salut à tous ! » is friendly and informal, which suits a blog read by people who follow the author. A is a formal closing for official letters, and C is a neutral closing for letters, so neither fits a personal post.',
      ru: 'Ответ B. «Salut à tous !» звучит дружелюбно и неформально, что подходит блогу, который читают подписчики автора. A — официальная формула для официальных писем, C — нейтральная финальная фраза письма; ни одна из них не подходит личному посту.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'p1-blog-q2',
    subject: 'fr',
    topicIds: ['text-blog'],
    paper: 'P1',
    section: 'T1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Which sentence is a rhetorical question, typical of a blog post?\nA) « Avez-vous rempli le formulaire ? »\nB) « Qui n'a jamais ressenti ça ? »\nC) « Le bus part à huit heures. »",
      ru: "Какое предложение является риторическим вопросом, характерным для поста в блоге?\nA) « Avez-vous rempli le formulaire ? »\nB) « Qui n'a jamais ressenti ça ? »\nC) « Le bus part à huit heures. »",
      fr: "Quelle phrase est une question rhétorique, typique d'un article de blog ?\nA) « Avez-vous rempli le formulaire ? »\nB) « Qui n'a jamais ressenti ça ? »\nC) « Le bus part à huit heures. »",
    },
    markscheme: {
      en: 'Answer B. A rhetorical question does not expect a real answer: it makes the reader think and agree with the writer. A is a real question that asks for information, and C is a plain statement of fact.',
      ru: 'Ответ B. Риторический вопрос не предполагает настоящего ответа: он заставляет читателя задуматься и согласиться с автором. A — настоящий вопрос, который требует информации, C — обычное утверждение факта.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'p1-diary',
    subject: 'fr',
    topicIds: ['text-diary'],
    paper: 'P1',
    section: 'T2',
    marks: 30,
    command: 'Write',
    minutes: 40,
    prompt: {
      en: 'You keep a private journal and want to note an important moment of your week. Write a diary entry of 250 to 400 words about a trip, a concert, an exchange or a meeting that mattered to you. Describe the setting, tell what happened in order, then explain your feelings and what you learned.',
      ru: 'Вы ведёте личный дневник и хотите записать важный момент недели. Напишите запись в дневнике объёмом 250–400 слов о поездке, концерте, обмене или встрече, которые были важны для вас. Опишите обстановку, расскажите, что произошло по порядку, затем объясните свои чувства и то, что вы поняли.',
      fr: "Vous tenez un journal intime et vous voulez noter un moment important de votre semaine. Écrivez une entrée de journal (250 à 400 mots) sur un voyage, un concert, un échange ou une rencontre qui a compté pour vous. Décrivez le cadre, racontez ce qui s'est passé dans l'ordre, puis expliquez vos sentiments et ce que vous avez appris.",
    },
    markscheme: {
      en: 'Criterion A, Language (12 marks): imparfait for the setting and the mood, passé composé for the events in order, plus-que-parfait for an earlier event, présent for feelings; correct agreements (for example after être and after a direct object); time markers. Criterion B, Message (12 marks): the setting is clear; the events come in order; the feelings and a lesson are explained; the diary form is kept (date and time line, address to the journal, no signature). Criterion C, Conceptual understanding (6 marks): the reflection shows how the experience changed the writer\'s view of themselves or of other people, beyond a summary of events.',
      ru: 'Критерий A, Язык (12 баллов): imparfait для обстановки и настроения, passé composé для событий по порядку, plus-que-parfait для более раннего события, présent для чувств; правильное согласование (например, после être и с прямым дополнением); маркеры времени. Критерий B, Сообщение (12 баллов): обстановка ясна; события идут по порядку; объяснены чувства и вывод; сохранена форма дневника (дата и время, обращение, без подписи). Критерий C, Концептуальное понимание (6 баллов): размышление показывает, как опыт изменил взгляд автора на себя или на других людей, а не просто пересказывает события.',
    },
    model: {
      en: 'Full marks for Message: the setting, the events in order, the feelings and the lesson are all present, and the diary form is kept (date and time line, address, no signature). Language is precise: imparfait for the weather and the mood, passé composé for the events, plus-que-parfait for the earlier preparation and présent for the reflection. The agreements are correct, as in « rentrée », « invitée » and « oubliées ». Conceptual understanding is shown by the idea that using a language means accepting mistakes and belonging.',
      ru: 'Полный балл за Message: есть обстановка, события по порядку, чувства и вывод, сохранена форма дневника (дата и время, обращение, без подписи). Язык точный: imparfait для погоды и настроения, passé composé для событий, plus-que-parfait для предыдущей подготовки и présent для размышления. Согласование верное, как в «rentrée», «invitée» и «oubliées». Концептуальное понимание видно из мысли, что говорить на языке значит не бояться ошибок и чувствовать себя своим.',
      fr: `Dimanche 18 octobre, 23 h 10

Cher journal,

Je suis enfin rentrée de Lyon, et je ne sais pas encore par où commencer. Lundi dernier, le train est arrivé à la gare de Perrache sous la pluie. Il faisait froid, j'étais très fatiguée et je me demandais si j'allais tenir une semaine entière avec une famille que je ne connaissais pas. Mathis, le fils de la famille, m'attendait sur le quai avec un parapluie trop grand pour lui.

Le soir, nous avons dîné ensemble. J'avais préparé des phrases pendant des jours, mais je les ai toutes oubliées. Le chien, Gus, a volé un morceau de fromage sur la table, et tout le monde a ri. Ce moment m'a rassurée : personne ne m'en voulait de faire des fautes.

Le lendemain, nous sommes montés à la basilique de Fourvière. Il faisait beau pour la première fois, et la vue sur la ville était magnifique. Mercredi, j'ai présenté ma ville natale en français devant la classe de Mathis. J'avais peur, mais j'ai réussi à finir mon exposé, et mes camarades ont applaudi.

Jeudi a été le jour le plus important. Mathis et ses amis m'ont invitée à jouer aux cartes dans un café du Vieux Lyon. Pendant deux heures, nous avons parlé de musique, de cinéma et de nos projets, et je n'ai presque jamais pensé à la langue. Pour la première fois, j'ai eu l'impression d'être vraiment là.

Vendredi, au moment de partir, la mère de Mathis m'a donné une petite carte de la ville, avec quelques mots au dos. Je l'ai lue dans le train, et j'ai pleuré un peu, je dois l'avouer.

Aujourd'hui, je suis fière de moi, mais je pense surtout que j'ai changé. Finalement, j'ai compris : apprendre une langue, ce n'est pas seulement connaître des mots, c'est accepter de se tromper devant les autres. Je ne sais pas si je reviendrai à Lyon l'année prochaine, mais je sais que je ne serai plus la même.`,
    },
    origin: 'original',
  },
  {
    id: 'p1-diary-q1',
    subject: 'fr',
    topicIds: ['text-diary'],
    paper: 'P1',
    section: 'T2',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which tense mainly describes the setting and the habits in a past narrative?\nA) passé composé\nB) imparfait\nC) futur proche',
      ru: 'Какое время в рассказе о прошлом в первую очередь описывает обстановку и привычки?\nA) passé composé\nB) imparfait\nC) futur proche',
      fr: 'Quel temps sert surtout à décrire le cadre et les habitudes dans un récit au passé ?\nA) passé composé\nB) imparfait\nC) futur proche',
    },
    markscheme: {
      en: 'Answer B. The imparfait describes the background of a past story: the weather, the setting, moods and habits. A is for completed events in the sequence of the story. C is the near future for plans (« Je vais partir »), not a past tense.',
      ru: 'Ответ B. Imparfait описывает фон прошлого рассказа: погоду, обстановку, настроение и привычки. A — завершённые события в ходе рассказа. C — ближайшее будущее для планов («Je vais partir»), это не прошедшее время.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'p1-diary-q2',
    subject: 'fr',
    topicIds: ['text-diary'],
    paper: 'P1',
    section: 'T2',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: 'Which opening suits a private journal?\nA) « Cher journal, »\nB) « Madame, »\nC) « Salut à tous ! »',
      ru: 'Какое обращение подходит личному дневнику?\nA) « Cher journal, »\nB) « Madame, »\nC) « Salut à tous ! »',
      fr: "Quelle formule d'ouverture convient à un journal intime ?\nA) « Cher journal, »\nB) « Madame, »\nC) « Salut à tous ! »",
    },
    markscheme: {
      en: 'Answer A. « Cher journal, » is the traditional address to a private diary, where the only reader is the writer. B is a formal greeting for a letter, and C is a greeting to a group of readers, which does not fit a diary.',
      ru: 'Ответ A. «Cher journal,» — традиционное обращение к личному дневнику, где единственный читатель — сам автор. B — официальное обращение в письме, C — приветствие группе читателей, которое дневнику не подходит.',
    },
    answer: 'A',
    origin: 'original',
  },
  {
    id: 'p1-email-informal',
    subject: 'fr',
    topicIds: ['text-email-informal'],
    paper: 'P1',
    section: 'T1',
    marks: 30,
    command: 'Write',
    minutes: 40,
    prompt: {
      en: "Your new friend Léa has just moved to your town, and you want to get to know her better. Write an informal e-mail of 250 to 400 words to introduce yourself: your origins, your languages and your passions. In your message, tell her what, in your view, defines a person, then invite her to a concrete activity with a day, a time and a place.",
      ru: 'Ваша новая подруга Léa только что переехала в ваш город, и вы хотите лучше узнать её. Напишите ей неформальный e-mail объёмом 250–400 слов, чтобы представиться: расскажите о своих корнях, языках и увлечениях. В письме скажите, что, по вашему мнению, определяет человека, а затем пригласите её на конкретное мероприятие с днём, временем и местом.',
      fr: "Votre nouvelle amie Léa vient de déménager dans votre ville, et vous voulez faire connaissance avec elle. Écrivez-lui un e-mail informel (250 à 400 mots) pour vous présenter : vos origines, vos langues et vos passions. Dans votre message, dites-lui ce qui, selon vous, définit une personne, puis invitez-la à une activité précise avec un jour, une heure et un lieu.",
    },
    markscheme: {
      en: 'Criterion A, Language (12 marks): tu throughout; futur proche for plans, impératif for invitations and advice, conditionnel for a polite proposal; correct agreements (for example « contente », « désolée »); informal connectors such as alors, bref and honnêtement. Criterion B, Message (12 marks): the three content points are covered in order (origins, languages and passions; what defines a person; an invitation with a day, a time and a place); the e-mail layout is complete (subject line, greeting, closing, first-name signature). Criterion C, Conceptual understanding (6 marks): the text shows that a person is defined by choices and relationships as well as by origins, and the view is reasoned.',
      ru: 'Критерий A, Язык (12 баллов): tu на протяжении всего текста; futur proche для планов, impératif для приглашений и советов, conditionnel для вежливого предложения; правильное согласование (например, «contente», «désolée»); неформальные связки alors, bref, honnêtement. Критерий B, Сообщение (12 баллов): три пункта раскрыты по порядку (корни, языки и увлечения; что определяет человека; приглашение с днём, временем и местом); структура e-mail полная (тема, приветствие, финальная фраза, подпись именем). Критерий C, Концептуальное понимание (6 баллов): текст показывает, что человека определяют выбор и отношения, а не только происхождение, и взгляд обоснован.',
    },
    model: {
      en: 'Full marks for Message: the three content points are covered in order, the e-mail layout is complete (subject line, greeting, closing and first-name signature), and the invitation has a day, a time and a place. Language is informal and accurate: tu throughout, futur proche (« on va se voir »), impératif (« Dis-moi »), conditionnel for a polite proposal (« Tu pourrais venir ? ») and correct agreements. Conceptual understanding is shown by the view that a person is defined by choices and relationships, not only by origins.',
      ru: 'Полный балл за Message: три пункта раскрыты по порядку, структура письма полная (тема, приветствие, финальная фраза и подпись именем), приглашение содержит день, время и место. Язык неформальный и точный: tu на протяжении всего текста, futur proche («on va se voir»), impératif («Dis-moi»), conditionnel для вежливого предложения («Tu pourrais venir ?») и правильное согласование. Концептуальное понимание видно из мысли, что человека определяют выбор и отношения, а не только происхождение.',
      fr: `Objet : Bienvenue dans notre ville !

Salut Léa,

Alors, tu as enfin déménagé ! Je suis tellement contente pour toi. Désolée pour ma réponse tardive, les examens m'ont beaucoup occupée. Bienvenue ! J'espère que ton appartement est lumineux et que tu as trouvé le chemin de la gare sans te perdre. Tu as déjà trouvé une bonne boulangerie près de chez toi ?

Puisque nous ne nous connaissons pas encore très bien, je vais te raconter un peu qui je suis. Je suis née à Lyon, mais ma grand-mère vient de Porto, alors je parle français, portugais et un peu d'espagnol. Au lycée, j'ai aussi fait du théâtre, et cela m'a beaucoup appris. Ma grande passion, c'est la photo : le samedi matin, je me promène dans les rues avec mon appareil, et je finis toujours par prendre un café. Je n'ai pas encore beaucoup de talent, mais je progresse chaque semaine.

Tu m'as demandé, l'autre jour, ce qui fait qu'une personne est vraiment elle-même. Honnêtement, je pense que ce ne sont pas nos origines, mais nos choix et les gens que l'on aime. Par exemple, je n'ai pas choisi d'être bilingue, mais j'ai choisi d'apprendre le portugais : ce choix me définit davantage. Selon moi, on se définit surtout par ce que l'on fait quand personne ne nous regarde. Ma grand-mère m'a appris les premiers mots de portugais, mais ce sont mes amis qui m'ont donné envie de continuer. Et toi, qu'est-ce qui te définit le plus ?

Bref, j'ai une idée : on va se voir samedi ? Je te propose une balade au bord de la Saône, puis on mange une crêpe au marché du centre-ville. Le marché est très animé le samedi. Tu pourrais venir vers dix heures ? Si la pluie revient, on ira au cinéma à la place. Dis-moi si ça te va, et n'oublie pas ton appareil photo !

Je suis impatiente de mieux te connaître et d'explorer la ville avec toi.

Je t'embrasse,
Inès`,
    },
    origin: 'original',
  },
  {
    id: 'p1-email-informal-q1',
    subject: 'fr',
    topicIds: ['text-email-informal'],
    paper: 'P1',
    section: 'T1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Which closing suits a close friend?\nA) « Cordialement, »\nB) « Je t'embrasse, »\nC) « Je vous prie d'agréer… »",
      ru: "Какая финальная фраза подходит близкой подруге?\nA) « Cordialement, »\nB) « Je t'embrasse, »\nC) « Je vous prie d'agréer… »",
      fr: "Quelle formule de fin convient le mieux à une amie proche ?\nA) « Cordialement, »\nB) « Je t'embrasse, »\nC) « Je vous prie d'agréer… »",
    },
    markscheme: {
      en: 'Answer B. « Je t\'embrasse, » is a warm closing that goes with tu. A is a neutral closing for business letters, and C is a formal closing for official letters, so both are too distant for a close friend.',
      ru: 'Ответ B. «Je t\'embrasse,» — тёплая финальная фраза, которая сочетается с tu. A — нейтральная формула для деловых писем, C — официальная формула для официальных писем; обе слишком официальны для близкой подруги.',
    },
    answer: 'B',
    origin: 'original',
  },
  {
    id: 'p1-email-informal-q2',
    subject: 'fr',
    topicIds: ['text-email-informal'],
    paper: 'P1',
    section: 'T1',
    marks: 1,
    command: 'Choose',
    prompt: {
      en: "Which sentence is a correct informal invitation?\nA) « Je vous invite à dîner. »\nB) « Tu veux venir samedi ? »\nC) « Je ne puis accepter. »",
      ru: "Какое предложение является правильным неформальным приглашением?\nA) « Je vous invite à dîner. »\nB) « Tu veux venir samedi ? »\nC) « Je ne puis accepter. »",
      fr: "Quelle phrase est une invitation informelle correcte ?\nA) « Je vous invite à dîner. »\nB) « Tu veux venir samedi ? »\nC) « Je ne puis accepter. »",
    },
    markscheme: {
      en: 'Answer B. « Tu veux venir samedi ? » invites a friend with tu and a concrete day. A uses vous, which is too formal for a friend, and C is a formal refusal, not an invitation.',
      ru: 'Ответ B. «Tu veux venir samedi ?» — приглашение подруге на tu с конкретным днём. A использует vous, это слишком официально для подруги, C — официальный отказ, а не приглашение.',
    },
    answer: 'B',
    origin: 'original',
  },
];
