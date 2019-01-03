const nodemailer = require('nodemailer');

//transporter information
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
})

//sendmail
const sendMail = (to, subject, text) => {
    const options = {
        from: process.env.NODEMAILER_EMAIL,
        to,
        subject,
        text
    }

    transporter.sendMail(options, (err, info) => {
        err ? console.log(err) : console.log('email sent: ' + info.response);
    });
}

module.exports = sendMail;