import type { ListeningTrack } from '../types';

// Listening track 4 (theme T4, Social organization): a podcast in which two presenters discuss volunteering in a
// neighbourhood garden (fictional). Level B2, podcast. Original script. The audio is generated later by scripts/fr-polly.sh.
export const track: ListeningTrack = {
  id: 'l4-benevolat-quartier',
  theme: 'T4',
  title: { en: 'Podcast: volunteering in our neighbourhood', ru: 'Подкаст: волонтёрство в нашем квартале' },
  level: 'B2',
  genre: 'podcast',
  turns: [
    { speaker: 'Chloé', voice: 'Lea', fr: "Bienvenue dans « Voisins, voisines », l'émission qui parle de la vie de quartier. Aujourd'hui, avec Mathieu, nous avons visité le Jardin des Tilleuls, un jardin partagé qui existe depuis 2023. Mathieu, tu peux nous le présenter ?" },
    { speaker: 'Mathieu', voice: 'Remi', fr: "Avec plaisir. Le projet a commencé avec douze habitants. Ils ont demandé à la mairie un terrain abandonné, et la mairie le leur prête gratuitement pendant trois ans. Franchement, c'est une décision courageuse, parce que personne ne savait si ça allait marcher." },
    { speaker: 'Chloé', voice: 'Lea', fr: "Et concrètement, qui vient jardiner ? Des retraités, des familles, des jeunes ?" },
    { speaker: 'Mathieu', voice: 'Remi', fr: "Un peu de tout. Les bénévoles se retrouvent le samedi matin, à neuf heures. Le problème, c'est qu'il est très difficile de trouver des volontaires pour de longues périodes. Les gens ont un travail, des enfants, et ils ne peuvent pas s'engager pour un an. Alors, on a changé la formule : des « missions de deux heures ». Tu viens quand tu peux, et tu repars." },
    { speaker: 'Chloé', voice: 'Lea', fr: "Ça, c'est malin. Et ça marche, les missions courtes ? On retrouve les mêmes personnes ?" },
    { speaker: 'Mathieu', voice: 'Remi', fr: "Honnêtement, oui. Les gens viennent surtout pour l'ambiance, et beaucoup reviennent. Il y a aussi un frigo solidaire à l'entrée du jardin. Les habitants y déposent les légumes qu'ils ne mangent pas, et n'importe qui peut les prendre, sans rien payer." },
    { speaker: 'Chloé', voice: 'Lea', fr: "C'est une très bonne idée. Mais tout le monde n'est pas d'accord. Certains pensent que ce n'est pas aux citoyens de remplacer les services publics." },
    { speaker: 'Mathieu', voice: 'Remi', fr: "Oui, c'est un débat qui revient souvent. Pour ma part, je pense que le bénévolat ne remplace rien, mais qu'il crée du lien entre les voisins. Et ça, aucune politique ne peut le faire à la place des habitants." },
    { speaker: 'Chloé', voice: 'Lea', fr: "Et le soutien scolaire, il y a aussi quelque chose dans le quartier ?" },
    { speaker: 'Mathieu', voice: 'Remi', fr: "Oui, le mardi soir, des étudiants aident les collégiens à faire leurs devoirs. Ça ne coûte rien aux familles. Bon, on s'arrête là. La semaine prochaine, on parlera des associations sportives du quartier." },
  ],
  questionIds: ['l4-q01', 'l4-q02', 'l4-q03', 'l4-q04', 'l4-q05', 'l4-q06', 'l4-q07', 'l4-q08', 'l4-q09', 'l4-q10'],
  audio: '/audio/fr/l4-benevolat-quartier.mp3',
  source: { kind: 'own', title: 'Original text written for this portal, in the style of IB Paper 2' },
};
