import React from "react";

function ShowMoreCard({ numberOfCard, setNumberOfCard, pokemons }) {
  return (
    <div className="d-block justify-content-center">
      <button
        type="button"
        onClick={() => setNumberOfCard(numberOfCard + 6)}
        className="btn btn-warning mb-3 mt-3"
      >
        {numberOfCard >= pokemons.length ? "plus de carte " : "+ de cartes"}
      </button>
    </div>
  );
}

export default ShowMoreCard;
