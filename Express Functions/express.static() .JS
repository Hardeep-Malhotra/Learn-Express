const express = require('express');
const app = express();
const port = 3000;      


// Use express.static middleware to serve static files from the "public" folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page!');
})

// accessing image : http://localhost:3000/image.png 

// Middleware Setup: express.static is a built-in middleware function in Express that serves static files.
// Directory Path: It takes a directory path as an argument, indicating where static assets (like images, CSS, and JavaScript) are stored.
// Request Handling: When a request is made for a specific file, Express searches the specified directory for the file.
// File Delivery: If the requested file exists, Express sends it directly to the client (browser) with the appropriate content type.
// 404 Error: If the file is not found, Express returns a 404 error, indicating the resource is nOT found.
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});