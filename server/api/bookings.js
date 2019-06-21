const router = require('express').Router();
const { BookingRequest } = require('../db/models');
const { utility } = require('../utilities');

// MongoDB: Save booking request
router.post('/request', (req, res, next) => {
    let bookingInfo = utility.parseBookingRequest(req.body);
    const currBookingRequest = new BookingRequest(bookingInfo);

    currBookingRequest.save((err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send(err.message);
        }
        else {
            console.log('Successfully saved booking request: ', data._id);
            res.sendStatus(201);
        }
    })
});

// MongoDB: Get booking requests
router.get('/request', (req, res, next) => {
    let query = req.query;

    //get all booking requests that match query
    BookingRequest.find(query, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send(err.message);
        }
        else {
            console.log('Successfully queried!');
            res.status(201).send(data);
        }
    })
})

// MongoDB: Update booking request
router.put('/request', (req, res, next) => {
    let bookingInfo = utility.parseBookingRequest(req.body);
    let { _id } = bookingInfo;
    let idQuery = { _id };

    //get booking request with id and update
    BookingRequest.findOneAndUpdate(idQuery, bookingInfo, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send(err.message);
        }
        else {
            console.log('Successfully updated booking request: ', data._id);
            res.sendStatus(201);
        }
    })
})

module.exports = router;