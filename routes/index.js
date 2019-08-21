const express = require("express");
const router = express.Router();

const articlesRoute = require("./articles");

module.exports = () => {
  router.get("/", (req, res) => {
    return res.send("Index");
  });

  router.use("/articles", articlesRoute());

  return router;
};
