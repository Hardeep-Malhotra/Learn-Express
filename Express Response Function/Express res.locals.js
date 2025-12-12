const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.locals.isLoggiedI = true;
    res.locals.username = "Hardeep ";
    next();
});

app.get('/', (req, res) => {
    if (res.locals.isLoggiedI) {
        res.send(`Hy ${res.locals.username} , You'r loggedIn.`)
    } else {
        res.send(`${res.locals.username} ,You'r not loggedIn plz try again..!`)
    }
})
app.listen(PORT, () => {
    console.log("Server are listen at 3000 PORT");

})