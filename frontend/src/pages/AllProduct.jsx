import React from "react";
import AllTemplateCard from "@components/AllTemplateCard";
import pokemons from "@services/data";

function AllProduct() {
  <div>
    <h1 className="contain-title">All Product</h1>
  </div>;
  return (
    <div className="container-fluid bg-container">
      {pokemons.map((pokemon) => {
        return <AllTemplateCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default AllProduct;
