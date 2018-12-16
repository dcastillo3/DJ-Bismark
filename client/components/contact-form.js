import React, { Component } from 'react';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First: { value: '', type: 'text', required: 'true'},
      Last: { value: '', type: 'text', required: 'true' },
      Email: { value: '', type: 'email', required: 'true' },
      Phone: { value: '', type: 'number', required: 'true' },
      Organization: { value: '', type: 'text', required: 'true' },
      Venue: { value: '', type: 'text', required: 'true' },
      Location: { value: '', type: 'text', required: 'true' },
      Date: { value: '', type: 'date', required: 'true' },
      Comments: { value: '', type: 'text', required: 'false' }
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
  }

  render() {
    const contactForm = this.state;
    const fields = Object.keys(this.state);
    console.log(this.state)

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
                      <input type={contactForm[field].type} value={contactForm[field].value} name={field} placeholder={field} onChange={this.contactFormChange} required={contactForm[field].required} />
                    </div>
                  )
                } else {
                  return (
                    <div key={field} className="contact-form-textarea form-group flex-column">
                      <textarea type={contactForm[field].type} value={this.state.Comments.value} name="Comments" placeholder="Comments" onChange={this.contactFormChange} required={contactForm[field].required} />
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
