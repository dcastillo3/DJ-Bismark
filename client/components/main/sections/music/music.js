import React, { Component } from 'react';
import MusicPlayer from './musicPlayer';


export class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMix: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461546394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      mixes: [
        {name: 'Vol. 1 - Trip Hop',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461546394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 2 Soul Star',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/464663610&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 3 Amazing Grace',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/470826504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 4. Sunshine And Samba',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/476278668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 6 Funky Vivid Fantasy',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485614842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 7 151st Street House Party',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512678253&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 8 AfroFunkyKompa',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512683341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 9 Child Of The City',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512685267&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'},
        {name: 'Vol. 10 Make America Krump Again',  url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/512690304&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
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
