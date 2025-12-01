const express = require('express');
const app = express();
const port = 3000;      

app.use(express.raw({ type: 'application/json' })); // Middleware to parse raw JSON

// Route to handle POST requests    

app.post('/', (req, res) => {
    console.log(req.body);               // Buffer
    console.log(req.body.toString());    // Buffer → String
    const data = JSON.parse(req.body.toString()); // String → JSON object
    console.log(data);                   // { name: "Rahul" }
    res.end();
});

// OUTPUT:
// Server is running on http://localhost:3000
// <Buffer 7b 0d 0a 20 20 22 6e 61 6d 65 22 3a 20 22 48 61 72 64 65 65 70 20 53 69 6e 67 68 22 2c 0d 0a 20 20 22 65 6d 61 69 6c 22 3a 22 68 61 72 64 65 65 70 6d ... 19 more bytes>
// {
//   "name": "Hardeep Singh",
//   "email":"hardeepmalhotra022@gmai"
// }
// { name: 'Hardeep Singh', email: 'hardeepmalhotra022@gmai' }


// To run the server

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});