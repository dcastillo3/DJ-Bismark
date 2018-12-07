import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({handleClick, isLoggedIn}) => (
  <div className="footer flex-row flex-center palette-two">

    <div className="footer-columns flex-row large-padding narrow-content">
      <div className="footer-column-a">
        Hello
      </div>

      <div className="footer-column-b">
        Hello 2
      </div>

      <div className="footer-column-c">
        Hello 3
      </div>
      
      <div className="footer-column-d">
        Hello 4
      </div>
    </div>

    {/* <div className="logo"></div>
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
    </nav> */}
  </div>
)

export default Footer
