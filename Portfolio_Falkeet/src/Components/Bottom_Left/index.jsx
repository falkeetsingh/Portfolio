import React from 'react'
import "./index.scss"

const Bottom_Left = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'An E-Commerce platform developed with the MERN stack, featuring product listings, cart & checkout system, authentication, and order management. Implements responsive design and efficient database handling for scalability.',
      tech: ['React', 'Node.js','Express.js', 'MongoDB', 'Redux','Tailwind CSS','Vercel','Render'],
      link: 'https://ecommerce-store-navy-delta.vercel.app/',
      github: 'https://github.com/falkeetsingh/Ecommerce-store'
    },
    {
      title: 'Solar System Simulation',
      description: 'A solar system simulation built with Three.js, showcasing realistic planetary movements and interactions. Utilizes WebGL for rendering and includes interactive features to explore the solar system.',
      tech: ['Javascript', 'Three.js', 'WebGL', 'HTML', 'CSS'],
      link: 'https://solar-system-silk-mu.vercel.app/',
      github: 'https://github.com/falkeetsingh/Solar-System'
    }
  ]

  return (
    <div className="projects-section">
      <h3>Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Bottom_Left
