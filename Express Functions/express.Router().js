const express = require('express');
const app = express();
const port = 3000;      


const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();


router1.get('/',(req,res)=>{
    console.log("Router 1 accessed");
    res.send("Hello from Router 1");
});

router2.get('/',(req,res)=>{
    console.log("Router 2 accessed");   
    res.send("Hello from Router 2");
});

router3.get('/',(req,res)=>{
    console.log("Router 3 accessed");
    res.send("Hello from Router 3");
});


app.use('/users',router1);
app.use('/admin',router2);
app.use('/students',router3);   

// To run the server

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});