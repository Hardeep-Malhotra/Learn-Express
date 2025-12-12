const express = require("express");
const app = express();
const PORT = 3000;

app.get("/demo", (req, res) => {

    // 1. Send status
    // res.sendStatus(400);  <-- Ends response automatically

    // 2. Set headers
    res.set({
        "X-Powered-By": "HardeepEngine",
        "X-Version": "1.0"
    });

    // 3. Status (chainable)
    res.status(200);

    // 4. Content type
    res.type("json");

    // 5. Vary header
    res.vary("User-Agent");

    res.send({ msg: "Response demo complete!" });
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
