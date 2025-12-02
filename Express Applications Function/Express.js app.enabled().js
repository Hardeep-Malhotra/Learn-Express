const express = require('express');
const app = express();

console.log(app.enabled('trust proxy')) // false

app.enable('trust proxy')

console.log(app.enabled('trust proxy')) // true


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

