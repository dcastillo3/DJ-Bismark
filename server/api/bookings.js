const router = require('express').Router();
const { BookingRequest } = require('../db/models');
const { utility } = require('../utilities');

// MongoDB: Save booking request
router.post('/request', (req, res, next) => {
    let bookingInfo;

    if(utility.validBookingRequest(req.body)) {
        bookingInfo = utility.parseBookingRequest(req.body);
    } else {
        throw new Error('Invalid booking format');
    }

    const currBookingRequest = new BookingRequest(bookingInfo);

    currBookingRequest.save((err, data) => {
        if(err) console.log(err);
        else {
            console.log('Successfully saved booking request: ', data._id);
            res.sendStatus(201);
        }
    })
});

module.exports = router;