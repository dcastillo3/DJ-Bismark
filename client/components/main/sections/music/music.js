import React, { Component } from 'react';
import MusicPlayer from './musicPlayer';


export class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMix: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461546394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      mixes: [
        {name: 'mix1',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461546394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix2',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/464663610&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix3',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/470826504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix4',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/476278668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix5',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485614842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix6',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512678253&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix7',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512683341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix8',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512685267&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'mix9',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512690304&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
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
      <div className="music flex-column flex-center palette-three">
        <div className="music-content flex-column flex-center large-padding narrow-content">
          <MusicPlayer
            mix={currentMix}
          />

          <div className="music-mixes">
            {this.state.mixes.map((mix) => {
              return (
                <div key={mix.url} mix={mix.url} onClick={(event) => this.handleMix(event)} className="music-mix">{mix.name}</div>
              )
            })}
          </div>

        </div>
      </div>
    )
  }
}

export default Music
