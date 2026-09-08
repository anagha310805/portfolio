import React from "react";

export default function Contact(){
  return (
    <section id="contact" className="section container">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="card">
          <h4>Contact details</h4>
          <p className="small">Email: <a href="mailto:anagacty@gmail.com">anagacty@gmail.com</a></p>
          <p className="small">Phone: +91 9037462782</p>
          <p className="small">Location: Thrissur, Kerala</p>
          <p className="small">LinkedIn: <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">linkedin.com/in/anagha-c-r</a></p>
        </div>
        <div className="card">
          <h4>Resume</h4>
          <p className="small">View or download the original resume (PDF).</p>
          <div className="resume-actions">
            <a className="btn" href={"Anagha_CR_Resume.pdf"} target="_blank" rel="noreferrer">View Resume</a>
            <a className="btn" href={"Anagha_CR_Resume.pdf"} download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
