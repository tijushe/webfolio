"use client"

import { useMemo, useState } from "react"
import { decks } from "./data/flashcards"

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FlashcardsSection() {
  const [deckId, setDeckId] = useState(decks[0].id)
  const deck = decks.find((d) => d.id === deckId) ?? decks[0]

  const [order, setOrder] = useState<number[]>(() => deck.cards.map((_, i) => i))
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  function selectDeck(id: string) {
    const d = decks.find((x) => x.id === id)
    if (!d) return
    setDeckId(id)
    setOrder(d.cards.map((_, i) => i))
    setIndex(0)
    setFlipped(false)
  }

  function next() {
    setFlipped(false)
    setIndex((i) => (i + 1) % order.length)
  }

  function prev() {
    setFlipped(false)
    setIndex((i) => (i - 1 + order.length) % order.length)
  }

  function doShuffle() {
    setOrder(shuffle(deck.cards.map((_, i) => i)))
    setIndex(0)
    setFlipped(false)
  }

  const card = useMemo(() => deck.cards[order[index]], [deck, order, index])

  return (
    <div>
      {/* Deck picker */}
      <div className="flex flex-wrap gap-2 mb-6">
        {decks.map((d) => {
          const active = d.id === deckId
          return (
            <button
              key={d.id}
              onClick={() => selectDeck(d.id)}
              className="px-3.5 py-1.5 rounded-full text-[12.7px] border transition-colors"
              style={
                active
                  ? { backgroundColor: d.color.border, borderColor: d.color.border, color: "#fff" }
                  : { borderColor: d.color.border, color: d.color.text, backgroundColor: d.color.bg }
              }
            >
              {d.title}
              <span className="opacity-70"> · {d.cards.length}</span>
            </button>
          )
        })}
      </div>

      <p className="text-[13.2px] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
        {deck.description}
      </p>

      {/* Card */}
      <button
        onClick={() => setFlipped((f) => !f)}
        className="w-full min-h-[280px] border-2 rounded-sm flex flex-col items-center justify-center px-8 py-10 text-center transition-colors"
        style={{ backgroundColor: deck.color.bg, borderColor: deck.color.border }}
      >
        <span
          className="text-[11.2px] uppercase tracking-[0.12em] mb-5 opacity-70"
          style={{ color: deck.color.text }}
        >
          {flipped ? "English" : "Dutch"} · tap to flip
        </span>
        <span
          className={`leading-tight font-medium tracking-tight ${
            flipped ? "text-[26px]" : "text-[42px]"
          }`}
          style={{ fontFamily: "var(--font-voice)", color: deck.color.text }}
        >
          {flipped ? card.back : card.front}
        </span>
      </button>

      {/* Controls */}
      <div className="flex items-center justify-between mt-5">
        <span className="text-[12.7px] text-[var(--faint)]">
          {index + 1} / {order.length}
        </span>
        <div className="flex items-center gap-2.5">
          <button
            onClick={prev}
            className="px-4 py-2 border border-[var(--border)] rounded-sm text-[13.2px] hover:border-[var(--ink)] transition-colors"
          >
            Prev
          </button>
          <button
            onClick={doShuffle}
            className="px-4 py-2 border border-[var(--border)] rounded-sm text-[13.2px] hover:border-[var(--ink)] transition-colors"
          >
            Shuffle
          </button>
          <button
            onClick={next}
            className="px-4 py-2 border border-[var(--ink)] rounded-sm text-[13.2px] bg-[var(--ink)] text-[var(--bg)] hover:opacity-85 transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
