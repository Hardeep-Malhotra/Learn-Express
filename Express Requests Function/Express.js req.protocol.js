const express = require('express');
const app = express();
const PORT = 3000;

app.enable('trust Proxy');
app.get('/',  (req, res) => {
    console.log(req.protocol);
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});