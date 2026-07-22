export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex items-center gap-2 px-5 py-2.5 bg-[var(--bg)] border border-[var(--ink)] text-[var(--ink)] text-[14.2px] rounded-full shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
        Open to work
      </div>
    </div>
  )
}
