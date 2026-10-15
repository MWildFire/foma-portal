import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    "id": "w-yun-dong-ju-1",
    "subject": "eng",
    "topicIds": [
      "w-yun-dong-ju"
    ],
    "paper": "P2",
    "marks": 3,
    "command": "Identify",
    "prompt": {
      "en": "Identify one image of a divided self in The Road and one in Self-Portrait. Give K and C locators and explain one difference.",
      "ru": "Назовите по одному образу раздвоенного «я» в The Road и Self-Portrait. Укажите ссылки K и C и объясните одно различие."
    },
    "markscheme": {
      "en": "1: The Road K14 → C14, the self beyond the wall. 1: Self-Portrait K3 → C6 or K8 → C12–14, the man in the well. 1: explains a difference, such as inaccessible self versus visible but emotionally estranged reflection. Accept equivalent accurate references.",
      "ru": "1: The Road K14 → C14, «я» за стеной. 1: Self-Portrait K3 → C6 либо K8 → C12–14, человек в колодце. 1: объяснено различие, например недоступное «я» и видимое, но эмоционально отчуждённое отражение. Принимайте другие точные ссылки."
    },
    "model": {
      "en": "The Road locates part of the self beyond a wall (K14 → C14), so the search continues without recovery. Self-Portrait places a man in the well (K3 → C6); the observer can see him but cannot settle his feelings towards him. One image separates through an obstacle, the other through perspective.",
      "ru": "The Road помещает часть «я» за стеной (K14 → C14), поэтому поиск продолжается без обретения. Self-Portrait показывает человека в колодце (K3 → C6): наблюдатель видит его, но не может определиться с отношением. Один образ разделяет преградой, другой — перспективой."
    },
    "origin": "original",
    "minutes": 5
  },
  {
    "id": "w-yun-dong-ju-2",
    "subject": "eng",
    "topicIds": [
      "w-yun-dong-ju"
    ],
    "paper": "P2",
    "marks": 5,
    "command": "Analyse",
    "prompt": {
      "en": "Analyse how departure and return in Self-Portrait change judgement without changing the reflected man. Use the line scheme of this topic.",
      "ru": "Проанализируйте, как уходы и возвращения в Self-Portrait меняют оценку, не меняя отражённого человека. Используйте нумерацию этой темы."
    },
    "markscheme": {
      "en": "1: hatred and departure, K4 → C7. 1: pity and return, K5 → C8–9. 1: renewed hatred then longing, K6–7 → C10–11. 1: connects repetition to the unchanged image, not a physical transformation. 1: evaluates the final memory simile, K8 → C12–14, as unresolved distance. Do not require an explicit first-person pronoun: the class translation uses he.",
      "ru": "1: ненависть и уход, K4 → C7. 1: жалость и возвращение, K5 → C8–9. 1: новая ненависть, затем тоска, K6–7 → C10–11. 1: повтор связан с неизменностью отражения, а не физическим превращением. 1: оценён финальный образ воспоминания, K8 → C12–14, как неразрешённая дистанция. Не требуйте местоимения первого лица: перевод класса использует he."
    },
    "model": {
      "en": "The first departure follows hatred (K4 → C7), but distance brings pity and a return (K5 → C8–9). The man is unchanged. Another departure leads to longing (K6–7 → C10–11), so repetition changes the observer rather than the image. The final comparison with memory (K8 → C12–14) keeps the figure emotionally distant; it does not establish permanent reconciliation.",
      "ru": "Первый уход вызван ненавистью (K4 → C7), но расстояние приносит жалость и возвращение (K5 → C8–9). Человек не изменился. Ещё один уход ведёт к тоске (K6–7 → C10–11), поэтому повтор меняет наблюдателя, а не образ. Финальное сравнение с воспоминанием (K8 → C12–14) сохраняет эмоциональную дистанцию и не доказывает окончательного примирения."
    },
    "origin": "original",
    "minutes": 12
  },
  {
    "id": "w-yun-dong-ju-3",
    "subject": "eng",
    "topicIds": [
      "w-yun-dong-ju"
    ],
    "paper": "P2",
    "marks": 5,
    "command": "Evaluate",
    "prompt": {
      "en": "Evaluate the claim that The Liver simply praises obedience. Use the eagle and the turtle, with line references.",
      "ru": "Оцените утверждение, что The Liver просто восхваляет подчинение. Используйте образы орла и черепахи со ссылками на строки."
    },
    "markscheme": {
      "en": "1: qualified judgement. 1: guarding the liver, K4 → C4. 1: inviting the eagle, K5–8 → C5–8. 1: refusing the turtle, K9–10 → C9–11. 1: explains the paradox as selective commitment, preserving ambiguity rather than assigning each animal a fixed political identity.",
      "ru": "1: вывод с оговорками. 1: охрана печени, K4 → C4. 1: приглашение орлу, K5–8 → C5–8. 1: отказ черепахе, K9–10 → C9–11. 1: парадокс объяснён как избирательное обязательство с сохранением неоднозначности, без жёсткого политического шифра для каждого животного."
    },
    "model": {
      "en": "The claim is too broad. Guarding the liver (K4 → C4) conflicts with inviting the eagle to consume it (K5–8 → C5–8), creating a paradox of protection and chosen loss. The refusal of the turtle (K9–10 → C9–11) shows that the speaker can reject a demand. The poem tests which cost to accept, rather than making every obedience virtuous.",
      "ru": "Утверждение слишком широко. Охрана печени (K4 → C4) противоречит приглашению орлу пожирать её (K5–8 → C5–8), создавая парадокс защиты и выбранной утраты. Отказ черепахе (K9–10 → C9–11) показывает способность отвергнуть требование. Стихотворение испытывает выбор принимаемой цены, а не объявляет любое подчинение добродетелью."
    },
    "origin": "original",
    "minutes": 12
  }
];
