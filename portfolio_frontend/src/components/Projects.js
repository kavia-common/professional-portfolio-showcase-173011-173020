import React from 'react';
import projects from '../data/projects';

// PUBLIC_INTERFACE
export default function Projects() {
  /** Projects section rendering a responsive grid of project cards with tags and links. */
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading">Projects</h2>
        <div className="projects-grid" role="list">
          {projects.map((p) => (
            <article key={p.id} className="project-card" role="listitem" aria-labelledby={`proj-${p.id}-title`}>
              <h3 id={`proj-${p.id}-title`} className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="tags" aria-label="Technologies">
                {p.tags.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              <div className="card-actions">
                {p.demo && (
                  <a className="btn btn-secondary" href={p.demo} target="_blank" rel="noreferrer noopener" aria-label={`${p.title} live demo`}>
                    Live
                  </a>
                )}
                {p.repo && (
                  <a className="btn btn-secondary" href={p.repo} target="_blank" rel="noreferrer noopener" aria-label={`${p.title} repository`}>
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
