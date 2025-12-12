const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.attachment("hello.txt");
    res.send("Hello Hardeep! This is inside the file.");
});

app.listen(PORT, () => {
    console.log("Server is listening on 3000 PORT");
});
