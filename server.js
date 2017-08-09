/***************
GLOBAL VARIABLES
***************/
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//configure express application
var app = express();
var PORT = 3000;

//configure bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



/***************
FUNCTIONS
***************/



/***************
PROCESS
***************/
app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
