import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Grow, Slide, Fade } from '@material-ui/core';

/**
 * COMPONENT
 */
export const Landing = props => {
  const {email} = props

  return (
    <div className="landing overlay-parent">
      <div className="landing-bg-layer"></div>
      <Fade timeout={1000} in={true}>
        <div className="landing-bismark-layer overlay-element"></div>
      </Fade>
      <div className="landing-video-layer overlay-element flex-column flex-center">
        <div className="landing-video-layer-border"></div>
      </div>
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
