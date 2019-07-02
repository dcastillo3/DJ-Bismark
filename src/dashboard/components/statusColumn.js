import React from 'react';
import { Booking } from '.';

const statusColumn = (props) => {
    let { bookings, status } = props;

    return (
        <div className={`dashboard-column-${status} flex-column medium-padding palette-two`}>
            <div className={`dashboard-title-${status}`}>{status}</div>
            {bookings[status].map(booking => {
                //TO DO: sort booking fields (First Name, Last Name, etc)
                let fields = Object.keys(booking);

                return <Booking key={booking._id} booking={booking} fields={fields} />
            })}
        </div>
    )
}

export default statusColumn