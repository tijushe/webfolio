import Image from "next/image"
import Navbar from "./Navbar"
import Experience from "./Experience"
import Projects from "./Projects"
import FloatingActions from "./FloatingActions"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[700px] mx-auto px-6" id="about">

        {/* Hero / profile summary, doubles as About */}
        <header className="pt-10 pb-2">
          <h1
            className="text-[42px] font-medium mb-5 tracking-tight text-center"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            Senjuti Bala
          </h1>

          {/* Photo floats beside the first paragraph only */}
          <div className="after:content-[''] after:block after:clear-both">
            <div className="float-right w-[260px] h-[180px] ml-7 mb-3.5 border border-[var(--border)] rounded-sm overflow-hidden bg-[#EAE7DF] max-[560px]:float-none max-[560px]:w-full max-[560px]:h-[200px] max-[560px]:ml-0 max-[560px]:mb-4">
              <Image
                src="/mypic.jpg"
                alt="Senjuti Bala"
                width={260}
                height={180}
                className="object-cover w-full h-full"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
            <p
              className="text-[17.2px] leading-relaxed text-[#2b2a24]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              I am a data scientist with roots in research, consulting, and
              software development. I enjoy working at the intersection of
              data, systems, and behavioral science. I trained as an engineer
              and spent two years in technical consulting for telecom,
              fintech, and consumer goods clients in Bangladesh, primarily
              on product and financial modelling. I am most at home
              figuring out how patterns actually work. Agents are my friends,
              and a simulation is my playground. I also co-authored a book
              chapter in{" "}
              <em>Fair Data Fair Africa Fair World</em>, where I built a
              knowledge graph from the testimonies of trafficking survivors.
              My MSc. thesis introduced a two-layer agent-based model of
              climate negotiations among three types of countries. I am
              currently extending it so the agents can learn to make better
              choices.
            </p>
          </div>

          <p
            className="text-[17.2px] leading-relaxed text-[#2b2a24] mt-3.5"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            I am based in Leiden, the Netherlands, and currently looking for
            opportunities in data and applied AI. I received my
            master&rsquo;s degree from
            Leiden University in computer science. I previously studied
            information technology at the National Institute of Technology,
            Durgapur.
          </p>

          <p
            className="text-[17.2px] leading-relaxed text-[#2b2a24] mt-3.5"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            <strong>Skills:</strong> agent-based modelling, statistical
            modelling, RAG, Python (Pandas, NumPy, Scikit-learn, Matplotlib,
            Statsmodels, Plotly, Mesa), PyTorch, SQL, FAIR data, OWL/RDF
            ontology design, SPARQL, Power BI, and Streamlit. Fluent in
            English and Bengali, and a beginner in Dutch.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[14.2px] text-[var(--accent)] mt-6">
            <a href="mailto:balasenjuti22@gmail.com" className="border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              balasenjuti22@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/senjutibala/" target="_blank" rel="noopener noreferrer" className="border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/tijushe" target="_blank" rel="noopener noreferrer" className="border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              GitHub
            </a>
            <a href="https://calendly.com/balasenjuti22/30min" target="_blank" rel="noopener noreferrer" className="border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              Book a chat
            </a>
            <a href="https://www.instagram.com/tijushe/" target="_blank" rel="noopener noreferrer" className="border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              Instagram
            </a>
            <a href="https://open.spotify.com/user/31ege6ijahvlyt3mjpcs7esoukmu" target="_blank" rel="noopener noreferrer" className="border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              Spotify
            </a>
          </div>
        </header>

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Education */}
        <section id="education" className="py-11 border-t border-[var(--border-soft)]">
          <h2 className="text-[13.2px] uppercase tracking-[0.12em] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
            Education
          </h2>
          <div className="flex justify-between items-start gap-4 py-3 border-b border-[var(--border-soft)]">
            <div>
              <p className="font-medium text-[15.2px]">Leiden University</p>
              <p className="text-[14.2px] text-[var(--muted)] mt-0.5">
                MSc Computer Science, Data Science Specialisation
              </p>
            </div>
            <p className="text-[13.7px] text-[var(--faint)] shrink-0 whitespace-nowrap">2023 to 2025</p>
          </div>
          <div className="flex justify-between items-start gap-4 py-3">
            <div>
              <p className="font-medium text-[15.2px]">National Institute of Technology, Durgapur</p>
              <p className="text-[14.2px] text-[var(--muted)] mt-0.5">BTech, Information Technology</p>
            </div>
            <p className="text-[13.7px] text-[var(--faint)] shrink-0 whitespace-nowrap">2016 to 2020</p>
          </div>
        </section>

        {/* Notes: achievements, volunteering, and a few personal footnotes */}
        <section id="notes" className="py-11 border-t border-[var(--border-soft)]">
          <h2 className="text-[13.2px] uppercase tracking-[0.12em] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
            Notes
          </h2>
          <div className="text-[14.2px] text-[var(--muted)] space-y-2.5 leading-relaxed">
            <p>
              Outstanding Agility Award, twice, RedDot Digital. Awarded for
              consistent delivery across KPIs, client impact, and stakeholder
              communication.
            </p>
            <p>
              ICCR Full Scholarship: a government-funded, four-year BTech.
              JENESYS Exchange Fellowship: a fully funded exchange to Japan.
            </p>
            <p>
              Volunteers with Green Kitchen Leiden on food waste reduction.
            </p>
            <p>
              Hobbies include long-distance trekking, cycling, and films.
            </p>
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="py-11 border-t border-[var(--border-soft)] pb-10">
          <h2 className="text-[13.2px] uppercase tracking-[0.12em] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
            Contact
          </h2>
          <p
            className="text-[15.2px] text-[#2b2a24] max-w-[60ch]"
            style={{ fontFamily: "var(--font-voice)" }}
          >
            Best reached at{" "}
            <a href="mailto:balasenjuti22@gmail.com" className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors">
              balasenjuti22@gmail.com
            </a>
            .
          </p>
          <a
            href="https://calendly.com/balasenjuti22/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2.5 border border-[var(--ink)] rounded-sm text-[14.2px] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
          >
            Book a 30 min chat
          </a>
          <div className="flex flex-wrap gap-4 text-[14.2px] text-[var(--accent)] mt-6">
            <a href="https://www.linkedin.com/in/senjutibala/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">LinkedIn</a>
            <a href="https://github.com/tijushe" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">GitHub</a>
            <a href="https://www.instagram.com/tijushe/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">Instagram</a>
            <a href="https://open.spotify.com/user/31ege6ijahvlyt3mjpcs7esoukmu" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] transition-colors">Spotify</a>
          </div>
        </footer>

      </main>

      {/* Small footnote */}
      <div className="w-full flex justify-center items-center gap-2.5 py-5 bg-white">
        <Image src="/bee.gif" alt="" width={28} height={28} unoptimized />
        <span className="text-[19.7px] text-[var(--faint)] tracking-wide">save the bees</span>
      </div>

      <FloatingActions />
    </>
  )
}
