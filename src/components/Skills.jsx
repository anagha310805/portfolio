import React from "react";
const skills = {
  Programming: [
    "Python (Pandas, NumPy)",
    "C",
    "C++",
    "Java",
    "Dart",
  ],

  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (Basic)",
    "React.js",
    "React Router",
    "Flutter",
  ],

  Backend: [
    "Flask (Python)",
    "REST API",
    "Flask-CORS",
    "Node.js",
  ],

  Database: [
    "SQL",
    "MySQL",
  ],
};



export default function Skills(){
  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
        {Object.entries(skills).map(([k,v])=> (
          <div className="card" key={k}>
            <h4>{k}</h4>
            <div className="skills-list">
              {v.map(s=> <div key={s} className="skill-badge">{s}</div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
