import React, { Component } from 'react';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      organization: '',
      venue: '',
      location: '',
      date: '',
      comments: ''
    }
  }

  contactFormChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const formChange = {
    }

    formChange[name] = value;
    this.setState(formChange);
  }

  contactFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {

    return (
      <div id="contact" className="contact-form-section flex-column flex-center palette-three">
          
          <div className="contact-form-container flex-row flex-center large-padding narrow-content">
            <div className="contact-form-text-container flex-column flex-center">
              <div className="contact-form-text title">Contact DJ Bismark.</div>
              <div className="contact-form-text-icon fas fa-envelope"></div>
            </div>

            <form onSubmit={this.contactFormSubmit} className="contact-form flex-row flex-center">
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.firstName} name="firstName" placeholder="First" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.lastName} name="lastName" placeholder="Last" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.email} name="email" placeholder="Email" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.phone} name="phone" placeholder="Phone" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.organization} name="organization" placeholder="Organization" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.venue} name="venue" placeholder="Venue" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.location} name="location" placeholder="Location" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-input form-group flex-column">
                <input value={this.state.date} name="date" placeholder="Date" onChange={this.contactFormChange} />
              </div>
    
              <div className="contact-form-textarea form-group flex-column">
                <textarea value={this.state.comments} name="comments" placeholder="Comments" onChange={this.contactFormChange} />
              </div>

              <button className="button" type="submit" value="submit">Submit</button>
            </form>
          </div>

      </div>
    )

  }
}

export default ContactForm
