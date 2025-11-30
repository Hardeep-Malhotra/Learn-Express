// Types of Middleware
// ExpressJS offers different types of middleware and you should choose the middleware based on functionality required.

const express = require('express');
const app = express();
const PORT = 3000;

// 1. Application-level Middleware
// Application-level middleware is bound to the entire Express application using app.use() or app.METHOD(). It executes for all routes in the application, regardless of the specific path or HTTP method.
// This type of middleware is commonly used for tasks like logging, body parsing, authentication checks, or setting headers for every incoming request.
app.use((req, res, next) => {
    console.log('Request reciveved at : ', req.method, req.url)
    next();
});

app.get('/home', (req, res) => {
    res.send('This is Home page');
});

app.get('/about', (req, res) => {
    res.send('This is About page');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// 2. Router-level Middleware
// Router-level middleware is applied to a specific router instance using router.use() or router.METHOD(). It only applies to routes defined within that particular router, making it perfect for modular applications where middleware is only relevant to specific groups of routes.
// This type of middleware is often used to group related routes (e.g., all routes related to authentication or user management) and apply middleware logic to them.
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
    console.log('Request received at router:', req.method, req.url);
    next();
});

// Router-level route
router.get("/router-home", (req, res) => {
    res.send("This is Router Home page inside /user router");
});

router.get("/profile", (req, res) => {
    res.send("This is User Profile page inside /user router");
});
// Mount router
app.use("/user", router);

// App-level route
app.get("/router-home", (req, res) => {
    res.send("This is App-level Router Home page");
});



// 3. Error-handling Middleware
// Error-handling middleware is a special type of middleware used to catch and respond to errors during the request-response cycle. It is defined with four parameters: err, req, res, next.
// This middleware is essential for sending a consistent error response and avoiding unhandled exceptions that might crash the server.

app.get('/error', (req, res) => {
    throw new Error('This is a test error');
});


app.use((err, req, res, next) => {
    console.error('Error occurred : ', err.message);
    res.status(500).send({ error: err.message })
});
// 🔹 Flow Explanation:
// 1 The client sends a request to /error.
// 2 The route executes throw new Error().
// 3 Normal middleware is skipped.
// 4 The error-handling middleware is activated.
// 5 The client receives the error message as a response.
// 6 The server does not crash.



// 4. Built-in Middleware
// Express provides built-in middleware to help with common tasks, like serving static files or parsing data.
// For example, express.static() serves files like images, and express.json() helps parse incoming JSON data.

app.use(express.json()); // Built-in middleware to parse JSON bodies

app.get('/data', (req, res) => {
    res.json({ message: 'Hello,this is JSON data' })
});

// 🔹 Simple Summary
// Middleware	                Purpose
// express.json()	            Parse incoming JSON data
// express.urlencoded()     	Parse URL - encoded form data
// express.static()	            Serve static files like images, CSS, JS





// 5. Third-party Middleware
// Third-party middleware is developed by external developers and packaged as npm modules. These middleware packages add additional functionality to your application, such as request logging, security features, or data validation.
// For example, the morgan middleware logs HTTP requests, and body-parser helps parse incoming request bodies for easier handling of form data.
// Built-in middleware to parse JSON data
app.use(express.json());

// Built-in middleware to parse form (URL-encoded) data
app.use(express.urlencoded({ extended: true }));

// Route to test JSON request
app.post("/json-data", (req, res) => {
    console.log("JSON data received:", req.body);
    res.send("JSON data received successfully!");
});

// Route to test Form request
app.post("/form-data", (req, res) => {
    console.log("Form data received:", req.body);
    res.send("Form data received successfully!");
});

// express.json() → parses JSON body of incoming requests
// express.urlencoded({ extended: true }) → parses form (URL-encoded) data
// With the parser, data becomes available in req.body
// Request method, URL, and headers are already available as req.method, req.url, req.headers — the parser does not modify them



// 🎯 Middleware Chaining
// Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware processes the request.
// The next() function in the express is responsible for calling the next middleware function if there is one.
// Modified requests will be available to each middleware via the next function


app.use((req, res, next) => {
    console.log("Middleware 1 : Request Recived Successfully.");
    req.customData = "Hello From Middleware 1 .";
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2: Accessing custom data:", req.customData);
    next();
});

app.get('/', (req, res) => {
    res.send("Response sent after all middleware executed ");

});

// 💡 Summary
// Middleware 1 → executes, modifies request → calls next()
// Middleware 2 → executes, accesses modified request → calls next()
// Final route → executes, sends response






// ✅Advantages of using Middleware
// Modularity: Breaks down complex tasks into smaller, manageable functions.
// Reusability: Middleware functions can be reused across different routes or applications.
// Maintainability: Organizes code logically, making it easier to manage and update.
// Error Handling: Centralizes error handling, improving the application's robustness.
// Performance Optimization: Allows for tasks like caching, compression, and security checks to be handled efficiently.


// ✅ Best Practices for Middleware in ExpressJS
// Always call next() to pass control to the next middleware unless you are ending the request-response cycle.
// Use specific middleware for different tasks (e.g., authentication, logging) to keep the code modular and clean.
// Place error-handling middleware at the end of the middleware stack to catch any unhandled errors.
// Avoid using synchronous code in middleware to prevent blocking the event loop.