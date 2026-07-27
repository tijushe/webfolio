"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { decks } from "./data/flashcards"

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Pick the best available Dutch voice, if any. Falls back to lang="nl-NL"
// on the utterance either way, which most browsers can still speak
// reasonably even without a dedicated voice installed.
function pickDutchVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang === "nl-NL") ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("nl")) ||
    undefined
  )
}

function speakDutch(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return
  window.speechSynthesis.cancel() // stop anything already playing
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = "nl-NL"
  utter.rate = 0.9
  const voice = pickDutchVoice()
  if (voice) utter.voice = voice
  window.speechSynthesis.speak(utter)
}

export default function FlashcardsSection() {
  const [deckId, setDeckId] = useState(decks[0].id)
  const deck = decks.find((d) => d.id === deckId) ?? decks[0]

  const [order, setOrder] = useState<number[]>(() => deck.cards.map((_, i) => i))
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const [speechReady, setSpeechReady] = useState(false)

  // Voice lists load asynchronously in some browsers.
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return
    setSpeechReady(true)
    const handler = () => setSpeechReady(true)
    window.speechSynthesis.addEventListener("voiceschanged", handler)
    return () => window.speechSynthesis.removeEventListener("voiceschanged", handler)
  }, [])

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

  // Auto-pronounce whenever a new card comes up (only after the user has
  // turned it on, which counts as the user gesture browsers require).
  const firstRun = useRef(true)
  useEffect(() => {
    if (!autoPlay) return
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    speakDutch(card.front)
  }, [card, autoPlay])

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

      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <p className="text-[13.2px] text-[var(--muted)]" style={{ fontFamily: "var(--font-voice)" }}>
          {deck.description}
        </p>
        {speechReady && (
          <label className="flex items-center gap-1.5 text-[12.2px] text-[var(--muted)] cursor-pointer">
            <input
              type="checkbox"
              checked={autoPlay}
              onChange={(e) => setAutoPlay(e.target.checked)}
              className="accent-[var(--ink)]"
            />
            Auto-pronounce
          </label>
        )}
      </div>

      {/* Card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped((f) => !f)}
        className="relative w-full min-h-[280px] border-2 rounded-sm flex flex-col items-center justify-center px-8 py-10 text-center transition-colors cursor-pointer"
        style={{ backgroundColor: deck.color.bg, borderColor: deck.color.border }}
      >
        {speechReady && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              speakDutch(card.front)
            }}
            aria-label="Pronounce this word"
            title="Pronounce this word"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border transition-colors hover:opacity-80"
            style={{ borderColor: deck.color.border, color: deck.color.text, backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            🔊
          </button>
        )}

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
      </div>

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
