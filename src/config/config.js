const dotenv = require('dotenv');
dotenv.config();

const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const EMAIL_SENDER_NAME = process.env.EMAIL_SENDER_NAME;
const FULL_EMAIL_SENDER = '"' + EMAIL_SENDER_NAME + '" <' + GMAIL_ADDRESS + '>'; 


module.exports = {
  transport: {
    service: 'gmail',
    auth: {
      user: GMAIL_ADDRESS,
      pass: GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    }
  },
  sender: EMAIL_SENDER_NAME ? FULL_EMAIL_SENDER : process.env.GMAIL_ADDRESS,
  senderName: EMAIL_SENDER_NAME,
  }
