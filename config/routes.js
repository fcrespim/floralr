var nodemailer = require('nodemailer');

module.exports = function (app) {  
  //Controllers++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  var controller  = require('../controllers')
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  app.get('/', controller)
  app.post('/submit', sendmail)
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}

function sendmail(req,res) {
	var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'florapereira.lr@gmail.com', // Your email id
            pass: 'jpc12362' // Your password
        }
        var text = 'Inscrição dia '+ new Date() +' \n\n' + req.body;

    var mailOptions = {
    	from: 'florapereira.lr@gmail.com>', // sender address
    	to: 'florapereira.lr@gmail.com', // list of receivers
    	subject: 'Inscrição', // Subject line
    	text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
	};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
}