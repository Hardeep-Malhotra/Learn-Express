


const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

app.use(cookieParser());

// --------------------
// Set Cookie
// --------------------
app.get('/set-cookie', (req, res) => {
    res.cookie("username", "Hardeep Singh", {
        maxAge: 100 * 60 * 60, // Cookie lifetime
        httpOnly: true,
        secure: true,          // Works only on HTTPS
        sameSite: "strict"
    });

    res.send("Cookie set successfully!");
});

// --------------------
// Get Cookie
// --------------------
app.get("/get-cookie", (req, res) => {
    console.log(req.cookies); // Logs all cookies

    // ❗ Fix: use req.cookies, not req.cookie
    res.send(`Cookies from browser: ${JSON.stringify(req.cookies)}`);
});

// --------------------
// Delete Cookie
// --------------------
app.get('/delete-cookie', (req, res) => {
    res.clearCookie("username");
    res.send("Cookie deleted successfully!");
});

// --------------------
app.listen(PORT, () => {
    console.log("Server is listening on PORT 3000");
});
