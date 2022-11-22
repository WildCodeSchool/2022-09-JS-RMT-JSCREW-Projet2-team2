import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TemplateCard from "@components/TemplateCard";
import ShowMoreCard from "@components/ShowMoreCard";
import TemplateFilter from "@components/TemplateFilter";

import "./allProducts.css";

const types = [
  { name: "fire", checked: true },
  { name: "normal", checked: false },
  { name: "flying", checked: false },
  { name: "water", checked: false },
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

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pokeBiz`)
      .then((res) => res.json())
      .then((json) => setPokemons(json))
      .catch((err) => console.error(err));
  }, []);

  const handleCheck = (type) => {
    const newFilterType = [...filterTypes];
    const index = newFilterType.indexOf(type);
    newFilterType[index].checked = !newFilterType[index].checked;
    setFilterTypes(newFilterType);
  };

  const getSelected = () => {
    if (filterTypes.every((filter) => !filter.checked)) return pokemons;
    return pokemons.filter((pokemon) => {
      const el = filterTypes.find((type) => type.name === pokemon.primaryType);
      return el.checked;
    });
  };
  return (
    <section>
      <div>AllProduct</div>

      <TemplateFilter handleCheck={handleCheck} filterTypes={filterTypes} />
      <div className="container-fluid bg-container d-flex justify-content-center flex-wrap">
        {getSelected(pokemons)
          .slice(0, numberOfCard + 8)
          .map((pokemon) => {
            return (
              <Link to={`/AllProducts/${pokemon.id}`}>
                <button
                  onClick={() =>
                    setPage({
                      path: "OneProduct",
                      id: pokemon.id - 1,
                    })
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
