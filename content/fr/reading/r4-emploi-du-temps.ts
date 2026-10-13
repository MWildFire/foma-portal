import type { ReadingPassage } from '../types';

// Reading passage 4 (theme T4, Social organization): an article about a school that changed its timetable for
// students who have part-time jobs, with the opinions of students and teachers. Level B2. Original text.
export const passage: ReadingPassage = {
  id: 'r4-emploi-du-temps',
  theme: 'T4',
  title: { en: 'A timetable for students who work', ru: 'Расписание для учеников, которые работают' },
  level: 'B2',
  paragraphs: [
    "Depuis la rentrée de septembre, le lycée des Acacias, dans une ville moyenne du centre de la France, a modifié son emploi du temps. L'objectif est de permettre aux élèves qui travaillent en dehors des cours de suivre leur scolarité sans s'épuiser. Selon un sondage interne, environ un élève sur cinq occupe un petit emploi, le plus souvent dans la restauration ou la vente.",
    "Concrètement, les cours commencent désormais à neuf heures et demie, au lieu de huit heures, le mardi et le jeudi. Le vendredi après-midi est libre pour ceux qui le demandent, à condition de rattraper le contenu sur la plateforme en ligne du lycée. Les cours facultatifs ont aussi été déplacés le matin, afin que les élèves qui travaillent l'après-midi ne les manquent pas.",
    "Inès, en terminale, travaille deux soirs par semaine dans une boulangerie. « Avant, je dormais à peine cinq heures et je ne comprenais plus rien en cours. Maintenant, je fais mes devoirs avant d'aller au travail, et je suis beaucoup plus calme », explique-t-elle. Mathis, en première, est plus réservé : « Le matin, il faut se lever plus tôt pour arriver à l'heure, et je pense qu'on aurait dû consulter les élèves avant de décider. »",
    "Du côté des professeurs, les avis sont partagés. Mme Roux, responsable des études, affirme que les absences ont diminué de moitié depuis la rentrée. M. Denis, professeur de mathématiques, craint en revanche que les élèves perdent des heures de cours précieuses, surtout en fin d'année, quand le programme est très chargé.",
    "Le conseil de classe fera le bilan en juin. D'ici là, la direction a promis une enquête auprès des élèves et de leurs familles, dont les résultats seront publiés sur le site de l'établissement. Une chose est déjà certaine : ce changement a ouvert un débat qui dépasse largement les murs du lycée.",
  ],
  questionIds: ['r4-q01', 'r4-q02', 'r4-q03', 'r4-q04', 'r4-q05', 'r4-q06', 'r4-q07', 'r4-q08', 'r4-q09', 'r4-q10'],
  source: { kind: 'own', title: 'Original text written for this portal, in the style of IB Paper 2' },
};
