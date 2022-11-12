import React, { useState } from "react";
import SearchBar from "@components/SearchBar";
import "./navbar.css";

function Navbar({ setPage, pokemons }) {
  const [displaySearchBar, setDisplaySearchBar] = useState("d-none");
  const handleSearchBarDisplay = () => {
    if (displaySearchBar === "d-none") {
      setDisplaySearchBar("d-block");
    } else if (displaySearchBar === "d-block") {
      setDisplaySearchBar("d-none");
    }
  };
  return (
    <div>
      {/* SEARCH BAR MOBILE */}
      <div className={displaySearchBar}>
        <SearchBar pokemons={pokemons} />
      </div>
      <div>
        {/* NAVBAR - MOBILE */}
        <div className="navbar-mobile fixed-bottom container-md d-md-none">
          <nav className="p-3">
            <ul className="list-unstyled d-flex justify-content-around m-0">
              {/* LOGO */}
              <button
                onClick={() => setPage({ path: "", id: null })}
                className="border border-0 bg-transparent"
                type="button"
              >
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/logo-black.png"
                  alt="logo-icon"
                />
              </button>
              {/* ALL PRODUCT BUTTON */}
              <button
                onClick={() => setPage({ path: "AllProduct", id: null })}
                className="border border-0 bg-transparent"
                type="button"
              >
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/cards.png"
                  alt="store-icon"
                />
              </button>
              {/* SEARCH BUTTON */}
              <button
                onClick={handleSearchBarDisplay}
                className="border border-0 bg-transparent"
                type="button"
              >
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/search-black.png"
                  alt="search-icon"
                />
              </button>
              {/* BASKET BUTTON */}
              <button className="border border-0 bg-transparent" type="button">
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/basket-black.png"
                  alt="basket-icon"
                />
              </button>
            </ul>
          </nav>
        </div>
        {/* ------ NAVBAR DESKTOP ------- */}
        <div className="navbar-desktop fixed-top d-none d-md-block container-fluid">
          <nav className="p-3">
            <ul className="list-unstyled d-flex justify-content-between m-0">
              {/* LOGO */}
              <button
                onClick={() => setPage({ path: "", id: null })}
                className="navbar-button border border-0 bg-transparent"
                type="button"
              >
                <div className="d-flex">
                  <img
                    className="navbar-icon"
                    src="./src/assets/navbar-icons/logo.png"
                    alt="logo-icon"
                  />
                  <h2 className="ms-2">Pokebiz</h2>
                </div>
              </button>
              {/* ALL PRODUCTS BUTTON */}
              <button
                onClick={() => setPage({ path: "AllProduct", id: null })}
                className="border border-0 bg-transparent"
                type="button"
              >
                <div className="navbar-desktop-store-icon d-flex align-items-center">
                  <img
                    className="navbar-icon"
                    src="./src/assets/navbar-icons/cards-orange.png"
                    alt="store-icon"
                  />
                  <p className="m-0 ms-2 fs-6">Our cards</p>
                </div>
              </button>
              <div className="navbar-desktop-right-icon d-flex justify-content-around">
                {/* SEARCH BAR */}
                <form action="">
                  <label className="d-flex bg-dark rounded-3 px-3 py-1">
                    <input
                      className="pokebiz-seachBar-Desktop text-white"
                      type="text"
                      placeholder="Find your Pokemon"
                    />
                    <button
                      className="border border-0 bg-transparent"
                      type="submit"
                    >
                      <img
                        className="navbar-icon"
                        src="./src/assets/navbar-icons/search-orange.png"
                        alt="search-icon"
                      />
                    </button>
                  </label>
                </form>
                {/* BASKET BUTTON */}
                <button
                  className="border border-0 bg-transparent"
                  type="button"
                >
                  <img
                    className="navbar-icon ms-4"
                    src="./src/assets/navbar-icons/basket-orange.png"
                    alt="basket-icon"
                  />
                </button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
