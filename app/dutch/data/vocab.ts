// Weekly vocab list for the Dutch club.
//
// HOW TO ADD A NEW WEEK:
// Copy the block below (the { id, label, entries: [...] } object), paste it
// at the TOP of the `vocabWeeks` array (so the newest week shows first),
// and fill in your words. Each word can link to 2-3 related words.
//
// {
//   id: "week-3",
//   label: "Week 3 - 10 Aug 2026",
//   entries: [
//     {
//       word: "de fiets",
//       translation: "the bicycle",
//       related: [
//         { word: "fietsen", translation: "to cycle" },
//         { word: "het wiel", translation: "the wheel" },
//       ],
//     },
//   ],
// },

export type RelatedWord = {
  word: string
  translation: string
}

export type VocabEntry = {
  word: string
  translation: string
  related: RelatedWord[]
}

export type VocabWeek = {
  id: string
  label: string
  entries: VocabEntry[]
}

export const vocabWeeks: VocabWeek[] = [
  {
    id: "week-1",
    label: "Week 1 - 27 Jul 2026",
    entries: [
      {
        word: "de kat",
        translation: "the cat",
        related: [
          { word: "het dier", translation: "the animal" },
          { word: "de hond", translation: "the dog" },
        ],
      },
      {
        word: "lopen",
        translation: "to walk",
        related: [
          { word: "rennen", translation: "to run" },
          { word: "fietsen", translation: "to cycle" },
        ],
      },
      {
        word: "het huis",
        translation: "the house",
        related: [
          { word: "de deur", translation: "the door" },
          { word: "het raam", translation: "the window" },
          { word: "de kamer", translation: "the room" },
        ],
      },
      {
        word: "vandaag",
        translation: "today",
        related: [
          { word: "morgen", translation: "tomorrow" },
          { word: "gisteren", translation: "yesterday" },
        ],
      },
      {
        word: "de vriend",
        translation: "the friend",
        related: [
          { word: "de familie", translation: "the family" },
          { word: "de collega", translation: "the colleague" },
        ],
      },
    ],
  },
]
