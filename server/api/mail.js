const router = require('express').Router();
const { sendMail, utility } = require('../utilities');
const { parseFormData } = require('../utilities').utility;

// Nodemailer: Send mail
router.post('/', (req, res, next) => {
    const emailInfo = parseFormData(req.body);

    sendMail(emailInfo);

    res.sendStatus(201);
})

module.exports = router;