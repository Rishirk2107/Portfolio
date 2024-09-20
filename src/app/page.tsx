'use client';

import React, { useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-teal-500 text-white py-2 z-10 flex justify-between items-center px-4">
        <h1 className="text-sm font-semibold">Portfolio</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-xl">
            {isMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} absolute bg-teal-500 top-10 right-0 w-full md:static md:w-auto md:flex md:items-center`}>
          <a href="#about" className="text-sm font-semibold py-1 px-2">About</a>
          <a href="#experience" className="text-sm font-semibold py-1 px-2">Experience</a>
          <a href="#projects" className="text-sm font-semibold py-1 px-2">Projects</a>
          <a href="#skills" className="text-sm font-semibold py-1 px-2">Skills</a>
          <a href="#contact" className="text-sm font-semibold py-1 px-2">Contact</a>
        </div>
      </nav>

      {/* Full-Screen Sections */}
      <section id="about" className="snap-start h-screen flex justify-center items-center bg-white">
        <About />
      </section>
      <section id="experience" className="snap-start h-screen flex justify-center items-center bg-gray-100">
        <Experience />
      </section>
      <section id="projects" className="snap-start h-screen flex justify-center items-center bg-white">
        <Projects />
      </section>
      <section id="skills" className="snap-start h-screen flex justify-center items-center bg-gray-100">
        <Skills />
      </section>
      <section id="contact" className="snap-start h-screen flex justify-center items-center bg-white">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
