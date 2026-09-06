import React from "react";

const certs = [
  {name:'Artificial Intelligence Analyst', org:'IBM', date:'2024'},
  {name:'Introduction to AI', org:'Simplilearn', date:'2025'},
  {name:'Flutter & Dart', org:'Cursa', date:null},
  {name:'Data Analytics (Internship Certification)', org:'SMEC Technologies', date:null}
]

export default function Certifications(){
  return (
    <section id="certifications" className="section container">
      <h2>Certifications & Courses</h2>
      <div className="stack">
        {certs.map(c=> (
          <div className="card" key={c.name}>
            <h4>{c.name}</h4>
            <p className="small">{c.org} {c.date? `• ${c.date}`: ''}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
