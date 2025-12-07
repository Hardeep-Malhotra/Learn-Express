const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable trust proxy (correct spelling)
app.enable('trust proxy');

app.post('/', (req, res) => {
    console.log("Query params:", req.query);
    console.log("Body data:", req.body);
    res.send("Request received!");
});

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
});