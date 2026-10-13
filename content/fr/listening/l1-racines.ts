import type { ListeningTrack } from '../types';

// Listening track 1 (theme T1, Identities): two friends talk about their family roots and the languages at home.
// Level B1, dialogue. Original script. The audio is generated later by scripts/fr-polly.sh.
export const track: ListeningTrack = {
  id: 'l1-racines',
  theme: 'T1',
  title: { en: 'Family roots and languages', ru: 'Семейные корни и языки' },
  level: 'B1',
  genre: 'dialogue',
  turns: [
    { speaker: 'Léa', voice: 'Lea', fr: "Salut Rémi ! Tu as deux minutes ? Je prépare un exposé sur les racines de ma famille, et je dois parler des langues qu'on utilise à la maison. Tu peux me dire comment ça se passe chez toi ?" },
    { speaker: 'Rémi', voice: 'Remi', fr: "Bien sûr. Chez moi, c'est simple : on parle français. Ma mère vient de Bretagne, mais elle n'a jamais parlé breton avec nous. Par contre, ma grand-mère le parlait, et moi, je connais seulement quelques mots, comme « kenavo ». Ça veut dire « au revoir »." },
    { speaker: 'Léa', voice: 'Lea', fr: "Ah, c'est intéressant. Chez moi, c'est plus compliqué. Mon grand-père est arrivé en France en 1968. Il avait dix-neuf ans. Il venait du Portugal, et il est arrivé tout seul. Ma grand-mère est venue deux ans plus tard." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Et il faisait quoi, ton grand-père, quand il est arrivé ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Il était maçon à Lyon. Il a travaillé sur des chantiers pendant trente ans, euh, presque trente ans. À la maison, on parle surtout français, évidemment. Mais le portugais, on le parle le dimanche, chez ma grand-mère. Là-bas, on ne parle que portugais, même pendant le déjeuner." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Et toi, tu le comprends, le portugais ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Un peu, oui. Je comprends beaucoup de choses, mais je parle très mal. Du coup, j'ai décidé de l'apprendre sérieusement. Je veux parler avec ma grand-mère sans que ma mère traduise tout le temps. C'est mon vrai projet pour cette année." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Ah, c'est une très bonne idée. Et ta grand-mère, elle est contente ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Oh oui, elle adore ! Elle me corrige tout le temps. Mon frère, par contre, il s'en fiche. Il dit que le français suffit, et de toute façon, il n'ira jamais au Portugal." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Ben, moi, je trouve ça dommage. Le portugais, c'est une belle langue. Et le breton, j'aimerais bien l'apprendre un jour, mais c'est difficile. Bon, on commande ? Je t'invite !" },
  ],
  questionIds: ['l1-q01', 'l1-q02', 'l1-q03', 'l1-q04', 'l1-q05', 'l1-q06', 'l1-q07', 'l1-q08', 'l1-q09', 'l1-q10'],
  audio: '/audio/fr/l1-racines.mp3',
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
