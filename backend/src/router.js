const express = require("express");

const router = express.Router();

router.get("/pokemon", (req, res) => {
  res.send("Hello team 2 !");
});
module.exports = router;
