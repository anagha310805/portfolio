import React from "react";

export default function Footer(){
  return (
    <footer className="footer container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>Anagha C R</div>
          <div style={{color:'var(--muted)'}}>BCA (AI Specialization)</div>
        </div>
        <div style={{textAlign:'right',color:'var(--muted)'}}>
          <div><a href="https://github.com/anagha310805" target="_blank" rel="noreferrer">GitHub</a> • <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div style={{marginTop:8}}>anagacty@gmail.com</div>
          <div style={{marginTop:8}}>© {new Date().getFullYear()} Anagha C R</div>
        </div>
      </div>
    </footer>
  )
}
