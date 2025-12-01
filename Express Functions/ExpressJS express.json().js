const express = require('express');
const app = express();
const port = 3000;      

app.use(express.json());


app.post('/',(req,res)=>{
    console.log(req.body.name);
    res.end();
});

// Output
// When a POST request is made to http://localhost:3000/ with the header Content-Type: application/json and the body {"name":"Hardeep"}, the following output is displayed on the console:
// In this example
// The ExpressJSon() middleware is applied to parse incoming JSON request bodies, making the data accessible via req.body.
// A POST route is defined at the root (/) to handle requests, logging the name property from the JSON payload to the console.

// To run the server

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});




