import React, { Component } from 'react';
import axios from 'axios';
import { filterRequestsByStatus } from '../utilities';
import { StatusColumn } from './components';

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
      <div className="dashboard flex-column palette-three">
        <div className="dashboard-column flex-row palette-three">
          {statuses.map(status => {
            return (
              <StatusColumn key={status} status={status} bookings={bookings} />
            )
          })}
        </div>


      </div>
    )
  }
}

export default Dashboard