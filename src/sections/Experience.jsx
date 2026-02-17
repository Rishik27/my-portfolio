import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'S&P Global',
      role: 'Full Stack Software Developer',
      period: 'Sep 2024 – Present',
      location: 'Remote',
      achievements: [
        'Developed and optimized React applications using Redux, improving scalability and reducing state-related bugs',
        'Built and integrated RESTful APIs to support microservices-based architecture',
        'Implemented CI/CD pipelines to improve deployment speed and reliability',
        'Worked closely with cross-functional teams in Agile environments'
      ],
      current: true
    },
    {
      company: 'Groovy Web',
      role: 'Full Stack Software Developer',
      period: 'Aug 2021 – Jul 2023',
      location: 'Remote',
      achievements: [
        'Built full stack web applications using React and backend APIs',
        'Migrated applications to cloud infrastructure, improving availability and performance',
        'Designed and optimized databases to improve query performance',
        'Followed Agile practices including code reviews and sprint planning'
      ],
      current: false
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            A track record of delivering high-quality software solutions in fast-paced, collaborative environments.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${exp.current ? 'current' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      {exp.current && <span className="current-badge">Current</span>}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">📅 {exp.period}</span>
                    <span className="experience-location">📍 {exp.location}</span>
                  </div>
                </div>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;