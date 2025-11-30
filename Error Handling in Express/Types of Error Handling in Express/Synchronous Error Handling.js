const express = require('express');     
const app = express();
const port = 3000;
// 3. Synchronous Error Handling
// Express automatically catches errors in synchronous functions. If an error is thrown inside a route, it is sent to the error handler.

app.get('/home',(req,res)=>{
    throw new Error('Synchronous error!'); // This will be caught by the error handler
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send({message:err.message});
});
// Any error thrown in the route (throw new Error) is caught by Express and forwarded to the error-handling middleware automatically.
// The custom error handler sends the error message as a JSON response with a 500 status code.