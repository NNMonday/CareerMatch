const nodemailer = require('nodemailer');

// Send the email

async function sendEmail(email, subject, text) {
    // Create a transporter object

    const transporter = nodemailer.createTransport({
        host: process.env.HOST_EMAIL,
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        }
    });

    // send mail with defined transport object
    // Configure the mailoptions object
    const info = await transporter.sendMail({
        from: process.env.USER,
        to: email,
        subject: subject,
        text: text
    }, function (error, info) {
        if (error) {
            console.log('Error line 28:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    console.log("Message sent: %s", info);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
module.exports = sendEmail;