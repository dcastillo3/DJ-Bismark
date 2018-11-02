import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../store';
import { Slide } from '@material-ui/core';
import { smoothScroll } from '../../../utilities/utilities';

class Navbar extends Component { 
  constructor(props) {
    super(props);
  }
  
  // onSectionClick() {
  //   // TESTING SMOOTH SCROLL
  //   smoothScroll(document.body, 0, 1250);
  // }

  render() {
    const { handleClick, isLoggedIn } = this.props;

    return (
      <Slide direction="down" timeout={1000} in={true} style={{transitionDelay: 1000}}>
        <div className="navbar flex-row flex-center palette-one-transparent flex-full-grid">
          <div className="social-media menu-items flex-row flex-center">
            <a href="https://soundcloud.com/bismarkbeats" target="_blank" class="fab fa-soundcloud"></a>
            <a href="https://www.instagram.com/bismarkbeats" target="_blank" class="fab fa-instagram"></a>
            <a href="https://www.facebook.com/hyonam.heller" target="_blank" class="fab fa-facebook-square"></a>
            <a href="https://www.youtube.com/watch?v=xZ9cgUGmzfY" target="_blank" class="fab fa-youtube"></a>
          </div>

          <div className="logo"></div>

          <div className="nav-links menu-items">
            <a onClick={(event) => this.onSectionClick(event)}>Home</a>
            <a onClick={(event) => this.onSectionClick(event)}>Photos</a>
            <a onClick={(event) => this.onSectionClick(event)}>Videos</a>
            <a onClick={(event) => this.onSectionClick(event)}>Bio</a>
            <a onClick={(event) => this.onSectionClick(event)}>Store</a>
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
