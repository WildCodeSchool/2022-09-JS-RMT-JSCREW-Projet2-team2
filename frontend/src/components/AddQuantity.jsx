import React from "react";
import "./addQuantity.css";

function AddQuantity({ quantity, setQuantity }) {
  // Création d'un fonction pour gérer la quantité souhaitée au clic sur "plus" ou "moins".
  // La fonction a besoin d'un "opérateur" en argument au moment de l'appel, pour identifier le bouton cliqué.
  const handleQuantityOnClick = (operator) => {
    if (operator === "plus") {
      setQuantity(quantity + 1);
    }
    if (operator === "minus") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className="addQuantityButton d-flex justify-content-around rounded-3 w-100 px-2 py-1">
      <button
        onClick={() => handleQuantityOnClick("minus")}
        className="bg-transparent text-white"
        type="button"
      >
        -
      </button>
      <input
        onChange={(e) => setQuantity(e.target.value)}
        type="text"
        className="bg-transparent text-white text-center w-100"
        value={quantity}
      />
      <button
        onClick={() => handleQuantityOnClick("plus")}
        className="bg-transparent text-white"
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default AddQuantity;
