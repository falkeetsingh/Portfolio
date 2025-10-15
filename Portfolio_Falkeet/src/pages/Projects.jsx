import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects = () => {
  const allProjects = [
    {
      title: 'E-Commerce Website',
      description: 'An E-Commerce platform developed with the MERN stack, featuring product listings, cart & checkout system, authentication, and order management. Implements responsive design and efficient database handling for scalability.',
      tech: ['React', 'Node.js','Express.js', 'MongoDB', 'Redux','Tailwind CSS','Vercel','Render'],
      link: 'https://ecommerce-store-navy-delta.vercel.app/',
      github: 'https://github.com/falkeetsingh/Ecommerce-store',
      image: '/assets/ecommerce.png'
    },
    {
      title: 'Substack Automation',
      description: 'An automation tool for managing Substack newsletters, enabling scheduled publishing, subscriber management, and content analytics. Built to streamline newsletter workflows and improve engagement.',
      tech: ['Python', 'Selenium', 'APIs', 'HTML', 'CSS'],
      github: 'https://github.com/falkeetsingh/Substack-Automation',
      image: '/assets/substack.png'
    },
    {
      title: 'ClickLens',
      description: 'A web analytics and link tracking platform designed to provide insights into user engagement and click behavior. Offers interactive dashboards, real-time analytics, and customizable tracking links.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      link: 'https://clicklens.vercel.app/',
      github: 'https://github.com/falkeetsingh/ClickLens',
      image: '/assets/clicklens.png'
    },
    {
      title: 'Solar System Simulation',
      description: 'A solar system simulation built with Three.js, showcasing realistic planetary movements and interactions. Utilizes WebGL for rendering and includes interactive features to explore the solar system.',
      tech: ['Javascript', 'Three.js', 'WebGL', 'HTML', 'CSS'],
      link: 'https://solar-system-silk-mu.vercel.app/',
      github: 'https://github.com/falkeetsingh/Solar-System',
      image: '/assets/solar.png'
    }
  ];

  return (
    <div className="projects-page">
      <Link to="/" className="back-button">
        <span>←</span> Back to Home
      </Link>
      <h1>My Projects</h1>
      <div className="projects-container">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                    Visit Site
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;