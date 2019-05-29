import React, { Component } from 'react';
import axios from 'axios';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First: { value: '', formType: 'text', required: 1},
      Last: { value: '', formType: 'text', required: 1 },
      Email: { value: '', formType: 'email', required: 1 },
      Phone: { value: '', formType: 'number', required: 1 },
      Organization: { value: '', formType: 'text', required: 1 },
      Venue: { value: '', formType: 'text', required: 1 },
      Location: { value: '', formType: 'text', required: 1 },
      Date: { value: '', formType: 'date', required: 1 },
      Comments: { value: '', formType: 'text', required: 0 }
    }
  }

  contactFormChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    const formChange = { 
      [name]: {...this.state[name]}
    };

    formChange[name].value = value;
    this.setState(formChange);
  }

  contactFormSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/bookings/request', this.state)
    .then(res => {
      axios.post('/api/mail/request', this.state)
      .then(res => console.log(res))
    })
    .catch(err => console.log(err))
  }

  render() {
    const contactForm = this.state;
    const fields = Object.keys(this.state);

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
                      <input type={contactForm[field].formType} value={contactForm[field].value} name={field} placeholder={field} onChange={this.contactFormChange} required={contactForm[field].required} />
                    </div>
                  )
                } else {
                  return (
                    <div key={field} className="contact-form-textarea form-group flex-column">
                      <textarea type={contactForm[field].formType} value={this.state.Comments.value} name="Comments" placeholder="Comments" onChange={this.contactFormChange} required={contactForm[field].required} />
                    </div>
                  )
                }
              })
              }

              <button className="button" type="submit" value="submit">Submit</button>
            </form>
          </div>

      </div>
    )

  }
}

export default ContactForm
