import React, { useState } from "react";
import TemplateCard from "@components/TemplateCard";
import ShowMoreCard from "@components/ShowMoreCard";
import "./allProducts.css";
import pokemons from "@services/data";

function AllProduct() {
  const [numberOfCard, setNumberOfCard] = useState(0);

  return (
    <section>
      <div>AllProduct</div>
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap">
        {pokemons.slice(0, numberOfCard + 8).map((pokemon) => {
          return (
            <div className="allproduct-card-container">
              <TemplateCard key={pokemon.id} pokemon={pokemon} />;
            </div>
          );
        })}
      </div>
      <ShowMoreCard
        numberOfCard={numberOfCard}
        setNumberOfCard={setNumberOfCard}
        pokemons={pokemons}
      />
    </section>
  );
}

export default AllProduct;
