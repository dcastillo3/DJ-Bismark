import React, {Component} from 'react'
import {Landing, Music, Photos, Bio, Venues} from './sections';
import ContactForm from '../contact-form';

class Main extends Component {

  render() {
    return (
      <div className="main flex-column">
        <Landing />
        <Music />
        <Bio />
        <Venues />
        <Photos />
        {/* <Videos /> */}
        <ContactForm />
      </div>
    )
  }
}

export default Main
