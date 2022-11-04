import React, { useState } from "react";
import AllTemplateCard from "@components/AllTemplateCard";
import ShowMoreCard from "@components/ShowMoreCard";
import pokemons from "@services/data";

function AllProduct() {
  const [numberOfCard, setNumberOfCard] = useState(0);

  return (
    <section>
      <div>AllProduct</div>
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap">
        {pokemons.slice(0, numberOfCard + 8).map((pokemon) => {
          return <AllTemplateCard key={pokemon.id} pokemon={pokemon} />;
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
