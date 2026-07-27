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
        {decks.map((d) => (
          <button
            key={d.id}
            onClick={() => selectDeck(d.id)}
            className={`px-3.5 py-1.5 rounded-full text-[12.7px] border transition-colors ${
              d.id === deckId
                ? "bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]"
                : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)]"
            }`}
          >
            {d.title}
            <span className="opacity-60"> · {d.cards.length}</span>
          </button>
        ))}
      </div>

      <p className="text-[13.2px] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
        {deck.description}
      </p>

      {/* Card */}
      <button
        onClick={() => setFlipped((f) => !f)}
        className="w-full h-[220px] border border-[var(--border)] rounded-sm bg-[#EAE7DF] flex flex-col items-center justify-center px-6 text-center hover:border-[var(--ink)] transition-colors"
      >
        <span className="text-[10.2px] uppercase tracking-[0.12em] text-[var(--faint)] mb-3">
          {flipped ? "English" : "Dutch"} · tap to flip
        </span>
        <span
          className="text-[26px] font-medium tracking-tight"
          style={{ fontFamily: "var(--font-voice)" }}
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
