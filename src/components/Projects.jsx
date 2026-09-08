import React from "react";

const projects = [
  {
    name: "Career Growth Suite",
    description: "Job application tracker and career growth suite.",
    features: [
      "User registration", "User login", "Authentication", "Job application tracking",
      "Application status management", "Resume upload", "PDF/DOCX resume skill extraction",
    ],
    tech: ["React", "Vite", "Python", "Flask", "MySQL"],
    github: "https://github.com/anagha310805/career-growth-suite",
    live: null,
    note: "Featured project — active development.",
  },
  {
    name: "Flutter – Smart Expense Tracker",
    description: "Personal finance management application for tracking income, expenses, budgets, and financial activity.",
    features: [
      "User registration and login", "Income and expense tracking", "Expense category management",
      "Monthly financial reports", "Expense analytics", "Budget tracking", "Notifications", "Local data persistence",
    ],
    tech: ["Flutter", "Dart", "REST API", "Node.js", "MySQL", "Python"],
    github: "https://github.com/anagha310805/ai-expense-tracker",
    live: null,
    note: "Personal finance project — active development.",
  },
  {
    name: "Pathology Viewer",
    description: "Web-based image analysis platform to upload and inspect high-resolution medical slide images.",
    features: [
      "Deep-zoom viewing with OpenSeadragon", "Session-based authentication", "Thumbnail generation",
      "Annotation API for marking regions of interest",
    ],
    tech: ["Python (Flask)", "HTML", "CSS", "JavaScript", "OpenSeadragon"],
    github: null,
    live: null,
    note: "Academic project at Krupanidhi Degree College.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="stack">
        {projects.map((project) => (
          <div key={project.name} className="card project">
            <div className="project-content">
              <h3>{project.name}</h3>
              <p className="small">{project.description}</p>
              <p><strong>Purpose / Problem solved:</strong> {project.note}</p>
              <p><strong>Key features:</strong></p>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="project-technologies">
                <strong>Technologies</strong>
                <div className="skills-list">
                  {project.tech.map((tech) => <span className="skill-badge" key={tech}>{tech}</span>)}
                </div>
              </div>
              {(project.github || project.live) && <div className="project-actions">
                {project.github && <a className="btn project-link" href={project.github} target="_blank" rel="noreferrer">GitHub Repository</a>}
                {project.live && <a className="btn project-link" href={project.live} target="_blank" rel="noreferrer">Live demo</a>}
              </div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
