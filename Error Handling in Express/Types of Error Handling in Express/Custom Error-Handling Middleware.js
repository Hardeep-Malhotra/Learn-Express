const express = require('express');     
const app = express();
const port = 3000;
// 2. Custom Error-Handling Middleware
// Instead of relying on the built-in error handler, you can create a custom error middleware. This lets you log errors and send user-friendly responses.

app.get('/',(req,res)=>{
  throw new Error('Something went wrong!'); // This will be caught by the default error handler
});

app.use((err,req,res,next)=>{
    console.log(err.stack); // Log the error stack trace
    res.status(500).send({message:"Oops! Something went wrong!"}); // Send a generic error message
    next(); // Call next to pass control to the next middleware (if any)
});
// app.use((err, req, res, next)): This middleware runs only if an error occurs in a route. It catches the error, logs it, and sends a structured JSON response to the client.
// The err object contains the error details, while the req and res objects are used for handling the request and response.
