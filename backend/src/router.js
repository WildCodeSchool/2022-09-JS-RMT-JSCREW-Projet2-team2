const express = require("express");

const router = express.Router();

const pokemons = require("./data/pokemons");

router.get("/pokebiz", (req, res) => {
  res.json(pokemons);
});

module.exports = router;
