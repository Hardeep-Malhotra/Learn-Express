const express = require('express');
const app = express();

const PORT = 3000;

const student = express.Router();

student.get('/singup', (req, res) => {
    if (req.baseUrl == '/student') {
        console.log("Show signup form");
        res.send("Plz wait only few seconds Signup page will render on screen");
    } else {
        console.log("Invalid Request");
        res.send("Invalid Route");
    }
});


app.use('/student', student)

app.listen(PORT, () => {
    console.log(`Server are listing at ${PORT}`);
});
