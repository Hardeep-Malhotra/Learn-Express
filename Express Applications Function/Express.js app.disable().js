
const express = require('express');
const app = express();

app.disable('trust proxy');

console.log(app.get('trust proxy')); // falsee('/', (req,res)=>{



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

