const express = require('express');
const app = express();
const PORT = 3000;

app.enable('trust proxy');

app.get('/', (req, res) => {
  const IP = req.ip;
  const protocol = req.protocol;
  res.send(`Client IP: ${IP}.`);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});