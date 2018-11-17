import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../store';
import { Slide } from '@material-ui/core';
import { Link as ScrollLink } from 'react-scroll';

class Navbar extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, isLoggedIn } = this.props;

    return (
      <Slide direction="down" timeout={1000} in={true} style={{transitionDelay: 1000}}>
        <div className="navbar flex-row flex-center palette-one-transparent flex-full-grid">
          <div className="social-media menu-items flex-row flex-center">
            <a href="https://soundcloud.com/bismarkbeats" target="_blank" className="fab fa-soundcloud"></a>
            <a href="https://www.instagram.com/bismarkbeats" target="_blank" className="fab fa-instagram"></a>
            <a href="https://www.facebook.com/hyonam.heller" target="_blank" className="fab fa-facebook-square"></a>
            <a href="https://www.youtube.com/watch?v=xZ9cgUGmzfY" target="_blank" className="fab fa-youtube"></a>
          </div>

          <div className="logo"></div>

          <div className="nav-links menu-items">
            <ScrollLink activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</ScrollLink>
            <ScrollLink activeClass="active" to="music" spy={true} smooth={true} duration={500} >Music</ScrollLink>
            <ScrollLink activeClass="active" to="photos" spy={true} smooth={true} duration={500} >Photos</ScrollLink>
            <ScrollLink activeClass="active" to="videos" spy={true} smooth={true} duration={500} >Videos</ScrollLink>
            <ScrollLink activeClass="active" to="bio" spy={true} smooth={true} duration={500} >Bio</ScrollLink>
            <ScrollLink activeClass="active" to="venues" spy={true} smooth={true} duration={500} >Venues</ScrollLink>
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</ScrollLink>
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link> */}
          </div>
        </div>
      </Slide>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
