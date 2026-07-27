// Reference documents (Google Docs, mostly) for the Dutch club.
//
// HOW TO ADD ONE:
// Open the Google Doc, click Share -> "Anyone with the link" -> Viewer,
// copy the link, and add an entry below.
//
// {
//   title: "My doc title",
//   url: "https://docs.google.com/document/d/....../edit",
//   description: "One line on what's in it.",
//   category: "Grammar",
// },

export type Reference = {
  title: string
  url: string
  description?: string
  category?: string
}

export const references: Reference[] = [
  {
    title: "Grammar rules - Dutch",
    url: "https://drive.google.com/file/d/1Pli2Bu9ytA4VTqtU4YDxH9lT8jUhbgls/view?usp=sharing",
    description:
      "Notes on zouden (polite requests), om...te + infinitive, common infinitives, and other grammar points from class.",
    category: "Grammar",
  },
  {
    title: "Preply lesson notes",
    url: "https://drive.google.com/file/d/1bnIkwwZZj6DDpC3CeiR5QPhcPW_uY-jx/view?usp=sharing",
    description:
      "Pronunciation guide for tricky Dutch vowel sounds (u, uu, eu, ui, oe) plus dialogue translations from Les 1.",
    category: "Lessons",
  },
]
