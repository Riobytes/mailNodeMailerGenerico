/**
 * Created by xaipo on 8/21/2017.
 */

var express= require('express');
var router= express.Router();
var nodemailer = require('nodemailer');


var mail='apunach2017@gmail.com';
var password='@PUN@CH2017'

router.post('/sendMail',function(req,res){

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user:mail,
            pass: password
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"APUNACH" <'+mail+'>', // sender address
        to: req.body.mail, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

// send mail with defined transport object

    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error);
        }
        res.send('Message %s sent: %s', info.messageId, info.response);
});

});

module.exports=router;