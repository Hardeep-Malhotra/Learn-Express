const express = require('express');
const app = express();
const PORT = 3000;

app.get('/data', (req, res) => {
  const lang = req.acceptsLanguages('en', 'fr', 'hi');

  if (lang === 'en') {
    res.send("Hello World!");
  } else if (lang === 'fr') {
    res.send("Bonjour le monde!");
  } else if (lang === 'hi') {
    res.send("नमस्ते दुनिया!");
  } else {
    res.status(406).send("Language Not Acceptable");
  }
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});