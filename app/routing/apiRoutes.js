app.get("/api/friends", (req, res) => {
  res.json(db.reservations);
});
app.post("/api/friends", (req, res) => {
  res.json(db.reservations);
});
