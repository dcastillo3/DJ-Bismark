import React from 'react';

export const MusicPlayer = props => {
  const { mix } = props;

  return (
    <div className="music-player large-padding palette-one-transparent">
      <iframe 
        title="soundcloud"
        width="100%" 
        height="100%" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={mix}>
      </iframe>
    </div>
  )
}

export default MusicPlayer;
