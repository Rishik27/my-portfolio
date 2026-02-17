import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Enterprise Data Analytics Platform',
      description: 'A full-stack enterprise web application built to support data-driven decision-making across business units.',
      details: [
        'Developed scalable React applications using Redux for state management',
        'Built and integrated RESTful APIs for microservices-based architecture',
        'Improved application performance and reduced state-related bugs',
        'Implemented CI/CD pipelines for faster and reliable deployments'
      ],
      image: '📊',
      tags: ['React', 'JavaScript', 'Redux', 'REST APIs', 'CI/CD'],
      category: 'fullstack',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud-Native Full Stack Application',
      description: 'A production-grade full stack system migrated from on-premise infrastructure to cloud environments with zero downtime.',
      details: [
        'Built responsive front-end interfaces using React',
        'Integrated backend APIs with cloud-hosted services',
        'Migrated applications to AWS, improving availability and scalability',
        'Used Docker and Kubernetes for container orchestration'
      ],
      image: '☁️',
      tags: ['React', 'JavaScript', 'AWS', 'Docker', 'Kubernetes'],
      category: 'fullstack',
      featured: true
    },
    {
      id: 3,
      title: 'GraphQL-Based Microservices System',
      description: 'A schema-first GraphQL platform designed to optimize data exchange between frontend applications and backend services.',
      details: [
        'Designed GraphQL schemas, resolvers, and mutations',
        'Optimized SQL queries, indexes, and stored procedures',
        'Reduced API payload size and improved response times',
        'Improved system performance for large-scale enterprise workloads'
      ],
      image: '🔌',
      tags: ['React', 'GraphQL', 'SQL', 'Microservices'],
      category: 'fullstack',
      featured: true
    },
    {
    id: 4,
    title: 'Progress Pulse - Goal Tracking Platform',
    description: 'A comprehensive goal tracking and productivity application built with modern full-stack technologies , enabling users to set, monitor, and achieve their personal and professional objectives.',
    details: [
    'Built full-stack application with React frontend and Node.js/Express backend',
    'Implemented user authentication and authorization with JWT tokens',
    'Designed RESTful APIs for goal management, progress tracking, and analytics',
    'Integrated MongoDB for flexible data storage and real-time updates'
  ],
  image: '🎯',
  tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
  category: 'fullstack',
  github: 'https://github.com/Rishik27/ProgressPulse',
  featured: true
},
{
  id: 5,
  title: 'Multi-Tenant SaaS Platform',
  description: 'Enterprise-grade multi-tenant application with isolated data architecture, subscription management, and role-based access control.',
  details: [
    'Architected multi-tenant system with tenant isolation using Spring Boot',
    'Implemented subscription billing integration with Stripe API',
    'Designed scalable database schema with tenant-specific data segregation',
    'Built admin dashboard for tenant management and analytics'
  ],
  image: '🏢',
  tags: ['Spring Boot', 'PostgreSQL', 'React', 'Stripe', 'Multi-tenancy'],
  category: 'fullstack',
  featured: false
},
{
  id: 6,
  title: 'Real-Time Analytics Dashboard',
  description: 'Live data visualization platform processing streaming data with interactive charts and customizable metrics for business intelligence.',
  details: [
    'Built real-time data pipeline using Kafka for event streaming',
    'Developed interactive dashboards with React and Recharts/D3.js',
    'Implemented WebSocket connections for live data updates',
    'Optimized queries and aggregations for large-scale data processing'
  ],
  image: '📊',
  tags: ['React', 'Kafka', 'WebSocket', 'D3.js', 'MongoDB'],
  category: 'fullstack',
  featured: true
}

  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Real-world projects demonstrating expertise in full-stack development, 
            cloud architecture, and scalable system design.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && <span className="featured-badge">⭐ Featured</span>}
              
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <ul className="project-details">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;