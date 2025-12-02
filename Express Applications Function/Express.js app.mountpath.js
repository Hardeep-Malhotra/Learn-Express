const express = require('express');
const app = express();
const user = express();


app.get('/', (req, res) => { 
  console.log(user.mountpath   ); 
  res.send('User HomePages');
});

app.use('/user',user);
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});   


// 🎯  Simple Summary 
// Feature	                                Easy Meaning
// app.mountpath                       	The path on which a sub-app is mounted
// Use	                                    To check the mount URL of a sub-app
// Main app mountpath                   	Always /
// Sub-app mountpath	                    The path you provide inside app.use()