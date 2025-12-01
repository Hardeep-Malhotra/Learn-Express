const express = require('express');
const app = express();
const port = 3000;      

app.use(express.text({type: 'text/plain'})); // Middleware to parse text/plain request bodies`


app.post('/message',(req,res)=>{
    console.log(req.body); // Log the raw text message`
    res.send(`server received: ${req.body}`); // Respond with the received message` 
})


// To run the server

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});