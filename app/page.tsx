import type { Metadata } from "next"
import { Gloock } from "next/font/google"
import { createElement } from "react"

const gloock = Gloock({ weight: "400", subsets: ["latin"] })

// Anchor helper: renders a normal <a> tag, written this way so the
// code survives copy-paste without tags being stripped.
const A = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
  createElement("a", props)

// ─────────────────────────────────────────────────────────────
// Edit these once details are final.
// ─────────────────────────────────────────────────────────────
const NAME = "Senjuti Bala"
const COMPANY = "S.Bala Studio" // Trade name as registered at KvK
const SUBTITLE = "Financial data & reporting automation"
const EMAIL = "senjuti@sbala.studio"
const PHONE: string = "" // TODO: add business number, e.g. "+31 6 41 935 587"
const KVK = "42177480"
const BRANCH = "000066835097" // vestigingsnummer
const ADDRESS = "Vijf Meiplein 108, 2321 BS Leiden"
const LEGAL_FORM = "Sole proprietorship (eenmanszaak)"
const BTW = "" // TODO: add VAT ID (btw-id) from the Belastingdienst letter
const CALENDLY = "https://calendly.com/balasenjuti22/30min"
const LINKEDIN = "https://www.linkedin.com/in/senjutibala/"
const PAPER =
  "https://www.researchgate.net/publication/391762371_Creation_of_a_FAIR_Data_Point_for_a_Clinical_Trial_the_schistosome_controlled_human_infection_dataset"
// TODO: point at a real endpoint (Formspree, Basin, Resend route, /api/contact).
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"
const BRAND = "oklch(48.8% 0.243 264.376)" // primary
const CREAM = "oklch(98.5% 0 0)" // secondary

export const metadata: Metadata = {
  title: `${COMPANY} — ${SUBTITLE}`,
  description:
    "KPI dashboards, data reconciliation and automated reports for small and medium-sized businesses and nonprofits. Based in Leiden.",
  // Indexing is on: the site should be findable once it is live.
  // Fill in every TODO above before deploying.
}

const marquee = [
  "KPI dashboards",
  "Financial data reconciliation",
  "Automated client reporting",
  "Scenario analysis",
  "Python & SQL",
  "Private AI on your own data",
]

const navLinks = [
  { label: "What I do", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const reasons = [
  {
    n: "1",
    title: "Correct figures",
    body: "Every number is checked against the source before you use it.",
  },
  {
    n: "2",
    title: "Less manual work",
    body: "Dashboards and reports update themselves. No more copying between spreadsheets.",
  },
  {
    n: "3",
    title: "Data stays with you",
    body: "Everything runs on your own systems or in the EU. Your data does not leave your business.",
  },
]

const services = [
  {
    title: "KPI dashboards",
    body: "Data from all your clients in one overview. Built in Python and SQL.",
  },
  {
    title: "Data reconciliation",
    body: "Financial data cleaned and checked. Errors traced back to the source.",
  },
  {
    title: "Automated reports",
    body: "Recurring reports and summaries generated automatically. You check them, you don't build them.",
  },
  {
    title: "Scenario analysis",
    body: "Reusable models for the what-if questions of business owners and DGAs.",
  },
  {
    title: "Record matching",
    body: "The same client, spelled differently in three systems, recognised as one.",
  },
  {
    title: "AI on your own systems",
    body: "AI that flags errors and drafts summaries, without sending data outside your business.",
  },
]

// Anonymised: no client names.
const work = [
  "KPI dashboards in Python and SQL, combining client data from different engagements",
  "Cleaning and reconciling client financial data before figures went to clients",
  "Scenario analyses and data summaries for advisory work with business owners and DGAs",
  "Financial modelling for telecom, fintech and consumer goods clients (RedDot Digital, a sister concern of Axiata Group, Dhaka, Bangladesh, 2021–2023)",
]

const steps = [
  { n: "1", title: "Call", body: "30 minutes, free." },
  { n: "2", title: "Scan", body: "One day. You get a list of what to automate first." },
  { n: "3", title: "Build", body: "Fixed price, agreed in writing." },
  { n: "4", title: "Support", body: "Optional, per month." },
]

const scan = {
  title: "Start with a scan",
  price: "€395",
  unit: "one day, fixed price",
  body: "I spend one day on how your business collects, checks and reports its figures. You get a short list of what to automate first, with the hours it saves and the cost.",
  credit: "Deducted from the project if you start within 60 days.",
}

const faqs = [
  {
    q: "Is my data safe?",
    a: "Yes. Everything runs on your own systems or in the EU. Data is not sent to external AI services. You own the code and the data.",
  },
  {
    q: "What does it cost?",
    a: "The first call is free. The scan is €395. After that you get a fixed price in writing before any work starts.",
  },
  {
    q: "Do we need new software?",
    a: "No. I work with the exports and databases you already have.",
  },
  {
    q: "How long does it take?",
    a: "A first working version usually takes a few weeks.",
  },
  {
    q: "Who does the work?",
    a: `${NAME}. The person you talk to is the person who builds it.`,
  },
  {
    q: "What if we stop?",
    a: "Everything keeps working. You own the code and the documentation.",
  },
]

// Cross markers at grid intersections, tailwindcss.com style.
function Crosses() {
  return (
    <>
      <span className="cross absolute -top-[11px] -left-[7px]">+</span>
      <span className="cross absolute -top-[11px] -right-[7px]">+</span>
    </>
  )
}

export default function Studio() {
  const fieldClass =
    "w-full mt-1.5 px-3.5 py-2.5 text-[15.2px] bg-white border border-[var(--border-soft)] rounded-sm outline-none focus:border-[var(--ink)] transition-colors"
  const labelClass = "block text-[14.2px] font-medium"

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(18px, -12px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .drift { animation: drift 14s ease-in-out infinite; }
        .lift {
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .lift:hover {
          transform: translateY(-3px);
          border-color: var(--ink);
        }
        .cross {
          color: var(--faint);
          font-size: 16px;
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }
        details.faq summary { cursor: pointer; list-style: none; }
        details.faq summary::-webkit-details-marker { display: none; }
        details.faq summary::after {
          content: "+";
          float: right;
          color: var(--faint);
          transition: transform 0.2s ease;
        }
        details.faq[open] summary::after { transform: rotate(45deg); }
        .hp { position: absolute; left: -9999px; opacity: 0; }
      `}</style>

      {/* ── Landing panel with faint blueprint grid ── */}
      <div
        className="min-h-screen flex flex-col relative overflow-hidden"
        style={{
          backgroundColor: BRAND,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          aria-hidden="true"
          className="drift absolute top-[10%] right-[-100px] w-[420px] h-[420px] rounded-full opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, white, transparent 70%)",
          }}
        />

        {/* Nav */}
        <nav className="max-w-[1100px] mx-auto px-8 w-full pt-7 flex items-center justify-between relative">
          <p
            className={`${gloock.className} text-[30px] text-white tracking-tight`}
          >
            {COMPANY}
          </p>
          <div className="flex items-center gap-7 max-[560px]:gap-4">
            {navLinks.map((l) => (
              <A
                key={l.href}
                href={l.href}
                className="text-[14.7px] text-white/75 hover:text-white transition-colors"
              >
                {l.label}
              </A>
            ))}
            <A
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.7px] px-4 py-2 rounded-sm hover:opacity-90 transition-opacity max-[560px]:hidden"
              style={{ backgroundColor: CREAM, color: BRAND }}
            >
              Free consultation
            </A>
          </div>
        </nav>

        {/* Hero */}
        <div className="max-w-[1100px] mx-auto px-8 w-full flex-1 flex flex-col justify-center relative">
          <div className="grid grid-cols-[1.2fr_1fr] gap-12 items-end max-[820px]:grid-cols-1 max-[820px]:gap-7">
            <div>
              <p className="text-[13.2px] uppercase tracking-[0.14em] text-white/60 mb-5">
                {SUBTITLE} · Leiden
              </p>
              <h1
                className="text-[58px] leading-[1.08] font-medium tracking-tight text-white max-[820px]:text-[40px]"
                style={{ fontFamily: "var(--font-voice)" }}
              >
                Less time on spreadsheets. More time for your clients.
              </h1>
            </div>
            <div className="pb-2">
              <p
                className="text-[19.2px] leading-relaxed text-white/90"
                style={{ fontFamily: "var(--font-voice)" }}
              >
                I build dashboards, data checks and automated reports for
                small business owners and the advisers they work with.
              </p>
              <div className="mt-6">
                <A
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-sm text-[16.2px] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: CREAM, color: BRAND }}
                >
                  Book a free consultation
                </A>
                <p className="text-[13.2px] text-white/60 mt-2.5">
                  Free. Reply within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="py-6 border-t border-white/20 overflow-hidden relative">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="text-[14.7px] uppercase tracking-[0.12em] text-white/80 whitespace-nowrap px-7"
              >
                {m} <span className="text-white/40 pl-12">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Below: cream page with visible grid rails ── */}
      <div style={{ backgroundColor: CREAM }}>
        <main className="max-w-[1100px] mx-auto px-8 relative border-x border-[var(--border-soft)]">
          {/* 1 / 2 / 3 */}
          <section className="relative py-14">
            <div className="grid grid-cols-3 gap-6 max-[820px]:grid-cols-1">
              {reasons.map((r) => (
                <div
                  key={r.n}
                  className="lift bg-white border border-[var(--border-soft)] rounded-sm p-6"
                >
                  <p
                    className="text-[36px]"
                    style={{ fontFamily: "var(--font-voice)", color: BRAND }}
                  >
                    {r.n}
                  </p>
                  <h3 className="text-[18.2px] font-medium mt-2">{r.title}</h3>
                  <p className="text-[15.2px] leading-relaxed text-[var(--muted)] mt-2">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What I do */}
          <section
            id="services"
            className="relative py-14 border-t border-[var(--border-soft)] scroll-mt-6"
          >
            <Crosses />
            <h2
              className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              What I do
            </h2>
            <p className="text-[16.2px] leading-relaxed text-[var(--muted)] mt-3 max-w-[56ch]">
              Your figures are spread over different systems and
              rebuilt by hand every month. I automate that.
            </p>
            <div className="grid grid-cols-3 gap-5 mt-9 max-[820px]:grid-cols-1">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="lift bg-white border border-[var(--border-soft)] rounded-sm p-5"
                >
                  <p
                    className="text-[22px] leading-none"
                    style={{ fontFamily: "var(--font-voice)", color: BRAND }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[16.2px] font-medium mt-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[14.2px] leading-relaxed text-[var(--muted)] mt-1.5">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[14.7px] text-[var(--muted)] mt-8">
              For small and medium-sized businesses and nonprofits in the Netherlands.
            </p>
          </section>

          {/* Experience */}
          <section
            id="experience"
            className="relative py-14 border-t border-[var(--border-soft)] scroll-mt-6"
          >
            <Crosses />
            <h2
              className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              Done before
            </h2>
            <ul className="mt-5 space-y-2 max-w-[70ch]">
              {work.map((w) => (
                <li
                  key={w}
                  className="text-[15.2px] leading-relaxed text-[var(--muted)] pl-5 relative"
                >
                  <span className="absolute left-0" style={{ color: BRAND }}>
                    –
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </section>

          {/* How it works */}
          <section className="relative py-14 border-t border-[var(--border-soft)]">
            <Crosses />
            <h2
              className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              How it works
            </h2>
            <div className="grid grid-cols-4 gap-5 mt-9 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1">
              {steps.map((s) => (
                <div key={s.n}>
                  <p
                    className="text-[22px] leading-none"
                    style={{ fontFamily: "var(--font-voice)", color: BRAND }}
                  >
                    {s.n}
                  </p>
                  <h3 className="text-[16.2px] font-medium mt-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[14.2px] leading-relaxed text-[var(--muted)] mt-1.5">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section
            id="pricing"
            className="relative py-14 border-t border-[var(--border-soft)] scroll-mt-6"
          >
            <Crosses />
            <h2
              className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              What it costs
            </h2>
            {/* Entry point */}
            <div
              className="mt-9 rounded-sm p-7 grid grid-cols-[1fr_auto] gap-8 items-start max-[820px]:grid-cols-1 max-[820px]:gap-5"
              style={{
                backgroundColor: BRAND,
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            >
              <div>
                <p className="text-[13.2px] uppercase tracking-[0.14em] text-white/60">
                  Start here
                </p>
                <h3
                  className="text-[26px] leading-snug font-medium text-white mt-2"
                  style={{ fontFamily: "var(--font-voice)" }}
                >
                  {scan.title}
                </h3>
                <p className="text-[15.7px] leading-relaxed text-white/85 mt-3 max-w-[52ch]">
                  {scan.body}
                </p>
                <p className="text-[14.2px] text-white/70 mt-3">
                  {scan.credit}
                </p>
              </div>
              <div className="text-right max-[820px]:text-left">
                <p
                  className="text-[42px] leading-none text-white"
                  style={{ fontFamily: "var(--font-voice)" }}
                >
                  {scan.price}
                </p>
                <p className="text-[13.2px] text-white/60 mt-1.5">
                  {scan.unit}
                </p>
                <A
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 px-5 py-2.5 rounded-sm text-[15.2px] hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: CREAM, color: BRAND }}
                >
                  Book a free call
                </A>
              </div>
            </div>

            {/* Terms */}
            <p className="text-[14.2px] leading-relaxed text-[var(--muted)] mt-8">
              Prices exclude 21% VAT. Payment: 40% at the start, 60% on
              delivery, within 14 days.
            </p>
          </section>

          {/* About */}
          <section
            id="about"
            className="relative py-16 border-t border-[var(--border-soft)] scroll-mt-6"
          >
            <Crosses />
            <h2
              className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              About me
            </h2>
            <p className="text-[16.2px] leading-relaxed text-[var(--muted)] mt-4">
              I am {NAME}, a data scientist with an MSc in Computer
              Science (Data Science) from Leiden University and a BTech in
              Information Technology from NIT Durgapur.
            </p>
            <p className="text-[16.2px] leading-relaxed text-[var(--muted)] mt-3">
              Before starting {COMPANY}, I built KPI dashboards and
              reconciled client financial data for management advisory
              work, and spent two years as a technical consultant on
              product and financial modelling for telecom, fintech and
              consumer goods clients. I also worked as a software engineer
              and started out in process automation.
            </p>
            <p className="text-[16.2px] leading-relaxed text-[var(--muted)] mt-3">
              I co-authored a chapter in{" "}
              <A
                href={PAPER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
              >
                <em>Fair Data Fair Africa Fair World</em>
              </A>{" "}
              (2025) on structuring 126 sensitive interviews
              under full GDPR compliance. I also build AI systems that run
              fully offline, so data never leaves your organisation. You
              talk to the person who builds it.
            </p>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="relative py-16 border-t border-[var(--border-soft)] grid grid-cols-2 gap-14 max-[820px]:grid-cols-1 max-[820px]:gap-6 scroll-mt-6"
          >
            <Crosses />
            <h2
              className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="faq bg-white border border-[var(--border-soft)] rounded-sm p-4"
                >
                  <summary className="text-[16.2px] font-medium">
                    {f.q}
                  </summary>
                  <p className="text-[14.7px] leading-relaxed text-[var(--muted)] mt-3">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Contact form */}
          <section
            id="contact"
            className="relative py-16 border-t border-[var(--border-soft)] grid grid-cols-2 gap-14 max-[820px]:grid-cols-1 max-[820px]:gap-7 scroll-mt-6"
          >
            <Crosses />
            <div>
              <h2
                className="text-[36px] leading-snug font-medium tracking-tight max-[820px]:text-[30px]"
                style={{ fontFamily: "var(--font-voice)" }}
              >
                Contact
              </h2>
              <p className="text-[16.2px] leading-relaxed text-[var(--muted)] mt-4 max-w-[48ch]">
                Tell me what takes too much time. I reply within 24
                hours.
              </p>
              <p className="text-[14.7px] text-[var(--muted)] mt-5">
                Prefer to talk?{" "}
                <A
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                >
                  Book a free 30-minute call
                </A>
                .
              </p>
              <p className="text-[14.7px] text-[var(--muted)] mt-2">
                Or email{" "}
                <A
                  href={`mailto:${EMAIL}`}
                  className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                >
                  {EMAIL}
                </A>
                {PHONE && (
                  <>
                    {" "}
                    or call{" "}
                    <A
                      href={`tel:${PHONE.replace(/\s/g, "")}`}
                      className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                    >
                      {PHONE}
                    </A>
                  </>
                )}
                .
              </p>
              <p className="text-[14.7px] text-[var(--muted)] mt-2">
                Or find me on{" "}
                <A
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                >
                  LinkedIn
                </A>
                .
              </p>
            </div>

            <form
              action={FORM_ENDPOINT}
              method="POST"
              className="bg-white border border-[var(--border-soft)] rounded-sm p-6 space-y-4"
            >
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input
                  className={fieldClass}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="organisation">
                  Organisation
                </label>
                <input
                  className={fieldClass}
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={fieldClass}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone{" "}
                    <span className="text-[var(--faint)] font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    className={fieldClass}
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  What would you like to automate?
                </label>
                <textarea
                  className={`${fieldClass} resize-y`}
                  id="message"
                  name="message"
                  rows={5}
                  required
                />
              </div>

              {/* Honeypot: bots fill this, humans never see it. */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="company-website">Website</label>
                <input
                  id="company-website"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-sm text-[16.2px] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: BRAND, color: CREAM }}
              >
                Send
              </button>

              <p className="text-[13.2px] leading-relaxed text-[var(--faint)]">
                Your details are used only to answer your message. Never
                shared, never added to a mailing list.
              </p>
            </form>
          </section>
        </main>

        {/* Final CTA: full-width brand band with cream button */}
        <section
          className="py-20 text-center"
          style={{
            backgroundColor: BRAND,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        >
          <div className="max-w-[1100px] mx-auto px-8">
            <h2
              className="text-[38px] leading-snug font-medium tracking-tight text-white max-w-[24ch] mx-auto max-[820px]:text-[30px]"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              Which task takes your business the most time?
            </h2>
            <p className="text-[16.2px] text-white/80 mt-4 max-w-[54ch] mx-auto">
              Free 30-minute call. You hear if it is worth automating.
            </p>
            <A
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-7 px-7 py-3.5 rounded-sm text-[16.7px] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: CREAM, color: BRAND }}
            >
              Book a free consultation
            </A>
            <p className="text-[13.2px] text-white/60 mt-3">
              Free. Reply within 24 hours.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-[1100px] mx-auto px-8 py-10 pb-16 border-x border-[var(--border-soft)] flex justify-between items-start gap-8 flex-wrap">
          <div className="text-[13.2px] text-[var(--faint)] space-y-1">
            <p>
              <span className={gloock.className}>{COMPANY}</span> · {NAME}
            </p>
            <p>{LEGAL_FORM}</p>
            <p>{ADDRESS}, the Netherlands</p>
            {KVK && (
              <p>
                KvK: {KVK} · Branch no.: {BRANCH}
              </p>
            )}
            {BTW && <p>BTW: {BTW}</p>}
            <p>Serving clients across the Netherlands, on site and remote.</p>
          </div>
          <div className="text-[14.7px] space-y-1">
            <A
              href={`mailto:${EMAIL}`}
              className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              {EMAIL}
            </A>
            {PHONE && (
              <p>
                <A
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                >
                  {PHONE}
                </A>
              </p>
            )}
            <p>
              <A
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
              >
                LinkedIn
              </A>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}