const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.location('https://foundryco.com/our-solutions/events/');


    console.log(res.get('location'));

    res.send("Link header has been added!");
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
