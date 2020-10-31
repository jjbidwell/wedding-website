const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/views/index.html"));
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
