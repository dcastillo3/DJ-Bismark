import React, {Component} from 'react'
import {Landing, Photos, Videos, Bio, Store} from './sections';

class Main extends Component {

  render() {

    return (
      <div className="main">
        <Landing />
        <Photos />
        <Videos />
        <Bio />
        <Store />
      </div>
    )
  }
}

export default Main
