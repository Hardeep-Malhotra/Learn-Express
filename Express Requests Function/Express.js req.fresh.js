
const express = require('express');
const app = express();

const PORT = 3000;



app.get('/Data', (req, res) => {
    if (req.fresh) {
        console.log(req.fresh);
        res.status(304).end(); // Client cache is fresh, no new data
    } else {
        res.send("Data are Successfully recived....");
    }
});

app.listen(PORT, () => {
    console.log(`Server are listing at ${PORT}`);
});
