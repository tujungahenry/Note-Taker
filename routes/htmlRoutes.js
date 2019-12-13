// DEPENDENCIES
var path = require("path");


// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // This is for the link to the css file.
  app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};