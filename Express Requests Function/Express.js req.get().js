const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const userAgent = req.get('User-Agent');   // client ka browser info
  const acceptType = req.get('Accept');      // client ka accept header

  res.send(`User-Agent: ${userAgent} <br> Accept: ${acceptType}`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});