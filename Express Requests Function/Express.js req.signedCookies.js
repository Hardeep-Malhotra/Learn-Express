const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 5000;

// Use cookie-parser with a secret key for signed cookies
app.use(cookieParser('mySecretKey'));

// Route to set a signed cookie
app.get('/set', (req, res) => {
  res.cookie('user', 'Rahul', { signed: true });
  res.send('Signed cookie set!');
});

// Route to read signed cookies
app.get('/read', (req, res) => {
  console.log(req.signedCookies); // Logs all signed cookies
  res.send(`Signed Cookies: ${JSON.stringify(req.signedCookies)}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});