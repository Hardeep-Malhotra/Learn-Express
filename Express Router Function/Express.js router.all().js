const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;

// Setting multiple routes
router.all('/user', function (req, res) {
    console.log("User Page Called");
    res.end();
});

router.all('/student', function (req, res) {
    console.log("Student Page Called");
    res.end();
});

router.all('/teacher', function (req, res) {
    console.log("Teacher Page Called");
    res.end();
});

app.use(router);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});