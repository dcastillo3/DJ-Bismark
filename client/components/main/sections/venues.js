import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.min.css";
import { partition, getFileName } from '../../../utilities';
import axios from 'axios';

export class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    this.getVenues();
  }

  async getVenues() {
    const res = await axios.get('/api/images/venues');
    this.setState({venues: res.data});
  }

  render() {
    const { venues } = this.state;
    const partVenues = partition(venues, 4);

    return (
      <div id="venues" className="venues flex-column flex-center palette-three bottom-blue">
        <div className="venue-content flex-column flex-center narrow-content large-padding">

        <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={10000}
          transitionTime={1500}
        >
          
          {partVenues.length && partVenues.map(venueArr => {
            return (
              <div className="venue-items flex-row flex-center">

                {venueArr.length && venueArr.map(venue => {
                  const { url } = venue;
                  const imageName = getFileName(url);
                  const venueImage = {
                    backgroundImage: `url(${url})`
                  }

                  return (
                    <div className={`venue-item-${imageName}`} style={venueImage}></div>
                  )
                })}

              </div>
            )
          })}

        </Carousel>

        </div>
      </div>
    )
  }
}

export default Venues
