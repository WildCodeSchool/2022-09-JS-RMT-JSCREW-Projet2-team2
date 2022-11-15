import React from "react";
// Composant à appeller dans OneProduct et dans le "map" de AllProduct avec le composant TemplateCard
function AddToCartButton({
  setPokemonToCart,
  pokemonToCart,
  quantity,
  setQuantity,
  pokemon,
}) {
  const addPokemonToCart = () => {
    if (pokemonToCart === "") {
      setPokemonToCart(pokemon);
    }
    if (pokemonToCart === pokemon) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div>
      <button
        onClick={addPokemonToCart}
        className="buttonColor p-2 fs-4 btn-warning"
        type="button"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartButton;
