import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import './index.scss'

const Top_Middle = () => {
  return (
    <div className="intro-section">
      <h2>Hello! 👋</h2>
      <div className="typing-title">
        <ReactTypingEffect
          text={[
            "Frontend Developer",
          ]}
          speed={100}
          eraseSpeed={100}
          typingDelay={1000}
          eraseDelay={2000}
          className="typing-text"
        />
      </div>
      <div className="intro-text">
        <p>
          I'm currently pursuing a Bachelor's degree in Computer Science and
          Engineering at Guru Tegh Bahardur Institute of Technology. I'm a
          passionate and driven individual with a zeal to learn and grow.
        </p>
      </div>
    </div>
  )
}

export default Top_Middle
