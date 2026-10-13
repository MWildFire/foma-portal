import type { ReadingPassage } from '../types';

// Reading passage 5 (theme T5, Sharing the planet): a fictional village that cut its plastic waste, with the local
// actions and their results. Level B2. Original text.
export const passage: ReadingPassage = {
  id: 'r5-village-sans-plastique',
  theme: 'T5',
  title: { en: 'A village that cut its plastic waste', ru: 'Деревня, которая сократила пластиковые отходы' },
  level: 'B2',
  paragraphs: [
    "Il y a cinq ans, le village de Crozeval produisait près de deux tonnes de déchets plastiques par an, un chiffre que le maire jugeait inacceptable. Aujourd'hui, la quantité a diminué de plus de moitié, et le village est souvent cité en exemple dans la région. Ce résultat est le fruit d'une série de mesures, discutées peu à peu avec les habitants.",
    "La première action a visé les commerces. Depuis deux ans, la boulangerie et l'épicerie ne distribuent plus de sachets en plastique, et les clients peuvent apporter leurs propres boîtes. Une couturière du village a également proposé des sacs en tissu, vendus à prix coûtant, afin que personne ne soit privé de courses.",
    "La deuxième mesure concernait l'école et la cantine. Les repas sont désormais servis dans de la vaisselle réutilisable, et les bouteilles en plastique ont été remplacées par des fontaines installées dans la cour. Les enfants ont même conçu une affiche pour expliquer le projet aux parents, ce qui a beaucoup touché les familles.",
    "Les habitants, eux, se sont mobilisés autour d'un système de collecte. Une fois par mois, des volontaires ramassent les déchets dans les champs et le long de la rivière, puis trient ce qui peut être recyclé. Selon l'association qui coordonne ces opérations, la quantité collectée a baissé d'environ un tiers en deux ans, même si certains déchets viennent encore de la route nationale.",
    "Malgré ces résultats, tout n'est pas réglé. Certains habitants estiment que les mesures coûtent cher aux petits commerçants, et le conseil municipal étudie donc une aide financière. Le maire reconnaît qu'il faudra du temps avant d'atteindre l'objectif zéro plastique, mais il affirme que le village a déjà prouvé qu'un changement est possible.",
  ],
  questionIds: ['r5-q01', 'r5-q02', 'r5-q03', 'r5-q04', 'r5-q05', 'r5-q06', 'r5-q07', 'r5-q08', 'r5-q09', 'r5-q10'],
  source: { kind: 'own', title: 'Original text written for this portal, in the style of IB Paper 2' },
};
