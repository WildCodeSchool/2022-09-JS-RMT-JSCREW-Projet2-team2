import React, { useState } from "react";

function SearchBar({ pokemons }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="pokebiz-searchBar-mobile d-flex flex-column justify-content-center bg-dark d-md-none overflow-auto">
      <form
        className="d-flex justify-content-center align-items-center"
        action=""
      >
        <div>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            className="p-3 border border-4 border-end-0 border-white text-white rounded-start fs-1 w-75"
            placeholder="Find your Pokemon"
            type="text"
            id="pokemons"
          />
          <button className="px-3 rounded-end fs-1" type="submit">
            Go!
          </button>
        </div>
      </form>
      <div
        className={
          !searchValue ? "d-none" : "d-flex flex-wrap container-fluid h-50 mt-3"
        }
      >
        <ul className="p-0 m-0 container-fluid">
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(searchValue)
            )
            .map((pokemon) => {
              return (
                <button
                  id="pokebiz-searchBar-value"
                  type="button"
                  className="text-white list-unstyled bg-transparent border m-2 w-25"
                >
                  {pokemon.name}
                </button>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
