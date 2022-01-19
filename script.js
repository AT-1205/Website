user_email = document.getElementsByTagName("user_email")
mail = document.getElementsByTagName("mail")
password = document.getElementsByTagName("password")
nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user_email,
        pass: password
    }
});

var mailOptions = {
    from: user_email,
    to: 'alatoo@edu.kg',
    subject: 'New club',
    text: mail
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
