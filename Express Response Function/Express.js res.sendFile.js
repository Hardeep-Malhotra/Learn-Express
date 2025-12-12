const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');


app.get('/',(req,res)=>{
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'Hello.txt';
    res.sendFile(fileName,options,(err)=>{
        if(err){
            console.log("Error sending file :",err);
        }else{
            console.log("sent :", fileName);
        }
    })
})
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});