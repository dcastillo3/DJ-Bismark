import React from 'react';

const BookingField = (props) => {
    let { booking, field } = props;

    //TO DO: write field validator (base on cutomized fields)
    return field !== '_id' && field !== '__v' && field !== 'Status'
        ? (
            <div className={`dashboard-booking-${booking._id}-${field}`} >{`${field}: ${booking[field]}`}</div>
        )
        : '';
}

export default BookingField