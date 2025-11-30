const express = require('express');     
const app = express();
const port = 3000;
// 4. Asynchronous Error Handling
// Unlike errors in normal functions, errors in async functions are not caught automatically by Express. You need to handle them manually using try-catch or pass them to Express using next(err).

app.get('/async', async (req,res,next)=>{
    try {
        let data = await Promise.reject( new Error('Aysnc error occurred!')); // Simulating an async error
    } catch (error) {
        next(error); // Pass the error to Express
    };
});

app.use((err,req,res,next) =>{
    console.log(err.stack);
    res.status(500).send({message:err.message});
});
// In this code, the error is manually caught in the catch block and passed to the error handler using next(err).
// The error-handling middleware then responds with a 500 status code and the error message.
