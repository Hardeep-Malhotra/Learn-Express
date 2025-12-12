const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;

// All requests to this router will
// first hit this middleware
router.use(function (req, res, next) {
    console.log("Middleware Called");
    next();
})

// Always invoked
router.use(function (req, res, next) {
    res.send("Greetings from GeeksforGeeks");
})

app.use('/user', router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});