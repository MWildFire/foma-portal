import type { Term } from '../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'stage-directions',
    term: { en: 'stage directions', ru: 'ремарки (stage directions)' },
    def: {
      en: 'Notes written by the playwright, separate from the dialogue, that describe the setting, the characters’ movements, tone of voice and action on stage.',
      ru: 'Авторские пояснения, отделённые от реплик, которые описывают место действия, движения персонажей, интонацию и действия на сцене.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: '(She turns away from the window, and her hands shake while her voice stays calm.)',
      ru: '(Она отворачивается от окна, и её руки дрожат, хотя голос остаётся спокойным.)',
    },
  },
  {
    id: 'soliloquy',
    term: { en: 'soliloquy', ru: 'монолог наедине с собой (soliloquy)' },
    def: {
      en: 'A speech in which a character is alone on stage, or is unheard by the others, and speaks their thoughts aloud so that the audience learns their inner state.',
      ru: 'Речь, в которой персонаж находится на сцене один или остаётся неуслышанным для других, и он вслух произносит свои мысли, чтобы зрители узнали его внутреннее состояние.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Alone in the kitchen, Mara tears up the letter and says to herself, "Nobody will ever know what I did."',
      ru: 'Оставшись одна на кухне, Мара рвёт письмо и говорит сама себе: «Никто никогда не узнает, что я сделала».',
    },
    pitfall: {
      en: 'Not every long speech is a soliloquy: the term applies only when the character is alone or unheard by the others.',
      ru: 'Не всякая длинная речь — монолог наедине с собой: термин применим, только когда персонаж один на сцене или его не слышат остальные.',
    },
  },
  {
    id: 'aside',
    term: { en: 'aside', ru: 'реплика в сторону (aside)' },
    def: {
      en: 'A short line that a character speaks directly to the audience, which the other characters on stage are conventionally taken not to hear.',
      ru: 'Короткая реплика, которую персонаж произносит, обращаясь непосредственно к зрителям, и которую, по условности, остальные персонажи на сцене не слышат.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: '(Aside, to the audience) Let him talk; he will sign everything tomorrow.',
      ru: '(В сторону, зрителям) Пусть говорит: завтра он всё подпишет.',
    },
  },
  {
    id: 'dramatic-irony',
    term: { en: 'dramatic irony', ru: 'драматическая ирония (dramatic irony)' },
    def: {
      en: 'A situation in which the audience knows something that a character does not, so that the character’s words or actions carry a meaning they do not intend.',
      ru: 'Ситуация, в которой зрители знают то, чего не знает персонаж, поэтому его слова или поступки приобретают смысл, который он сам в них не вкладывает.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The audience has just seen Ben hide the letter in his coat, but Ruth cheerfully asks, "Has anything happened today?"',
      ru: 'Зрители только что видели, как Бен спрятал письмо в пальто, а Рут весело спрашивает: «Сегодня ничего не случилось?»',
    },
    pitfall: {
      en: 'Dramatic irony depends on what the audience knows, not on a character saying the opposite of what they mean; that is verbal irony.',
      ru: 'Драматическая ирония зависит от того, что знает зритель, а не от того, что персонаж говорит противоположное тому, что имеет в виду; последнее — словесная ирония.',
    },
  },
  {
    id: 'subtext',
    term: { en: 'subtext', ru: 'подтекст (subtext)' },
    def: {
      en: 'The hidden meaning beneath what characters say: their real feelings, intentions or conflicts, which they do not state openly.',
      ru: 'Скрытый смысл того, что говорят персонажи: их истинные чувства, намерения или конфликты, которые они открыто не высказывают.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'MARK: "The kettle is on, if you want some tea." (He does not look up, and he folds the same tea towel for the fourth time.)',
      ru: 'МАРК: «Чайник на плите, если хочешь чаю.» (Он не поднимает глаз и в четвёртый раз складывает одно и то же полотенце.)',
    },
    pitfall: {
      en: 'Subtext must be supported by something in the text, such as a pause, a stage direction or a clash between words and actions, not invented from nothing.',
      ru: 'Подтекст должен опираться на текст: паузу, ремарку или расхождение между словами и действиями, а не придумываться из ничего.',
    },
  },
  {
    id: 'mise-en-scene',
    term: { en: 'mise-en-scène', ru: 'мизансцена (mise-en-scène)' },
    def: {
      en: 'Everything visible on stage at a given moment: the set, costumes, lighting and props, and the position and movement of the actors.',
      ru: 'Всё, что видно на сцене в данный момент: декорации, костюмы, освещение и реквизит, а также расположение актёров и их движения.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'The father sits alone in the dark corner, while the children stand in a single pool of light by the door.',
      ru: 'Отец сидит один в тёмном углу, а дети стоят в круге света у двери.',
    },
  },
  {
    id: 'chorus',
    term: { en: 'chorus', ru: 'хор (chorus)' },
    def: {
      en: 'In Greek tragedy, a group of performers who comment on the action, sing and dance, and voice the views of the community. Modern plays may give the same role to one character or a small group.',
      ru: 'В древнегреческой трагедии — группа исполнителей, которые комментируют действие, поют и танцуют и выражают мнение общества. В современных пьесах ту же роль может играть один персонаж или небольшая группа.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Five townspeople enter the square, singing about the drought and warning the king not to ignore the gods.',
      ru: 'Пятеро горожан выходят на площадь, поют о засухе и предупреждают царя, чтобы тот не пренебрегал волей богов.',
    },
  },
  {
    id: 'tragedy',
    term: { en: 'tragedy', ru: 'трагедия (tragedy)' },
    def: {
      en: 'A serious play in which a central character, often of high standing, is brought to ruin, usually through a flaw of character or an error of judgement. The ending is catastrophic and arouses pity and fear.',
      ru: 'Серьёзная пьеса, в которой главный герой, часто высокого положения, терпит крах, обычно из-за изъяна характера или ошибки в суждении. Финал катастрофичен и вызывает сострадание и страх.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Proud and certain of his own judgement, the mayor ignores every warning, and in the final scene he stands alone among the ruins of the city he meant to save.',
      ru: 'Гордый и уверенный в собственном суждении мэр игнорирует каждое предупреждение, и в финальной сцене он стоит один среди руин города, который хотел спасти.',
    },
    pitfall: {
      en: 'A sad ending alone does not make a tragedy: the fall must follow from the hero’s own flaw, error or conflict.',
      ru: 'Одного печального финала для трагедии недостаточно: падение героя должно вытекать из его собственного изъяна, ошибки или конфликта.',
    },
  },
  {
    id: 'comedy',
    term: { en: 'comedy', ru: 'комедия (comedy)' },
    def: {
      en: 'A play meant to amuse, which usually ends happily, often with a marriage or reconciliation, and uses humour to expose human folly or social pretension.',
      ru: 'Пьеса, задуманная как развлекательная, которая обычно заканчивается счастливо, часто свадьбой или примирением, и с помощью юмора высмеивает человеческие глупости и социальную претенциозность.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'After a week of misunderstandings, the two families agree to forget their quarrel, and the play ends with a wedding and a joke about the mayor’s hat.',
      ru: 'После недели недоразумений две семьи решают забыть свою ссору, и пьеса заканчивается свадьбой и шуткой о шляпе мэра.',
    },
  },
  {
    id: 'comedy-of-manners',
    term: { en: 'comedy of manners', ru: 'комедия нравов (comedy of manners)' },
    def: {
      en: 'A witty type of comedy that satirises the manners, conventions and moral values of polite society, often through elegant dialogue and romantic intrigue.',
      ru: 'Остроумная разновидность комедии, которая высмеивает манеры, светские условности и нравственные нормы общества, часто через изысканный диалог и любовные интриги.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'In a drawing room, two suitors argue about the rules of good manners, and every insult is delivered with perfect politeness.',
      ru: 'В гостиной два поклонника спорят о правилах хорошего тона, и каждое оскорбление произносится с безупречной вежливостью.',
    },
  },
  {
    id: 'farce',
    term: { en: 'farce', ru: 'фарс (farce)' },
    def: {
      en: 'A type of comedy that relies on exaggerated, improbable situations, physical action, mistaken identity and rapid entrances and exits, rather than on wit or the development of character.',
      ru: 'Разновидность комедии, которая опирается на преувеличенные и неправдоподобные ситуации, физическое действие, путаницу личностей и быстрые выходы и входы, а не на остроумие или развитие характеров.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'A husband hides under the table, his wife hides in the cupboard, and the lodger, dressed as a bishop, falls through the window.',
      ru: 'Муж прячется под столом, жена — в шкафу, а квартирант, переодетый епископом, вваливается в окно.',
    },
  },
  {
    id: 'catharsis',
    term: { en: 'catharsis', ru: 'катарсис (catharsis)' },
    def: {
      en: 'The emotional release or cleansing that the audience feels at the end of a tragedy, after experiencing pity and fear.',
      ru: 'Эмоциональное очищение, которое зритель испытывает в конце трагедии, пережив сострадание и страх.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'By the final scene the whole theatre is in tears, and when the lights come up, the audience sits in a silence that feels like relief.',
      ru: 'К финальной сцене весь зал плачет, а когда зажигается свет, зрители сидят в тишине, которая похожа на облегчение.',
    },
    pitfall: {
      en: 'Catharsis is felt by the audience, not by the character: it describes the effect of the play on the viewer.',
      ru: 'Катарсис переживает зритель, а не персонаж: это описание воздействия пьесы на зрителя.',
    },
  },
  {
    id: 'reversal',
    term: { en: 'reversal', ru: 'перипетия (reversal)' },
    def: {
      en: 'A sudden turn of events that reverses a character’s fortune, often from good to bad, and is frequently linked to a discovery.',
      ru: 'Внезапный поворот событий, который меняет судьбу персонажа на противоположную, часто от удачи к беде, и нередко связан с каким-либо открытием.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'As soon as the king signs the pardon, a servant arrives with the news that the prisoner is his own son.',
      ru: 'Как только король подписывает помилование, слуга приносит весть о том, что узник — его собственный сын.',
    },
  },
  {
    id: 'stichomythia',
    term: { en: 'stichomythia', ru: 'стихомифия (stichomythia)' },
    def: {
      en: 'A rapid exchange in which two characters speak in alternating single lines, often in an argument or a battle of wits.',
      ru: 'Быстрый обмен репликами, в котором два персонажа говорят по очереди, каждый по одной строке, часто в споре или словесной схватке.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'NINA: Where were you last night? / TOM: Out walking. / NINA: Out walking where? / TOM: Out walking.',
      ru: 'НИНА: Где ты был вчера вечером? / ТОМ: Гулял. / НИНА: Где именно? / ТОМ: Гулял.',
    },
  },
  {
    id: 'fourth-wall',
    term: { en: 'fourth wall', ru: '«четвёртая стена» (fourth wall)' },
    def: {
      en: 'The imaginary wall between the actors and the audience. When a character breaks it, they address the audience directly or acknowledge that what is happening is a play.',
      ru: 'Воображаемая стена между актёрами и зрителями. Когда персонаж «ломает» её, он прямо обращается к публике или признаёт, что происходящее — спектакль.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'Halfway through the play, the narrator turns to the audience and says, "You have seen this story before, so you already know who dies."',
      ru: 'На середине пьесы рассказчик поворачивается к залу и говорит: «Вы уже видели эту историю, так что сами знаете, кто умрёт».',
    },
  },
  {
    id: 'theatre-of-the-absurd',
    term: { en: 'theatre of the absurd', ru: 'театр абсурда (theatre of the absurd)' },
    def: {
      en: 'A mid-twentieth-century movement in drama that presents human life as meaningless. It uses illogical dialogue, repetition, circular action and surreal situations, without a conventional plot or resolution.',
      ru: 'Направление в драме середины XX века, которое изображает человеческую жизнь лишённой смысла. Оно использует нелогичные диалоги, повторы, циклическое действие и сюрреалистические ситуации, без привычного сюжета и развязки.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'A woman climbs a staircase that leads back into the room she has just left, announcing each step as if it were a long journey.',
      ru: 'Женщина поднимается по лестнице, которая ведёт обратно в комнату, которую она только что покинула, и объявляет каждую ступеньку так, будто это долгое путешествие.',
    },
    pitfall: {
      en: 'In this context, "absurd" does not mean silly or ridiculous; it describes the view that human existence has no inherent meaning.',
      ru: 'В этом контексте «абсурд» не значит «нелепый» или «смешной»: так называют представление о том, что человеческое существование не имеет изначального смысла.',
    },
  },
  {
    id: 'deus-ex-machina',
    term: { en: 'deus ex machina', ru: 'бог из машины (deus ex machina)' },
    def: {
      en: 'An unlikely outside intervention, such as a sudden arrival, a coincidence or a miracle, that solves an apparently insoluble problem in the plot. The term comes from Greek theatre, where a god was lowered onto the stage.',
      ru: 'Неправдоподобное вмешательство извне, например внезапное появление, совпадение или чудо, которое решает, казалось бы, неразрешимую проблему сюжета. Термин восходит к греческому театру, где на сцену спускали бога.',
    },
    syllabus: 'F.DRA',
    papers: ['P1', 'P2'],
    src: { kind: 'own', title: 'Own wording; check against the course textbook (chapter and page to be added)' },
    example: {
      en: 'With the army at the gates and no way out, a stranger rides in with a bag of gold, pays every debt, and the play ends in celebration.',
      ru: 'Когда армия стоит у ворот и выхода нет, в город въезжает незнакомец с мешком золота, расплачивается по всем долгам, и пьеса заканчивается праздником.',
    },
  },
];
