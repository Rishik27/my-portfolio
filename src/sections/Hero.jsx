import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ['Full Stack Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>

      <div className="hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <span className="hero-greeting">Hey there! 👋</span>

          <h1 className="hero-name">
            I'm <span className="highlight">Rishik</span>
            <br />
            <span className="highlight-green">Vadapalli</span>
          </h1>

          <h2 className="hero-role">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            Full Stack Software Developer with 3+ years of experience building scalable,
            production-ready web applications using React, JavaScript, and cloud technologies.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hero-illustration">
          <div className="profile-ring-wrapper">
            <div className="profile-glow"></div>
            <div className="profile-ring">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpeg`}
                alt="Rishik Vadapalli"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;