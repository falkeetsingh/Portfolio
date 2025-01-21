import React from 'react'
import "./index.scss"

const Bottom_Middle = () => {
  const skills = {
    'Frontend': ['React', 'HTML5', 'CSS3', 'JavaScript'],
    'Tools': ['Git', 'Figma'],
    'Languages': ['C++','C'],
  }

  return (
    <div className="skills-section">
      <h3>Skills & Technologies</h3>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h4>{category}</h4>
            <div className="skill-items">
              {items.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bottom_Middle
