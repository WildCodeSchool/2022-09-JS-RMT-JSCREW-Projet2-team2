import React, { useState } from "react";
import AddQuantity from "@components/AddQuantity";
import "./oneProduct.css";
import AddToCartButton from "@components/AddToCartButton";
import ProgressBar from "@components/ProgressBar";
import AddFavorite from "@components/AddFavorite";
import TemplateCard from "../components/TemplateCard";

function OneProduct({ pokemon }) {
  // Création du state pour enregistrer la quantité souaihtée.
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="oneProductPage container-fluid d-flex flex-column align-items-center justify-content-around text-dark pt-5 bg-container">
      <h1 className="text-white pb-2 text-capitalize">{pokemon.name} card</h1>
      <div className="allproduct-card-container">
        <TemplateCard pokemon={pokemon} />
      </div>
      <div className="mt-3 d-flex">
        <AddFavorite />
      </div>
      <div>
        <ProgressBar pokemon={pokemon} />
      </div>
      <div className="oneProduct-postCard-element my-5 d-flex align-items-center justify-content-around">
        <div className="pokemonPrice">
          {/* Mettre le prix en dynamique avec les props reçues */}
          <h3 className="priceStyle">{pokemon.price} £</h3>
        </div>
        <div className="addQuantityButton">
          {/* Envoie du state dans le composant */}
          <AddQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className="addToCartButton">
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
