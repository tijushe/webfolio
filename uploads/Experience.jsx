"use client"

import { useState } from "react"

const experiences = [
  {
    company: "RedDot Digital Ltd",
    role: "Solutions Engineer (Pre-Sales)",
    location: "Dhaka, Bangladesh",
    period: "Jul 2021 – Aug 2023",
    details: [
      "Part of technology and market development and analytics team, working across pricing, logistics, bidding, marketing, and AI innovation.",
      "Coordinated data flows between client systems and internal platforms, gathering requirements, defining KPIs, and ensuring traceability and documentation for stakeholders.",
      "Applied statistical modeling to pricing and market segmentation challenges, translating complex technical findings into actionable business recommendations.",
      "Implemented RPA workflows and system integrations for an NGO HR/Payroll system covering 1,000 employees, focusing on data consistency, auditability, and access control.",
      "Managed key accounts (Robi, Smart Axiata) and aligned technical solutions with measurable business impact, supporting contracts impacting 4,000+ users.",
      "Documented workflows and user guides for automated processes to standardize usage and reduce error rates.",
    ],
    skills: ["Statistical Modelling", "Stakeholder Management", "Product Pricing", "KPI Design", "Data Documentation", "MS Excel", "SQL", "Power BI"],
  },
  {
    company: "Distill.io",
    role: "Software Engineer",
    location: "Bangalore, India",
    period: "Sep 2020 – Jun 2021",
    details: [
      "Improved UX and built front-end features for Scrapex.ai, a no-code web scraping platform.",
    ],
    skills: ["Flutter", "TailwindCSS", "UX Design", "Front-End Development"],
  },
  {
    company: "SigmaRed",
    role: "Front-End Developer - Intern",
    location: "Toronto, Ontario (Remote)",
    period: "Mar 2020 – Aug 2020",
    details: [
      "Contributed to admin dashboards that surfaced ML and operational metrics, improving data quality monitoring and reproducibility of experiments.",
    ],
    skills: ["React", "Data Dashboards", "ML Metrics", "Reproducibility"],
  },
  {
    company: "Robi Axiata Ltd.",
    role: "RPA Developer - Intern",
    location: "Dhaka, Bangladesh",
    period: "Mar 2019 – June 2019",
    details: [
      "Automated repetitive internal tasks using RPA bots, accelerating processes across HR and Finance departments.",
    ],
    skills: ["RPA", "Process Automation", "Python", "Selenium"],
  },
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="experience" className="mb-24">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div key={index} className="border border-[#C084B0] rounded-lg overflow-hidden">

            {/* Clickable header */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-start hover:bg-[#F0D4EB] transition-colors"
            >
              <div>
                <p className="font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.role} · {exp.location} · {exp.period}</p>
              </div>
              <span className="text-gray-400 text-lg mt-1">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Expandable details */}
            {openIndex === index && (
              <div className="px-5 pb-4 space-y-3">
                {exp.details.map((point, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">
                    › {point}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full border border-[#C084B0] text-[#8B4A7A]">
                      {skill}
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