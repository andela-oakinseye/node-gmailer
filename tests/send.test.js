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

test('import.send should successfully send a mail to a single recipient', async (done) => {
  const recipient = 'gmailer@dispostable.com';
  const messageData = { 
    subject: 'G-Mailer Single Recipient Test',
    text: 'This is an automated Test Message from the module, single recipient ok'
  };

  const response = await gmail.send(recipient, messageData);
    expect(response).toBeTruthy();
    expect(response).toHaveProperty('accepted');
    expect(response).toHaveProperty('rejected');
    expect(response.accepted[0]).toBe(recipient);
    expect(response).toHaveProperty('messageId');
    done();
}, 40000);


test('import.send should successfully send a mail to multiple recipients', async (done) => {
  const recipients = ['gmailer@dispostable.com', 'gmailer2@dispostable.com', 'brainyfarm@gmail.com'];
  const messageData = { 
    subject: 'G-Mailer Multi Recipient Test',
    text: 'This is an automated test Message from the g-mailer package, multi recipients ok',
    html: `<strong> Hello,</strong> <br /> <br />
      This is an automated test Message from the <strong> g-mailer package </strong>, multi recipients ok
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
