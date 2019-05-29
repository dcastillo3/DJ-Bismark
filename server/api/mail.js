const router = require('express').Router();
const { sendMail, utility } = require('../utilities');
const { parseFormData } = require('../utilities').utility;
const { Mail } = require('../db/models/');

// Nodemailer: Send mail
router.post('/', (req, res, next) => {
    const emailInfo = parseFormData(req.body);

    // sendMail(emailInfo);
    const currMail = new Mail(req.body);
    currMail.save((err, data) => {
        if(err) console.log(err);
        else console.log(data)
    })
    res.sendStatus(201);
})

// router.post('/test', (req, res, next) => {
    //type mongo action here
    // mail.create(req.body, (err, data) => {
    //     if(err) console.log(err);
    //     else console.log(data)
    // })
// })

module.exports = router;