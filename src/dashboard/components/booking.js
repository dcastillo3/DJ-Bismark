import React from 'react';
import { BookingField } from '.';

const Booking = (props) => {
    let { booking, fields } = props;

    return (
        <div className={`dashboard-booking-${booking._id} flex-column small-padding small-margin palette-three`}>
            {fields.map(field => {
                //TO DO: write field validator (base on cutomized fields)
                return <BookingField key={booking._id + field} booking={booking} field={field} />
            })}
        </div>
    )
}

export default Booking