import React from "react";

export default function Hero(){
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="card">
          <div className="hero-eyebrow">Hello, I&apos;m</div>
          <div className="hero-status"><span aria-hidden="true"></span> Open to work</div>
          <h1 className="hero-title">ANAGHA C R</h1>
          <div className="hero-sub">BCA (AI Specialization)</div>
          <div className="hero-role">Aspiring Software Developer &amp; Data Analyst</div>
          <p className="small">BCA graduate specializing in Artificial Intelligence, with hands-on experience in software development and data analytics. Skilled in Python, SQL, React, Flask, Flutter, Dart, MySQL, Power BI, and Excel. Experienced in building practical applications such as a Job Application Tracker and a Flutter-based Smart Expense Tracker, with a focus on responsive interfaces, backend integration, data management, and analytics. Passionate about developing user-focused software solutions and turning data into meaningful insights.</p>
          <div className="hero-ctas">
            <a className="btn primary" href={"Anagha_CR_Resume.pdf"} target="_blank" rel="noreferrer">Resume</a>
            <a className="btn" href="#contact">Contact</a>
            <a className="btn" href="#projects">View Projects</a>
          </div>
          <div className="hero-meta">
            <span>Thrissur, Kerala</span>
            <a href="https://github.com/anagha310805" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="profile-wrap">
          <div className="profile-pic">
            <img src={"profile.jpg.jpeg"} alt="Profile photo of Anagha C R" />
          </div>
        </div>
      </div>
    </section>
  )
}
