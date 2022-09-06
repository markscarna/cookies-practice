import express from "express";
import cookieParser from "cookie-parser";

const port = 8080;
const app = express();
// var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/login", function (req, res) {
  var opts = {
    maxAge: 900000,
    httpOnly: true,
    secure: true,
  };
  res.cookie("name", "Mark", opts);
  res.end();
  //   console.log("Cookies: ", req.cookies);
});

app.get("/hello", (req, res) => {
  res.status(200).send(`hello ${req.cookies.name}`);
});

app.listen(port, () => console.log(`express listening at port: ${port}`));
