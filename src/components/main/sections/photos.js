import React, { Component } from 'react';
import { getFileName } from '../../../utilities';
import axios from 'axios';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  async getPhotos() {
    const res = await axios.get('/api/images/photos');
    this.setState({photos: res.data});
  }

  render() {
    const { photos } = this.state;
    
    return (
      <div id="photos" className="photos flex-column flex-center palette-two">
        
        <div className="photo-items flex-row flex-center large-padding">
          {photos.map(photo => {
            const { url } = photo;
            const imageName = getFileName(url);
            const photoImage = {
              backgroundImage: `url(${url})`
            }

            return (
              <div key={imageName} className={`photo-item-${imageName}`} style={photoImage}></div>
            )
          })}
        </div>

      </div>
    )
  }
}

export default Photos;
