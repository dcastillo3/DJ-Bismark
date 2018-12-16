import React, { Component } from 'react';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First: '',
      Last: '',
      Email: '',
      Phone: '',
      Organization: '',
      Venue: '',
      Location: '',
      Date: '',
      Comments: ''
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
    const contactForm = this.state;
    const fields = Object.keys(contactForm);

    return (
      <div id="contact" className="contact-form-section flex-column flex-center palette-three">
          
          <div className="contact-form-container flex-row flex-center large-padding narrow-content">
            <div className="contact-form-text-container flex-column flex-center">
              <div className="contact-form-text title">Contact DJ Bismark.</div>
              <div className="contact-form-text-icon fas fa-envelope"></div>
            </div>

            <form onSubmit={this.contactFormSubmit} className="contact-form flex-row flex-center">

              {fields.map(field => {
                if (field !== 'Comments') {
                  return (
                    <div key={field} className="contact-form-input form-group flex-column">
                      <input value={contactForm[field]} name={field} placeholder={field} onChange={this.contactFormChange} required/>
                    </div>
                  )
                }
              })
              }

              <div className="contact-form-textarea form-group flex-column">
                <textarea value={this.state.Comments} name="Comments" placeholder="Comments" onChange={this.contactFormChange} />
              </div>

              <button className="button" type="submit" value="submit">Submit</button>
            </form>
          </div>

      </div>
    )

  }
}

export default ContactForm
