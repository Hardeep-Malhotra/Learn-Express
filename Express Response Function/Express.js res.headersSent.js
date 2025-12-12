const express = require("express");
const app = express;
const PORT = 3000;

app.get("/test", (req, res) => {
    res.send("Hello World");

    if (res.headersSent) {
        console.log("Headers already sent!");
    } else {
        res.send("Another response"); // Error dega
    }
});

app.listen(PORT,()=>{
    console.log("Server are listen at 3000 PORT");
    
})