
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    console.log(req.get('Accept-Charset'));
    console.log(req.acceptsCharsets('UTF-8'));
    res.end();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});