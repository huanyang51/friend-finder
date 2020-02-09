var apiRouter = require("express").Router();
var db = require("../data/friends");

apiRouter.get("/", (req, res) => {
  res.json(db.friends);
});
// when user enter his info into the survey form.
// push his info into db and find the most compatible friend from db.
function totalDif(array1, array2, num) {
  var totalDif = 0;
  for (var i = 0; i < num; i++) {
    totalDif = totalDif + Math.abs(array1[i] - array2[i]);
  }
  return totalDif;
}
apiRouter.post("/", (req, res) => {
  db.friends.push(req.body);
  var difs = [];
  for (var i = 0; i < db.friends.length - 1; i++) {
    var dif = totalDif(db.friends[i].scores, req.body.scores, 10);
    difs.push(dif);
  }
  difs.sort(function(a, b) {
    return a - b;
  });
  var min = difs[0];
  // get the person's info with the min differnce
  var matches = [];
  var idx = difs.indexOf(min);
  while (idx != -1) {
    matches.push(db.friends[idx]);
    idx = difs.indexOf(min, idx + 1);
  }
  return res.json({ friends: matches });
});
module.exports = apiRouter;
