import AddQuantity from "@components/AddQuantity";
import React from "react";
import TemplateCard from "../components/TemplateCard";
import "./oneProduct.css";

function OneProduct({ pokemon }) {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-around text-dark pt-2 bg-container">
      <h1>Product</h1>
      <TemplateCard pokemon={pokemon} />
      <div className="oneProduct-postCard-element d-flex align-items-center justify-content-around">
        <div>
          <p>10$</p>
        </div>
        <div className="w-25">
          <AddQuantity />
        </div>
        <div className="w-50">
          <button className="p-1" type="button">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
