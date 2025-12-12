const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.set("Warning", "200 Danger");  // header set

    console.log(res.get("Warning"));   // header read

    res.send("Header example");
});


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});