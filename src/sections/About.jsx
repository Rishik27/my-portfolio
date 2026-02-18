import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a <span className="highlight-text">full stack software developer</span> with 
              3 years of professional experience building and maintaining web applications 
              that solve real-world problems.
            </p>
            
            <p className="about-description">
              My primary focus is <strong>front-end development using React and JavaScript</strong>, 
              while also working across the stack to build APIs, handle authentication, and manage data. 
              I'm passionate about creating efficient, scalable solutions and staying current with 
              modern web technologies.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div className="highlight-content">
                  <h3>Professional Experience</h3>
                  <p>3+ years building production-ready applications</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h3>Focus Areas</h3>
                  <p>React, JavaScript, Cloud Architecture, Microservices</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h3>Current Role</h3>
                  <p>Full Stack Developer at S&P Global</p>
                </div>
              </div>
            </div>

            {/* Resume Download Button */}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rishik_Vadapalli_Resume.pdf"
              className="resume-btn"
            >
              <span className="resume-btn-icon">⬇</span>
              Download Resume
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;