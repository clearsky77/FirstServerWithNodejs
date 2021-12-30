const express = require("express");
const { nextTick } = require("process");
const server = express();

server.use(express.static(__dirname + "/public")); // 경로를 찾을 때 모두 여기서 찾는다.

/*
server.use((req, res, next) => {
  console.log("Hi from client");
  req.user = { name: "냐" };
  next();
});
*/

server.get("/", (req, res) => {
  // console.log(req.user);
  res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

server.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});
