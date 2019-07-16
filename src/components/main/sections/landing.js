import React from 'react';
import { Slide, Fade } from '@material-ui/core';

export const Landing = props => {
  // const allowFullScreen = 1;

  return (
    <div id="home" className="landing overlay-parent palette-three bottom-blue">
      <div className="landing-bg-layer overlay-element"></div>
      <Fade timeout={3000} in={true}>
        <div className="landing-bismark-layer overlay-element"></div>
      </Fade>
      <Slide direction="left" timeout={1000} in={true} style={{transitionDelay: 1000}}>
      <div className="landing-video-layer overlay-element flex-column flex-center">
        {/* <div className="landing-video-layer-border palette-two-transparent">
          <iframe 
            src="https://drive.google.com/file/d/1sPl7fjCbKqBLuKdZZNoKE35qxzDTbk6w/preview" 
            frameBorder="0" 
            width="425" 
            height="240" 
            allowFullScreen={allowFullScreen} 
            mozallowfullscreen={allowFullScreen} 
            webkitallowfullscreen={allowFullScreen} 
            title="Video player">
          </iframe>
        </div> */}
      </div>
      </Slide> 
    </div>
  )
}

export default Landing;