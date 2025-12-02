const express = require('express');
const app = express();
const teacher = express();
const student = express();



app.get('/', (req, res) => { 
  res.send('User  HomePages');
});

teacher.on('mount',(parent)=>{
  console.log('Teacher mounted');
});

student.on('mount',(parent) =>{
  console.log('Student mounted');
})


app.use('/teacher',teacher);
app.use('/student', student);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   




// 🎯  Simple Summary 
// Feature                                      	Simple Meaning
// mount event	                                    When sub-app gets mounted on the main app
// When it fires?                                	Right after app.use('/path', subapp)
// Callback gets	                                parent → the main app
// Why used?                                      	To run some code right when sub-app is added