const router = require('express').Router();
const { sendMail, utility } = require('../utilities');

// Nodemailer: Send email
router.post('/request', (req, res, next) => {
    let emailInfo;

    if(utility.validBookingRequest(req.body)) {
        emailInfo = utility.parseBookingRequestEmail(req.body);
    } else {
        throw new Error('Invalid email format');
    }

    sendMail(emailInfo, (err, data) => {
        if(err) console.log(err);
        else {
            console.log('Booking request email confirmation sent: ' + data.response);
            res.sendStatus(201);
        }
    });
});

module.exports = router;