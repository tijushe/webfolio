"use client"

import { useState } from "react"

const experiences = [
  {
    company: "RedDot Digital Ltd.",
    role: "Technical Consultant",
    meta: "Dhaka, Bangladesh · Jul 2021 to Aug 2023",
    details: [
      "Owned financial and pricing analysis across 6+ B2B client engagements, including British American Tobacco, Huawei, SMART Axiata, and Netcore.",
      "Built and maintained KPI dashboards in Power BI and revenue tracking, presented directly to C-level decision-makers.",
      "Led the full RFP and tender cycle for 5+ clients across fintech, telecoms, and NGO sectors, with a 100% bid conversion rate on managed accounts.",
      "Reduced manual reporting time through structured data pipelines and Excel automation.",
    ],
    tags: ["Power BI", "Financial Modelling", "Stakeholder Management", "Figma"],
  },
  {
    company: "Distill.io",
    role: "Software Engineer",
    meta: "Bangalore, India · Sep 2020 to Jun 2021",
    details: [
      "Built a point-and-click selector builder and a live preview panel for Scrapex.ai, a no-code web scraping platform.",
      "Built data pipeline interfaces to export scraped data to CSV and JSON.",
    ],
    tags: ["Svelte", "TailwindCSS", "Data Pipelines"],
  },
  {
    company: "SigmaRed Technologies Inc.",
    role: "Developer Intern",
    meta: "Toronto, Canada, Remote · Mar 2020 to Aug 2020",
    details: [
      "Built an ML insights dashboard with interactive charts and model performance tracking.",
      "The MVP directly supported the company's first external funding round.",
    ],
    tags: ["React", "JavaScript", "ML Dashboards"],
  },
  {
    company: "Robi Axiata Ltd.",
    role: "Process Automation Intern (RPA Developer)",
    meta: "Dhaka, Bangladesh · Mar 2019 to Jul 2019",
    details: [
      "Automated HR and finance workflows using Python and Selenium, including automated data entry and scheduled report generation.",
      "Reduced manual processing time across both departments.",
    ],
    tags: ["Python", "Selenium", "RPA"],
  },
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="experience" className="py-11 border-t border-[var(--border-soft)]">
      <h2 className="text-[13.2px] uppercase tracking-[0.12em] text-[var(--muted)] mb-6" style={{ fontFamily: "var(--font-voice)" }}>
        Experience
      </h2>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-[var(--border-soft)] last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="group w-full text-left py-4 flex justify-between items-start gap-4"
            >
              <div>
                <p className="text-[15.7px] font-medium text-[var(--accent)] group-hover:text-[var(--ink)] transition-colors">
                  {exp.company}, {exp.role}
                </p>
                <p className="text-[13.7px] text-[var(--muted)] mt-0.5">{exp.meta}</p>
              </div>
              <span className="text-[17.2px] text-[var(--faint)] shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="pb-5">
                <ul className="text-[14.7px] text-[#3a392f] leading-relaxed space-y-1.5 pl-4 list-disc mb-3">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[12.2px] px-2.5 py-0.5 border border-[var(--border)] rounded-full text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
