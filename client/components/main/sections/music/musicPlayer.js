import React from 'react';

export const MusicPlayer = props => {
  const { mix } = props;

  return (
    <div className="music-player large-padding palette-one-transparent">
      <iframe 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay" 
        src={mix}>
      </iframe>
    </div>
  )
}

export default MusicPlayer
