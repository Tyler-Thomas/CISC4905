

const express = require("express");
const {src} = require('./database.js');
const PORT = process.env.PORT || 5001;

const app = express();

app.get("/chars", (req, res) => {
  res.json({source:src});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`Source${src.characters[1].name}`)
});