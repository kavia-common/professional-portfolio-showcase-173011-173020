import React from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

// PUBLIC_INTERFACE
function App() {
  /** Root SPA layout assembling the portfolio sections with semantic landmarks and anchor navigation. */
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <NavBar />
      <main id="main" className="container" role="main" aria-label="Main content">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
