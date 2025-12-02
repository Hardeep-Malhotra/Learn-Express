const express = require('express');
const app = express();

app.param('userId',(req,res,next)=>{
  console.log(`User ID: ${req.params.userId}`);
  next();
});

app.post('/user/:userId',(req,res,next)=>{
  res.send(`User ID received: ${req.params.userId}`);
  next();
});

app.get('/user/:userId',(req,res)=>{
  res.send(`User ID received: ${req.params.userId}`);   
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

