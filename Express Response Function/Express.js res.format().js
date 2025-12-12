const express = require('express');
const app = express();
const PORT = 3000;

app.get("/data", (req, res) => {
    res.format({
        "text/plain": () => {
            res.send("Hello Hardeep (Text Format)");
        },

        "text/html": () => {
            res.send("<h1>Hello Hardeep (HTML Format)</h1>");
        },

        "application/json": () => {
            res.json({ message: "Hello Hardeep (JSON Format)" });
        },

        "default": () => {
            res.status(406).send("Not Acceptable");
        }
    });
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});