import React from 'react';
import skills from '../data/skills';

// PUBLIC_INTERFACE
export default function Skills() {
  /** Skills section rendering categorized skills as badges from data. */
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading">Skills</h2>
        <div className="skills-groups">
          {skills.map((group) => (
            <div key={group.category} className="skill-group" aria-labelledby={`skill-${group.category}`}>
              <h3 id={`skill-${group.category}`} className="skill-title">{group.category}</h3>
              <div className="badges">
                {group.items.map((item) => (
                  <span key={item} className="badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
