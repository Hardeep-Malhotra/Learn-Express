const express = require('express');
const app = express();



console.log(app.disabled('trust proxy')); 

console.log(app.enabled('trust proxy'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

