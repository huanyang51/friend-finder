function apiRoutes(app, db) {
  app.get("/api/friends", (req, res) => {
    res.json(db.friends);
  });
  app.post("/api/friends", (req, res) => {
    res.json(db.friends);
  });
}
module.exports = { apiRoutes };
