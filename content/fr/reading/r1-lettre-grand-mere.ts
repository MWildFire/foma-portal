import type { ReadingPassage } from '../types';

// Reading passage R1 (theme T1, Identities, level B1): a letter from a grandmother to her grandson about a family
// recipe and where the family comes from. Original text, five paragraphs (A to E). Questions: r1-q01 to r1-q10.
export const passage: ReadingPassage = {
  id: 'r1-lettre-grand-mere',
  theme: 'T1',
  title: { en: 'A letter about a family recipe', ru: 'Письмо о семейном рецепте' },
  level: 'B1',
  paragraphs: [
    "Mon cher Antoine, tu m'as demandé la recette du gâteau au citron que je préparais le dimanche quand tu étais petit. Tu étais très gourmand, et tu en voulais toujours un deuxième morceau. Je suis désolée d'avoir mis si longtemps à te répondre. En rangeant la cuisine, j'ai retrouvé le vieux cahier de ma mère, avec des taches de beurre sur presque toutes les pages.",
    "Il faut trois œufs, cent cinquante grammes de sucre, cent vingt grammes de farine et le jus de deux citrons. Ma mère ajoutait aussi une pincée de sel, même si personne ne comprenait pourquoi. Il faut faire cuire le gâteau pendant environ trente minutes, à four moyen. Surtout, n'ouvre pas le four trop tôt, sinon le gâteau retombe.",
    "Cette recette ne vient pas de chez nous, mais d'Italie. Ma mère, Rosa, est née dans un petit village près de Naples. Elle a quitté son pays à vingt ans, en 1932, avec une seule valise, et elle n'a jamais oublié la recette que sa propre mère lui avait apprise.",
    "Quand j'étais petite, je l'aidais à mélanger la pâte dans un grand bol en terre. Le dimanche, toute la famille venait à la maison, et le gâteau disparaissait en quelques minutes. Ma mère me disait toujours que les recettes voyagent comme les gens : elles changent un peu à chaque étape, mais elles restent reconnaissables. Pour elle, cuisiner était une façon de garder un morceau de son pays.",
    "Alors, fais ce gâteau pour tes amis et raconte-leur d'où il vient. Tu me diras si le goût est le même que dans mon souvenir. Je suis sûre qu'ils aimeront l'histoire autant que le dessert. Je t'embrasse très fort, et donne-moi vite de tes nouvelles, ta grand-mère qui pense à toi.",
  ],
  questionIds: ['r1-q01', 'r1-q02', 'r1-q03', 'r1-q04', 'r1-q05', 'r1-q06', 'r1-q07', 'r1-q08', 'r1-q09', 'r1-q10'],
  source: { kind: 'own', title: "Authors' French B material (2026)" },
};
