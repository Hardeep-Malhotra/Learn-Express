const express = require('express');
const app = express();

app.use(express.json());


app.all('/',(req,res)=>{
  console.log(req.body.name);
  console.log(req.body.email);

  res.send('Data are received')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

// This code sets up an Express.js server that listens for requests on all HTTP methods (GET, POST, PUT, DELETE, etc.) at the root URL ('/'). It uses the express.json() middleware to parse incoming JSON request bodies. When a request is made to the root URL, it logs the 'name' and 'email' fields from the request body to the console and sends a response indicating that the data has been received. The server listens on port 3000.
// Importing Express: The code starts by importing the Express module, which is a framework for building web applications in Node.js
// Creating an Express Application: const app = express(); creates an instance of an Express application
// Middleware Setup: app.use(express.json()); sets up middleware to parse incoming JSON request bodies, allowing the server to handle JSON data sent in requests        
// Handling All HTTP Methods: app.all('/', (req, res) => { ... }); defines a route that listens for all HTTP methods at the root URL ('/'). This means it will respond to GET, POST, PUT, DELETE, and other types of requests
// Accessing Request Body: Inside the route handler, req.body.name and req.body.email access the 'name' and 'email' fields from the JSON request body
// Sending a Response: res.send('Data are received'); sends a response back to the client indicating that the data has been received
// Starting the Server: app.listen(3000, () => { console.log('Server is running on http://localhost:3000'); }); starts the server on port 3000 and logs a message when the server is running
