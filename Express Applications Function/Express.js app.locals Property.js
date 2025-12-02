const express = require('express');
const app = express();



app.locals.title = 'My Express App';
app.locals.description = 'This is a sample Express application.';
app.locals.email = 'hardeepmalhotra@example.com';

app.get('/', (req, res) => {
  res.send(`<h1>${app.locals.title}</h1><p>${app.locals.description}</p> <p>${app.locals.email}</p>`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

// Importing Express: The code starts by importing the Express module, which is a framework for building web applications in Node.js
// Setting a Global Variable: app.locals.email = 'hardeepmalhotra@example.com'; sets a global variable called email on the app.locals object, which can be accessed across all routes in the app
// Creating a Route: The app.get() method defines a route for the root URL('/').When a user visits this URL, it sends the email stored in app.locals as the response
// Starting the Server: app.listen(3000, () => { console.log('Server running on port 3000'); }); starts the server on port 3000 and logs a message when the server is running