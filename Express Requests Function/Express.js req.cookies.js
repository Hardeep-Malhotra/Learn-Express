const cookieParser = require('cookie-parser');
const cookie = require('cookie-parser');
const express = require('express');
const app = express();

const PORT = 3000;
app.use(cookieParser());


app.get('/user',(req,res)=>{
    req.cookies.name = 'Hardeep Singh';
    req.cookies.age = 20
    console.log(req.cookies);
    res.send(`Hello ${req.cookies.name} , Welcome to Home....`);
})

app.listen(PORT, () => {
    console.log(`Server are listing at ${PORT}`);
});
