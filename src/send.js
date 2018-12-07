var nodemailer = require('nodemailer');
var config = require('./config/config');

var transporter = nodemailer.createTransport(config.transport);

function send(recipients, messageData) {
  var to = Array.isArray(recipients) ? recipients.join(', ') : recipients;
  console.log(to);
  var options = {
    from: config.sender,
    to: to,
    subject: messageData.subject || config.senderName,
    text: messageData.text || 'Empty message from ' + config.senderName,
    html: messageData.html
  };
  
  return new Promise(function(resolve, reject) {
    return transporter.sendMail(options, function(error, info) {
      if (error) {
        return reject(error.message)
      }
      return resolve(info);
    });
  });
}

module.exports = send;
