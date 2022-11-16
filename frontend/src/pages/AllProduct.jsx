import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateCard from "@components/TemplateCard";
import ShowMoreCard from "@components/ShowMoreCard";
import TemplateSearch from "@components/TemplateSearch";

import "./allProducts.css";

import pokemons from "@services/data";

function AllProduct({ setPage }) {
  const [numberOfCard, setNumberOfCard] = useState(0);

  return (
    <section>
      <div>AllProduct</div>
      <TemplateSearch />
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap">
        {pokemons.slice(0, numberOfCard + 8).map((pokemon) => {
          return (
            <Link to={`/AllProducts/${pokemon.pokedex_index}`}>
              <button
                onClick={() =>
                  setPage({ path: "OneProduct", id: pokemon.pokedex_index - 1 })
                }
                className="bg-transparent allproduct-card-container"
                type="button"
              >
                <TemplateCard key={pokemon.id} pokemon={pokemon} />
              </button>
            </Link>
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
