
const express = require('express');
const app = express();

const PORT = 3000;




app.get('/Data', (req, res) => {
    const type = req.accepts(['html', 'json']); // अब सही जगह

    if (type === 'html') {
        res.send("<h1>Hello World..</h1>");
    } else if (type === 'json') {
        res.json({ message: "JSON Data are received.." });
    } else {
        res.status(406).send("Not Acceptable...");
    }
});


app.listen(PORT, () => {
    console.log(`Server are listing at ${PORT}`);
});
