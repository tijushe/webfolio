"use client"

import { useEffect, useState } from "react"
import { vocabWeeks as seedWeeks, type VocabWeek, type VocabEntry, type RelatedWord } from "./data/vocab"

const STORAGE_KEY = "dutch-club-vocab-v1"

type FormState = {
  word: string
  translation: string
  related: RelatedWord[]
}

const emptyForm: FormState = { word: "", translation: "", related: [{ word: "", translation: "" }] }

export default function VocabSection() {
  const [weeks, setWeeks] = useState<VocabWeek[]>(seedWeeks)
  const [loaded, setLoaded] = useState(false)

  // Load any local edits saved in this browser, layered on top of the seed data.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setWeeks(JSON.parse(raw))
    } catch {
      // ignore bad/old data
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(weeks))
  }, [weeks, loaded])

  const [addingToWeek, setAddingToWeek] = useState<string | null>(null)
  const [editing, setEditing] = useState<{ weekId: string; index: number } | null>(null)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [copied, setCopied] = useState(false)

  function openAdd(weekId: string) {
    setEditing(null)
    setForm(emptyForm)
    setAddingToWeek(weekId)
  }

  function openEdit(weekId: string, index: number, entry: VocabEntry) {
    setAddingToWeek(null)
    setEditing({ weekId, index })
    setForm({
      word: entry.word,
      translation: entry.translation,
      related: entry.related.length ? entry.related : [{ word: "", translation: "" }],
    })
  }

  function closeForm() {
    setAddingToWeek(null)
    setEditing(null)
    setForm(emptyForm)
  }

  function saveForm() {
    if (!form.word.trim() || !form.translation.trim()) return
    const cleanRelated = form.related
      .filter((r) => r.word.trim() && r.translation.trim())
      .slice(0, 3)
    const entry: VocabEntry = {
      word: form.word.trim(),
      translation: form.translation.trim(),
      related: cleanRelated,
    }

    if (editing) {
      setWeeks((ws) =>
        ws.map((w) =>
          w.id === editing.weekId
            ? { ...w, entries: w.entries.map((e, i) => (i === editing.index ? entry : e)) }
            : w
        )
      )
    } else if (addingToWeek) {
      setWeeks((ws) =>
        ws.map((w) => (w.id === addingToWeek ? { ...w, entries: [...w.entries, entry] } : w))
      )
    }
    closeForm()
  }

  function deleteEntry(weekId: string, index: number) {
    setWeeks((ws) =>
      ws.map((w) => (w.id === weekId ? { ...w, entries: w.entries.filter((_, i) => i !== index) } : w))
    )
  }

  function addWeek() {
    const label = window.prompt("Label for the new week, e.g. \"Week 2 - 3 Aug 2026\"")
    if (!label) return
    const id = `week-${Date.now()}`
    setWeeks((ws) => [{ id, label, entries: [] }, ...ws])
  }

  function resetToSaved() {
    if (!window.confirm("Discard your local additions and go back to the version in the code?")) return
    window.localStorage.removeItem(STORAGE_KEY)
    setWeeks(seedWeeks)
  }

  async function copyCode() {
    const code = `export const vocabWeeks: VocabWeek[] = ${JSON.stringify(weeks, null, 2)}\n`
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt("Copy this and paste it into app/dutch/data/vocab.ts:", code)
    }
  }

  function updateRelated(i: number, field: "word" | "translation", value: string) {
    setForm((f) => {
      const related = [...f.related]
      related[i] = { ...related[i], [field]: value }
      return { ...f, related }
    })
  }

  function addRelatedRow() {
    setForm((f) => (f.related.length >= 3 ? f : { ...f, related: [...f.related, { word: "", translation: "" }] }))
  }

  const inputClass =
    "w-full border border-[var(--border)] rounded-sm px-3 py-2 text-[13.7px] bg-white focus:outline-none focus:border-[var(--ink)]"

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2.5 mb-4">
        <button
          onClick={addWeek}
          className="px-3.5 py-1.5 rounded-full text-[12.7px] border border-[var(--border)] hover:border-[var(--ink)] transition-colors"
        >
          + New week
        </button>
        <button
          onClick={copyCode}
          className="px-3.5 py-1.5 rounded-full text-[12.7px] border border-[var(--border)] hover:border-[var(--ink)] transition-colors"
        >
          {copied ? "Copied!" : "Copy vocab.ts code"}
        </button>
        <button
          onClick={resetToSaved}
          className="px-3.5 py-1.5 rounded-full text-[12.7px] text-[var(--faint)] hover:text-[var(--ink)] transition-colors"
        >
          Reset to saved version
        </button>
      </div>
      <p className="text-[12.2px] text-[var(--muted)] mb-8 max-w-[60ch]">
        Adding or editing a word here saves it in this browser only. When you're happy with
        the list, hit &ldquo;Copy vocab.ts code&rdquo; and paste it into{" "}
        <code className="text-[11.5px]">app/dutch/data/vocab.ts</code>, then commit + push so
        everyone else sees it too.
      </p>

      {weeks.map((week) => (
        <div key={week.id} className="mb-10">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2
              className="text-[10.7px] uppercase tracking-[0.12em] text-[var(--muted)]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              {week.label}
            </h2>
            <button
              onClick={() => openAdd(week.id)}
              className="text-[12.2px] text-[var(--accent)] hover:text-[var(--ink)] transition-colors"
            >
              + Add word
            </button>
          </div>

          <div className="space-y-3">
            {week.entries.map((entry, i) => (
              <div key={i} className="border border-[var(--border-soft)] rounded-sm p-4 group">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <span className="text-[16.2px] font-medium">{entry.word}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[13.7px] text-[var(--muted)]">{entry.translation}</span>
                    <button
                      onClick={() => openEdit(week.id, i, entry)}
                      className="text-[11.2px] text-[var(--faint)] hover:text-[var(--ink)] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEntry(week.id, i)}
                      className="text-[11.2px] text-[var(--faint)] hover:text-[#b23]"
                    >
                      Delete
                    </button>
                  </div>
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

            {week.entries.length === 0 && (
              <p className="text-[12.7px] text-[var(--faint)] italic">No words yet.</p>
            )}

            {/* Inline add/edit form */}
            {(addingToWeek === week.id || editing?.weekId === week.id) && (
              <div className="border border-[var(--ink)] rounded-sm p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className={inputClass}
                    placeholder="Dutch word"
                    value={form.word}
                    onChange={(e) => setForm((f) => ({ ...f, word: e.target.value }))}
                  />
                  <input
                    className={inputClass}
                    placeholder="English translation"
                    value={form.translation}
                    onChange={(e) => setForm((f) => ({ ...f, translation: e.target.value }))}
                  />
                </div>

                <p className="text-[11.2px] text-[var(--faint)] pt-1">Related words (up to 3)</p>
                {form.related.map((r, i) => (
                  <div key={i} className="grid grid-cols-2 gap-3">
                    <input
                      className={inputClass}
                      placeholder="Related word"
                      value={r.word}
                      onChange={(e) => updateRelated(i, "word", e.target.value)}
                    />
                    <input
                      className={inputClass}
                      placeholder="Its translation"
                      value={r.translation}
                      onChange={(e) => updateRelated(i, "translation", e.target.value)}
                    />
                  </div>
                ))}
                {form.related.length < 3 && (
                  <button
                    onClick={addRelatedRow}
                    className="text-[11.7px] text-[var(--accent)] hover:text-[var(--ink)]"
                  >
                    + add another related word
                  </button>
                )}

                <div className="flex gap-2.5 pt-2">
                  <button
                    onClick={saveForm}
                    className="px-4 py-2 border border-[var(--ink)] rounded-sm text-[13.2px] bg-[var(--ink)] text-[var(--bg)] hover:opacity-85 transition-opacity"
                  >
                    {editing ? "Save changes" : "Add word"}
                  </button>
                  <button
                    onClick={closeForm}
                    className="px-4 py-2 border border-[var(--border)] rounded-sm text-[13.2px] hover:border-[var(--ink)] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
