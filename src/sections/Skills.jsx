import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'JavaScript (ES6+)', level: 90, icon: '⚡' },
      { name: 'HTML5 & CSS3', level: 90, icon: '🎨' },
      { name: 'Redux', level: 85, icon: '🔄' },
      { name: 'Responsive Design', level: 90, icon: '📱' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express', level: 80, icon: '🚂' },
      { name: 'REST APIs', level: 90, icon: '🔌' },
      { name: 'GraphQL', level: 80, icon: '📊' },
      { name: 'Microservices', level: 85, icon: '🏗️' }
    ],
    databases: [
      { name: 'SQL', level: 85, icon: '🗄️' },
      { name: 'MySQL', level: 85, icon: '🐬' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'NoSQL', level: 80, icon: '📦' }
    ],
    cloud: [
      { name: 'AWS', level: 85, icon: '☁️' },
      { name: 'Docker', level: 80, icon: '🐳' },
      { name: 'Kubernetes', level: 75, icon: '⚓' },
      { name: 'CI/CD', level: 85, icon: '🔄' },
      { name: 'GCP', level: 70, icon: '☁️' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, icon: '📚' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Postman', level: 90, icon: '📮' },
      { name: 'Jenkins', level: 80, icon: '🔨' },
      { name: 'IntelliJ IDEA', level: 85, icon: '💡' }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div 
      className="skill-item"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-header">
        <div className="skill-name">
          <span className="skill-icon">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            '--skill-level': `${skill.level}%`,
            animationDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of my technical skills across the full stack, 
            from frontend frameworks to cloud infrastructure.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">⚛️</span>
                Frontend Technologies
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">🚀</span>
                Backend Technologies
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">🗄️</span>
                Databases
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.databases.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">☁️</span>
                Cloud & DevOps
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.cloud.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <h3 className="category-title">
                <span className="category-icon">🛠️</span>
                Tools & Platforms
              </h3>
            </div>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Expertise</h3>
          <div className="skills-tags">
            <span className="skill-tag">JWT Authentication</span>
            <span className="skill-tag">SoapUI</span>
            <span className="skill-tag">JUnit</span>
            <span className="skill-tag">Mockito</span>
            <span className="skill-tag">AWS Lambda</span>
            <span className="skill-tag">AWS S3</span>
            <span className="skill-tag">AWS EC2</span>
            <span className="skill-tag">AWS EKS</span>
            <span className="skill-tag">ELK Stack</span>
            <span className="skill-tag">CloudFormation</span>
            <span className="skill-tag">GitHub Actions</span>
            <span className="skill-tag">Agile/Scrum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;