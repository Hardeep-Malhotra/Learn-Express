const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  if (req.stale) {
    res.send("Request stale hai, naya data bhejna padega!");
  } else {
    res.send("Request fresh hai, cache se data use ho sakta hai.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});