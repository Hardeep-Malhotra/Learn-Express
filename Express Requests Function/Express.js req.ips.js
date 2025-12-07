const express = require('express');
const app = express();
const PORT = 3000;

app.enable('trust proxy');

app.get('/', (req, res) => {
  const IPS = req.ips;
console.log(IPS)
  res.send(`Client IP: ${IPS}.`);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});