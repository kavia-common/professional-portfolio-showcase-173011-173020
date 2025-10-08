import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with contact information and optional social links. */
  return (
    <footer id="contact" className="footer" role="contentinfo" aria-labelledby="contact-heading">
      <div className="container footer-inner">
        <h2 id="contact-heading">Contact</h2>
        <p>
          Interested in collaborating or have a question?
          {' '}
          <a href="mailto:hello@example.com" aria-label="Send email to hello@example.com">Email me</a>
        </p>
        <nav aria-label="Social links">
          <a href="https://github.com/example" target="_blank" rel="noreferrer noopener">GitHub</a>
          {' · '}
          <a href="https://www.linkedin.com/in/example" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </nav>
        <small style={{ color: '#6b7280' }}>© {new Date().getFullYear()} Ocean Portfolio</small>
      </div>
    </footer>
  );
}
