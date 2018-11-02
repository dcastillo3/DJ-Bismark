import React, {Component} from 'react'
import {Landing, Photos, Videos, Bio, Store, Venues} from './sections';

class Main extends Component {

  render() {
    return (
      <div className="main flex-column">
        <Landing />
        <Photos />
        <Videos />
        <Bio />
        <Venues />
      </div>
    )
  }
}

export default Main
