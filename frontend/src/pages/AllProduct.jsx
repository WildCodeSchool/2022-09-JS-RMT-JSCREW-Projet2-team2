import React from "react";
import TemplateCard from "@components/TemplateCard";
import pokemons from "@services/data";

function AllProduct() {
  <div>
    <h1 className="contain-title">All Product</h1>
  </div>;
  return (
    <div className="container-fluid bg-container">
      {pokemons.map((pokemon) => {
        return <TemplateCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default AllProduct;
