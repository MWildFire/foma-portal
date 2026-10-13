import type { ListeningTrack } from '../types';

// L5 (theme T5, Sharing the planet): a radio report on rainwater at a school (a fictional school). Level B2.
export const track: ListeningTrack = {
  id: 'l5-school-water',
  theme: 'T5',
  title: { en: 'Radio report: rainwater at school', ru: 'Радиорепортаж: дождевая вода в школе' },
  level: 'B2',
  genre: 'report',
  turns: [
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Bonjour à tous, ici Gabrielle, pour notre rubrique environnement. Aujourd'hui, je vous emmène dans un lycée qui a décidé de ne plus gaspiller la moindre goutte d'eau de pluie." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Depuis la rentrée de septembre, deux grandes cuves ont été installées derrière le bâtiment principal. Elles récupèrent l'eau qui tombe du toit, et ensemble, elles peuvent contenir douze mille litres." },
    { speaker: 'Le professeur', voice: 'Remi', fr: "Alors, l'idée vient d'un groupe d'élèves de première. Ils ont d'abord mesuré la consommation d'eau du lycée pendant un trimestre entier. Le résultat les a vraiment surpris : les toilettes et l'arrosage du jardin représentaient presque les trois quarts de la consommation." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Et l'eau de pluie, concrètement, à quoi sert-elle ?" },
    { speaker: 'Le professeur', voice: 'Remi', fr: "Elle sert à arroser le potager et à alimenter les chasses d'eau. On ne la boit pas, bien sûr. Pour la cantine et les fontaines, on continue à utiliser l'eau du réseau, parce que les règles de sécurité sont très strictes." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Et le financement ? Ça a coûté cher ?" },
    { speaker: 'Le professeur', voice: 'Remi', fr: "Pas tant que ça. L'association des parents d'élèves a financé une partie des cuves. Le reste, c'est surtout le travail des élèves : ils ont fabriqué eux-mêmes les filtres avec des pièces récupérées." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Et les premiers résultats, on les connaît déjà ?" },
    { speaker: 'Le professeur', voice: 'Remi', fr: "Franchement, oui. Pendant le mois d'octobre, la consommation d'eau du lycée a baissé d'environ un quart. Bon, c'est encore trop court pour tirer des conclusions définitives, mais on voit déjà une vraie différence." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Et les élèves, qu'est-ce qu'ils pensent de tout ça ?" },
    { speaker: 'Le professeur', voice: 'Remi', fr: "Ils sont très fiers, évidemment. Et ils ont déjà une nouvelle idée : étendre le système à la cantine. Mais ça demandera beaucoup plus d'argent et davantage d'autorisations. Donc ce sera pour l'année prochaine, au plus tôt." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Pour finir, un conseil pour ceux qui voudraient se lancer chez eux ?" },
    { speaker: 'Le professeur', voice: 'Remi', fr: "Oui : commencez par mesurer. Quand on voit combien on consomme, on comprend tout de suite où se trouvent les gaspillages. Un robinet qui fuit, par exemple, peut perdre des dizaines de litres par jour sans que personne s'en aperçoive." },
    { speaker: 'La journaliste', voice: 'Gabrielle', fr: "Merci beaucoup à tous. Rendez-vous la semaine prochaine pour notre prochain reportage." },
  ],
  questionIds: ['l5-q01', 'l5-q02', 'l5-q03', 'l5-q04', 'l5-q05', 'l5-q06', 'l5-q07', 'l5-q08', 'l5-q09', 'l5-q10'],
  audio: '/audio/fr/l5-school-water.mp3',
  source: { kind: 'own', title: 'Original text written for this portal, in the style of IB Paper 2' },
};
