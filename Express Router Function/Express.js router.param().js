const express = require('express');
const router = express.Router();

router.param("id", (req, res, next, id) => {
    console.log("The ID is:", id);
    next();
});

router.get("/user/:id", (req, res) => {
    res.send("User ID received!");
});

module.exports = router;
