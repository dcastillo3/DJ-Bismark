const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

//transporter information
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        type: 'OAuth2',
        user: process.env.NODEMAILER_EMAIL,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        // accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
        // expires: 1484314697598
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