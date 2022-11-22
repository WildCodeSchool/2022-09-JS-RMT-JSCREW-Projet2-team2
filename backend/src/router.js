const express = require("express");

const { connection } = require("./db");

const router = express.Router();

router.get("/pokeBiz", (req, res) => {
  connection
    .query("SELECT * FROM pokemon")
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/pokeBiz/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  connection
    .query("SELECT * FROM pokemon WHERE id = ?", [id])
    .then(([response]) => {
      res.status(200).send(response[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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

router.get("/Basket", (req, res) => {
  connection
    .query("SELECT * FROM pokemon WHERE id IN (?)", [
      req.query.idList.split("|"),
    ])
    .then(([response]) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
