import React from "react";

const experience = [
  {
    org: 'SMEC Technologies',
    role: 'Data Analytics Intern',
    dates: 'Feb 2026 – Mar 2026',
    bullets: [
      'Cleaned and preprocessed raw datasets using Excel and Python (Pandas), improving data accuracy and consistency for analysis.',
      'Built interactive dashboards and visualizations in Power BI/Excel to track key metrics and support data-driven decision-making.',
      'Performed exploratory data analysis to identify trends and patterns, presenting findings in structured reports to stakeholders.',
      'Applied SQL queries to extract and aggregate data from relational databases for reporting purposes.'
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" className="section container">
      <h2>Experience</h2>
      <div className="stack">
        {experience.map(e=> (
          <div className="card" key={e.org}>
            <h4>{e.role} — {e.org}</h4>
            <p className="small">{e.dates}</p>
            <ul>
              {e.bullets.map(b=> <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
