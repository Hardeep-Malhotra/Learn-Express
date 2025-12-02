const express = require('express');
const app = express();

app.use(express.json());


app.delete('/', (req,res)=>{
  res.send("Data are Successfuly deleted")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   

