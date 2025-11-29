const express = require('express');
const app = express();
const port = 3000;  

// 1 Basic Routes in ExpressJS
// Basic routing involves defining a URL and specifying an HTTP method (GET, POST, PUT, DELETE, etc.).



// Define a basic GET route
app.get('/home',(req,res)=>{
    res.send("Welcome to the home page.");
});
app.post('/form',(req,res) =>{
    res.send("Form are successfully submited.");
});
// /home handles GET requests.
// /submit handles POST requests.



// 2 Route Parameters in ExpressJS
// Route parameters allow capturing dynamic values from URLs, making routes flexible and reusable.

app.get('/user/:userId' ,(req,res)=>{
    res.send(`User ID is : ${req.params.userId}`)
})
// :userId is a route parameter.
// req.params.userId extracts the value.


// 3 Optional and Multiple Route Parameters
// Express allows defining optional parameters and multiple parameters in a single route.

// c
// /products/123 → Product ID: 123
// /products/ → No product selected


// 4 Multiple Route Parameters
app.get('/articles/:category/:articleId', (req, res) => {                       
    res.send(`Category: ${req.params.category}, Article ID: ${req.params.articleId}`);
}); 
// /posts/tech/456 → Category: tech, Post ID: 456



// 5 Query Parameters in ExpressJS
// Query parameters are used for filtering or modifying requests. They appear after the ? symbol in URLs.

app.get('/search',(req,res)=>{
    const Query = req.query.q;
    res.send('Search results from querry parameter: ' + Query  );
})
// req.query.q extracts q from the URL.
// http://localhost:3000/search?q=Hardeep
// O/P => Search results from querry parameter: Hardeep


// 6 Route Handlers in ExpressJS
// Route handlers define how Express responds to requests.
app.get('/example',(req,res ,next)=>{
    console.log("First handler");
    next();
},(req,res)=>{
    res.send("Second handler response");
});
// The next() function passes control to the next handler.


// 7 Route Chaining in ExpressJS
// Chaining allows defining multiple handlers for a route using .route().

app.route('/User')
.get((req,res) => res.send('Get User'))
.post((req,res) => res.send('Create User'))
.put((req,res) => res.send('Update User'))
.delete((req,res) => res.send('Delete User'));

// /user supports multiple HTTP methods using .route().

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);   
})
