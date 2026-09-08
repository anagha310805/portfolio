import React, { useRef, useState } from "react";

const projects = [
  {
    name: "Career Growth Suite",
    description: "Job application tracker and career growth suite.",
    features: ["User registration", "User login", "Authentication", "Job application tracking", "Application status management", "Resume upload", "PDF/DOCX resume skill extraction"],
    tech: ["React", "Vite", "Python", "Flask", "MySQL"],
    github: "https://github.com/anagha310805/career-growth-suite",
    live: null,
    note: "Featured project — active development.",
    category: "Software Development",
  },
  {
    name: "Flutter – Smart Expense Tracker",
    description: "Personal finance management application for tracking income, expenses, budgets, and financial activity.",
    features: ["User registration and login", "Income and expense tracking", "Expense category management", "Monthly financial reports", "Expense analytics", "Budget tracking", "Notifications", "Local data persistence"],
    tech: ["Flutter", "Dart", "REST API", "Node.js", "MySQL", "Python"],
    github: "https://github.com/anagha310805/ai-expense-tracker",
    live: null,
    note: "Personal finance project — active development.",
    category: "Flutter",
  },
  {
    name: "Pathology Viewer",
    description: "Web-based image analysis platform to upload and inspect high-resolution medical slide images.",
    features: ["Deep-zoom viewing with OpenSeadragon", "Session-based authentication", "Thumbnail generation", "Annotation API for marking regions of interest"],
    tech: ["Python (Flask)", "HTML", "CSS", "JavaScript", "OpenSeadragon"],
    github: null,
    live: null,
    note: "Academic project at Krupanidhi Degree College.",
    category: "Software Development",
  },
];

const filters = ["All", "Software Development", "Flutter"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const showcaseRef = useRef(null);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  const moveShowcase = (direction) => {
    showcaseRef.current?.scrollBy({ left: direction * showcaseRef.current.clientWidth * 0.88, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section container projects-section">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2>Projects built with purpose.</h2>
        </div>
        <div className="showcase-controls" aria-label="Project carousel controls">
          <button className="showcase-control" type="button" aria-label="Show previous projects" onClick={() => moveShowcase(-1)}>←</button>
          <button className="showcase-control" type="button" aria-label="Show next projects" onClick={() => moveShowcase(1)}>→</button>
        </div>
      </div>
      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map((item) => <button className={filter === item ? "is-active" : ""} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="project-showcase" ref={showcaseRef} aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article key={project.name} className="project-showcase-card card">
            <div className="project-preview" aria-hidden="true"><span>0{index + 1}</span><div></div><div></div><div></div></div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="small">{project.description}</p>
              <p className="project-note"><strong>Purpose / Problem solved:</strong> {project.note}</p>
              <div className="project-technologies">
                <strong>Technologies</strong>
                <div className="skills-list">{project.tech.map((tech) => <span className="skill-badge" key={tech}>{tech}</span>)}</div>
              </div>
              <details className="project-details"><summary>View key features</summary><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></details>
              {(project.github || project.live) && <div className="project-actions">
                {project.github && <a className="btn project-link" href={project.github} target="_blank" rel="noreferrer">GitHub Repository</a>}
                {project.live && <a className="btn project-link" href={project.live} target="_blank" rel="noreferrer">Live demo</a>}
              </div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
