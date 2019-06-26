import React, { Component } from 'react';
import axios from 'axios';
import { filterRequestsByStatus } from '../utilities';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getBookingRequests();
  }

  async getBookingRequests() {
    let bookingRequests = await axios.get('/api/bookings/request');
    let filteredRequests = filterRequestsByStatus(bookingRequests.data);

    this.setState(filteredRequests);

  }

  render() {
    let statuses = Object.keys(this.state);
    let bookings = this.state;

    return (
      <div className="dashboard flex-row palette-three">
        {statuses.map(status => {
          return (
            <div key={status} className={`dashboard-${status} flex-column medium-padding palette-two`}>
              <div className={`dashboard-${status}-title`}>{status}</div>
              {bookings[status].map(booking => {
                //TO DO: sort booking fields (First Name, Last Name, etc)
                let fields = Object.keys(booking);

                return (
                  <div key={booking._id} className={`dashboard-booking-${booking._id} flex-column small-padding small-margin palette-three`}>
                    <div className="dashboard-booking-title">Booking: {booking._id}</div>
                    {fields.map(field => {
                      //TO DO: write field validator (base on cutomized fields)
                      return field !== '_id' && field !== '__v' && field !== 'Status' 
                        ? (
                        <div key={booking._id + field} className={`dashboard-booking-${booking._id}-${field}`} >{`${field}: ${booking[field]}`}</div>
                      ) : '';
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dashboard
