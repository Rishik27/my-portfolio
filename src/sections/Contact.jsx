import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mqedbvoe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            I'm currently open to new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>Current Role</h3>
              <p>Full Stack Software Developer</p>
              <p className="info-company">S&P Global</p>
            </div>

            {/* No target="_blank" on mailto links - that's what was breaking it */}
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a 
                href="mailto:rishikvadapalli@gmail.com"
                className="info-link"
              >
                rishikvadapalli@gmail.com
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/rishikvadapalli-9232b3198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-link"
              >
                View Profile →
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">💻</div>
              <h3>GitHub</h3>
              <a 
                href="https://github.com/Rishik27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-link"
              >
                github.com/Rishik27 →
              </a>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">

                {/* Email - NO target="_blank" for mailto */}
                <a
                  href="mailto:rishikvadapalli@gmail.com"
                  className="social-icon"
                  title="Email"
                >
                  <span>✉️</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rishikvadapalli-9232b3198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                >
                  <span>💼</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Rishik27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="GitHub"
                >
                  <span>💻</span>
                </a>

              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="success-message">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="error-message">
                  ❌ Something went wrong. Please email me directly at rishikvadapalli@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Rishik Vadapalli. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;