const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  if (req.is('application/json')) {
    res.send("Request body is JSON");
  } else if (req.is('text/html')) {
    res.send("Request body is HTML");
  } else if (req.is('text/plain')) {
    res.send("Request body is plain text");
  } else {
    res.send("Unknown Content-Type");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});