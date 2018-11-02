import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Footer = ({handleClick, isLoggedIn}) => (
  <div className="footer flex-row flex-center">
    <div className="logo"></div>
    <nav className="nav-bar">
        <div className="nav-menu-items">
          <Link to="/home">Home</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/store">Store</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
    </nav>
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

export default connect(mapState, mapDispatch)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
