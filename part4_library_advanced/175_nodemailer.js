const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'username@gmail.com',
        pass: 'password',
    },
});

const mailOptions =  {

    from: 'username@gmail.com',
    to: 'username@gmail.com',
    subject: 'Hello attachment',

    html: '<h1>Hello Attachment</h1><a href="http://www.infopub.co.kr>' + '<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></a>',

    attachments: [
        {
            filename: 'attachment_test.xlsx',
            path: 'attachment_test.xlsx',
        },
    ],
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Message sent: ${info.response}`)
        console.log(mailOptions.attachments)
    }
    transporter.close()
})