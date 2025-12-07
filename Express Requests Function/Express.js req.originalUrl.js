// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware applied to all routes starting with /user
// Here we log both req.url and req.originalUrl
app.use('/user', (req, res, next) => {
  // req.url → only the path inside the current router
  console.log("Inside /user middleware");
  console.log("req.url:", req.url);

  // req.originalUrl → the full URL exactly as the client sent it
  console.log("req.originalUrl:", req.originalUrl);

  next(); // pass control to the next handler
});

// Route handler
app.get('/user/profile', (req, res) => {
  // Show both values in the response
  res.send(`
    <h3>Difference Demo</h3>
    <p><b>req.url:</b> ${req.url}</p>
    <p><b>req.originalUrl:</b> ${req.originalUrl}</p>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});