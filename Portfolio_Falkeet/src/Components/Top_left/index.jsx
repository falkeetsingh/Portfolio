import React from 'react'
import './index.scss'

const Top_left = () => {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img src="public\assets\falkeet-singh.jpg" alt="Profile" />
      </div>
      <div className="profile-info">
        <h1>Falket Singh</h1>
        <h2>Frontend Developer</h2>
        <p className="location">📍 Delhi</p>
      </div>
    </div>
  )
}

export default Top_left
