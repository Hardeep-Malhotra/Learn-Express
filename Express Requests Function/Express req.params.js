const express = require('express');
const e = require('express');
const app = express();
const PORT = 3000;

const student = express.Router();
app.use('/student', student);

student.get('/profile/:start/:end', function (req, res) {
    const Starting_Page = req.params.start;
   const Ending_Page = req.params.end;
   res.send(`Student Starting page : ${Starting_Page} , Student Ending page : ${Ending_Page}`);
   
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});