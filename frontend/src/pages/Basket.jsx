import React, { useState, useEffect } from "react";

import TemplateCard from "@components/TemplateCard";

export default function Basket({ basket }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/Basket${
        basket[0] ? `?idList=${basket.map((el) => el.id).join("|")}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="oneProductPage container-fluid d-flex align-items-center justify-content-around text-dark pt-5 bg-container">
        <button className="btn btn-sm btn-warning" type="button">
          Order Now
        </button>
        <h3 className="text-white d-flex justify-content-around">
          Total : £{/* permet l'ajout du prix de chaque carte au total */}
        </h3>
      </div>
      <div>
        {pokemons.map((pokemon) => (
          <TemplateCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
