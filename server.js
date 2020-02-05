var express = require("express");
var path = require("path");
var app = express();

var { htmlRoutes } = require("./app/routing/htmlRoutes");
var { apiRoutes } = require("./app/routing/apiRoutes");
var { db } = require("./app/data/friends");
console.log(db.friends);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
htmlRoutes(app, path);
apiRoutes(app, db);
app.listen(3005, () => console.log("[starting server] localhost:3005"));
