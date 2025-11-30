// 1. Default Error Handler
// Express has a built-in error handler that catches any errors that are not handled. If you don't create your own error handler, Express will automatically send a simple "500 Internal Server Error" response.

const express = require('express');     
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  throw new Error('Something went wrong!'); // This will be caught by the default error handler

});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Express automatically catches errors that are not handled.
// It prevents the server from crashing when unexpected issues occur.
// If you don’t add your own error handler, Express uses its default one.
// In development mode, the error message is shown, but in production, it is hidden.
