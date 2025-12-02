const express = require('express');
const app = express();

app.enable('trust proxy');  

console.log('Trust proxy enabled:', app.get('trust proxy'));


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

