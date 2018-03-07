var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index',{title:'Send Email Without smtp'});
 
});

router.post('/sendemail',(req,res,next)=>{

	nodemailer.mail({
    from: "ALI PRUMPUNG <no-reply@aliprumpung.id>", // sender address
    to: req.body.emailto, // list of receivers
    subject: 'Hello'+" ✔",// Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world?</b>" // html body
});
res.redirect('/');
    
});

module.exports = router;
