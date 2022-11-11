import React from "react";

function SearchBar() {
  return (
    <div className="pokebiz-searchBar-mobile d-flex flex-column justify-content-center bg-dark">
      <form
        className="d-flex justify-content-center align-items-center"
        action=""
      >
        <input
          className="p-3 border border-4 border-end-0 border-white text-white rounded-start fs-1"
          placeholder="Search your Pokemon"
          type="text"
        />
        <button className="px-3 rounded-end fs-1" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
