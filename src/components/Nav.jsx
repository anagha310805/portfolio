import React from "react";

const links = [
  {title: 'Home', href: '#home'},
  {title: 'About', href: '#about'},
  {title: 'Skills', href: '#skills'},
  {title: 'Projects', href: '#projects'},
  {title: 'Education', href: '#education'},
  {title: 'Experience', href: '#experience'},
  {title: 'Certifications', href: '#certifications'},
  {title: 'Contact', href: '#contact'},
]

export default function Nav(){
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container nav-inner">
        <div className="brand">
          <div className="dot" aria-hidden></div>
          <div>
            <h1>Anagha C R</h1>
            <div style={{fontSize:12,color:'var(--muted)'}}>BCA (AI Specialization)</div>
          </div>
        </div>
        <div className="nav-links" role="navigation">
          {links.map(l=> (
            <a key={l.href} href={l.href}>{l.title}</a>
          ))}
          <a href="https://github.com/anagha310805" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  )
}
