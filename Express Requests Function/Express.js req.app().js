const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    // Access the app instance using req.app
    const appInstance = req.app;
    console.log(appInstance);
});


app.listen(PORT,()=>{
    console.log(`Server are listing at ${PORT}`);
});




