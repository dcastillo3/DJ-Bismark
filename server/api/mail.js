const router = require('express').Router();
const {sendMail} = require('../utilities');

//Send mail
router.post('/', (req, res, next) => {
    const { to, subject, text } = req.body;
    sendMail(to, subject, text);

    res.sendStatus(201);
})

module.exports = router;