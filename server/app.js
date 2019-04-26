const express = require("express");
const app = express();
const port = 3000;

// Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/products", (req, res) => res.sendFile(__dirname + '/products.json'));

app.listen(port, () => console.log(`api listening on port ${port}!`));
