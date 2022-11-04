import React from "react";
import "./navbar.css";

function Navbar({ setPage }) {
  return (
    <div>
      {/* NAVBAR - MOBILE */}
      <div className="navbar-mobile fixed-bottom container-md d-md-none">
        <nav className="p-3">
          <ul className="list-unstyled d-flex justify-content-around m-0">
            <button
              onClick={() => setPage("Home")}
              className="border border-0 bg-transparent"
              type="button"
            >
              <img
                className="navbar-icon"
                src="./src/assets/navbar-icons/logo-black.png"
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
                src="./src/assets/navbar-icons/cards.png"
                alt="store-icon"
              />
            </button>
            <button className="border border-0 bg-transparent" type="button">
              <img
                className="navbar-icon"
                src="./src/assets/navbar-icons/search-black.png"
                alt="search-icon"
              />
            </button>
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
      {/* NAVBAR - DESKTOP */}
      <div className="navbar-desktop fixed-top d-none d-md-block container-fluid">
        <nav className="p-3">
          <ul className="list-unstyled d-flex justify-content-between m-0">
            <button
              onClick={() => setPage("Home")}
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
            <button
              onClick={() => setPage("AllProduct")}
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
              <button className="border border-0 bg-transparent" type="button">
                <img
                  className="navbar-icon me-4"
                  src="./src/assets/navbar-icons/search-orange.png"
                  alt="search-icon"
                />
              </button>
              <button className="border border-0 bg-transparent" type="button">
                <img
                  className="navbar-icon"
                  src="./src/assets/navbar-icons/basket-orange.png"
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
