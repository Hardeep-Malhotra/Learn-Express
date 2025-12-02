const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Handling GET Request
app.get('/user', (req, res) => {
    res.send("Handled GET Request");
});

// Handling POST Request
app.post('/user', (req, res) => {
    res.send("Handled POST Request");
});

// Handling PUT Request (used for updating resources)
app.put('/user', (req, res) => {
    res.send("Handled PUT Request");
});

// Handling PATCH Request (used for partial updates)
app.patch('/user', (req, res) => {
    res.send("Handled PATCH Request");
});

// Handling DELETE Request
app.delete('/remove', (req, res) => {
    res.send("Handled DELETE Request");
});

// Handling OPTIONS Request (used to check allowed methods)
app.options('/user', (req, res) => {
    res.send("Handled OPTIONS Request");
});

// Handling HEAD Request (like GET but without response body)
app.head('/user', (req, res) => {
    res.end();
});

// Handling ALL methods for a route
app.all('/allmethods', (req, res) => {
    res.send(`Handled ${req.method} Request`);
});

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});
