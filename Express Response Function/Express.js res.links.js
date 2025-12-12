const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.links({
        next: 'https://foundryco.com/our-solutions/events/',
        middle: 'https://foundryco.com/our-solutions/events/',
        last: 'https://foundryco.com/our-solutions/events/'
    });

    console.log(res.get('link'));

    res.send("Link header has been added!");
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
