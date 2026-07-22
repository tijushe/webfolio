export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center border-b border-[#1a1a2e] bg-[#0F0F1A]">
      <a href="#" className="font-semibold tracking-tight text-[#FFFF] hover:opacity-70 transition-opacity">Senjuti Bala</a>
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#education" className="hover:text-white transition-colors">Education</a>
        {/* <a href="#skills" className="hover:text-white transition-colors">Skills</a> */}
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  )
}