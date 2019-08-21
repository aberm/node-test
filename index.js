const express = require("express");
const app = express();

const routes = require("./routes");

app.use("/", routes());

app.use(express.static("public"));

app.get("/hello", (req, res) => {
  return res.send("Hello World\n");
});

app.get("/404", (req, res) => {
  return res.status(404).end();
});

app.get("/hi", (req, res) => {
  return req.query.name
    ? res.send(`Hi, ${req.query.name}!`)
    : res.send(new Date().toString());
});

app.get("/hi/:name", (req, res) => {
  return res.send(`Hi, ${req.params.name}!`);
});

app.listen(8080);

module.export = app;
