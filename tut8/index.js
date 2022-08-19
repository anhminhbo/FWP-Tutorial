const express = require("express");
const app = express();

const greeting = require("./greeting");
const nameMiddleware = require("./nameMiddleware");
app.get("/", function (req, res) {
  res.send("Hello from express");
});

app.get(
  "/teacher",
  nameMiddleware.thanhName,
  nameMiddleware.personality,
  function (req, res) {
    res.send("hello " + req.name + " " + req.personality + " from middlewares");
  }
);

app.listen(3000, () => {
  console.log("server starting on port 3000");
});
