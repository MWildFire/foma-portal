import type { ReadingPassage } from '../types';

// Reading passage 6 (theme T4, Social organization): a fictional city introduces three new bus lines and residents
// give their opinions. Level B1. Original text.
export const passage: ReadingPassage = {
  id: 'r6-lignes-de-bus',
  theme: 'T4',
  title: { en: 'New bus lines in Vallonne', ru: 'Новые автобусные линии в Валонне' },
  level: 'B1',
  paragraphs: [
    "En septembre, la ville de Vallonne a mis en service trois nouvelles lignes de bus. Elles relient les quartiers de la périphérie au centre-ville et à la gare. La mairie espère ainsi que beaucoup d'habitants renonceront à prendre leur voiture pour aller au travail, ce qui réduirait les embouteillages du matin.",
    "La ligne 7 est la plus fréquentée. Elle dessert le lycée et l'hôpital, et les bus passent toutes les dix minutes entre sept et neuf heures du matin. Les véhicules sont neufs et équipés d'un écran qui indique l'heure du prochain passage. Les usagers disent que c'est pratique, même si les sièges sont un peu durs.",
    "Marie habite près du parc des Tilleuls, et elle est très contente. « Avant, il fallait attendre une demi-heure pour prendre le bus. Maintenant, j'arrive au travail en vingt minutes, sans voiture. » Ahmed, lui, trouve que la ligne 9 s'arrête trop tôt le soir : « Quand je finis mon travail à onze heures, je dois rentrer à pied, et ce n'est pas agréable. »",
    "Certains commerçants du centre-ville sont moins contents. Pendant les travaux, les rues autour de la gare sont restées fermées trois mois, et plusieurs boutiques ont perdu des clients. Le propriétaire d'une librairie demande maintenant une aide à la mairie pour compenser ses pertes. Selon lui, les clients reviennent doucement depuis quelques semaines.",
    "La mairie publiera un bilan dans six mois. Si la demande augmente, elle ajoutera des bus le soir. Les habitants peuvent donner leur avis sur le site internet de la ville jusqu'au 30 novembre. Une réunion publique est aussi prévue au mois de décembre, dans la grande salle de la mairie.",
  ],
  questionIds: ['r6-q01', 'r6-q02', 'r6-q03', 'r6-q04', 'r6-q05', 'r6-q06', 'r6-q07', 'r6-q08', 'r6-q09', 'r6-q10'],
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
