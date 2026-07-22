const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]

export default function Navbar() {
  return (
    <nav className="pt-6">
      <div className="max-w-[700px] mx-auto px-6 flex justify-center items-center flex-wrap gap-2.5 text-[13.7px] tracking-wide">
        {navItems.map((item, i) => (
          <span key={item.label} className="flex items-center gap-2.5">
            <a
              href={item.href}
              className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors"
            >
              {item.label}
            </a>
            {i < navItems.length - 1 && <span className="text-[var(--faint)]">&middot;</span>}
          </span>
        ))}
      </div>
    </nav>
  )
}
