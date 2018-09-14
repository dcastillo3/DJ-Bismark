import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="header">
    <div className="social-media">
      <div className="social-media-items">
        <i class="fab fa-soundcloud"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>

    <div className="logo"></div>

    <div className="nav-bar">
        <div className="nav-menu-items">
          <Link to="/home">Home</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/store">Store</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
    </div>
  </div>
)

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
