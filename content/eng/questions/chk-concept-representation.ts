import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-representation-1',
    subject: 'eng',
    topicIds: ['concept-representation'],
    paper: 'P2',
    marks: 4,
    command: 'Evaluate',
    prompt: {
      en: 'Decide whether this description is a stereotype or a complex representation of the men. Justify your judgement with one technique.',
      ru: 'Решите, является ли это описание стереотипом или сложным образом мужчин. Обоснуйте суждение одним приёмом.',
    },
    stimulus: {
      en: 'The men of the harbour are quiet and weathered, and they drink in the same corner of the bar every evening. They do not talk about their families or their hopes, and nobody asks them to.\nTheir hands are rough and their conversation is short, as if the sea had already said everything they needed to know.',
      ru: 'The men of the harbour are quiet and weathered, and they drink in the same corner of the bar every evening. They do not talk about their families or their hopes, and nobody asks them to.\nTheir hands are rough and their conversation is short, as if the sea had already said everything they needed to know.',
    },
    markscheme: {
      en: '1 mark: a clear, defensible judgement, for example a stereotyped collective portrait, or a critique of the narrator’s simplifying gaze. Do not require agreement with the suggested reading. 1 mark: evidence from the text: "quiet and weathered", "in the same corner of the bar", and no talk of families or hopes. 1 mark: one technique explained, for example the closing metaphor, which turns the men\'s silence into a fact of nature, or the omission of their inner lives. 1 mark: a qualified evaluation: the last image may be the narrator\'s myth rather than the men\'s own view, but the text gives the men no voice to test it.',
      ru: '1 балл: ясное обоснованное суждение, например стереотипный коллективный образ или критика упрощающего взгляда рассказчика. Совпадение с предлагаемым прочтением не обязательно. 1 балл: опирается на текст: «quiet and weathered» («молчаливые и обветренные»), «in the same corner of the bar» («в одном и том же углу бара») и отсутствие разговоров о семьях и надеждах. 1 балл: называет и объясняет один приём, например метафору в конце, которая превращает молчание мужчин в природный факт, или пропуск их внутренней жизни. 1 балл: даёт взвешенную оценку: последний образ может быть мифом рассказчика, а не взглядом самих мужчин, но текст не даёт им голоса, чтобы это проверить.',
    },
    model: {
      en: 'The description is a stereotype. The men are defined by a small set of traits, "quiet and weathered" and drinking "in the same corner of the bar", and the text is silent about "their families or their hopes". Nothing in the passage contradicts these traits. The main technique is the closing metaphor, "as if the sea had already said everything they needed to know", which turns the men\'s silence into a fact of nature, so the reader accepts their quiet as a type and does not ask why they are silent. The judgement needs one qualification: the last image may show the narrator\'s myth rather than the men\'s own view, but the text never gives the men a voice that could test it.',
      ru: 'Это описание — стереотип. Мужчины определены небольшим набором черт: «quiet and weathered» («молчаливые и обветренные») и привычка пить «in the same corner of the bar» («в одном и том же углу бара»), а о «their families or their hopes» («их семьях и надеждах») текст молчит. Ничто в отрывке этим чертам не противоречит. Главный приём — метафора в конце: «as if the sea had already said everything they needed to know» («будто море уже сказало всё, что им нужно знать»). Она превращает молчание мужчин в природный факт, поэтому читатель принимает их тишину как тип и не спрашивает, почему они молчат. Суждение нужно уточнить: последний образ может показывать миф рассказчика, а не взгляд самих мужчин, но текст не даёт им голоса, с которым можно было бы это проверить.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'chk-concept-representation-2',
    subject: 'eng',
    topicIds: ['concept-representation'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'Identify what the narrator leaves out of this description. Explain in one sentence what the omission makes the reader believe about the village.',
      ru: 'Определите, что рассказчик оставляет за пределами этого описания. Объясните в одном предложении, во что благодаря этому пропуску поверит читатель о деревне.',
    },
    stimulus: {
      en: 'I have spent two summers in this village, long enough to know the best view of the bay and the name of the cafe owner.\nThe tourists come off the ferry at noon with their cameras ready, and they always ask me where the old town is. I point them up the hill, past the washing lines and the closed shops, and I never tell them who lives there.',
      ru: 'I have spent two summers in this village, long enough to know the best view of the bay and the name of the cafe owner.\nThe tourists come off the ferry at noon with their cameras ready, and they always ask me where the old town is. I point them up the hill, past the washing lines and the closed shops, and I never tell them who lives there.',
    },
    markscheme: {
      en: '1 mark: identifies what is left out: the people who live in the old town, with their work, families and voices. 1 mark: quotes evidence of what the narrator does select, such as "the best view of the bay", "the name of the cafe owner" or the tourists with "their cameras ready". 1 mark: explains the effect: the selection foregrounds the visitor’s view, but “I never tell them” can also alert the reader to the omission and provoke criticism rather than acceptance. Accept either supported effect.',
      ru: '1 балл: называет, что пропущено: люди, которые живут в старом городе, их работа, семьи и голоса. 1 балл: приводит доказательство того, что рассказчик выбирает: «the best view of the bay» («лучший вид на залив»), «the name of the cafe owner» («имя владельца кафе») или туристов с «their cameras ready» («камерами наготове»). 1 балл: объясняет эффект: отбор выдвигает взгляд посетителя, но «I never tell them» может обратить внимание на пропуск и вызвать критику, а не согласие. Принимайте любой обоснованный эффект.',
    },
    model: {
      en: 'The narrator leaves out the people who live in the old town: their work, their families and their voices. The narrator dwells on the view of the bay, the cafe owner and the tourists with their cameras, and sends visitors up the hill past "the washing lines and the closed shops" without describing anyone who hangs the washing. The selection foregrounds tourist scenery; however, the narrator’s admission that residents are never described may make the reader question that exclusion rather than accept it.',
      ru: 'Рассказчик оставляет за пределами описания людей, которые живут в старом городе: их работу, семьи и голоса. Он выбирает вид на залив, владельца кафе и туристов с камерами и отправляет посетителей вверх по холму «past the washing lines and the closed shops» («мимо верёвок с бельём и закрытых магазинов»), не описывая никого, кто вешает бельё. Отбор выдвигает туристическую декорацию, однако признание рассказчика в умолчании может заставить читателя усомниться в исключении жителей, а не принять его.',
    },
    origin: 'original',
    minutes: 5,
  },
];
