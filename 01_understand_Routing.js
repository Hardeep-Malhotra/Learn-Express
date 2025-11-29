import express from "express";
const app = express();
const PORT = 3000;  

app.get("/", (req,res) => {
    res.send("Welcome to the Home Page!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




// Express Routing
// In this example

// express is imported and an app instance is created.
// app.get('/', ...) defines a route for GET requests to the root URL / and sends a response “Welcome to Express Routing!”.
// app.listen(3000, ...) starts the server on port 3000 and logs a message when it’s running.