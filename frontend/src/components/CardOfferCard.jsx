import React, { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";
import AddToCartButton from "./AddToCartButton";
import AddQuantity from "./AddQuantity";

export default function CardOfferCard({
  carrouselprops,
  addBasket,
  handleQuantity,
}) {
  const n = Math.floor(Math.random() * 51);

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/pokeBiz`)
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
          <TemplateCard pokemon={pokemon[n]} />
          <br />
          <br />
          <form action="">
            <div className="priceOffer d-flex justify-content-around">
              <div>
                <h3 className="oldPrice text-decoration-line-through">
                  {pokemon[n].pokemonPrice}£
                </h3>
              </div>
              <div>
                <h3 className="priceStyle">{pokemon[n].pokemonPrice / 2}£</h3>
              </div>
              <div>
                {pokemon ? (
                  <div>
                    <AddToCartButton addBasket={addBasket} pokemon={pokemon} />
                  </div>
                ) : (
                  <div className="addQuantityButton">
                    {/* Envoie du state dans le composant */}
                    <AddQuantity
                      pokemon={pokemon.find((el) => el.id === pokemon.id)}
                      handleQuantity={handleQuantity}
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
        </label>
      )}
    </div>
  );
}
