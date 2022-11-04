import React from "react";
import TemplateCard from "../components/TemplateCard";

function OneProduct({ pokemon }) {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-around text-dark pt-2 bg-container">
      <h1>Product</h1>
      <TemplateCard pokemon={pokemon} />
    </div>
  );
}

export default OneProduct;
