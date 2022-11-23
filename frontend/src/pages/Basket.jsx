import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import TemplateCard from "@components/TemplateCard";
import AddQuantity from "@components/AddQuantity";

export default function Basket({ basket, handleQuantity, deleteFromBasket }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (basket[0]) {
      fetch(
        `http://localhost:5000/Basket${
          basket[0] ? `?idList=${basket.map((el) => el.id).join("|")}` : ""
        }`
      )
        .then((res) => res.json())
        .then((data) => setPokemons(data))
        .catch((err) => console.error(err));
    }
  }, [basket]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <meta name="description" content="Basket for buy epic pokemon card" />
      </Helmet>
      <div className="oneProductPage container-fluid d-flex align-items-center justify-content-around text-dark pt-5 bg-container">
        <button className="btn btn-sm btn-warning" type="button">
          Order Now
        </button>
        <h3 className="text-white d-flex justify-content-around">
          Total :{" "}
          {pokemons[0] &&
            parseFloat(
              pokemons.reduce((total, prix) => total + prix.pokemonPrice, 0)
            )}
          £{/* permet l'ajout du prix de chaque carte au total */}
        </h3>
      </div>
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap">
        {pokemons.map((pokemon) => (
          <div className="allproduct-card-container">
            <TemplateCard key={pokemon.id} pokemon={pokemon} />
            <div className="oneProduct-postCard-element my-5 d-flex align-items-center justify-content-around">
              <h3 className="priceStyle">{pokemon.pokemonPrice} £</h3>
              <div className="addQuantityButton">
                {/* Envoie du state dans le composant */}
                <AddQuantity
                  pokemon={basket.find((el) => el.id === pokemon.id)}
                  handleQuantity={handleQuantity}
                />
              </div>
              <button
                className="btn btn-sm btn-warning d-flex align-items-center"
                onClick={() =>
                  deleteFromBasket(basket.find((el) => el.id === pokemon.id))
                }
                type="button"
              >
                <img
                  className="logoSocialMedia"
                  src="./src/assets/iconsBasket/supprimer.png"
                  alt="Icone poubelle"
                />
                <h3>Delete</h3>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
