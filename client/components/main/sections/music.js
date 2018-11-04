import React from 'react'

export const Music = props => {

  return (
    <div className="music flex-column flex-center palette-three">
      <div className="music-content flex-column flex-center large-padding narrow-content">
        <div className="music-container large-padding palette-one-transparent">
          <iframe 
            width="100%" 
            height="300" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/94982824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Music
