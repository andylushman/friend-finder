//required Dependencies
var path = require("path");

//Default route to Home page
app.get("/", (app) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Survey Page
app.get("/survey", (req, res) =>{
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
