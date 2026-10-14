import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'w-yun-dong-ju-1',
    subject: 'eng',
    topicIds: ['w-yun-dong-ju'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: `Identify two moments, in two different poems, where the speaker sees himself or is judged. For each moment, give the poem, the stanza and the line, and say what the speaker comes to know about himself.`,
      ru: `Укажите два момента в двух разных стихотворениях, где говорящий видит себя или его судят. Для каждого момента назовите стихотворение, строфу и строку и скажите, что говорящий узнаёт о себе.`,
    },
    markscheme: {
      en: `1 mark: names a moment in Self-Portrait where the speaker meets "that man" in the well, with stanza and line, such as stanza 2, line 2 (he hates the man and turns back) or stanza 3, line 1 (he pities him). 1 mark: names a second moment in a different poem, with stanza and line, such as Confession stanza 5, lines 2–3 (the back of a sad person appears in the mirror) or Confession stanza 1, lines 1–2 (the face remains in the bronze mirror). 1 mark: states what the speaker comes to know: the man he hates and pities is his own reflection, and in Confession he sees himself only from behind, as a sad figure.`,
      ru: `1 балл: назван момент в Self-Portrait, где говорящий встречает «того человека» у колодца, со строфой и строкой, например строфа 2, строка 2 (он ненавидит человека и поворачивает назад) или строфа 3, строка 1 (ему его жаль). 1 балл: назван второй момент в другом стихотворении, со строфой и строкой, например Confession, строфа 5, строки 2–3 (в зеркале появляется спина грустного человека) или Confession, строфа 1, строки 1–2 (лицо остаётся в бронзовом зеркале). 1 балл: сказано, что говорящий узнаёт: человек, которого он ненавидит и жалеет, — его собственное отражение, а в Confession он видит себя только со спины, как грустную фигуру.`,
    },
    model: {
      en: `In Self-Portrait the speaker looks into a well and sees "a man" there (stanza 2, line 1). He hates him and turns back (stanza 2, line 2), but on the way back he pities him (stanza 3, line 1). He comes to know that the man he judges is his own reflection, so hatred and pity belong to the same self. In Confession the speaker looks at his face in a rusted bronze mirror (stanza 1, lines 1–2). Later the mirror shows "the back of a sad person walking alone" (stanza 5, lines 2–3). He comes to know that he cannot see his own face, only a figure from behind, and that this figure is sad.`,
      ru: `В Self-Portrait говорящий заглядывает в колодец и видит там «человека» (строфа 2, строка 1). Он ненавидит его и поворачивает назад (строфа 2, строка 2), но по дороге назад ему становится его жаль (строфа 3, строка 1). Он понимает, что человек, которого он судит, — его собственное отражение, поэтому ненависть и жалость относятся к одному и тому же «я». В Confession говорящий смотрит на своё лицо в ржавом бронзовом зеркале (строфа 1, строки 1–2). Позже зеркало показывает «спину грустного человека, идущего одного» (строфа 5, строки 2–3). Он понимает, что не видит собственного лица, а видит лишь фигуру со спины, и что эта фигура печальна.`,
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'w-yun-dong-ju-2',
    subject: 'eng',
    topicIds: ['w-yun-dong-ju'],
    paper: 'P2',
    marks: 5,
    command: 'Analyse',
    prompt: {
      en: `Analyse how the repetition in Self-Portrait (stanzas 2–4) builds a change in the speaker's feeling towards the man in the well. Give the stanza and line for each reference.`,
      ru: `Проанализируйте, как повтор в Self-Portrait (строфы 2–4) создаёт изменение чувства говорящего к человеку у колодца. Для каждой ссылки укажите строфу и строку.`,
    },
    markscheme: {
      en: `1 mark: identifies the repeated action of hating the man and turning back (stanza 2, line 2; stanza 4, line 1) as the pattern that structures stanzas 2–4. 1 mark: identifies the shift to pity while going back (stanza 3, line 1). 1 mark: explains that the image stays the same ("the man is still there, just as he was", stanza 3, line 2), so the change lies in the speaker's feeling and not in the water. 1 mark: explains that stanza 4 ends in affection ("that man becomes dear to me", stanza 4, line 2), so the repetition moves the feeling from hate to affection rather than to a settled view. 1 mark: evaluates the effect on the reader, who feels the back-and-forth of self-judgement, so the speaker's identity remains unsettled.`,
      ru: `1 балл: назван повторяющийся ход «ненавидит человека и поворачивает назад» (строфа 2, строка 2; строфа 4, строка 1) как схема, на которой держатся строфы 2–4. 1 балл: назван сдвиг к жалости на обратном пути (строфа 3, строка 1). 1 балл: объяснено, что образ остаётся тем же («человек всё ещё там, таким же, каким был», строфа 3, строка 2), поэтому меняется чувство говорящего, а не вода. 1 балл: объяснено, что строфа 4 заканчивается привязанностью («тот человек становится мне дорог», строфа 4, строка 2), так что повтор ведёт чувство от ненависти к привязанности, а не к устоявшемуся взгляду. 1 балл: оценён эффект на читателя, который ощущает качание самосуда; поэтому идентичность говорящего остаётся неустойчивой.`,
    },
    model: {
      en: `The repetition builds a movement of feeling. In stanza 2 the speaker hates the man in the well and turns back (stanza 2, line 2). Going back in stanza 3, he pities him (stanza 3, line 1), but when he looks again the man is still there, just as he was (stanza 3, line 2). The same action returns in stanza 4: he hates him again and turns back (stanza 4, line 1), and then the return brings affection, because the man becomes dear to him (stanza 4, line 2). The image never changes, only the feeling does, and each return shows a new feeling. The reader feels this back-and-forth, so the speaker's self-judgement never settles.`,
      ru: `Повтор создаёт движение чувства. В строфе 2 говорящий ненавидит человека у колодца и поворачивает назад (строфа 2, строка 2). На обратном пути в строфе 3 ему становится его жаль (строфа 3, строка 1), но когда он смотрит снова, человек всё ещё там, таким же, каким был (строфа 3, строка 2). То же действие возвращается в строфе 4: он снова ненавидит его и поворачивает назад (строфа 4, строка 1), а затем возвращение приносит привязанность: человек становится ему дорог (строфа 4, строка 2). Образ не меняется, меняется только чувство, и каждое возвращение показывает новое чувство. Читатель ощущает это качание, поэтому самосуд говорящего так и не успокаивается.`,
    },
    origin: 'original',
    minutes: 12,
  },
  {
    id: 'w-yun-dong-ju-3',
    subject: 'eng',
    topicIds: ['w-yun-dong-ju'],
    paper: 'P2',
    marks: 5,
    command: 'Evaluate',
    prompt: {
      en: `Evaluate the extent to which Confession presents identity as shaped by the judgement of others. Refer to stanzas 1–5, and give the stanza and line for each reference.`,
      ru: `Оцените, в какой степени Confession показывает идентичность, сформированную суждением других людей. Опирайтесь на строфы 1–5 и для каждой ссылки укажите строфу и строку.`,
    },
    markscheme: {
      en: `1 mark: a judgement of degree, such as "to a limited extent", rather than a simple yes or no. 1 mark: shows that much of the judgement is the speaker's own: "why is it so shameful?" (stanza 1, line 4) and "why did I make such a shameful confession?" (stanza 3, line 4). 1 mark: identifies the mirror as the nearest thing to an outside judge (stanza 1, lines 1–2; stanza 4), and notes that it shows rather than speaks. 1 mark: explains that the "relic of some dynasty" (stanza 1, line 3) places judgement in history, not in a person who judges the speaker. 1 mark: evaluates the limit and the effect: no other person speaks in the poem, and the reader sees a sad figure from behind (stanza 5, lines 2–3), so identity is shaped mainly by self-judgement and by what the speaker cannot see of himself.`,
      ru: `1 балл: суждение о степени, например «в ограниченной степени», а не простое «да» или «нет». 1 балл: показано, что большая часть суждения принадлежит самому говорящему: «почему оно так постыдно?» (строфа 1, строка 4) и «зачем я сделал такое постыдное признание?» (строфа 3, строка 4). 1 балл: зеркало названо ближайшим подобием внешнего судьи (строфа 1, строки 1–2; строфа 4), и отмечено, что оно показывает, а не говорит. 1 балл: объяснено, что «реликвия какой-то династии» (строфа 1, строка 3) переносит суд в историю, а не на человека, который судит говорящего. 1 балл: оценены ограничение и эффект: в стихотворении никто другой не говорит, а читатель видит грустную фигуру со спины (строфа 5, строки 2–3), поэтому идентичность формируется в основном самосудом и тем, чего говорящий не видит в себе.`,
    },
    model: {
      en: `To a limited extent. Most of the judgement belongs to the speaker. He asks why his face is so shameful (stanza 1, line 4) and why he made such a shameful confession at a young age (stanza 3, line 4). No other person speaks. The mirror is the nearest outside judge, but it only shows: the speaker polishes it with his palms and soles (stanza 4) and sees "the back of a sad person" (stanza 5, lines 2–3). The face is also "a relic of some dynasty" (stanza 1, line 3), so the past shapes the self, yet no one in the poem judges him. Others shape his identity only indirectly, through history and an image he cannot control.`,
      ru: `В ограниченной степени. Большая часть суждения в Confession принадлежит самому говорящему. Он спрашивает, почему его лицо так постыдно (строфа 1, строка 4), и почему в юном возрасте сделал такое постыдное признание (строфа 3, строка 4). Никто другой не говорит. Зеркало — ближайшее подобие внешнего судьи, но оно только показывает: говорящий протирает его ладонями и подошвами (строфа 4) и видит «спину грустного человека» (строфа 5, строки 2–3). Лицо также названо «реликвией какой-то династии» (строфа 1, строка 3), поэтому прошлое формирует «я», но в стихотворении никто не назван судьёй. Другие люди влияют на идентичность лишь косвенно: через историю и образ, которым он не может управлять.`,
    },
    origin: 'original',
    minutes: 12,
  },
];
