//required Dependencies
var path = require("path");

//Export HTML routes
module.exports = (app) => {
  //Default route to Home page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  //Survey Page
  app.get("/survey", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
