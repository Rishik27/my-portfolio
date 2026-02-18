import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home',       label: 'Home' },
    { id: 'about',      label: 'About Me' },
    { id: 'skills',     label: 'Technical Expertise' },
    { id: 'education',  label: 'Education History' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'projects',   label: 'Projects' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">

        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">{'<RishikV />'}</span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="nav-item"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}

          <li className="nav-item nav-cta" style={{ animationDelay: '0.56s' }}>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rishik_Vadapalli_Resume.pdf"
              className="resume-btn"
            >
              ⬇ Resume
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;