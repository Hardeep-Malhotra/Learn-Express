const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    if (req.xhr) {
        return res.send({ status: true });
    } else {
        return res.send({ status: false });
    }
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});