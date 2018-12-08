import React, { Component } from 'react';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="contact" className="contact-form-section flex-column flex-center palette-three">
          
          <div className="contact-form-container flex-row flex-center large-padding narrow-content">
            <form className="contact-form flex-row flex-center">
              <div className="contact-form-input form-group flex-column">
                <input placeholder="First" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Last" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Email" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Phone" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Organization" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Venue" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Location" />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input placeholder="Date" />
              </div>
    
              <div className="contact-form-textarea form-group flex-column">
                <textarea placeholder="Comments" />
              </div>
            </form>
          </div>

      </div>
    )

  }
}

export default ContactForm
