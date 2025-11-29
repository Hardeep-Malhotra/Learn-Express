const express = require('express');
const app = express();
const PORT = 3000;
// 1. Basic Route Parameter Handling
// Basic route parameters capture dynamic values directly from the URL. They are defined with a colon (:) in the route path and accessed via req.params inside the route handler.

// Now let's understand this with the help of example:

app.get('/user/:userId',(req,res) =>{
    const querry = req.params.userId;
    res.send(`<h1>User Profile</h1><p>user ID :${querry}`);
});
// output: Accessing http://localhost:3000/users/123 will display
// In this example:
// /users/:userId: :userId is a route parameter that captures the value after /users/.
// req.params.userId: Access the captured value and use it in the route handler for further logic.


// 2. Optional Route Parameters
// Optional route parameters allow a URL segment to be omitted without breaking the route. They are defined by adding a question mark (?) after the parameter name. If the parameter is not provided, a default value can be used.
// Now let's understand this with the help of example:

app.get('/product/:productID',(req,res)=>{
    const querry = req.params.productID || 'default-prodyct';
    res.send(`<h1>Product Details</h1><p>Product ID: ${querry}</p>`);
});
// In this example:

// /products/:productId?: :productId is optional, meaning the route will match with or without the productId.
// req.params.productId || 'default': If no productId is provided, 'default' will be used instead.
// Accessing http://localhost:3000/products/ will display

// Product Page
// Product ID: default


// 3. Multiple Route Parameters
// Express allows you to define multiple route parameters in a single route. You can capture several dynamic values from the URL by adding multiple colon-prefixed parameters.

// Now let's understand this with the help of example:

app.get('/posts/:category/:postId', (req, res) => {
    const category = req.params.category;
    const postId = req.params.postId;
    res.send(`<h1>Post</h1><p>Category: ${category}, Post ID: ${postId}</p>`);
});
// In this example:
// /posts/:category/:postId: The route captures both category and postId from the URL.
// req.params.category and req.params.postId: Access the captured values for use in the handler.



app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})