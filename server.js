var express = require("express");
var app = express();

const morgan = require("morgan");
var PORT = 8080;
var { db } = require("./app/data/friends");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(require("./app/routing/htmlRoutes"));
app.use("/api", require("./app/routing/apiRoutes"));
app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
