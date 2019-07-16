import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => (
  <div className="footer flex-column flex-center palette-two">

    <div className="footer-container flex-column flex-center narrow-content medium-padding">

      <div className="footer-columns flex-row">
        
        <div className="footer-column-copyright flex-column">
          <div className="footer-column-container flex-column element-center">
            <div className="footer-column-contact-logo"></div>
            <div className="footer-column-copyright-a">
              © 2018 DJ Bismark.
            </div>

            <div className="footer-column-copyright-b">
              All Rights Reserved.
            </div>
          </div>
        </div>

        <div className="footer-column-contact flex-column">
          <div className="footer-column-container flex-column">
            <div className="footer-bottom-text-subtitle bottom-light-red subtitle">Exceptional Quality</div>
            <div className="bottom-light-red">Groovy feel good</div>
            <div>Smoothly mixed transitions</div>
          </div>
        </div>

        <div className="footer-column-social flex-column">
          <div className="footer-column-container flex-column element-center">
            <a className="flex-row" href="https://soundcloud.com/bismarkbeats" target="_blank" rel="noopener noreferrer">
              <i className="footer-social fab fa-soundcloud"></i>
              <div className="footer-column-social-text">Soundcloud</div>
            </a>
            <a className="flex-row" href="https://www.instagram.com/bismarkbeats" target="_blank" rel="noopener noreferrer"> 
              <i className="footer-social fab fa-instagram"></i>
              <div className="footer-column-social-text">Instagram</div>
            </a>
            <a className="flex-row" href="https://www.facebook.com/hyonam.heller" target="_blank" rel="noopener noreferrer"> 
              <i className="footer-social fab fa-facebook-square"></i>
              <div className="footer-column-social-text">Facebook</div>
            </a>
            <a className="flex-row" href="https://www.youtube.com/watch?v=xZ9cgUGmzfY" target="_blank" rel="noopener noreferrer"> 
              <i className="footer-social fab fa-youtube"></i>
              <div className="footer-column-social-text">YouTube</div>
            </a>
          </div>
        </div>
        
        <div className="footer-column-menu flex-column">
          <div className="footer-column-container flex-column element-center">
            <ScrollLink activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</ScrollLink>
            <ScrollLink activeClass="active" to="music" spy={true} smooth={true} duration={500} >Music</ScrollLink>
            <ScrollLink activeClass="active" to="photos" spy={true} smooth={true} duration={500} >Photos</ScrollLink>
            <ScrollLink activeClass="active" to="videos" spy={true} smooth={true} duration={500} >Videos</ScrollLink>
            <ScrollLink activeClass="active" to="bio" spy={true} smooth={true} duration={500} >Bio</ScrollLink>
            <ScrollLink activeClass="active" to="venues" spy={true} smooth={true} duration={500} >Venues</ScrollLink>
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</ScrollLink>
          </div>
        </div>

      </div>

      <div className="footer-bottom-text flex-column medium-padding flex-center">
        <div className="footer-bottom-text-title title text-center">Music That Touches The Soul</div>
        <div className="footer-bottom-text-content text-center">Kaytranada, Michael Jackson, Timbaland, Earth Wind and Fire, Anderson .Paak, Luther Van Dross, Leon Bridges, GoldLink, Prince, Pharrell Williams, Chic, The Spinners, Masego, FKJ, Marvin Gaye, The GAP Band, A Tribe Called Quest, Donell Jones. </div>
      </div>

    </div>

  </div>
)

export default Footer;
