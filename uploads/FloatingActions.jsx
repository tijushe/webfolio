"use client"

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <a href="https://drive.google.com/file/d/1DxVjkAsye2fUt3EL8KQsYDnnW5rzcg_P/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#3BB143] text-white text-sm rounded-full shadow-lg hover:bg-[#0F0F1A] transition-all duration-300 cursor-pointer">
        <span className="group-hover:hidden flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>Open to Work</span>
        <span className="hidden group-hover:inline">Download CV</span>
      </a>
    </div>
  )
}