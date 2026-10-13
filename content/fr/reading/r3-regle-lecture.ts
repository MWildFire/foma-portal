import type { ReadingPassage } from '../types';

// Reading passage R3 (theme T3, Human ingenuity, level B2): an article about a student who designed a reading aid
// for children, how he built it and the problems of the first tests. Original text, five paragraphs (A to E).
// Questions: r3-q01 to r3-q10.
export const passage: ReadingPassage = {
  id: 'r3-regle-lecture',
  theme: 'T3',
  title: { en: 'A ruler that helps children read', ru: 'Линейка, которая помогает детям читать' },
  level: 'B2',
  paragraphs: [
    "Il y a deux ans, Mathis Girard, alors étudiant en génie électrique à Lille, a eu une idée simple : aider les enfants qui ont du mal à suivre les lignes d'un livre. Son invention, baptisée Lirelle, ressemble à une règle en plastique transparent munie d'une petite lampe. Elle éclaire une seule ligne à la fois et laisse le reste de la page dans l'ombre.",
    "L'idée lui est venue en observant sa petite cousine, qui perdait sans cesse sa place dans le texte. Elle lisait très bien les mots, mais ses yeux sautaient d'une ligne à l'autre. « Je me suis dit qu'un outil simple pourrait l'aider », explique-t-il. Il a donc commencé à travailler sur un prototype dès le premier été.",
    "Son premier modèle était en carton, et il utilisait une lampe de poche trouvée dans un tiroir. Pour améliorer le modèle, il a passé des mois à tester différents filtres colorés, puis il a imprimé les pièces en trois dimensions. Au bout de six mois, la version suivante était assez légère pour tenir dans un cartable.",
    "Les premiers tests ont été décevants. La lumière était trop forte, et plusieurs enfants se plaignaient d'avoir mal aux yeux. Les piles, elles, se déchargeaient au bout de deux heures, et certains élèves trouvaient l'appareil trop enfantin pour leur âge. Mathis a donc revu presque chaque détail, en s'appuyant sur les conseils de douze enfants et de leurs enseignants.",
    "Aujourd'hui, le prix final est de vingt-cinq euros, et l'appareil est déjà utilisé dans quelques classes. Pour l'instant, Mathis travaille avec une association de parents d'élèves. Il reconnaît pourtant qu'il manque encore une étude scientifique sérieuse. « Il faut que je prouve son efficacité avant de le vendre à grande échelle », conclut-il.",
  ],
  questionIds: ['r3-q01', 'r3-q02', 'r3-q03', 'r3-q04', 'r3-q05', 'r3-q06', 'r3-q07', 'r3-q08', 'r3-q09', 'r3-q10'],
  source: { kind: 'own', title: 'Original text written for this portal, in the style of IB Paper 2' },
};
