import React, { useEffect, useState } from "react";

const links = [
  { title: "Home", href: "#home" }, { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" }, { title: "Education", href: "#education" },
];

const themes = [
  { id: "midnight", icon: "◈", label: "MIDNIGHT" },
  { id: "violet", icon: "◆", label: "VIOLET" },
  { id: "rose", icon: "●", label: "ROSE" },
];

export default function Nav({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveLink(`#${visible.target.id}`);
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <div className="dot" aria-hidden="true">AC</div>
          <div><h1>Anagha C R</h1><div className="brand-subtitle">BCA (AI Specialization)</div></div>
        </a>
        <div className={`theme-switcher theme-${theme}`} role="group" aria-label="Choose a colour theme">
          {themes.map(({ id, icon, label }) => (
            <button
              key={id}
              type="button"
              className={`theme-button ${theme === id ? "is-active" : ""}`}
              aria-pressed={theme === id}
              onClick={() => onThemeChange(id)}
            >
              <span aria-hidden="true">{icon}</span><span className="theme-label">{label}</span>
            </button>
          ))}
        </div>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </button>
        <div id="primary-navigation" className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => <a className={activeLink === link.href ? "active" : ""} key={link.href} href={link.href} onClick={closeMenu}>{link.title}</a>)}
          <div className="nav-socials">
            <a href="https://github.com/anagha310805" target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub</a>
            <a href="https://www.linkedin.com/in/anagha-c-r/" target="_blank" rel="noreferrer" onClick={closeMenu}>LinkedIn</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
