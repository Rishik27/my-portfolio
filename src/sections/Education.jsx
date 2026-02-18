import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="experience">
      <div className="education-container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education History</h2>
        </div>

        <div className="education-timeline">
          <div className="edu-card">

            {/* Left: degree & school */}
            <div className="edu-left">
              <div className="edu-icon">🎓</div>
              <div className="edu-meta">
                <h3 className="edu-degree">Master of Science in Computer Science</h3>
                <p className="edu-school">University of Central Oklahoma</p>
                <div className="edu-badges">
                  <span className="badge badge-year">2025</span>
                  <span className="badge badge-gpa">GPA: 3.45 / 4.00</span>
                  <span className="badge badge-honor">🏅 President's Honor Roll — Spring 2024</span>
                </div>
              </div>
            </div>

            {/* Right: coursework */}
            <div className="edu-right">
              <h4 className="coursework-title">Graduate Coursework</h4>
              <div className="course-tags">
                {[
                  'Algorithms',
                  'Software Engineering',
                  'Cloud Computing',
                  'Database Systems',
                  'Mobile Application Development',
                  'Theory of Computing',
                  'Software Engineering I & II',
                  'Cloud Web Applications Development',
                  'Applications Database Systems',
                  'Mobile Apps Programming',
                  'Cyber Infrastructure & Cloud Computing',
                  'Enterprise Web Programming',
                  'Incident Analysis & Response',
                ].map((course) => (
                  <span key={course} className="course-tag">{course}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;