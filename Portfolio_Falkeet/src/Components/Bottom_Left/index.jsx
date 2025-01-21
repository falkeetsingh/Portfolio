import React from 'react'
import "./index.scss"

const Bottom_Left = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project',
      tech: ['React', 'Node.js'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project',
      tech: ['TypeScript', 'MongoDB'],
      link: '#'
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bottom_Left
