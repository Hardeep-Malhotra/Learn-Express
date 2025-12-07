const express = require('express');
const app = express();
const PORT = 3000;

app.get('/data', (req, res) => {
  const encoding = req.acceptsEncodings('gzip', 'deflate', 'br');

  if (encoding === 'gzip') {
    res.send("Client accepts gzip encoding");
  } else if (encoding === 'deflate') {
    res.send("Client accepts deflate encoding");
  } else if (encoding === 'br') {
    res.send("Client accepts brotli encoding");
  } else {
    res.status(406).send("Encoding Not Acceptable");
  }
});
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});