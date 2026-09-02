import React from "react";

export default function About(){
  return (
    <section id="about" className="section container">
      <h2>About</h2>
      <div className="grid">
        <div className="card">
          <p className="small">BCA graduate specializing in AI, with hands-on experience in data analytics, Python, SQL, Excel, and Power BI. Completed a Data Analytics internship at SMEC Technologies where data cleaning, exploratory analysis and dashboarding were primary responsibilities. Interested in entry-level roles in software development and data analysis.</p>
          <h4 style={{marginTop:12}}>Strengths</h4>
          <ul>
            <li>Analytical Thinking</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
          </ul>
        </div>
        <div className="card">
          <h4>Contact</h4>
          <p className="small">Thrissur, Kerala</p>
          <p className="small">Phone: +91 9037462782</p>
          <p className="small">Email: <a href="mailto:anagacty@gmail.com">anagacty@gmail.com</a></p>
          <p className="small">LinkedIn: <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">linkedin.com/in/anagha-c-r</a></p>
          <p className="small">GitHub: <a href="https://github.com/anagha310805" target="_blank" rel="noreferrer">github.com/anagha310805</a></p>
        </div>
      </div>
    </section>
  )
}
