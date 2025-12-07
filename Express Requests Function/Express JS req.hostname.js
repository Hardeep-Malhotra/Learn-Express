const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

   const hostname = req.hostname;
   console.log(hostname);
   res.send(`Your Hosting Name is ${hostname}`)
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});