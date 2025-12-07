const express = require('express');
const app = express();
const PORT = 3000;

app.enable('trust proxy');

app.get('/', (req, res) => {
    const reqMethod = req.method;
    console.log(reqMethod);
   res.send(`Your request method is ${reqMethod}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});