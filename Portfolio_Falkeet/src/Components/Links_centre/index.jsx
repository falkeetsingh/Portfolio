import React, { useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDownload, 
  faEnvelope, 
  faCode,
  faBrain,
  faRocket
} from '@fortawesome/free-solid-svg-icons'
import { GeometricScene } from './GeometricScene'

const Links_centre = () => {
  const [textIndex, setTextIndex] = useState(0)
  const roles = ['Frontend Developer', 'Team Worker', 'Quick Learner']
  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleDownloadCV = () => {
    // Add your CV download link here
    const cvLink = 'path-to-your-cv.pdf'
    window.open(cvLink, '_blank')
  }

  const handleContactMe = () => {
    // Smooth scroll to contact section
    const contactSection = document.querySelector('.Bottom_Right')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      icon: faCode,
      title: 'Frontend Development',
      description: 'Building scalable web applications with modern technologies'
    },
    {
      icon: faBrain,
      title: 'Team Worker',
      description: 'Adapt in working in a team environment'
    },
    {
      icon: faRocket,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks'
    }
  ]

  return (
    <div className="Links_centre">
      <div className="split-container">
        <div className="content">
          <div className="welcome-text">
            <h1>Hello, World!</h1>
            <div className="animated-text">
              <span>I am a </span>
              <span className="role">{roles[textIndex]}</span>
            </div>
            <p className="description">
              Passionate about creating beautiful and functional web experiences
            </p>
          </div>

          <div className="skills-container">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <button className="cta-button primary" onClick={handleDownloadCV}>
              <FontAwesomeIcon icon={faDownload} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        <div className="scene-container">
          <GeometricScene />
        </div>
      </div>
    </div>
  )
}

export default Links_centre
