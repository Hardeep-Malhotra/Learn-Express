const express = require('express');     
const app = express();
const port = 3000;

// 5. Handling Errors with next(err)
// Calling next(err) inside a route manually forwards errors to Express’s error handler.

app.get('/manual-error',(req,res,next)=>{
    const err = new Error("Manually triggered error!");
    next(err); // Forward the error to Express  
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send({message:err.message});
});
// When someone visits /manual-error, an error is manually created and passed to Express using next(err).
// The error is automatically sent to the error-handling middleware, which then sends a 500 status with the error message.