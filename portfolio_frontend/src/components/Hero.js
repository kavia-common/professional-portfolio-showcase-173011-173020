import React from 'react';

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero section with name, title, brief description, and primary/secondary CTAs. */
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-card">
          <h1 id="hero-heading" className="hero-title">Alex Marin — Software Engineer</h1>
          <p className="hero-subtitle">Building reliable web apps with React and Node.js</p>
          <p className="hero-desc">
            I craft accessible, performant UIs with a focus on thoughtful interactions and clean, maintainable code.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary" aria-label="Contact via email">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}
