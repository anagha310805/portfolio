import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-name">Anagha C R</div>
          <div className="footer-role">BCA (AI Specialization)</div>
        </div>
        <div className="footer-details">
          <div className="footer-socials">
            <a href="https://github.com/anagha310805" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="footer-email">anagacty@gmail.com</div>
          <div className="footer-copy">© {new Date().getFullYear()} Anagha C R</div>
        </div>
      </div>
    </footer>
  );
}
