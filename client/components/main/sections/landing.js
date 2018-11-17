import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Slide, Fade } from '@material-ui/core';

/**
 * COMPONENT
 */
export const Landing = props => {
  const {email} = props

  return (
    <div id="home" className="landing overlay-parent palette-three bottom-blue">
      <div className="landing-bg-layer overlay-element"></div>
      <Fade timeout={3000} in={true}>
        <div className="landing-bismark-layer overlay-element"></div>
      </Fade>
      <Slide direction="left" timeout={1000} in={true} style={{transitionDelay: 1000}}>
      <div className="landing-video-layer overlay-element flex-column flex-center">
        <div className="landing-video-layer-border palette-two-transparent">
          <iframe 
            src="https://drive.google.com/file/d/1sPl7fjCbKqBLuKdZZNoKE35qxzDTbk6w/preview" 
            frameborder="0" 
            width="425" 
            height="240" 
            allowfullscreen="true" 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            title="Video player">
          </iframe>
        </div>
      </div>
      </Slide> 
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Landing)

/**
 * PROP TYPES
 */
Landing.propTypes = {
  email: PropTypes.string
}
