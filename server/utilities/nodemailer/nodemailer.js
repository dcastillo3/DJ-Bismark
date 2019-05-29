const nodemailer = require('nodemailer');

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
const sendMail = (emailInfo, cb) => {
    const options = {
        from: 'doNotReply@dj-bismark.herokuapp.com',
        to: process.env.NODEMAILER_EMAIL,
        ...emailInfo
    }

    transporter.sendMail(options, (err, data) => {
        err ? cb(err) : cb(err, data);
    });
}

module.exports = sendMail;