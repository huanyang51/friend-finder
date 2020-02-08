var apiRouter = require("express").Router();
var db = require("../data/friends");
console.log(db.friends);
apiRouter.use(function(req, res, next) {
  next();
});

apiRouter.get("/friends", (req, res) => {
  res.json(db.friends);
});
apiRouter.post("/friends", (req, res) => {
  res.json(db.friends);
});
module.exports = apiRouter;
