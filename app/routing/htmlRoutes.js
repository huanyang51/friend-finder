var htmlRouter = require("express").Router();
var path = require("path");

htmlRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlRouter.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = htmlRouter;
