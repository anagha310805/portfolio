import React from "react";

export default function Hero(){
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="card">
          <h2 className="hero-title">ANAGHA C R</h2>
          <div className="hero-sub">BCA (AI Specialization)</div>
          <p className="small">BCA graduate specializing in AI, with hands-on experience in data analytics, Python, SQL, Excel, and Power BI. Skilled in data cleaning, exploratory analysis, and dashboard development. Seeking an entry-level IT role to apply technical and analytical skills.</p>
          <div className="hero-ctas" style={{marginTop:16}}>
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href={"Anagha_CR_Resume.pdf"} target="_blank" rel="noreferrer">Download Resume</a>
            <a className="btn" href="https://github.com/anagha310805" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="profile-wrap">
          <div className="profile-pic card">
            <img src={"profile.jpg.jpeg"} alt="Profile photo of Anagha C R" />
            <div className="profile-glow" aria-hidden></div>
          </div>
        </div>
      </div>
    </section>
  )
}
