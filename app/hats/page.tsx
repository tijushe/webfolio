import Navbar from "../Navbar"

export default function Hats() {
  return (
    <>
      <Navbar />
      <main className="max-w-[700px] mx-auto px-6">

        <header className="pt-14 pb-2">
          <h1
            className="text-[30.7px] font-medium mb-1.5 tracking-tight"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            Off the clock
          </h1>
          <p
            className="italic text-[var(--muted)] text-[14.7px] mb-5"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            &ldquo;I wear many hats.&rdquo;
          </p>
          <p
            className="text-[14.7px] leading-relaxed text-[#2b2a24] max-w-[60ch]"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            The rest of what I make, outside spreadsheets and simulations.
            Mostly a camera, and before that, a lot of fonts.
          </p>
        </header>

        <section id="photography" className="py-10 border-t border-[var(--border-soft)]">
          <h2 className="text-[10.7px] uppercase tracking-[0.12em] text-[var(--muted)] mb-4" style={{ fontFamily: "var(--font-voice)" }}>
            Photography
          </h2>
          <p
            className="text-[13.7px] leading-relaxed text-[#2b2a24] max-w-[60ch] mb-4"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            I got my first DSLR, a Canon 600D, in my early teens. I spent the
            next five years carrying multiple lenses, a tripod, and a camera
            bag everywhere, like it was a personality. It was. That same
            camera eventually led to two short films made with my best friend,
            both selected at the Children&rsquo;s Film Festival in Dhaka, one
            of them a prize winner.
          </p>
          <div className="w-full h-[260px] border border-[var(--border)] rounded-sm bg-[#EAE7DF] flex items-center justify-center max-[560px]:h-[180px]">
            <span className="text-[9.7px] text-[var(--faint)] text-center px-2">photo grid, placeholder</span>
          </div>
        </section>

        <section id="design" className="py-10 border-t border-[var(--border-soft)]">
          <h2 className="text-[10.7px] uppercase tracking-[0.12em] text-[var(--muted)] mb-4" style={{ fontFamily: "var(--font-voice)" }}>
            Graphic design
          </h2>
          <p
            className="text-[13.7px] leading-relaxed text-[#2b2a24] max-w-[60ch] mb-4"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            In college I ran my own small team of designers and developers. I
            still quietly judge people by the fonts they choose.
          </p>
          <div className="w-full h-[260px] border border-[var(--border)] rounded-sm bg-[#EAE7DF] flex items-center justify-center max-[560px]:h-[180px]">
            <span className="text-[9.7px] text-[var(--faint)] text-center px-2">design samples, placeholder</span>
          </div>
        </section>

        <footer className="py-10 border-t border-[var(--border-soft)] pb-20">
          <div className="flex flex-wrap gap-4 text-[11.7px] text-[var(--accent)]">
            <a href="/" className="hover:text-[var(--ink)] transition-colors">Home</a>
          </div>
        </footer>

      </main>
    </>
  )
}
