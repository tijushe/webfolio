"use client"

import { useState } from "react"
import Navbar from "../Navbar"
import FlashcardsSection from "./FlashcardsSection"
import { vocabWeeks } from "./data/vocab"
import { references } from "./data/references"

type Tab = "vocab" | "references" | "flashcards"

const tabs: { id: Tab; label: string }[] = [
  { id: "vocab", label: "This week's vocab" },
  { id: "references", label: "References" },
  { id: "flashcards", label: "Flashcards" },
]

export default function Dutch() {
  const [tab, setTab] = useState<Tab>("vocab")

  return (
    <>
      <Navbar />
      <main className="max-w-[700px] mx-auto px-6">
        <header className="pt-14 pb-2">
          <h1
            className="text-[30.7px] font-medium mb-1.5 tracking-tight"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            Ons Nederlands
          </h1>
          <p
            className="italic text-[var(--muted)] text-[14.7px] mb-5"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            &ldquo;Oefening baart kunst.&rdquo; (Practice makes perfect.)
          </p>
          <p
            className="text-[14.7px] leading-relaxed text-[#2b2a24] max-w-[60ch]"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            A shared, unlisted corner for our Dutch practice: new words each
            week, lesson references, and flashcards to drill.
          </p>
        </header>

        {/* Tabs */}
        <nav className="flex gap-1.5 mt-8 mb-8 border-b border-[var(--border-soft)]">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-3.5 py-2.5 text-[13.2px] border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? "border-[var(--ink)] text-[var(--ink)]"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* This week's vocab */}
        {tab === "vocab" && (
          <section className="pb-10">
            {vocabWeeks.map((week) => (
              <div key={week.id} className="mb-10">
                <h2
                  className="text-[10.7px] uppercase tracking-[0.12em] text-[var(--muted)] mb-4"
                  style={{ fontFamily: "var(--font-voice)" }}
                >
                  {week.label}
                </h2>
                <div className="space-y-3">
                  {week.entries.map((entry, i) => (
                    <div
                      key={i}
                      className="border border-[var(--border-soft)] rounded-sm p-4"
                    >
                      <div className="flex items-baseline justify-between gap-3 flex-wrap">
                        <span className="text-[16.2px] font-medium">{entry.word}</span>
                        <span className="text-[13.7px] text-[var(--muted)]">
                          {entry.translation}
                        </span>
                      </div>
                      {entry.related.length > 0 && (
                        <div className="mt-2.5 pt-2.5 border-t border-[var(--border-soft)] flex flex-wrap gap-x-4 gap-y-1">
                          {entry.related.map((r, j) => (
                            <span key={j} className="text-[12.7px] text-[var(--faint)]">
                              {r.word} <span className="text-[var(--accent)]">-</span> {r.translation}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* References */}
        {tab === "references" && (
          <section className="pb-10">
            <div className="space-y-3">
              {references.map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-[var(--border-soft)] rounded-sm p-4 hover:border-[var(--ink)] transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-[15.2px] font-medium text-[var(--accent)]">
                      {ref.title}
                    </span>
                    {ref.category && (
                      <span className="text-[10.7px] uppercase tracking-[0.1em] text-[var(--faint)]">
                        {ref.category}
                      </span>
                    )}
                  </div>
                  {ref.description && (
                    <p className="text-[13.2px] text-[var(--muted)] mt-1.5">
                      {ref.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Flashcards */}
        {tab === "flashcards" && (
          <section className="pb-10">
            <FlashcardsSection />
          </section>
        )}

        <footer className="py-10 border-t border-[var(--border-soft)] pb-20">
          <div className="flex flex-wrap gap-4 text-[11.7px] text-[var(--accent)]">
            <a href="/" className="hover:text-[var(--ink)] transition-colors">Home</a>
          </div>
        </footer>
      </main>
    </>
  )
}
