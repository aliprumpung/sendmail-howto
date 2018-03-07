var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index',{title:'Send Email Without smtp'});
 
});

router.post('/sendemail',(req,res,next)=>{

	nodemailer.mail({
    from: "ALI PRUMPUNG <no-reply@aliprumpung.id>", 
    to: req.body.emailto, 
    subject: 'Hello'+" ✔",
    text: "Hello world ✔", 
    html: "<b>Hello world?</b>"
});
res.redirect('/');
    
});

module.exports = router;
