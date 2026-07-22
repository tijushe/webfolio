import Image from "next/image"

const projects = [
  {
    label: "MS Thesis · Leiden University · 2025",
    title: "Two-Layer Agent-Based Model for Climate Cooperation",
    description:
      "Coupled national policy agents with consumer households in a feedback loop connecting emissions, climate vulnerability, and fairness perceptions. Ran 7 experimental scenarios — key finding: access matters more than awareness.",
    tags: ["Python", "Mesa ABM", "Agent-Based Modelling", "Pandas", "Climate Policy"],
    links: [
      { text: "GitHub", href: "https://github.com/tijushe/two_layer_climate_abm" },
      { text: "PDF", href: "https://drive.google.com/file/d/1flmYbFHOpT27y60uzIWTTkr4luTxjtoB/view?usp=sharing" },
    ],
  },
  {
    label: "Publication · Chapter 20 · 2025",
    title: "FAIR Data Implementation for Analysis of Research Data in Human Trafficking and Migration",
    description:
      "Applied FAIR principles to 126 survivor testimonies. Built a custom OWL ontology, converted data to RDF triples, and delivered a Streamlit dashboard and Gephi network visualisations for non-technical researchers.",
    tags: ["FAIR Principles", "RDF/OWL", "Python", "SPARQL", "Streamlit", "Network Analysis"],
    links: [
      { text: "Publication", href: "https://www.researchgate.net/publication/391762371_Creation_of_a_FAIR_Data_Point_for_a_Clinical_Trial_the_schistosome_controlled_human_infection_dataset" },
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-10 max-w-2xl mx-auto flex flex-col gap-4">

      {/* Top row: intro + photo */}
      <div className="grid grid-cols-[1fr_auto] gap-4 items-stretch">

        {/* Intro card */}
        <div className="border border-black/10 rounded-xl p-6 flex flex-col justify-between gap-6 bg-white">
          <div>
            <h1 className="text-xl font-medium mb-3">Senjuti Bala</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Data scientist with roots in research, consulting, and engineering.
              Enjoys working where data meets meaning — currently based in the Netherlands.
            </p>
          </div>
          {/* Social links */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
            <a
              href="https://www.linkedin.com/in/senjutibala/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tijushe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.behance.net/senjutibala"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Behance
            </a>
            <a
              href="mailto:balasenjuti22@gmail.com"
              className="hover:text-black transition-colors"
            >
              balasenjuti22@gmail.com
            </a>
            <a
              href="https://calendly.com/balasenjuti22/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Book a chat
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="w-[110px] border border-black/10 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center shrink-0">
          {/* Replace with <Image src="/mypic.jpg" alt="Senjuti Bala" width={110} height={150} className="object-cover w-full h-full" /> */}
          <span className="text-xs text-gray-300 text-center px-2">photo</span>
        </div>

      </div>

      {/* Projects card */}
      <div className="border border-black/10 rounded-xl bg-white overflow-hidden">
        <div className="px-6 pt-5 pb-2">
          <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium">Projects</p>
        </div>
        <div className="divide-y divide-black/5">
          {projects.map((project, i) => (
            <div key={i} className="px-6 py-5">
              <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">{project.label}</p>
              <h2 className="text-sm font-medium text-gray-900 mb-2 leading-snug">{project.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[11px] px-2 py-0.5 border border-black/10 rounded text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 underline underline-offset-4 hover:text-black transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}

// import Navbar from "./components/Navbar"
// import Experience from "./components/Experience"
// import FloatingActions from "./components/FloatingActions"

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex flex-col lg:flex-row pt-[57px]">

//         {/* Left — sticky photo sidebar */}
//         <aside className="hidden lg:block w-[30%] shrink-0 bg-[#0F0F1A] sticky top-[57px] h-[calc(100vh-57px)] overflow-hidden">
//           <img
//             src="/mypic.jpg"
//             alt="Senjuti Bala"
//             className="w-full h-full object-cover object-center scale-110"
//           />
//         </aside>

//         {/* Right — scrollable content */}
//         <main className="flex-1 px-16 py-12 max-w-3xl">

//           {/* Hero */}
//           <section className="mb-10 pt-12">
//             <h1 className="text-4xl font-bold mb-4">Hi, this is Senjuti</h1>
//             <p className="text-lg text-gray-600 mb-4">
//               Senjuti brings together research, consulting, and engineering, enjoys working at the intersection where data meets meaning. Off the clock, she is likely deep in Mary Oliver, rewatching Anthony Bourdain, at the cinema, or mid-conversation with herself.
//             </p>
//             <p className="text-lg text-gray-600">Currently based in the Netherlands.</p>
//           </section>

//           {/* Key Skills */}
//           <section className="mb-10">
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "Agent-Based Modelling", "Network Analysis", "FAIR Data",
//                 "Python", "SQL", "Tableau", "Power BI",
//                 "RDF / OWL", "Deep Learning", "Statistical Modelling",
//                 "Stakeholder Management", "Data Governance", "Reproducibility",
//                  "Product Pricing", "Technical Writing"
//               ].map((skill, i) => (
//                 <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#C084B0] text-[#8B4A7A] hover:bg-[#C084B0] hover:text-white transition-colors cursor-default">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </section>
//           {/* Experience */}
//           <div className="mb-20" id="experience">
//             <Experience />
//           </div>

//           {/* Projects */}
//           <section id="projects" className="mb-10">
//             <h2 className="text-2xl font-semibold mb-6">Projects</h2>
//             <div className="space-y-6">

//               <div className="border border-[#C084B0] rounded-lg p-5">
//                 <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">MS Thesis · Leiden University · 2025</p>
//                 <h3 className="font-medium mb-3">Two-Layer Agent-Based Model for Climate Cooperation: Coupling National Policy Decisions and Consumer Behavior</h3>
//                 <div className="space-y-1 mb-3">
//                   <p className="text-sm text-gray-600">› Built a <strong>two-layer Agent-Based Model (ABM)</strong> coupling national policy agents with consumer adoption households</p>
//                   <p className="text-sm text-gray-600">› Designed a <strong>feedback loop</strong> connecting emissions, <strong>climate vulnerability</strong>, and <strong>fairness perceptions</strong> back into policy</p>
//                   <p className="text-sm text-gray-600">› Ran <strong>7 experimental scenarios</strong> testing fairness mechanisms, aid structures, and behavioural shocks</p>
//                   <p className="text-sm text-gray-600">› Key finding: <strong>access matters more than awareness</strong> redistribution alone leaves the most vulnerable behind</p>
//                   <p className="text-sm text-gray-600">› Implemented in Python using <strong>Mesa ABM framework</strong>, pandas, and matplotlib across 100 seeds for reproducibility</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {["Python", "Mesa ABM", "Agent-Based Modelling", "Pandas", "Matplotlib", "Reproducibility", "Climate Policy", "Fairness Modelling"].map((skill, i) => (
//                     <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#C084B0] text-[#8B4A7A] hover:bg-[#C084B0] hover:text-white transition-colors cursor-default">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <a href="https://github.com/tijushe/two_layer_climate_abm" target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A] transition-colors">GitHub</a>
//                   <span className="text-gray-300 text-xs">|</span>
//                   <a href="https://drive.google.com/file/d/1flmYbFHOpT27y60uzIWTTkr4luTxjtoB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A] transition-colors">View PDF</a>
//                 </div>
//               </div>

//               <div className="border border-[#C084B0] rounded-lg p-5">
//                 <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Publication · Chapter 20 · 2025</p>
//                 <h3 className="font-medium mb-3">FAIR Data Implementation for Analysis of Research Data in Human Trafficking and Migration</h3>
//                 <div className="space-y-1 mb-3">
//                   <p className="text-sm text-gray-600">› Applied <strong>FAIR principles</strong> to a qualitative dataset of <strong>126 survivor testimonies</strong> across Africa and Europe</p>
//                   <p className="text-sm text-gray-600">› Built a custom <strong>OWL ontology</strong> for human trafficking entities victims, traffickers, border crossings, abuses</p>
//                   <p className="text-sm text-gray-600">› Converted data into <strong>RDF triples</strong> via <strong>Python's rdflib</strong>, loaded into <strong>AllegroGraph</strong> for <strong>SPARQL querying</strong></p>
//                   <p className="text-sm text-gray-600">› Delivered an interactive <strong>Streamlit dashboard</strong> and <strong>Gephi network visualisations</strong> for non-technical researchers</p>
//                   <p className="text-sm text-gray-600">› Maintained strict <strong>privacy safeguards</strong> and GDPR compliance throughout DPIA conducted</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {["FAIR Principles", "RDF/OWL", "Python", "rdflib", "AllegroGraph", "SPARQL", "Streamlit", "Gephi", "Network Analysis", "GDPR"].map((skill, i) => (
//                     <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#C084B0] text-[#8B4A7A] hover:bg-[#C084B0] hover:text-white transition-colors cursor-default">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 <a href="https://www.researchgate.net/publication/391762371_Creation_of_a_FAIR_Data_Point_for_a_Clinical_Trial_the_schistosome_controlled_human_infection_dataset" target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A] transition-colors">View Publication</a>
//               </div>

//             </div>
//           </section>

//           {/* Research Interests
//           <section id="research" className="mb-20">
//             <h2 className="text-2xl font-semibold mb-6">Research Interests</h2>
//             <p className="text-sm leading-relaxed">
//               <span className="text-[#0F0F1A]">Social cohesion, individualisation, and the structure of social networks.</span>
//               {" "}<span className="text-[#C084B0]">Quantitative and computational approaches to social phenomena.</span>
//               {" "}<span className="text-[#0F0F1A]">Agent-based modelling and simulation for policy and behaviour.</span>
//               {" "}<span className="text-[#8B4A7A]">FAIR data principles, data governance, and responsible AI.</span>
//               {" "}<span className="text-[#C084B0]">Interdisciplinary research bridging analytical rigour with humanistic context.</span>
//             </p>
//           </section> */}
//           {/* Education */}
//           <section id="education" className="mb-10">
//             <h2 className="text-2xl font-semibold mb-6">Education</h2>
//             <div className="space-y-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="font-medium">Leiden University</p>
//                   <p className="text-sm text-gray-600">MSc. Computer Science with specialization in Data Science</p>
//                   <p className="text-sm text-gray-500 mt-1">Leiden, The Netherlands</p>
//                 </div>
//                 <p className="text-sm text-gray-400 shrink-0 ml-4">2023 – 2025</p>
//               </div>
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="font-medium">National Institute of Technology Durgapur (NIT)</p>
//                   <p className="text-sm text-gray-600">BTech. Information Technology</p>
//                   <p className="text-sm text-gray-500 mt-1">Durgapur, West Bengal, India</p>
//                 </div>
//                 <p className="text-sm text-gray-400 shrink-0 ml-4">2016 – 2020</p>
//               </div>
//             </div>
//           </section>

//           {/* Skills
//           <section id="skills" className="mb-10">
//             <h2 className="text-2xl font-semibold mb-6">Skills</h2>
//             <div className="space-y-4 text-sm text-gray-600">
//               {[
//                 { category: "ML & Modelling", items: "Supervised & Unsupervised Learning, NLP, Deep Learning (PyTorch / TensorFlow), Transformers, Agent-based Modelling" },
//                 { category: "Data & Analysis", items: "Python (Pandas, NumPy, SciPy), SQL, Tableau, Power BI, Plotly, Statistical Modelling" },
//                 { category: "Data Governance", items: "FAIR Principles, Data Lifecycle Planning, Metadata Standards, Access Control, Reproducibility" },
//                 { category: "Systems & Tools", items: "Git, Gephi, Streamlit, RDF/OWL, Basic Cloud (AWS / Azure), Experiment Tracking" },
//                 { category: "Soft Skills", items: "Stakeholder Communication, User Onboarding, Collaborative Working, Product Pricing" },
//               ].map((skill, i) => (
//                 <div key={i}>
//                   <p className="font-medium text-[#0F0F1A]">{skill.category}</p>
//                   <p>{skill.items}</p>
//                 </div>
//               ))}
//             </div>
//           </section> */}

//           {/* Fun Facts */}
//           <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-6">Fun Facts</h2>
//             <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
//               <p><span className="text-base mr-2">🍔</span>Spent two years serving Happy Meals at McDonald's Nederlands as a part-time crew; trained across service, cafe, and kitchen.</p>
//               <p><span className="text-base mr-2">📸</span>In my early teens I got my first DSLR, a Canon 600D and spent the next five years carrying multiple lenses, a tripod, and a camera bag everywhere like it was a personality. It was.</p>
//               <p><span className="text-base mr-2">🎬</span>That same camera led me to create two short films with my best friend. Both were selected at the Children's Film Festival in Dhaka. We won a prize for one. I still think about making films.</p>
//               <p><span className="text-base mr-2">🐝</span>In college, I had my own team of designers and developers. I still silently judge people based on the fonts they choose. Some of that work lives on <a href="https://www.behance.net/senjutibala" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A]">Behance</a>.</p>
//               <p><span className="text-base mr-2">🇯🇵</span>Represented Bangladesh as an exchange student in Japan in high school, visited Miyazaki and Tokyo. When my host mother told me to call her mum, I cried my eyes out.</p>
//               <p><span className="text-base mr-2">💃</span>In high school, I created and coordinated a Bengali folk dance theatre piece called "Mahua" for the seniors farewell. It was performed live. I have no idea where that version of me came from.</p>
//             </div>
//           </section>

//           {/* Get to Know Me */}
//           <section className="mb-10">
//             <h2 className="text-2xl font-semibold mb-6">Get to Know Me</h2>
//             <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
//               <p><span className="text-base mr-2">🍿</span>Letterboxd is my most used app. <span className="text-gray-800 font-medium">The Banshees of Inisherin</span> and <span className="text-gray-800 font-medium">Aftersun</span> are my current favourite movies.</p>
//               <p><span className="text-base mr-2">⭐</span>My father and Satyajit Ray are two of my favourite people to have existed on this planet.</p>
//               <p><span className="text-base mr-2">🌚</span>I return to <span className="italic">The Love Song of J. Alfred Prufrock</span> by T.S. Eliot more than I probably should.</p>
//               <p><span className="text-base mr-2">🎵</span>Glass Animals. I cannot explain it. <a href="https://www.youtube.com/watch?v=PhdtdUljThU&list=RDPhdtdUljThU&start_radio=1" target="_blank" rel="noopener noreferrer" className="text-[#C084B0] hover:text-[#8B4A7A] underline underline-offset-4 transition-colors">I won't try.</a></p>
//               <p><span className="text-lg mr-2">🕺</span>When things get heavy, I put on Sweet Child O Mine and dance. <a href="https://www.youtube.com/watch?v=1w7OgIMMRc4" target="_blank" rel="noopener noreferrer" className="text-[#C084B0] hover:text-[#8B4A7A] underline underline-offset-4 transition-colors">I mean why wouldn't you?</a></p>
//             </div>
//           </section>

//           {/* Contact */}
//           <section id="contact" className="mb-10">
//             <h2 className="text-2xl font-semibold mb-4">Contact</h2>
//           <p className="text-gray-600 text-sm mb-4">
//             I am open to work in research, data science, analytics, or anything that sits at an interesting intersection. If you think there is a fit or even if you are just curious, I would love to hear from you. Best reached at <a href="mailto:balasenjuti22@gmail.com" className="text-[#C084B0] hover:text-[#8B4A7A] transition-colors underline underline-offset-4">balasenjuti22@gmail.com</a>
//           </p>
//           <div className="flex flex-col gap-4 mb-6">
//               <a href="https://calendly.com/balasenjuti22/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-fit px-5 py-2.5 bg-[#0F0F1A] text-white text-sm rounded-lg hover:bg-[#8B4A7A] transition-colors">
//                 <span>📅</span> Book a 30 min chat
//               </a>
//             </div>
//             <div className="flex gap-6 text-sm text-[#C084B0]">
//               <a href="https://www.linkedin.com/in/senjutibala/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B4A7A] transition-colors">LinkedIn</a>
//               <a href="https://www.instagram.com/tijushe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B4A7A] transition-colors">Instagram</a>
//               <a href="https://open.spotify.com/user/31ege6ijahvlyt3mjpcs7esoukmu?si=VD5irhJCQYu9g3lGVuQjyQ" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B4A7A] transition-colors">Playlists</a>
//             </div>
//           </section>

//         </main>

//       </div>
//     <FloatingActions />
//     </>
//   )
// }