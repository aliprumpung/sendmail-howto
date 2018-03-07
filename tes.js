require('dotenv').config();
const express = require('express');
const app = express();
var nodemailer = require("nodemailer");
var sendmail = require("sendmail");
app.listen(process.env.PORT);
app.get('/',(req,res,next)=>{
   /* sendmail({
     from: 'callmesike@gmail.com', // sender address
    to: 'highest_courtesy@yahoo.com', // list of receivers
    subject: 'Hello',// Subject line
    text: "Hello world", // plaintext body
    html: "<b>Hello world?</b>" // html body
},function(err,rep){
    if(err){
      res.status(409).json(err);  
    }else{

        console.log(rep);
    console.log("Email has been sent successfully");
     res.status(200).json(rep);
    }
    
});*/

nodemailer.mail({
    from: "ALI PRUMPUNG <no-reply@aliprumpung.id>", // sender address
    to: 'highest_courtesy@yahoo.com', // list of receivers
    subject: 'Hello'+" ✔",// Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world?</b>" // html body
});

    console.log("Email has been sent successfully");
    res.status(200).json('Email has been sent successfully');
});
/*
const sendMail =nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'callmesike@gmail.com', // generated ethereal user
            pass: '' // generated ethereal password
        },
        tls:{
        	rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'highest_courtesy@yahoo.com,lrn2b66@yahoo.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});*/

// Sending Email Without SMTP

