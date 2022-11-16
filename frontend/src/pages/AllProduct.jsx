import React, { useState } from "react";
import TemplateCard from "@components/TemplateCard";
import ShowMoreCard from "@components/ShowMoreCard";
import TemplateFilter from "@components/TemplateFilter";

import "./allProducts.css";

import pokemons from "@services/data";

const types = [
  { name: "fire", checked: true },
  { name: "normal", checked: false },
  { name: "flying", checked: false },
  { name: "grass", checked: true },
  { name: "poison", checked: false },
  { name: "bug", checked: false },
  { name: "electric", checked: false },
  { name: "ground", checked: false },
  { name: "fairy", checked: true },
];

function AllProduct({ setPage }) {
  const [numberOfCard, setNumberOfCard] = useState(0);
  const [filterTypes, setFilterTypes] = useState(types);

  const handleCheck = (type) => {
    const newFilterType = [...filterTypes];
    const index = newFilterType.indexOf(type);
    newFilterType[index].checked = !newFilterType[index].checked;
    setFilterTypes(newFilterType);
  };

  return (
    <section>
      <div>AllProduct</div>

      <TemplateFilter handleCheck={handleCheck} filterTypes={filterTypes} />
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap">
        {pokemons.slice(0, numberOfCard + 8).map((pokemon) => {
          return (
            <button
              className="bg-transparent allproduct-card-container"
              type="button"
              onClick={() =>
                setPage({ path: "OneProduct", id: pokemon.pokedex_index })
              }
            >
              <TemplateCard key={pokemon.id} pokemon={pokemon} />
            </button>
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
