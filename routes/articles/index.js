const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    return res.send("All articles");
  });

  router.get("/:name", (req, res) => {
    return res.send(`Showing article ${req.params.name}`);
  });

  return router;
};
