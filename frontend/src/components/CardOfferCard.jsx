import React, { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";

export default function CardOfferCard({ carrouselprops }) {
  const n = Math.floor(Math.random() * 51);

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/pokeBiz/${n}`)
      .then((res) => res.json())
      .then((json) => setPokemon(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {pokemon && (
        <label
          className="cardOffer position-absolute m-auto"
          htmlFor={carrouselprops.htmlFor}
          id={carrouselprops.id}
        >
          <TemplateCard pokemon={pokemon} />
          <br />
          <br />
          <form action="">
            <div className="priceOffer d-flex justify-content-around">
              <div>
                <h3 className="oldPrice text-decoration-line-through">
                  {pokemon.price}£
                </h3>
              </div>
              <div>
                <h3 className="text-white">{pokemon.price / 2}£</h3>
              </div>
              <div>
                <button className="btn btn-sm btn-warning" type="button">
                  Add Card
                </button>
              </div>
            </div>
          </form>
        </label>
      )}
    </div>
  );
}
