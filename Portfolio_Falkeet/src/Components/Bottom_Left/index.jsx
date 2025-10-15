import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const Bottom_Left = () => {
  const featuredProjects = [
    {
      title: 'E-Commerce Website',
      description: 'An E-Commerce platform developed with the MERN stack, featuring product listings, cart & checkout system, authentication, and order management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: 'https://ecommerce-store-navy-delta.vercel.app/',
      github: 'https://github.com/falkeetsingh/Ecommerce-store'
    },
    {
      title: 'Solar System Simulation',
      description: 'A solar system simulation built with Three.js, showcasing realistic planetary movements and interactions. Utilizes WebGL for rendering.',
      tech: ['Three.js', 'WebGL', 'JavaScript'],
      link: 'https://solar-system-silk-mu.vercel.app/',
      github: 'https://github.com/falkeetsingh/Solar-System'
    }
  ];

  return (
    <div className="projects-section">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                Visit Site
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                View Code
              </a>
            </div>
          </div>
        ))}
        <Link to="/projects" className="view-all-btn">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default Bottom_Left;
