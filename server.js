var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Harkirat Singh Kohli, ID: 145039202");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
