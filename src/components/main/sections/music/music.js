import React, { Component } from 'react';
import MusicPlayer from './musicPlayer';


export class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMix: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461546394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      mixes: [
        {name: 'Trip Hop',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461546394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Soul Star',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/464663610&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Amazing Grace',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/470826504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Sunshine And Samba',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/476278668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Funky Vivid Fantasy',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485614842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: '151st Street House Party',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512678253&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'AfroFunkyKompa',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512683341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Child Of The City',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512685267&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Make America Krump Again',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512690304&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
      ]
    }
  }



  handleMix = (evt) => {
    const currentMix = evt.target.attributes.getNamedItem('mix').value;

    this.setState({ currentMix })
  }

  render() {
    const { currentMix } = this.state;

    return (
      <div id="music" className="music overlay-parent flex-column flex-center palette-three large-padding">
        <div className="music-bg-layer overlay-element"></div>
        <div className="music-laptop-layer overlay-element"></div>

        <div className="music-content overlay-parent flex-row">
          <MusicPlayer
              mix={currentMix}
            />

          <div className="music-content-row empty">
          </div>

          <div className="music-content-row empty">
          </div>

          <div className="music-content-row">
            <div className="music-content-row-border palette-one-transparent">
              <div className="track-container flex-row">
                <div className="track-container-row-1 track-title-row">Tracklist</div>

                <div className="track-container-row-2 flex-column mini-margin">
                  {this.state.mixes.map((mix, i) => {
                    return (
                      <div key={mix.url} className="music-mix-track overlay-parent">
                        <div mix={mix.url} onClick={(event) => this.handleMix(event)} className="music-mix-track-click overlay-element"></div>
                        
                        <div className="music-mix-track-container flex-row mini-margin">
                          <i className="music-mix-track-play far fa-play-circle"></i>
                          <div className="music-mix-track-name small-padding">{mix.name}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Music;
