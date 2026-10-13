import type { ListeningTrack } from '../types';

// L6 (theme T2, Experiences): two colleagues plan a work trip to Lyon (train, hotel, budget, weather). Level B1.
export const track: ListeningTrack = {
  id: 'l6-trip-to-lyon',
  theme: 'T2',
  title: { en: 'Planning a team trip to Lyon', ru: 'Планируем поездку команды в Лион' },
  level: 'B1',
  genre: 'dialogue',
  turns: [
    { speaker: 'Léa', voice: 'Lea', fr: "Bon, il faut qu'on organise le déplacement pour le séminaire à Lyon. Tu as déjà regardé les trains ?" },
    { speaker: 'Rémi', voice: 'Remi', fr: "Oui, hier soir. Un aller-retour coûte environ cent euros par personne, si on réserve maintenant. Le train est direct, donc on met une heure et quart. Le mieux, c'est de partir le lundi matin." },
    { speaker: 'Léa', voice: 'Lea', fr: "D'accord. Quel train exactement ?" },
    { speaker: 'Rémi', voice: 'Remi', fr: "Celui de huit heures. Le séminaire commence à dix heures, donc on a le temps de poser nos affaires et de prendre un café tranquillement." },
    { speaker: 'Léa', voice: 'Lea', fr: "Très bien. Et le séminaire, il est loin de la gare ?" },
    { speaker: 'Rémi', voice: 'Remi', fr: "Non, il est à une vingtaine de minutes à pied. Et lundi, il devrait faire beau, donc on peut marcher." },
    { speaker: 'Léa', voice: 'Lea', fr: "Parfait. Et l'hôtel, on dort où ?" },
    { speaker: 'Rémi', voice: 'Remi', fr: "Dans un petit hôtel, à cinq minutes de la gare. Une chambre coûte soixante euros la nuit, mais le petit-déjeuner n'est pas compris. Le wifi, par contre, est gratuit." },
    { speaker: 'Léa', voice: 'Lea', fr: "Soixante euros, ça va. Notre budget, c'est quatre cent cinquante euros pour nous deux. Avec les trains et deux chambres pour deux nuits, on reste en dessous, mais de peu." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Parfait. Et la météo, tu as regardé ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Oui. Lundi, il va faire beau. Mardi, par contre, il va pleuvoir toute la journée, et il fera froid le soir." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Alors je vais prendre un manteau chaud. Et toi, n'oublie pas le parapluie !" },
    { speaker: 'Léa', voice: 'Lea', fr: "Ça marche. Moi, je réserve les billets de train aujourd'hui. Toi, tu t'occupes de l'hôtel, comme ça, on ne fait pas deux fois le même travail. Je vais aussi envoyer les informations à toute l'équipe ce soir." },
    { speaker: 'Rémi', voice: 'Remi', fr: "D'accord. Et le retour, on le prévoit quel jour ?" },
    { speaker: 'Léa', voice: 'Lea', fr: "Mardi soir, vers dix-neuf heures. Comme ça, on n'a pas besoin d'une troisième nuit, et on rentre tranquilles." },
    { speaker: 'Rémi', voice: 'Remi', fr: "Parfait. Alors, à lundi, à sept heures et demie, à la gare !" },
  ],
  questionIds: ['l6-q01', 'l6-q02', 'l6-q03', 'l6-q04', 'l6-q05', 'l6-q06', 'l6-q07', 'l6-q08', 'l6-q09', 'l6-q10'],
  audio: '/audio/fr/l6-trip-to-lyon.mp3',
  source: { kind: 'own', title: 'Original text written for this portal, in the style of IB Paper 2' },
};
