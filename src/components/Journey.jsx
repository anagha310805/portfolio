import React from "react";

const milestones = [
  { period: "2023 – 2026", title: "BCA — AI Specialization", detail: "Krupanidhi Degree College, Bangalore" },
  { period: "2024 – 2025", title: "AI & Flutter learning", detail: "Artificial Intelligence Analyst, Introduction to AI, and Flutter & Dart courses." },
  { period: "2026", title: "Data Analytics Internship", detail: "SMEC Technologies — data cleaning, analysis, dashboards, and reporting." },
  { period: "Now", title: "Building practical software", detail: "Developing career, expense-tracking, and image-analysis applications." },
];

export default function Journey() {
  return (
    <section id="journey" className="section container journey-section">
      <div className="section-intro">
        <p className="section-kicker">Journey</p>
        <h2>Learning through real work.</h2>
      </div>
      <div className="journey-timeline">
        {milestones.map((milestone) => (
          <article className="journey-item card" key={milestone.title}>
            <span className="journey-period">{milestone.period}</span>
            <h3>{milestone.title}</h3>
            <p className="small">{milestone.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
