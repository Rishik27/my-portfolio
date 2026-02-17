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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, Formspree, etc.)
    setStatus('sending');
    
    // Simulated submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const socialLinks = [
    { 
      name: 'Email', 
      icon: '✉️', 
      url: 'mailto:rishik@itjobworks.com',
      display: 'rishik@itjobworks.com'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: 'https://www.linkedin.com/in/rishik-vadapalli-9232b3198/',
      display: 'linkedin.com/in/rishikvadapalli'
    },
    { 
      name: 'GitHub', 
      icon: '💻', 
      url: 'https://github.com/Rishik27',
      display: 'github.com/Rishik27'
    }
  ];

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

            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:rishik@itjobworks.com" className="info-link">
                rishik@itjobworks.com
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/rishik-vadapalli-9232b3198/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="info-link"
              >
                View Profile
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
                github.com/Rishik27
              </a>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={link.name}
                  >
                    <span>{link.icon}</span>
                  </a>
                ))}
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
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="success-message">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Rishik Vadapalli. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;