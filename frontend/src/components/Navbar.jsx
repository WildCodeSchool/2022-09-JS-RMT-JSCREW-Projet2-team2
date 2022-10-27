import React from "react";
import "./navbar.css";

function Navbar({ setPage }) {
  return (
    <div>
      {/* NAVBAR - MOBILE */}
      <div className="navbar-mobile">
        <nav className="p-3">
          <ul className="list-unstyled d-flex justify-content-around m-0">
            <button
              onClick={() => setPage("Home")}
              className="border border-0 bg-transparent"
              type="button"
            >
              <img
                className="navbar-icon"
                src="./src/assets/logo-black.png"
                alt="logo-icon"
              />
            </button>
            <button
              onClick={() => setPage("AllProduct")}
              className="border border-0 bg-transparent"
              type="button"
            >
              <img
                className="navbar-icon"
                src="./src/assets/store-black.png"
                alt="store-icon"
              />
            </button>
            <button className="border border-0 bg-transparent" type="button">
              <img
                className="navbar-icon"
                src="./src/assets/search-black.png"
                alt="search-icon"
              />
            </button>
            <button className="border border-0 bg-transparent" type="button">
              <img
                className="navbar-icon"
                src="./src/assets/basket-black.png"
                alt="basket-icon"
              />
            </button>
          </ul>
        </nav>
      </div>
      {/* NAVBAR - DESKTOP */}
      <div className="navbar-test">
        <h1>Test contenu</h1>
      </div>
      <div className="navbar-desktop">
        <nav className="p-3">
          <ul className="list-unstyled d-flex justify-content-between m-0">
            <button
              onClick={() => setPage("Home")}
              className="border border-0 bg-transparent"
              type="button"
            >
              <img
                className="navbar-icon"
                src="./src/assets/logo.png"
                alt="logo-icon"
              />
            </button>
            <button
              onClick={() => setPage("AllProduct")}
              className="border border-0 bg-transparent"
              type="button"
            >
              <div className="navbar-desktop-store-icon d-flex">
                <p className="m-0 me-2 fs-6">Store</p>
                <img
                  className="navbar-icon"
                  src="./src/assets/store-orange.png"
                  alt="store-icon"
                />
              </div>
            </button>
            <div className="navbar-desktop-right-icon d-flex">
              <button className="border border-0 bg-transparent" type="button">
                <img
                  className="navbar-icon"
                  src="./src/assets/search-orange.png"
                  alt="search-icon"
                />
              </button>
              <button className="border border-0 bg-transparent" type="button">
                <img
                  className="navbar-icon"
                  src="./src/assets/basket-orange.png"
                  alt="basket-icon"
                />
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
