import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateCard from "@components/TemplateCard";
import ShowMoreCard from "@components/ShowMoreCard";
import TemplateFilter from "@components/TemplateFilter";


import "./allProducts.css";

import pokemons from "@services/data";
import AddToCartButton from "@components/AddToCartButton";
import AddFavorite from "@components/AddFavorite";

const types = [
  { name: "fire", checked: false },
  { name: "normal", checked: false },
  { name: "flying", checked: false },
  { name: "water", checked: false },
  { name: "grass", checked: false },
  { name: "poison", checked: false },
  { name: "bug", checked: false },
  { name: "electric", checked: false },
  { name: "ground", checked: false },
  { name: "fairy", checked: false },
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

  const getSelected = () => {
    if (filterTypes.every((filter) => !filter.checked)) return pokemons;
    return pokemons.filter((pokemon) => {
      const el = filterTypes.find(
        (type) => type.name === pokemon.type.primary_type
      );
      return el.checked;
    });
  };

  return (
    <section className="pokebiz-allProduct-container">
      <h1 className="py-3 m-0">Our cards</h1>
      <TemplateFilter handleCheck={handleCheck} filterTypes={filterTypes} />
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap py-3">
        {getSelected(pokemons)
          .slice(0, numberOfCard + 6)
          .map((pokemon) => {
            return (
              <div>
                <Link to={`/AllProducts/${pokemon.pokedex_index}`}>
                  <button
                    onClick={() =>
                      setPage({
                        path: "OneProduct",
                        id: pokemon.pokedex_index - 1,
                      })
                    }
                    className="bg-transparent allproduct-card-container"
                    type="button"
                  >
                    <TemplateCard key={pokemon.id} pokemon={pokemon} />
                  </button>
                </Link>
                <div className="d-flex align-items-center justify-content-around mt-3 mb-5">
                  <div className="pokemonPrice">
                    {/* Mettre le prix en dynamique avec les props reçues */}
                    <h3 className="priceStyle">{pokemon.price} £</h3>
                  </div>
                  <AddToCartButton />
                  <AddFavorite />
                </div>
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
