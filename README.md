[![CircleCI](https://circleci.com/gh/andela-oakinseye/g-mailer.svg?style=svg)](https://circleci.com/gh/andela-oakinseye/g-mailer)
# g-mailer
Sending of emails from your nodejs app using your gmail account.

### How to Use
#### Installation
```
npm install g-mailer
```

#### Config Setup
Pass in the following environment variables using a .env file

```
EMAIL_SENDER_NAME = <Your name or Business name>
GMAIL_ADDRESS = <Your gmail address>
GMAIL_APP_PASSWORD = <Your Gmail App password>
```

#### Example .env file content
```
EMAIL_SENDER_NAME = Smith Joe
GMAIL_ADDRESS = myemail4432@gmail.com
GMAIL_APP_PASSWORD = jdcsscscs3wn
```

#### Sending Emails

Import the package into your app

**Using ES5**
```js
var gmail = require('g-mailer');
```

**With ES Modules**
```js
import gmail from 'g-mailer';
```

**Sending example [Single Recipient]**
```js
const recipient = 'brainyfarm@gmail.com';
const messageData = {
  subject: 'Olawale from g-mailer',
  text: 'Hello, this is a single recipient message from g-mailer',
  html: '<strong> Hello </strong>, this is a single recipient message from <em>g-mailer</em>'
}

gmail.send(recipient, messageData)
  .then(response => {
    // Email was sent, take a look at 'response'
  })
  .catch(error => {
    // Could not send email, something went wrong, check 'error'
  });
```

**Sending example [Multiple Recipients] with HTML support**
```js
const recipients = ['brainyfarm@gmail.com', 'g-mailer@dispostable.com'];
const messageData = {
  subject: 'Olawale from g-mailer',
  text: 'Hello, this is a single recipient message from g-mailer',
  html: '<strong> Hello </strong>, this is a single recipient message from <em>g-mailer</em>'
}

gmail.send(recipients, messageData)
  .then(response => {
    // Email was sent, take a look at 'response'
  })
  .catch(error => {
    // Could not send email, something went wrong, check 'error'
  });
```
#### Coming soon
- Email Template Support: *Generate HTML emails with support for custom values*
- Queue messages to be sent at a particular time or date
- [Suggest a feature or improvements](https://github.com/andela-oakinseye/g-mailer/issues)

#### Get Involved
- [Report a bug](https://github.com/andela-oakinseye/g-mailer/issues)
- Star the repo, fork and contribute.

#### Note
Remember to securely save your app password and ignore your .env file to avoid accidental pushing to your public repository.


Find instructions on how to generate a gmail `app password` [here](https://support.google.com/accounts/answer/185833?hl=en).

