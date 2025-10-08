import React from 'react';

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Sticky top navigation bar with anchor links for section navigation. */
  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <a href="#home" className="brand" aria-label="Home">
          <span className="brand-badge" aria-hidden="true"></span>
          <span>Ocean Portfolio</span>
        </a>
        <nav aria-label="Primary" role="navigation">
          <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a className="nav-link" href="#home">Home</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#skills">Skills</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
