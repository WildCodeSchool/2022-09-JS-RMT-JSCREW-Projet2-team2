import AddQuantity from "@components/AddQuantity";
import React, { useState } from "react";
import TemplateCard from "../components/TemplateCard";
import "./oneProduct.css";

function OneProduct() {
  // Création du state pour enregistrer la quantité souaihtée.
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-around text-dark pt-2 bg-container">
      <h1>Product</h1>
      <TemplateCard />
      <div className="oneProduct-postCard-element mt-5 d-flex align-items-center justify-content-around">
        <div>{/* Mettre le prix en dynamique avec les props reçues */}</div>
        <div className="w-25">
          {/* Envoie du state dans le composant */}
          <AddQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className="w-50">
          {/* Mettre le composant Add to cart (il s'agirat d'un bouton type submit) */}
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
