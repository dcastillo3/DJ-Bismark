import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.min.css";
import { partition, getFileName } from '../../../utilities';

export class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [
        {name: 'Moschino', imageUrl: 'images/venues/moschino.png'},
        {name: 'Pianos', imageUrl: 'images/venues/pianos.png'},
        {name: 'The Lately', imageUrl: 'images/venues/lately.png'},
        {name: 'The Handy Liquor Bar', imageUrl: 'images/venues/handy.png'},
        {name: 'Slate', imageUrl: 'images/venues/slate.png'},
        {name: 'Space Ibiza: New York', imageUrl: 'images/venues/space.png'},
        {name: 'Playstation Theater', imageUrl: 'images/venues/playstation.png'},
        {name: 'Webster Hall: New York City', imageUrl: 'images/venues/webster.png'},
        {name: 'Studio 151', imageUrl: 'images/venues/studio-151.png'},
        {name: 'Thai Rock: New York City', imageUrl: 'images/venues/thai-rock.png'},
        {name: 'La Esquina: New York City', imageUrl: 'images/venues/esquina.png'},
      ]
    }
  }

  render() {
    const { venues } =  this.state;
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
                  const { imageUrl } = venue;
                  const imageName = getFileName(imageUrl);
                  const venueImage = {
                    backgroundImage: `url(${imageUrl})`
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
