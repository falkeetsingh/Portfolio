import React from 'react'
import "./index.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Top_Right = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: faGithub, 
      url: 'https://github.com/falkeetsingh'
    },
    { 
      name: 'LinkedIn', 
      icon: faLinkedin, 
      url: 'https://linkedin.com/in/falkeet-singh-72043124b'
    },
    { 
      name: 'Twitter', 
      icon: faTwitter, 
      url: 'https://twitter.com/falkeetsingh_'
    },
    { 
      name: 'Email', 
      icon: faEnvelope, 
      url: 'mailto:falkeetpassi111@gmail.com'
    }
  ]

  return (
    <div className="social-links">
      <h3>Connect With Me</h3>
      <div className="links-grid">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={link.icon} className="icon" />
            <span className="name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Top_Right
