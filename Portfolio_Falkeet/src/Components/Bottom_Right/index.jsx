import React, { useState, useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// Initialize EmailJS
emailjs.init("NEmUe1GvCplWnmBIF")

const Bottom_Right = () => {
  const form = useRef()
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const result = await emailjs.sendForm(
        'service_yiazeyd',
        'template_tksfa6p',
        form.current,
        'NEmUe1GvCplWnmBIF'
      )

      if (result.text === 'OK') {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        })
        
        // Reset form
        form.current.reset()
        
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }))
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      })
    }
  }

  return (
    <div className="contact-section">
      <h3>Get in Touch</h3>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reply_to">Email</label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            required
            placeholder="your.email@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            placeholder="Your message here..."
          />
        </div>
        <button 
          type="submit" 
          className="submit-btn"
          disabled={status.submitting}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.submitted && (
          <div className="success-message">
            Message sent successfully! Thank you for reaching out.
          </div>
        )}

        {status.error && (
          <div className="error-message">
            {status.error}
          </div>
        )}
      </form>
    </div>
  )
}

export default Bottom_Right
