const express = require("express");

const router = express.Router();

const pokemons = require("./data/pokemons");

router.get("/pokebiz", (req, res) => {
  res.json(pokemons);
});

const getPokemonsId = (req, res) => {
  const poke = pokemons.find(
    (pokemon) => pokemon.pokedex_index === parseInt(req.params.id, 10)
  );
  if (poke !== null) {
    res.json(poke);
  } else {
    res.status(404).send("no found");
  }
};
router.get("/pokebiz/:id", getPokemonsId);

module.exports = router;
