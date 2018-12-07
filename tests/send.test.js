const skipIf = require('skip-if');
const gmail = require('../');

test('import should be an object', () => {
  expect(gmail).toBeInstanceOf(Object);
});

test('import should have a property "send"', () => {
  expect(gmail).toHaveProperty('send');
});

test('import.send should be of type function', () => {
  expect(typeof gmail.send).toBe('function');
});

skipIf(!process.env.GMAIL_APP_PASSWORD, 'import.send should successfully send a mail to a single recipient', async (done) => {
  const recipient = 'node-gmailer@dispostable.com';
  const messageData = { 
    subject: 'Node-Gmailer Single Recipient Test',
    text: 'This is an automated test message, single recipient ok'
  };

  const response = await gmail.send(recipient, messageData);
    expect(response).toBeTruthy();
    expect(response).toHaveProperty('accepted');
    expect(response).toHaveProperty('rejected');
    expect(response.accepted[0]).toBe(recipient);
    expect(response).toHaveProperty('messageId');
    done();
}, 40000);


skipIf(!process.env.GMAIL_APP_PASSWORD, 'import.send should successfully send a mail to multiple recipients', async (done) => {
  const recipients = ['node-gmailer@dispostable.com', 'node-gmailer2@dispostable.com', 'brainyfarm@gmail.com'];
  const messageData = { 
    subject: 'Node-Gmailer Multi Recipient Test',
    text: 'This is an automated test message, multi recipients ok',
    html: `<strong> Hello,</strong> <br /> <br />
      This is an automated test Message from the <strong> node-gmailer package </strong>, multi recipients ok
      `
  };

  const response = await gmail.send(recipients, messageData);
    expect(response).toBeTruthy();
    expect(response).toHaveProperty('accepted');
    expect(response).toHaveProperty('rejected');
    expect(response.accepted.length).toBeGreaterThan(1);
    expect(response).toHaveProperty('messageId');
    done();
}, 40000);
