"use client"

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <a
        href="https://drive.google.com/file/d/1DxVjkAsye2fUt3EL8KQsYDnnW5rzcg_P/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-[var(--bg)] border border-[var(--ink)] text-[var(--ink)] text-[14.2px] rounded-full shadow-sm hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-200 cursor-pointer"
      >
        <span className="group-hover:hidden flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
          Open to work
        </span>
        <span className="hidden group-hover:inline">Download CV</span>
      </a>
    </div>
  )
}
