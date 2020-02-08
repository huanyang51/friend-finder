var apiRouter = require("express").Router();
var db = require("../data/friends");
apiRouter.use(function(req, res, next) {
  next();
});

apiRouter.get("/", (req, res) => {
  res.json(db.friends);
});
apiRouter.post("/", (req, res) => {
  res.json(db.friends);
});
module.exports = apiRouter;
