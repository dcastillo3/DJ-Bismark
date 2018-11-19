import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [
        {name: 'Moschino', image: 'images/venues/moschino.png'},
        {name: 'Pianos', image: 'images/venues/pianos.png'},
        {name: 'The Lately', image: 'images/venues/lately.png'},
        {name: 'The Handy Liquor Bar', image: 'images/venues/handy.png'},
        {name: 'Slate', image: 'images/venues/slate.png'},
        {name: 'Space Ibiza: New York', image: 'images/venues/space.png'},
        {name: 'Playstation Theater', image: 'images/venues/playstation.png'},
        {name: 'Webster Hall: New York City', image: 'images/venues/webster.png'},
        {name: 'Studio 151', image: 'images/venues/studio-151.png'},
        {name: 'Thai Rock: New York City', image: 'images/venues/thai-rock.png'},
        {name: 'La Esquina: New York City', image: 'images/venues/esquina.png'},
      ],
      count: 0
    }
  }

  render() {
    const { venues } =  this.state;
    const { count } = this.state;

    return (
      <div id="venues" className="venues flex-column flex-center palette-three bottom-blue">
        <div className="venue-content flex-column flex-center narrow-content large-padding">

        {/* <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoplay={true}
          transitionTime={1000}
        > */}
          
          <div className="venue-items flex-row flex-center">
            {venues.length && venues.map(venue => {
              const { image } = venue;

              const splitPath = image.split('.').reverse();
              const imageExtension = splitPath[0];
              const imageName = splitPath[1].split('/').reverse()[0];

              const venueImage = {
                backgroundImage: `url(${image})`
              }

              return (
                  <div className={`venue-item-${imageName}`} style={venueImage}></div>
              )
            })}
          </div>

        {/* </Carousel> */}

        </div>
      </div>
    )
  }
}

export default Venues
