import React from "react";

const education = [
  {degree:'Bachelor of Computer Applications (BCA) — AI Specialization', institution:'Krupanidhi Degree College, Bangalore', dates:'2023 – 2026'},
  {degree:'Pre-University Course (PUC)', institution:'GHSS Cheruthuruthy, Thrissur, Kerala', dates:'2021 – 2023'},
  {degree:'SSLC (10th)', institution:'GHSS Cheruthuruthy, Thrissur, Kerala', dates:'2020 – 2021'}
]

export default function Education(){
  return (
    <section id="education" className="section container">
      <h2>Education</h2>
      <div style={{display:'grid',gap:12}}>
        {education.map(e=> (
          <div className="card" key={e.degree}>
            <h4>{e.degree}</h4>
            <p className="small">{e.institution}</p>
            <p className="small">{e.dates}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
