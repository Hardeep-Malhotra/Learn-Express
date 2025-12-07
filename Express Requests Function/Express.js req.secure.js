const express = require('express');
const app = express();
const PORT = 5000;


app.get('/', (req, res) => {
  if (req.secure) {
    res.send("This is a secure HTTPS request!");
  } else {
    res.send("This is an insecure HTTP request.");
  }
});

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
});