const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.append('Warning', '201 Warning');
    console.log(res.get('Warning'));

    res.send("Warning header added!"); 
});

app.listen(PORT, () => {
    console.log("Server is listening on 3000 PORT");
});
