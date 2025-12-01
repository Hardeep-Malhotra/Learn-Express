const express = require('express');
const app = express();
const port = 3000;      


app.use(express.urlencoded({extended:true}))

app.get('/form',(req,res)=>{
    res.send(`
    <form action="/submit" method="POST">
        <label for="name">Name:</label><input type="text" id="name" name="name">
        <button type="submit">Submit</button>
    </form>
    `);
});

app.post('/submit',(req,res)=>{
    console.log(req.body);
    res.send(`Form submitted! Hello, ${req.body.name}`);
});

// Imports and Sets Up Express: The code imports Express, initializes an app instance, and sets a server port (3000).
// Middleware for Form Data Parsing: app.use(express.urlencoded({ extended: true })) is used to parse URL-encoded form data and make it available in req.body.
// GET Route for Login Form: When a user visits /login, a simple HTML form is displayed, allowing them to enter a username and age.
// POST Route to Handle Form Submission: When the form is submitted, the server logs the received data (req.body) and sends a response confirming receipt.
// Starts the Server: The app listens on port 3000, and logs Server is running on localhost://3000 when it starts.
// To run the server

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});