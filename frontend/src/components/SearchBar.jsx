import React from "react";

function SearchBar() {
  return (
    <div className="pokebiz-searchBar-mobile d-flex flex-column justify-content-center bg-dark">
      <form className="d-flex justify-content-center" action="">
        <input
          className="p-3 w-75 border border-4 border-white text-white rounded-3 fs-1"
          placeholder="Search your Pokemon"
          type="text"
        />
      </form>
    </div>
  );
}

export default SearchBar;
