const linkClass =
  "text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"

const projects = [
  {
    label: "MSc thesis, Leiden University (LIACS), 2025",
    title: "Two-Layer Agent-Based Model for Climate Cooperation",
    href: "https://theses.liacs.nl/3627",
    description: (
      <>
        A two-layer agent-based model that couples national climate-policy
        agents (developed, developing, and vulnerable country types) with
        consumer-level green technology adoption. The model tests fairness
        mechanisms, international aid flows, and bounded rationality across 7
        scenarios over a 100-year horizon, run across 100 seeds. The key
        finding is that access matters more than awareness.{" "}
        <a
          href="https://github.com/tijushe/two_layer_climate_abm"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Code is available on GitHub.
        </a>
      </>
    ),
    tags: ["Python", "Mesa ABM", "Agent-Based Modelling", "Pandas"],
  },
  {
    label: "Co-authored chapter, Fair Data Fair Africa Fair World, 2025",
    title:
      "FAIR Data Implementation for Analysis of Research Data in Human Trafficking and Migration",
    href: "https://www.researchgate.net/publication/391762371",
    description: (
      <>
        I co-led the FAIRification of 126 ethnographic interviews with
        trafficking survivors across Libya, Sudan, Ethiopia, and Europe. I
        built a custom OWL ontology, converted records to RDF and Turtle
        using rdflib, and loaded them into AllegroGraph for SPARQL querying.
        I also built a Streamlit dashboard and Gephi network graphs for
        non-technical researchers, under full DPIA and GDPR compliance.{" "}
        <a
          href="https://doi.org/10.5281/zenodo.15383037"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          DOI: 10.5281/zenodo.15383037
        </a>
      </>
    ),
    tags: ["FAIR Principles", "RDF/OWL", "SPARQL", "Streamlit", "Network Analysis"],
  },
  {
    label: "Independent project",
    title: "Job Database: NL Job Search Tool with Entity Resolution",
    href: "https://github.com/tijushe/job-database-nl",
    description:
      "Originally built for personal use, after getting tired of manually checking which companies actually sponsor work visas for non-EU applicants. The Dutch sponsor register lists companies by legal name, like Booking.com International B.V., while job listings use brand names, like Booking.com, so simple text matching fails. This tool fixes that with embeddings and vector search in BigQuery, matching company names by meaning instead of exact text. It also ranks companies by how well they match a pasted CV, using the same embedding approach. Backend built in Flask.",
    tags: ["Python", "Flask", "BigQuery", "Vector Search", "Entity Resolution"],
  },
  {
    label: "Independent project",
    title: "Crop Yield Prediction for SDG2",
    href: "https://github.com/tijushe/crop-yield-prediction-SDG2",
    description:
      "A machine learning model that predicts crop yields from agricultural and climate data, built in support of UN Sustainable Development Goal 2, Zero Hunger.",
    tags: ["Python", "Scikit-learn", "Regression"],
  },
  {
    label: "Independent project",
    title: "Bias Detection in News Sentences",
    href: "https://github.com/tijushe/bias-detection-news-sentences",
    description:
      "A text classification model that detects bias at the sentence level in news articles.",
    tags: ["Python", "NLP", "Text Classification"],
  },
  {
    label: "Independent project",
    title: "Neural Reranking for MS MARCO",
    href: "https://github.com/tijushe/neural-reranking-msmarco",
    description:
      "A neural reranking model for passage retrieval on the MS MARCO dataset.",
    tags: ["Python", "PyTorch", "Information Retrieval", "Transformers"],
  },
  {
    label: "Independent project",
    title: "AI Grandma: A RAG-Based Folklore Storyteller",
    href: "https://github.com/tijushe/ai-grandma-storyteller",
    description:
      "Built to explore different cultures through their myths and folk stories. A retrieval-augmented storyteller grounded in real folk tales instead of generic prompts. Chunks and embeds the tales into a FAISS vector store, retrieves the closest match to a chosen theme, generates a retelling with a local LLM, and narrates it aloud through a Streamlit app. Runs fully offline on open-weight models.",
    tags: ["Python", "RAG", "FAISS", "Streamlit", "Local LLM"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-11 border-t border-[var(--border-soft)]">
      <h2 className="text-[13.2px] uppercase tracking-[0.12em] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
        Projects
      </h2>
      <div>
        {projects.map((project, i) => (
          <div key={i} className="py-5 border-b border-[var(--border-soft)] last:border-b-0">
            <p className="text-[12.2px] uppercase tracking-wide text-[var(--faint)] mb-1.5">
              {project.label}
            </p>
            <h3
              className="text-[18.2px] font-medium mb-2 leading-snug"
              style={{ fontFamily: "var(--font-voice)" }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] border-b border-[var(--border)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
              >
                {project.title}
              </a>
            </h3>
            <p className="text-[14.7px] text-[#3a392f] leading-relaxed mb-2.5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-[12.2px] px-2.5 py-0.5 border border-[var(--border)] rounded-full text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
