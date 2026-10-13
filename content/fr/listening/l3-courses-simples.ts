import type { ListeningTrack } from '../types';

// Listening track 3 (theme T3, Human ingenuity): an interview with a young engineer (fictional) about an app that helps
// older people with their shopping. Level B2, interview. Original script. The audio is generated later by scripts/fr-polly.sh.
export const track: ListeningTrack = {
  id: 'l3-courses-simples',
  theme: 'T3',
  title: { en: 'Interview: an app for everyday shopping', ru: 'Интервью: приложение для покупок' },
  level: 'B2',
  genre: 'interview',
  turns: [
    { speaker: 'Julie', voice: 'Lea', fr: "Bonjour Adrien, merci d'avoir accepté cet entretien. Pour commencer, pouvez-vous nous expliquer ce que fait votre application ?" },
    { speaker: 'Adrien', voice: 'Remi', fr: "Bien sûr. Courses Simples aide les personnes âgées à faire leurs courses sans sortir de chez elles. On choisit ses produits dans les commerces du quartier, et une personne du magasin prépare la commande et la livre. L'idée, c'est que l'application soit assez simple pour qu'un grand-père ou une grand-mère puisse s'en servir sans aide." },
    { speaker: 'Julie', voice: 'Lea', fr: "D'où vient cette idée ?" },
    { speaker: 'Adrien', voice: 'Remi', fr: "De mon grand-père, en fait. Il ne voulait plus aller seul au supermarché, parce que les grandes surfaces le fatiguaient beaucoup. Et les applis de livraison classiques sont compliquées : des menus partout, des petits boutons... On a donc passé des mois à simplifier l'écran, pour qu'il n'y ait qu'un seul bouton géant." },
    { speaker: 'Julie', voice: 'Lea', fr: "Concrètement, comment ça marche ?" },
    { speaker: 'Adrien', voice: 'Remi', fr: "La personne dit ce qu'elle veut à voix haute, et l'application transcrit la liste. Un membre de la famille peut la vérifier sur son téléphone, mais ce n'est pas obligatoire. La commande arrive chez elle dans les deux heures, et elle la paie à la livraison. Les commerçants, eux, versent une petite commission sur chaque commande." },
    { speaker: 'Julie', voice: 'Lea', fr: "Et les premiers utilisateurs, qu'est-ce qu'ils en ont pensé ?" },
    { speaker: 'Adrien', voice: 'Remi', fr: "Nous avons testé le prototype avec quarante personnes de plus de soixante-cinq ans, pendant trois mois. Au début, beaucoup nous demandaient un ticket de caisse imprimé. Ça nous a surpris, mais on l'a ajouté, parce que c'était la demande la plus fréquente." },
    { speaker: 'Julie', voice: 'Lea', fr: "Et quelles sont les limites du système ?" },
    { speaker: 'Adrien', voice: 'Remi', fr: "Il y en a, bien sûr. Dans les zones rurales, la connexion est parfois mauvaise, et la reconnaissance vocale ne comprend pas toujours les accents du sud. On y travaille. Je ne vais pas vous dire que c'est parfait. L'année prochaine, on veut la tester dans une autre région." },
  ],
  questionIds: ['l3-q01', 'l3-q02', 'l3-q03', 'l3-q04', 'l3-q05', 'l3-q06', 'l3-q07', 'l3-q08', 'l3-q09', 'l3-q10'],
  audio: '/audio/fr/l3-courses-simples.mp3',
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
