import type { Term } from '../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'ethos',
    term: { en: 'ethos', ru: 'этос (ethos)' },
    def: {
      en: 'An appeal to the audience’s trust in the speaker or writer, based on credibility, expertise, character or shared values.',
      ru: 'Апелляция к доверию аудитории: опора на авторитетность, компетентность, нравственный облик говорящего или автора и на общие ценности.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'As a doctor who has worked in rural clinics for twenty years, I know how hard it is to ask for help.',
      ru: 'Как врач, который двадцать лет работает в сельских клиниках, я знаю, как трудно просить о помощи.',
    },
  },
  {
    id: 'pathos',
    term: { en: 'pathos', ru: 'пафос (pathos)' },
    def: {
      en: 'An appeal to the audience’s emotions, such as pity, anger, fear or pride, used to move them to agree or to act.',
      ru: 'Апелляция к эмоциям аудитории, например к жалости, гневу, страху или гордости, которая призвана побудить её согласиться или действовать.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Picture the child who waits at the school gate every afternoon, watching the other children leave with their parents.',
      ru: 'Представьте ребёнка, который каждый день после уроков ждёт у школьных ворот и смотрит, как остальные уходят с родителями.',
    },
  },
  {
    id: 'logos',
    term: { en: 'logos', ru: 'логос (logos)' },
    def: {
      en: 'An appeal to logic and reason, using facts, statistics, examples and a clear chain of argument.',
      ru: 'Апелляция к логике и разуму, опирающаяся на факты, статистику, примеры и последовательную цепочку доводов.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Only 12 per cent of the applicants passed the test, so the exam is far harder than the advert claims.',
      ru: 'Лишь 12 процентов кандидатов сдали тест, поэтому экзамен намного сложнее, чем утверждает реклама.',
    },
    pitfall: {
      en: 'Quoting a statistic is not enough for logos: explain how the figure supports the claim.',
      ru: 'Одной ссылки на статистику для логоса недостаточно: объясните, как цифра подтверждает утверждение.',
    },
  },
  {
    id: 'rhetorical-question',
    term: { en: 'rhetorical question', ru: 'риторический вопрос (rhetorical question)' },
    def: {
      en: 'A question asked for effect rather than for an answer, because the answer is obvious or because the speaker wants the audience to reach a conclusion.',
      ru: 'Вопрос, который задают ради эффекта, а не ради ответа, так как ответ очевиден или говорящий хочет, чтобы аудитория сама пришла к выводу.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Who would trust a government that cannot even keep its own schools open?',
      ru: 'Кто станет доверять правительству, которое не может даже сохранить открытыми собственные школы?',
    },
    pitfall: {
      en: 'Labelling a question as rhetorical is not analysis: say what conclusion the question leads the audience to reach.',
      ru: 'Назвать вопрос риторическим — ещё не анализ: объясните, к какому выводу он подводит аудиторию.',
    },
  },
  {
    id: 'anaphora',
    term: { en: 'anaphora', ru: 'анафора (anaphora)' },
    def: {
      en: 'The repetition of the same word or phrase at the beginning of successive clauses, sentences or lines, to create emphasis and rhythm.',
      ru: 'Повтор одного и того же слова или словосочетания в начале нескольких следующих друг за другом предложений, фраз или строк, создающий акцент и ритм.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'We have seen the empty shelves, we have heard the empty promises, and we have felt the empty pockets of this city.',
      ru: 'Мы видели пустые полки, мы слышали пустые обещания, мы ощущали пустые карманы этого города.',
    },
  },
  {
    id: 'epistrophe',
    term: { en: 'epistrophe', ru: 'эпифора (epistrophe)' },
    def: {
      en: 'The repetition of the same word or phrase at the end of successive clauses, sentences or lines, to create emphasis.',
      ru: 'Повтор одного и того же слова или словосочетания в конце нескольких следующих друг за другом предложений или строк, создающий акцент.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The mayor insists the plan is fair, the council confirms that the plan is fair, and the newspaper repeats that the plan is fair.',
      ru: 'Мэр настаивает, что план справедлив, совет подтверждает, что план справедлив, а газета повторяет, что план справедлив.',
    },
  },
  {
    id: 'antithesis',
    term: { en: 'antithesis', ru: 'антитеза (antithesis)' },
    def: {
      en: 'The placing of contrasting ideas or words side by side in a balanced structure, to sharpen the contrast.',
      ru: 'Противопоставление контрастных идей или слов, поставленных рядом в сбалансированной конструкции, чтобы обострить контраст.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The government spends freely on speeches, but it counts every penny that goes to the schools.',
      ru: 'Правительство щедро тратит на речи, но считает каждую копейку, которая уходит на школы.',
    },
  },
  {
    id: 'tricolon',
    term: { en: 'tricolon', ru: 'трикола (tricolon)' },
    def: {
      en: 'A group of three parallel words, phrases or clauses of similar length and structure, used to create rhythm and emphasis.',
      ru: 'Группа из трёх параллельных слов, словосочетаний или предложений одинакового строения и примерно одинаковой длины, которая создаёт ритм и усиливает мысль.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'We need schools that teach, hospitals that heal, and roads that connect.',
      ru: 'Нам нужны школы, которые учат, больницы, которые лечат, и дороги, которые соединяют.',
    },
  },
  {
    id: 'polysyndeton',
    term: { en: 'polysyndeton', ru: 'полисиндетон (polysyndeton)' },
    def: {
      en: 'The repeated use of conjunctions, such as "and" or "or", between words or clauses, which slows the pace and creates a sense of accumulation.',
      ru: 'Многократное употребление союзов, например «и» или «или», между словами или предложениями, которое замедляет темп и создаёт ощущение нагромождения.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'We walked and walked and walked, and the road and the rain and the silence went on and on.',
      ru: 'Мы шли и шли и шли, и дорога, и дождь, и тишина тянулись и тянулись.',
    },
  },
  {
    id: 'asyndeton',
    term: { en: 'asyndeton', ru: 'асиндетон (asyndeton)' },
    def: {
      en: 'The omission of conjunctions between words or clauses in a list, which speeds up the pace and creates urgency or impact.',
      ru: 'Опущение союзов между словами или предложениями в перечислении, которое ускоряет темп и создаёт напряжение или ощущение резкого воздействия.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Run, hide, wait, breathe, run again.',
      ru: 'Беги, прячься, жди, дыши, снова беги.',
    },
    pitfall: {
      en: 'Asyndeton leaves conjunctions out, while polysyndeton adds many; do not mix them up when you analyse pace.',
      ru: 'Асиндетон опускает союзы, а полисиндетон добавляет их много; не путайте их, когда анализируете темп.',
    },
  },
  {
    id: 'chiasmus',
    term: { en: 'chiasmus', ru: 'хиазм (chiasmus)' },
    def: {
      en: 'A reversal of the order of words or ideas in two parallel phrases, forming an AB-BA pattern that emphasises the link or contrast between them.',
      ru: 'Перестановка слов или понятий в двух параллельных фразах: во второй фразе они стоят в обратном порядке (схема АБ–БА), что подчёркивает связь или противопоставление между ними.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Some people study to live, and others live to study.',
      ru: 'Одни учатся, чтобы жить, а другие живут, чтобы учиться.',
    },
  },
  {
    id: 'direct-address',
    term: { en: 'direct address', ru: 'прямое обращение (direct address)' },
    def: {
      en: 'Speaking straight to the listener or reader, using "you", "we" or a form of address such as "my friends", to build a bond and engage them.',
      ru: 'Непосредственное обращение к слушателю или читателю с помощью «вы», «мы» или формулы вроде «друзья мои», чтобы установить связь и вовлечь аудиторию.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'My friends, you have been told that this town is finished, but the two of us know better.',
      ru: 'Друзья мои, вам говорили, что наш город обречён, но мы-то с вами знаем лучше.',
    },
  },
  {
    id: 'audience',
    term: { en: 'audience', ru: 'аудитория (audience)' },
    def: {
      en: 'The people a text is written or spoken for. A writer or speaker shapes tone, language and content to suit that intended group.',
      ru: 'Люди, для которых написан или произнесён текст. Автор или говорящий подбирает тон, язык и содержание так, чтобы они подходили этой целевой группе.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Written for parents of seven-year-olds, the leaflet uses short sentences and avoids technical words.',
      ru: 'Написанная для родителей семилетних детей листовка использует короткие предложения и избегает технических терминов.',
    },
    pitfall: {
      en: 'Do not say the audience is "everyone": name the intended group and show how the language is shaped for them.',
      ru: 'Не пишите, что аудитория — «все»: назовите целевую группу и покажите, как язык подстроен под неё.',
    },
  },
  {
    id: 'purpose',
    term: { en: 'purpose', ru: 'цель текста (purpose)' },
    def: {
      en: 'The writer’s or speaker’s reason for creating the text, such as to inform, persuade, criticise, entertain or warn, and what they want the audience to think or do.',
      ru: 'Причина, по которой автор или говорящий создаёт текст: информировать, убеждать, критиковать, развлекать или предостерегать, а также то, что он хочет, чтобы аудитория подумала или сделала.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The speech is meant less to inform the voters than to make them angry enough to go out and vote.',
      ru: 'Эта речь нужна не столько для того, чтобы информировать избирателей, сколько для того, чтобы разозлить их и заставить пойти голосовать.',
    },
    pitfall: {
      en: 'Purpose is what the writer wants to achieve, not the topic: "the text is about pollution" names a subject, not a purpose.',
      ru: 'Цель — это то, чего автор хочет добиться, а не тема: фраза «текст о загрязнении» называет тему, а не цель.',
    },
  },
  {
    id: 'satire',
    term: { en: 'satire', ru: 'сатира (satire)' },
    def: {
      en: 'Writing that exposes and ridicules folly, vice or abuse of power, often through irony, exaggeration and parody, in order to criticise or provoke change.',
      ru: 'Произведение, которое обличает и высмеивает глупость, пороки или злоупотребление властью, часто с помощью иронии, гиперболы и пародии, чтобы подвергнуть критике или вызвать перемены.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The minister, who has never read a school report, promises to improve every school in the country personally by Friday.',
      ru: 'Министр, который ни разу не читал школьных отчётов, обещает лично улучшить все школы страны к пятнице.',
    },
  },
  {
    id: 'rhetoric',
    term: { en: 'rhetoric', ru: 'риторика (rhetoric)' },
    def: {
      en: 'The art of using language deliberately and effectively to persuade or influence an audience, through word choice, sentence structure and devices.',
      ru: 'Искусство целенаправленно и действенно использовать язык, чтобы убедить аудиторию или повлиять на неё, через выбор слов, построение фраз и приёмы.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'The speaker says "our town" eleven times, so that every listener feels part of one community.',
      ru: 'Оратор одиннадцать раз говорит «наш город», чтобы каждый слушатель чувствовал себя частью одного сообщества.',
    },
  },
  {
    id: 'argument',
    term: { en: 'argument', ru: 'аргумент (argument)' },
    def: {
      en: 'A claim that the writer or speaker defends, supported by reasons, evidence and examples that lead to a conclusion.',
      ru: 'Утверждение, которое автор или говорящий отстаивает, опираясь на доводы, доказательства и примеры, ведущие к выводу.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Libraries should stay open late, because students who cannot study at home lose a chance that no amount of money can buy back.',
      ru: 'Библиотеки должны работать допоздна, потому что ученики, которые не могут заниматься дома, теряют шанс, который не вернуть ни за какие деньги.',
    },
  },
  {
    id: 'anecdote',
    term: { en: 'anecdote', ru: 'личная история (anecdote)' },
    def: {
      en: 'A short, often personal story used to illustrate a point, build rapport with the audience and make an argument more vivid.',
      ru: 'Короткая, часто личная история, которую используют, чтобы проиллюстрировать мысль, установить контакт с аудиторией и сделать доводы ярче.',
    },
    syllabus: 'F.NFI',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording' },
    example: {
      en: 'Last winter my neighbour, a retired teacher, walked three kilometres to bring us a single bag of rice.',
      ru: 'Прошлой зимой мой сосед, учитель на пенсии, прошёл три километра, чтобы принести нам один мешок риса.',
    },
    pitfall: {
      en: 'An anecdote illustrates a point but does not prove it on its own; say what the story is meant to show.',
      ru: 'Личная история иллюстрирует мысль, но сама по себе её не доказывает: объясните, что именно должна показать эта история.',
    },
  },
];
