const express = require('express');
const app = express();
const PORT = 3000;

// Register EJS as the template engine for .ejs files
app.engine('ejs', require('ejs').renderFile);

// Set default view engine (optional)
app.set('view engine', 'ejs');

// Render EJS file
app.get('/', (req, res) => {
    res.render('index', { name: "Hardeep" }); // pass data to template
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
