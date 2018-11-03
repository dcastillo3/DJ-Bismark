import React from 'react'

export const ContactForm = props => {

  return (
    <div className="contact-form-container narrow-content palette-three flex-row flex-center large-padding">
          <div className="form-group flex-column">
            <label>First</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Last</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Email</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Phone</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Organization</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Venue</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Location</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Date</label>
            <input />
          </div>

          <div className="form-group flex-column">
            <label>Comments</label>
            <textarea />
          </div>
        </div>
  )
}

export default ContactForm
