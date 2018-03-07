var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index',{title:'Send Email Without smtp'});
 
});

router.post('/',(req,res,next)=>{

	nodemailer.mail({
    from: "ALI PRUMPUNG <no-reply@aliprumpung.id>", // sender address
    to: req.body.emailto, // list of receivers
    subject: 'Hello'+" ✔",// Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world?</b>" // html body
});

    console.log("Email has been sent successfully");
    res.status(200).json('Email has been sent successfully !!');
});

module.exports = router;
